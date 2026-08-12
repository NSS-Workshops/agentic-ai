#!/usr/bin/env bash

# Agentic AI workshop setup script.
# Safe to re-run any time: curl -fsSL https://nss-workshops.github.io/agentic-ai/setup.sh | bash

set -uo pipefail

#######################################
# Colors / formatting
#######################################
BOLD="$(tput bold 2>/dev/null || true)"
RESET="$(tput sgr0 2>/dev/null || true)"
GREEN="$(tput setaf 2 2>/dev/null || true)"
YELLOW="$(tput setaf 3 2>/dev/null || true)"
RED="$(tput setaf 1 2>/dev/null || true)"
BLUE="$(tput setaf 4 2>/dev/null || true)"

#######################################
# Output helpers
#######################################
step()  { echo; printf '%s%s>%s %s\n' "$BOLD" "$BLUE" "$RESET" "$1"; }
ok()    { printf '%s==>%s %s\n' "$GREEN" "$RESET" "$*"; }
warn()  { printf '%s==>%s %s\n' "$YELLOW" "$RESET" "$*"; }
fail()  { printf '%s==>%s %s\n' "$RED" "$RESET" "$*"; }
section_done() { printf '%s%s✓ %s complete%s\n' "$GREEN" "$BOLD" "$1" "$RESET"; }

have_cmd() { command -v "$1" >/dev/null 2>&1; }

# ask <prompt> <varname>
#
# Prompts and reads a line into <varname>. When this script is itself being
# fed to bash through a pipe (curl ... | bash), stdin IS the script source,
# not the terminal — a plain `read` would consume the rest of the script as
# "input" instead of waiting for the student to type something. This reads
# from /dev/tty instead whenever stdin isn't already an interactive terminal.
ask() {
  local prompt="$1"
  local varname="$2"

  if [ -t 0 ]; then
    read -r -p "$prompt" "$varname"
    return
  fi

  if [ -e /dev/tty ]; then
    printf '%s' "$prompt" > /dev/tty
    if read -r "$varname" < /dev/tty; then
      return
    fi
  fi

  fail "This script needs to prompt you for input, but no terminal is available here."
  printf '  Run it in a normal interactive terminal, e.g.:\n'
  printf '    curl -fsSL https://nss-workshops.github.io/agentic-ai/setup.sh | bash\n'
  exit 1
}

# run_interactively <command...>
#
# Runs a command that needs its own real terminal (e.g. `gh auth login`'s
# menus), redirecting its stdin from /dev/tty when this script's stdin is a
# pipe (curl ... | bash) rather than an interactive terminal.
run_interactively() {
  if [ -t 0 ]; then
    "$@"
  else
    "$@" < /dev/tty
  fi
}

# Returns 0 if version $1 >= $2 (dotted-number version comparison)
version_ge() {
  [ "$(printf '%s\n' "$1" "$2" | sort -V | head -n1)" = "$2" ]
}

# require_tool <human-name> <check-command> <instruction-line> [<instruction-line> ...]
#
# Runs <check-command>. If it fails, prints the instructions and waits for the
# student to install the tool, re-checking each time they press Enter, until
# it passes. Never exits the script on a missing tool.
require_tool() {
  local name="$1"
  local check_cmd="$2"
  shift 2
  local instructions=("$@")

  if eval "$check_cmd" >/dev/null 2>&1; then
    ok "$name found."
    return 0
  fi

  warn "$name not found."
  printf '\n'
  if [ "${#instructions[@]}" -gt 0 ]; then
    for line in "${instructions[@]}"; do
      printf '  %s\n' "$line"
    done
  fi
  printf '\n'

  while true; do
    ask "Press Enter once $name is installed: " reply
    hash -r 2>/dev/null || true
    if eval "$check_cmd" >/dev/null 2>&1; then
      ok "$name found."
      return 0
    fi
    fail "Still can't find $name. Let's try again."
  done
}

# auto_install_or_wait <human-name> <check-command> <install-command-or-empty> <instruction-line> [...]
#
# If <check-command> already passes, does nothing. Otherwise, if an
# <install-command> was given, tells the user it's installing automatically,
# runs it, and rechecks. Either way, falls back to require_tool's manual
# wait-and-recheck loop if the tool still isn't found.
auto_install_or_wait() {
  local name="$1"
  local check_cmd="$2"
  local install_cmd="$3"
  shift 3

  if [ -n "$install_cmd" ] && ! eval "$check_cmd" >/dev/null 2>&1; then
    warn "$name not found. Attempting to install it automatically..."
    eval "$install_cmd" < /dev/null || true
    hash -r 2>/dev/null || true
  fi

  require_tool "$name" "$check_cmd" "$@"
}

