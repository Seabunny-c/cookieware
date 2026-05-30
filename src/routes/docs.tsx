import { createFileRoute, Link } from "@tanstack/react-router";

export const Route = createFileRoute("/docs")({
  head: () => ({
    meta: [
      { title: "Documentation — Cookieware" },
      {
        name: "description",
        content:
          "Cookieware documentation: installation, first launch, script hub, settings, and troubleshooting.",
      },
      { property: "og:title", content: "Documentation — Cookieware" },
      {
        property: "og:description",
        content: "Everything you need to install, configure, and run Cookieware.",
      },
    ],
    links: [
      { rel: "canonical", href: "/docs" },
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "anonymous" },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@400;500;600;700&family=Inter:wght@400;500;600&family=JetBrains+Mono:wght@400;500&display=swap",
      },
    ],
  }),
  component: Docs,
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

const sections = [
  { id: "getting-started", label: "Getting Started" },
  { id: "installation", label: "Installation" },
  { id: "first-launch", label: "First Launch" },
  { id: "script-hub", label: "Script Hub" },
  { id: "settings", label: "Settings & Hotkeys" },
  { id: "updates", label: "Auto-Updates" },
  { id: "troubleshooting", label: "Troubleshooting" },
  { id: "faq", label: "FAQ" },
];

function Code({ children }: { children: string }) {
  return (
    <pre className="overflow-x-auto rounded-sm border border-zinc-100/5 bg-zinc-100/[0.02] p-4 font-mono text-[13px] leading-relaxed text-zinc-300">
      <code>{children}</code>
    </pre>
  );
}

function Section({
  id,
  title,
  children,
}: {
  id: string;
  title: string;
  children: React.ReactNode;
}) {
  return (
    <section id={id} className="scroll-mt-24 border-t border-zinc-100/5 pt-10 first:border-0 first:pt-0">
      <h2 className="font-display text-2xl font-semibold tracking-tight text-zinc-100">
        {title}
      </h2>
      <div className="mt-4 space-y-4 text-[15px] leading-relaxed text-zinc-400">
        {children}
      </div>
    </section>
  );
}

