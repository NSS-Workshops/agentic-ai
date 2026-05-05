> **Renee sends you a message on Slack.**
>
> > **Renee** 2:15 PM
> > Now that we have pages, users want to sort. Newest first is fine as the default, but they want options: most commented, most reactions.

## Exercise 7.3: Post sorting with `/pair-program`

Run `/pair-program` again. Describe the task: add sorting options to the post list.

This time, notice how the experience feels different. You've used `/pair-program` before, so the workflow is familiar. And the work itself is closer to what you've already done -- you added query parameters, modified views, and built frontend controls in Module VI. The sorting feature reuses the annotation pattern from the post cards exercise.

If your Dev Profile is accurate, the understanding checks should reflect that. Questions about Django querysets and React state should feel lighter than the pagination questions did. That's the calibration working.

The backend needs a `sort` query parameter on the post list view with options for newest, most commented, and most reactions. The frontend needs a sort control that works alongside the existing filters and pagination.

Test it: does sorting persist when you change pages? When you filter by category? Does "most commented" actually sort by comment count?

Commit and open a PR.

### Debrief

Think about the two `/pair-program` sessions:

- How did the understanding checks differ between pagination (new territory) and sorting (familiar territory)?
- Did the explanations feel calibrated, or were they too deep / too shallow for your level?
- Would you adjust anything in your Dev Profile based on these experiences?