#######################################
# Platform detection (this course's tooling is built for macOS or WSL)
#######################################
OS_FAMILY=""

detect_platform() {
  step "Detecting your platform"

  local uname_s
  uname_s="$(uname -s 2>/dev/null || echo unknown)"

  case "$uname_s" in
    Darwin)
      OS_FAMILY="macOS"
      ok "Detected macOS."
      ;;
    Linux)
      if grep -qi microsoft /proc/version 2>/dev/null || [ -n "${WSL_DISTRO_NAME:-}" ]; then
        OS_FAMILY="WSL"
        ok "Detected WSL (Windows Subsystem for Linux)."
      else
        OS_FAMILY="Linux"
        warn "Detected plain Linux. This course is built for macOS and Ubuntu on WSL; Linux should mostly work but isn't officially covered."
      fi
      ;;
    *)
      OS_FAMILY="unknown"
      warn "Couldn't confidently detect macOS or WSL (uname reported '$uname_s')."
      ;;
  esac

  if [ -n "${WINDIR:-}" ] || [ -n "${SystemRoot:-}" ]; then
    fail "This looks like a Windows-native shell (PowerShell, CMD, or Git Bash), not WSL."
    printf '\n  This isn'"'"'t something this script can fix from here — it has to run inside WSL.\n\n'
    printf '  1. Install WSL: https://learn.microsoft.com/windows/wsl/install\n'
    printf '  2. Open your WSL distro (search "Ubuntu" in the Start menu)\n'
    printf '  3. Re-run this command from inside that WSL terminal:\n\n'
    printf '     curl -fsSL https://nss-workshops.github.io/agentic-ai/setup.sh | bash\n\n'
    exit 1
  fi

  section_done "Platform detection"
}

#######################################
# GitHub identity
#######################################
GH_USERNAME=""

collect_github_username() {
  step "Please enter your github username "

  local username_re='^[A-Za-z0-9]([A-Za-z0-9-]{0,37}[A-Za-z0-9])?$'

  while true; do
    ask "Please enter your GitHub username (no @): " GH_USERNAME

    if [ -z "$GH_USERNAME" ]; then
      warn "GitHub username can't be blank."
      continue
    fi

    if ! [[ "$GH_USERNAME" =~ $username_re ]]; then
      warn "\"$GH_USERNAME\" doesn't look like a valid GitHub username (letters, digits, and single hyphens only — can't start or end with one)."
      continue
    fi

    local http_code
    http_code="$(curl -s -o /dev/null -w '%{http_code}' --max-time 10 "https://api.github.com/users/$GH_USERNAME" < /dev/null)"

    case "$http_code" in
      200)
        ok "Found GitHub user: $GH_USERNAME"
        break
        ;;
      404)
        fail "GitHub has no user named \"$GH_USERNAME\". Double-check the spelling."
        ;;
      *)
        warn "Couldn't verify the username against GitHub right now (got HTTP $http_code) — continuing without verifying."
        break
        ;;
    esac
  done

  section_done "GitHub username"
}

#######################################
# SSH access to GitHub (needed to clone your forks)
#######################################
ensure_github_ssh() {
  step "Checking SSH access to GitHub"

  local test_out
  test_out="$(ssh -o BatchMode=yes -o StrictHostKeyChecking=accept-new -o ConnectTimeout=5 -T git@github.com < /dev/null 2>&1)" || true
  if printf '%s' "$test_out" | grep -q "successfully authenticated"; then
    ok "GitHub SSH already configured and working."
    section_done "GitHub SSH access"
    return
  fi

  warn "SSH to GitHub isn't set up yet."

  local ssh_key=""
  for candidate in "$HOME/.ssh/id_ed25519" "$HOME/.ssh/id_ecdsa" "$HOME/.ssh/id_rsa"; do
    if [ -f "$candidate" ]; then
      ssh_key="$candidate"
      break
    fi
  done

  if [ -z "$ssh_key" ]; then
    printf '\n  No SSH key found — generating a new one...\n'
    ssh-keygen -t ed25519 -C "${GH_USERNAME}@agentic-ai-workshop" -f "$HOME/.ssh/id_ed25519" -N ""
    ssh_key="$HOME/.ssh/id_ed25519"
  else
    ok "Found existing SSH key: $ssh_key"
  fi

  if ! ssh-add -l >/dev/null 2>&1; then
    eval "$(ssh-agent -s)" >/dev/null 2>&1 || true
  fi
  if [ "$OS_FAMILY" = "macOS" ]; then
    ssh-add --apple-use-keychain "$ssh_key" 2>/dev/null || ssh-add "$ssh_key" 2>/dev/null || true
  else
    ssh-add "$ssh_key" 2>/dev/null || true
  fi

  printf '\n%s%sYour SSH public key — copy the whole line below:%s\n\n' "$BOLD" "" "$RESET"
  cat "${ssh_key}.pub"
  printf '\n  Add it to GitHub now:\n'
  printf '    1. Open: https://github.com/settings/ssh/new\n'
  printf '    2. Title: Agentic AI Workshop\n'
  printf '    3. Paste the key above into the "Key" field\n'
  printf '    4. Click "Add SSH key"\n\n'

  while true; do
    ask "Press Enter once you've added the key to GitHub: " reply
    test_out="$(ssh -o StrictHostKeyChecking=accept-new -o ConnectTimeout=10 -T git@github.com < /dev/null 2>&1)" || true
    if printf '%s' "$test_out" | grep -q "successfully authenticated"; then
      ok "SSH connection to GitHub verified."
      break
    fi
    fail "Could not verify the SSH connection yet. Double-check the key was saved, then try again."
  done

  section_done "GitHub SSH access"
}

