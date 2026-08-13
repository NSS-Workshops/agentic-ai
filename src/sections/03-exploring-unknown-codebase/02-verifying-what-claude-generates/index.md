When you have completed all Module III exercises, you will have four artifacts sitting in your working tree: an architecture diagram, an ER diagram, a sequence diagram, and a getting-started guide. Claude Code wrote most of the content. When you're done, you'll verify how much of it is actually correct?

In Module II, you learned that LLMs hallucinate: confident, fluent, wrong. You saw invented function signatures, fake CLI flags, and wrong-but-close code. Those examples were hypothetical. The artifacts you will create are real, and they may contain real hallucinations. This is where you find out.

## "Which file did you find this in?"

This works on any claim the model makes about your codebase.

Claude says the `Post` model has an `is_published` field? Ask: *"Which file is that field defined in? Show me the line."* If it can point you to a real line in a real file, open the file and confirm. If it hedges, backtracks, or names a file that doesn't exist, you've caught a hallucination.

One follow-up question, one file read. It catches a whole category of codebase hallucination: claims about code that don't match what's actually there.
