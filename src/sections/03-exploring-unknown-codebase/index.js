const chapterModules = import.meta.glob('./*/index.js', { eager: true })

const config = {
  id: "exploring-unknown-codebase",
  title: "Exploring an Unknown Codebase",
  order: 30,
  description: "Apply prompting to the \"I just joined the team\" scenario and produce durable documentation artifacts.",
  required: true,
}

const chapters = Object.values(chapterModules).map(chapter => ({ ...chapter.default, sectionId: config.id }))

export { chapters, config }