#######################################
# Docker
#######################################
REQUIRED_DOCKER_CLI="28.1.1"
REQUIRED_DOCKER_DESKTOP="4.69.0"

print_docker_install_instructions() {
  case "$OS_FAMILY" in
    macOS)
      printf '  Install Docker Desktop for Mac:\n'
      printf '    1. Download: https://www.docker.com/products/docker-desktop/\n'
      printf '    2. Open the .dmg and drag Docker to Applications\n'
      printf '    3. Launch Docker from Applications and accept the terms of service\n'
      printf '    4. Wait for the whale icon to appear in the menu bar\n'
      ;;
    WSL)
      printf '  Install Docker Desktop for Windows (these steps run in Windows, not WSL):\n'
      printf '    1. Download: https://www.docker.com/products/docker-desktop/\n'
      printf '    2. Run the installer, then launch Docker Desktop\n'
      printf '    3. Settings -> Resources -> WSL Integration -> enable your Ubuntu distro\n'
      printf '    4. Restart Docker Desktop\n'
      ;;
    *)
      printf '  Install Docker: https://docs.docker.com/engine/install/\n'
      ;;
  esac
}

print_docker_daemon_instructions() {
  case "$OS_FAMILY" in
    macOS)
      printf '  Start Docker Desktop:\n'
      printf '    1. Open Spotlight (Cmd+Space), type "Docker", and hit Enter\n'
      printf '       (or find it in Applications)\n'
      printf '    2. Wait for the whale icon in the menu bar to stop animating —\n'
      printf '       once it holds still, the daemon has finished starting\n'
      printf '    3. Come back to this terminal and press Enter\n'
      ;;
    WSL)
      printf '  Start Docker Desktop (on the Windows side, not inside WSL):\n'
      printf '    1. Open the Start menu and launch "Docker Desktop"\n'
      printf '    2. Wait for the whale icon in the system tray to stop animating —\n'
      printf '       once it holds still, the daemon has finished starting\n'
      printf '    3. Make sure Settings -> Resources -> WSL Integration has your distro enabled\n'
      printf '    4. Come back to this terminal and press Enter\n'
      ;;
    *)
      printf '  Start the Docker daemon, e.g. "sudo systemctl start docker"\n'
      ;;
  esac
}

