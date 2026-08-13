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

Last chapter set the mindset: learn enough to be safe, not everything at once. This chapter gives you the questions and puts them to work.

## Exercise 3.1: Explore the Rare codebase

Open Claude Code in your `rare-project/` directory. As you work through each category below, ask Claude Code the suggested prompts (or your own variations) and read what comes back. These seven categories work on any codebase, in any stack, at any company. You're applying them to Rare now, but the habit transfers.

## 1. What does it do?

Start at the top. Before you trace routes or read models, you need a one-sentence answer to "what is this application?"

For Rare, you already know: it's a blogging platform where users create posts, organize them by category and tag, and subscribe to other authors. You picked that up just by logging in and clicking around in Module II. Not every answer has to come from reading source code.

## 2. What's the architecture?

How many deployable pieces are there, and how do they talk to each other?

Rare has three: a React client (running on port 3000), a Django REST API (on port 8088), and a Postgres database (in Docker on port 5432). The client makes HTTP requests to the API. The API reads and writes the database.

Ask Claude Code: *"What's the high-level architecture of this project? How does the client talk to the API, and how does the API talk to the database?"*

The answer should name the three pieces, the ports, and the communication pattern (REST over HTTP, SQL via Django ORM). If it adds more than that, it's probably filling space.

## 3. What's the data model?

What entities does the application store, and how do they relate to each other?

This is where you start reading actual code. Rare's models live in `rareapi/models/`, one file per model. That's a convention worth noticing: not a single `models.py` with everything in one file, but a directory of small files. The pattern tells you something about how the previous developer organized things.

Ask Claude Code: *"Read all the model files in `rareapi/models/` and list each model with its fields and relationships."*

You should get back something like: `Post` belongs to a `RareUser` and a `Category`. `PostTag` is a join table connecting `Post` and `Tag`. `Comment` belongs to a `Post` and a `RareUser`. `Subscription` tracks who follows whom. And so on.

Don't memorize the list. Know where to find it, and know the shape.

## 4. How does a request flow through the system?

Pick one user action and trace it from click to database write. This is more useful than reading every model file, because it shows you how the pieces actually connect at runtime.

Good candidates for a first trace: creating a post, logging in, leaving a comment. Anything that involves the user doing something and the database changing.

Ask Claude Code: *"Trace what happens when a user creates a new post. Start from the React component, follow the API call through the manager, the Django view, and into the database. Name every file involved."*

The answer should name specific files and functions, not hand-wave about "the frontend calls the backend." If it says "the API endpoint handles the request" without naming the view function and the file it lives in, push back. Specifics are the point.

## 5. What's that about?

While you're working through the questions above, something may catch your eye. A field name that implies business logic. A helper function that does more than you expected. A model you can't map to anything in the UI. When that happens, stop and ask about it.

For example, while reading the `Post` model (question 3) you might notice a field called `approved` that defaults to `False`. Or while tracing the create-a-post flow (question 4) you might see the line `approved=request.user.is_staff` buried in the view. Either way, there's a domain rule hiding in the code that isn't obvious from the schema or the UI.

Ask Claude Code: *"I noticed the Post model has an `approved` field, and in the create-post view it gets set based on `request.user.is_staff`. What's the moderation logic? Which views read the `approved` field, and how does a post get approved?"*

This is different from the structured questions. It's not something you planned to ask. It came up because you were paying attention. The habit of following those threads is how you find the parts of a codebase that matter before they surprise you in a pull request.

## 6. What are the conventions?

Every codebase has patterns, whether or not anyone wrote them down. Conventions you want to spot:

- **File organization.** Rare's API splits models into individual files (`rareapi/models/post.py`, `rareapi/models/comment.py`). It does the same with views (`rareapi/views/post_views.py`, `rareapi/views/comment_views.py`). The client keeps its API calls in manager files (`src/managers/PostManager.js`, `src/managers/CommentManager.js`). One file per domain entity, on both sides.
- **View style.** Rare's Django views are function-based with `@api_view` decorators, not class-based views. That's a choice you'd want to match when adding a new endpoint.
- **Auth pattern.** DRF token auth. Token stored in `localStorage`, attached to requests via an `authHeader()` helper in `api.js`. Every manager uses it.
- **Styling.** The client uses Bulma CSS classes directly. No custom stylesheets on components.

Ask Claude Code: *"What patterns and conventions can you see in how the code is organized? Look at file structure, view patterns, and how the client makes API calls."*

## 7. What are the rough edges?

Every real codebase has quirks, missing pieces, and things that don't quite make sense. Worth asking about up front.

Ask Claude Code: *"What looks unusual, inconsistent, or missing in this codebase? I'm not looking for a code review, just things a new developer would want to know before making changes."*

Claude's answer here is where you most need to verify. "Rough edges" prompts invite speculation, and the model will sometimes invent problems that aren't there. Check each claim against the actual code.

Some Claude may tell you about Rare:

- `APPEND_SLASH = False` in Django settings, so URLs are `/posts`, not `/posts/`. A small detail that will 404 you if you add a trailing slash out of habit.
- The API base URL (`http://localhost:8088`) is hard-coded in the client's `api.js`, not pulled from an environment variable.
- No tests in either repo.

## Quick self-check

1. Why is tracing a single request flow more useful than reading every model file?
2. What's the risk of asking Claude about "rough edges" without verifying its claims?

Next chapter: turning these answers into artifacts that live in the repo.
