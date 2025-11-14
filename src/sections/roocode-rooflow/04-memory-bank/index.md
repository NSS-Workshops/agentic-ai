
1. Make sure you have **Coins R Us** project open in VS Code
2. Start a new task in RooCode
3. Choose **Flow Architect** mode
4. Enter the prompt `Initialize the memory bank for this project`
5. Wait for it to start the initialization process. It will read the **README.md** file to get some initial context and then ask you to verify that you want to initialize the memory bank for the project.
6. Choose the option: _"Yes, initialize a new Memory Bank and import README.md content as initial context."_

It will create many markdown files during this process, so just be patient until it completes. When the process is complete, open all of the markdown files that are in the `memory-bank` directory to see what context that it recorded about Coins R Us.

## The Memory Bank System

The Memory Bank is RooFlow's persistent memory system that maintains project context across sessions and modes. Think of it as your project's "institutional memory." It is a more powerful, accessible and customizeable version of the Cursor Memories feature.

### Product Context

Product Context serves as the repository for high-level project information that defines the foundation of your development work. This file stores your project goals and requirements, providing a clear reference point for what you're building and why.

File: `productContext.md`

### Active Context

Active Context focuses on current session information, maintaining awareness of what you're actively working on right now. This file tracks recent decisions and changes, providing immediate context about the latest developments in your project.

File: `activeContext.md`

### Decision Log

The Decision Log captures important decisions and their rationale, creating a historical record of your project's evolution. This file documents technology choices along with the reasoning behind them, helping future decisions build on past thinking rather than repeating analysis.

File: `decisionLog.md`

### Progress Tracking

Progress Tracking maintains a comprehensive view of development progress across all aspects of your project. This component keeps records of completed tasks, providing a sense of accomplishment and a reference for what has already been achieved.

File: `progress.md`

### System Patterns

System Patterns stores reusable patterns and standards that maintain consistency across your project. This component documents coding conventions that your project follows, ensuring that all generated code adheres to your established style and practices. Architecture patterns are captured and can be referenced when similar design challenges arise, promoting consistency and leveraging proven solutions.

File: `systemPatterns.md`

### Memory Bank Benefits

The Memory Bank delivers consistency by ensuring all modes access the same project information, which guarantees that whether you're working in Ask, Code, Architect, or Debug, you'll receive responses that align with your project's established context, decisions, and patterns. This shared knowledge base eliminates the confusion that can arise when different tools or assistants provide conflicting advice based on incomplete information.

Continuity represents another major advantage, as context persists across sessions regardless of how long you're away from your project. You can close RooCode, work on other projects, or take a break for days or weeks, then return to find your project context fully intact and ready to support your continued development work. This persistence transforms how you can approach long-term projects, removing the friction of re-establishing context every time you return to work.

The Memory Bank also enables true collaboration by allowing multiple team members to access the same project memory. When your colleagues interact with RooCode on the same project, they benefit from the accumulated knowledge, decisions, and patterns that the team has established over time. This shared context ensures that everyone works from the same understanding of the project's goals, constraints, and established practices.

## Memory Bank in Action

Let's see how the Memory Bank maintains context across a development session:

### Initial Setup (Architect Mode)
```
You: "I'm building a recipe sharing app with React and Node.js"
Architect: "I'll help you design this system. Let me update the Memory Bank with your project details..."

[Memory Bank Updated]
- Product Context: Recipe sharing application
- Technology Stack: React frontend, Node.js backend
- Current Phase: Planning
```

### Implementation (Code Mode)
```
You: "Now I need to create the recipe component"
Code: "Based on your recipe sharing app requirements, I'll create a comprehensive recipe component..."

[Accesses Memory Bank]
- Knows this is for recipe sharing
- Understands React is the frontend framework
- Maintains consistent naming conventions
```

### Later Session (Ask Mode)
```
You: "How should I handle recipe image uploads?"
Ask: "For your recipe sharing app, here are the best practices for image uploads..."

[Memory Bank provides context]
- Remembers this is a recipe app
- Knows the technology stack
- Provides relevant, project-specific advice
```

## Practice

You will continue to work on your Marketplace feature for the Coins R Us team project. However, at this point, you are going to store strategic and architectual decision for long-term context in the Memory Bank.

Use this prompt in a new task in Roo Code, making sure that you are in **Flow Architect** mode.

```
Activate the memory bank for this task.

Read the contents of my design document for the Marketplace feature: {insert your file name here}

Import all decisions and patterns into the memory bank
```

If your team hasn't completed this feateure yet, continue to develop it with the assistance of the LLM.

If your team has already implement the Marketplace, consider implementing one of these features. Make sure that you explicitly tell the LLM to activate the memory bank during the planning stage to store decisions:

1. Coin Bank - A new view that lists the coins owned by the current user
2. Coin Images - Augment the Add Coin form to allow the user to upload an image file for a coin _(you can search the web for example images)_
3. Coin Notes - Add a new button to the UI next to each coin the user owns that, when clicked, shows a new view that allows the user to enter in addtional notes about it.