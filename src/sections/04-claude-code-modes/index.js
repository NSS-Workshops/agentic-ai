const chapterModules = import.meta.glob('./*/index.js', { eager: true })

const config = {
  id: "claude-code-modes",
  title: "Claude Code Modes",
  order: 40,
  description: "The Understand → Plan → Break down → Build → Confirm loop, and choosing plan / ask / auto modes deliberately.",
  required: true,
}

const chapters = Object.values(chapterModules).map(chapter => ({ ...chapter.default, sectionId: config.id }))

export { chapters, config }
