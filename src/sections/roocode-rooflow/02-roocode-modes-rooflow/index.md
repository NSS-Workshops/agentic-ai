Now that you have RooCode set up securely with the RooFlow system prompts, it's time to explore what makes it truly powerful: its specialized AI modes. Think of this as upgrading from having one general assistant to having a specialized team of experts, each with their own expertise and personality.

## Understanding RooCode Modes

Traditional AI assistants try to be everything to everyone. RooCode takes a different approach by providing **specialized modes**, each optimized for specific types of development tasks. This is like having different specialists on your development team rather than one person trying to do everything.

### The Core Modes

#### Flow Ask Mode

Ask Mode serves as your dedicated research assistant and explainer, designed with a patient, educational personality that excels at thorough explanations. This mode becomes your go-to resource when you need to understand concepts and technologies, get clear explanations of existing code, conduct research and learning, or ask quick questions that need clarification. Think of Ask Mode as that knowledgeable colleague who always has time to explain things clearly and never makes you feel rushed.

When you interact with Ask Mode, you'll notice its educational approach immediately. For example, when you ask "Can you explain how React hooks work?", Ask Mode responds with comprehensive explanations like "React hooks are functions that let you 'hook into' React state and lifecycle features from function components..." The mode takes time to build understanding progressively, ensuring you grasp both the concept and its practical applications.

#### Flow Code Mode

Code Mode functions as your dedicated implementation specialist, bringing a focused, practical, code-first approach to every interaction. This mode excels when you need to write new code, refactor existing implementations, conduct code reviews and optimization, or implement specific features with precision and efficiency. Code Mode cuts straight to the implementation details, providing working solutions rather than lengthy explanations.

The personality of Code Mode reflects its purpose—it's direct, solution-oriented, and always ready to produce tangible results. When you request "I need a React component for user authentication," Code Mode immediately responds with "I'll create a comprehensive auth component with form validation..." and then delivers functional code that you can use immediately. This mode understands that sometimes you need less talking and more doing.

#### Flow Architect Mode

Architect Mode serves as your system designer and project planner, embodying strategic, big-picture thinking with a strong focus on documentation and long-term project success. This mode becomes invaluable when you need to plan project structure, design system architecture, make critical technology decisions, or create comprehensive documentation and specifications. Architect Mode thinks beyond immediate implementation needs, considering scalability, maintainability, and team collaboration from the outset.

The strategic personality of Architect Mode shines through in every interaction. When you request "Help me plan a new e-commerce application," Architect Mode responds thoughtfully with "Let's start by defining the core requirements and system architecture..." This mode takes time to understand your broader goals before diving into technical details, ensuring that every architectural decision aligns with your project's long-term vision and constraints.

#### Flow Debug Mode

Debug Mode operates as your dedicated troubleshooting specialist, bringing a methodical, analytical approach that focuses intensely on problem-solving. This mode excels at identifying and fixing bugs, optimizing performance, conducting thorough error analysis, and developing comprehensive testing strategies. Debug Mode approaches every issue with systematic precision, breaking down complex problems into manageable components that can be analyzed and resolved step by step.

The methodical personality of Debug Mode becomes apparent immediately when you encounter issues. When you report "My React app is crashing with this error..." Debug Mode responds with structured analysis: "Let's analyze this error systematically. First, let's examine the stack trace..." This mode never rushes to conclusions, instead following logical debugging processes that ensure thorough investigation and reliable solutions.

#### Flow Orchestrator Mode

RooFlow automatically determines which mode is best for each task and can coordinate multiple modes to complete complex workflows seamlessly. This intelligent orchestration removes the cognitive overhead of deciding which mode to use, allowing you to focus on your development goals while RooFlow manages the workflow coordination behind the scenes.

For example, when you ask _"Orchestrate all of the specific tasks needed to plan, develop, and test the following feature: {insert feature here},"_ RooFlow orchestrates a comprehensive workflow that begins with Architect Mode to design the system architecture and requirements. The system then transitions to Code Mode to implement the necessary components with proper structure and functionality. Debug Mode takes over to test the implementation and troubleshoot any issues that arise during development. Finally, RooFlow returns to Architect Mode to document the completed solution, ensuring that your authentication system is not only functional but also properly documented for future reference and team collaboration.


### Mode Switching and Context

One of RooCode's key advantages is **context preservation** across modes. When you switch from Ask Mode to Code Mode, the conversation history and project understanding carries over seamlessly. This creates a natural workflow where you can research concepts and gather information with Ask Mode, then transition to strategic planning with Architect Mode, move into active implementation with Code Mode, and finally troubleshoot any issues with Debug Mode—all while maintaining the same project context and conversation thread.

