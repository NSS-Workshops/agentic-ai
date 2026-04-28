Plan mode is Claude Code's read-only mode. It reads files, traces code paths, and produces analysis, but it will not create, edit, or delete anything. You switch to it with **Shift+Tab** (cycle until the mode indicator reads "Plan").

## When to use it

Any time you need to *understand* before you *act*:

- You're about to work in a file or feature area you haven't touched before.
- A request sounds simple but you're not sure what's involved.
- You want to verify your assumptions about how the code works before proposing changes.
- You need to scope a task: is this a one-line fix or a multi-file refactor?

Plan mode is cheap. It costs tokens for the conversation, but it costs zero risk. No files change, nothing breaks, nothing to revert. When in doubt, start here.

## The Understand-first habit

In Module III, you explored Rare by asking questions: "How does the client authenticate?" "What's the create-a-post flow?" That was exploration for its own sake. Now the same habit has a job: it's the first step of the loop before every task.

The prompting tip that makes plan mode most useful: **ask Claude to explain the existing code before proposing any changes.** If you jump straight to "how would I add X?", Claude will propose an approach based on its best guess about the codebase. If you first ask "show me how Y currently works," you and Claude both start from solid ground.

> **Renee sends you a message on Slack.**
>
> > **Renee** 2:14 PM
> > Readers keep asking about this: when I'm reading a post and I see the author's name, clicking it should take me to their profile. Should be an easy one, right?
>
> You give her message a thumbs-up and open Claude Code.

## Exercise 4.2: Investigate the author link

Renee wants clickable author names on the post detail page. Before you touch any code, switch to plan mode and investigate.

Your goal is to answer three questions before writing a single line:

1. **Where does the author's name appear?** Which component renders it, and how?
2. **Does a profile page already exist?** If so, what route serves it, and does it work for all authenticated users?
3. **What's the smallest change that connects the two?**

Start in plan mode. Craft a prompt based on what Renee asked for and what you want to learn. Let Claude investigate. Read what comes back. Chase anything you want to verify (remember Module III, Chapter 4: "which file did you find this in?").

Once you have answers to all three questions, switch to ask-before-edits mode and implement the fix. It should be small.

Test it: navigate to a post, click the author's name. Do you land on their profile? Does the profile page display correctly? Try it for a post you didn't write, too.

Commit when it works.
