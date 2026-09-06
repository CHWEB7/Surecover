const areas = [
  {
    title: "Clearing strategy",
    description:
      "Define clearing models, membership choices, product coverage and competitive positioning with decisions grounded in how markets actually operate.",
  },
  {
    title: "Transformation",
    description:
      "Design and deliver change programmes across technology, target operating models and client propositions — with outcomes that stick.",
  },
  {
    title: "Regulatory change",
    description:
      "Translate regulatory requirements into practical programmes that protect the franchise while preserving commercial momentum.",
  },
  {
    title: "Operations",
    description:
      "Strengthen day-to-day clearing operations, controls and resilience so scale, risk and service quality stay in balance.",
  },
];

export function FocusAreas() {
  return (
    <section id="focus" className="scroll-mt-24 bg-[#f7f8fa] py-20 lg:py-28">
      <div className="mx-auto max-w-6xl px-6">
        <div className="max-w-2xl">
          <p className="text-xs font-semibold tracking-[0.28em] text-teal-700 uppercase">
            Where we focus
          </p>
          <h2 className="mt-4 text-3xl font-semibold tracking-tight text-[#0b1220] sm:text-4xl">
            Better decisions across the clearing lifecycle
          </h2>
          <p className="mt-4 text-lg text-slate-600">
            We work where clearing strategy, change and operations meet —
            helping clients move with clarity in a complex market.
          </p>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-2">
          {areas.map((area) => (
            <article
              key={area.title}
              className="rounded-2xl border border-slate-200 bg-white p-8 shadow-sm transition hover:border-teal-200 hover:shadow-md"
            >
              <h3 className="text-xl font-semibold text-[#0b1220]">
                {area.title}
              </h3>
              <p className="mt-3 leading-relaxed text-slate-600">
                {area.description}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
