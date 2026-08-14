## Exercise 7.1: Install Tandem and write your Dev Profile

### Install Tandem

Follow the installation instructions in the [Tandem repository](https://github.com/Valerie-Freeman/tandem) to add Tandem's skills to `rare-project/`. Once installed, you should see a `.claude/commands/` directory with the skill files.

Verify it worked: type `/` in Claude Code and look for `/pair-program` in the autocomplete list.

### Bootstrap the manifest

Run `/create-manifest` in Claude Code. This scans your project and creates `tandem.json`, the index file that other skills use to find your documentation. Point it at the docs you created in Module III and your `CLAUDE.md`.

### Write your Developer Profile

Create `~/.claude/CLAUDE.md` if it doesn't exist already. This is your user-level file, not the project-level one at `rare-project/CLAUDE.md`.

You can write the profile from scratch, but you don't have to. Claude Code has the Developer Profile template from Tandem's installed files. Ask Claude to help you draft it:

> *"I need to set up my Tandem Developer Profile in ~/.claude/CLAUDE.md. Use the template from the Tandem skills. Let's talk through my background and you can draft it for me."*

Have a conversation about your experience. What languages and frameworks are you comfortable with? What are you actively learning? What do you want to get better at? Claude will draft the three-tier profile based on your answers.

Review what it produces. Adjust anything that doesn't match your honest self-assessment. The profile works best when it's accurate, not aspirational.

> **Jamie sends you a message on Slack.**
>
> > **Jamie** 10:40 AM
> > The cards look great but there are still 30+ of them on one page. Can we paginate? Maybe 10 per page.

## Exercise 7.2: Pagination with `/pair-program`

This is your first time using Tandem on real work. Type `/pair-program` and describe the task: add pagination to the post list, 10 posts per page.

Watch what happens. Tandem loads your project context, reads your Dev Profile, and breaks the work into sub-steps. For each step, it explains what needs to happen, asks whether you or Claude should implement it, and checks your understanding before moving on.

Pay attention to the understanding checks. If Django pagination is new territory for you (and it probably is, since you haven't used `Paginator` or page query parameters in this course), the questions should push you to think, not just confirm. That's the Dev Profile at work.

Build through the sub-steps. The feature touches both the API (paginated responses with page metadata) and the client (page controls, passing page params, preserving filters across pages).

Test it: does page 1 show 10 posts? Does page 2 show the next 10? Do the category and tag filters still work when you're on page 2? What happens on the last page?

Commit and open a PR when it works.

> **Renee sends you a message on Slack.**
>
> > **Renee** 2:15 PM
> > Now that we have pages, users want to sort. Newest first is fine as the default, but they want options: most commented, most reactions.

## Exercise 7.3: Post sorting with `/pair-program`

Run `/pair-program` again. Describe the task: add sorting options to the post list.

Test it: does sorting persist when you change pages? When you filter by category? Does "most commented" actually sort by comment count?

Commit and open a PR.

### Debrief

Think about the two `/pair-program` sessions:

- Did the explanations feel calibrated, or were they too deep / too shallow for your level?
- Would you adjust anything in your Dev Profile based on these experiences?

> **Devon sends you a message on Slack.**
>
> > **Devon** 4:10 PM
> > I killed the API server to test something and the client just showed blank pages. No spinner, no error message, nothing. When the API is slow, same thing. Users stare at an empty screen with no idea what's happening.

## Exercise 7.4: Loading and error states with `/pair-program`

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

