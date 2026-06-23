# Portfolio Website

A simple, beautiful developer portfolio built with **Next.js** (Pages Router), **TypeScript**, and **CSS Modules**.

## Features

- **Page-based routing** — Home, About, Projects, and Contact pages
- **Server-side rendering** — Each page uses `getServerSideProps` for SSR
- **CSS Modules** — Scoped, component-level styling
- **Next.js Image** — Optimized images for profile and project thumbnails
- **Responsive design** — Works on desktop and mobile

## Project Structure

```
├── components/     # Reusable UI components
├── data/           # Portfolio content and data fetching
├── pages/          # File-based routes
├── public/images/  # Static images
└── styles/         # Global CSS and CSS modules
```

## Getting Started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

## Deploy

This project is ready to deploy on [Vercel](https://vercel.com):

```bash
npm run build
```

Or connect your GitHub repository to Vercel for automatic deployments.

## Customize

Edit `data/portfolio.ts` to update projects, skills, and contact info. Replace images in `public/images/` with your own.
