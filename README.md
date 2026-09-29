# Gao-Howard Lab website

Lab website for Cathy Gao-Howard, MD — PCCM physician-scientist at Northwestern University working on ICU EHR data and machine learning.

Built with React + Vite, themed in soft purples.

## Editing content

All text, research areas, the training timeline, and community links live in **`src/content.js`**. Edit that file and the site updates — no need to touch the components. Set `lab.email` to show a "Get in touch" button.

## Develop

```bash
npm install
npm run dev      # local dev server
npm run build    # production build → dist/
npm run preview  # serve the build locally
```

## Deploy

`.github/workflows/deploy.yml` builds and publishes to GitHub Pages on every push to `main`. One-time setup: in the repo's **Settings → Pages**, set **Source** to **GitHub Actions**.
