# Shakthivel M — AI Product & UX Design Portfolio

A portfolio site built to apply for UI/UX, Product Design, and AI Product Design
internships — built with React + Vite + Tailwind CSS.

## Design concept

The site uses **two visual languages that mirror its own thesis**: AI products need
different UX than traditional software.

- **Global site + HelVox case study** — a dark, technical "system" theme (near-black,
  cyan/amber/green status colors) that literally reuses the same AI-state colors
  (listening / processing / responding) described in the HelVox case study itself.
  A small status chip in the nav bar continuously cycles through those states as a
  quiet signature — the portfolio practices the "always show system state" idea it
  argues for.
- **Odysso case study** — a warm ivory, saffron, peacock-blue, and gold palette with a
  serif display face, standing in deliberate contrast to the technical theme, matching
  the "trip planning with a friend" brief.

The HelVox case study also includes a **fully interactive AI state-machine demo** you
can click through (listening → processing → clarifying → responding → confirmed).

## Getting started

Requires Node.js 18+.

```bash
npm install
npm run dev       # start local dev server (usually http://localhost:5173)
npm run build      # production build → dist/
npm run preview    # preview the production build locally
```

## Project structure

```
src/
  components/    Reusable UI pieces (Nav, Hero, cards, sections, the AI state demo, etc.)
  pages/         Home.jsx, HelVoxCaseStudy.jsx, OdyssoCaseStudy.jsx
  data/          Editable content — profile.js, helvox.js, odysso.js
  hooks/         useReveal.js — scroll-in animation hook
  index.css      Design tokens, fonts, global styles
tailwind.config.js  Full color/type/animation token system
```

## Editing your content

Everything you're likely to want to change lives in `src/data/`:

- **`profile.js`** — name, email, LinkedIn, and:
  - `github`: currently a placeholder (`"PLACEHOLDER_GITHUB_URL"`). Replace with your
    real GitHub profile URL and it will automatically show as a live link in the
    Contact section.
  - `resumeUrl`: currently `null`, which shows "Resume available on request." Set it
    to a path (e.g. `/resume.pdf`, after placing the file in `public/`) or a hosted
    link, and the Resume button will switch to a direct download automatically.
- **`helvox.js`** / **`odysso.js`** — every section of each case study (overview,
  problem, flows, decisions, etc.) as plain data, so you can edit copy without
  touching component code.

### Adding real screenshots

Both case study pages currently have a placeholder block labeled
`— add interface screenshots / mockups here —` (in `HelVoxCaseStudy.jsx` and
`OdyssoCaseStudy.jsx`). Drop your images into `src/assets/`, import them, and replace
that block with an `<img>` or gallery grid once you have real screens to show.

## Deployment

The `dist/` folder from `npm run build` is a static site — deploy it to Vercel,
Netlify, GitHub Pages, or any static host. No environment variables or backend
required.
