// @lovable.dev/vite-tanstack-config already includes the following — do NOT add them manually
// or the app will break with duplicate plugins:
//   - tanstackStart, viteReact, tailwindcss, tsConfigPaths, nitro (build-only using cloudflare as a default target),
//     componentTagger (dev-only), VITE_* env injection, @ path alias, React/TanStack dedupe,
//     error logger plugins, and sandbox detection (port/host/strictPort).
// You can pass additional config via defineConfig({ vite: { ... }, etc... }) if needed.
import { defineConfig } from "@lovable.dev/vite-tanstack-config";

// Static export (for GitHub Pages or any plain static host).
// Build locally with:  VITE_STATIC=1 bun run build
// If deploying to https://<user>.github.io/<repo>/, also set VITE_BASE="/<repo>/"
const isStatic = process.env.VITE_STATIC === "1";
const base = process.env.VITE_BASE || "/cookieware/";

export default defineConfig({
  vite: { base },
  tanstackStart: {
    // Redirect TanStack Start's bundled server entry to src/server.ts (our SSR error wrapper).
    server: { entry: "server" },
    // In static mode, render the app as a client-side SPA (no server functions).
    ...(isStatic && { spa: { enabled: true, prerender: { outputPath: "/index.html" } } }),
  },
  // Skip nitro entirely for static builds — no Cloudflare worker bundle needed.
  ...(isStatic && { nitro: false as const }),
});
