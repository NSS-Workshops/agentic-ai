## What is Cursor IDE?

Cursor is a modern code editor built specifically for AI-assisted development. Think of it as VS Code's AI-powered cousin—it looks and feels familiar but comes with powerful AI features built right in.

Unlike traditional code editors where AI is an add-on, Cursor was designed from the ground up to seamlessly integrate AI assistance into your coding workflow.

### Why Cursor for This Workshop?

- **Free tier with GPT-4.1** - No API keys or subscriptions needed to get started
- **Familiar interface** - Based on VS Code, so minimal learning curve
- **Multiple AI interaction modes** - Chat, inline suggestions, and code completion
- **Professional-grade features** - Everything you need for real development work

## Installation and Setup

### Step 1: Download Cursor

1. Visit [cursor.com](https://cursor.com)
2. Click **"Download for [Your OS]"**
3. Install like any other application

### Step 2: Initial Setup

When you first open Cursor:

1. **Sign up for an account** - This enables the free AI features
2. **Choose your theme** - Light, dark, or system preference
3. **Import VS Code settings** (optional) - If you're already a VS Code user

### Step 3: Verify AI Access

1. Open any code file (or create a new one)
2. Press `Cmd+K` (Mac) or `Ctrl+K` (Windows/Linux)
3. You should see the AI chat interface appear
4. Type "Hello" and press Enter - you should get a response

If this works, you're ready to go!

## Understanding Cursor's AI Features

### 1. Chat Interface (`Cmd+L` / `Ctrl+L`)

The **Chat** feature is like having a coding conversation with an AI assistant:

- **Ask questions** about your code
- **Request explanations** of complex functions
- **Get debugging help** when things go wrong
- **Brainstorm solutions** to coding problems

**Example Chat Prompts:**
```
"Explain what this function does"
"How can I optimize this code?"
"What's causing this error?"
"Show me a better way to write this"
```

### 2. Inline AI (`Cmd+K` / `Ctrl+K`)

**Inline AI** lets you generate or modify code directly in your editor:

- **Generate new code** from descriptions
- **Refactor existing code** with specific instructions
- **Add comments** and documentation
- **Fix bugs** with targeted changes

**Example Inline Prompts:**
```
"Create a function that validates email addresses"
"Add error handling to this function"
"Convert this to use async/await"
"Add TypeScript types to this code"
```

### 3. Tab Completion

As you type, Cursor automatically suggests code completions:

- **Smart suggestions** based on your current context
- **Multi-line completions** for complex patterns
- **Context-aware** - understands your project structure
- **Press Tab** to accept suggestions

### 4. Code Selection Features

Select any code and:

- **Right-click → "Ask Cursor"** - Get explanations or suggestions
- **Use keyboard shortcuts** for quick AI actions
- **Generate tests** for selected functions
- **Refactor** selected code blocks

## Cost Considerations and Limits

### Free Tier Limits

Cursor's free tier includes:
- **Limited monthly usage** - Generous for learning, but not unlimited
- **GPT-4.1 access** - High-quality AI responses
- **All core features** - Chat, inline AI, completions

### Usage Tips to Stay Within Limits

1. **Be specific in prompts** - Avoid back-and-forth conversations
2. **Use completions wisely** - Don't accept every suggestion
3. **Focus on learning** - Use AI to understand, not just generate
4. **Review usage** - Check your remaining quota in settings

### When You Hit Limits

If you exceed the free tier:
- **Wait for reset** - Limits refresh monthly
- **Upgrade to Pro** - For unlimited usage
- **Switch to other tools** - We'll introduce RooCode next week

## Your First AI-Assisted Coding Session

Let's practice with a simple exercise:

### Exercise: Create a Task Manager Function

1. **Create a new file** called `task-manager.js`
2. **Use Inline AI** (`Cmd+K` / `Ctrl+K`) with this prompt:
   ```
   Create a function called createTaskManager that returns an object with methods to add, remove, and list tasks
   ```
3. **Review the generated code** - Does it make sense?
4. **Use Chat** (`Cmd+L` / `Ctrl+L`) to ask:
   ```
   Explain how this task manager works and suggest improvements
   ```
5. **Implement suggestions** using inline AI

### What to Notice

- **Code quality** - Is the generated code readable and well-structured?
- **Completeness** - Does it handle edge cases?
- **Your understanding** - Can you explain what each part does?

## Best Practices for Cursor

### Do's ✅

- **Provide context** - Include relevant code in your prompts
- **Be specific** - "Add error handling" vs "Make this better"
- **Review everything** - Never use code you don't understand
- **Iterate gradually** - Make small changes, test, repeat
- **Ask for explanations** - Use AI to learn, not just generate

### Don'ts ❌

- **Don't blindly accept** - Always review generated code
- **Don't skip testing** - AI code can have subtle bugs
- **Don't over-rely** - Maintain your coding skills
- **Don't ignore errors** - If something seems wrong, investigate
- **Don't share sensitive data** - Be mindful of what you include in prompts

## Troubleshooting Common Issues

### "AI features not working"
- Check your internet connection
- Verify you're signed in to your Cursor account
- Try restarting Cursor

### "Out of free usage"
- Check usage in Settings → Account
- Wait for monthly reset or consider upgrading
- Switch to other tools for practice

### "Generated code has errors"
- This is normal! AI isn't perfect
- Use this as a learning opportunity
- Ask the AI to fix the errors

## Comparing Cursor to Traditional Development

### Traditional Workflow
1. Think about the problem
2. Research solutions online
3. Write code from scratch
4. Debug and refine
5. Test and iterate

### AI-Assisted Workflow with Cursor
1. Think about the problem
2. **Describe the solution to AI**
3. **Review and understand generated code**
4. **Refine with AI assistance**
5. Test and iterate **with AI help**

The key difference: **AI accelerates each step**, but you still need to understand and verify everything.

## Key Takeaways

1. **Cursor integrates AI seamlessly** into familiar VS Code-like interface
2. **Multiple interaction modes** - Chat, inline, completions, and selection-based
3. **Free tier is generous** for learning but has limits
4. **Always review and understand** generated code
5. **Use AI to accelerate learning**, not replace understanding
6. **Context matters** - Better prompts lead to better results

In the next chapter, we'll dive deeper into the art of prompt engineering—how to communicate effectively with AI to get the best results for your coding projects.

## Practice Assignment

Before moving on, spend 30 minutes exploring Cursor:

1. **Install Cursor** and complete the setup
2. **Try each AI feature** - Chat, inline AI, completions
3. **Create a simple project** - Maybe a calculator or todo list
4. **Ask questions** about any code you don't understand
5. **Document your experience** - What worked well? What was confusing?

This hands-on practice will prepare you for the more advanced concepts in the next chapter.