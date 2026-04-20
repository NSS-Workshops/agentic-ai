Last chapter gave you the anatomy. This chapter is the practice: three paired examples, a note on iteration, and one hands-on exercise that's the first real work you'll do inside Rare.

## Paired examples

Read each pair. For each one, try to name what's missing from the weak version before reading the strong version.

### 1. Explaining existing code

**Weak:** *"explain this function."*

**Strong:** *"I'm new to Django generics. Explain `ListCreateAPIView` in [`rare-api/views/posts.py`](rare-api/views/posts.py) line by line. Focus on which methods I'd override to add filtering, and which I'd leave alone. I'm trying to decide whether to use it for a new `/categories/` endpoint or write a plain `APIView`."*

What changed: goal ("decide whether to use it for /categories/"), context (file, line of the code, your experience level), constraints (focus on override choices), output form (line-by-line). Instead of a paragraph of generic API explanation, you get a targeted tour that answers the decision you're actually trying to make.

### 2. Implementing a feature

**Weak:** *"add search to posts."*

**Strong:** *"Add a search endpoint to `rare-api`. Requirements: `GET /posts?q=<term>` should filter posts whose title or body contains the term, case-insensitive. Use the existing `PostSerializer`. Match the pagination pattern you'll see in `views/posts.py`. Before writing code, show me a plan listing which files will change and what the smallest diff is. Include one test for the happy path and one for an empty result."*

What changed: crisp requirements, tech constraints tied to existing patterns, explicit planning step, verification via tests. The weak version invites guesswork on query-parameter naming, pagination style, and file structure. The strong one rules all of that out up front.

### 3. Debugging an error

**Weak:** *"this is broken, help."*

**Strong:** *"Running `python manage.py runserver 8088` in `rare-api/` produces this stack trace at startup:*

```
django.db.utils.OperationalError: connection to server at "localhost" (127.0.0.1),
port 5432 failed: FATAL: database "rare" does not exist
```

*I expected the server to start; I got this instead. I've confirmed Docker Desktop is running and `docker compose ps` shows the `db` container as `Up`. Haven't run any migrations yet. Am I missing a step?"*

What changed: exact command, full stack trace, expectations vs. actual, history (what you've already tried). The weak version is a black-box request. The strong one gives the model everything it needs to name the specific missing step without a second round-trip.

## Prompting is iterative

Even a strong prompt rarely lands perfectly on the first try. That's not a failure of prompting; it's the normal loop. The question is whether to **course-correct** or **restart**.

**Course-correct** when the response was in the right ballpark but wrong in a specific way. "Good overall, but use `has_next()` instead of `is_last_page()`." "Keep the plan, but skip the refactor in step 3." The context built up so far is useful; keep it.

**Restart** when the model went off in a direction you didn't want and a follow-up will keep pulling in the wrong direction. The model tends to commit to its earlier framing; sometimes it's faster to clear the slate and try again with a better prompt than to negotiate with a bad one across ten turns. Remember the quadratic-cost chart from chapter 2: long sprawling sessions are expensive in more ways than one.

A practical rule: after two or three course-corrections that aren't converging, restart. The prompt itself is probably the problem.

> **Renee sends you a message on Slack.**
>
> > **Renee** 4:06 PM
> > Before you dig in on anything big, can you make sure you can actually run the thing locally? I want to demo it Friday. I know the previous dev didn't leave any docs, so... use that AI tool everyone's excited about. Figure it out.
>
> She follows with a 👋 and her status flips to "away."

## Exercise 2.1 — Get Rare running locally

Now the real work. Renee wants a demo. Your job is to get both halves of Rare running on your machine, using Claude Code to figure out how. There are no setup docs. 

**The lesson is prompting, not the answer.** When you get stuck, the temptation will be to ask the instructor. Resist it for one more prompt. Try asking Claude Code, and notice what you gave it that worked (or didn't). Your instructor will step in when you're genuinely blocked, but the reps are in the struggle.

A few prompting hints (not the answers):

- Give it the context of what you know and don't know. Tell it specifically what you want to do.
- Paste the full error message when something fails. Not "I got an error"; the actual traceback.
- When Claude proposes a command, read it before approving. 
- If a prompt isn't converging after a couple of tries, step back and rewrite the prompt using the anatomy from chapter 4.

### Checkpoint

You're done with this exercise when:

- The API responds (hit it in a browser or with `curl` and you get something back, not a connection error).
- The client dev server is running and the Rare home page loads.
- You can login to Rare as a user and poke around (Renee can now demo)
- You can describe, in one sentence each, what every command you ran actually did. If you approved something you can't explain, go back and ask Claude.
- You can stop everything and get it up and running again without Claude's help

Next module: the same prompting skill, applied to the harder problem of *understanding* a codebase you've never seen before.
