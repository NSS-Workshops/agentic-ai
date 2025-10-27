Now that RooCode is properly configured, let's install RooFlow to enhance its capabilities with persistent context and optimized system prompts <a href="https://dev.to/simplr_sh/mastering-system-prompts-for-llms-2d1d" target="_blank"><sub>_[learn more]_</sub></a> that are optimized to use less tokens and save you money when working with a non-free LLM.


## Installing RooFlow

### Prerequisites

Before installing RooFlow, ensure you have:

1. Git installed and accessible in your system's PATH
2. Python 3 installed and accessible as `python3` (Mac) or `python` (Windows)
3. The PyYAML library installed. Install it using:
   ```sh
   pip install pyyaml
   ```
   If that didn't work, try this command:
   ```sh
   pip3 install pyyaml
   ```

### Installation Steps for macOS or Linux

1. Open your terminal and navigate to your project's root directory
2. Download the RooFlow installation script:
   ```bash
   curl -O https://raw.githubusercontent.com/GreatScottyMac/RooFlow/main/config/install_rooflow.sh
   ```
3. Make the script executable:
   ```bash
   chmod +x install_rooflow.sh
   ```
4. Run the installation script:
   ```bash
   ./install_rooflow.sh
   ```

### Installation Steps for Windows

1. Open Command Prompt or PowerShell and navigate to your project's root directory
2. Download the RooFlow installation script:
   ```cmd
   curl -O https://raw.githubusercontent.com/GreatScottyMac/RooFlow/main/config/install_rooflow.cmd
   ```
3. Run the installation script:
   ```cmd
   install_rooflow.cmd
   ```

### Verify Installation

After the script runs successfully:

1. Check that the `.roo/` directory exists in your project root
2. Verify the `.roomodes` file is present
3. Look for the following five Flow modes in Roo Code. They will appear beneath the existing Roo Code modes:
   - 🌊Flow Code💻
   - 🌊Flow Architect🏗️
   - 🌊Flow Ask❓
   - 🌊Flow Debug🪲
   - 🌊Flow Orchestrator🪃

These Flow modes will appear alongside your standard Roo Code modes, and you can switch between them at any time.

## Memory Bank

1. Start a new task in Roo Code
2. Choose **Flow Architect** mode
3. Enter the prompt `Initialize the memory bank for this project`
4. Follow the prompts and when it asks how you want to create the initial context, answer with "Access the initial context from the README.md document"

It will create many markdown files during this process, so just be patient until it completes.

## What's Next?

In the next chapter, we'll explore mode workflows in detail. You'll learn how different modes work together and how the Memory Bank system maintains context across complex development tasks.
