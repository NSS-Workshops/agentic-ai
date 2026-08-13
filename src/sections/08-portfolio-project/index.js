const chapterModules = import.meta.glob('./*/index.js', { eager: true })

const config = {
  id: "portfolio-project",
  title: "Portfolio Project: Greenfield with Tandem",
  order: 80,
  description: "Apply everything to a personal project in a stack you want to learn. Something you can show off in an interview.",
  required: false,
  optional: true,
}

const chapters = Object.values(chapterModules).map(chapter => ({ ...chapter.default, sectionId: config.id }))

export { chapters, config }
