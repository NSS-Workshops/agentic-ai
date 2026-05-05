> **Jamie sends you a message on Slack.**
>
> > **Jamie** 10:40 AM
> > The cards look great but there are still 30+ of them on one page. Can we paginate? Maybe 10 per page.

## Exercise 7.2: Pagination with `/pair-program`

This is your first time using Tandem on real work. Type `/pair-program` and describe the task: add pagination to the post list, 10 posts per page.

Watch what happens. Tandem loads your project context, reads your Dev Profile, and breaks the work into sub-steps. For each step, it explains what needs to happen, asks whether you or Claude should implement it, and checks your understanding before moving on.

Pay attention to the understanding checks. If Django pagination is new territory for you (and it probably is -- you haven't used `Paginator` or page query parameters in this course), the questions should push you to think, not just confirm. That's the Dev Profile at work.

Build through the sub-steps. The feature touches both the API (paginated responses with page metadata) and the client (page controls, passing page params, preserving filters across pages).

Test it: does page 1 show 10 posts? Does page 2 show the next 10? Do the category and tag filters still work when you're on page 2? What happens on the last page?

Commit and open a PR when it works.
