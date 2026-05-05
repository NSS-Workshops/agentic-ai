You have the full toolkit now. The loop from Module IV. `CLAUDE.md` from Module V. Modes you can choose deliberately. A codebase you understand well enough to change safely.

This module is where you use all of it. No walkthroughs, no step-by-step scaffolding. You get a request from a teammate, you ship it, you commit code you can explain. That's the job.

Before the requests start coming in, one more idea to name.

## Code ownership

Back in Module II, the prediction robot chapter ended with a simple rule: the developer owns the code, the LLM is an assistant. That was abstract then. You hadn't shipped anything yet. Now you've implemented features, written tests, migrated a build tool, and built a persistent context system. The rule is no longer abstract.

**You own a piece of code when you can do four things:**

1. Explain what it does.
2. Explain why it's written that way.
3. Predict what will happen if you change it.
4. Debug it when it breaks.

You don't have to have written every line yourself. But you have to understand every line you commit. That's the bar.

## Read every diff

When Claude produces changes, you get a diff. Read it. Not the summary Claude writes about the diff. The actual diff. Line by line.

If a line surprises you, stop and ask why. If Claude added an import you don't recognize, look it up. If it changed a file you didn't expect it to touch, ask what that file does and why it needed to change. If you see a pattern you haven't encountered before, ask Claude to explain it before you approve.

The diff is your last chance to catch a problem before it becomes your problem.

## Refuse to commit code you can't explain

Before you run `git add` and `git commit`, read `git diff --staged` or the diff in the VS Code source control tab. If you can point to a change and say "this does X because Y," commit it. If you can't explain a change to a teammate, you don't commit it. You either investigate until you can explain it, or you revert it and take a different approach.

This isn't paranoia. It's a professional habit. Code you don't understand is code you can't debug, can't extend, and can't defend in a review.

## Earning the right to vibe

Module II named **vibe coding** as a habit with real pros and real risks. Letting the model drive, accepting output based on confident tone rather than verified understanding. The framing back then was: this course builds the skill that earns the right to vibe.

Five modules later, you have that skill. You know how to make the model explain before it builds. You know how to verify what it produces. You know how to persist what you learn so you don't lose it.

Letting the model take the lead is a valid way to work. It gets faster and it's genuinely productive, once you have the foundation to notice when it goes wrong and the discipline to intervene. That's what you've been building. This module is where you demonstrate it.

When Claude handles the bulk of an implementation and you review the result, that's not vibe coding. That's delegation with oversight. The difference is whether you read the diff.

## The Capture habit still applies

Module V's sixth step of the loop still matters here. After each feature, ask: did I learn something a teammate starting tomorrow would need to know? If yes, add it to `CLAUDE.md`. If it's specific to one debugging session, leave it out.

You'll be moving faster this module. The instinct to skip Capture when things go smoothly is the moment it matters most.

## What's coming

The rest of this module is hands-on. Your team has bug reports and feature requests. You'll work through them using the full loop, choosing your own modes, writing your own prompts, and committing code you can walk through line by line.
