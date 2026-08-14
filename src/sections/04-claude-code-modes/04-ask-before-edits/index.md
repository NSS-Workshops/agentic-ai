Ask before edits is the default mode. When Claude Code proposes a file change, it shows you the diff and waits for your approval before writing it. You see every edit before it lands.

## Why it's the default

For the Build step of the loop, ask-before-edits gives you the right balance: Claude does the mechanical work of writing code, and you make the judgment call on whether each change is correct. You're building, but you're reviewing as you go.

This is especially valuable when:

- You're working in code you partially understand but haven't written yourself.
- The plan has multiple steps and you want to verify each one before moving to the next.
- You're learning the codebase while shipping changes (which is your current situation at Rare).

If you just finished Exercise 4.2, you used this mode for the Build step. Plan mode identified the fix; ask-before-edits let you review the actual code change before it landed.

## Approval fatigue

In Module II, you learned about permission prompts: the safety model that asks "do you want to allow this?" before Claude takes an action. The same dynamic plays out in ask-before-edits, and it has a name: **approval fatigue.**

After you've approved fifteen edits in a row, you stop reading them. The diff preview becomes a speed bump you click through, not information you process. When that happens, the Build step is running but the Confirm step has quietly disappeared.

Watch for it. If you notice yourself approving without reading, that's a signal. You have options:

- Take a break and come back.
- Switch to plan mode and ask Claude to summarize what it's changed so far.
- Commit what you have, start a fresh session, and continue from a clean state. (Remember the quadratic cost from Module II: shorter sessions are cheaper *and* more focused.)

