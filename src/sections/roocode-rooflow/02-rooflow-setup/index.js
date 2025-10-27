/*
  Chapter configuration file

    1. Import the markdown file as `content`
    2. Define and export the chapter configuration object
*/

import content from "./index.md?raw";

export default {
    id: "rooflow-setup",
    title: "RooFlow Setup",
    previousChapterId: "roocode-setup",
    nextChapterId: "mode-workflows",
    requiresAuth: false,
    exercise: null,
    content
}