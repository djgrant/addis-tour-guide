# Addis Tour Guide

A modern, accessible website for Abenezer Endale's tour guide business in Addis Ababa, Ethiopia.

## Tech Stack

- **Framework:** React 18 + Vite 8
- **Routing:** TanStack Router v1 (code-based, `src/router.jsx`)
- **Styling:** Pure CSS with CSS custom properties (no framework)
- **Fonts:** Montserrat (logo) + Playfair Display (headings) + Inter (body) via Google Fonts

## Design System

- **Color palette:** Ethiopian flag-inspired — deep green (`#1B7A4E`), gold (`#C8960C`), red (`#B22222`) on warm cream (`#FAF7F2`)
- **Typography:** Serif headings (`Playfair Display`) for elegance, sans-serif body (`Inter`) for readability
- **Accessibility:** Skip link, ARIA labels throughout, focus-visible styles, semantic HTML, keyboard navigation

## Architecture

- `src/data/content.js` — All site content in one place (single source of truth)
- `src/router.jsx` — Route tree and root layout (replaces App.jsx)
- `src/pages/` — Page components (Home, Tours, Guide, Reviews, Contact, NotFound)
- `src/components/` — Shared components (Nav, Footer) with co-located CSS
- `static/` — Static assets (images, favicons) served at root by Vite's publicDir

## Pages

| Route | Page | Description |
|-------|------|-------------|
| `/` | Home | Hero, stats, guide intro, tour preview, reviews teaser, CTA |
| `/tours` | Tours | Full tour listings with detail modal and booking CTAs |
| `/guide` | Guide | Abenezer's bio, credentials, values |
| `/reviews` | Reviews | TripAdvisor widget + curated testimonials |
| `/contact` | Contact | Contact info + form (opens mailto) |

## Running

```bash
npm run develop   # Dev server at localhost:5000
npm run build     # Production build → dist/
```

## Key Decisions

- Content extracted to `src/data/content.js` for easy editing without touching JSX
- Contact form opens native mailto (no backend required)
- All images referenced from `static/img/` directory served at `/img/`
- Mobile nav with animated hamburger and overlay
- Tour detail modal for full tour information without page change