function Docs() {
  return (
    <div className="min-h-screen bg-surface font-sans text-zinc-300 selection:bg-brand selection:text-brand-foreground">
      {/* Nav */}
      <nav className="sticky top-0 z-50 border-b border-zinc-100/5 bg-surface/80 backdrop-blur-md">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
          <Link to="/" className="flex items-center gap-2.5">
            <CookieMark />
            <span className="font-display text-lg font-semibold tracking-tight text-zinc-100">
              Cookieware
            </span>
          </Link>
          <div className="hidden items-center gap-8 text-sm font-medium sm:flex">
            <Link to="/" hash="features" className="text-zinc-400 transition-colors hover:text-brand">
              Features
            </Link>
            <Link to="/" hash="pricing" className="text-zinc-400 transition-colors hover:text-brand">
              Pricing
            </Link>
            <Link to="/docs" className="text-brand">
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

      <main className="mx-auto max-w-7xl px-6 py-12 lg:py-16">
        <header className="mb-12 max-w-3xl">
          <div className="inline-flex items-center gap-2 rounded-full border border-brand/25 bg-brand/5 px-3 py-1 text-xs font-medium uppercase tracking-wider text-brand">
            Documentation · v2.4
          </div>
          <h1 className="mt-4 font-display text-4xl font-semibold tracking-tight text-zinc-100 sm:text-5xl">
            Cookieware Docs
          </h1>
          <p className="mt-4 text-lg text-zinc-400">
            Install, configure, and master Cookieware in under five minutes.
          </p>
        </header>

        <div className="grid gap-10 lg:grid-cols-[220px_1fr]">
          {/* Sidebar */}
          <aside className="lg:sticky lg:top-24 lg:self-start">
            <nav className="flex flex-col gap-1 text-sm">
              <div className="mb-2 px-3 text-xs font-semibold uppercase tracking-wider text-zinc-500">
                On this page
              </div>
              {sections.map((s) => (
                <a
                  key={s.id}
                  href={`#${s.id}`}
                  className="rounded-sm px-3 py-1.5 text-zinc-400 transition-colors hover:bg-zinc-100/5 hover:text-brand"
                >
                  {s.label}
                </a>
              ))}
            </nav>
          </aside>

          {/* Content */}
          <article className="max-w-3xl space-y-12">
            <Section id="getting-started" title="Getting Started">
              <p>
                Cookieware is an external utility — it never injects into the Roblox process.
                It runs alongside the game using kernel-level reads, which keeps you outside
                of anti-cheat scan paths.
              </p>
              <p>
                You'll need: Windows 10/11 (64-bit), 8 GB RAM, and admin privileges to load
                the driver on first launch.
              </p>
            </Section>

            <Section id="installation" title="Installation">
              <ol className="list-decimal space-y-2 pl-5">
                <li>Log in to your dashboard and click <span className="text-zinc-200">Download</span>.</li>
                <li>Extract <span className="font-mono text-zinc-200">cookieware.zip</span> to a folder of your choice — avoid <span className="font-mono text-zinc-200">Program Files</span>.</li>
                <li>Right-click <span className="font-mono text-zinc-200">Cookieware.exe</span> and select <span className="text-zinc-200">Run as administrator</span>.</li>
                <li>Sign in with the same credentials used on the website.</li>
              </ol>
              <Code>{`C:\\Cookieware\\
├─ Cookieware.exe
├─ driver\\cw_kernel.sys
└─ scripts\\`}</Code>
            </Section>

            <Section id="first-launch" title="First Launch">
              <p>
                On first launch, Cookieware will request to load its signed kernel driver.
                Approve the UAC prompt. The driver loads once per boot and unloads cleanly
                on exit.
              </p>
              <p>
                Open Roblox and join any experience. The Cookieware overlay binds to the
                game window automatically — toggle it with <kbd className="rounded border border-zinc-100/15 bg-zinc-100/5 px-1.5 py-0.5 font-mono text-xs text-zinc-200">INSERT</kbd>.
              </p>
            </Section>

            <Section id="script-hub" title="Script Hub">
              <p>
                The Script Hub mirrors a curated library of community scripts. Browse by
                game, favorite scripts, and they sync across devices.
              </p>
              <p>To load a local script:</p>
              <Code>{`// Place .lua files in:
C:\\Cookieware\\scripts\\<game-name>\\
// They appear under the "Local" tab in the Hub.`}</Code>
            </Section>

            <Section id="settings" title="Settings & Hotkeys">
              <div className="overflow-hidden rounded-sm border border-zinc-100/5">
                <table className="w-full text-left text-sm">
                  <thead className="bg-zinc-100/[0.03] text-xs uppercase tracking-wider text-zinc-500">
                    <tr>
                      <th className="px-4 py-3">Action</th>
                      <th className="px-4 py-3">Default</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-zinc-100/5 text-zinc-300">
                    <tr><td className="px-4 py-3">Toggle Overlay</td><td className="px-4 py-3 font-mono">INSERT</td></tr>
                    <tr><td className="px-4 py-3">Panic Unload</td><td className="px-4 py-3 font-mono">END</td></tr>
                    <tr><td className="px-4 py-3">ESP Toggle</td><td className="px-4 py-3 font-mono">F1</td></tr>
                    <tr><td className="px-4 py-3">Aim Assist</td><td className="px-4 py-3 font-mono">MOUSE5</td></tr>
                  </tbody>
                </table>
              </div>
            </Section>

            <Section id="updates" title="Auto-Updates">
              <p>
                Cookieware checks for updates at launch. New builds typically ship within
                30 minutes of a Roblox patch — the loader will refuse to start outdated
                builds against patched clients to keep you safe.
              </p>
            </Section>

            <Section id="troubleshooting" title="Troubleshooting">
              <ul className="list-disc space-y-2 pl-5">
                <li><span className="text-zinc-200">Driver fails to load:</span> disable Vanguard / Faceit AC and reboot.</li>
                <li><span className="text-zinc-200">Overlay invisible:</span> set Roblox display mode to Borderless Window.</li>
                <li><span className="text-zinc-200">Login loop:</span> delete <span className="font-mono">%APPDATA%\Cookieware\session.dat</span> and retry.</li>
              </ul>
            </Section>

            <Section id="faq" title="FAQ">
              <div>
                <h3 className="font-medium text-zinc-200">Is Cookieware detected?</h3>
                <p>No public detections since launch. Status is monitored 24/7 on Discord.</p>
              </div>
              <div>
                <h3 className="font-medium text-zinc-200">Can I use it on multiple PCs?</h3>
                <p>Yes — one HWID reset per month is free. Pro tier gets unlimited resets.</p>
              </div>
              <div>
                <h3 className="font-medium text-zinc-200">Refund policy?</h3>
                <p>Due to the nature of digital goods, all sales are final after first launch.</p>
              </div>
            </Section>

            <div className="rounded-sm border border-brand/20 bg-brand/5 p-6">
              <h3 className="font-display text-lg font-semibold text-zinc-100">
                Still stuck?
              </h3>
              <p className="mt-1 text-sm text-zinc-400">
                Open a ticket in our Discord — average first response under 4 minutes.
              </p>
              <a
                href="#"
                className="mt-4 inline-flex h-9 items-center justify-center rounded-sm bg-brand px-4 text-sm font-semibold text-brand-foreground transition-colors hover:bg-brand/90"
              >
                Join Discord
              </a>
            </div>
          </article>
        </div>
      </main>

      <footer className="border-t border-zinc-100/5 py-8">
        <div className="mx-auto max-w-7xl px-6 text-sm text-zinc-500">
          © {new Date().getFullYear()} Cookieware. All rights reserved.
        </div>
      </footer>
    </div>
  );
}
