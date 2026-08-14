const chapterModules = import.meta.glob('./*/index.js', { eager: true })

const config = {
  id: "workflows-and-tandem",
  title: "Workflows and Tandem",
  order: 70,
  description: "Package your habits into a reusable workflow. Install Tandem, set up a Dev Profile, ship three features through /pair-program.",
  required: true,
}

const chapters = Object.values(chapterModules).map(chapter => ({ ...chapter.default, sectionId: config.id }))

export { chapters, config }