check_docker() {
  step "Checking Docker"

  while ! have_cmd docker; do
    warn "Docker is not installed."
    printf '\n'
    print_docker_install_instructions
    printf '\n'
    ask "Press Enter once Docker is installed: " reply
    hash -r 2>/dev/null || true
  done
  ok "Found docker."

  while ! docker info >/dev/null 2>&1; do
    warn "Docker is installed but the daemon doesn't seem to be running."
    printf '\n'
    print_docker_daemon_instructions
    printf '\n'
    ask "Press Enter once Docker Desktop is running: " reply
  done
  ok "Docker daemon is running."

  if [ -d "$API_DIR" ] && ( cd "$API_DIR" && docker compose config >/dev/null 2>&1 ); then
    local reply
    ask "Found an existing rare-api Docker project (from a previous run). Stop and remove its containers, images, and volumes before continuing? [y/N] " reply
    if [[ "$reply" =~ ^[Yy]$ ]]; then
      ok "Removing existing rare-api containers, images, and volumes..."
      ( cd "$API_DIR" && docker compose down --rmi all -v ) || warn "Cleanup failed — check the output above."
    fi
  fi

  local cli_version
  cli_version="$(docker version --format '{{.Client.Version}}' 2>/dev/null || true)"
  if [ -n "$cli_version" ]; then
    while ! version_ge "$cli_version" "$REQUIRED_DOCKER_CLI"; do
      warn "Docker CLI version $cli_version is older than the required $REQUIRED_DOCKER_CLI."
      printf '  Update Docker Desktop: click the Docker icon -> Check for Updates,\n'
      printf '  or download the latest from https://www.docker.com/products/docker-desktop/\n\n'
      ask "Press Enter once Docker has been updated and restarted: " reply
      cli_version="$(docker version --format '{{.Client.Version}}' 2>/dev/null || true)"
    done
    version_ge "$cli_version" "$REQUIRED_DOCKER_CLI" && ok "Docker CLI $cli_version meets the required $REQUIRED_DOCKER_CLI+."
  else
    warn "Could not determine Docker CLI version — skipping that check."
  fi

  if [ "$OS_FAMILY" = "macOS" ]; then
    local desktop_version
    desktop_version="$(defaults read /Applications/Docker.app/Contents/Info CFBundleShortVersionString 2>/dev/null || true)"
    if [ -n "$desktop_version" ]; then
      while ! version_ge "$desktop_version" "$REQUIRED_DOCKER_DESKTOP"; do
        warn "Docker Desktop version $desktop_version is older than the required $REQUIRED_DOCKER_DESKTOP."
        printf '  Click the Docker icon in the menu bar -> Check for Updates, then restart Docker Desktop.\n\n'
        ask "Press Enter once Docker Desktop has been updated and restarted: " reply
        desktop_version="$(defaults read /Applications/Docker.app/Contents/Info CFBundleShortVersionString 2>/dev/null || true)"
      done
      version_ge "$desktop_version" "$REQUIRED_DOCKER_DESKTOP" && ok "Docker Desktop $desktop_version meets the required $REQUIRED_DOCKER_DESKTOP+."
    else
      warn "Could not read Docker Desktop's version — is it installed at /Applications/Docker.app?"
    fi
  fi

  while ! docker compose version >/dev/null 2>&1; do
    warn "'docker compose' isn't available."
    printf '  Docker Desktop bundles Compose v2 — update Docker Desktop to the latest version.\n\n'
    ask "Press Enter once Compose is available: " reply
  done
  docker compose version >/dev/null 2>&1 && ok "Found docker compose."

  section_done "Docker"
}

#######################################
# Tools from "What you'll need"
#######################################

# Best-effort, OS-appropriate install commands. Empty string means "no good
# silent install path" — auto_install_or_wait then just falls back to
# printing manual instructions and waiting.
vscode_install_cmd() {
  if [ "$OS_FAMILY" = "macOS" ] && have_cmd brew; then
    echo "brew install --cask visual-studio-code"
  else
    echo ""
  fi
}

git_install_cmd() {
  case "$OS_FAMILY" in
    macOS) echo "xcode-select --install" ;;
    WSL|Linux) have_cmd apt-get && echo "sudo apt-get update && sudo apt-get install -y git" || echo "" ;;
    *) echo "" ;;
  esac
}

node_install_cmd() {
  if [ "$OS_FAMILY" = "macOS" ] && have_cmd brew; then
    echo "brew install node"
  elif { [ "$OS_FAMILY" = "WSL" ] || [ "$OS_FAMILY" = "Linux" ]; } && have_cmd apt-get; then
    echo "curl -fsSL https://deb.nodesource.com/setup_20.x | sudo -E bash - && sudo apt-get install -y nodejs"
  else
    echo ""
  fi
}

check_node() {
  local required_major=20

  if ! have_cmd node; then
    local install_cmd
    install_cmd="$(node_install_cmd)"
    if [ -n "$install_cmd" ]; then
      warn "Node.js not found. Attempting to install it automatically..."
      eval "$install_cmd" < /dev/null || true
      hash -r 2>/dev/null || true
    fi
  fi

  while true; do
    if ! have_cmd node; then
      warn "Node.js not found."
      printf '\n  Install Node 20 LTS or newer from https://nodejs.org/\n'
      printf '  or via a version manager like nvm: https://github.com/nvm-sh/nvm\n\n'
      ask "Press Enter once Node is installed: " reply
      hash -r 2>/dev/null || true
      continue
    fi

    local node_version node_major
    node_version="$(node --version | sed 's/^v//')"
    node_major="${node_version%%.*}"

    if [ "${node_major:-0}" -ge "$required_major" ] 2>/dev/null; then
      ok "Found Node v$node_version."
      return
    fi

    warn "Node v$node_version is older than the required v${required_major}."
    printf '\n  Install Node 20 LTS or newer from https://nodejs.org/\n\n'
    ask "Press Enter once Node has been updated: " reply
    hash -r 2>/dev/null || true
  done
}

