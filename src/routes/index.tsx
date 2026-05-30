import { createFileRoute, Link } from "@tanstack/react-router";
import dashboardPreview from "@/assets/dashboard-preview.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Cookieware — External Roblox Utility" },
      {
        name: "description",
        content:
          "Cookieware is the industry-leading external suite for Roblox. Undetected, performance-first, and built for total control.",
      },
      { property: "og:title", content: "Cookieware — External Roblox Utility" },
      {
        property: "og:description",
        content:
          "The industry-leading external suite for Roblox. Undetected, performant, total control.",
      },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/" },
    ],
    links: [
      { rel: "canonical", href: "/" },
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "anonymous" },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@400;500;600;700&family=Inter:wght@400;500;600&display=swap",
      },
    ],
  }),
  component: Index,
});

function CookieMark({ className = "size-6" }: { className?: string }) {
  return (
    <div
      className={`${className} relative rounded-full bg-brand grid place-items-center shadow-[0_0_24px_-6px_var(--brand)]`}
      aria-hidden
    >
      <span className="absolute size-1 rounded-full bg-brand-foreground/70 top-1 left-1.5" />
      <span className="absolute size-1.5 rounded-full bg-brand-foreground/70 bottom-1.5 right-1" />
      <span className="absolute size-1 rounded-full bg-brand-foreground/70 bottom-1 left-2" />
    </div>
  );
}

