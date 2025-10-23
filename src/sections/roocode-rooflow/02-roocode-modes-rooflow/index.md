Now that you have RooCode set up securely, it's time to explore what makes it truly powerful: its specialized AI modes and the RooFlow orchestration system. Think of this as upgrading from having one general assistant to having a specialized team of experts, each with their own expertise and personality.

## Understanding RooCode Modes

Traditional AI assistants try to be everything to everyone. RooCode takes a different approach by providing **specialized modes**, each optimized for specific types of development tasks. This is like having different specialists on your development team rather than one person trying to do everything.

### The Core Modes

#### Ask Mode 🤔

Ask Mode serves as your dedicated research assistant and explainer, designed with a patient, educational personality that excels at thorough explanations. This mode becomes your go-to resource when you need to understand concepts and technologies, get clear explanations of existing code, conduct research and learning, or ask quick questions that need clarification. Think of Ask Mode as that knowledgeable colleague who always has time to explain things clearly and never makes you feel rushed.

When you interact with Ask Mode, you'll notice its educational approach immediately. For example, when you ask "Can you explain how React hooks work?", Ask Mode responds with comprehensive explanations like "React hooks are functions that let you 'hook into' React state and lifecycle features from function components..." The mode takes time to build understanding progressively, ensuring you grasp both the concept and its practical applications.

#### Code Mode 💻

Code Mode functions as your dedicated implementation specialist, bringing a focused, practical, code-first approach to every interaction. This mode excels when you need to write new code, refactor existing implementations, conduct code reviews and optimization, or implement specific features with precision and efficiency. Code Mode cuts straight to the implementation details, providing working solutions rather than lengthy explanations.

The personality of Code Mode reflects its purpose—it's direct, solution-oriented, and always ready to produce tangible results. When you request "I need a React component for user authentication," Code Mode immediately responds with "I'll create a comprehensive auth component with form validation..." and then delivers functional code that you can use immediately. This mode understands that sometimes you need less talking and more doing.

#### Architect Mode 🏗️

Architect Mode serves as your system designer and project planner, embodying strategic, big-picture thinking with a strong focus on documentation and long-term project success. This mode becomes invaluable when you need to plan project structure, design system architecture, make critical technology decisions, or create comprehensive documentation and specifications. Architect Mode thinks beyond immediate implementation needs, considering scalability, maintainability, and team collaboration from the outset.

The strategic personality of Architect Mode shines through in every interaction. When you request "Help me plan a new e-commerce application," Architect Mode responds thoughtfully with "Let's start by defining the core requirements and system architecture..." This mode takes time to understand your broader goals before diving into technical details, ensuring that every architectural decision aligns with your project's long-term vision and constraints.

#### Debug Mode 🐛

Debug Mode operates as your dedicated troubleshooting specialist, bringing a methodical, analytical approach that focuses intensely on problem-solving. This mode excels at identifying and fixing bugs, optimizing performance, conducting thorough error analysis, and developing comprehensive testing strategies. Debug Mode approaches every issue with systematic precision, breaking down complex problems into manageable components that can be analyzed and resolved step by step.

The methodical personality of Debug Mode becomes apparent immediately when you encounter issues. When you report "My React app is crashing with this error..." Debug Mode responds with structured analysis: "Let's analyze this error systematically. First, let's examine the stack trace..." This mode never rushes to conclusions, instead following logical debugging processes that ensure thorough investigation and reliable solutions.

### Mode Switching and Context

One of RooCode's key advantages is **context preservation** across modes. When you switch from Ask Mode to Code Mode, the conversation history and project understanding carries over seamlessly. This creates a natural workflow where you can research concepts and gather information with Ask Mode, then transition to strategic planning with Architect Mode, move into active implementation with Code Mode, and finally troubleshoot any issues with Debug Mode—all while maintaining the same project context and conversation thread.

This context preservation transforms how you approach development work. Instead of starting fresh with each new task or losing important details when switching between different types of work, RooCode maintains a continuous understanding of your project, your decisions, and your progress. The result is a more cohesive development experience that mirrors how you naturally think about and work on projects.

## Token Limits and Context Management

### Understanding Token Limits

Each AI provider has **token limits** - the maximum amount of text (input + output) that can be processed in a single conversation. Think of tokens as "words" that the AI can remember:

| Provider | Model | Context Window | Approximate Pages |
|----------|-------|----------------|-------------------|
| Google Gemini | 1.5 Flash | 1M tokens | ~750 pages |
| OpenAI | GPT-4o | 128K tokens | ~96 pages |
| Anthropic | Claude 3.5 Sonnet | 200K tokens | ~150 pages |

### Context Window Management