check_core_tools() {
  step "Checking the tools from \"What you'll need\""

  auto_install_or_wait "VS Code" "have_cmd code" "$(vscode_install_cmd)" \
    "Download from https://code.visualstudio.com/" \
    "Then in VS Code: Cmd/Ctrl+Shift+P -> 'Shell Command: Install code command in PATH'" \
    "On WSL, VS Code itself installs on the Windows host, not inside WSL — install it there, then add the 'WSL' extension."

  auto_install_or_wait "Git" "have_cmd git" "$(git_install_cmd)" \
    "macOS: a system dialog for the Xcode Command Line Tools (includes Git) should have appeared — complete it, or run 'xcode-select --install' yourself" \
    "WSL/Linux: install via your package manager, e.g. 'sudo apt install git'"

  check_node

  auto_install_or_wait "npm" "have_cmd npm" "" \
    "npm is installed alongside Node.js — reinstall Node from https://nodejs.org/ if it's missing"

  ok "Docker Desktop was already checked above."

  printf '\n  GitHub account:\n'
  printf '    1. Open https://github.com/\n'
  printf '    2. Confirm you can log in and see your dashboard\n'
  printf '    3. Press Enter to continue\n\n'
  ask "Press Enter once you've confirmed you can log into GitHub: " reply
  ok "GitHub account confirmed."

  section_done "What you'll need"
}

#######################################
# GitHub CLI (gh)
#######################################
gh_install_cmd() {
  case "$OS_FAMILY" in
    macOS) have_cmd brew && echo "brew install gh" || echo "" ;;
    WSL|Linux) have_cmd apt-get && echo "sudo apt-get update && sudo apt-get install -y gh" || echo "" ;;
    *) echo "" ;;
  esac
}

install_github_cli() {
  step "Checking the GitHub CLI (gh)"

  auto_install_or_wait "GitHub CLI" "have_cmd gh" "$(gh_install_cmd)" \
    "macOS: brew install gh (or download from https://cli.github.com/)" \
    "WSL/Linux: sudo apt install gh (or see https://github.com/cli/cli/blob/trunk/docs/install_linux.md)"

  if ! have_cmd gh; then
    section_done "GitHub CLI"
    return
  fi

  if gh auth status < /dev/null >/dev/null 2>&1; then
    ok "gh is already authenticated."
    section_done "GitHub CLI"
    return
  fi

  warn "gh isn't authenticated yet. Running 'gh auth login'..."
  printf '\n  Answer the prompts as: GitHub.com -> SSH -> Yes -> Login with a web browser.\n\n'
  run_interactively gh auth login || true

  while ! gh auth status < /dev/null >/dev/null 2>&1; do
    fail "gh still isn't authenticated."
    ask "Run 'gh auth login' again? [Y/n] " reply
    run_interactively gh auth login || true
  done
  gh auth status < /dev/null >/dev/null 2>&1 && ok "gh is authenticated."

  section_done "GitHub CLI"
}

#######################################
# Claude Code CLI
#######################################
install_claude_code() {
  step "Checking Claude Code"

  if have_cmd claude; then
    ok "Found Claude Code ($(claude --version 2>/dev/null || echo 'version unknown'))."
    section_done "Claude Code"
    return
  fi

  warn "Claude Code CLI not found. Installing it now..."
  curl -fsSL https://claude.ai/install.sh | bash || true
  hash -r 2>/dev/null || true
  export PATH="$HOME/.local/bin:$PATH"

  while ! have_cmd claude; do
    warn "Claude Code still isn't on your PATH."
    printf '\n  Try opening a new terminal window first.\n'
    printf '  Or install manually: curl -fsSL https://claude.ai/install.sh | bash\n\n'
    ask "Press Enter to recheck: " reply
    hash -r 2>/dev/null || true
    export PATH="$HOME/.local/bin:$PATH"
  done
  have_cmd claude && ok "Found Claude Code."

  printf '\n  One more step, done by hand: run "claude" in a terminal and log in with your NSS team account\n'
  printf '  (accept the team invite email first if you haven'"'"'t already).\n\n'

  ask "Press Enter once you've logged in: " reply
  ok "Claude Code login confirmed."

  section_done "Claude Code"
}

