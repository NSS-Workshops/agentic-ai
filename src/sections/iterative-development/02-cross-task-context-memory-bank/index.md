# Cross-task Context with Memory Bank

One of the biggest challenges in iterative development is maintaining context across multiple work sessions. When you close RooCode and come back later, the AI doesn't remember your previous conversations, decisions, or project details. This is where RooFlow's Memory Bank feature becomes invaluable.

## The Context Problem

Imagine you're building your portfolio site over several days:

**Day 1**: You work with Architect mode to plan your site structure and use Ask mode to set up the basic Astro project.

**Day 2**: You open RooCode to continue development, but the AI has no memory of:
- What you built yesterday
- The decisions you made about the site structure
- The specific requirements you discussed
- The coding patterns you established

Without context, you'd have to re-explain everything, leading to:
- Inconsistent code styles
- Repeated discussions about the same topics
- Loss of architectural decisions
- Frustration and wasted time

## What is the Memory Bank?

The Memory Bank is RooFlow's solution for persistent context management. Think of it as a project diary that automatically captures and organizes important information about your development process.

Like a well-organized filing system, the Memory Bank stores:
- **Project goals and requirements** (what you're building and why)
- **Architectural decisions** (technical choices you've made)
- **Progress tracking** (what's completed and what's next)
- **Active context** (current focus and immediate goals)
- **System patterns** (coding standards and conventions you're following)

## How the Memory Bank Works

### Automatic Context Capture

When you activate the Memory Bank, RooFlow automatically:
- Analyzes your conversations with different modes
- Extracts key decisions and requirements
- Tracks your progress through development phases
- Maintains a record of your project's evolution

### Structured Information Storage

The Memory Bank organizes information into specific categories, each stored in its own markdown file:

```
memory-bank/
├── productContext.md     # Overall project vision and goals
├── activeContext.md      # Current session focus and immediate tasks
├── progress.md          # Task completion tracking
├── decisionLog.md       # Technical and architectural decisions
└── systemPatterns.md    # Code patterns and conventions
```

## Activating the Memory Bank

### Step 1: Create Your Project Brief

Before activating the Memory Bank, create a `projectBrief.md` file in your project root. This file serves as the initial context for your project.

**Example projectBrief.md for a portfolio site:**

```markdown
# Personal Portfolio Website

## Project Overview
Building a modern, responsive portfolio website to showcase my web development skills and projects.

## Target Audience
- Potential employers
- Freelance clients
- Fellow developers

## Key Requirements
- Clean, professional design
- Mobile-responsive layout
- Fast loading times
- Easy to update content
- SEO optimized

## Technical Preferences
- Framework: Astro (for performance and simplicity)
- Styling: CSS modules or Tailwind CSS
- Deployment: Netlify or Vercel
- Content: Markdown for blog posts/project descriptions

## Pages Needed
1. Homepage - Introduction and overview
2. About - Background and skills
3. Projects - Portfolio showcase
4. Blog - Technical writing (optional)
5. Contact - Contact information and form

## Success Criteria
- Site loads in under 2 seconds
- Looks professional on all devices
- Easy for me to add new projects
- Showcases both technical and design skills
```

### Step 2: Activate the Memory Bank

Once you have your `projectBrief.md` file, create a new task in RooCode and use this exact prompt:

```
Activate the memory bank for this project. You can use @/projectBrief.md file as initial context
```

This command tells RooFlow to:
1. Initialize the Memory Bank system
2. Read your project brief
3. Create the structured memory files
4. Begin tracking context for future sessions

## Understanding the Memory Bank Files

After activation, you'll see a new `memory-bank` directory in your project. Let's explore what each file contains:

### productContext.md

This file captures the high-level vision and requirements for your project. It's based on your initial project brief but evolves as your understanding of the project deepens.

**Example content:**
```markdown
# Product Context

## Project Goal
Create a professional portfolio website that effectively showcases web development skills and attracts potential employers or clients.

## Key Features
- Responsive design that works on all devices
- Project showcase with detailed case studies
- About section highlighting skills and experience
- Contact form for inquiries
- Blog section for technical writing

## Overall Architecture
- Static site built with Astro for optimal performance
- Component-based architecture for maintainability
- Markdown content for easy updates
- Modern CSS for styling (CSS modules or Tailwind)
```

### activeContext.md

This file tracks your current focus and immediate goals. It's updated frequently as you work through different phases of development.

**Example content:**
```markdown
# Active Context

## Current Focus
Setting up the basic Astro project structure and creating the homepage layout.

## Recent Changes
- Initialized Astro project with TypeScript support
- Created basic page structure (index, about, projects, contact)
- Set up CSS modules for styling

## Open Questions/Issues
- Should we use Tailwind CSS or stick with CSS modules?
- How to structure the project showcase data?
- What's the best way to handle responsive images?
```

### progress.md

This file maintains a task list showing what's completed, in progress, and planned.

**Example content:**
```markdown
# Progress

## Completed Tasks
- ✅ Project planning and requirements gathering
- ✅ Astro project initialization
- ✅ Basic page structure creation

## Current Tasks
- 🔄 Homepage layout and content
- 🔄 Navigation component development

## Next Steps
- 📋 About page content and layout
- 📋 Project showcase component
- 📋 Contact form implementation
```

### decisionLog.md

This file records important technical and architectural decisions with the reasoning behind them.

**Example content:**
```markdown
# Decision Log

## Decision: Use Astro Framework
**Rationale:** Astro provides excellent performance for content-focused sites like portfolios. It generates static HTML by default but allows for interactive components when needed.

**Implementation Details:**
- Initialized with TypeScript support
- Using file-based routing
- Planning to use Astro components for reusable UI elements

## Decision: CSS Modules for Styling
**Rationale:** CSS modules provide scoped styling without the overhead of a full CSS framework. This keeps the bundle size small while preventing style conflicts.
```

### systemPatterns.md

This file documents coding patterns and conventions you're following in the project.

**Example content:**
```markdown
# System Patterns

## Coding Patterns
- Use TypeScript for type safety
- Follow Astro's component conventions
- Keep components small and focused
- Use descriptive variable and function names

## Architectural Patterns
- File-based routing for pages
- Component composition over inheritance
- Separation of content (markdown) from presentation (components)

## Testing Patterns
- Unit tests for utility functions
- Integration tests for complex components
- Manual testing for responsive design
```

## Working with the Memory Bank

### Context Continuity

When you start a new RooCode session, the Memory Bank ensures continuity by:
- Providing the AI with your project's history
- Maintaining awareness of previous decisions
- Understanding your current progress and goals
- Preserving your coding patterns and preferences

### Updating Context

As you work, the Memory Bank automatically updates based on your conversations. However, you can also manually update files when:
- You make significant architectural decisions
- Your project requirements change
- You complete major milestones
- You establish new coding patterns

### Cross-Mode Consistency

The Memory Bank ensures that all RooCode modes (Architect, Ask, Code, Debug) have access to the same context, providing:
- Consistent architectural guidance
- Aligned implementation approaches
- Coherent problem-solving strategies
- Unified coding standards

## Best Practices for Memory Bank Usage

### 1. Keep Your Project Brief Updated

As your project evolves, update your `projectBrief.md` file to reflect new requirements or changes in direction.

### 2. Review Memory Bank Files Regularly

Periodically check the memory bank files to ensure they accurately reflect your project's current state.

### 3. Be Explicit About Important Decisions

When making significant technical decisions, explicitly mention them in your conversations so they get captured in the decision log.

### 4. Use Descriptive Task Names

When creating new tasks, use clear, descriptive names that help maintain context across sessions.

### 5. Add Memory Bank to .gitignore

The memory bank contains AI-generated summaries and may include sensitive project information. Add it to your `.gitignore` file:

```gitignore
# RooFlow Memory Bank
memory-bank/
```

This prevents the memory bank files from being committed to your repository while keeping them available locally for context.

## Exercise: Activating Memory Bank for Your Portfolio

Now it's time to set up the Memory Bank for your portfolio project:

### Step 1: Create Your Project Brief

1. In your portfolio project directory, create a `projectBrief.md` file
2. Include the following sections:
   - Project overview and goals
   - Target audience
   - Key requirements
   - Technical preferences
   - Pages/features needed
   - Success criteria

### Step 2: Activate the Memory Bank

1. Open RooCode and create a new task
2. Use the activation prompt: `Activate the memory bank for this project. You can use @/projectBrief.md file as initial context`
3. Observe the memory bank files that get created

### Step 3: Explore the Generated Files

1. Navigate to the `memory-bank` directory
2. Open each file and review the generated content
3. Notice how your project brief has been processed and organized

### Step 4: Update Your .gitignore

Add the memory bank directory to your `.gitignore` file to keep it local.

### Step 5: Continue Development

Use Ask mode to continue building your portfolio, and notice how the AI maintains context about your project goals and previous decisions.

## Troubleshooting Common Issues

### Memory Bank Not Created

If the memory bank directory doesn't appear:
- Ensure your `projectBrief.md` file exists in the project root
- Check that you used the exact activation prompt
- Verify you're in the correct project directory

### Inconsistent Context

If the AI seems to lose context:
- Check that the memory bank files contain accurate information
- Update the `activeContext.md` file with your current focus
- Explicitly reference previous decisions in your prompts

### Outdated Information

If the memory bank contains outdated information:
- Manually edit the relevant files to reflect current state
- Use clear, explicit language about changes in your conversations
- Consider re-activating the memory bank if major changes occur

## Key Takeaways

- **Memory Bank provides persistent context** across development sessions
- **Activation requires a project brief** that serves as initial context
- **Five structured files** organize different types of project information
- **Context continuity** ensures consistent AI assistance over time
- **Manual updates** may be needed for significant project changes
- **Add memory-bank to .gitignore** to keep files local

The Memory Bank transforms RooCode from a session-based tool into a true development partner that grows with your project. In the next section, you'll learn how to apply these iterative development and context management skills to work with existing codebases—a crucial skill for real-world development scenarios.