# Test Jar Labs

Landing page for Test Jar Labs. React + Vite, deployed on Vercel.

## Run locally

```bash
npm install
npm run dev
```

## Deploy

Every push to `main` deploys automatically on Vercel (framework preset: Vite, output: `dist`).

## Editing

- All copy lives in `src/App.jsx`; the games list is the `games` array there.
- Colors and fonts are CSS variables in `src/index.css`.
- Brand: the red (R.ATPC) palette from the TJL Branding Figma file — red `#F9464B` and white `#F9F9F9` (primary), yellow `#FFC700` and black `#1A1A21` (secondary). Headings use Kallisto Heavy if installed locally, Russo One otherwise; body is Nunito.
- Logos (and the organic red brand shape) are exported from Figma into `public/brand/` (the wordmark is outlined Kallisto, so it renders correctly everywhere).
