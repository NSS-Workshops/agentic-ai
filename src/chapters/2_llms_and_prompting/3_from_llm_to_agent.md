Everything so far has described an LLM as text-in, text-out. You send tokens, it predicts more tokens, you read them. That's a **chatbot**: it talks.

Claude Code is not a chatbot. Claude Code is an **agent**: it talks *and acts*. It can read files on your disk, run commands in your shell, edit code, hit the web, and chain those actions together to accomplish a larger task. Once you see the small step from one to the other, most of Claude Code's behavior stops being magical.

## Agent = LLM + system prompt + tools

A working definition:

> **An agent is a loop in which an LLM is given access to *tools* it can invoke, plus a *system prompt* that tells it how to behave, and it's run until it decides the task is done.**

Three ingredients:

1. The **LLM** itself: the next-token predictor from chapter 1. Same model you'd get in a plain chatbot.
2. A **system prompt**: instructions prepended to every conversation that tell the model its role, its style, and its rules of engagement. "You are Claude Code. Use the following tools. Ask before running commands that modify the user's system."
3. A set of **tools**: named actions the model is allowed to invoke. Each tool has a description ("runs a shell command"), a defined input format, and the harness actually executes the action and feeds the result back to the model as more input tokens.

No separate "agent model." Same Claude, configured differently.

## What the loop looks like

Picture a task: "Find the Post model in `rare-api` and show me its fields."

A bare chatbot guesses, because it can't read your disk. It produces plausible Django-model code and hopes for the best.

An agent runs like this:

1. Claude reads your prompt along with its system prompt and tool descriptions.
2. Instead of answering, it decides: "I should use the `Glob` tool to find `models.py` inside `rare-api/`." It emits a structured tool request.
3. The harness runs `Glob`, gets a list of file paths, and feeds that result back as new input tokens.
4. Claude decides: "Now I should `Read` the most likely file." Another tool request.
5. The harness runs `Read`, returns the contents.
6. Claude writes a final reply to you summarizing the fields.

Several tool calls, one final answer. That back-and-forth between model and harness is the **agent loop.** You don't see most of it in the chat window, but it happened, and it's why the answer was grounded in your actual code instead of a plausible guess.

## The tools Claude Code has

Claude Code ships with a standard set of built-in tools. You don't need to memorize the list. You do need to know the categories, so you know what Claude Code *can* do and what it can't.

- **File tools**: `Read`, `Write`, `Edit`. Read a file, write a new one, make a targeted edit. The diff view you see in VSCode is an `Edit` call.
- **Search tools**: `Glob`, `Grep`. Find files by name pattern, search file contents. How Claude answers "where is the user model defined?" without reading every file.
- **Shell**: `Bash`. Runs commands in your terminal. The biggest single superpower and the biggest single foot-gun. How Claude runs tests, starts a dev server, installs a package, or (if you're careless with permissions) deletes something it shouldn't.
- **Web**: `WebSearch`, `WebFetch`. Search the open web, fetch a specific URL. Useful for docs newer than the model's training data.

Every one of these is just a function the model can call. The "intelligence" is in the model deciding *when* to call which tool, and interpreting the result. The tools themselves are boring code.

## Permission prompts

When Claude Code wants to run a shell command, edit a file, or write a new one, you'll see it pause and ask:

> Allow Claude to run `docker compose up -d`? **(yes / no / always for this session)**

Those pauses are **permission prompts**. They're not errors. They're how the agent loop stays under your control.

The model has your prompt and the tool descriptions. It does not have good judgment about your specific machine. It might decide a reasonable next step is `rm -rf build/` to clean up before a rebuild. Fine on one project, catastrophic on another. The permission prompt puts a human in the loop exactly where the agent could do damage.

Rough tiers of what gets gated:

- **Reading things** inside your project: usually auto-approved. Low risk.
- **Editing or writing files**: asks, because edits can break things.
- **Running shell commands**: asks every time, because shells can do anything.

The trap is **approval fatigue.** The first five prompts of a session you read carefully. By the twentieth, you're clicking **yes** the instant the dialog appears. By the fiftieth, you're approving commands you didn't actually read. When that happens, the safety model isn't working; it's theater.

The working habit: read the exact command. Ask yourself *do I know what this does, and is it scoped to what I asked for?* If it's benign and expected, approve. If it's benign but unexpected, ask Claude why it wanted to run that before approving. Prefer single approvals over "always for this session" until you trust what the session is doing.

## End of the conceptual half

You now have the mental model the rest of this course runs on:

- An LLM is a next-token predictor. Confidence is free; truth is not. You verify; you own what ships.
- Tokens are the unit of cost and the unit of the context window. Conversation cost grows quadratically with length, so short focused sessions beat sprawling ones.
- An agent is an LLM plus a system prompt plus tools in a loop. Permission prompts are how that loop stays under your control.

The next two chapters are about the single skill that gates all of this: **prompting**. Everything you just read about "input quality determines output quality" turns into practice.
