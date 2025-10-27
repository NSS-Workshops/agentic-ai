/*
  Chapter configuration file

    1. Import the markdown file as `content`
    2. Define and export the chapter configuration object
*/

import content from "./index.md?raw";

export default {
    id: "roocode-setup",
    title: "RooCode Setup",
    previousChapterId: null,
    nextChapterId: "rooflow-setup",
    requiresAuth: false,
    exercise: null,
    content
}