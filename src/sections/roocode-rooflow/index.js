/*
  Section configuration file
*/

// Import all chapter packages. This is a Vite feature.
const chapterModules = import.meta.glob('./*/index.js', { eager: true })

// Section configuration. This is the only code you change.
const config = {
  id: "roocode-rooflow",
  title: "Advanced Tooling",
  description: "Introduction to sophisticated agentic AI tools, specialized development modes, and advanced context management",
  order: 2,
}

// Create chapters array
const chapters = Object.values(chapterModules).map(chapter => {
  const chapterExport = Object.values(chapter)[0]
  chapterExport.sectionId = config.id
  return chapterExport
})

export { chapters, config }