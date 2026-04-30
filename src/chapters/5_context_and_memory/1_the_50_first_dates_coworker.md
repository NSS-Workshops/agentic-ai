Imagine you hired the smartest developer you've ever met. Writes clean code, catches edge cases, knows every framework. One catch: every morning, they forget everything. Every conversation you've had, every decision you've made together, every convention you've explained. Gone.

That's Claude Code. Each new session starts fresh. It doesn't remember what you built yesterday, the domain rule you explained an hour ago, or the convention you corrected it on three sessions back. It reads the code, and it's good at that. But anything not in the code has to be re-explained from scratch.

You're about to feel this firsthand.

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
