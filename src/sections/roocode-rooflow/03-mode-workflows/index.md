Now that you have RooCode set up securely with the RooFlow system prompts, it's time to explore what makes it truly powerful: its specialized AI modes. Think of this as upgrading from having one general assistant to having a specialized team of experts, each with their own expertise and personality.

## Understanding Modes

Traditional AI assistants try to be everything to everyone. RooCode and RooFlow take a different approach by providing **specialized modes**, each optimized for specific types of development tasks. This is like having different specialists on your development team rather than one person trying to do everything.

### The Core Modes

#### Flow Ask Mode

This mode serves as your dedicated research assistant and explainer, designed with a patient, educational personality that excels at thorough explanations. This mode becomes your go-to resource when you need to understand concepts and technologies, get clear explanations of existing code, conduct research and learning, or ask quick questions that need clarification.

Think of Ask Mode as that knowledgeable colleague who always has time to explain things clearly and never makes you feel rushed. It will never modify your code like **Flow Code** and **Flow Debug** will.

When you interact with Ask Mode, you'll notice its educational approach immediately. For example, when you ask "Can you explain how React hooks work?", it responds with comprehensive explanations. The mode takes time to build understanding progressively, ensuring you grasp both the concept and its practical applications.

#### Flow Code Mode

This mode functions as your dedicated implementation specialist, bringing a focused, practical, code-first approach to every interaction. This mode excels when you need to write new code, refactor existing implementations, conduct code reviews and optimization, or implement specific features with precision and efficiency. Code Mode cuts straight to the implementation details, providing working solutions rather than lengthy explanations.

The personality of Code Mode reflects its purpose—it's direct, solution-oriented, and always ready to produce tangible results. When you request "I need a React component for user authentication," Code Mode immediately responds with "I'll create a comprehensive auth component with form validation..." and then delivers functional code that you can use immediately. This mode understands that sometimes you need less talking and more doing.

#### Flow Architect Mode

This mode serves as your system designer and project planner, embodying strategic, big-picture thinking with a strong focus on documentation and long-term project success. This mode becomes invaluable when you need to plan project structure, design system architecture, make critical technology decisions, or create comprehensive documentation and specifications.

Architect mode also excels at creating documentation for your planning and strategies as you discuss them. It will not modify your existing code files, but will generate some code snippets in the documentation when you, or it, feels it necessary.

The strategic personality of Architect Mode shines through in every interaction. When you request "Help me plan a new e-commerce application," Architect Mode responds thoughtfully with "Let's start by defining the core requirements and system architecture..." This mode takes time to understand your broader goals before diving into technical details, ensuring that every architectural decision aligns with your project's long-term vision and constraints.

#### Flow Debug Mode

Debug Mode operates as your dedicated troubleshooting specialist, bringing a methodical, analytical approach that focuses intensely on problem-solving. This mode excels at identifying and fixing bugs, optimizing performance, conducting thorough error analysis, and developing comprehensive testing strategies. Debug Mode approaches every issue with systematic precision, breaking down complex problems into manageable components that can be analyzed and resolved step by step.

The methodical personality of Debug Mode becomes apparent immediately when you encounter issues. When you report "My React app is crashing with this error..." Debug Mode responds with structured analysis: "Let's analyze this error systematically. First, let's examine the stack trace..." This mode never rushes to conclusions, instead following logical debugging processes that ensure thorough investigation and reliable solutions.

#### Flow Orchestrator Mode

RooFlow automatically determines which mode is best for each task and can coordinate multiple modes to complete complex workflows seamlessly. This intelligent orchestration removes the cognitive overhead of deciding which mode to use, allowing you to focus on your development goals while RooFlow manages the workflow coordination behind the scenes.

For example, when you ask _"Orchestrate all of the specific tasks needed to plan, develop, and test the following feature: {insert feature here},"_ RooFlow orchestrates a comprehensive workflow that begins with Architect Mode to design the system architecture and requirements. The system then transitions to Code Mode to implement the necessary components with proper structure and functionality. Debug Mode takes over to test the implementation and troubleshoot any issues that arise during development. Finally, RooFlow returns to Architect Mode to document the completed solution, ensuring that your authentication system is not only functional but also properly documented for future reference and team collaboration.


