# Workshop Template (change me)

A React-based template for creating student-facing curriculum workshop site with interactive exercises, quizzes, and content management.

## Prerequsite: Github Actions

When you create a new repository from this template, GitHub copies all workflow files
(in `.github/workflows/`) but **does not copy secrets or workflow permissions**.
Follow these steps to get GitHub Actions fully working.

### 1. Enable GitHub Actions

1. Go to your repository on GitHub.
2. Click the **Actions** tab (top navigation bar).
3. If you see a yellow banner saying “Workflows aren’t being run on this fork/template yet,”
   click **“I understand my workflows, enable them.”**
4. If you see **“Enable GitHub Actions”** — click it to activate workflows.

Your repo is now allowed to run GitHub Actions.

### 2. Verify Workflow Permissions

1. Go to **Settings → Actions → General**
2. Scroll to **Workflow permissions**
3. Choose **“Read and write permissions”**
4. Check ✅ **“Allow GitHub Actions to create and approve pull requests”**


## Prerequisite: Authentication for `npm` Package

> 🧨 If you have created a workshop before, you can skip this section since you have already done it.

1. Create a `.npmrc` file in your home directory with this content
    ```sh
    @nss-workshops:registry=https://npm.pkg.github.com
    //npm.pkg.github.com/:_authToken=replace_me
    ```
2. Create a Github Personal Access Token with `read:packages` scope. You can choose how long you want it to be active before expiration.
3. Copy your new PAT and paste it into the `.npmrc` file where `replace_me` currently is.

## Prerequisite: Environment Variables

1. Create a `.env.local` file in the project root and paste the following variable into it.
   ```
   VITE_COURSE_NAME="My New Course"
   VITE_COURSE_URL_SLUG="workshop-template"
   VITE_REQUIRES_GITHUB_AUTHENTICATION=false
   VITE_GLOBAL_PROGRESS_BAR=false
   VITE_LEARNING_PLATFORM_API=http://localhost:8000
   ```
2. Decide on a name for your workshop and update the value of the `VITE_COURSE_NAME` variable
3. Decide what you want the main URL route to be and set the value of `VITE_COURSE_URL_SLUG`.
4. If you want the global progress bar to appear at the bottom of the UI, change `VITE_GLOBAL_PROGRESS_BAR` to `true`.
5. If you want learners to authenticate with Github to access any protected content, then change the value of the `VITE_REQUIRES_GITHUB_AUTHENTICATION` variable to `true`, and then add the following variables.
   ```
   VITE_OAUTH_CLIENT_ID=your_github_oauth_app_client_id
   VITE_PROXY_DOMAIN=your_authentication_proxy_domain
   ```

