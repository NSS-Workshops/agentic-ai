/*
NOTE: The '@nss-workshops/nss-core' package 0.2.11 or greater must be installed for this to work.

Both of these imports are required:
- Course: The main component that renders the course structure.
- './index.css': The CSS file that contains the necessary styles for the course layout.
*/
import { useEffect } from 'react';
import { sections, chapters } from './sections'
import config from './config';
import { initializeMermaid, renderMermaidDiagrams } from './utils/mermaid';
import { initializePrism, enhancedHighlightCodeBlocks } from './utils/prism';

import { Course } from '@nss-workshops/nss-core'
import './index.css'

function App() {
  useEffect(() => {
    initializeMermaid();
    initializePrism();

    // Re-render diagrams and highlight code when content changes
    const observer = new MutationObserver(() => {
      renderMermaidDiagrams().catch(console.error);
      // Add a small delay to ensure DOM is fully rendered
      setTimeout(() => enhancedHighlightCodeBlocks(), 100);
    });

    observer.observe(document.body, {
      childList: true,
      subtree: true
    });

    // Initial render of any existing diagrams and code highlighting
    renderMermaidDiagrams().catch(console.error);
    // Add a small delay to ensure DOM is fully rendered
    setTimeout(() => enhancedHighlightCodeBlocks(), 500);

    return () => observer.disconnect();
  }, []);

  return (
    <Course chapters={chapters}
            config={config}
            nav={sections} />
  )
}

export default App