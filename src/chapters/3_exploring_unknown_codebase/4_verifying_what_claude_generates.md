You have four artifacts sitting in your working tree: an architecture diagram, an ER diagram, a sequence diagram, and a getting-started guide. Claude Code wrote most of the content. How much of it is actually correct?

In Module II, you learned that LLMs hallucinate: confident, fluent, wrong. You saw invented function signatures, fake CLI flags, and wrong-but-close code. Those examples were hypothetical. The artifacts you just created are real, and they may contain real hallucinations. This is where you find out.

## "Which file did you find this in?"

This works on any claim the model makes about your codebase.

Claude says the `Post` model has an `is_published` field? Ask: *"Which file is that field defined in? Show me the line."* If it can point you to a real line in a real file, open the file and confirm. If it hedges, backtracks, or names a file that doesn't exist, you've caught a hallucination.

One follow-up question, one file read. It catches a whole category of codebase hallucination: claims about code that don't match what's actually there.

## Verify the architecture diagram

Open `rare-api/docs/architecture.md`. This one is straightforward to check because you already know the answer from Exercise 3.1.

- **Are there exactly three components?** React client, Django API, Postgres. If the diagram invented a cache layer, a message queue, or a separate auth service, those don't exist.
- **Are the ports right?** Client on 3000, API on 8088, Postgres on 5432.
- **Is the auth mechanism correct?** DRF token auth between client and API.

## Verify the schema diagram

Open `rare-api/docs/schema.md` and check the ER diagram against the actual models.

- **Missing models.** List the files in `rareapi/models/` and compare. If a model file exists but isn't in the diagram, it got dropped.
- **Wrong fields.** Pick two or three models and compare their fields in the diagram against the actual model file. Are the field names right? Are the types right? Is anything invented?
- **Missing or wrong relationships.** A `ForeignKey` in the code should show up as a relationship line in the diagram. Check a few. If the diagram shows a relationship that doesn't exist in the code, that's a hallucination.

You don't need to verify every field on every model. Spot-check enough to build confidence or catch a problem. Three models, checked field by field, is usually enough.

## Verify the sequence diagram

Open `rare-api/docs/create-post-sequence.md` and trace the sequence against the actual code.

- **Does the component name match?** What file does the diagram say handles post creation? Open it and confirm.
- **Does the auth flow match?** The diagram should show the token being attached somewhere. Where? Open that file and find the function.
- **Does the view logic match?** Open the view file and read the POST branch. Does the diagram match what the code actually does?
- **Is the image upload there?** If a user attaches an image, the actual code makes a second HTTP request after the post is created. If your diagram shows one request, it missed half the flow.

## Verify the getting-started guide

This one you can verify by following it. Tear down your local setup (stop the servers, optionally drop the Docker volume with `docker compose down -v`) and follow your own guide from step one. Does every command work? Is anything missing? Does every step happen in the right order?

If you hit a snag, that's not a failure. That's the guide getting better. Fix it and keep going.

## The habit

Verification is not a one-time exercise. It's a loop:

1. Claude makes a claim about your code.
2. You ask "which file?"
3. You open the file and look.

Three steps. A few seconds. The habit that keeps you from committing documentation that confidently describes code that doesn't exist.

### Checkpoint

Go back and commit your four artifacts to their respective repos once you've verified them:

- The architecture diagram matches Rare's actual components, ports, and protocols.
- The ER diagram matches the actual models.
- The sequence diagram matches the actual create-a-post flow.
- The getting-started guide works when followed from scratch.
- You can explain Rare's architecture, data model, and the create-a-post request flow without looking at the code.

Next module: the development loop and Claude Code's three operating modes.
