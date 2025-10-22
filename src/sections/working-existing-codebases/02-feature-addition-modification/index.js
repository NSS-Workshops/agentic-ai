/*
  Chapter configuration file

    1. Import the markdown file as `content`
    2. Define and export the chapter configuration object
*/

import content from "./index.md?raw";

export const featureAdditionModificationChapter = {
  id: 'feature-addition-modification',
  title: 'Feature Addition and Modification',
  description: 'Using Architect mode for new feature strategy, maintaining existing code style, identifying breaking changes, creating algorithmic task lists',
  content,
  previousChapterId: 'codebase-analysis-understanding',
  nextChapterId: 'debugging-refactoring'
};