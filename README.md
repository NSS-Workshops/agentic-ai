# Curriculum Site Template

A React-based template for creating student-facing curriculum workshop site with interactive exercises, quizzes, and content management.

## Quick Start

### Prerequisites

First-time setup for a project that depends on **nss-core**:

- Create and set your **NPM token (`NPM_TOKEN`)** as described [here](https://github.com/NSS-Workshops/platform?tab=readme-ov-file#installation-consumer-projects-installation)

### Installation

1. **Create environment variables**:
   Create a `.env.local` file in the project root use .env.template as a base and fill in the values:
   ```
   VITE_LEARNING_PLATFORM_API=http://localhost:8000
   ```

   If authentication is enabled (see Configuration section), also add:
   ```
   VITE_OAUTH_CLIENT_ID=your_oauth_client_id
   VITE_PROXY_DOMAIN=your_proxy_domain
   ```

2. **Install dependencies**:
   ```bash
   npm install
   ```

3. **Start the development server**:
   ```bash
   npm run dev
   ```

The application will be available at `http://localhost:5173/[course-name]/` where `[course-name]` is derived from your `courseName` configuration.

## Using This Template

This repository serves as a template for creating new workshop curriculum sites. Here's how to get started:

### 1. Configuration Setup

Edit [`src/config.js`](src/config.js) to customize your course:

```javascript
const config = {
  oauthClientId: import.meta.env.VITE_OAUTH_CLIENT_ID,
  proxyDomain: import.meta.env.VITE_PROXY_DOMAIN,
  baseUrl: import.meta.env.BASE_URL,
  learningPlatformApi: import.meta.env.VITE_LEARNING_PLATFORM_API,
  courseName: "Your Course Name Here", // Change this
  doAuth: false, // Set to true if you need authentication
};
```

#### Configuration Options

- **`courseName`** (string): The display name of your course. Used as the HTML page title and throughout the application. Automatically converted to URL-friendly format (lowercase, spaces to hyphens).

- **`doAuth`** (boolean): 
  - `true`: Enables authentication features, requires OAuth environment variables
  - `false`: Disables authentication for simpler deployment

# Enable GitHub Actions for This Repo

When you create a new repository from this template, GitHub copies all workflow files  
(in `.github/workflows/`) but **does not copy secrets or workflow permissions**.  
Follow these steps to get GitHub Actions fully working.

## ✅ Step 1. Enable GitHub Actions

1. Go to your repository on GitHub.  
2. Click the **Actions** tab (top navigation bar).  
3. If you see a yellow banner saying “Workflows aren’t being run on this fork/template yet,”  
   click **“I understand my workflows, enable them.”**  
4. If you see **“Enable GitHub Actions”** — click it to activate workflows.  

Your repo is now allowed to run GitHub Actions.

## 🧱 Step 3. Verify Workflow Permissions

1. Go to **Settings → Actions → General**  
2. Scroll to **Workflow permissions**  
3. Choose **“Read and write permissions”**  
4. Check ✅ **“Allow GitHub Actions to create and approve pull requests”**

### 2. Course Structure Setup

This template uses a modular, self-contained architecture where each section and chapter manages its own configuration:

```
src/
├── config.js                    # Global application configuration
├── sections/
│   ├── index.js                 # Main sections aggregator
│   ├── section-name/
│   │   ├── index.js             # Section configuration and chapter imports
│   │   ├── 01-chapter-name/
│   │   │   ├── index.js         # Chapter configuration
│   │   │   └── index.md         # Chapter content (markdown)
│   │   ├── 02-another-chapter/
│   │   │   ├── index.js         # Chapter configuration
│   │   │   └── index.md         # Chapter content (markdown)
│   │   └── ...
│   └── another-section/
│       ├── index.js             # Section configuration
│       └── ...
```

1. **Main Aggregator** ([`src/sections/index.js`](src/sections/index.js)): Imports all sections via `import.meta.glob` and combines their chapters into arrays for the application. You don't edit this to add content — new sections/chapters are picked up automatically.
2. **Section Configuration** (e.g., [`src/sections/01-getting-started/index.js`](src/sections/01-getting-started/index.js)): Defines section metadata and imports/orders all chapters in that section.
3. **Chapter Configuration** (e.g., [`src/sections/01-getting-started/01-class-setup/index.js`](src/sections/01-getting-started/01-class-setup/index.js)): Defines chapter metadata, navigation, and imports the chapter's markdown content.

### 3. Creating Course Content

This walks through adding a new section titled "Deploying to Github" with two chapters: Overview and Github Actions.

**Step 1: Create the section directory and its config file**

```bash
mkdir src/sections/deploy-to-github
```

Create `src/sections/deploy-to-github/index.js`:

```javascript
// Import all chapter packages. This is a Vite feature.
const chapterModules = import.meta.glob('./*/index.js', { eager: true })

// Section configuration. This is the only code you change.
const config = {
  id: "deploy-to-github",
  title: "Deploying to Github",
  description: "Deploying your project to the Github platform",
  order: 90, // sections render lowest order first
  required: true, // or required: false, optional: true for elective sections
}

const chapters = Object.values(chapterModules).map(chapter => ({ ...chapter.default, sectionId: config.id }))

export { chapters, config }
```

##### Section Configuration Options

| Option | Type | Description |
|  --- | ---  | --- |
| **id** | _string_ | A project-unique string slug identifier for this section |
| **title** | _string_ | The value for the label in the left navigation bar |
| **description** | _string_ | A brief description |
| **order** | _int_ | Used to order sections vertically in the left nav, lowest first |
| **required** / **optional** | _boolean_ | Marks the section as required work or optional/additional work in the nav |

**Step 2: Create each chapter's directory and its two files**

```bash
mkdir src/sections/deploy-to-github/01-overview
touch src/sections/deploy-to-github/01-overview/index.js
touch src/sections/deploy-to-github/01-overview/index.md
```

Open `src/sections/deploy-to-github/01-overview/index.js`:

```javascript
import content from "./index.md?raw";

export default {
  id: "overview",
  title: "Overview of Github Deployments",
  previousChapterId: null,
  nextChapterId: "github-actions",
  exercise: null,
  content
}
```

##### Chapter Configuration Options

| Option | Type | Description |
|  --- | ---  | --- |
| **id** | _string_ | A project-unique string slug identifier for this chapter |
| **title** | _string_ | The value for the main header at the top of the content |
| **previousChapterId** | _string \| null_ | The id of the previous chapter, needed for the **Previous Chapter** button |
| **nextChapterId** | _string \| null_ | The id of the next chapter, needed for the **Next Chapter** button |
| **exercise** | _object \| null_ | Optional exercise data for the chapter; `null` for a plain reading chapter |
| **content** | _string_ | The markdown content for the chapter, imported with `?raw` |

Then write the actual lesson content in `index.md`:

```markdown
Initial content for under the main header

## Subheadings as needed

More content...
```

> 📝 The `title` property automatically becomes the main `H1` element at the top of the content.

**Step 3: Repeat for each remaining chapter**

Numeric prefixes on chapter directories (`01-`, `02-`) are just for readability when browsing the file tree — they aren't read by the app. Ordering within a section comes from the `previousChapterId` / `nextChapterId` chain.

### Naming Conventions

- **Section directories**: numeric prefix + kebab-case (e.g., `01-getting-started`, `02-llms-and-prompting`)
- **Chapter directories**: numeric prefix + kebab-case (e.g., `01-class-setup`, `02-tokens-and-the-context-window`)
- **Section/Chapter IDs**: kebab-case, project-unique (chapter ids in this repo are prefixed with their section id, e.g. `llms-and-prompting-the-prediction-robot`, so they stay unique across the whole course)

### 3. Environment Variables

The template supports these environment variables:

**Required:**
- `VITE_LEARNING_PLATFORM_API`: API endpoint for the learning platform

**Optional (when `doAuth: true`):**
- `VITE_OAUTH_CLIENT_ID`: OAuth client ID for authentication
- `VITE_PROXY_DOMAIN`: Domain for OAuth proxy

### 4. Deployment

The course name in [`src/config.js`](src/config.js) automatically configures:
- Base path in [`vite.config.js`](vite.config.js)
- GitHub Pages deployment paths
- Internal routing

Example: `"Introduction to React"` becomes `/introduction-to-react/`

## Development Workflow

1. **Fork/clone this template repository**
2. **Update [`src/config.js`](src/config.js)** with your course details
3. **Create a section directory** under `src/sections/` for each module, with its own `index.js` (see "Creating Course Content" above)
4. **Create a chapter directory** inside each section for every lesson, each with its own `index.js` + `index.md`
5. **Test locally** with `npm run dev`
6. **Deploy** to your hosting platform

## Support

For questions about the NSS Core platform or this template, refer to the [NSS Workshops Platform documentation](https://github.com/NSS-Workshops/platform).

---

*This template is developed by Nashville Software School to provide free, accessible curriculum development tools for educators.*
