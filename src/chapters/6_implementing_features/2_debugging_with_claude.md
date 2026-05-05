Three messages just landed in your Slack. Different people, different problems, all from the last hour. Welcome to a normal morning on a real team.

> **Devon sends you a message on Slack.**
>
> > **Devon** 9:03 AM
> > I was watching a new author try the platform yesterday. She created her first post, got redirected to the post page, everything looked fine. Then she clicked Posts in the nav to see it in the list. It wasn't there. No error, no message. Just gone.
> >
> > Look into it.

> **Jamie sends you a message on Slack.**
>
> > **Jamie** 9:08 AM
> > Related to what Devon just said -- when a regular user creates a post, there's no indication anywhere that it needs approval. No banner, no status, nothing. They just see their post, and then it's invisible everywhere else. That's a terrible first experience.

> **Renee sends you a message on Slack.**
>
> > **Renee** 9:12 AM
> > Totally separate issue, but a new user told me the home page is confusing. They logged in and just saw a mostly empty page. They didn't know what it was for or what to do next. Can you take a look?

Three bugs. None of them are crashes. None of them throw errors. All of them are real things that frustrate real users. That's most debugging: not stack traces, but "this doesn't work the way someone expected."

The loop still applies here. Understand the system before proposing a fix. Plan the change. Build it. Confirm it works. The difference is that debugging starts with *reproducing* the problem, not with reading a requirements doc.

## Exercise 6.1: The vanishing post

Devon's report: a non-admin user created a post, saw it on the post detail page, then couldn't find it on the Posts page.

**Step 1: Reproduce it.**

Log in as a non-admin user. The seed data includes several: `dev_diana`, `wanderlust_joe`, `chef_maya`, and others. (Check the fixture data or the login page if you need usernames.) Create a post. After the redirect, navigate to the Posts page.

Is the post there?

**Step 2: Investigate.**

Use Claude Code to figure out why. You know the post exists (you just saw it on the detail page). So why doesn't the Posts page show it?

Good debugging prompts give Claude the behavior you observed, not just "it's broken":

> *"I created a post as a non-admin user. The post detail page shows the post at its URL. But when I go to the Posts page, the post doesn't appear. What in the post list view could be filtering it out?"*

The answer lives in the code, and you've already explored the relevant view back in Module III. This is retrieval, not new learning. Once you find the root cause, make sure you can explain it before moving on.

**Step 3: Fix it.**

There are multiple valid fixes. A few options:

- Show the current user's own unapproved posts in the post list, marked with a "Pending Review" badge
- Redirect to My Posts after creation (where unapproved posts are visible) instead of the post detail page
- Add a notice after creation explaining the post is pending review
- Show a "Pending Approval" indicator on the post detail page for the author

Pick the fix that makes the most sense to you. There's no single right answer here. The important thing is that you can explain *why* you chose the approach you did.

**Step 4: Verify and commit.**

Test your fix for both cases: create a post as a non-admin (should see the feedback you added) and as an admin (should auto-publish with no pending message). Read the diff. Commit when it works.

## Letting Claude handle git

You've been committing by hand up to this point. Claude Code can handle the full git workflow for you: creating branches, staging files, writing commit messages, pushing, and even opening pull requests with the GitHub CLI you installed in Module I.

Try it. Ask Claude to commit the fix you just built:

> *"Create a branch for this fix, commit the changes, push it, and open a PR."*

Claude will stage the right files, write a commit message that describes the change, push the branch, and use `gh pr create` to open a pull request with a title and description. Review what it produces. Does the commit message accurately describe what you changed? Does the PR body explain the problem and the fix?

### The Co-Authored-By trailer

When Claude writes a commit message, it adds a trailer at the bottom:

```
Co-Authored-By: Claude <noreply@anthropic.com>
```

This is a standard Git convention for attributing co-authors. GitHub reads it and shows Claude as a contributor on the commit. It's transparent: anyone reviewing the commit history can see which commits involved AI assistance.

