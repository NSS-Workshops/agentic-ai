const chapterModules = import.meta.glob('./*/index.js', { eager: true })

const config = {
  id: "llms-and-prompting",
  title: "Understanding LLMs and Prompting",
  order: 20,
  description: "Build the mental model (tokens, context, agents, hallucinations), then the skill that rides on top of it: writing prompts that actually land.",
  required: true,
}

const chapters = Object.values(chapterModules).map(chapter => ({ ...chapter.default, sectionId: config.id }))

export { chapters, config }
