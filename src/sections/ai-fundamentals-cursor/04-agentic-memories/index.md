## What is Agentic AI?

So far, we've been using AI as a **reactive tool**—you ask a question, it gives an answer. But what if AI could be more **proactive** and **autonomous**? That's where **agentic AI** comes in.

**Agentic AI** refers to AI systems that can:
- **Take initiative** - Suggest next steps without being asked
- **Maintain context** - Remember previous conversations and decisions
- **Work independently** - Complete multi-step tasks with minimal supervision
- **Learn from interactions** - Improve responses based on your preferences and patterns

Think of it as the difference between a **calculator** (reactive) and a **personal assistant** (agentic).

```sh
echo 'hello world'
```

```py
# LearningAPI/metrics.py
from prometheus_client import Counter, Histogram, Gauge

# Example Counter: Tracks the total number of API requests
api_requests_total = Counter(
    'api_requests_total',
    'Total number of API requests',
    ['method', 'endpoint'] # Labels for method (GET, POST, etc.) and endpoint
)

# Example Histogram: Tracks the duration of API requests
api_request_duration_seconds = Histogram(
    'api_request_duration_seconds',
    'Histogram of API request durations',
    ['method', 'endpoint']
)
```

```yaml
paths:
  /api/users/{id}:
    get:
      summary: Retrieve user by ID
      description: Returns detailed user information for the specified user ID
      parameters:
        - name: id
          in: path
          required: true
          schema:
            type: integer
            format: int64
          description: Unique identifier for the user
      responses:
        '200':
          description: User information retrieved successfully
          content:
            application/json:
              schema:
                $ref: '#/components/schemas/User'
        '404':
          description: User not found
        '500':
          description: Internal server error
```

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

**What happens when you exceed this limit:**
- **Early conversation is forgotten** - The AI loses track of your project goals
- **Repeated explanations** - You have to re-explain your setup constantly
- **Inconsistent suggestions** - AI might contradict earlier recommendations
- **Lost architectural decisions** - Important project decisions get forgotten

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

Think of AI memories like a **digital notebook** that the AI maintains about your project:

- **Project Context** - Goals, architecture, technology choices
- **Code Patterns** - Your preferred coding styles and conventions
- **Decisions Made** - Important choices and their reasoning
- **Progress Tracking** - What's been completed and what's next
- **Personal Preferences** - How you like to work and communicate

### Types of Memory Systems

**1. Session Memory (Short-term)**
- Remembers the current conversation
- Lost when you close the chat
- Like human short-term memory

**2. Project Memory (Medium-term)**
- Remembers information about specific projects
- Persists across multiple sessions
- Like taking notes in a project notebook

**3. Personal Memory (Long-term)**
- Learns your general preferences and patterns
- Applies across all projects
- Like a colleague who knows how you work

## Cursor's Memories Feature

Cursor includes a **Memories** feature that provides project-level context persistence.

### How to Use Cursor Memories

**1. Enable Memories**
- Open Cursor Settings
- Navigate to "Features" → "Memories"
- Toggle "Enable Memories" to ON

**2. Create Project Memories**
- In any chat, mention key project information
- Cursor automatically identifies important context
- You can also manually add memories

**3. Review and Manage Memories**
- View stored memories in Settings → Memories
- Edit or delete memories as needed
- Organize memories by project

### What Cursor Remembers

**Automatically Captured:**
- Technology stack and frameworks you're using
- Code patterns and architectural decisions
- Project structure and file organization
- Common errors and their solutions

**Manually Added:**
- Project goals and requirements
- Team conventions and standards
- Important architectural decisions
- Personal preferences for this project

### Example: Building with Memories

**First Conversation:**
```
You: "I'm starting a React e-commerce project using Firebase and Stripe"
Cursor: "Great! I'll remember that you're using React, Firebase for backend, and Stripe for payments. What's the first feature you'd like to build?"
```

**Later Conversation (Days Later):**
```
You: "I need to add user authentication"
Cursor: "Since you're using Firebase, I'll create authentication using Firebase Auth to integrate with your existing setup. Should I also set up the Firestore user profiles we discussed?"
```

*Notice how Cursor remembered the tech stack and previous discussions*

## Benefits of Memory-Enabled AI

