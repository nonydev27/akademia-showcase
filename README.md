# Akademia Showcase

Landing page for [Akademia](https://github.com/nonydev27/akademia-showcase), a school management platform built for Ghanaian Primary, JHS, and SHS schools.

## Development

```sh
npm install
npm run dev
```

Create a production build with `npm run build`, then preview it with `npm run preview`.

GitHub Pages deployment is configured through `.github/workflows/deploy.yml`. In the repository settings, set **Pages → Build and deployment → Source** to **GitHub Actions**. Pushing to `main` then builds and deploys the site.

## Project structure

- `src/App.jsx` — page composition
- `src/components/` — page sections, FAQ, screenshot carousel, and demo reel
- `src/data/screens.js` — shared screenshot descriptions
- `src/site-interactions.js` — progressive scroll reveals and visual effects
- `src/styles.css` — global styles
- `public/images/` — screenshots and favicon assets
- `public/downloads/` — Windows installer

The download section links to the bundled Windows MSIX and the [v0.3.4 release](https://github.com/nonydev27/akademia-releases/releases/tag/v0.3.4) for release notes and alternate installers.
