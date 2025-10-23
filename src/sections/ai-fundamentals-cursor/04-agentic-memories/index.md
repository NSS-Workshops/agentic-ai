## What is Agentic AI?

So far, we've been using AI as a **reactive** too*—you ask a question, it gives an answer. But what if AI could be more proactive and autonomous? That's where agentic AI comes in.

Agentic AI refers to AI systems that can take initiative by suggesting next steps without being asked, maintain context by remembering previous conversations and decisions, work independently to complete multi-step tasks with minimal supervision, and learn from interactions to improve responses based on your preferences and patterns.

Think of it as the difference between a **calculator** (reactive) and a **personal assistant** (agentic).


### Traditional AI vs. Agentic AI

**Traditional AI Interaction:**
```
You: "Write a login function"
AI: [Generates code]
You: "Add error handling"
AI: [Generates updated code]
You: "Make it work with our database"
AI: [Generates another version]
```
*Each interaction starts from scratch*

**Agentic AI Interaction:**
```
You: "I'm building a user authentication system"
AI: "I'll help you build this step by step. First, let me understand your requirements. Based on your project, I suggest we start with login, then registration, then password reset. Should I create a plan?"
You: "Yes"
AI: [Creates comprehensive plan, remembers it, and guides you through implementation]
```
*The AI maintains context and takes initiative*

## The Memory Problem in AI Development

### Context Window Limitations

Remember from Chapter 1 that LLMs have **context window limits**—they can only "remember" a certain amount of conversation. For most models, this is equivalent to about 20-50 pages of text.

**What happens when you exceed this limit:** Early conversation is forgotten as the AI loses track of your project goals, leading to repeated explanations where you have to re-explain your setup constantly. This results in inconsistent suggestions where the AI might contradict earlier recommendations, and lost architectural decisions where important project choices get forgotten entirely.

### Real-World Example

Imagine you're building an e-commerce site over several weeks:

**Week 1:** You discuss the overall architecture with AI
**Week 2:** You work on user authentication (AI has forgotten Week 1)
**Week 3:** You add shopping cart features (AI has forgotten Weeks 1-2)
**Week 4:** You integrate payment processing (AI has forgotten everything)

Without memory, each week feels like starting over with a new developer who knows nothing about your project.

## Introducing AI Memories

**AI Memories** solve the context problem by giving AI systems the ability to **persistently store and recall information** across conversations.

### How Memories Work

Think of AI memories like a **digital notebook** that the AI maintains about your project. This notebook contains your project context including goals, architecture, and technology choices, along with your preferred code patterns, coding styles, and conventions. It also tracks decisions made with their reasoning, monitors progress by recording what's been completed and what's next, and learns your personal preferences about how you like to work and communicate.

### Types of Memory Systems

1. **Session Memory (Short-term)** remembers the current conversation but is lost when you close the chat, functioning much like human short-term memory.
2. **Project Memory (Medium-term)** remembers information about specific projects and persists across multiple sessions, similar to taking notes in a project notebook that you can reference later.
3. **Personal Memory (Long-term)** learns your general preferences and patterns, applying this knowledge across all projects like a colleague who has worked with you long enough to understand how you prefer to work.

## Cursor's Memories Feature

Cursor includes a **Memories** feature that provides project-level context persistence.

### How to Use Cursor Memories

Enable **Memories** by:

1. Open Cursor Settings
2. Click on **Rules & Memories**
3. Ensure that the **Memories** toggle button is set to ON.


**Create Project Memories** by mentioning key project information in any chat, as Cursor automatically identifies important context, though you can also manually add memories when needed.

**Examples of what triggers Cursor to store memories:**

- **Technology Stack Mentions**: "I'm building a React app with TypeScript and Firebase"
- **Project Architecture Decisions**: "We're using a microservices architecture with separate APIs for user management and payments"
- **Code Patterns and Conventions**: "In this project, we always use async/await instead of .then() for promises"
- **Database Schema Information**: "Our User table has fields for email, username, created_at, and profile_image_url"
- **API Endpoints and Structure**: "The authentication API is at /api/auth with endpoints for login, register, and refresh-token"
- **Team Conventions**: "We follow the Airbnb ESLint rules and use Prettier for code formatting"
- **Project Goals and Requirements**: "This is an e-commerce site that needs to handle 1000+ concurrent users"

**Example of manually forcing a Memory:**

| Participant | Content |
| --- | --- |
| **You** | "Please remember that in this project we always use styled-components for CSS-in-JS, never regular CSS files. This is a team convention that should be applied to all new components." |
| **Cursor** | "I'll remember that your team uses styled-components for all styling instead of regular CSS files. This will help me suggest the right approach for future components." |


### Review and Manage Memories

In the same panel where you activated Memories, there is a section where you can view everything that Cursor has saved as long-term context about your project. Just click the **Show** button. You can also delete any of the Memories when strategies change or become obsolete.

### Example: Building with Memories

Here's how Memories can help you have more natural conversations with the LLM as project context is stored over time.

#### First Conversation

| Participant | Content |
| --- | --- |
| **You** | "I'm starting a React e-commerce project using Firebase and Stripe" |
| **Cursor** | "Great! I'll remember that you're using React, Firebase for backend, and Stripe for payments. What's the first feature you'd like to build?" |
| **You** | "I'd like to start by installing the dependencies for Firebase and set up project configurations for it." |
| **Cursor** | "Let's get started..." |

#### Later Conversation (Days Later)

| Participant | Content |
| --- | --- |
| **You** | "I need to add user authentication to my project" |
| **Cursor** | "Since you're using Firebase, you can use the existing Firebase Auth feature to integrate with your existing setup. Should I set up the Firestore user profiles we discussed, or start building a React component for displaying the Firebase authentication view?" |

## Benefits of Memory-Enabled AI

### Consistent Architecture

AI maintains awareness of your project's overall structure, ensuring suggestions align with previous decisions and reducing architectural inconsistencies.

### Faster Development

There's no need to re-explain your setup each time—the AI can reference previous work and build on existing patterns.

### Better Code Quality

This is a possible benefit from the AI learning your coding standards, maintaining consistency across features, and applying lessons learned from previous code.

### Project Continuity

It can allow you to pick up where you left off even after breaks, as the AI remembers incomplete features and next steps while maintaining context across team members.

## Best Practices for AI Memories

Follow these essential practices to maximize the benefits of AI memories while avoiding common pitfalls.

- Review memories regularly to ensure accuracy
- Be explicit about important decisions to help the AI capture key information effectively.
- Update memories when requirements change to keep information current
- Use memories as a supplement rather than a replacement for proper documentation.

## Practice

**Enable Cursor Memories** in your settings to begin experimenting with persistent AI context. **Start a practice project** with something simple like a todo app or calculator that you can develop over multiple sessions. **Have multiple conversations** about the project across different days to experience how memory persistence works in practice. **Notice how context is maintained** by observing what Cursor remembers and what it forgets between sessions. **Document your experience** by recording what worked well and what was frustrating about the memory system. **Review your memories** by checking what Cursor stored and editing the information if needed to ensure accuracy.

## Section 1 Summary

Congratulations! You've completed the foundation section of this workshop. You now understand:

- **How LLMs work** as prediction engines
- **The importance of context** in professional AI-assisted development
- **Prompt engineering techniques** for better AI responses
- **Cursor IDE's AI features** and how to use them effectively
- **Agentic AI concepts** and memory systems
