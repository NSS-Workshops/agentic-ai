> **Jamie sends you a message on Slack.**
>
> > **Jamie** 2:15 PM
> > I've been staring at the posts page. It's a spreadsheet. Title, author, category, date. Nobody browses a publishing platform that looks like an admin panel.
> >
> > Can you turn it into a card layout? Each card should show the title, the author's real name (not their username), a short excerpt of the content, the category as a tag, and how many comments and reactions the post has. Date too, but not as the main thing.
> >
> > Bulma has card components. That's what we should use.

This is the biggest feature in the module. It touches the API serializers, potentially the views, and a complete frontend layout rewrite. The loop matters more here than anywhere.

## Exercise 6.5: Post cards with engagement counts

### Understand

Start in plan mode and investigate the current state of things. Jamie's request has several pieces, and not all of them are as simple as they sound. 

### Plan and break down

The backend and frontend changes are independent enough to plan separately:

Break the work into steps. A reasonable sequence: backend changes first (verify the API returns the new data), then frontend layout.

### Build

Switch to ask-before-edits mode. This is a multi-file change and you should be reviewing each diff carefully.

Your `CLAUDE.md` says Bulma classes only, no custom CSS. If Claude proposes a `style` attribute or a CSS class that isn't from Bulma, catch it in the diff.

Don't forget the tests. Claude should propose them if your CLAUDE.md is set up properly. 

### Confirm

Test the full feature:

- Does the post list render as cards? Do all the pieces Jamie asked for appear?
- Do the category and tag filters still work?
- What does a post with zero comments and zero reactions look like? What about a post with a long title or very short content?
- If an author has no first or last name, what shows in place of their display name? Is that acceptable?

Read the full diff. This will be a bigger diff than the previous exercises. Take the time. Commit when you can explain every change and open a PR.

### Capture

This feature touched the serializer layer in ways that affect the whole app. If you learned something about how serializers cascade or how counts are computed, consider whether it belongs in `CLAUDE.md`.
