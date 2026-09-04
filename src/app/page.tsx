import { NotifyForm } from "@/components/notify-form";

const upcoming = [
  { label: "Services", description: "Planning, tax & investment guidance" },
  { label: "About", description: "Your independent financial consultant" },
  { label: "Contact", description: "Book a no-obligation conversation" },
];

export default function Home() {
  const year = new Date().getFullYear();

  return (
    <div className="relative flex min-h-dvh flex-col overflow-hidden bg-slate-950 text-white">
      {/* Ambient background */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 -z-10"
      >
        <div className="absolute -top-40 -left-40 h-[32rem] w-[32rem] rounded-full bg-emerald-500/20 blur-3xl" />
        <div className="absolute -bottom-48 -right-32 h-[36rem] w-[36rem] rounded-full bg-sky-500/10 blur-3xl" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(255,255,255,0.06),_transparent_55%)]" />
      </div>

      <header className="mx-auto flex w-full max-w-6xl items-center justify-between px-6 py-8">
        <div className="flex items-center gap-3">
          <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-emerald-400 text-base font-bold text-slate-950">
            S
          </span>
          <span className="text-lg font-semibold tracking-tight">
            Surecover
          </span>
        </div>
        <span className="hidden text-sm text-slate-400 sm:block">
          Independent Financial Consulting
        </span>
      </header>

      <main className="mx-auto flex w-full max-w-6xl flex-1 flex-col justify-center px-6 py-16">
        <div className="max-w-2xl">
          <span className="inline-flex items-center gap-2 rounded-full border border-emerald-400/30 bg-emerald-400/10 px-3 py-1 text-xs font-medium uppercase tracking-wider text-emerald-300">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-400" />
            </span>
            New website coming soon
          </span>

          <h1 className="mt-6 text-4xl font-semibold leading-tight tracking-tight text-white sm:text-5xl md:text-6xl">
            Clarity and confidence for every{" "}
            <span className="bg-gradient-to-r from-emerald-300 to-sky-300 bg-clip-text text-transparent">
              financial decision
            </span>
            .
          </h1>

          <p className="mt-6 max-w-xl text-lg leading-relaxed text-slate-300">
            Surecover is a boutique financial consultancy helping individuals
            and small businesses plan, protect, and grow with independent,
            straight-talking advice. Our new home is on its way — leave your
            email and be the first to know when we launch.
          </p>

          <div className="mt-8">
            <NotifyForm />
          </div>
        </div>

        <div className="mt-16 grid gap-4 sm:grid-cols-3">
          {upcoming.map((item) => (
            <div
              key={item.label}
              className="rounded-2xl border border-white/10 bg-white/5 p-5 backdrop-blur-sm transition hover:border-emerald-400/30 hover:bg-white/[0.07]"
            >
              <p className="text-sm font-semibold text-white">{item.label}</p>
              <p className="mt-1 text-sm text-slate-400">{item.description}</p>
            </div>
          ))}
        </div>
      </main>

      <footer className="mx-auto flex w-full max-w-6xl flex-col items-start justify-between gap-2 px-6 py-8 text-sm text-slate-500 sm:flex-row sm:items-center">
        <p>&copy; {year} Surecover. All rights reserved.</p>
        <a
          href="mailto:hello@surecover.co"
          className="text-slate-400 transition hover:text-emerald-300"
        >
          hello@surecover.co
        </a>
      </footer>
    </div>
  );
}
