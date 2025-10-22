/*
  Chapter configuration file

    1. Import the markdown file as `content`
    2. Define and export the chapter configuration object
*/

import content from "./index.md?raw";

export default {
    id: "roocode-setup-security",
    title: "RooCode Setup and Security",
    previousChapterId: null,
    nextChapterId: "roocode-modes-rooflow",
    requiresAuth: false,
    content
}