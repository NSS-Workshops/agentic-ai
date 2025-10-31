/*
  Chapter configuration file

    1. Import the markdown file as `content`
    2. Define and export the chapter configuration object
*/

import content from "./index.md?raw";

export default {
    id: "orchestration-mode",
    title: "Orchestration Mode",
    previousChapterId: "iterative-development-ask-mode",
    nextChapterId: null,
    requiresAuth: false,
    exercise: null,
    content
}