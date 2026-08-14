The loop describes what you do at each step. Modes control how much Claude Code can do on its own.

## The core modes

Claude Code has several operating modes. You switch between them with **Shift+Tab** in the input area. The current mode shows in the bottom-left of the panel. These three are the ones you'll use throughout the course:

**Plan mode.** Claude reads, thinks, and produces a plan. It will not create, edit, or delete any files. This is where Understand and Plan live. You use it when you want to learn about the code or think through an approach before committing to changes.

**Ask before edits.** The default. Claude proposes file changes and waits for you to approve each one. This is the natural home for the Build step when you're working in code you don't fully own yet. You see every edit before it lands.

**Edit automatically.** Claude makes changes without asking. Best for small, well-scoped, low-risk work in code you understand. Even in this mode, the Confirm step still applies: you run the code, read the diff, and verify.

## Matching modes to the loop

The mapping isn't rigid, but it's a useful starting point:

| Loop step | Typical mode | Why |
|-----------|-------------|-----|
| Understand | Plan | You want information, not changes |
| Plan | Plan | You want a proposal, not code |
| Break down | Plan or Ask | Depends on complexity |
| Build | Ask or Edit automatically | Depends on how well you know the code |
| Confirm | (You) | Run it, read the diff, explain it |

The Confirm step is always you, not Claude. Claude can run tests and report results, but the judgment call ("do I understand this change? does it do what I intended?") is yours.


