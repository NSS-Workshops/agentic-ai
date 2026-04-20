You have a Claude Code install, you're logged in, and you've run a hello-world prompt. Now you need a real project to point it at. For the rest of this course, that project is **Rare Publishing Inc.**, a blog platform with a Django REST API on one side and a React front end on the other.

The thing that matters structurally is this: Rare is **two separate repos** (`rare-api` and `rare-client`) that talk to each other over HTTP. You could clone each one to a different spot on your disk and work on them independently. But you're about to learn something important about how Claude Code sees the world, and that's going to change how you organize this.

## Why one parent folder matters

Claude Code treats the directory you launch it from as "the project." Its file tools default to that tree, so anything inside is fair game and anything outside is off its radar unless you explicitly point it there.

If you clone Rare's two repos into unrelated directories and launch Claude Code in each one separately, **the agent is half-blind on every task.** Ask about the API from `rare-client/` and it has no models to read. Half of Rare's interesting questions are about how the two sides connect, and the agent can't answer those if only one side is in scope.

The fix: put both repos inside a single parent folder, and launch Claude Code from the parent. Now the agent sees both subdirectories in one session, and you can ask cross-cutting questions like "trace what happens when a user clicks the Submit button on the new post form" and Claude can actually follow the call chain from the JSX file across the network into a Django view.

That parent folder is what you'll build now.

## Set it up

Pick a spot on your disk where you keep code projects. In these examples we'll use `~/workspace/`, but any location works. Just adjust the paths.

### 1. Create the parent folder

```bash
mkdir -p ~/workspace/rare-project
cd ~/workspace/rare-project
```

This is your working root for the rest of the course. Everything Rare-related lives inside it.

### 2. Fork both repos, then clone your forks

You'll be pushing your own work back to GitHub throughout the course, so you need your own copy of each Rare repo. On GitHub, click **Fork** on both:

- [github.com/NSS-Workshops/rare-api](https://github.com/NSS-Workshops/rare-api)
- [github.com/NSS-Workshops/rare-client](https://github.com/NSS-Workshops/rare-client)

Then clone your forks into `rare-project/`:

```bash
git clone git@github.com:YOUR-GITHUB-USERNAME/rare-api.git
git clone git@github.com:YOUR-GITHUB-USERNAME/rare-client.git
```

Your `rare-project/` now looks like this:

```
rare-project/
├── rare-api/        # Django REST + Postgres
└── rare-client/     # React + React Router + Bulma
```

Both are real, working repos with their own `.git/` directories. Commits you make in `rare-api/` push to the `rare-api` repo on GitHub, and the same for `rare-client`. `rare-project/` itself is *not* a repo. It's just a folder that happens to contain two of them.

### 3. Add a `.gitignore`

Even though `rare-project/` isn't a Git repo right now, you may want to make it one later (for instance, when Module V introduces `CLAUDE.md` and you'll want to version-control that file). When that happens, Git will try to track everything inside the folder by default, including both cloned repos, which are already tracked separately. That's a mess.

Head this off now. Inside `rare-project/`, create a `.gitignore` containing:

```
rare-api/
rare-client/
```

If `rare-project/` ever becomes a repo, Git will skip the two subdirectories automatically. You're safe to add files at the `rare-project/` root (like `CLAUDE.md` later) without accidentally committing the nested repos.

> 📌 **A note on repos-inside-folders.** This setup deliberately avoids making `rare-project/` a repo, avoids Git submodules, and avoids any "monorepo" tooling. Each Rare repo stays exactly as it is: cloneable, forkable, pushable on its own. `rare-project/` is just a convenient parent. The only reason you touched `.gitignore` is so that if you later `git init` here for `CLAUDE.md`, the nested repos don't get sucked in.

## Exercise 1.2 — First contact

Open VSCode in `rare-project/` and launch the Claude Code panel. In the chat input, ask:

```
What programming language is rare-api written in?
```

Then:

```
What front-end framework is rare-client using?
```

If Claude Code answers both cleanly, you're wired up correctly. If it can't find one of them, double-check that you opened VSCode on `rare-project/`, not on one of its children.

Next chapter: the last piece of setup, giving the agent a way to talk to GitHub.
