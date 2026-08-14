const chapterModules = import.meta.glob('./*/index.js', { eager: true })

const config = {
  id: "implementing-features",
  title: "Implementing Features in Rare",
  order: 60,
  description: "Debug real issues, ship real features, and own every line you commit. Three bugs and three features using the full loop.",
  required: true,
}

const chapters = Object.values(chapterModules).map(chapter => ({ ...chapter.default, sectionId: config.id }))

export { chapters, config }