#######################################
# Claude Code VS Code extension
#######################################
install_vscode_extension() {
  step "Checking the Claude Code VS Code extension"

  if ! have_cmd code; then
    warn "VS Code's 'code' command isn't available — skipping the extension install."
    warn "Once VS Code is set up, install the extension by searching \"Claude Code\" in the Extensions panel."
    section_done "VS Code extension"
    return
  fi

  if code --list-extensions 2>/dev/null | grep -qi '^anthropic\.claude-code$'; then
    ok "Claude Code extension already installed."
    section_done "VS Code extension"
    return
  fi

  warn "Claude Code extension not found. Installing it now..."
  code --install-extension anthropic.claude-code >/dev/null 2>&1 || true

  if code --list-extensions 2>/dev/null | grep -qi '^anthropic\.claude-code$'; then
    ok "Installed the Claude Code extension."
  else
    warn "Could not confirm the extension installed automatically."
    printf '\n  Install it by hand:\n'
    printf '    1. Open VS Code\n'
    printf '    2. Go to the Extensions panel (Cmd/Ctrl+Shift+X)\n'
    printf '    3. Search "Claude Code" (publisher: Anthropic) and click Install\n\n'

    while ! code --list-extensions 2>/dev/null | grep -qi '^anthropic\.claude-code$'; do
      ask "Press Enter once it's installed: " reply
    done
    code --list-extensions 2>/dev/null | grep -qi '^anthropic\.claude-code$' && ok "Claude Code extension found."
  fi

  section_done "VS Code extension"
}

#######################################
# Rare workspace: parent folder + both repos cloned from your fork
#######################################
ROOT_DIR="$HOME/workspace/rare-project"
API_DIR="$ROOT_DIR/rare-api"
CLIENT_DIR="$ROOT_DIR/rare-client"

clone_fork_or_wait() {
  local label="$1"
  local upstream_url="$2"
  local target_dir="$3"

  if [ -d "${target_dir}/.git" ]; then
    ok "${label} already cloned at ${target_dir}."
    return
  fi

  local owner_repo="${upstream_url#https://github.com/}"
  local fork_url="git@github.com:${GH_USERNAME}/${label}.git"

  if have_cmd gh && gh auth status < /dev/null >/dev/null 2>&1; then
    if gh repo view "${GH_USERNAME}/${label}" < /dev/null >/dev/null 2>&1; then
      ok "${label} already forked to your account."
    else
      ok "Forking ${owner_repo} to your account..."
      if gh repo fork "$owner_repo" --clone=false < /dev/null >/dev/null 2>&1; then
        ok "Forked ${label}."
        sleep 2
      else
        warn "Automatic fork failed — you'll need to fork it by hand below."
      fi
    fi
  else
    warn "GitHub CLI isn't authenticated — can't fork ${label} automatically."
  fi

  while true; do
    if GIT_SSH_COMMAND="ssh -o StrictHostKeyChecking=accept-new -o BatchMode=yes" \
       git clone "$fork_url" "$target_dir" < /dev/null 2>/tmp/agentic-ai-clone-err.$$; then
      ok "Cloned ${label} into ${target_dir}."
      rm -f "/tmp/agentic-ai-clone-err.$$"
      return
    fi

    warn "Couldn't clone ${label} from ${fork_url}."
    printf '\n  git said:\n'
    sed 's/^/    /' "/tmp/agentic-ai-clone-err.$$" 2>/dev/null
    printf '\n  Automatic forking didn'"'"'t work, so fork it by hand:\n'
    printf '    1. Open: %s\n' "$upstream_url"
    printf '    2. Click "Fork" (top right) and fork it to your account\n\n'
    ask "Press Enter once you've forked ${label}: " reply
  done
}

setup_rare_workspace() {
  step "Setting up your rare-project workspace"

  mkdir -p "$ROOT_DIR"
  ok "Workspace ready: $ROOT_DIR"

  clone_fork_or_wait "rare-api" "https://github.com/NSS-Workshops/rare-api" "$API_DIR"
  clone_fork_or_wait "rare-client" "https://github.com/NSS-Workshops/rare-client" "$CLIENT_DIR"

  local gitignore="$ROOT_DIR/.gitignore"
  if [ ! -f "$gitignore" ]; then
    printf 'rare-api/\nrare-client/\n' > "$gitignore"
    ok "Created $gitignore"
  fi

  section_done "Rare workspace"
}

#######################################
# Module II, Exercise 2.1 — get Rare running locally
#######################################
port_in_use() {
  local port="$1"
  if have_cmd lsof; then
    lsof -i :"$port" -sTCP:LISTEN -t >/dev/null 2>&1
  else
    (echo >/dev/tcp/localhost/"$port") 2>/dev/null
  fi
}

# wait_for_port_free <port> [<timeout-seconds>]
#
# Polls until the port is released, rather than trusting a single fixed
# sleep — a killed process can take a moment to actually let go of its
# socket. Returns 0 once free, 1 if still in use after the timeout.
wait_for_port_free() {
  local port="$1"
  local timeout="${2:-5}"
  local waited=0

  while port_in_use "$port"; do
    if [ "$waited" -ge "$timeout" ]; then
      return 1
    fi
    sleep 1
    waited=$((waited + 1))
  done
  return 0
}

