This is the only setup step for the class. One script checks your machine for everything this course needs, installs what it can on its own, tells you exactly what to do for anything it can't, and gets **Rare** running locally — no manual tool-by-tool install list required. Rare is the practice codebase for this course: a fictional blogging platform split into two repos, `rare-api` (Django REST + Postgres) and `rare-client` (React), which you'll spend the rest of the class exploring, debugging, and shipping features to. The script won't just stop on a missing tool: it explains what's needed, waits for you to handle it, then re-checks automatically.

## Are you on Mac or Windows?

Pick the path for your machine.

### macOS or Linux

You can run the command below directly in your regular Terminal.

### Windows

Claude Code and the rest of this course's tooling assume a Linux-like shell, so on Windows you'll run everything from inside **WSL (Windows Subsystem for Linux)**, not PowerShell or CMD.

<details>
<summary><strong>Don't have WSL installed yet? Click to expand — install WSL and Windows Terminal first.</strong></summary>

### Install the Windows Subsystem for Linux

This installs a new operating system _inside_ your Windows operating system. It sounds intimidating, but it's not.

1. Go to the `Start` menu (Windows key) and search for `PowerShell`.
2. Run PowerShell as an Administrator — right-click the PowerShell app and choose "Run as administrator".
3. Think of a username and password for this new operating system now. You'll need it in the next step.
4. Copy and paste this command into PowerShell:

   ```sh
   wsl --install -d ubuntu
   ```

5. After the installation is done, a new window will open and prompt you for that username and password. Your password won't appear as you type it — that's normal.
6. Keep this window open for now.

### Windows Terminal

Visit the [Windows Terminal](https://www.microsoft.com/en-us/p/windows-terminal/9n0dx20hk701?activetab=pivot:overviewtab) page and install it from the Microsoft Store. This will be your default terminal (running Ubuntu) for the rest of the course.

Once Windows Terminal is installed:

1. Go to the `Start` menu (Windows key), search for `Windows Terminal`, and open it.
2. By default this opens a new PowerShell tab. **Do not use that one.**
3. Click the down arrow at the top of the terminal window and select **Ubuntu** to open a new Ubuntu tab.

   Ubuntu will install and may take a minute or two.

4. Once Ubuntu finishes installing, you'll be prompted to create a new username and password. Remember both — write them down if you need to.

**Troubleshooting:** if you see `Please enable the Virtual Machine Platform Windows feature and ensure virtualization is enabled in the BIOS.`, open PowerShell as admin and run:

```sh
Enable-WindowsOptionalFeature -Online -FeatureName Microsoft-Windows-Subsystem-Linux
dism.exe /online /enable-feature /featurename:Microsoft-Windows-Subsystem-Linux /all /norestart
dism.exe /online /enable-feature /featurename:VirtualMachinePlatform /all /norestart
```

Then visit https://aka.ms/wsl2kernel to install the Linux kernel update package, reboot, uninstall Ubuntu, and install it again. Microsoft's full install guide is also a good reference: https://learn.microsoft.com/windows/wsl/install

</details>

Once WSL is installed, open your WSL distribution (search for "Ubuntu" or whatever distro you installed in the Start menu).

Run the command below from inside that WSL terminal — not from PowerShell or CMD. If your prompt looks like `C:\>` or `PS C:\>`, you're in the wrong shell.

## Run the setup script

```bash
curl -fsSL https://nss-workshops.github.io/agentic-ai/setup.sh | bash
```

Once it finishes, you're set up for the rest of the class!
