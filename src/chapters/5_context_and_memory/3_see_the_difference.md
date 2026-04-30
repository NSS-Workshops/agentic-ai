You have a `CLAUDE.md`. You started a fresh session. Time to see what changes.

> **Renee sends you a message on Slack.**
>
> > **Renee** 2:30 PM
> > The search page only searches by title right now. Can you add an author search? Users want to find posts by a specific writer's username. Should work alongside the existing title search so you can combine them.

## Exercise 5.2: See the difference

The feature: add an `author` query parameter to the post search endpoint. Currently `/posts/search?q=` matches post titles only. After your change, `/posts/search?author=<username>` should filter by author username (case-insensitive), and the two parameters should be combinable (`?q=python&author=diana` finds posts by diana with "python" in the title). The client's `PostSearch.js` needs an author input field too.

This is a part of the codebase you haven't worked in. You'll be touching the search view, the manager, and the search component for the first time.

As you work, watch for three things your `CLAUDE.md` rules should be producing:

- **Understand-first.** Does Claude explain the existing search view before proposing changes? You're in unfamiliar code. The understand-first rule should kick in.
- **TDD.** Does Claude write tests before modifying the view?
- **Conventions.** Does Claude match the existing `@api_view` pattern and queryset style in the search view?

If any of these aren't happening, check your `CLAUDE.md`. The rules might need to be clearer, or Claude might need a nudge. Either way, you're learning what makes a good entry.

## Debrief

Compare this exercise to Exercise 5.1 Part 1. Think about the process, not just the result.

1. How did Claude's approach differ? What did it do first?
2. Did the understand-first rule help you learn the search code you'd never read before?
3. Did anything come up during this exercise that's worth adding to your `CLAUDE.md`?

That last question matters. Hold onto your answer for the next chapter.
