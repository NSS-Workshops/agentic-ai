You've read about the [loop](https://nss-workshops.github.io/agentic-ai/llms-and-prompting-from-llm-to-agent) and Claude Code's modes. Today you'll feel the difference by working through one real request end-to-end, choosing your mode on purpose at every step instead of staying in whatever mode Claude Code happens to already be in.

The goal isn't just to get author names linking to profiles. It's to notice which mode helped you actually understand the code, which mode felt fastest, and which mode you stayed in real control of the whole way through.

> **Working in groups today.** Talk through each step together. Read Claude's response as a group, and decide together whether a proposed change is right before anyone approves it. When you're ready to commit, each person applies the agreed change in their own `rare-project/` and commits individually. Rotate who's at the keyboard each step so everyone gets time driving.

---

## Your Task

Renee wants author names on the post detail page to link to that author's profile.

Work through the request as a group using the loop - Understand → Plan → Build → Confirm. At each step, choose a mode on purpose and record why in `mode-log.md`.

Create `mode-log.md` at the root of `rare-project/`. You'll commit it as you go - the first commit can be right after step 1.

<details>
<summary>📋 mode-log.md TEMPLATE <strong>👉 expand to copy 👈</strong></summary>

```markdown
# Mode Log - Author Link

## 1. Understand
- Mode used:
- What you asked Claude:
- What Claude found:
- What did you verify yourselves, and how?

## 2. Plan
- The smallest fix, in one sentence:

## 3. Build
- Mode used:
- Why that mode, and not one of the others?
- What changed:

## 4. Confirm
- What you tested:
- Result:

## 5. Stretch (optional)
- What you tried:
- Mode used:
- What you noticed:
```

</details>

---

### 1. Understand

> **📣 Renee sends your group a message on Slack.**
>
> > **Renee** 2:14 PM
> > Readers keep asking about this: when I'm reading a post and I see the author's name, clicking it should take me to their profile. Should be an easy one, right?

Switch to **Plan mode** (Shift+Tab until the mode indicator reads "Plan"). Open a terminal at `rare-project/` and start Claude Code:

```bash
claude
```

Ask Claude to investigate. Don't fix anything yet.

<details>
<summary>💡 Sample prompt - expand if stuck</summary>

```
Renee wants the author's name on the post detail page to link to that author's profile. Before we change anything: where does the author's name currently render, does a profile page already exist, and if so what route serves it? Does it work for any logged-in user or just the post's own author? Don't propose or make any edits yet, just explain what's there.
```

</details>

**After Claude responds:**

As a group, decide: does a profile page already exist? Who can view it? Open whatever file(s) Claude points to and check for yourselves, don't just take its word for it. This is the habit from exploring an unknown codebase in  Module III: which file did you find that in?

Record what you asked and what you found in `mode-log.md`.

---

### 2. Plan

Still as a group: what's the smallest change that connects the author's name to the profile page that's already there? Say it in one sentence and write it in `mode-log.md`.

Then decide, out loud, which mode fits the Build step for a change this size in a file you only partly understand: *"We're using ___ mode because ___."*

---

### 3. Build

Switch to the mode your group picked. Ask Claude to make the change.

<details>
<summary>💡 Sample prompt - expand if stuck</summary>

```
Wrap the author's name in a link to their profile page, using the route you found. Keep the change as small as possible. Don't touch anything else.
```

</details>

**After Claude responds:**

Read the proposed diff together *before* anyone approves it. Does it match the one-sentence plan you wrote down? Is it touching anything you didn't expect? Approve it once the group agrees it's right.

Record what changed in `mode-log.md`.

---

### 4. Confirm

Run the app. As a group, check:

- Click the author's name on a post one of you wrote. Does it go to your own profile?
- Click the author's name on a post someone else in the group wrote. Does it go to their profile?
- Does the profile page load correctly either way?

Record what you tested and the result. Once it works, each person commits the change in their own `rare-project/`:

```bash
git add -A
git commit -m "Link author name to profile"
git push
```

---

### 5. Stretch (optional)

If your group finishes early: ask Claude to point out one more spot in the app with the same kind of gap (something that could link somewhere useful but doesn't), and fix that one in **Edit automatically** mode instead. Still read the diff afterward. Edit automatically skips the approval prompt, it doesn't skip Confirm.

Record what you tried and what felt different about that mode in `mode-log.md`.

---

Once `mode-log.md` is committed, take a breath. We'll reconvene as a full group to compare notes across teams.
