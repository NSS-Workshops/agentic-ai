/*
  Chapter configuration file

    1. Import the markdown file as `content`
    2. Define and export the chapter configuration object
*/

import content from "./index.md?raw";

export default {
    id: "prompt-engineering",
    title: "Context Engineering",
    previousChapterId: "cursor-setup",
    nextChapterId: "agentic-memories",
    requiresAuth: false,
    exercise: null,
    content
}