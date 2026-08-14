> **Renee sends you a message on Slack.**
>
> > **Renee** 10:15 AM
> > Quick feature request. When you look at someone's profile, we show their subscriber count but not how many posts they've published. Can you add a post count? Should only count their approved posts.

## Exercise 5.1, Part 1: Implement post count on profiles

The feature: add a `post_count` field to the profile API endpoint showing how many approved posts a user has, and display it in `UserProfileDetail.js`. The existing `subscriber_count` field in the profile serializer is the pattern to follow.

No special setup for this one. Open Claude Code in `rare-project/` and build the feature.

> **Devon sends you a message on Slack.**
>
> > **Devon** 4:47 PM
> > I see the post count went up. Where are the tests? We test anything with business logic.

## Exercise 5.1, Part 2: Write tests

Prompt Claude Code to write tests for the post count feature you just built. As you work through the test cases, think about what edge cases matter. What about unapproved posts? What if a user has zero posts? What counts as "published"?

The tests pass, but notice what happened: you understand the feature's domain better now than when you first implemented it. Deciding what to test forced you to think about the boundaries.

## Quick self-check

Think about how Claude approached this work.

1. Did it walk you through the existing code before implementing, or did it jump straight to building?
2. Did it write tests on its own, or only after Devon asked?
3. If you closed this session and opened a new one, which of those habits would carry over?

Before the next chapter, run `/clear` in your Claude Code session. This resets the conversation history without touching your files.

## Exercise 5.1, Part 3: Build your CLAUDE.md

Run `/init` in your `rare-project/` directory. Review what it generates. Then add the entries `/init` missed:

- **The understand-first loop** from Module IV. Make it a workflow rule so every session starts with this discipline.
- **The TDD rule** Devon established. Tests first for anything with business logic.
- **Domain rules** you learned from writing tests in Part 2. What did the edge cases teach you about approved vs. unapproved posts?
- **Conventions from Devon's message** that `/init` didn't capture, or didn't capture with enough context.

Don't copy Devon's Slack message into the file verbatim. Write entries that reflect what you've learned and how you want Claude to work. Your `CLAUDE.md` should make sense to a developer (or an AI) reading it for the first time.

When you're done, read it back. If you opened a brand-new Claude Code session right now, would this file give Claude everything it needs to work the way Devon expects?

Start a fresh session before the next exercise. Close your current one and reopen Claude Code in `rare-project/` so your new `CLAUDE.md` loads from scratch.

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

If anything came up during Exercise 5.2 that felt worth writing down, go add it to your `CLAUDE.md` now. That instinct is the whole point of this chapter.

## Checkpoint

By the end of this module, you should have:

- A working `CLAUDE.md` at `rare-project/CLAUDE.md` that changes Claude's behavior on a cold start.
- Post count working on user profiles (Exercise 5.1).
- Author search working on the search page (Exercise 5.2).
- Tests for the post count feature.
- The ability to explain what's in your `CLAUDE.md` and why each entry is there.