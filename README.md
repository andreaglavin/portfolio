# Andrea Gomez Lavin — Portfolio

A React + TypeScript + Vite single-page portfolio with a small, reusable design
system. Deployed to GitHub Pages.

**Live:** https://andreaglavin.github.io/portfolio/

## Local development

```bash
npm install
npm run dev          # http://localhost:5173
npm run typecheck    # tsc --noEmit
npm run build        # production build into ./dist
npm run preview      # serve the production build locally
```

Requires Node 18.18+ (Node 20 recommended). The repo is set up for `npm`; if you
prefer `pnpm` or `yarn`, `package.json` will work the same.

## Project layout

```
src/
├── design-system/        Tokens, typography, reset, animations. The single
│                         source of truth for visual decisions.
│   ├── tokens.css
│   ├── typography.css
│   ├── reset.css
│   ├── animations.css
│   ├── index.css         Entry point — imported once in main.tsx.
│   └── README.md
├── components/
│   ├── ui/               Reusable primitives: Button, Tag, TagList, Stat,
│   │                     SectionHeader, Container, FadeIn.
│   ├── layout/           Nav, Footer.
│   ├── sections/         Home page sections + case-study building blocks.
│   └── icons/            SVG icon components.
├── data/                 Site copy as typed data: work, testimonials,
│                         timeline, navigation links.
├── hooks/                useScrolled, useActiveSection, useFadeIn,
│                         useCardGlow, useSmoothScrollToHash.
├── pages/                Home, CaseStudyLayout, CaseStudyGenAI,
│                         CaseStudyAnalytics, CaseStudyRoaming.
└── main.tsx              App entry — wires the router and routes.

public/
├── assets/               Images served as-is by Vite.
└── 404.html              GH Pages SPA fallback redirect.
```

## Design system

Tokens are CSS custom properties defined in `src/design-system/tokens.css` and
`src/design-system/typography.css`. **Always reference tokens from CSS Modules**
— don't hardcode hex values, font sizes, or spacing.

See [`src/design-system/README.md`](src/design-system/README.md) for the full
token reference and usage guide.

## Routing

`react-router-dom`'s `HashRouter` is used so the app works on GitHub Pages
without server-side rewrites. The home page lives at `/` (i.e. `/#/`), and
case studies at `/#/case-study/<slug>`.

## Deployment

Pushing to `main` triggers `.github/workflows/deploy.yml`:

1. Installs deps with `npm ci`.
2. Runs `npm run build` (TypeScript check + Vite production build).
3. Uploads `./dist` as the Pages artifact.
4. Deploys to the `github-pages` environment.

### One-time setup on GitHub

1. Push the repo to GitHub.
2. Go to **Settings → Pages**.
3. Under **Build and deployment**, set **Source** to **GitHub Actions**.

The first push to `main` after that will publish the site at
`https://<user>.github.io/portfolio/`.

### Custom domain

If you deploy to a root domain (e.g. `andrea.design`), build with:

```bash
VITE_BASE=/ npm run build
```

and update the redirect target in `public/404.html` accordingly.

## Adding new content

- **A new project** — edit `src/data/work.ts` (for featured work) or add a new
  case study page under `src/pages/`.
- **A new testimonial** — append to `src/data/testimonials.ts`.
- **A new role on the timeline** — prepend to `src/data/timeline.ts`.
- **A site-wide color or font tweak** — edit the relevant token in
  `src/design-system/tokens.css` or `typography.css`. Everything updates.
