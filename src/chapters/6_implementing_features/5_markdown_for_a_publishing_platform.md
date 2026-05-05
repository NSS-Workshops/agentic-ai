> **Devon sends you a message on Slack.**
>
> > **Devon** 4:30 PM
> > Post content renders as a blob of plain text. For a publishing platform, that's embarrassing. We need markdown support. Posts should render as formatted markdown in the detail view. And the create/edit forms need a way to preview what the markdown will look like.
> >
> > `react-markdown` is the obvious choice but verify it's the right fit. Don't overcomplicate this.

This is the feature where Claude does the heavy lifting. Your job is to own the result.

## Exercise 6.6: Markdown post content

### Understand

Look at how post content currently renders. Think about where changes are needed. This feature is about *rendering*, not storage. Does anything need to change on the backend?

### Build

Let Claude handle the installation and wiring. But read every diff it produces. The `package-lock.json` will change by hundreds of lines. The component changes should be small. If something surprises you, stop and ask why before approving.

### Verify ownership

Before you commit, work through this:

- **Does the markdown render?** Write a post with headings, bold text, a link, a code block, and a list. View it on the detail page.
- **Is it safe?** Put `<script>alert('hi')</script>` in a post body. Does it execute, or does the renderer ignore raw HTML?
- **Does the preview match the detail view?** Toggle preview in the create form. Same formatting?
- **Did Claude follow conventions?** Check the diff for any custom CSS or `style` attributes that aren't from Bulma.

Commit and open a PR when you can explain every change.

### Capture

`react-markdown` is now a dependency. If a convention question came up during the build (how form state is managed with a live preview, for instance), consider whether it's worth documenting in `CLAUDE.md`.

## Checkpoint

By the end of this module, you should have:

- Three bug fixes committed (vanishing post, approval feedback, empty subscription feed).
- Profile editing working, with bio displayed and subscriber count visible to all visitors.
- Post list transformed from a table to a card layout with excerpts, full author names, category badges, and engagement counts.
- Markdown rendering on post detail, with a preview toggle on the create and edit forms.
- Tests for the profile editing endpoint and the engagement count serializer fields.
- The ability to walk through every feature and explain what changed and why.
