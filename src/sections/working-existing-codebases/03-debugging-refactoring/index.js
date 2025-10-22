/*
  Chapter configuration file

    1. Import the markdown file as `content`
    2. Define and export the chapter configuration object
*/

import content from "./index.md?raw";

export const debuggingRefactoringChapter = {
  id: 'debugging-refactoring',
  title: 'Debugging and Refactoring',
  description: 'Using AI tools to identify and fix bugs, improving code quality incrementally, writing tests for existing untested code, using Orchestrator mode for implementation',
  content,
  previousChapterId: 'feature-addition-modification',
  nextChapterId: null
};