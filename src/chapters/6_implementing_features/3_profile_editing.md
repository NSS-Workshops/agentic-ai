> **Renee sends you a message on Slack.**
>
> > **Renee** 11:30 AM
> > Users keep asking me if they can update their profile. Right now they can't even fix a typo in their name. Can you add basic profile editing? Bio, first name, last name. Only for your own profile, obviously.

This is a full-stack feature: new API behavior, a new frontend form, and data that's partially there but not fully wired through. Time to run the full loop.

## Exercise 6.4: Profile editing

Start a fresh Claude Code session (or `/clear` your current one) so `CLAUDE.md` loads clean.

### Understand

Before you plan anything, investigate the current state of profiles. Some of what Renee asked for might require one change; some might require two or three in different layers. Use plan mode to investigate and find out before proposing any code.

### Plan and break down

Based on what you found, plan the changes. Break the plan into steps you can verify one at a time. A reasonable breakdown might be: API changes first (verify with a manual request or test), then frontend form, then display changes.

### Build

Switch to ask-before-edits mode and implement. Follow your `CLAUDE.md` conventions: the `useRef` pattern for form inputs, function-based views with `@api_view`, tests for anything with business logic.

Write tests for the new API behavior. What happens when a user updates their own profile? What happens when they try to update someone else's?

### Confirm

Test the feature end-to-end:

- Log in, navigate to your own profile, edit it, save. Does the updated data appear?
- Navigate to another user's profile. Can you edit it? (You shouldn't be able to.)
- Check the API directly if you want to be thorough: does a GET to the profile endpoint return all the fields you'd expect?

Read the full diff. Make sure you can explain every change. Commit and open a PR. 

### Capture

Did you learn anything during this exercise that belongs in `CLAUDE.md`? Maybe something about how the profile serializer is structured, or a convention you want Claude to follow next time it works with profile data. If yes, add it. If not, move on.
