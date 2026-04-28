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

## Exercise 4.1: Same task, three modes

Time to feel the difference. You'll do the same small task three times, once in each mode, and notice how the experience changes.

**The task:** Display the comment count in the Comments section heading on the post detail page. Right now the heading just says "Comments." After the change, it should show the actual count.

### Round 1: Plan mode

Switch to plan mode (Shift+Tab until the mode indicator reads "Plan"). Describe the task to Claude Code and ask it to investigate the relevant component and propose an approach. Read what comes back. Notice: no files changed.

When you're done, revert any changes (there shouldn't be any, but just in case): `git checkout -- rare-client/src/`

### Round 2: Ask before edits

Switch back to the default mode. Describe the same task. This time Claude will propose specific file edits and wait for your approval. Read each proposed change before accepting.

When you're done, revert: `git checkout -- rare-client/src/`

### Round 3: Edit automatically

Switch to Edit automatically. Describe the same task again. Watch what happens.

Check the result: does it work? Read the diff with `git diff`. Then revert: `git checkout -- rare-client/src/`

### Reflect

After all three rounds, write down:

- Which mode gave you the best understanding of the code you were about to change?
- Which mode got to a working result fastest?
- In which mode did you feel most in control?
- Which step of the loop (Understand, Plan, Break down, Build, Confirm) did each mode support best?

There's no single right answer. The point is to notice the trade-offs so you can make deliberate choices going forward.
