import Prism from 'prismjs';

// Import core languages
import 'prismjs/components/prism-javascript';
import 'prismjs/components/prism-python';
import 'prismjs/components/prism-csharp';
import 'prismjs/components/prism-yaml';
import 'prismjs/components/prism-bash';
import 'prismjs/components/prism-json';
import 'prismjs/components/prism-css';
import 'prismjs/components/prism-markup';

// Import a theme
import 'prismjs/themes/prism.css';

// Language aliases mapping
const languageAliases = {
  'sh': 'bash',
  'shell': 'bash',
  'py': 'python',
  'js': 'javascript',
  'jsx': 'javascript',
  'ts': 'javascript',
  'tsx': 'javascript',
  'yml': 'yaml',
  'cs': 'csharp',
  'csharp': 'csharp',
  'html': 'markup',
  'xml': 'markup'
};

/**
 * Initialize Prism for syntax highlighting
 */
export const initializePrism = () => {
  // Disable automatic highlighting to handle it manually
  Prism.manual = true;
};

/**
 * Apply syntax highlighting to all code blocks in the document
 */
export const highlightCodeBlocks = () => {
  // Find all code blocks with language classes
  const codeBlocks = document.querySelectorAll('section pre[class*="language-"]');

  codeBlocks.forEach(block => {
    // Extract language from class name
    const className = block.className;
    const languageMatch = className.match(/language-(\w+)/);

    if (languageMatch) {
      let language = languageMatch[1];

      // Map aliases to actual language names
      if (languageAliases[language]) {
        language = languageAliases[language];
      }

      // Check if language is supported
      if (Prism.languages[language]) {
        // Apply syntax highlighting
        const highlightedCode = Prism.highlight(
          block.textContent,
          Prism.languages[language],
          language
        );

        // Update the block with highlighted HTML
        block.innerHTML = highlightedCode;

        // Add the correct language class to the parent pre element
        const preElement = block.parentElement;
        if (preElement && preElement.tagName === 'PRE') {
          preElement.className = `language-${language}`;
        }
      }
    }
  });
};

/**
 * Process HTML content to ensure proper language classes for Prism
 * This works with the marked library's output
 */
export const processCodeBlocksForHighlighting = (content) => {
  if (!content || typeof content !== 'string') return content;

  // The marked library converts ```lang to <pre><code class="language-lang">
  // But we need to ensure our language aliases are applied
  let processedContent = content;

  // Handle language aliases in existing code blocks
  Object.entries(languageAliases).forEach(([alias, actual]) => {
    const aliasRegex = new RegExp(`class="language-${alias}"`, 'g');
    processedContent = processedContent.replace(aliasRegex, `class="language-${actual}"`);
  });

  return processedContent;
};

/**
 * Enhanced code block highlighting that works with DOM elements
 */
export const enhancedHighlightCodeBlocks = () => {
  // Find all code blocks, including those without language classes
  const codeBlocks = document.querySelectorAll('pre code');

  codeBlocks.forEach(block => {
    const preElement = block.parentElement;
    if (!preElement || preElement.tagName !== 'PRE') return;

    // Check if this block already has highlighting
    if (block.classList.contains('prism-highlighted')) return;

    let language = null;

    // Try to extract language from existing class
    const className = block.className;
    const languageMatch = className.match(/language-(\w+)/);

    if (languageMatch) {
      language = languageMatch[1];
    } else {
      // Try to detect language from the code content
      const code = block.textContent;
      if (code.includes('def ') || code.includes('import ') || code.includes('print(')) {
        language = 'python';
        block.className = 'language-python';
      } else if (code.includes('echo ') || code.includes('#!/bin/bash')) {
        language = 'bash';
        block.className = 'language-bash';
      } else if (code.includes('function ') || code.includes('const ') || code.includes('let ')) {
        language = 'javascript';
        block.className = 'language-javascript';
      }
    }

    if (language) {
      // Map aliases to actual language names
      if (languageAliases[language]) {
        language = languageAliases[language];
        block.className = `language-${language}`;
      }

      // Check if language is supported
      if (Prism.languages[language]) {
        try {
          // Apply syntax highlighting
          const highlightedCode = Prism.highlight(
            block.textContent,
            Prism.languages[language],
            language
          );

          // Update the block with highlighted HTML
          block.innerHTML = highlightedCode;

          // Add the correct language class to the parent pre element
          preElement.className = `language-${language}`;

          // Mark as highlighted to avoid re-processing
          block.classList.add('prism-highlighted');
        } catch (error) {
          console.warn(`Failed to highlight code block with language ${language}:`, error);
        }
      }
    }
  });
};
