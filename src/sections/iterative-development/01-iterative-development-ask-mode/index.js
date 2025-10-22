/*
  Chapter configuration file

    1. Import the markdown file as `content`
    2. Define and export the chapter configuration object
*/

import content from "./index.md?raw";

export default {
    id: "iterative-development-ask-mode",
    title: "Iterative Development with Ask Mode",
    previousChapterId: null,
    nextChapterId: "cross-task-context-memory-bank",
    requiresAuth: false,
    exercise: null,
    content
}