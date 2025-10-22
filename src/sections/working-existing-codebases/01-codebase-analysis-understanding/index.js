/*
  Chapter configuration file

    1. Import the markdown file as `content`
    2. Define and export the chapter configuration object
*/

import content from "./index.md?raw";

export const codebaseAnalysisUnderstandingChapter = {
  id: 'codebase-analysis-understanding',
  title: 'Codebase Analysis and Understanding',
  description: 'Using Ask mode to analyze existing code structure, understanding unfamiliar codebases, identifying patterns and architectural decisions, documenting functionality',
  content,
  order: 1,
  previousChapterId: null,
  nextChapterId: 'feature-addition-modification'
};