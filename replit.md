# Addis Tour Guide

A Gatsby.js static website for a tour guide business in Addis Ababa, Ethiopia.

## Project Overview

- **Framework:** Gatsby v2 (React-based static site generator)
- **CMS:** Netlify CMS (for content management)
- **Styling:** Emotion (CSS-in-JS) with Styled System
- **Image Processing:** gatsby-plugin-sharp (with sharp v0.32.6 for Node 20 compatibility)

## Architecture

- `src/pages/` - Page components
- `src/templates/` - Gatsby template files
- `src/components/` - React components (atoms/molecules/organisms)
- `src/theme/` - Global styles and theme config
- `static/` - Static assets (images, admin config)
- `lambda/` / `src/lambda/` - Netlify Functions (serverless)

## Development Setup

### Key Configuration
- Runs on port **5000** with host **0.0.0.0** for Replit compatibility
- Uses `NODE_OPTIONS=--openssl-legacy-provider` to fix OpenSSL issue with Node 20 + webpack 4

### Prerequisites & Notes
- **Python 3** must be installed as a system dependency (required for node-gyp)
- **sharp v0.32.6** is used (upgraded from v0.22.1 to support Node 20)
- Nested sharp packages in `gatsby-plugin-sharp` and `gatsby-transformer-sharp` have been removed so they use the top-level v0.32.6

### Running
```bash
npm run develop
```

## Deployment

- **Type:** Static site
- **Build command:** `NODE_OPTIONS=--openssl-legacy-provider gatsby build`
- **Public directory:** `public`

## Dependencies

All installed via `npm install --platform=linux --arch=x64 --legacy-peer-deps`
