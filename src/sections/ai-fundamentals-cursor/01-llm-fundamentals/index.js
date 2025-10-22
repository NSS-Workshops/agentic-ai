/*
  Chapter configuration file

    1. Import the markdown file as `content`
    2. Define and export the chapter configuration object
*/

import content from "./index.md?raw";

export default {
    id: "llm-fundamentals",
    title: "Understanding Large Language Models",
    previousChapterId: null,
    nextChapterId: "cursor-setup",
    requiresAuth: false,
    exercise: null,
    content
}