Welcome to the world of advanced agentic AI development! In this chapter, you'll learn how to set up RooCode, a sophisticated AI development tool that goes far beyond basic AI assistance. Think of RooCode as upgrading from a helpful assistant to having a team of specialized AI experts working on your project.

## What Makes RooCode Different?

While Cursor IDE provides excellent AI assistance within your editor, RooCode operates as an **agentic AI system** - meaning it can work independently, make decisions, and coordinate multiple specialized "modes" to accomplish complex development tasks.

### Key Advantages of RooCode

RooCode's power comes from its **specialized AI modes** that work like having different experts on your development team. Instead of relying on one general-purpose AI, you can access **Code Mode** when you need focused assistance with writing and refactoring code, **Architect Mode** when designing system architecture and project structure, **Ask Mode** for detailed explanations and questions, and **Debug Mode** for specialized troubleshooting and problem-solving. Each mode brings its own expertise and perspective to your development challenges.

Beyond specialized modes, RooCode offers **advanced context management** through its sophisticated "Memory Bank" system. This system allows RooCode to remember decisions you've made, track your project's progress, and maintain context across long development sessions - something that traditional AI assistants struggle with as conversations grow longer.

The system becomes even more powerful with **RooFlow integration**, an enhanced workflow orchestration system that enables sophisticated cross-mode collaboration. RooFlow allows different modes to work together seamlessly, passing context and building on each other's work to accomplish complex development tasks that would be difficult for any single AI mode to handle alone.

## Installation and Setup

### Step 1: Install RooCode

RooCode is distributed as a VS Code extension, making installation straightforward through VS Code's built-in extension marketplace. Open VS Code and navigate to the Extensions panel using Ctrl+Shift+X (or Cmd+Shift+X on Mac), then search for "RooCode" and click Install on the official RooCode extension. For developers who prefer command-line installation, you can also install RooCode directly using the command `code --install-extension roocode.roocode`.

```bash
code --install-extension roocode.roocode
```

### Step 2: Initial Configuration

After installation, you'll need to configure RooCode with your API credentials to connect it to an AI provider. RooCode supports multiple AI providers, each with different strengths and pricing models. **Google Gemini** offers the most generous free tier, making it ideal for learning and experimentation. **OpenAI GPT-4** provides high-quality responses but requires payment, while **Anthropic Claude** offers excellent reasoning capabilities, also on a paid basis. Choose the provider that best fits your budget and requirements.

## API Key Security Best Practices

**⚠️ CRITICAL SECURITY NOTICE**: API keys are like passwords to your AI accounts. Mishandling them can lead to unauthorized usage and unexpected charges.

### Understanding API Key Risks

Think of API keys like credit cards for AI services - they provide direct access to your account and billing. Anyone who obtains your key can make requests using your account, potentially running up charges without your knowledge. Costs can accumulate quickly with heavy usage, especially with premium models, and keys should never be shared with others or stored directly in code repositories where they might be accidentally exposed through version control systems.

### Secure API Key Management

#### Method 1: Environment Variables (Recommended)

Create a `.env` file in your project root:

```bash
# .env file - NEVER commit this to version control
GEMINI_API_KEY=your_actual_api_key_here
OPENAI_API_KEY=your_openai_key_here
ANTHROPIC_API_KEY=your_claude_key_here
```

**Important**: Add `.env` to your `.gitignore` file:

```gitignore
# Environment variables
.env
.env.local
.env.production
```

#### Method 2: VS Code Settings (User-level)

For a more integrated approach, you can store your API keys directly in VS Code's user settings rather than workspace settings. Open VS Code Settings using Ctrl+, (or Cmd+, on Mac), search for "RooCode," and enter your API keys in the appropriate fields. This method keeps your keys stored locally on your machine and ensures they won't be shared with your project files or accidentally committed to version control.

### Getting Your API Keys

#### Google Gemini API Key (Free Tier - Recommended)

