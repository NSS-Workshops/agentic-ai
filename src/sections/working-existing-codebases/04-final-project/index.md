This is the final project where you wil utilize all of your knowledge and skills using an agentic LLM tool.

## Part 1: Project Setup

### Step 1: Create Your Repository

1. Navigate to the template repository:
   ```
   https://github.com/nss-group-projects/duke_and_chord
   ```

2. Click the **"Use this template"** button (green button near the top of the page)

3. Create a new repository in your personal GitHub account:
   - Choose a repository name (e.g., `duke-chord-workshop`)
   - Set visibility to **Public** (recommended for collaboration)
   - Leave "Include all branches" unchecked
   - Click **"Create repository from template"**

4. Clone your new repository to your local machine:
   ```bash
   git clone https://github.com/YOUR-USERNAME/YOUR-REPO-NAME.git
   cd YOUR-REPO-NAME
   ```

5. Open the project in VS Code with RooCode activated

### Step 2: Initial Project Exploration

Before diving into development, spend 10-15 minutes manually exploring:

- Review the folder structure
- Open [`src/index.html`](src/index.html) to see the entry point
- Browse the [`src/scripts/`](src/scripts/) directory structure
- Check [`package.json`](package.json) for dependencies
- Note the types of files in [`src/audio/`](src/audio/) and [`src/images/`](src/images/)

**Quick Questions to Consider:**
- What type of application is this?
- What technologies are being used?
- How is the code organized?

## Part 2: Understanding the Codebase with AI

### Task 1: Codebase Analysis

Work with your RooCode AI companion to deeply understand this project.

**Recommended Prompts to Try:**

1. **Project Overview:**
   ```
   Analyze this codebase and explain what this application does,
   who it's for, and what its main features are.
   ```

2. **Architecture Analysis:**
   ```
   Identify and explain the architectural patterns used in this project.
   Focus on how the code is organized and how different parts communicate.
   ```

3. **Design Patterns:**
   ```
   What design patterns are implemented here? Specifically, explain:
   - How does state management work?
   - How is routing handled?
   - What's the component structure?
   ```

4. **Data Flow:**
   ```
   Trace the data flow in this application. How does data move from
   the JSON database through the application to the user interface?
   ```

### Task 2: Deep Dive into Key Concepts

Ask your AI companion to explain specific concepts:

- **State Management Pattern**: How do the StateManager modules work?
- **Event-Driven Architecture**: How are custom events used for communication?
- **Modular Components**: How are HTML components generated and rendered?
- **Routing System**: How does the application handle navigation without a framework?

**Deliverable**: Create notes or a document summarizing your understanding.

## Part 3: Documentation Generation

### Task 3: Update the README

The project's [`README.md`](README.md) needs comprehensive documentation. Work with RooCode to enhance it.

**Your Mission:** Update the README to include:

1. **Project Description**
   - Clear overview of what Duke & Chord is
   - Target users and use cases

2. **Architecture Documentation**
   - High-level architecture overview
   - Explanation of key design patterns
   - State management strategy
   - Routing approach
   - Component structure

3. **Technology Stack**
   - Frontend technologies and why they were chosen
   - Backend setup
   - Data storage approach

4. **Code Organization**
   - Directory structure explanation
   - Purpose of each major folder
   - Module responsibilities

5. **Development Setup**
   - Installation instructions
   - How to run the application
   - How to run the server

6. **Key Features**
   - List of implemented features
   - Brief explanation of each feature

**Approach:**

1. Ask RooCode to analyze the codebase and suggest README structure
2. Request content generation for each section
3. Review and refine the AI-generated content
4. Commit your updated documentation

**Example Prompt:**
```
Help me create comprehensive README documentation for this project.
Start by analyzing the codebase, then generate a detailed README
that explains the architecture, patterns, and strategies used.
Make it clear enough for a new developer to understand the project.
```

## Part 4: Issue Resolution

### Task 4: Work Through Project Issues

Navigate to the project's issue tracker:
```
https://github.com/nss-group-projects/duke_and_chord/issues
```

**Your Challenge:** Choose and resolve 2-3 issues using RooCode as your AI pair programmer.

### Working with Issues: Best Practices

1. **Issue Selection Strategy:**
   - Start with issues labeled `good first issue` or `beginner-friendly`
   - Read the issue description completely
   - Understand acceptance criteria before starting

2. **Collaboration Workflow:**

   **Step A: Issue Analysis**
   ```
   I'm working on issue #X: [issue title].
   Help me understand what needs to be done and suggest an approach.
   ```

   **Step B: Planning**
   ```
   What files will I need to modify?
   What are the potential pitfalls I should watch for?
   ```

   **Step C: Implementation**
   - Let RooCode suggest code changes
   - Review and understand each change before applying
   - Ask questions about anything unclear

   **Step D: Testing**
   ```
   How can I test this change?
   What edge cases should I consider?
   ```

   **Step E: Documentation**
   - Update code comments where appropriate
   - Document any new patterns or approaches

3. **Commit Your Work:**
   ```bash
   git add .
   git commit -m "Resolve issue #X: [descriptive message]"
   git push origin main
   ```

### Example Issues You Might Encounter

Common types of issues in this project may include:

- **Feature Enhancements**: Adding new functionality
- **Bug Fixes**: Correcting existing behavior
- **Code Quality**: Refactoring for better maintainability
- **Accessibility**: Improving usability
- **Performance**: Optimizing load times or rendering

## Part 5: Reflection and Learning

### Task 5: Document Your Experience

After completing the workshop, reflect on your experience:

1. **Create a PROJECT_NOTES.md file** in your repository

2. **Document:**
   - What you learned about the codebase
   - How AI assistance changed your workflow
   - Challenges you encountered
   - Strategies that worked well
   - Areas where AI was most/least helpful

3. **Key Questions to Answer:**
   - How did using an agentic AI tool compare to working alone?
   - What was surprising about how the AI understood the code?
   - Where did you need to correct or refine AI suggestions?
   - How did you verify AI-generated code was correct?

## Best Practices for AI-Assisted Development

Throughout this workshop, practice these principles:

### ✅ DO:
- **Ask clarifying questions** before implementing suggestions
- **Read and understand** AI-generated code before using it
- **Test thoroughly** - AI can make mistakes
- **Verify information** - Check documentation and code yourself
- **Iterate** - Refine prompts if responses aren't helpful
- **Document your process** - Help others learn from your experience

### ❌ DON'T:
- **Blindly copy/paste** AI-generated code
- **Skip testing** because "AI generated it"
- **Assume AI knows your context** - provide details in prompts
- **Use AI as a shortcut** to avoid learning
- **Trust AI for critical security decisions** without review

## Success Criteria

You'll know you've successfully completed this workshop when:

- ✓ You've created your own repository from the template
- ✓ You can explain the application's architecture and patterns
- ✓ Your README contains comprehensive, accurate documentation
- ✓ You've successfully resolved at least 2 issues
- ✓ You understand how to effectively collaborate with AI tools
- ✓ You've documented your learning experience


## Conclusion

This workshop demonstrates the power of agentic AI tools in real-world development. You're not just learning to code - you're learning to collaborate with AI to understand, document, and improve software systems. These skills will be invaluable as AI-assisted development becomes the norm.

Remember: AI is a powerful tool, but you remain the developer. Your judgment, creativity, and critical thinking are what turn AI suggestions into quality software.

**Good luck, and enjoy your journey with Duke & Chord!** 🎵🎸