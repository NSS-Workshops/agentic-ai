Welcome. Before you write a single prompt, you need a workstation that can actually run the tools this course is built around. This chapter is a checklist. Nothing conceptual, no heavy ideas. You'll install what's missing and confirm what's already there.

> You've just been hired at **Rare Publishing Inc.**, a blogging platform. The previous developer left abruptly, with no handoff, no documentation, no warm-introduction email. On your first morning, a short message lands in your inbox from **Devon**, the tech lead:
>
> > *"Welcome aboard. Sorry the onboarding's a mess. The last person didn't leave us much to work with. Get your machine set up, poke around the code, and ping me when you're stuck. We'll lean on AI tooling to get you productive fast. Devon."*
>
> Renee (Product Owner) will start dropping things on you soon. Jamie (Designer) cares about the details and will notice when something's off. For now, it's just you and Devon's terse welcome. Time to set up.

## Exercise 1.1 — Setup checklist

Run each command in a terminal. If all six pass, you're done with this chapter. Skip ahead to the next one.

| Tool | Command | Expected |
| --- | --- | --- |
| VSCode | `code --version` | A version number |
| Node | `node --version` | `v20.` or higher |
| npm | `npm --version` | A version number |
| Git | `git --version` | A version number |
| Docker Desktop | `docker --version` | A version number, and the Docker Desktop app is running |
| GitHub | log in at [github.com](https://github.com/) | Your dashboard loads |

## Installing what's missing

### VSCode

You'll use **Visual Studio Code** as your editor. Claude Code integrates with it directly through an IDE extension (installed in the next chapter), so having VSCode ready first makes that install smoother.

- Download from [code.visualstudio.com](https://code.visualstudio.com/).
- Confirm with: open a terminal, run `code --version`. You should see three lines: version, commit hash, architecture.

If `code --version` can't find the command, open VSCode, press `Cmd/Ctrl+Shift+P`, and run **Shell Command: Install 'code' command in PATH**.

### Node.js

Rare's front end is a React + Vite app, and the curriculum site itself is Vite-based. You need Node for both.

- Install Node 20 LTS or newer from [nodejs.org](https://nodejs.org/).
- Or install via a version manager like [nvm](https://github.com/nvm-sh/nvm) (recommended if you work across multiple Node projects).
- Confirm with: `node --version` and `npm --version`.

Your Node version should start with `v20.` or higher.

### Git

You'll clone repos, commit often, and push to GitHub throughout the course.

- macOS: Git ships with the Xcode Command Line Tools. If `git --version` doesn't work, run `xcode-select --install`.
- Windows: install [Git for Windows](https://git-scm.com/downloads/win). This is also a hard requirement for running Claude Code natively on Windows, so don't skip it.
- Linux: install through your package manager (`apt install git`, `dnf install git`, etc.).
- Confirm with: `git --version`.

Set your identity if you haven't already. Commits need a name and email attached:

```bash
git config --global user.name "Your Name"
git config --global user.email "you@example.com"
```

### Docker Desktop

Rare's API runs in Docker. You'll start the containers in Module III; install it now so it's ready.

- Download from [docker.com/products/docker-desktop](https://www.docker.com/products/docker-desktop/).
- Launch the Docker Desktop app after install. Docker commands won't work unless the app is running.
- Confirm with: `docker --version`.

### A GitHub account

Rare lives on GitHub. The template repos are public; you'll fork them, push your work back to your own remote, and use pull requests later on.

- Sign up at [github.com](https://github.com/) if you don't already have an account.
- Use an email you'll keep access to. GitHub ties commits to the email in your Git config.

You don't need a paid GitHub plan for this course. The free tier is enough.

When all six checks pass, head to the next chapter and install Claude Code.
