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

import { Course } from '@nss-workshops/nss-core'
import './index.css'

function App() {
  useEffect(() => {
    initializeMermaid();

    // Re-render diagrams when content changes
    const observer = new MutationObserver(() => {
      renderMermaidDiagrams().catch(console.error);
    });

    observer.observe(document.body, {
      childList: true,
      subtree: true
    });

    // Initial render of any existing diagrams
    renderMermaidDiagrams().catch(console.error);

    return () => observer.disconnect();
  }, []);

  return (
    <Course chapters={chapters}
            config={config}
            nav={sections} />
  )
}

export default App