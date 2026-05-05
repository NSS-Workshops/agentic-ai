> **Devon sends you a message on Slack.**
>
> > **Devon** 4:10 PM
> > I killed the API server to test something and the client just showed blank pages. No spinner, no error message, nothing. When the API is slow, same thing. Users stare at an empty screen with no idea what's happening.

## Exercise 7.4: Loading and error states with `/pair-program`

This feature is different from the last two. Pagination and sorting were each scoped to one view. Loading and error states are a cross-cutting concern -- they apply to every component that fetches data.

Run `/pair-program` and describe the problem. Let Tandem help you break it down: which components fetch data on mount? Which ones show nothing while the request is in flight? Which ones fail silently when the API returns an error?

The approach is yours to decide. You could add loading and error handling to each component individually. You could build a shared pattern or wrapper. Either way, the goal is the same: users should see a loading indicator while data is being fetched, and a clear message when something goes wrong.

Test it: stop the API server and load a page. Do you see an error message? Start the server again and reload. Do you see a loading indicator before the data appears?

Commit and open a PR.

## Checkpoint

By the end of this module, you should have:

- Tandem installed with a `tandem.json` manifest for the Rare project.
- A Developer Profile in `~/.claude/CLAUDE.md` that accurately reflects your skill levels.
- Pagination working on the post list.
- Sorting options (newest, most commented, most reactions) working with pagination.
- Loading indicators and error messages across components that fetch data.
- Three `/pair-program` sessions under your belt, each calibrated differently by your Dev Profile.
- An opinion about how the understanding checks felt and whether your profile needs adjusting.
