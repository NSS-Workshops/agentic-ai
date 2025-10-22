/*
  Section configuration file
*/

// Import all chapter packages
const chapterModules = import.meta.glob('./*/index.js', { eager: true })

// Section configuration
const config = {
  id: "getting-started",
  title: "Getting Started",
  order: 10,
  description: "Getting Started",
}

const chapters = Object.values(chapterModules).map(chapter => ({ ...chapter.default, sectionId: config.id }) )

export { chapters, config }
