/*
  Chapter configuration file

    1. Import the markdown file as `content`
    2. Define and export the chapter configuration object
*/

import content from "./index.md?raw";

export default {
    id: "memory-bank",
    title: "Memory Bank",
    previousChapterId: "mode-workflows",
    nextChapterId: null,
    requiresAuth: false,
    exercise: null,
    content
}