When you approach token limits, RooCode automatically manages context through intelligent processing that ensures continuity without losing important information. The system summarizes older parts of the conversation while preserving recent and important information that remains relevant to your current work. Most importantly, RooCode maintains project-specific context through the Memory Bank, ensuring that your project's core knowledge and decisions persist even when conversation history must be condensed.

### Best Practices for Token Management

Effective token management starts with being concise in your communications. Clear, specific requests use fewer tokens than rambling descriptions, making your interactions more efficient and leaving more room for detailed responses. For example, instead of saying "So I'm working on this project and I think I need some kind of component that handles user stuff and maybe authentication and I'm not sure how to structure it..." you'll get better results with "I need a React authentication component with login/logout functionality."

Using appropriate modes also optimizes token usage since each mode is designed for different interaction patterns. Ask Mode operates efficiently for questions and explanations, providing comprehensive answers without unnecessary code generation. Code Mode is optimized specifically for code generation, focusing tokens on producing working implementations rather than lengthy explanations. Architect Mode is designed for high-level planning discussions, using tokens effectively for strategic thinking and documentation rather than detailed implementation.

## The Memory Bank System

The Memory Bank is RooCode's persistent memory system that maintains project context across sessions and modes. Think of it as your project's "institutional memory."

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

## Introducing RooFlow

RooFlow is RooCode's advanced workflow orchestration system. While basic RooCode provides specialized modes, RooFlow adds **intelligent coordination** between modes and **automated workflow management**.

### What RooFlow Adds

#### Intelligent Mode Orchestration

RooFlow automatically determines which mode is best for each task and can coordinate multiple modes to complete complex workflows seamlessly. This intelligent orchestration removes the cognitive overhead of deciding which mode to use, allowing you to focus on your development goals while RooFlow manages the workflow coordination behind the scenes.

For example, when you ask "Help me build a user authentication system," RooFlow orchestrates a comprehensive workflow that begins with Architect Mode to design the system architecture and requirements. The system then transitions to Code Mode to implement the necessary components with proper structure and functionality. Debug Mode takes over to test the implementation and troubleshoot any issues that arise during development. Finally, RooFlow returns to Architect Mode to document the completed solution, ensuring that your authentication system is not only functional but also properly documented for future reference and team collaboration.

#### Advanced Context Awareness

RooFlow maintains deeper context awareness that goes far beyond simple conversation history, understanding the nuanced aspects of your development environment and current situation. The system recognizes your project phase, whether you're in initial planning, active development, testing, or deployment, and adapts its recommendations and mode selections accordingly. RooFlow also understands your current focus area, recognizing when you're working on frontend components, backend services, database design, or other specialized aspects of your application.

The system's awareness extends to team dynamics, understanding whether you're working as a solo developer, leading a team, or contributing as part of a larger group. This understanding influences how RooFlow presents information, suggests collaboration approaches, and manages documentation. Additionally, RooFlow recognizes urgency levels, distinguishing between exploratory work, active development with deadlines, and critical production issues that require immediate attention. This contextual awareness ensures that RooFlow's orchestration aligns with both your technical needs and your situational constraints.

#### Workflow Templates

RooFlow provides pre-built workflows for common development scenarios, eliminating the need to reinvent processes for routine development tasks. The New Feature Development template guides you through the complete lifecycle from initial planning and design through implementation, testing, and documentation. The Bug Investigation and Fix workflow provides a systematic approach to identifying, analyzing, and resolving issues while ensuring proper testing and prevention measures.

The Code Review and Refactoring template helps maintain code quality by providing structured approaches to reviewing existing code and implementing improvements safely. Architecture Planning workflows assist with system design decisions, technology evaluations, and long-term planning considerations. Finally, Documentation Creation templates ensure that your project knowledge is captured effectively, whether you're creating API documentation, user guides, or technical specifications.

### RooFlow vs. Basic RooCode

| Feature | Basic RooCode | RooFlow |
|---------|---------------|---------|
| Mode Selection | Manual | Automatic + Manual |
| Context Management | Good | Excellent |
| Workflow Coordination | Basic | Advanced |
| Project Templates | None | Multiple |
| Cross-mode Memory | Yes | Enhanced |
| Automated Planning | No | Yes |

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

## Getting Started with RooFlow

### Enabling RooFlow

Getting started with RooFlow requires just a few simple configuration steps. Begin by opening RooCode Settings through your editor's preferences or command palette. Once in settings, enable RooFlow by toggling the "Use RooFlow Orchestration" option, which activates the intelligent workflow coordination system. The final step involves selecting your preferred workflow style from three available options: Guided mode where RooFlow suggests next steps but lets you make decisions, Automatic mode where RooFlow manages mode switching seamlessly, or Manual mode where you maintain control over mode switching while benefiting from RooFlow's enhanced context awareness.

