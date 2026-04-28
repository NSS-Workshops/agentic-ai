"I'm using plan mode because I haven't touched this file before."

"I'm switching to ask-before-edits because the plan has four steps and I want to check each one."

"This is a one-line rename, Edit automatically is fine."

Those are deliberate choices. Each one names the reason. Compare that to the default: open Claude Code, stay in whatever mode it happens to be in, and work until you're done. That default works sometimes. It also means your mode choice was accidental, not intentional.

## The habit

Before starting a task, ask yourself two questions:

1. **How well do I understand the code I'm about to change?** If you don't know, start in plan mode.
2. **How big is the change?** Small and well-scoped: Edit automatically or ask. Multi-step or unfamiliar: ask or plan.

Two questions, and the answer points you to a mode. Over time this becomes instinct. Right now it's a practice.

## Auto mode: the classifier

There's a fourth mode you should know about: **auto mode**. It's different from Edit automatically.

Edit automatically is blunt. It approves every file edit, no exceptions. If Claude wants to rewrite a config file or delete a component, Edit automatically lets it through without a word. The only guardrail is you, after the fact.

Auto mode is smarter. It runs a background classifier that reviews each action Claude wants to take and decides whether it's safe. Routine operations (editing files, reading code, running standard commands) proceed without prompts. Destructive or suspicious actions (deleting files outside the project, running commands that could cause damage) get blocked and flagged for your review.

The result is a middle ground: less interruption than ask-before-edits, but real guardrails that Edit automatically doesn't have.

Switch to it with **Shift+Tab** (cycle past "Edit automatically" to "Auto"). Or start a session with `claude --permission-mode auto` from the terminal.

### When auto mode fits

- Longer tasks where you trust the overall direction but want a safety net for risky actions.
- Working in a codebase you know well enough that routine edits don't need individual review, but you still want protection against accidental damage.
- When approval fatigue (Chapter 4) is pulling you toward Edit automatically but you're not comfortable giving up all guardrails.

Auto mode doesn't replace the Confirm step. You still read the diff, run the code, and verify. But it handles the "should Claude be allowed to do this specific thing?" question for you on routine actions, while catching the ones that deserve a closer look.

> **Devon sends you a message on Slack.**
>
> > **Devon** 9:41 AM
> > I'm sure you've noticed by now that rare-client is running on Create React App. CRA has been deprecated since early 2025, it's no longer maintained, the dev server is slow, and every `npm install` dumps a wall of security warnings we can't fix. We need to migrate to Vite. 
>
> This is exactly the kind of task where diving straight to edits will break things. How should you tackle this?

## Exercise 4.3: Migrate rare-client from CRA to Vite

This is the biggest exercise in the module and the one that pulls the whole loop together.

Devon wants the CRA-to-Vite migration, what mode should you start in? The loop for this task:

**Understand.** What does CRA actually provide? What does `react-scripts` handle that you'll need to replace? What CRA-specific files and configuration exist in `rare-client` right now?

**Plan.** Which files need to be added, changed, or deleted? What's the order of operations? What could break?

**Break down.** Split the plan into steps small enough to verify individually. A migration that changes config, scripts, and entry points all at once is hard to debug when something goes wrong.

**Build.** Switch to ask-before-edits and implement one step at a time. Review each proposed change before approving it.

**Confirm.** After the migration: does `npm run dev` start the dev server? Does the app load in the browser? Can you log in and navigate around? Does the build (`npm run build`) succeed?

One more thing to watch for: you wrote a getting-started guide in Module III (Exercise 3.5). If that guide mentions `npm start` as the command to start the client, that's no longer correct after this migration. If you notice and update it, good instinct.

### Checkpoint

- Author names on the post detail page link to the author's profile, and the profile page loads correctly.
- rare-client runs on Vite. `npm run dev` starts the dev server and the app works.
- You can name the five steps of the loop and explain which mode fits which step.
