/*
  Chapter configuration file

    1. Import the markdown file as `content`
    2. Define and export the chapter configuration object
*/

import content from "./index.md?raw";

export default {
    id: "mode-workflows",
    title: "Mode Workflows",
    previousChapterId: "rooflow-setup",
    nextChapterId: "memory-bank",
    requiresAuth: false,
    exercise: null,
    content
}