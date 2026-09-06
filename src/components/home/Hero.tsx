export function Hero() {
  return (
    <section className="relative overflow-hidden bg-[#0b1220] text-white">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_rgba(45,212,191,0.18),_transparent_55%),radial-gradient(ellipse_at_bottom_left,_rgba(56,189,248,0.12),_transparent_50%)]"
      />
      <div className="relative mx-auto grid max-w-6xl gap-12 px-6 py-20 lg:grid-cols-[1.2fr_0.8fr] lg:items-center lg:py-28">
        <div>
          <p className="mb-5 text-xs font-semibold tracking-[0.28em] text-teal-300 uppercase">
            Cleared derivatives advisory
          </p>
          <h1 className="max-w-3xl text-4xl leading-tight font-semibold tracking-tight text-balance sm:text-5xl lg:text-6xl">
            Clarity for decisions that shape clearing.
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-relaxed text-slate-300 text-pretty">
            Sure Clear is an independent specialist advisory firm focused
            exclusively on the cleared derivatives industry. We help banks,
            brokers, exchanges, CCPs, fintechs and new market participants make
            better decisions across clearing strategy, transformation,
            regulatory change and operations.
          </p>
          <div className="mt-10 flex flex-wrap gap-4">
            <a
              href="#contact"
              className="rounded-full bg-teal-400 px-6 py-3 text-sm font-semibold text-[#0b1220] transition hover:bg-teal-300"
            >
              Start a conversation
            </a>
            <a
              href="#focus"
              className="rounded-full border border-white/20 px-6 py-3 text-sm font-semibold text-white transition hover:border-white/40 hover:bg-white/5"
            >
              Explore our focus
            </a>
          </div>
        </div>

        <aside className="rounded-3xl border border-white/10 bg-white/5 p-8 shadow-2xl shadow-teal-950/40 backdrop-blur">
          <p className="text-xs font-semibold tracking-[0.22em] text-teal-300 uppercase">
            Built differently
          </p>
          <p className="mt-4 text-2xl leading-snug font-medium text-white">
            Deep practitioner experience — not broad-based consultancy.
          </p>
          <ul className="mt-8 space-y-4 text-sm text-slate-300">
            <li className="flex gap-3">
              <span className="mt-1 h-2 w-2 shrink-0 rounded-full bg-teal-400" />
              Independent advice with no product agenda
            </li>
            <li className="flex gap-3">
              <span className="mt-1 h-2 w-2 shrink-0 rounded-full bg-teal-400" />
              Specialists who have run clearing businesses
            </li>
            <li className="flex gap-3">
              <span className="mt-1 h-2 w-2 shrink-0 rounded-full bg-teal-400" />
              Focused exclusively on cleared derivatives
            </li>
          </ul>
        </aside>
      </div>
    </section>
  );
}