This context preservation transforms how you approach development work. Instead of starting fresh with each new task or losing important details when switching between different types of work, RooCode maintains a continuous understanding of your project, your decisions, and your progress. The result is a more cohesive development experience that mirrors how you naturally think about and work on projects.

### Best Practices for Token Management

Effective token management starts with being concise in your communications. Clear, specific requests use fewer tokens than rambling descriptions, making your interactions more efficient and leaving more room for detailed responses. For example, instead of saying "So I'm working on this project and I think I need some kind of component that handles user stuff and maybe authentication and I'm not sure how to structure it..." you'll get better results with "I need a React authentication component with login/logout functionality."


## The Memory Bank System

The Memory Bank is RooFlow's persistent memory system that maintains project context across sessions and modes. Think of it as your project's "institutional memory." It is a more powerful, accessible and customizeable version of the Cursor Memories feature.

### Memory Bank Components

#### Product Context

Product Context serves as the repository for high-level project information that defines the foundation of your development work. This component stores your project goals and requirements, providing a clear reference point for what you're building and why. It maintains records of technology stack decisions, documenting not just what technologies you've chosen but the reasoning behind those choices. The overall architecture lives here as well, giving every mode access to your system's big-picture design. Additionally, Product Context captures key constraints and considerations that influence development decisions, ensuring that limitations and requirements remain visible throughout the project lifecycle.

#### Active Context

Active Context focuses on current session information, maintaining awareness of what you're actively working on right now. This component tracks recent decisions and changes, providing immediate context about the latest developments in your project. It maintains a running list of open questions and issues that need attention, ensuring that important concerns don't get lost in the flow of development work. Active Context also manages your next steps and priorities, helping maintain focus and direction across different modes and sessions.

#### Decision Log

The Decision Log captures important decisions and their rationale, creating a historical record of your project's evolution. This component documents technology choices along with the reasoning behind them, helping future decisions build on past thinking rather than repeating analysis. Architecture decisions are preserved here with their context and alternatives considered, providing valuable insight when similar decisions arise later. Implementation approaches are recorded along with the trade-offs and alternatives that were evaluated, creating a knowledge base that grows more valuable over time.

#### Progress Tracking

Progress Tracking maintains a comprehensive view of development progress across all aspects of your project. This component keeps records of completed tasks, providing a sense of accomplishment and a reference for what has already been achieved. Current work items are tracked with their status and context, ensuring that nothing falls through the cracks when switching between modes or sessions. The system also monitors blockers and dependencies, helping identify and resolve issues that could impede progress. Timeline and milestones are maintained to provide project-level visibility into progress and planning.

#### System Patterns

System Patterns stores reusable patterns and standards that maintain consistency across your project. This component documents coding conventions that your project follows, ensuring that all generated code adheres to your established style and practices. Architecture patterns are captured and can be referenced when similar design challenges arise, promoting consistency and leveraging proven solutions. Common solutions to recurring problems are stored here, building a project-specific knowledge base that improves efficiency over time. Best practices specific to your project are documented and accessible to all modes, ensuring that hard-won insights are preserved and applied consistently.

### Memory Bank Benefits

The Memory Bank delivers consistency by ensuring all modes access the same project information, which guarantees that whether you're working in Ask Mode, Code Mode, Architect Mode, or Debug Mode, you'll receive responses that align with your project's established context, decisions, and patterns. This shared knowledge base eliminates the confusion that can arise when different tools or assistants provide conflicting advice based on incomplete information.

Continuity represents another major advantage, as context persists across sessions regardless of how long you're away from your project. You can close RooCode, work on other projects, or take a break for days or weeks, then return to find your project context fully intact and ready to support your continued development work. This persistence transforms how you can approach long-term projects, removing the friction of re-establishing context every time you return to work.

The Memory Bank also enables true collaboration by allowing multiple team members to access the same project memory. When your colleagues interact with RooCode on the same project, they benefit from the accumulated knowledge, decisions, and patterns that the team has established over time. This shared context ensures that everyone works from the same understanding of the project's goals, constraints, and established practices.

Perhaps most powerfully, the Memory Bank learns your project's patterns and preferences over time, becoming increasingly valuable as your project evolves. The system recognizes recurring themes in your decisions, understands your preferred approaches to common problems, and adapts its suggestions to align with your established patterns. This learning capability means that RooCode becomes more effective and personalized the longer you work with it on a project.

#### Workflow Templates

RooFlow provides pre-built workflows for common development scenarios, eliminating the need to reinvent processes for routine development tasks. The New Feature Development template guides you through the complete lifecycle from initial planning and design through implementation, testing, and documentation. The Bug Investigation and Fix workflow provides a systematic approach to identifying, analyzing, and resolving issues while ensuring proper testing and prevention measures.

