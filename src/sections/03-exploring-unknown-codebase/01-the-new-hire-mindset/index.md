Rare is running on your machine. You've logged in, poked around, maybe clicked through a few posts. You know the stack boots and the login screen works. But if someone asked you to fix a bug right now, you'd be stuck. You don't know where anything lives, what talks to what, or why the code is organized the way it is.

That's normal. You just got here.

## Understand enough, not everything

The instinct on a new codebase is to try to understand *everything* before touching anything. Read every model, trace every route, map every component. It feels responsible. It's also a trap.

A codebase like Rare has thousands of lines across two repos. You will not hold it all in your head, and you don't need to. The goal is not total understanding. The goal is: **understand enough to make your next change safely.**

That means:

- Know the major pieces and how they connect (client, API, database).
- Know where to look when a question comes up (which directory, which file pattern).
- Know the conventions well enough to match them when you add code.
- Know what you *don't* know, so you check before assuming.

Everything past that is overhead until you actually need it for a specific task.

## Claude Code as exploration partner

In Module II, you used Claude Code to *do* things: install dependencies, run migrations, start servers. Now you're using it to *learn* things. The prompting skill is the same, but the goal shifts from "make this work" to "help me understand this."

Good exploration prompts are specific and scoped:

- "What framework does `rare-api` use, and where is the entry point?"
- "List all the models in `rareapi/models/` and their relationships."
- "How does the client authenticate API requests? Trace from the login form to the header that gets sent."

Vague exploration prompts waste your time and your context window:

- "Explain this codebase to me."
- "Tell me everything about rare-api."

These burn tokens on a sprawling summary that's too shallow to be useful and too long to remember. (Remember the quadratic cost from Module II: every token of response becomes input on your next turn.) Specific questions get specific answers you can verify.

## Quick self-check

1. What's wrong with trying to understand an entire codebase before making any changes?
2. What does "understand enough to make your next change safely" look like in practice?
3. How would you adjust your Module II prompting habits for exploration vs. setup?

Next chapter: the questions to ask any codebase you've never seen before, applied hands-on to Rare.