### Mode Switching and Context

One of RooCode's key advantages is _context preservation_ across modes. When you switch from Ask Mode to Code Mode, the conversation history and project understanding carries over seamlessly. This creates a natural workflow where you can research concepts and gather information with Ask Mode, then transition to strategic planning with Architect Mode, move into active implementation with Code Mode, and finally troubleshoot any issues with Debug Mode—all while maintaining the same project context and conversation thread.

This context preservation transforms how you approach development work. Instead of starting fresh with each new task or losing important details when switching between different types of work, RooCode maintains a continuous understanding of your project, your decisions, and your progress. The result is a more cohesive development experience that mirrors how you naturally think about and work on projects.

## Practical Mode Usage Examples

### Scenario 1: Building a New Feature

**Action**: You set the mode to **Flow Architect**

**Initial Prompt**: "I need to add a new feature to my project that displays products related to the product that the user is currently viewing. Access my memory bank and help me design this in architect mode. Record our decisions in a RELATED_PRODUCTS.md file."

**RooFlow Workflow**: RooFlow begins by reading all of the relevent text that is stored in the memory bank files. Once it has retrieved the context that it needs, it will either ask questions if it needs more context, or will begin making recommendations on  structure, naming convention, files to be created, etc. and producing documentation in the specified file.

You can review the suggestions, and continue to make changes until you are happy with the plan.

The workflow can then transition seamlessly to Code Mode, which takes the architectural decisions and creates the modules and code that were agreed upon.

### Scenario 2: Debugging an Issue

**Action**: You set the mode to **Flow Debug**

**Initial Prompt**: "When my workflow sends a document to be updated via the Google Docs API, the update never happens. Here is the log message for that action: [you would insert the log message here]"

**RooFlow Workflow**: RooCode begins to systematically analyze the error and identify the root cause through methodical investigation techniques. Once the problem is understood, debug mode will make an attempt at implementing a fix unless you explicitly instruct it not to.

### Scenario 3: Planning a New Project

**Action**: You set the mode to **Flow Ask**

**Initial Prompt**: "I want to start a project to use Terraform to automate setting up my cloud infrastructure"

**RooFlow Workflow**: Starting with Ask Mode allows you to explore how Terraform works, learn modern best practices, and establish requirements. This way, you ensure a solid understanding of the technology and your needs before making any technical decisions.

Flow Architect mode can then takes the research and requirements to design the system architecture and select an appropriate technology stack that aligns with the project goals and constraints.

Finally, switching to Flow Code mode begins the implementation process by creating the initial files and configurations that were designed in architect mode.

## Practice: Design Coin Marketplace

Use RooFlow to design a new **Marketplace** view where users can browse listed coins, place buy or sell orders, and view their active orders and balances. It will be a searchable list/grid of all coins in the database displaying the current price, and a Buy button next to each one.

### Prompt

Design a "Coin Marketplace" or this project that displays all coins and a blue **Buy** button next to each one. When the button is clicked, the API should be updated so that the chosen coin is no longer able to be purchased.

Add the following information to a `MARKETPLACE_DESIGN.md` file:

- proposed file/component list with responsibilities
- API contract (endpoints, request/response shapes)
- UI wireframe notes
- Data/state shapes, validation rules, and
- A list of small implementation tasks that must be done to implement the feature.

### Possible Issues

#### Service Unavailable

You may receive a message that the Gemini service is unavailable:

```txt
Gemini generate context stream error: got status: 503 Service Unavailable. {"error":{"message":"{\n  "error": {\n    "code": 503,\n    "message": "The model is overloaded. Please try again later.",\n    "status": "UNAVAILABLE"\n  }\n}\n","code":503,"status":"Service Unavailable"}}
```

If this happens, just be patient and it will continue to retry until it is available again.

#### Model Thought Process Failed

If you see the following response:

```txt
This may indicate a failure in the model's thought process or inability to use a tool properly, which can be mitigated with some user guidance (e.g. "Try breaking down the task into smaller steps").
```

Click the **Proceed Anyway** button and the process will move forward.

## What's Next?

In the next chapter, we'll explore how the **Memory Bank** system of RooFlow works to maintain long-term context and decisions about your project.
