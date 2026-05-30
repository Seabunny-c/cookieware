# Deploying to GitHub Pages

This project is a TanStack Start app. For GitHub Pages (a static host), we
build it as a single-page app (SPA) — no server functions, just the landing
page + docs.

## One-time setup

1. Push the repo to GitHub.
2. In the repo settings → **Pages**, set "Source" to **GitHub Actions**.
3. If your site lives at `https://<user>.github.io/<repo>/` (project page),
   go to **Settings → Secrets and variables → Actions → Variables** and add
   a repo variable named `VITE_BASE` with value `/<repo>/` (include the
   leading and trailing slashes).
   - If you're using a custom domain or a `<user>.github.io` root site,
     skip this — the default `/` is correct.
4. Push to `main`. The workflow in `.github/workflows/deploy.yml` builds and
   deploys automatically.

## Build locally

```bash
VITE_STATIC=1 bun run build
# Output goes to dist/
```

For a project-page deploy, also pass the base:

```bash
VITE_STATIC=1 VITE_BASE=/my-repo/ bun run build
```

## What works / what doesn't

Works on GitHub Pages:
- Landing page, docs, all client-side routing

Does NOT work (needs a real server):
- Server functions (`createServerFn`)
- API routes (`src/routes/api/*`)
- Auth, databases, file uploads

If you ever need those, publish from Lovable directly, or deploy to
Netlify / Vercel / Cloudflare Pages instead.
