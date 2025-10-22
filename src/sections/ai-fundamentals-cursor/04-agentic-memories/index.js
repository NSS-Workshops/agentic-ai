/*
  Chapter configuration file

    1. Import the markdown file as `content`
    2. Define and export the chapter configuration object
*/

import content from "./index.md?raw";

export default {
    id: "agentic-memories",
    title: "Introduction to Agentic AI and Memories",
    previousChapterId: "prompt-engineering",
    nextChapterId: null,
    requiresAuth: false,
    content
}