The Code Review and Refactoring template helps maintain code quality by providing structured approaches to reviewing existing code and implementing improvements safely. Architecture Planning workflows assist with system design decisions, technology evaluations, and long-term planning considerations. Finally, Documentation Creation templates ensure that your project knowledge is captured effectively, whether you're creating API documentation, user guides, or technical specifications.

## Practical Mode Usage Examples

### Scenario 1: Building a New Feature

**Starting Point**: "I need to add user profiles to my React app"

**RooFlow Workflow**: RooFlow begins by engaging Architect Mode to design the user profile system, asking strategic questions like "What data do you need to store?" to establish the foundation and requirements. The workflow then transitions seamlessly to Code Mode, which takes the architectural decisions and creates the actual profile components and API integration with proper structure and functionality. Debug Mode follows to test the implementation thoroughly and handle edge cases that might not have been apparent during initial development. Finally, Ask Mode concludes the workflow by providing comprehensive documentation on how to use the new profile system, ensuring that the feature is not only built but also properly explained for future reference and team adoption.

### Scenario 2: Debugging an Issue

**Starting Point**: "My app crashes when users click the submit button"

**RooFlow Workflow**: RooFlow immediately engages Debug Mode to systematically analyze the error and identify the root cause through methodical investigation techniques. Once the problem is understood, Code Mode takes over to implement the necessary fix and add appropriate error handling to prevent similar issues in the future. The workflow concludes with Ask Mode providing a clear explanation of what caused the issue and comprehensive guidance on how to prevent similar problems, turning the debugging experience into a learning opportunity that strengthens the overall application.

### Scenario 3: Planning a New Project

**Starting Point**: "I want to build a task management application"

**RooFlow Workflow**: RooFlow starts with Ask Mode to explore task management patterns and gather requirements, ensuring a solid understanding of the problem domain and user needs before making any technical decisions. Architect Mode then takes the research and requirements to design the system architecture and select an appropriate technology stack that aligns with the project goals and constraints. Finally, Code Mode begins the implementation process by creating the core components and data models that form the foundation of the task management application, establishing the essential building blocks for future development.

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


## Practice Exercises

### Exercise 1: Mode Exploration

This exercise helps you experience each mode's personality and capabilities firsthand. Begin by engaging Ask Mode with "Explain the difference between props and state in React" to experience its educational, thorough approach to explanations. Next, switch to Code Mode and request "Create a React counter component" to see how it immediately focuses on implementation without lengthy explanations. Move to Architect Mode and ask it to "Plan the structure for a blog application" to observe its strategic, big-picture thinking approach. Finally, engage Debug Mode with "Help me understand this error: 'Cannot read property of undefined'" to experience its methodical, analytical problem-solving style. This progression will give you a clear sense of how each mode's personality and capabilities differ.

### Exercise 2: Memory Bank Usage

This exercise demonstrates how the Memory Bank builds up project context across different modes. Start with Architect Mode to define a simple project such as an expense tracker, allowing it to establish the foundational project context in the Memory Bank. Then switch to Code Mode and implement a core component, observing how it accesses and builds upon the project context established by Architect Mode. Next, engage Ask Mode to ask about best practices for your specific project, noting how it provides advice tailored to your expense tracker rather than generic guidance. Throughout this exercise, verify that each mode remembers your project context by observing how their responses reference previous decisions and maintain consistency with your established project goals.

### Exercise 3: RooFlow Workflow

This exercise lets you experience RooFlow's orchestration capabilities for complete feature development. Begin with the high-level request "Help me add user authentication to my app" and let RooFlow take the lead in coordinating the workflow. Follow RooFlow's suggested workflow as it moves between modes, paying attention to how each transition builds logically on the previous mode's work. Notice how modes coordinate seamlessly and how context flows naturally from planning through implementation to testing and documentation. Complete the entire feature development process with RooFlow guidance, observing how the orchestration system manages complexity while keeping you focused on the actual development work rather than workflow management.

## What's Next?

In the next chapter, we'll dive deep into **Architect Mode** - the strategic planning mode that helps you design robust, scalable applications. You'll discover how to leverage Architect Mode for comprehensive system architecture design that considers scalability, maintainability, and long-term project success. The chapter will guide you through making informed technology stack decisions that align with your project goals and constraints, while also covering effective project planning and documentation strategies that keep your development work organized and purposeful.

Additionally, you'll learn about quality improvement strategies that Architect Mode can help you implement throughout your project lifecycle. We'll also explore the powerful integration between Architect Mode and the Memory Bank, showing how this combination maintains long-term project vision and consistency across all your development work. This deep dive will transform how you approach the strategic aspects of software development, giving you the tools to build applications that are not just functional, but truly well-architected.
