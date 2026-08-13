## Exercise 4.1: Same task, three modes

Time to feel the difference. You'll do the same small task three times, once in each mode, and notice how the experience changes.

**The task:** Display the comment count in the Comments section heading on the post detail page. Right now the heading just says "Comments." After the change, it should show the actual count.

### Round 1: Plan mode

Switch to plan mode (Shift+Tab until the mode indicator reads "Plan"). Describe the task to Claude Code and ask it to investigate the relevant component and propose an approach. Read what comes back. Notice: no files changed.

When you're done, revert any changes (there shouldn't be any, but just in case): `git checkout -- rare-client/src/`

### Round 2: Ask before edits

Switch back to the default mode. Describe the same task. This time Claude will propose specific file edits and wait for your approval. Read each proposed change before accepting.

When you're done, revert: `git checkout -- rare-client/src/`

### Round 3: Edit automatically

Switch to Edit automatically. Describe the same task again. Watch what happens.

Check the result: does it work? Read the diff with `git diff`. Then revert: `git checkout -- rare-client/src/`

### Reflect

After all three rounds, write down:

- Which mode gave you the best understanding of the code you were about to change?
- Which mode got to a working result fastest?
- In which mode did you feel most in control?
- Which step of the loop (Understand, Plan, Break down, Build, Confirm) did each mode support best?

There's no single right answer. The point is to notice the trade-offs so you can make deliberate choices going forward.

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
