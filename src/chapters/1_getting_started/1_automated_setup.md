This is the only setup step for the class. One script checks your machine for everything this course needs, installs what it can on its own, tells you exactly what to do for anything it can't, and gets **Rare** running locally — no manual tool-by-tool install list required. Rare is the practice codebase for this course: a fictional blogging platform split into two repos, `rare-api` (Django REST + Postgres) and `rare-client` (React), which you'll spend the rest of the class exploring, debugging, and shipping features to. The script won't just stop on a missing tool: it explains what's needed, waits for you to handle it, then re-checks automatically.

## Are you on Mac or Windows?

Pick the path for your machine.

### macOS or Linux

You can run the command below directly in your regular Terminal.

### Windows

Claude Code and the rest of this course's tooling assume a Linux-like shell, so on Windows you'll run everything from inside **WSL (Windows Subsystem for Linux)**, not PowerShell or CMD.

- If you don't have WSL installed yet, see the "Windows via WSL" section of the next chapter for install instructions before continuing.
- Once WSL is installed, open your WSL distribution (search for "Ubuntu" or whatever distro you installed in the Start menu).
- Run the command below from inside that WSL terminal — not from PowerShell or CMD. If your prompt looks like `C:\>` or `PS C:\>`, you're in the wrong shell.

## Run the setup script

```bash
curl -fsSL https://nss-workshops.github.io/agentic-ai/setup.sh | bash
```

Once it finishes, you're set up for the rest of the class!
