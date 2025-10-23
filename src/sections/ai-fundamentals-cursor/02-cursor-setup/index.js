/*
  Chapter configuration file

    1. Import the markdown file as `content`
    2. Define and export the chapter configuration object
*/

import content from "./index.md?raw";

export default {
    id: "cursor-setup",
    title: "Getting Started with Cursor",
    previousChapterId: "llm-fundamentals",
    nextChapterId: "prompt-engineering",
    requiresAuth: false,
    exercise: null,
    content
}