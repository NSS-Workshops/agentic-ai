Welcome to the world of advanced agentic AI development! In this chapter, you'll learn how to set up RooCode, a sophisticated AI development tool that goes far beyond basic AI assistance. Think of RooCode as upgrading from a helpful assistant to having a team of specialized AI experts working on your project.

## What Makes RooCode Different?

While Cursor IDE provides excellent AI assistance within your editor, RooCode operates as an **agentic AI system** - meaning it can work independently, make decisions, and coordinate multiple specialized "modes" to accomplish complex development tasks.

### Key Advantages of RooCode

**Specialized AI Modes**: Instead of one general-purpose AI, RooCode provides specialized modes like:
- **Code Mode**: Focused on writing and refactoring code
- **Architect Mode**: Designs system architecture and project structure
- **Ask Mode**: Answers questions and provides explanations
- **Debug Mode**: Specialized in troubleshooting and problem-solving

**Advanced Context Management**: RooCode maintains sophisticated project memory through its "Memory Bank" system, allowing it to remember decisions, track progress, and maintain context across long development sessions.

**RooFlow Integration**: An enhanced system that provides even more sophisticated workflow orchestration and cross-mode collaboration.

## Installation and Setup

### Step 1: Install RooCode

RooCode is distributed as a VS Code extension. Here's how to install it:

1. **Open VS Code**
2. **Go to Extensions** (Ctrl+Shift+X or Cmd+Shift+X)
3. **Search for "RooCode"**
4. **Click Install** on the official RooCode extension

Alternatively, you can install from the command line:

```bash
code --install-extension roocode.roocode
```

### Step 2: Initial Configuration

After installation, you'll need to configure RooCode with your API credentials. RooCode supports multiple AI providers:

- **Google Gemini** (Recommended for free tier)
- **OpenAI GPT-4**
- **Anthropic Claude**

## API Key Security Best Practices

**⚠️ CRITICAL SECURITY NOTICE**: API keys are like passwords to your AI accounts. Mishandling them can lead to unauthorized usage and unexpected charges.

### Understanding API Key Risks

Think of API keys like credit cards for AI services:
- Anyone with your key can make requests using your account
- Costs can accumulate quickly with heavy usage
- Keys should never be shared or stored in code repositories

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

Store keys in VS Code user settings (not workspace settings):

1. Open VS Code Settings (Ctrl+, or Cmd+,)
2. Search for "RooCode"
3. Enter your API keys in the appropriate fields
4. These are stored locally and not shared with your project

### Getting Your API Keys

#### Google Gemini API Key (Free Tier - Recommended)

Google Gemini offers a generous free tier, making it perfect for learning:

1. **Visit**: [https://makersuite.google.com/app/apikey](https://makersuite.google.com/app/apikey)
2. **Sign in** with your Google account
3. **Click "Create API Key"**
4. **Copy the key** and store it securely

**Free Tier Limits**:
- 15 requests per minute
- 1 million tokens per minute
- 1,500 requests per day

#### OpenAI API Key (Paid Service)

OpenAI requires payment but offers high-quality models:

1. **Visit**: [https://platform.openai.com/api-keys](https://platform.openai.com/api-keys)
2. **Create an account** and add payment method
3. **Generate a new API key**
4. **Set usage limits** to control costs

#### Anthropic Claude API Key (Paid Service)

Claude offers excellent reasoning capabilities:

1. **Visit**: [https://console.anthropic.com/](https://console.anthropic.com/)
2. **Create an account** and add payment method
3. **Generate an API key**
4. **Configure usage limits**

## Cost Management and Monitoring

### Understanding AI API Costs

AI API costs are typically based on **tokens** - think of tokens as "words" processed by the AI:

- **Input tokens**: The text you send to the AI
- **Output tokens**: The text the AI generates
- **Context tokens**: Previous conversation history

### Cost Comparison by Provider

| Provider | Model | Input Cost (per 1M tokens) | Output Cost (per 1M tokens) | Free Tier |
|----------|-------|----------------------------|------------------------------|-----------|
| Google Gemini | 1.5 Flash | Free up to limit | Free up to limit | Yes - 1,500 requests/day |
| OpenAI | GPT-4o | $2.50 | $10.00 | $5 credit for new accounts |
| Anthropic | Claude 3.5 Sonnet | $3.00 | $15.00 | $5 credit for new accounts |

### Setting Up Cost Controls

#### For OpenAI:
1. Go to your OpenAI dashboard
2. Navigate to "Usage limits"
3. Set a monthly budget (start with $10-20)
4. Enable email notifications

#### For Anthropic:
1. Access your Anthropic console
2. Go to "Billing & Usage"
3. Set spending limits
4. Configure alerts

#### For Google Gemini:
- Free tier automatically limits usage
- Monitor usage in Google Cloud Console if using paid tier

### Cost-Saving Tips

1. **Start with Gemini**: Use the free tier for learning
2. **Use shorter contexts**: Longer conversations cost more
3. **Be specific**: Clear prompts reduce back-and-forth
4. **Monitor usage**: Check your usage regularly
5. **Set alerts**: Configure spending notifications

## RooCode Configuration

### Basic Configuration

After installing RooCode and setting up your API keys, configure your preferences:

1. **Open Command Palette** (Ctrl+Shift+P or Cmd+Shift+P)
2. **Type "RooCode: Configure"**
3. **Select your preferred AI provider**
4. **Choose default mode** (recommend starting with "Ask" mode)

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

1. **Open Command Palette**
2. **Type "RooCode: Ask"**
3. **Ask**: "Can you explain what RooCode is?"

If successful, you should receive a detailed response about RooCode's capabilities.

### Test 2: Mode Switching

1. **Try switching modes**: Use "RooCode: Switch Mode"
2. **Test different modes**: Try Ask, Code, and Architect modes
3. **Verify responses**: Each mode should have a distinct personality and focus

### Test 3: Memory Bank

1. **Ask RooCode to remember something**: "Please remember that I'm working on a React project"
2. **Switch modes and ask**: "What project am I working on?"
3. **Verify persistence**: The information should be remembered across modes

## Troubleshooting Common Issues

### "API Key Not Found" Error

**Solution**:
1. Verify your API key is correctly set in environment variables or VS Code settings
2. Restart VS Code after setting environment variables
3. Check that your `.env` file is in the correct location

### "Rate Limit Exceeded" Error

**Solution**:
1. Wait for the rate limit to reset (usually 1 minute)
2. Consider upgrading to a paid tier for higher limits
3. Reduce the frequency of requests

### "Insufficient Credits" Error

**Solution**:
1. Check your account balance on the provider's dashboard
2. Add credits or upgrade your plan
3. Switch to a provider with available credits

### RooCode Not Responding

**Solution**:
1. Check your internet connection
2. Verify the AI provider's service status
3. Restart VS Code
4. Check VS Code's output panel for error messages

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
1. Install RooCode extension in VS Code
2. Obtain a Google Gemini API key (free tier)
3. Configure the API key using environment variables
4. Test the connection by asking RooCode a simple question
5. Try switching between Ask and Code modes
6. Verify that your API key is not visible in any committed code

**Success Criteria**:
- RooCode responds to your questions
- You can switch between modes
- Your API key is securely stored
- No sensitive information is committed to version control

**Estimated Time**: 30-45 minutes

---

*Remember: The goal isn't just to get RooCode working, but to establish secure, professional practices that will serve you well in real-world development scenarios.*