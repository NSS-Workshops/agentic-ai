If anything came up during Exercise 5.2 that felt worth writing down, go add it to your `CLAUDE.md` now. That instinct is the whole point of this chapter.

## The Capture habit

In Module IV, the development loop was five steps: Understand, Plan, Break down, Build, Confirm. There's a sixth:

1. **Understand** the existing code.
2. **Plan** your approach.
3. **Break down** the plan into verifiable steps.
4. **Build** one step at a time.
5. **Confirm** it works and you can explain it.
6. **Capture** anything you learned that should persist.

Most tasks, there's nothing to capture. But when there is, writing it down takes thirty seconds and saves every future session from re-discovering it.

The rule of thumb: **would a teammate starting tomorrow need to know this?** If yes, add it to `CLAUDE.md`. If it's specific to today's debugging session or today's task, leave it out.

## What Capture looks like

You just implemented author search on the post search endpoint. During that work, you were inside `search_posts` for the first time. If you noticed something about how the search view interacts with the approval filter, or how the queryset is structured, or anything about the search behavior that wasn't obvious until you read the code, that's a candidate.

Not every exercise produces something worth capturing. But building the habit of asking the question after each task is what makes `CLAUDE.md` a living document instead of a one-time setup.

## Keeping it useful

A `CLAUDE.md` with ten sharp entries beats one with fifty. Every entry should earn its spot. If you added something months ago and it's no longer relevant (the convention changed, the domain rule was refactored), remove it. Treat it like code: maintain it, don't just append to it.

When sessions get long, run `/clear` to reset the conversation. Your `CLAUDE.md` stays loaded, your files are untouched, but the accumulated back-and-forth is gone. Short focused sessions beat long sprawling ones. Remember the quadratic cost from Module II: a 20-turn conversation costs roughly four times what a 10-turn one costs. `CLAUDE.md` is what makes short sessions free, because everything important persists in the file instead of the conversation.

## Checkpoint

By the end of this module, you should have:

- A working `CLAUDE.md` at `rare-project/CLAUDE.md` that changes Claude's behavior on a cold start.
- Post count working on user profiles (Exercise 5.1).
- Author search working on the search page (Exercise 5.2).
- Tests for the post count feature.
- The ability to explain what's in your `CLAUDE.md` and why each entry is there.