function Index() {
  return (
    <div className="min-h-screen bg-surface font-sans text-zinc-300 selection:bg-brand selection:text-brand-foreground">
      {/* Nav */}
      <nav className="sticky top-0 z-50 border-b border-zinc-100/5 bg-surface/80 backdrop-blur-md">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
          <div className="flex items-center gap-2.5">
            <CookieMark />
            <span className="font-display text-lg font-semibold tracking-tight text-zinc-100">
              Cookieware
            </span>
          </div>
          <div className="hidden items-center gap-8 text-sm font-medium sm:flex">
            <a href="#features" className="text-zinc-400 transition-colors hover:text-brand">
              Features
            </a>
            <a href="#preview" className="text-zinc-400 transition-colors hover:text-brand">
              Preview
            </a>
            <a href="#pricing" className="text-zinc-400 transition-colors hover:text-brand">
              Pricing
            </a>
            <Link to="/docs" className="text-zinc-400 transition-colors hover:text-brand">
              Docs
            </Link>
            <a href="#" className="text-zinc-400 transition-colors hover:text-brand">
              Discord
            </a>
          </div>
          <button className="inline-flex h-9 items-center justify-center rounded-sm border border-zinc-100/10 bg-zinc-100/5 px-4 text-sm font-medium text-zinc-100 transition-colors hover:bg-zinc-100/10">
            Login
          </button>
        </div>
      </nav>

      <main>
        {/* Hero */}
        <section className="relative flex flex-col items-center px-6 pt-24 pb-32 text-center">
          <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_50%_30%,oklch(0.78_0.15_62/0.10),transparent_65%)]" />
          <div className="inline-flex items-center gap-2 rounded-full border border-green-500/25 bg-green-500/5 py-1 pr-3 pl-2 text-xs font-medium text-green-400">
            <span className="relative flex size-1.5">
              <span className="absolute inline-flex size-full animate-ping rounded-full bg-green-400 opacity-75" />
              <span className="relative inline-flex size-1.5 rounded-full bg-green-400" />
            </span>
            Undetected · v4.1.2
          </div>
          <h1 className="mt-8 max-w-[28ch] text-balance font-display text-5xl leading-[1.05] font-semibold text-zinc-100 sm:text-6xl lg:text-7xl">
            External execution,{" "}
            <span className="text-brand">defined by precision.</span>
          </h1>
          <p className="mt-6 max-w-[56ch] text-pretty text-base text-zinc-400 lg:text-lg">
            Cookieware is the industry-leading external suite for Roblox. Built for performance,
            maintained for security, and designed for those who demand total control.
          </p>
          <div className="mt-10 flex flex-col gap-4 sm:flex-row">
            <button className="inline-flex h-12 items-center justify-center gap-2 rounded-sm bg-brand px-6 text-sm font-semibold text-brand-foreground shadow-[0_0_40px_-10px_var(--brand)] transition-transform active:scale-95">
              Download Loader
            </button>
            <button className="inline-flex h-12 items-center justify-center rounded-sm border border-zinc-100/10 bg-zinc-100/5 px-6 text-sm font-semibold text-zinc-100 transition-colors hover:bg-zinc-100/10">
              View Documentation
            </button>
          </div>
        </section>

        {/* Preview */}
        <section id="preview" className="mx-auto max-w-7xl px-6 py-12">
          <div className="relative overflow-hidden rounded-xl ring-1 ring-zinc-100/10">
            <img
              src={dashboardPreview}
              alt="Cookieware dashboard interface preview"
              width={1440}
              height={800}
              className="aspect-video w-full object-cover"
            />
            <div className="pointer-events-none absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-surface to-transparent" />
          </div>
        </section>

        {/* Features */}
        <section id="features" className="mx-auto max-w-7xl px-6 py-24">
          <div className="mb-12 max-w-2xl">
            <span className="text-xs font-semibold uppercase tracking-widest text-brand">
              Capabilities
            </span>
            <h2 className="mt-3 font-display text-3xl font-semibold text-zinc-100 sm:text-4xl">
              Engineered for the players who win.
            </h2>
          </div>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {[
              {
                title: "Kernel Stealth",
                body: "Operates outside the target memory space for maximum safety and minimal detection footprint.",
              },
              {
                title: "0% Performance Hit",
                body: "Optimized logic ensures your frame rates remain identical whether we are running or not.",
              },
              {
                title: "Auto-Update",
                body: "Our cloud system pushes patches instantly the moment a game update is detected.",
              },
              {
                title: "Global Script Hub",
                body: "Access a verified library of community scripts directly within our sleek interface.",
              },
            ].map((f) => (
              <div
                key={f.title}
                className="group rounded-sm border border-zinc-100/5 bg-card/50 p-6 ring-1 ring-black/5 transition-colors hover:border-brand/30"
              >
                <div className="mb-4 grid size-9 place-items-center rounded-sm bg-brand/10 text-brand">
                  <div className="size-4 rounded-xs border-2 border-current" />
                </div>
                <h3 className="font-display text-lg font-medium text-zinc-100">{f.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-zinc-400">{f.body}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Pricing */}
        <section id="pricing" className="mx-auto max-w-5xl px-6 py-24">
          <div className="mb-16 text-center">
            <span className="text-xs font-semibold uppercase tracking-widest text-brand">
              Pricing
            </span>
            <h2 className="mx-auto mt-3 max-w-[24ch] font-display text-3xl font-semibold text-zinc-100 sm:text-4xl">
              Pay once. Own it for life.
            </h2>
            <p className="mx-auto mt-4 max-w-[56ch] text-zinc-400">
              Every Cookieware plan is lifetime — no subscriptions, no renewals, no nonsense.
            </p>
          </div>
          <div className="grid gap-8 md:grid-cols-2">
            {/* Regular */}
            <div className="flex flex-col rounded-sm border border-zinc-100/5 bg-card/40 p-8 ring-1 ring-black/5">
              <span className="text-xs font-semibold uppercase tracking-widest text-zinc-500">
                Regular · Lifetime
              </span>
              <div className="mt-4 flex items-baseline gap-1">
                <span className="font-display text-5xl font-semibold text-zinc-100">$29</span>
                <span className="text-zinc-500">/once</span>
              </div>
              <p className="mt-3 text-sm text-zinc-400">
                Everything you need to dominate your favorite experiences.
              </p>
              <ul className="mt-8 space-y-4 text-sm">
                {[
                  "Full script execution engine",
                  "Standard ESP & visuals",
                  "Auto-updates for life",
                  "Community Discord access",
                ].map((i) => (
                  <li key={i} className="flex items-center gap-3 text-zinc-300">
                    <span className="size-1.5 rounded-full bg-brand" /> {i}
                  </li>
                ))}
              </ul>
              <button className="mt-12 inline-flex h-11 items-center justify-center rounded-sm border border-zinc-100/10 bg-zinc-100/5 px-4 text-sm font-medium text-zinc-100 transition-colors hover:bg-zinc-100/10">
                Purchase Regular
              </button>
            </div>

            {/* Pro */}
            <div className="relative flex flex-col rounded-sm border border-brand/30 bg-card p-8 ring-1 ring-brand/10 shadow-[0_0_60px_-30px_var(--brand)]">
              <div className="absolute -top-3 right-8 rounded-full bg-brand px-3 py-1 text-[10px] font-bold uppercase tracking-wider text-brand-foreground">
                Most Popular
              </div>
              <span className="text-xs font-semibold uppercase tracking-widest text-brand">
                Pro · Lifetime
              </span>
              <div className="mt-4 flex items-baseline gap-1">
                <span className="font-display text-5xl font-semibold text-zinc-100">$59</span>
                <span className="text-zinc-500">/once</span>
              </div>
              <p className="mt-3 text-sm text-zinc-400">
                The full Cookieware arsenal with priority support.
              </p>
              <ul className="mt-8 space-y-4 text-sm">
                {[
                  "Everything in Regular",
                  "Advanced kernel driver mode",
                  "Private premium script library",
                  "Priority 1-on-1 live support",
                  "Early beta releases",
                ].map((i) => (
                  <li key={i} className="flex items-center gap-3 text-zinc-200">
                    <span className="size-1.5 rounded-full bg-brand" /> {i}
                  </li>
                ))}
              </ul>
              <button className="mt-12 inline-flex h-11 items-center justify-center rounded-sm bg-brand px-4 text-sm font-semibold text-brand-foreground transition-transform active:scale-95">
                Purchase Pro
              </button>
            </div>
          </div>
        </section>
      </main>

      <footer className="border-t border-zinc-100/5 py-12">
        <div className="mx-auto max-w-7xl px-6">
          <div className="flex flex-col justify-between gap-8 md:flex-row">
            <div>
              <div className="flex items-center gap-2.5">
                <CookieMark className="size-5" />
                <span className="font-display text-base font-semibold text-zinc-100">
                  Cookieware
                </span>
              </div>
              <p className="mt-4 max-w-[35ch] text-sm text-zinc-500">
                The ultimate external utility for advanced Roblox users. Security first,
                performance always.
              </p>
            </div>
            <div className="flex gap-12">
              <div className="flex flex-col gap-3 text-sm">
                <span className="font-medium text-zinc-200">Product</span>
                <a href="#" className="text-zinc-500 hover:text-brand">Download</a>
                <a href="#" className="text-zinc-500 hover:text-brand">Status</a>
              </div>
              <div className="flex flex-col gap-3 text-sm">
                <span className="font-medium text-zinc-200">Community</span>
                <a href="#" className="text-zinc-500 hover:text-brand">Discord</a>
                <a href="#" className="text-zinc-500 hover:text-brand">Terms</a>
              </div>
            </div>
          </div>
          <div className="mt-12 border-t border-zinc-100/5 pt-8 text-xs text-zinc-600">
            © 2026 Cookieware. Not affiliated with Roblox Corporation.
          </div>
        </div>
      </footer>
    </div>
  );
}
