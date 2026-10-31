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

- `src/App.jsx` — React page and showcase content
- `src/site-interactions.js` — scroll effects, demo reel, carousel, and FAQ behavior
- `src/styles.css` — global styles
- `public/images/` — screenshots and favicon assets
