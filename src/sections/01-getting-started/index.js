const chapterModules = import.meta.glob('./*/index.js', { eager: true })

const config = {
  id: "getting-started",
  title: "Getting Started",
  order: 10,
  description: "Install and verify the toolchain: VSCode, Node, Git, Claude Code, and the GitHub CLI. Clone the Rare repos.",
  required: true,
}

const chapters = Object.values(chapterModules).map(chapter => ({ ...chapter.default, sectionId: config.id }))

export { chapters, config }
