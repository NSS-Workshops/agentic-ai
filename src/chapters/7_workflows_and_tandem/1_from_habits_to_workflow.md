Over the last few modules you've settled into a pattern. You start by understanding the relevant code. You plan an approach. You break it into steps, build one at a time, confirm each one works, and capture anything worth persisting. You choose modes deliberately and follow conventions from `CLAUDE.md`.

That's a workflow. It emerged from practice, but it's consistent enough that you could describe it to someone else.

Having a workflow you can name and repeat is worth doing deliberately. It means you don't have to make process decisions on every task. It means a second developer on the project can follow the same steps. And it means you can improve the process itself over time, not just the code. You could even share and develop it with a team.

## Claude Code skills

One way to package a workflow is through **skills**. A skill is a reusable set of instructions stored as a markdown file. When you type `/pair-program`, Claude Code reads that file and follows the instructions inside it. That's all a skill is: a prompt template with structure, invoked on demand.

Skills live in a `.claude/commands/` directory inside your project. Anyone who clones the repo gets the same skills. They're version-controlled, reviewable, and editable like any other project file. You've already seen this pattern — your `CLAUDE.md` loads automatically every session and shapes how Claude works. A skill does the same thing, but only when you ask for it.

> **This isn't a Claude Code-only idea.** Most AI coding tools have some version of this. Cursor calls them "skills" too (previously "commands" and "rules"), reusable prompts scoped to a team, project, or user. OpenAI's Codex CLI also has a `/skills` command for invoking reusable workflows. The pattern is the same across tools: write instructions in a file, the agent follows them. If you move to a different tool later, look for this concept. The syntax will differ but the idea won't.

## Tandem

Tandem is an open-source set of skills for Claude Code that encodes a workflow similar to what you've been practicing. Here's what it provides:

**`/pair-program`** is the one you'll use most. It breaks a task into sub-steps, explains each one, asks who implements (you or Claude), and checks your understanding before moving on. It reads your Developer Profile to calibrate how deep the explanations go.

**`/create-prd`** generates a Product Requirements Document through a conversation about what you're building and why. **`/create-architecture`** designs or reverse-engineers system architecture. **`/create-roadmap`** turns a PRD into an ordered list of implementation steps. **`/create-issues`** converts roadmap steps into GitHub issues using the `gh` CLI you installed in Module I.

**`/create-adr`** records architecture decisions. **`/update-docs`** keeps documentation in sync when plans change. **`/create-manifest`** bootstraps `tandem.json`, the index file that tells other skills where your project's documentation lives.

`/pair-program` is the core skill for this module. The planning and documentation skills come into play when you build something from scratch.

## The Developer Profile

What Tandem adds that your current setup doesn't have is the **Developer Profile**, a personal configuration that tells `/pair-program` what you're learning, what you're comfortable with, and what you're strong in.

In Module V, you created `rare-project/CLAUDE.md`. That file is project-level: shared with the team, specific to Rare. The Developer Profile lives in `~/.claude/CLAUDE.md`, your **user-level** configuration. It's personal and applies to every project you open in Claude Code.

The profile has three tiers:

**Currently Learning** is for topics you're actively studying. `/pair-program` gives the deepest explanations and asks the hardest understanding questions here.

**Deepening** is for topics you're familiar with but want production-level confidence in. Moderate depth.

**Strong Skills** is for topics where you're confident. `/pair-program` keeps explanations brief unless something unusual comes up.

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
