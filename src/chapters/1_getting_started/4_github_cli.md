One more tool before Module II. Git pushes commits, but it doesn't give you a way to do *everything else* GitHub offers from inside your terminal: browsing issues, opening a pull request, checking CI status, viewing a PR diff, triaging a failing action.

The **GitHub CLI** (the `gh` command) is that missing piece. It's a separate install from Git, made by GitHub itself, that lets you interact with the GitHub API from the command line.

## Why this matters for an agentic workflow

Claude Code can execute shell commands. That means anything you can do in a terminal, Claude Code can do too, with your permission. Once `gh` is installed and authenticated, the agent can:

- Read issue descriptions when you say "work on issue #42."
- Check the status of CI runs on a branch before you merge.
- Open a pull request with a title and body it drafts for you.
- Pull a PR's review comments so it can respond to them in code.
- Look at what's in the backlog without you copy-pasting anything.

Without `gh`, all of that requires you to context-switch to a browser, read something, and paste it back into the agent's prompt. That sounds like a small tax, but it adds up. More importantly, it breaks the loop where Claude Code can investigate something end-to-end on its own.

## Install it

Pick the instruction for your platform.

### macOS

```bash
brew install gh
```

If you don't have Homebrew, install it first from [brew.sh](https://brew.sh/), or grab the macOS installer directly from [cli.github.com](https://cli.github.com/).

### Windows

```powershell
winget install --id GitHub.cli
```

Or, with Chocolatey:

```powershell
choco install gh
```

Or download the `.msi` installer from [cli.github.com](https://cli.github.com/).

### Linux

Debian / Ubuntu:

```bash
sudo apt install gh
```

Fedora / RHEL:

```bash
sudo dnf install gh
```

For other distributions (or for the very latest version), follow the install instructions at [github.com/cli/cli/blob/trunk/docs/install_linux.md](https://github.com/cli/cli/blob/trunk/docs/install_linux.md).

### Verify the install

Open a new terminal and run:

```bash
gh --version
```

You should see a version number like `gh version 2.x.y`. If the command isn't found, close your terminal, open a new one, and try again.

## Authenticate

`gh` needs to know who you are on GitHub before it can do anything useful. Run:

```bash
gh auth login
```

You'll get a short series of prompts. Sensible answers for this course:

- **Where do you use GitHub?** → `GitHub.com`
- **Preferred protocol for Git operations?** → `SSH`
- **Authenticate Git with your GitHub credentials?** → `Yes`
- **How would you like to authenticate GitHub CLI?** → `Login with a web browser`

`gh` will print a one-time code and open your browser. Paste the code, authorize the CLI, and come back to the terminal. You're in.

## Sanity check

Verify you're authenticated:

```bash
gh auth status
```

A healthy response looks like:

```
github.com
  ✓ Logged in to github.com as your-username (keyring)
  ✓ Git operations for github.com configured to use ssh protocol.
  ✓ Token: *******************
```

If you see `You are not logged into any GitHub hosts`, the login didn't take. Run `gh auth login` again.

Next you'll learn what an LLM is, why tokens cost what they cost, and what makes a chatbot an agent.
