You've seen, at a mechanical level, that an LLM's output is entirely downstream of its input. Change the context, change the output. This chapter is the practical consequence: what a strong prompt actually contains, and what a weak one is missing.

## Why prompting is the skill

A lot of "Claude Code isn't that good" complaints trace back to a weak prompt. The model is doing exactly what it always does: producing the most statistically probable continuation of what it was given. If it was given a vague one-liner, the continuation is a vague, generic answer. If it was given a targeted description of the problem, the continuation is a targeted answer.

No tooling trick gets you around this. Strong prompts are the single biggest lever on Claude Code's usefulness, and they are a skill that gets better with deliberate practice. Treat this chapter and the next one as the skill's core.

## The anatomy of a strong prompt

A strong prompt has five parts. Not every prompt needs every one, and for small lookups you'll often skip several. But when something isn't landing, nine times out of ten it's because you dropped one of these.

1. **Goal.** What do you want to *accomplish*, not just "do." "Help me migrate this view to use Django's class-based views" is a goal. "Fix this" is a request, not a goal; the model has to guess what "fixed" looks like.
2. **Context.** The relevant files, the tech stack, the constraints of your project, the thing you already tried. More on this section below; it's usually where weak prompts fail hardest.
3. **Constraints.** Rules the model should stay inside. "Don't touch the existing serializers." "Keep using fetch, not axios." "Follow the split-model pattern you can see in the existing files." Constraints save a lot of retries.
4. **Expected output form.** "Give me a numbered plan before writing code." "One file at a time, pause between each." "Just the final patch, no prose." If you don't say what form you want, the model guesses, and its guess may not match what's useful to you.
5. **Verification plan.** How will you know if this is right? "Include a test case that covers the new branch." "Tell me which file you looked at to decide." Asking for verification inside the prompt builds the model's own checking work into its answer and gives you something to audit.

Weak prompt: *"fix the login bug."*
Strong prompt: *"In `rare-api/views/auth.py`, the `login_user` view returns 500 when the username is missing from the request body (see this traceback). I want it to return a 400 with `{\"error\": \"username is required\"}`. Keep the existing error format from `views/posts.py`. Show me the diff before applying it, and include a test in `tests/test_auth.py`."*

Both are describing the same task. Only one gives the model enough to actually do it.

## Kinds of context to provide

Context is usually the biggest lift, and it's the part that rewards practice most. The categories below aren't a checklist to fill out every time. They're a menu to draw from.

- **Files.** The single highest-leverage thing you can add. Point at specific files (`@path/to/file`) rather than letting Claude discover them. Discovery burns tokens on directory walks and often finds the wrong file.
- **Tech stack.** Language, framework, versions, package manager. "Django 4.2, Python 3.11, Postgres 15" tells the model which idioms to use. Without it, you'll often get advice written for Django 2 because that's where a lot of the training data lives.
- **Your understanding level.** "I'm new to Django" vs. "I've written Django for five years" calibrates the response. If you say you're new, Claude will explain the pieces as it writes them. If you say you're experienced, it'll skip the basics and focus on the specific problem. Both are useful; the wrong one wastes your time.
- **Requirements.** The actual acceptance criteria, not just "make it work." "Users should see a 400 with a clear error message when the username is missing, and nothing should log to Sentry in that case" is a requirement. "Fix the bug" is not.
- **Errors.** Paste the **full stack trace**, not a paraphrase. The stack trace contains file paths, line numbers, exception classes, and chained causes. A paraphrase throws all of that away.
- **Expectations vs. actual.** "I expected X, I saw Y" is one of the most powerful debugging patterns you can give. It tells the model *exactly* where the gap is, instead of leaving it to guess at which part of the behavior is wrong.
- **Screenshots.** Paste a screenshot of a broken UI, an error dialog, or a Figma mockup directly into the prompt. Visual context bypasses a ton of prose you'd otherwise have to write.
- **History.** What you've already tried and why it didn't work. Without this, Claude will cheerfully suggest the thing you tried in turn one.

> 📌 **When to point vs. when to discover.** For most tasks, *pointing* at specific files beats *letting Claude discover them.* Discovery is fine when you genuinely don't know where the relevant code lives (Module III will lean on this, for the "I just joined the team" scenario). For everything else, tell the model where to look. Save tokens, save time.

## Reflection beat

Re-read the weak / strong prompt pair above. Mentally label each part of the strong version: goal, context, constraints, expected output form, verification plan. Notice that the strong version isn't longer because it's verbose; it's longer because it's specific.

Next chapter: three more paired examples, plus what to do when the first response still doesn't land.
