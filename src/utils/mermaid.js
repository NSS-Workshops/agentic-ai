import mermaid from 'mermaid';

let isInitialized = false;

export const initializeMermaid = () => {
  if (!isInitialized) {
    mermaid.initialize({
      startOnLoad: true,
      theme: 'default',
      securityLevel: 'loose',
      fontFamily: 'inherit',
      flowchart: {
        useMaxWidth: true,
        htmlLabels: true
      },
      sequence: {
        useMaxWidth: true,
        wrap: true
      },
      gantt: {
        useMaxWidth: true
      },
      // Add error handling
      logLevel: 'error',
      errorCallback: (error) => {
        console.error('Mermaid rendering error:', error);
      }
    });
    isInitialized = true;
  }
};

export const renderMermaidDiagrams = async () => {
  if (typeof window !== 'undefined') {
    initializeMermaid();

    // Re-render any new mermaid diagrams that haven't been processed yet
    const unprocessedDiagrams = document.querySelectorAll('.mermaid:not([data-processed])');

    for (let i = 0; i < unprocessedDiagrams.length; i++) {
      const diagram = unprocessedDiagrams[i];
      try {
        // Mark as being processed to avoid duplicate processing
        diagram.setAttribute('data-processed', 'true');

        // Get the diagram text content
        const diagramText = diagram.textContent.trim();

        // Validate the diagram syntax before rendering
        await mermaid.parse(diagramText);

        // If validation passes, render the diagram with a valid CSS ID
        const diagramId = `mermaid-diagram-${Date.now()}-${i}`;
        const { svg } = await mermaid.render(diagramId, diagramText);
        diagram.innerHTML = svg;

      } catch (error) {
        console.error('Mermaid diagram error:', error);
        // Display error message in the diagram container
        diagram.innerHTML = `
          <div style="
            border: 2px solid #ff6b6b;
            background: #ffe0e0;
            padding: 1rem;
            border-radius: 4px;
            color: #d63031;
            font-family: monospace;
            font-size: 0.9rem;
          ">
            <strong>Mermaid Syntax Error:</strong><br>
            ${error.message || 'Invalid diagram syntax'}
            <details style="margin-top: 0.5rem;">
              <summary>Diagram Source</summary>
              <pre style="margin: 0.5rem 0; white-space: pre-wrap;">${diagram.textContent}</pre>
            </details>
          </div>
        `;
      }
    }
  }
};