/*
  Chapter configuration file

    1. Import the markdown file as `content`
    2. Define and export the chapter configuration object
*/

import content from "./index.md?raw";

export const finalProjectChapter = {
  id: 'final-project',
  title: 'Final Project',
  description: 'Applying learned skills to a comprehensive project, integrating multiple concepts from previous chapters, showcasing proficiency in working with existing codebases',
  content,
  previousChapterId: 'debugging-refactoring',
  nextChapterId: null,
  exercise: null
};