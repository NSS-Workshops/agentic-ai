For each class you've been spending time explaining things to or asking things from Claude Code, but the moment a particular session ends all of that context is forgotten. Today you will make more persistent context by writing some rules Claude can follow for each session, and then proving to yourselves it actually changes how Claude behaves.

> **Working in groups today.** Discuss and build each part together, but each person keeps their own `rare-project/` running. When your group agrees a step is done, everyone commits it individually in their own copy. Rotate who's at the keyboard.

---

## Your Task

As a group: ship one small feature with no `CLAUDE.md`, build a `CLAUDE.md` together, then ship a second feature and see what's different.

Record what you notice in `claude-md-notes.md` as you go. Create it at the root of `rare-project/`.

<details>
<summary>📋 claude-md-notes.md TEMPLATE <strong>👉 expand to copy 👈</strong></summary>

```markdown
# CLAUDE.md Notes

## Before CLAUDE.md
- Feature:
- What Claude did first:
- Anything you had to correct or explain more than once:

## Entries we added to CLAUDE.md (and why)
-
-
-

## After CLAUDE.md
- Feature:
- What was different this time:
- Did Claude explain the existing code before changing it? (Y/N)
- Did it write a test before implementing, unprompted? (Y/N)
- Did the new code match existing conventions? (Y/N)
```

</details>

---

### 1. Ship it - no `CLAUDE.md` yet

> **📣 Renee sends your group a message on Slack.**
>
> > **Renee** 10:15 AM
> > Quick feature request. When you look at someone's profile, we show their subscriber count but not how many posts they've published. Can you add a post count? Should only count their approved posts.

Open Claude Code in `rare-project/`. There's no `CLAUDE.md` yet, so nothing about this team's conventions is preloaded. As a group, describe the feature and watch what Claude does with it.

<details>
<summary>💡 Sample prompt - expand if stuck</summary>

```
Add a post count to user profiles, approved posts only. There's already a subscriber count on profiles working the same way. Find that pattern and follow it.
```

</details>

**After Claude responds:** Did it explain the existing pattern before building, or go straight to code? Did it write a test on its own, without being asked? Record what you notice in `claude-md-notes.md`. Confirm the feature actually works by checking a profile with posts and a profile without any. Then each person commits it individually.

---

### 2. Devon has thoughts

> **📣 Devon sends your group a message on Slack.**
>
> > **Devon** 4:47 PM
> > I see the post count went up. Where are the tests? We test anything with business logic. Also, before you pick up anything else: models, views, and serializers are one-per-file, don't consolidate them. Views are function-based, not class-based. The rule for who gets auto-approved lives in the view on purpose, so don't "fix" that by moving it into the model. Tests run with pytest, not `manage.py test`.

That's a lot to absorb in one message same as it would be from a real tech lead in your first week. This is exactly what `CLAUDE.md` is for.

---

### 3. Build `CLAUDE.md`

Run `/init` in `rare-project/`. As a group, read what it generated and compare it against Devon's message:

- What did `/init` already pick up on its own, just from reading the code?
- What's missing? Are there things Devon said that you couldn't have guessed from the code alone?

Add what's missing, **in your own words** (don't paste Devon's message in verbatim). Think about three kinds of entries: a **workflow rule** (how you want Claude to approach any task, not just this one), a **testing expectation**, and a **domain rule** (something Claude shouldn't "helpfully" change even if it looks refactorable).

Record which entries you added and why in `claude-md-notes.md`.

When your group agrees it's solid, each person commits their own copy:

```bash
git add CLAUDE.md
git commit -m "Add CLAUDE.md"
git push
```

---

### 4. Start fresh

Close Claude Code and reopen it (or run `/clear`) in `rare-project/`. This matters! You're about to find out whether the file you just wrote actually changes anything, and it needs to load into a clean session to be a fair test.

---

### 5. See the difference

> **📣 Renee sends your group a message on Slack.**
>
> > **Renee** 2:30 PM
> > The search page only searches by title right now. Can you add an author search? Should work alongside the existing title search - combinable, not either/or.

As a group, describe the feature to Claude. This time, watch specifically for whether the entries you wrote into `CLAUDE.md` actually show up in how Claude works.

<details>
<summary>💡 Sample prompt - expand if stuck</summary>

```
Add an author search to the post search endpoint. Filter by username, case-insensitive, combinable with the existing title search. You don't need to touch the search page's UI for this, just the backend. Tell me how to test it directly in the browser.
```

</details>

**After Claude responds:**

- Did it explain the existing search code before touching it?
- Did it write a test before implementing, or did someone have to ask for one?
- Does the new code look like it belongs in that file, or does it look bolted on?

Test it by visiting the endpoint directly in your browser (something like `http://localhost:8088/posts/search?author=<username>`). Record what you noticed in `claude-md-notes.md`, then each person commits:

```bash
git add -A
git commit -m "Add author search"
git push
```

---

### 6. One more thing to capture

Before you move on: did anything in step 5 come up that's worth adding to `CLAUDE.md` right now, while it's fresh? If so, add it and commit again. Noticing something worth writing down and doing it immediately - that's the whole point of today.

---

We'll reconvene as a full group to compare notes across teams.
