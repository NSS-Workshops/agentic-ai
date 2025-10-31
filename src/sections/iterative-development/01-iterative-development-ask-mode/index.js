/*
  Chapter configuration file

    1. Import the markdown file as `content`
    2. Define and export the chapter configuration object
*/

import content from "./index.md?raw";

export default {
    id: "iterative-development-ask-mode",
    title: "Learn with Architect+Ask",
    previousChapterId: null,
    nextChapterId: "orchestration-mode",
    requiresAuth: false,
    exercise: null,
    content
}