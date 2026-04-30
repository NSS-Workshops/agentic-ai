You just shipped a feature and wrote tests. Before you pick up anything else, Devon has context to share.

> **Devon sends you a message on Slack.**
>
> > **Devon** 9:12 AM
> > Nice work adding the tests. Before you pick up anything else, here's how we do things.
> >
> > Models are split into individual files under `rareapi/models/`. One model per file. Same for views and serializers. Don't consolidate them. Views are function-based with `@api_view`, not class-based. Client forms use `useRef` for inputs, not `useState`. Styling is Bulma classes only, no custom CSS on components.
> >
> > Posts use a moderation system. Non-staff posts default to unapproved and need admin review before they go live. Staff posts auto-approve. That logic lives in `post_views.post_list`, not in the model. Don't move it.
> >
> > API runs on 8088. Client expects it there (hardcoded in `api.js`). Start the DB with `docker compose up -d` in `rare-api/` before running Django. `APPEND_SLASH` is `False`, so your URLs are `/posts`, not `/posts/`.
> >
> > Tests run with `pipenv run python -m pytest`. Not `manage.py test`. Test anything with business logic. Don't skip them.

That's a lot to absorb in one message. Code conventions, domain rules, environment quirks, testing expectations. Some of this you could spot by reading the code carefully. But the intent behind decisions (why the moderation logic is in the view, why the files are split that way) isn't something you'd pick up from reading `post_views.py`. And none of it survives to your next Claude Code session.

This is the 50 First Dates problem from the last chapter: you have a pile of knowledge that your brilliant colleague will forget overnight. You need somewhere to write it down.

## The note on the desk

`CLAUDE.md` is a markdown file you place at the root of your project. When Claude Code starts a session, it reads this file automatically and treats its contents as instructions. Everything in `CLAUDE.md` becomes part of Claude's context before you type your first prompt.

No special syntax, no configuration. A markdown file in the right place, loaded every time.

For Rare, it goes here:

```
rare-project/
├── CLAUDE.md          ← this file
├── rare-api/
└── rare-client/
```

Because you launch Claude Code from `rare-project/`, this is the `CLAUDE.md` it finds. Entries in this file don't need to be repeated in your prompts. If your `CLAUDE.md` says "write tests before implementing," Claude applies that rule to every task in the session without you asking.

Claude Code also checks for `CLAUDE.md` files in subdirectories. If `rare-api/CLAUDE.md` exists, Claude loads it when working in that directory. You don't need nested files right now, but the mechanism exists.

One more distinction: the file at `rare-project/CLAUDE.md` is **project-level** context. It's specific to this codebase and shared with your team. There's also a **user-level** file at `~/.claude/CLAUDE.md` that applies to every project you work on (your personal preferences, your learning goals). Module VII covers that one. For now, project-level is where the action is.

## Bootstrapping with `/init`

You can write a `CLAUDE.md` from scratch, but Claude Code has a shortcut: the `/init` command. Run it in your project directory and Claude scans the codebase, identifies patterns, and generates a starting `CLAUDE.md` for you.

The key word is *starting*. `/init` is good at picking up what's visible in the code: file structure patterns, view conventions, port numbers, framework choices. Compare what it generates against Devon's message. Some of Devon's points will be covered. Others won't.

What `/init` won't discover on its own:

- **The understand-first loop from Module IV.** That's a workflow preference you developed over the course. It's about how you want to work, not what the code looks like. Write it as a rule: before implementing, explain the relevant existing code, propose a plan, and confirm the approach.
- **Testing as a team norm.** Devon said "test anything with business logic." `/init` might notice `pytest` in the project config, but it doesn't know that your team treats TDD as a standard practice.
- **Domain intent.** The moderation logic (staff auto-approve, non-staff default to unapproved) is in the code. The fact that it's *intentionally* in the view and shouldn't be refactored into the model? That's Devon's context. Write it down so Claude doesn't "improve" it later.
- **What to leave alone.** `/init` sees the split-model pattern. It doesn't know your team chose that deliberately. Without a "don't consolidate these" rule, Claude might helpfully merge them into a single `models.py` during a refactor.

And a few things that **don't belong** in `CLAUDE.md`: API keys and tokens (use `.env` files), debugging notes from a specific session, and in-progress task details ("currently working on the search feature"). If it changes faster than your conventions do, or if it's only useful for today's work, leave it out.

## Exercise 5.1, Part 3: Build your CLAUDE.md

Run `/init` in your `rare-project/` directory. Review what it generates. Then add the entries `/init` missed:

- **The understand-first loop** from Module IV. Make it a workflow rule so every session starts with this discipline.
- **The TDD rule** Devon established. Tests first for anything with business logic.
- **Domain rules** you learned from writing tests in Part 2. What did the edge cases teach you about approved vs. unapproved posts?
- **Conventions from Devon's message** that `/init` didn't capture, or didn't capture with enough context.

Don't copy Devon's Slack message into the file verbatim. Write entries that reflect what you've learned and how you want Claude to work. Your `CLAUDE.md` should make sense to a developer (or an AI) reading it for the first time.

When you're done, read it back. If you opened a brand-new Claude Code session right now, would this file give Claude everything it needs to work the way Devon expects?

Start a fresh session before the next exercise. Close your current one and reopen Claude Code in `rare-project/` so your new `CLAUDE.md` loads from scratch.
