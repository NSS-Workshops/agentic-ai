const chapterModules = import.meta.glob('./*/index.js', { eager: true })

const config = {
  id: "context-and-memory",
  title: "Context and Long-Term Memory",
  order: 50,
  description: "Solve the \"50 First Dates coworker\" problem with CLAUDE.md, persistent context that survives across sessions.",
  required: true,
}

const chapters = Object.values(chapterModules).map(chapter => ({ ...chapter.default, sectionId: config.id }))

export { chapters, config }
