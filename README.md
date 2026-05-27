# London Component Operator Demo

Mobile-first React demo for London Component Operator, a speculative service design project where office components circulate as revenue-generating assets instead of becoming demolition waste.

## Setup

```bash
npm install
```

## Local Development

```bash
npm run dev
```

Vite will print a local URL, usually `http://localhost:5173`.

## Build

```bash
npm run build
```

## Vercel Deployment

1. Import this repository into Vercel.
2. Use the default Vite settings:
   - Build command: `npm run build`
   - Output directory: `dist`
3. Deploy.

All app data is local mock data in `src/data/mockData.js`; there is no backend, database, or authentication layer.

## GitHub Pages

This repository includes a GitHub Actions workflow that builds and deploys the demo to GitHub Pages whenever `main` is updated.