There is an [existing authentication proxy server](https://github.com/nashville-software-school/foundations-auth-proxy?tab=readme-ov-file#running-your-own-instance) solution being used for the Foundations Course that you can clone and use locally during development. Just make sure that your `ALLOWED_ORIGINS` environment variable has the correct port for your workshop dev server.



## Starting the Development Server

1. **Install dependencies**:
   ```bash
   npm install
   ```
2. **Start the development server**:
   ```bash
   npm run dev
   ```

The application will be available at `http://localhost:5173/[course-name]/` where `[course-name]` is derived from the value of the `VITE_COURSE_NAME` value. For example, if the value of that variable is "Introduction to Cloud", the URL slug would be "introduction-to-cloud".

## Project Architecture

This template uses a modular, self-contained architecture where each section and chapter manages its own configuration. This approach eliminates the need for a massive global configuration file and makes content management more maintainable.

### Directory Structure

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

### How It Works

1. **Main Aggregator** ([`src/sections/index.js`](src/sections/index.js)): Imports all sections and combines their chapters into arrays for the application
2. **Section Configuration** (e.g., [`src/sections/getting-started/index.js`](src/sections/getting-started/index.js)): Defines section metadata and imports/orders all chapters
3. **Chapter Configuration** (e.g., [`src/sections/getting-started/01-summary/index.js`](src/sections/getting-started/01-summary/index.js)): Defines chapter metadata, navigation, and imports content

## Building Content

### Creating a New Section

This will walk your through the scenario where you want to create a new section titled "Deploying to Github" which will have three chapters:

1. Overview
2. Github Actions
3. Starting a deployment

**Step 1: Create the Section Directory**

```bash
mkdir src/sections/deploy-to-github
```

**Step 2: Create the Section Package File**

Create the file `src/sections/deploy-to-github/index.js` with the following content:

```js
/*
  Section configuration file
*/

// Import all chapter packages. This is a Vite feature.
const chapterModules = import.meta.glob('./*/index.js', { eager: true })

// Section configuration. This is the only code you change.
const config = {
  id: "deploy-to-github",
  title: "Deploying to Github",
  description: "Deploying your project to the Github platform",
  order: 10,
}

// Create chapters array
const chapters = Object.values(chapterModules).map(chapter => {
  const chapterExport = Object.values(chapter)[0]
  chapterExport.sectionId = config.id
  return chapterExport
})

export { chapters, config }
```

#### Section Configuration Options

| Option | Type | Description |
|  --- | ---  | --- |
| **id** | _string_ | A project-unique string slug identifier for this section |
| **title** | _string_ | The value for the label in the left navigation bar |
| **description** | _string_ | A brief description. |
| **order** | _int_ | Used to order the sections veritically in the left navigation bar. They get rendered lowest **order** at the top to highest **order** at the bottom. |


**Step 3: Create First Chapter Directory**

```sh
mkdir src/sections/deploy-to-github/01-overview
```

**Step 4: Create Chapter Content and Configuration**

For each chapter directory, create two files:

```sh
touch src/sections/deploy-to-github/01-overview/index.js
touch src/sections/deploy-to-github/01-overview/index.md
```

**Step 5: Configure the chapter**

Open `src/sections/deploy-to-github/01-overview/index.js` and place the following content. This pattern will be repeated for every chapter.

```javascript
/*
  Chapter configuration file

    1. Import the markdown file as `content`
    2. Define and export the chapter configuration object
*/

import content from "./index.md?raw";

export default {
    id: "overview",
    title: "Overview of Github Deployments",
    previousChapterId: null,
    nextChapterId: "github-actions",
    requiresAuth: false,
    content
}
```

#### Chapter Configuration Options

| Option | Type | Description |
|  --- | ---  | --- |
| **id** | _string_ | A project-unique string slug identifier for this chapter |
| **title** | _string_ | The value for the main header that will appear at the beginning of the markdown content |
| **previousChapterId** | _string_ | The unique id slug for the previous chapter. Needed for **Previous Chapter** button in UI to work. |
| **nextChapterId** | _string_ | The unique id slug for the next chapter. Needed for **Next Chapter** button in UI to work. |
| **requiresAuth** | _boolean_ | This defaults to `false`. Only define this in your config to `true` if you want the user to be authenticated with Github to view it. |
| **content** | _string_ | The markdown content for the chapter |

**Step 6: Create some chapter content**

Open the `src/sections/deploy-to-github/01-overview/index.md` file and create the markdown content for the chapter.

> 📝 The `title` property of the chapter config automatically becomes the main `H1` element at the top of the content.

```markdown
Initial content for under the main header

## Subheadings as needed

More content...
```

**Step 7: Repeat for each chapter**

Repeat steps 3-6 for the other two chapters.

> 📝 The numeric (e.g. `02-`) prefix for chapter directories is simply for organization when viewing the directories in your editor. They aren't required at all.

## Customizing the Color Pallette

The `@nss-workshops/nss-core` dependecy for your workshop exports all CSS colors used for the UI. Follow the [custom pallette instructions](./CUSTOM_PALLETTE.md) to design your own.

## Naming Conventions

- **Section directories**: Use kebab-case (e.g., `getting-started`, `api-testing`)
- **Chapter directories**: Use numbered prefixes for ordering (e.g., `01-summary`, `02-data-overview`)
- **Chapter IDs**: Use kebab-case without numbers (e.g., `summary`, `data-overview`)

## Support

For questions about the NSS Core platform or this template, refer to the [NSS Workshops Platform documentation](https://github.com/NSS-Workshops/platform).

---

*This template is developed by Nashville Software School to provide free, accessible curriculum development tools for educators.*