# Returns 0 if any of the given pids belong to Docker's own processes
# (e.g. "com.docker.backend", the vpnkit proxy) rather than a container's
# actual workload. Killing those directly can take down Docker Desktop's
# port forwarding for every container, not just the one you're after.
pids_are_docker() {
  local pid
  for pid in $1; do
    if ps -p "$pid" -o comm= 2>/dev/null | grep -qi docker; then
      return 0
    fi
  done
  return 1
}

check_port_free() {
  local port="$1"
  local what="$2"
  local reply
  local pids

  while port_in_use "$port"; do
    warn "Port $port ($what) is already in use — it needs to be free."
    pids=""
    if have_cmd lsof; then
      printf '  What'"'"'s using it:\n'
      lsof -i :"$port" -sTCP:LISTEN -P -n 2>/dev/null | tail -n +2 | sed 's/^/    /'
      pids="$(lsof -i :"$port" -sTCP:LISTEN -t 2>/dev/null | tr '\n' ' ')"
    fi
    printf '\n'

    if [ -n "$pids" ] && pids_are_docker "$pids"; then
      warn "That's Docker's own process, not a container — killing it directly can crash Docker Desktop's port forwarding for every container, not just this one."
      printf '  Stop the container properly instead:\n'
      printf '    (cd %s && docker compose down)\n\n' "$API_DIR"
    elif [ -n "$pids" ]; then
      ask "Kill it automatically? [Y/n] " reply
      reply="${reply:-Y}"

      if [[ "$reply" =~ ^[Yy]$ ]]; then
        kill $pids 2>/dev/null
        if ! wait_for_port_free "$port" 5; then
          warn "Still running after 'kill' — trying 'kill -9'."
          kill -9 $pids 2>/dev/null
          wait_for_port_free "$port" 5 || true
        fi
        continue
      fi

      printf '  In a new terminal tab/window, stop it with:\n'
      printf '    kill %s\n' "$pids"
      printf '  (if it doesn'"'"'t stop, use "kill -9 %s")\n\n' "$pids"
    fi

    ask "Free up port $port, then press Enter to recheck: " reply
  done
  ok "Port $port ($what) is free."
}

# Homebrew's Python enforces PEP 668 ("externally-managed-environment") and
# refuses `pip install`, even with --user, outside a virtualenv — so on macOS
# with brew available, install pipenv as a formula instead of via pip.
pipenv_install_cmd() {
  if [ "$OS_FAMILY" = "macOS" ] && have_cmd brew; then
    echo "brew install pipenv"
  elif have_cmd pip3; then
    echo "pip3 install --user pipenv"
  elif have_cmd pip; then
    echo "pip install --user pipenv"
  else
    echo ""
  fi
}

ensure_pipenv() {
  if have_cmd pipenv; then
    ok "Found pipenv."
    return
  fi

  if ! have_cmd pip3 && ! have_cmd pip && [ "$(pipenv_install_cmd)" = "" ]; then
    warn "pipenv not found, and neither Homebrew nor pip is available to install it."
    printf '\n  Install Python (which includes pip) from https://www.python.org/downloads/\n\n'
    while ! have_cmd pip3 && ! have_cmd pip; do
      ask "Press Enter once pip is available: " reply
      hash -r 2>/dev/null || true
      export PATH="$HOME/.local/bin:$PATH"
    done
  fi

  while ! have_cmd pipenv; do
    local install_cmd
    install_cmd="$(pipenv_install_cmd)"
    warn "pipenv not found. Installing it automatically ($install_cmd)..."
    if ! eval "$install_cmd" < /dev/null 2>/tmp/agentic-ai-pipenv-err.$$; then
      printf '\n  That failed. Here'"'"'s what it said:\n'
      sed 's/^/    /' "/tmp/agentic-ai-pipenv-err.$$" 2>/dev/null
      printf '\n'
    fi
    rm -f "/tmp/agentic-ai-pipenv-err.$$"
    hash -r 2>/dev/null || true
    export PATH="$HOME/.local/bin:$PATH"

    if have_cmd pipenv; then
      break
    fi

    fail "Still couldn't install pipenv automatically."
    ask "Press Enter to try again: " reply
  done
  ok "Found pipenv."
}

