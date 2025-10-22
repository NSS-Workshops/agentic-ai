/*
  Chapter configuration file

    1. Import the markdown file as `content`
    2. Define and export the chapter configuration object
*/

import content from "./index.md?raw";

export default {
    id: "roocode-modes-rooflow",
    title: "RooCode Modes and RooFlow Introduction",
    previousChapterId: "roocode-setup-security",
    nextChapterId: "architect-mode-implementation",
    requiresAuth: false,
    exercise: null,
    content
}