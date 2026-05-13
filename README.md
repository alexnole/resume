# 📄 Resume

Data-driven resume website built with [Astro](https://astro.build/) and
[Tailwind CSS](https://tailwindcss.com/).  
Design inspired by [BartoszJarocki](https://github.com/BartoszJarocki/cv).

## 👀 Overview

This project renders a clean, single-page resume from `src/data/resume.json`.
The UI is composed of small Astro components and sections (About, Experience,
Education), styled with Tailwind CSS.

> [!IMPORTANT]
> This repository currently contains real personal information in
> `src/data/resume.json` (email, phone, etc.). Replace it before making a fork public.

## 🛠️ Stack

- [Astro](https://astro.build/) - Static site generator
- [Tailwind CSS](https://tailwindcss.com/) - Utility-first CSS framework
- [TypeScript](https://www.typescriptlang.org/) - Static typing
- [Lucide Icons](https://lucide.dev/) - Open-source icon library

## 🚀 Getting Started

Prerequisites: Node.js `>= 22.12.0` and `pnpm`.

```bash
git clone https://github.com/alexnole/resume
cd resume
pnpm install
pnpm dev
```

Build and preview:

```bash
pnpm build
pnpm preview
```

## 🎨 Customize

- Content: edit `src/data/resume.json` (`basics`, `work[]`, `education[]`).
- Section order: edit `src/components/layout/Main.astro` (renders `src/components/sections/*`).
- Styling: `src/styles/global.css` (theme) and Tailwind classes across components.

> [!TIP]
> Keep dates as ISO strings (for example `2023-10-31`).

## 🗂️ Project Structure

```text
src/
  components/
    layout/        Page layout components
    sections/      Resume sections (About/Experience/Education)
    ui/            Small reusable UI pieces
  data/
    resume.json    Resume content source
  layouts/
    Layout.astro   Document shell + meta
  pages/
    index.astro    Single-page entry
  styles/
    global.css     Tailwind + theme tokens
```

## 📜 Scripts

- `pnpm dev`: start the dev server
- `pnpm build`: run type checks (`astro check`) and build to `dist/`
- `pnpm preview`: serve the production build locally
- `pnpm lint`: lint and auto-fix (`eslint --fix`)
- `pnpm format`: format source files with Prettier

> [!NOTE]
> This repo uses Husky + lint-staged, so commits may run formatting/linting automatically.

## 🌍 Deploy

This is a static Astro site.

- Build output is generated in `dist/`.
- You can deploy `dist/` to any static host (GitHub Pages, Netlify, Vercel,
  Azure Static Web Apps, etc.).
