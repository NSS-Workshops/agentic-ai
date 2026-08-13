Plan mode is Claude Code's read-only mode. It reads files, traces code paths, and produces analysis, but it will not create, edit, or delete anything. You switch to it with **Shift+Tab** (cycle until the mode indicator reads "Plan").

## When to use it

Any time you need to *understand* before you *act*:

- You're about to work in a file or feature area you haven't touched before.
- A request sounds simple but you're not sure what's involved.
- You want to verify your assumptions about how the code works before proposing changes.
- You need to scope a task: is this a one-line fix or a multi-file refactor?

Plan mode is cheap. It costs tokens for the conversation, but it costs zero risk. No files change, nothing breaks, nothing to revert. When in doubt, start here.

## The Understand-first habit

In Module III, you explored Rare by asking questions: "How does the client authenticate?" "What's the create-a-post flow?" That was exploration for its own sake. Now the same habit has a job: it's the first step of the loop before every task.

The prompting tip that makes plan mode most useful: **ask Claude to explain the existing code before proposing any changes.** If you jump straight to "how would I add X?", Claude will propose an approach based on its best guess about the codebase. If you first ask "show me how Y currently works," you and Claude both start from solid ground.

