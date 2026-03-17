# Addis Tour Guide

Website for **Abenezer Endale**, a local tour guide based in Addis Ababa, Ethiopia. Built with React + Vite.

**Live ratings:** 4.9★ on TripAdvisor · 47 verified reviews · #76 of 721 attractions in Addis Ababa

---

## Tech stack

- **React 18** with React Router v6
- **Vite 6** — dev server on port 5000
- **Plain CSS** with CSS custom properties (no UI framework)
- **Fonts:** Montserrat (logo), Playfair Display (headings), Inter (body) via Google Fonts

## Project structure

```
src/
  data/content.js        # All site content — tours, reviews, guide bio, contact info
  components/
    Nav.jsx / Nav.css
    Footer.jsx / Footer.css
  pages/
    Home.jsx / Home.css
    Tours.jsx / Tours.css
    Guide.jsx / Guide.css
    Reviews.jsx / Reviews.css
    Contact.jsx / Contact.css
    NotFound.jsx / NotFound.css
  App.jsx                # Routes
  main.jsx               # Entry point
  index.css              # Global styles, design tokens
static/
  img/                   # Images served as static assets
index.html
vite.config.js
```

## Getting started

```bash
npm install
npm run develop        # Dev server at http://localhost:5000
npm run build          # Production build to dist/
npm run preview        # Preview the production build
```

## Content

All editable content lives in `src/data/content.js` — tour descriptions, pricing, the guide bio, review quotes, and contact details. Update that file to change anything displayed on the site.

## Contact & booking

- **WhatsApp:** [+251 909 538 319](https://wa.me/251909538319)
- **Email:** abenezertours@gmail.com
- **TripAdvisor:** [Addis Tour Guide](https://www.tripadvisor.com/Attraction_Review-g293796-d23521030-Reviews-Addis_Tour_Guide-Addis_Ababa.html)
