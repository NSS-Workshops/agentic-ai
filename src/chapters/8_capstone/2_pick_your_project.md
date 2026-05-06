Pick something you want to build and something you want to learn. The lists below are suggestions. If you have your own idea or want to use a stack not listed here, go for it.

## Project ideas

**Media library** — a personal collection tracker for movies, video games, or vinyl records (pick one media type). Track what you own, what you want, ratings, notes. Browse and search your collection.

**Subscription manager** — track and manage recurring subscriptions. What you're paying, when it renews, total monthly/yearly cost. Alerts for upcoming renewals. Categorize by type (streaming, software, gym, etc.).

**Habit tracker** — define habits, log daily completions, view streaks and statistics. Maybe a simple reward system for hitting milestones.

**Meal planner** — plan meals for the week, manage recipes, generate grocery lists from planned meals. Browse recipes by tag or ingredient.

**DIY project planner** — track projects (car maintenance, home improvement, crafts). Each project has steps, materials needed, resource links, and progress tracking. Think of it as a project board for physical-world work.

Or build something else entirely. The workflow is the same regardless of the idea.

## Tech stack

Pick what you want to learn or deepen. This project is most valuable when you're stretching into something new, but if you'd rather build something ambitious in a stack you already know, that's fine too. It's your project.

### Languages and frameworks

- **Python:** Django, FastAPI
- **C# / .NET**
- **JavaScript / TypeScript:** React, Vue, Next.js
- **Go** (standard library, Gin, or Echo)
- **Rust** (Actix Web, Axum) — significantly steeper learning curve than the other options. The ownership model and borrow checker are conceptually demanding. Scope accordingly.
### Data and infrastructure

- **Postgres** — the relational database you used on Rare. Free tier on most hosting platforms.
- **Supabase** — more than a database. It's a backend-as-a-service: auth, realtime subscriptions, storage, and a REST API generated from your schema. You can pair Supabase with React or Vue and skip writing a traditional backend entirely. Free tier: 500MB database, 1GB storage, 50K monthly active users.
- **Docker** — containerize your app for consistent environments.

### Deployment

Deployment is not exactly necessary but rewarding, especially for showing off your app. Here are some platforms, roughly grouped by what they support:

| Platform | Best for | Free tier |
|----------|----------|-----------|
| **GitHub Pages** | Static sites (frontend only, no server) | Free |
| **Vercel** | Frontend frameworks + serverless functions | Generous free tier |
| **Netlify** | Static sites + serverless functions | Free tier |
| **Render** | Full-stack (API + database + frontend) | Free tier (spins down after inactivity) |
| **Railway** | Full-stack | Free trial credits ($5), then pay-as-you-go |
| **Digital Ocean** | Full-stack | No free tier, starts around $4-6/month |

If you built a frontend-only app with Supabase as the backend, GitHub Pages, Vercel, or Netlify will work. If you have a traditional API server, Render or Railway are the simplest path to getting it live.