You can remove it, change it, or keep it. Some teams want it for auditability. Some find it noisy. Either way, you should know it's there and make a conscious choice about it.

### Commit and PR templates in CLAUDE.md

If you want Claude to follow a consistent format every time it commits or opens a PR, add templates to your `CLAUDE.md`. This is another example of the Capture habit: instead of correcting the format every session, write it down once.

Add something like this to your `rare-project/CLAUDE.md`:

```markdown
## Commit messages

Follow the conventional commit format:

<type>[optional scope]: <description>

[optional body]

Types: feat, fix, refactor, docs, test, chore
Keep the description under 72 characters.
Do not include "Co-Authored-By" lines.

## Pull requests

When creating a PR with `gh pr create`, use this format:

Title: <type>[optional scope]: <short description>

Body:
## What changed
<1-3 bullet points describing the change>

## Why
<Brief explanation of the problem or motivation>

## How to test
<Steps to verify the change works>
```

Adapt these to your preference. The point isn't the exact format. The point is that Claude follows the same convention every time without you having to specify it in your prompt.

### Exercise: Add these templates

Add commit and PR templates to your `CLAUDE.md` now. Use the examples above as a starting point, or write your own. Then test it: ask Claude to commit your next bug fix and make a PR, then see if it follows the template. Make sure you're branching and not working off of main!

## Exercise 6.2: No feedback on approval

Jamie's report builds on the same root cause. Even after your fix for the vanishing post, there may still be no clear indication *anywhere* that a non-admin's new post needs approval.

The understanding you built in Exercise 6.1 carries forward here. You already know the approval system. The question now is: what does the author experience after they create a post?

Walk through the create flow in the code. What happens after `PostCreate.js` saves successfully? Where does the user end up? What do they see?

Then add visible feedback. Some options:

- A Bulma notification banner on the post detail page when the post is unapproved and the viewer is the author
- Approval status indicators on the My Posts list (so authors can see which posts are live and which are waiting)
- A message after creation that explicitly says the post has been submitted for review

Again, pick what makes sense. Test both the admin and non-admin flows. Read the diff. Commit and open a PR. 

> Think about this: how did understanding the vanishing post bug make this fix faster? You didn't have to re-investigate the approval system. You already knew where the decision was made and what the behavior was. That's the compound effect of the Understand step.

## Exercise 6.3: The empty home page

Renee's report is unrelated to post approval. A new user logs in and sees a mostly empty page with no guidance.

**Find the component.** You could search the codebase yourself, or you could ask Claude. Either way, start by finding what renders at the `/` route and tracing the data flow.

**Understand the current behavior.** The home page shows a subscription feed. But new users have no subscriptions. The page handles that case, but the message doesn't tell users what subscriptions are, how to subscribe to authors, or where to go to find content.

**Fix it.** Replace the minimal empty state with something useful. Explain what the feed is for. Link to the Posts page where they can browse and discover authors to follow. Use Bulma components to keep it consistent with the rest of the app.

Test it: log in as a user with no subscriptions, confirm the empty state renders helpfully. Log in as a user with subscriptions, confirm the feed still works normally.

Read the diff. Commit and open a PR. 

## Debugging habits to carry forward

Three bugs, three fixes. Notice what was the same across all three:

1. **Reproduce first.** You couldn't fix the vanishing post by guessing. You had to see the behavior.
2. **Understand the system, not just the symptom.** The vanishing post and the missing approval feedback were two symptoms of one root cause. Understanding the approval system made both fixes faster.
3. **Give Claude the right context.** "It's broken" is a bad debugging prompt. "I did X, expected Y, saw Z" gives Claude something to work with. This is the prompt anatomy from Module II applied to debugging.
4. **Multiple valid fixes exist.** You chose an approach for each bug and can explain why. A different developer might choose differently. That's fine. The ownership test is whether you can defend your choice.