### Your First RooFlow Session

Your first RooFlow experience should begin with a simple but complete workflow that demonstrates the system's capabilities. Start with a high-level request like "Help me create a simple todo app" that requires multiple types of work—planning, implementation, and testing. Let RooFlow guide you through its suggested approach, which will likely begin with Architect Mode to establish the project foundation and requirements. As you follow the workflow, RooFlow will coordinate seamlessly between modes, handling the transitions while you focus on the actual development work. Throughout this process, observe how the Memory Bank builds up context over time, capturing decisions, patterns, and project knowledge that will inform future interactions and make subsequent sessions even more effective.

## Best Practices for Mode Usage

### When to Use Each Mode

Understanding when to use each mode effectively maximizes your productivity and ensures you get the most appropriate type of assistance for your current needs. Ask Mode excels when you're learning new concepts, need to understand existing code, or require detailed explanations of complex topics. However, Ask Mode isn't the right choice when you need to write large amounts of code or plan system architecture, as its educational focus means it prioritizes explanation over implementation.

Code Mode becomes your primary tool when implementing features, writing functions and components, or refactoring existing code. This mode's strength lies in producing working, practical solutions quickly and efficiently. However, Code Mode isn't designed for high-level planning or providing conceptual explanations—it assumes you already understand what needs to be built and focuses on the implementation details.

Architect Mode serves as your strategic partner for project planning, system design, technology decisions, and documentation creation. This mode thinks at the system level, considering long-term implications and architectural patterns. However, Architect Mode isn't intended for detailed implementation work or debugging specific issues, as its focus remains on the big picture rather than immediate technical problems.

Debug Mode specializes in troubleshooting errors, performance optimization, and developing testing strategies. This mode approaches problems methodically and systematically, making it invaluable when things aren't working as expected. However, Debug Mode isn't designed for new feature development or system architecture work, as its analytical approach is optimized for problem-solving rather than creative development.

### Mode Switching Strategies

Effective mode switching strategies help you structure your development work for maximum efficiency and quality. The **Sequential Workflow** follows a traditional waterfall approach where you plan comprehensively with Architect Mode before moving to implementation with Code Mode, then testing with Debug Mode, and finally documentation with Ask Mode. This strategy works well for larger features or projects where upfront planning provides significant value and reduces the risk of major changes during implementation.

The **Iterative Workflow** embraces smaller cycles that repeat the plan-implement-test pattern for each feature or component. You begin each iteration with Architect Mode to plan the specific feature, transition to Code Mode to implement it, then use Debug Mode to test the implementation before moving to the next feature. This approach provides faster feedback loops and allows for course corrections based on what you learn during each iteration, making it ideal for projects where requirements may evolve or when you're exploring new technologies.

The **Problem-Solving Workflow** is specifically designed for troubleshooting and fixing issues. It starts with Ask Mode to understand the problem thoroughly, ensuring you grasp the context and potential causes before diving into solutions. Debug Mode then takes over to analyze the issue systematically and develop a fix strategy. Code Mode implements the actual solution based on the analysis, and Debug Mode returns to verify that the fix works correctly and doesn't introduce new issues. This workflow ensures thorough problem resolution while building understanding that prevents similar issues in the future.

## Troubleshooting Mode Issues

### Mode Not Responding Appropriately

When Code Mode gives explanations instead of code, the issue typically stems from requests that are too vague or conceptual. The solution involves being more specific in your requests to align with Code Mode's implementation-focused personality. Instead of asking "Tell me about authentication," which invites explanation, request "Create a login component with email and password fields," which clearly indicates you want working code. This specificity helps Code Mode understand that you need implementation rather than education.

### Context Not Carrying Over

When a new mode doesn't remember previous conversation details, the problem usually relates to Memory Bank status or context preservation issues. Begin troubleshooting by verifying that the Memory Bank is enabled in your RooCode settings, as disabled memory systems can't maintain context across mode switches. Next, check if context was properly saved during your previous interactions—sometimes rapid mode switching can interrupt the context saving process. If the Memory Bank is functioning but context seems incomplete, manually reference previous decisions or key information in your current request to help the mode understand the full context of your work.

### Wrong Mode for Task

When RooFlow selects an inappropriate mode for your current task, you can override the selection and help the system learn your preferences. Use the "RooCode: Switch Mode" command to manually select the mode you believe is more appropriate for your current needs. When making this switch, specify why you need a different mode—for example, "I need Code Mode because I want implementation, not planning." RooFlow will learn from your preference and improve its future mode selection for similar situations, gradually becoming more aligned with your working style and project needs.

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

---

*Remember: The power of RooCode isn't just in having multiple modes, but in how they work together through RooFlow orchestration and shared Memory Bank context to create a truly collaborative development experience.*