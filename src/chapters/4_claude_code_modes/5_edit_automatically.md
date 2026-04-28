Edit automatically is the third mode. Claude Code auto-approves file edits and common filesystem commands without asking. Files get created, edited, and deleted without prompts.

Switch to it with **Shift+Tab** (cycle past "Ask" to "Edit automatically"). The mode indicator updates in the bottom-left of the panel.

This is *not* the same as auto mode (covered in the next chapter). Edit automatically is simpler: it approves all file changes, no questions asked. There's no classifier deciding what's safe. Everything goes through.

## When it makes sense

This mode works well when:

- The task is small and well-scoped. You can describe the entire change in a sentence or two.
- You understand the code being changed. You'd catch a wrong edit in the diff.
- The change is easily reversible. A `git checkout` or `git stash` gets you back to where you started.

Adding Bulma classes to style a new component you just wrote. Wiring up a new manager function that follows the same pattern as the existing ones. Scaffolding a React component when you already know the props and structure. These fit this mode well.

## When it doesn't

Edit automatically is a poor fit when:

- You haven't done the Understand step. If you don't know how the code works, you can't evaluate what Claude changed.
- The task involves multiple files or complex logic. More surface area means more places for subtle errors.
- You're working in production code or shared infrastructure. The cost of a wrong edit is high.

The risk isn't that this mode produces worse code. Claude's output is the same regardless of mode. The risk is that *you* skip the review. In ask-before-edits, you see each diff because the tool forces you to. In Edit automatically, you have to choose to look. If you don't, the Confirm step is gone and you're shipping code you haven't read.

## Confirm still applies

After this mode makes changes:

1. Read the diff
2. Run the app and test the change.
3. If you can't explain what changed and why, you don't own it yet.

Edit automatically makes the Build step faster. It does not make the Confirm step optional.

## Quick self-check

1. What makes a task a good fit for Edit automatically?
2. Why does the Confirm step matter more, not less, when edits land without approval?
