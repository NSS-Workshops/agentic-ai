# RooCode Modes and RooFlow Introduction

Now that you have RooCode set up securely, it's time to explore what makes it truly powerful: its specialized AI modes and the RooFlow orchestration system. Think of this as upgrading from having one general assistant to having a specialized team of experts, each with their own expertise and personality.

## Understanding RooCode Modes

Traditional AI assistants try to be everything to everyone. RooCode takes a different approach by providing **specialized modes**, each optimized for specific types of development tasks. This is like having different specialists on your development team rather than one person trying to do everything.

### The Core Modes

#### Ask Mode 🤔
**Purpose**: Your research assistant and explainer
**Best for**:
- Understanding concepts and technologies
- Getting explanations of existing code
- Research and learning
- Quick questions and clarifications

**Personality**: Patient, educational, thorough in explanations

**Example interaction**:
```
You: "Can you explain how React hooks work?"
Ask Mode: "React hooks are functions that let you 'hook into' React state and lifecycle features from function components..."
```

#### Code Mode 💻
**Purpose**: Your implementation specialist
**Best for**:
- Writing new code
- Refactoring existing code
- Code reviews and optimization
- Implementing specific features

**Personality**: Focused, practical, code-first approach

**Example interaction**:
```
You: "I need a React component for user authentication"
Code Mode: "I'll create a comprehensive auth component with form validation..."
```

#### Architect Mode 🏗️
**Purpose**: Your system designer and project planner
**Best for**:
- Planning project structure
- Designing system architecture
- Making technology decisions
- Creating documentation and specifications

**Personality**: Strategic, big-picture thinking, documentation-focused

**Example interaction**:
```
You: "Help me plan a new e-commerce application"
Architect Mode: "Let's start by defining the core requirements and system architecture..."
```

#### Debug Mode 🐛
**Purpose**: Your troubleshooting specialist
**Best for**:
- Identifying and fixing bugs
- Performance optimization
- Error analysis
- Testing strategies

**Personality**: Methodical, analytical, problem-solving focused

**Example interaction**:
```
You: "My React app is crashing with this error..."
Debug Mode: "Let's analyze this error systematically. First, let's examine the stack trace..."
```

### Mode Switching and Context

One of RooCode's key advantages is **context preservation** across modes. When you switch from Ask Mode to Code Mode, the conversation history and project understanding carries over. This creates a seamless workflow where you can:

1. **Research** with Ask Mode
2. **Plan** with Architect Mode
3. **Implement** with Code Mode
4. **Troubleshoot** with Debug Mode

All while maintaining the same project context and conversation thread.

## Token Limits and Context Management

### Understanding Token Limits

Each AI provider has **token limits** - the maximum amount of text (input + output) that can be processed in a single conversation. Think of tokens as "words" that the AI can remember:

| Provider | Model | Context Window | Approximate Pages |
|----------|-------|----------------|-------------------|
| Google Gemini | 1.5 Flash | 1M tokens | ~750 pages |
| OpenAI | GPT-4o | 128K tokens | ~96 pages |
| Anthropic | Claude 3.5 Sonnet | 200K tokens | ~150 pages |

### Context Window Management

When you approach token limits, RooCode automatically manages context by:

1. **Summarizing** older parts of the conversation
2. **Preserving** recent and important information
3. **Maintaining** project-specific context through the Memory Bank

### Best Practices for Token Management

**Be Concise**: Clear, specific requests use fewer tokens than rambling descriptions.

❌ **Poor**: "So I'm working on this project and I think I need some kind of component that handles user stuff and maybe authentication and I'm not sure how to structure it..."

✅ **Better**: "I need a React authentication component with login/logout functionality."

**Use Appropriate Modes**: Each mode is optimized for different token usage patterns:
- **Ask Mode**: Efficient for questions and explanations
- **Code Mode**: Optimized for code generation
- **Architect Mode**: Designed for high-level planning