run_rare_locally() {
  step "Getting Rare running locally (Module II, Exercise 2.1)"

  if [ ! -d "$API_DIR" ] || [ ! -d "$CLIENT_DIR" ]; then
    warn "rare-api and/or rare-client aren't cloned yet — skipping this step."
    section_done "Rare local run"
    return
  fi

  require_tool "python3" "have_cmd python3" \
    "Install Python 3 from https://www.python.org/downloads/ (macOS/WSL usually already have it)"

  ensure_pipenv
  check_port_free 5432 "PostgreSQL"
  check_port_free 8088 "Django API"
  check_port_free 3000 "React client"

  step "Starting the API (rare-api)"
  until ( cd "$API_DIR" && docker compose up -d < /dev/null ); do
    warn "docker compose up failed. If you've run this before, a stale volume may be the cause."
    printf '  In a new terminal tab/window, run:\n'
    printf '    (cd %s && docker compose down -v)\n\n' "$API_DIR"
    local reply
    ask "Press Enter once you've run that: " reply
  done

  ok "Installing Python dependencies (pipenv install)..."
  ( cd "$API_DIR" && pipenv install < /dev/null ) || warn "pipenv install failed — check the output above."

  ok "Running database migrations..."
  ( cd "$API_DIR" && pipenv run python manage.py migrate < /dev/null ) || warn "migrate failed — check the output above."

  ok "Loading seed data (initial_data fixture)..."
  ( cd "$API_DIR" && pipenv run python manage.py loaddata initial_data < /dev/null ) || warn "loaddata failed — check the output above."

  ok "Starting the Django dev server on port 8088 (in the background)..."
  ( cd "$API_DIR" && nohup pipenv run python manage.py runserver 8088 < /dev/null > "$API_DIR/rare-api.log" 2>&1 & disown )

  step "Starting the client (rare-client)"
  ok "Installing npm dependencies..."
  ( cd "$CLIENT_DIR" && npm install < /dev/null ) || warn "npm install failed — check the output above."

  ok "Starting the React dev server on port 3000 (in the background)..."
  ( cd "$CLIENT_DIR" && BROWSER=none nohup npm start < /dev/null > "$CLIENT_DIR/rare-client.log" 2>&1 & disown )

  printf '  API logs:    %s\n' "$API_DIR/rare-api.log"
  printf '  Client logs: %s\n' "$CLIENT_DIR/rare-client.log"
  printf '  To stop both dev servers: pkill -f "manage.py runserver 8088"; pkill -f "react-scripts start"\n'

  monitor_rare_app

  section_done "Rare local run"
}

open_in_browser() {
  local url="$1"
  case "$OS_FAMILY" in
    macOS) open "$url" ;;
    WSL)   cmd.exe /c start "$url" 2>/dev/null || true ;;
    *)     xdg-open "$url" 2>/dev/null || true ;;
  esac
}

# Polls http://localhost:3000 until the React dev server responds (or we give
# up after a while), then offers to open it in the browser.
monitor_rare_app() {
  local client_url="http://localhost:3000/"
  local timeout=180
  local interval=5
  local elapsed=0
  local client_up="false"

  step "Waiting for Rare to come up"
  printf '  This can take a minute the first time (npm install + first compile).\n\n'

  while [ "$elapsed" -lt "$timeout" ]; do
    if curl -s -o /dev/null --max-time 3 "$client_url"; then
      client_up="true"
      break
    fi
    printf '  Still starting... (%ss elapsed)\n' "$elapsed"
    sleep "$interval"
    elapsed=$(( elapsed + interval ))
  done

  if [ "$client_up" != "true" ]; then
    warn "Rare hasn't responded at $client_url yet after ${timeout}s."
    printf '  Check the logs above — it may still finish starting on its own.\n'
    return
  fi

  ok "Rare is up at $client_url"
  printf '  Log in as %sadmin_sarah%s / %spassword%s (staff), or %sdev_diana%s / %spassword%s (regular user).\n\n' "$BOLD" "$RESET" "$BOLD" "$RESET" "$BOLD" "$RESET" "$BOLD" "$RESET"

  local reply
  ask "Open it in your browser now? [Y/n] " reply
  reply="${reply:-Y}"
  if [[ "$reply" =~ ^[Yy]$ ]]; then
    open_in_browser "$client_url"
  fi
}

#######################################
# Main
#######################################
printf '\n%sWelcome to the Agentic AI workshop setup!%s\n\n' "$BOLD" "$RESET"
printf 'This script checks your machine for the tools this course needs, installs\n'
printf 'and starts the project called Rare locally, and never stops on a missing tool — it tells you\n'
printf 'what to do, waits for you to do it, then re-checks.\n'

detect_platform
collect_github_username
ensure_github_ssh
check_docker
check_core_tools
install_github_cli
install_claude_code
install_vscode_extension
setup_rare_workspace
run_rare_locally

echo
ok "Setup complete! Head back to the course and pick up where you left off."
