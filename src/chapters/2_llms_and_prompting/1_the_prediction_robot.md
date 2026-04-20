Your workstation is set up and Claude Code is logged in. Before you start prompting for real, you need a short, honest mental model of what's on the other end of your prompts. This module is that mental model, followed by the single biggest skill that rides on top of it: prompting.

> **Devon sends you another DM on Slack.**
>
> > **Devon** 9:14 AM
> > Glad you're here. Poke around, let me know what questions come up.
>
> That's the whole message. Whatever understanding you build this week, you build by asking the right questions of the right tools.

## The prediction robot

A Large Language Model (an **LLM**: Claude, ChatGPT, Gemini, your editor's autocomplete) is a **next-token predictor**. That's the entire job description.

You feed it a sequence of text (your prompt, the conversation so far, whatever files it has pulled in). It produces one thing: the next little piece of text most statistically likely to follow. Then it adds that piece to the sequence and predicts the next piece. And again. And again. It keeps going until it decides it's done.

A "little piece of text" is called a **token**. Usually roughly a word, sometimes a chunk of a word, sometimes a single character. You'll meet tokens properly in the next chapter.

If you type `The capital of France is`, a model trained on a huge amount of English text has seen "The capital of France is Paris" thousands of times. The most statistically plausible next token is ` Paris`. It emits ` Paris`. Now it reads the updated sequence and predicts again. Probably a period.

That's it. No lookup in a knowledge base, no little homunculus in the machine that "knows" France. Just "given everything you've read, what comes next?" Trained on billions of sentences (code, docs, books, forum threads, Stack Overflow), that turns out to be enough to produce fluent English, fluent Python, fluent SQL, and reasonable-sounding explanations of almost anything. Which is why we're all here.

## Input quality determines output quality

The LLM's output is fully downstream of its input. The "input" is not just the prompt you typed; it's the whole sequence of text the model sees at the moment it starts predicting: your prompt, any files you referenced, prior messages, and the system instructions the tool added on top. That blob is called the **context**, and the model's output is, in a real sense, the context's most statistically probable continuation.

Change the context, change the output.

- Ask "fix this" with no file attached. The model guesses. The output is plausible advice about something that may or may not resemble your problem.
- Ask "fix this specific error in `rare-api/views.py`, here's the stack trace" with the file in context and the error pasted in. The output is targeted at the actual problem.

Both answers feel confident. Both sound fluent. Only one is useful. The difference was entirely in the input. That's why prompting is the single biggest skill in this course, and the second half of this module is devoted to it.

## There is no "I don't know" signal

Read this twice:

**The model does not have an internal signal for "I don't know."**

It does not consult a confidence meter, notice it's running low, and hedge. It generates the most probable continuation of your prompt. If the training data contains the answer, the most probable continuation is the correct answer. If it doesn't, the most probable continuation is still something that *sounds like* an answer to that kind of question. Shaped like an answer. Written in the voice of an expert. Often still wrong.

This is why LLMs **hallucinate**. A hallucination is a confident, fluent, incorrect statement: a made-up function signature, a CLI flag that doesn't exist, a URL that 404s. The model isn't lying. There's no intent. The most probable next token just produced a sentence that isn't true.

## What hallucination looks like

Three flavors you will see in coding work:

**Invented function signatures.** You ask how to hash a password with `bcrypt` in Python. Claude tells you:

```python
hashed = bcrypt.hash("correct horse battery staple", rounds=12)
```

Clean, readable, wrong. The real API is `bcrypt.hashpw(password_bytes, bcrypt.gensalt())`. The hallucinated version will raise `AttributeError` the moment you run it. Easy to catch if you run it. Terrifying if you just paste it in and move on.

**Plausible-but-fake flags.** You ask about a `docker compose` flag that only rebuilds changed containers. Claude suggests `--only-changed`. That flag doesn't exist. It sounds like the kind of flag `docker compose` would have, which is why the prediction robot produced it.

**Wrong-but-close code.** Claude writes a Django paginator view, twenty lines, most of it correct. One line calls `page.is_last_page()`. That method doesn't exist; the real check is `page.has_next()`. This is the most dangerous flavor, because the surrounding code is so right your attention relaxes and the one wrong line ships.

Fluency is not reliability. A confident tone and a clean paragraph tell you nothing about whether the content is correct.

## The developer owns the code

This is the single most important cultural point in the course:

**You own the code you commit. The LLM is a fast assistant, not an authority.**

"Claude told me to do it that way" is not a defense in code review or at 2am when production breaks. There is no credentialed entity behind the output. Treat every factual claim (a function signature, a CLI flag, a library name, a file path) as a hypothesis until you verify it:

- Run the code. Hallucinated APIs die the instant they hit the interpreter.
- Read the diff. You should be able to explain every line you ship.
- Check the real docs. If the model says a flag exists, look for it.

There's a term for the habit of accepting whatever the model produces, skimming the output, and shipping based on how confident the explanation sounded: **vibe coding**. You'll hear it used as a pejorative and as a compliment, depending on who's talking. The honest version is that letting the model drive works once you've built the skill to orchestrate it well, and that's exactly what the rest of this course is about. Until then, it's a habit worth naming so you can notice when you're doing it.

## Quick self-check

1. What does it mean to say an LLM is a "next-token predictor"?
2. Why does hallucinated output *sound* so confident?
3. What's the minimum-effort habit you can build today to catch most hallucinations before they ship?

Next chapter: tokens, the context window, and why long conversations cost more than you'd expect.
