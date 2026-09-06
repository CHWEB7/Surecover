const services = [
  {
    title: "Clearing strategy",
    description:
      "Membership models, product coverage and competitive positioning grounded in how clearing markets actually work.",
  },
  {
    title: "Transformation",
    description:
      "Technology, operating model and client proposition change — designed for delivery, not just diagnosis.",
  },
  {
    title: "Regulatory change",
    description:
      "Practical programmes that meet regulatory requirements while protecting commercial momentum.",
  },
];

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-[#0b1220] text-white">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top,_rgba(45,212,191,0.16),_transparent_55%),radial-gradient(ellipse_at_bottom,_rgba(56,189,248,0.10),_transparent_50%)]"
      />

      <div className="relative mx-auto max-w-6xl px-6 pt-20 pb-16 sm:pt-24 lg:pt-28 lg:pb-20">
        <div className="mx-auto max-w-3xl text-center">
          <p className="mb-5 text-xs font-semibold tracking-[0.28em] text-teal-300 uppercase">
            Cleared derivatives advisory
          </p>
          <h1 className="text-4xl leading-tight font-semibold tracking-tight text-balance sm:text-5xl lg:text-6xl">
            Clarity for decisions that shape clearing.
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-slate-300 text-pretty">
            Sure Clear is an independent specialist advisory firm focused
            exclusively on the cleared derivatives industry. We help banks,
            brokers, exchanges, CCPs, fintechs and new market participants make
            better decisions across clearing strategy, transformation,
            regulatory change and operations.
          </p>
          <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
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

        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:mt-16 lg:grid-cols-3">
          {services.map((service) => (
            <article
              key={service.title}
              className="rounded-2xl border border-white/10 bg-white/5 p-6 text-left shadow-lg shadow-teal-950/20 backdrop-blur transition hover:border-teal-300/30 hover:bg-white/[0.07]"
            >
              <h2 className="text-lg font-semibold text-white">
                {service.title}
              </h2>
              <p className="mt-3 text-sm leading-relaxed text-slate-300">
                {service.description}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
