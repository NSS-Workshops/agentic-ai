Claude Code ships as two things that work together:

1. A **CLI**: the `claude` command you run in a terminal.
2. An **IDE extension** that integrates the CLI directly into VSCode (and a few other editors), so you can see the agent's changes in the same window where you're reading your code.

You'll install the CLI first, log in, then add the VSCode extension. The whole thing is a five-minute exercise.

## Install the CLI

Pick the instruction set for your platform.

### macOS, Linux, or WSL

```bash
curl -fsSL https://claude.ai/install.sh | bash
```

The installer drops the `claude` binary into `~/.local/bin/` and adds that directory to your shell PATH if needed. Open a new terminal window after it finishes so your shell picks up the change.

Prefer Homebrew? This also works:

```bash
brew install --cask claude-code
```

Homebrew installs don't auto-update. You'll need to `brew upgrade claude-code` yourself occasionally. The native installer above handles updates for you.

### Windows (PowerShell)

```powershell
irm https://claude.ai/install.ps1 | iex
```

Native Windows installations require [Git for Windows](https://git-scm.com/downloads/win), which you installed in the previous chapter. If you skipped that, go install it now.

If PowerShell rejects the command with `The token '&&' is not a valid statement separator`, you're accidentally in CMD. Your prompt shows `PS C:\>` in PowerShell and `C:\>` in CMD.

### Windows (WinGet)

```powershell
winget install Anthropic.ClaudeCode
```

WinGet installs don't auto-update either. Run `winget upgrade Anthropic.ClaudeCode` when you want the latest version.

### Windows via WSL

If your project lives inside WSL (Linux projects, Docker, etc.), open your WSL distribution and run the **macOS/Linux/WSL** install command above. You install and run `claude` from inside WSL, not from PowerShell.

## Verify the install

Open a new terminal window and run:

```bash
claude --version
```

You should see a version number like `2.x.y`. If the command isn't found, your shell probably hasn't picked up the new PATH entry. Close the terminal, open a new one, and try again.

For a deeper health check, run:

```bash
claude doctor
```

This prints your install location, PATH configuration, and any missing dependencies. Worth running once so you know what a healthy install looks like.

## Log in

Claude Code requires a paid Claude account. For this course, **NSS has provided each student with a team-license seat**, so you don't need to buy a subscription or add a credit card. What you do need to do is accept your invitation before you try to log in.

### Step 1: Accept the team invite

Check the inbox of the email address NSS has on file for you. You should have a message titled something like **"You've been invited to join Nashville Software School on Claude."** Open it and click **Accept invitation**. You'll be walked through creating a Claude.ai account (or linking an existing one) tied to the invite email.

Once you've accepted, you can sign in at [claude.ai](https://claude.ai/) with that email and you'll see you're a member of the NSS org. That confirms the seat is active.

> ⚠️ **Use the invite email.** If you already have a personal Claude.ai account on a different email, that's fine, but the **team seat** is tied to the address the invite went to. Accept on that address.

### Step 2: Log in to Claude Code

From any directory, run:

```bash
claude
```

The first time you run it, Claude Code opens a browser window pointed at claude.com. Log in with the same account that accepted the team invite in Step 1. Approve the device when prompted, then come back to the terminal. You're in.

If your browser doesn't open automatically, Claude Code prints a URL you can copy in manually. If it shows a one-time code after you sign in, paste that code back into the terminal at the `Paste code here if prompted` prompt.

### Checking and switching accounts

A couple of commands worth knowing now, so you don't trip on them later:

- `/status` at the Claude Code prompt confirms which account you're authenticated as.
- `/logout` signs out. Useful if you accidentally authenticated with a personal account instead of the team seat.

> 💡 **Heads up:** When you run Claude Code later, you'll see **permission prompts** the first time it wants to read a file, run a command, or edit something. Those prompts aren't errors; they're the safety model. Module II has a whole chapter on them. For now, it's enough to know they exist and you should read what's being asked before clicking Approve.

## Install the VSCode extension

The CLI works on its own, but the IDE extension is where Claude Code really shines. It shows edits as a diff view inside VSCode, lets you reference files by dragging them into prompts, and keeps a running context of which files are open.

The easiest way to install it: open VSCode, open the integrated terminal (`Ctrl+` ` or View → Terminal), and run `claude`. Claude Code detects that it's running inside VSCode and offers to install the extension automatically. Say yes.

If that doesn't happen (or you want to be explicit), search for "Claude Code" in the VSCode Extensions panel and install the Anthropic-published extension directly.

## Hello world

Open VSCode in any folder (a scratch directory, an old project, anything). Click the **Claude Code** icon in the sidebar to open the Claude Code panel.

In the chat input, type:

```
What files are in this directory?
```

Claude Code will ask permission to run `ls` (or an equivalent). Approve it. You should see a list of files.

You'll use the VSCode panel as your primary interface with Claude Code for the rest of the course. The CLI is there if you need it, but the panel gives you a diff view for edits and easy file references, which you'll lean on heavily in later modules.

The next chapter sets up the Rare codebase so you have a real project to point Claude Code at.