## The Memory Bank System

The Memory Bank is RooCode's persistent memory system that maintains project context across sessions and modes. Think of it as your project's "institutional memory."

### Memory Bank Components

#### Product Context
**What it stores**: High-level project information
- Project goals and requirements
- Technology stack decisions
- Overall architecture
- Key constraints and considerations

#### Active Context
**What it stores**: Current session information
- What you're currently working on
- Recent decisions and changes
- Open questions and issues
- Next steps and priorities

#### Decision Log
**What it stores**: Important decisions and their rationale
- Technology choices and why
- Architecture decisions
- Implementation approaches
- Trade-offs and alternatives considered

#### Progress Tracking
**What it stores**: Development progress
- Completed tasks
- Current work items
- Blockers and dependencies
- Timeline and milestones

#### System Patterns
**What it stores**: Reusable patterns and standards
- Coding conventions
- Architecture patterns
- Common solutions
- Best practices for the project

### Memory Bank Benefits

**Consistency**: All modes access the same project information, ensuring consistent responses.

**Continuity**: Context persists across sessions - you can close RooCode and return later with full context.

**Collaboration**: Multiple team members can access the same project memory.

**Learning**: The Memory Bank learns your project's patterns and preferences over time.

## Introducing RooFlow

RooFlow is RooCode's advanced workflow orchestration system. While basic RooCode provides specialized modes, RooFlow adds **intelligent coordination** between modes and **automated workflow management**.

### What RooFlow Adds

#### Intelligent Mode Orchestration
RooFlow automatically determines which mode is best for each task and can coordinate multiple modes to complete complex workflows.

**Example**: When you ask "Help me build a user authentication system," RooFlow might:
1. Use **Architect Mode** to design the system
2. Switch to **Code Mode** to implement components
3. Use **Debug Mode** to test and troubleshoot
4. Return to **Architect Mode** to document the solution

#### Advanced Context Awareness
RooFlow maintains deeper context awareness, understanding:
- **Project phase** (planning, development, testing, deployment)
- **Current focus** (frontend, backend, database, etc.)
- **Team dynamics** (solo developer, team lead, contributor)
- **Urgency level** (exploration, active development, production issue)

#### Workflow Templates
RooFlow provides pre-built workflows for common development scenarios:
- **New Feature Development**
- **Bug Investigation and Fix**
- **Code Review and Refactoring**
- **Architecture Planning**
- **Documentation Creation**

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

**RooFlow Workflow**:
1. **Architect Mode**: "Let's design the user profile system. What data do you need to store?"
2. **Code Mode**: "I'll create the profile components and API integration"
3. **Debug Mode**: "Let's test the implementation and handle edge cases"
4. **Ask Mode**: "Here's documentation on how to use the new profile system"

### Scenario 2: Debugging an Issue

**Starting Point**: "My app crashes when users click the submit button"

**RooFlow Workflow**:
1. **Debug Mode**: "Let's analyze the error and identify the root cause"
2. **Code Mode**: "I'll implement the fix and add error handling"
3. **Ask Mode**: "Here's an explanation of what caused the issue and how to prevent it"

### Scenario 3: Planning a New Project

**Starting Point**: "I want to build a task management application"

**RooFlow Workflow**:
1. **Ask Mode**: "Let's explore task management patterns and requirements"
2. **Architect Mode**: "I'll design the system architecture and technology stack"
3. **Code Mode**: "Let's start with the core components and data models"

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

1. **Open RooCode Settings**
2. **Enable RooFlow**: Toggle "Use RooFlow Orchestration"
3. **Select Workflow Style**: Choose from:
   - **Guided**: RooFlow suggests next steps
   - **Automatic**: RooFlow manages mode switching
   - **Manual**: You control mode switching with RooFlow context

### Your First RooFlow Session

Let's try a simple workflow:

1. **Start with a high-level request**: "Help me create a simple todo app"
2. **Let RooFlow guide you**: It will suggest starting with Architect Mode
3. **Follow the workflow**: RooFlow will coordinate between modes
4. **Observe the Memory Bank**: Watch how context builds up over time

## Best Practices for Mode Usage

### When to Use Each Mode

**Ask Mode**:
- ✅ Learning new concepts
- ✅ Understanding existing code
- ✅ Getting explanations
- ❌ Writing large amounts of code
- ❌ System architecture planning

**Code Mode**:
- ✅ Implementing features
- ✅ Writing functions and components
- ✅ Code refactoring
- ❌ High-level planning
- ❌ Conceptual explanations

**Architect Mode**:
- ✅ Project planning
- ✅ System design
- ✅ Technology decisions
- ✅ Documentation creation
- ❌ Detailed implementation
- ❌ Debugging specific issues

**Debug Mode**:
- ✅ Troubleshooting errors
- ✅ Performance optimization
- ✅ Testing strategies
- ❌ New feature development
- ❌ System architecture

### Mode Switching Strategies

**Sequential Workflow**: Plan → Implement → Test → Document
1. Architect Mode (planning)
2. Code Mode (implementation)
3. Debug Mode (testing)
4. Ask Mode (documentation)

**Iterative Workflow**: Small cycles of plan → implement → test
1. Architect Mode (plan feature)
2. Code Mode (implement feature)
3. Debug Mode (test feature)
4. Repeat for next feature

**Problem-Solving Workflow**: Understand → Analyze → Fix → Verify
1. Ask Mode (understand the problem)
2. Debug Mode (analyze and fix)
3. Code Mode (implement solution)
4. Debug Mode (verify fix)

## Troubleshooting Mode Issues

### Mode Not Responding Appropriately

**Problem**: Code Mode giving explanations instead of code
**Solution**: Be more specific in your request
- ❌ "Tell me about authentication"
- ✅ "Create a login component with email and password fields"

### Context Not Carrying Over

**Problem**: New mode doesn't remember previous conversation
**Solution**: Check Memory Bank status
1. Verify Memory Bank is enabled
2. Check if context was properly saved
3. Manually reference previous decisions if needed

### Wrong Mode for Task

**Problem**: RooFlow selected inappropriate mode
**Solution**: Manual override
1. Use "RooCode: Switch Mode" command
2. Specify why you need a different mode
3. RooFlow will learn from your preference

## Practice Exercises

### Exercise 1: Mode Exploration
**Goal**: Experience each mode's personality and capabilities

**Tasks**:
1. Ask Mode: "Explain the difference between props and state in React"
2. Code Mode: "Create a React counter component"
3. Architect Mode: "Plan the structure for a blog application"
4. Debug Mode: "Help me understand this error: 'Cannot read property of undefined'"

### Exercise 2: Memory Bank Usage
**Goal**: Build up project context across modes

**Tasks**:
1. Architect Mode: Define a simple project (e.g., expense tracker)
2. Code Mode: Implement a core component
3. Ask Mode: Ask about best practices for your project
4. Verify that each mode remembers your project context

### Exercise 3: RooFlow Workflow
**Goal**: Let RooFlow orchestrate a complete feature development

**Tasks**:
1. Start with: "Help me add user authentication to my app"
2. Follow RooFlow's suggested workflow
3. Notice how modes coordinate and context flows
4. Complete the entire feature with RooFlow guidance

## What's Next?

In the next chapter, we'll dive deep into **Architect Mode** - the strategic planning mode that helps you design robust, scalable applications. You'll learn how to use Architect Mode for:

- System architecture design
- Technology stack decisions
- Project planning and documentation
- Quality improvement strategies

We'll also explore how Architect Mode integrates with the Memory Bank to maintain long-term project vision and consistency.

---

*Remember: The power of RooCode isn't just in having multiple modes, but in how they work together through RooFlow orchestration and shared Memory Bank context to create a truly collaborative development experience.*