Google Gemini offers a generous free tier that makes it perfect for learning and experimentation. Visit [https://makersuite.google.com/app/apikey](https://makersuite.google.com/app/apikey) and sign in with your Google account, then click "Create API Key" and copy the generated key to store it securely. The free tier provides substantial limits for learning purposes: 15 requests per minute, 1 million tokens per minute, and 1,500 requests per day - more than enough for most educational and small project needs.

#### OpenAI API Key (Paid Service)

OpenAI requires payment but offers high-quality models that many developers prefer for production work. Visit [https://platform.openai.com/api-keys](https://platform.openai.com/api-keys) to create an account and add a payment method, then generate a new API key. It's crucial to set usage limits immediately after account creation to control costs, as OpenAI charges based on actual usage without automatic spending caps.

#### Anthropic Claude API Key (Paid Service)

Claude offers excellent reasoning capabilities and is particularly strong at understanding complex instructions and maintaining context. Visit [https://console.anthropic.com/](https://console.anthropic.com/) to create an account and add a payment method, then generate an API key. Like OpenAI, configure usage limits immediately to prevent unexpected charges, as Claude also operates on a pay-per-use model.

## Cost Management and Monitoring

### Understanding AI API Costs

AI API costs are typically based on **tokens** - think of tokens as "words" processed by the AI, though the relationship isn't exactly one-to-one. **Input tokens** represent the text you send to the AI, including your prompts and questions. **Output tokens** represent the text the AI generates in response to your requests. **Context tokens** include previous conversation history that the AI maintains to understand the ongoing discussion, and these accumulate as conversations grow longer, contributing to the total cost of each interaction.

### Cost Comparison by Provider

| Provider | Model | Input Cost (per 1M tokens) | Output Cost (per 1M tokens) | Free Tier |
|----------|-------|----------------------------|------------------------------|-----------|
| Google Gemini | 1.5 Flash | Free up to limit | Free up to limit | Yes - 1,500 requests/day |
| OpenAI | GPT-4o | $2.50 | $10.00 | $5 credit for new accounts |
| Anthropic | Claude 3.5 Sonnet | $3.00 | $15.00 | $5 credit for new accounts |

### Setting Up Cost Controls

Protecting yourself from unexpected charges requires setting up proper cost controls immediately after creating your accounts. **For OpenAI**, navigate to your dashboard and find the "Usage limits" section, where you should set a conservative monthly budget (starting with $10-20 is recommended) and enable email notifications to alert you when approaching your limits. **For Anthropic**, access your console and go to "Billing & Usage" to set spending limits and configure alerts that will notify you before reaching your budget threshold.

**Google Gemini** handles cost control differently since the free tier automatically limits your usage without requiring manual configuration. If you eventually upgrade to a paid tier, you can monitor your usage through the Google Cloud Console to track consumption patterns and costs.

### Cost-Saving Tips

Smart usage practices can significantly reduce your AI API costs while maintaining productivity. **Start with Gemini's free tier** for all your learning and experimentation, as it provides substantial limits without any cost. **Keep conversations focused and concise** since longer contexts with extensive conversation history increase token usage and costs. **Write clear, specific prompts** that get the information you need in fewer exchanges, reducing the back-and-forth that accumulates charges. **Monitor your usage regularly** through each provider's dashboard to understand your consumption patterns, and **configure spending alerts** so you're notified before approaching your budget limits rather than discovering overages after the fact.

## RooCode Configuration

### Basic Configuration

After installing RooCode and setting up your API keys, you'll need to configure your preferences to match your workflow and chosen AI provider. Open the Command Palette using Ctrl+Shift+P (or Cmd+Shift+P on Mac) and type "RooCode: Configure" to access the configuration interface. Select your preferred AI provider from the available options, then choose your default mode - we recommend starting with "Ask" mode as it provides the most approachable entry point for new users to understand RooCode's capabilities.

### Workspace-Specific Settings

Create a `.roocode` folder in your project root for project-specific configurations:

```json
{
  "defaultMode": "architect",
  "memoryBank": {
    "enabled": true,
    "autoSave": true
  },
  "provider": "gemini",
  "contextWindow": "large"
}
```

## Verifying Your Setup

Let's test your RooCode installation:

### Test 1: Basic Connection

Start by testing your basic connection to ensure RooCode can communicate with your chosen AI provider. Open the Command Palette and type "RooCode: Ask," then ask a simple question like "Can you explain what RooCode is?" If your setup is working correctly, you should receive a detailed response about RooCode's capabilities, confirming that your API key is properly configured and the connection is established.

### Test 2: Mode Switching

Next, verify that RooCode's specialized modes are functioning properly by testing the mode switching functionality. Use "RooCode: Switch Mode" to try different modes like Ask, Code, and Architect modes, then interact with each one to verify that each mode has a distinct personality and focus area. This test confirms that RooCode's core specialization feature is working as expected.

### Test 3: Memory Bank

Finally, test RooCode's advanced context management by asking it to remember something specific, such as "Please remember that I'm working on a React project." Then switch to a different mode and ask "What project am I working on?" The information should be remembered across modes, demonstrating that the Memory Bank system is properly maintaining context between different specialized AI modes.

## Troubleshooting Common Issues

### "API Key Not Found" Error

When RooCode can't locate your API key, the issue typically stems from incorrect configuration or file placement. **First, verify your API key is correctly set** in either environment variables or VS Code settings, ensuring there are no extra spaces or characters. **Restart VS Code after setting environment variables** since the application needs to reload to recognize new environment variables. **Check that your `.env` file is in the correct location** - it should be in your project's root directory, not in a subdirectory.

### "Rate Limit Exceeded" Error

Rate limiting occurs when you exceed the number of requests allowed within a specific time window, which is common when experimenting with AI tools. **Wait for the rate limit to reset**, which usually takes about one minute for most providers. If you frequently encounter this issue, **consider upgrading to a paid tier** that offers higher rate limits for more intensive usage. In the meantime, **reduce the frequency of your requests** by spacing them out or batching your questions more efficiently.

### "Insufficient Credits" Error

This error indicates that your account has run out of available credits or reached its spending limit. **Check your account balance** on your AI provider's dashboard to see your current credit status and usage history. **Add credits or upgrade your plan** if you want to continue using the same provider, or **switch to a provider with available credits** - for example, moving from a paid service to Google Gemini's free tier if you've exhausted your paid credits.

### RooCode Not Responding

When RooCode becomes unresponsive, the issue could be related to connectivity, service availability, or local configuration problems. **Check your internet connection** to ensure you can reach the AI provider's servers. **Verify the AI provider's service status** by visiting their status page or checking social media for outage reports. **Restart VS Code** to refresh all connections and clear any temporary issues. Finally, **check VS Code's output panel** for detailed error messages that can help diagnose the specific problem.

## Security Checklist

Before proceeding to the next chapter, ensure you've completed these security steps:

- [ ] API keys are stored securely (environment variables or VS Code user settings)
- [ ] `.env` file is added to `.gitignore`
- [ ] Usage limits are configured on your AI provider accounts
- [ ] Spending alerts are enabled
- [ ] You understand the cost structure of your chosen provider
- [ ] RooCode is successfully connecting to your AI provider
- [ ] You can switch between different RooCode modes

## What's Next?

In the next chapter, we'll explore RooCode's specialized modes in detail and introduce RooFlow - the advanced workflow orchestration system that makes RooCode truly powerful. You'll learn how different modes work together and how the Memory Bank system maintains context across complex development tasks.

## Practice Exercise

**Goal**: Set up RooCode with secure API key management and test basic functionality.

**Steps**:
Begin by installing the RooCode extension in VS Code through the Extensions marketplace, then obtain a Google Gemini API key using their free tier to avoid any costs during your learning process. Configure the API key using environment variables by creating a `.env` file in your project root and adding the key there, ensuring you also add `.env` to your `.gitignore` file. Test the connection by asking RooCode a simple question like "What is RooCode?" to verify everything is working properly. Try switching between Ask and Code modes to experience how different specialized modes respond differently to the same types of questions. Finally, verify that your API key is not visible in any committed code by checking your repository status and ensuring the `.env` file is properly ignored.

**Success Criteria**:
Your setup is complete when RooCode responds to your questions with detailed, helpful answers, you can successfully switch between different modes and notice their distinct personalities, your API key is securely stored in environment variables rather than hardcoded in files, and no sensitive information appears in your version control system when you check your git status.

**Estimated Time**: 30-45 minutes

---

*Remember: The goal isn't just to get RooCode working, but to establish secure, professional practices that will serve you well in real-world development scenarios.*