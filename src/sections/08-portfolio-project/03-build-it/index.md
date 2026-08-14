This chapter walks through the full Tandem greenfield workflow. Each step explains what to do, what it produces, and how it feeds the next step.

## Step 1: Set up the project

Create a new directory, initialize git, and install Tandem.

```bash
mkdir my-project && cd my-project
git init
npx @tandemdev/cli init
```

This adds Tandem's skills to `.claude/commands/` and templates to `.tandem/templates/`. Open the project in Claude Code.

Your Dev Profile from Module VII is already in `~/.claude/CLAUDE.md`. It carries across all projects, so `/pair-program` will read it here too.

## Step 2: Define what you're building

Type `/create-prd` and describe in detail what you want to build and your chosen tech stack (if you have one, Claude may make suggestions if you didn't specify). Include your learning goals as well, if you have any.

Claude starts a conversation about your project: what it does, who it's for, what the core features are, what's out of scope. It asks questions, pushes back on scope creep, and helps you think through trade-offs.

The output is `dev-docs/PRD.md`, a Product Requirements Document. It gets registered in `tandem.json` automatically so other skills can find it.

**This is the most important step.** Be specific about what you want the application to be and do. Don't describe a vague idea. Describe the actual screens, the actual data, the actual user flows. If you have learning goals ("I want to understand how FastAPI dependency injection works," "I want to learn Vue's composition API"), state them here. The PRD shapes everything that follows: architecture decisions, the implementation roadmap, and how `/pair-program` guides you through each step.

Focus on an MVP. What's the smallest version of this app that's useful? You can always expand scope later, but a focused PRD produces a focused roadmap.

## Step 3: Design the system

Type `/create-architecture`.

Claude reads your PRD and designs the technical architecture: what components exist, what the data model looks like, how they connect. It produces Mermaid diagrams and a structured document.

The output is `dev-docs/ARCHITECTURE.md`. This is where your stack choice meets the reality of a design document. If you picked Vue + FastAPI and you've never used either, the architecture doc is where you see how a FastAPI backend serves a Vue frontend, what the API surface looks like, and how the database schema maps to your domain.

The doc also includes a "Project Conventions" section: coding style, testing approach, error handling patterns, commit format. On Rare, these conventions already existed and you documented them in `CLAUDE.md`. Here, you're setting them from scratch and documenting them in the architecture document.

## Step 4: Plan the work

Type `/create-roadmap`.

Tandem reads your PRD and architecture doc, then breaks the project into ordered implementation steps. Each step is scoped to a single work session and has a checkbox so you can track progress.

The output is `dev-docs/ROADMAP.md`. It looks something like:

```markdown
- [ ] Step 1: Project scaffolding and database setup
- [ ] Step 2: Core data model and API endpoints
- [ ] Step 3: Frontend layout and navigation
- [ ] Step 4: Feature: [your first core feature]
- [ ] Step 5: Feature: [your second core feature]
```

Review the roadmap before building. Does the order make sense? Are the steps small enough to verify one at a time?

Claude may choose an implementation order you wouldn't. For example, it might build layer by layer (all API endpoints, then all frontend) when you'd prefer feature by feature (login end-to-end, then habits end-to-end). If you have a preference, ask for adjustments. You can also provide guidance when you run the command: type `/create-roadmap` and tell it "I want to build feature-by-feature, not layer-by-layer."

The roadmap is the Break Down step from the loop, but Tandem does the initial breakdown for you. You still own the plan.

## Step 5 (optional): Track with GitHub Issues

If your project has already has a remote repo on GitHub, you can type `/create-issues` to convert your roadmap steps into GitHub issues with two-way links. Each issue gets a description, acceptance criteria, and a reference back to the roadmap step. As you complete work, the issues close and the roadmap updates.

This is optional but useful if you want to practice the full workflow, or if you're building something you plan to keep working on. 

> NOTE: This skill only creates the issues on the repo, you have to create the project board manually and import the tickets if you wish to view them in swim lanes. 

## Step 6: Build iteratively

Type `/pair-program` and reference a roadmap step (*or issue ticket*): `/pair-program Work on step 1 from the roadmap.` *or* `/pair-program Work on issue #1 in github.`

Claude loads your PRD, architecture doc, conventions, and Dev Profile into the session context. It breaks the step into sub-steps, explains each one, asks who implements (you or Claude), and checks your understanding before moving on. If you're working in a stack listed under "Currently Learning" in your Dev Profile, the explanations will be thorough and the questions will push you to understand the new patterns. If you're working in a stack listed under "Strong Skills," the explanations will be lighter and the understanding checks will focus on deeper architectural concepts rather than beginner patterns.

After each step, Tandem marks the roadmap checkbox. Start a new `/pair-program` session for the next step.

## Step 7: When things change

Plans change. If you realize mid-build that a feature should work differently, or your architecture needs to shift, use `/update-docs` to keep your documentation in sync. If you make a significant technical decision (switched from REST to GraphQL, chose a different auth approach), use `/create-adr` to record why.

The documents should reflect what you actually built, not what you originally planned. That's how real projects work.

---

Happy building.