### 1. Consistent Architecture
- AI maintains awareness of your project's overall structure
- Suggestions align with previous decisions
- Reduces architectural inconsistencies

### 2. Faster Development
- No need to re-explain your setup each time
- AI can reference previous work
- Builds on existing patterns

### 3. Better Code Quality
- AI learns your coding standards
- Maintains consistency across features
- Applies lessons learned from previous code

### 4. Project Continuity
- Pick up where you left off, even after breaks
- AI remembers incomplete features and next steps
- Maintains context across team members

## Limitations and Considerations

### Current Limitations

**1. Memory Accuracy**
- AI might misremember or misinterpret information
- Important to review and correct memories periodically

**2. Privacy Concerns**
- Memories are stored by the AI service
- Be mindful of sensitive information

**3. Over-reliance Risk**
- Don't let AI memory replace your own documentation
- Maintain your own project records

### Best Practices for AI Memories

**Do's ✅**
- **Review memories regularly** - Ensure accuracy
- **Be explicit about important decisions** - Help AI capture key information
- **Update memories when requirements change** - Keep information current
- **Use memories as a supplement** - Not a replacement for proper documentation

**Don'ts ❌**
- **Don't store sensitive data** - API keys, passwords, personal information
- **Don't rely solely on AI memory** - Maintain your own project documentation
- **Don't assume perfect recall** - AI can still make mistakes
- **Don't share memories across projects** - Keep project contexts separate

## Looking Ahead: Advanced Agentic Tools

While Cursor's Memories feature is a great introduction to persistent AI context, next week we'll explore more sophisticated agentic AI tools:

### RooCode with RooFlow
- **Multiple specialized AI modes** - Different AI personalities for different tasks
- **Local memory banks** - Project context stored on your machine
- **Cross-conversation continuity** - Seamless context across multiple sessions
- **Advanced orchestration** - AI that can manage complex, multi-step projects

### What Makes These Tools "Agentic"
- **Proactive suggestions** - AI suggests next steps
- **Multi-step planning** - AI can break down complex tasks
- **Context awareness** - Deep understanding of your project
- **Autonomous execution** - AI can complete tasks with minimal guidance

## Preparing for Advanced Agentic Development

### Skills to Develop
1. **Clear communication** - Agentic AI needs good initial context
2. **Project planning** - Break down complex tasks into manageable steps
3. **Code review skills** - More important when AI generates more code
4. **Architectural thinking** - Guide AI toward good design decisions

### Mindset Shifts
- **From asking questions to having conversations** - Engage with AI as a collaborator
- **From single tasks to project workflows** - Think in terms of ongoing development
- **From reactive to proactive** - Let AI suggest improvements and next steps
- **From tool user to AI collaborator** - Work with AI as a development partner

## Key Takeaways

1. **Agentic AI is proactive and context-aware** - Goes beyond simple question-and-answer
2. **Memory systems solve the context window problem** - Enable continuity across conversations
3. **Cursor's Memories feature** provides basic project-level context persistence
4. **Advanced agentic tools** offer more sophisticated memory and autonomous capabilities
5. **Memory-enabled AI requires new skills** - Clear communication and ongoing collaboration
6. **Always maintain your own documentation** - AI memory supplements but doesn't replace proper project records

## Practice Assignment

Before next week's session on advanced agentic tools:

1. **Enable Cursor Memories** in your settings
2. **Start a practice project** - Something simple like a todo app or calculator
3. **Have multiple conversations** about the project across different days
4. **Notice how context is maintained** - What does Cursor remember? What does it forget?
5. **Document your experience** - What worked well? What was frustrating?
6. **Review your memories** - Check what Cursor stored and edit if needed

This hands-on experience will prepare you for the more advanced memory and context management systems we'll explore with RooCode and RooFlow next week.

## Section 1 Summary

Congratulations! You've completed the foundation section of this workshop. You now understand:

- **How LLMs work** as prediction engines
- **Cursor IDE's AI features** and how to use them effectively
- **The importance of context** in professional AI-assisted development
- **Prompt engineering techniques** for better AI responses
- **Agentic AI concepts** and memory systems

Next week, we'll build on these foundations with more sophisticated agentic AI tools that will transform how you approach software development projects.