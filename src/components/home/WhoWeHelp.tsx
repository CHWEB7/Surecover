const audiences = [
  {
    title: "Banks",
    description:
      "Navigate clearing membership, capital, client clearing propositions and operating model choices.",
  },
  {
    title: "Brokers",
    description:
      "Shape clearing access, margin efficiency and service models that win and retain sophisticated clients.",
  },
  {
    title: "Exchanges",
    description:
      "Align clearing arrangements, product launches and market structure with commercial goals.",
  },
  {
    title: "CCPs",
    description:
      "Support risk, membership, operations and change agendas that keep markets resilient and competitive.",
  },
  {
    title: "Fintechs",
    description:
      "Bridge product ambition with clearing realities — connectivity, risk, regulation and go-to-market.",
  },
  {
    title: "New market participants",
    description:
      "Enter cleared markets with a clear path through onboarding, membership and operating readiness.",
  },
];

export function WhoWeHelp() {
  return (
    <section id="clients" className="scroll-mt-24 bg-[#f5f4ef] py-20 lg:py-28">
      <div className="mx-auto max-w-6xl px-6">
        <div className="max-w-2xl">
          <p className="text-xs font-semibold tracking-[0.28em] text-[#2d6a4f] uppercase">
            Who we help
          </p>
          <h2 className="mt-4 text-3xl font-semibold tracking-tight text-[#1f4037] sm:text-4xl">
            Built for the institutions that run clearing
          </h2>
          <p className="mt-4 text-lg text-stone-600">
            From incumbents to new entrants, we advise organisations that need
            specialist judgement — not generic frameworks.
          </p>
        </div>

        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {audiences.map((audience) => (
            <article
              key={audience.title}
              className="rounded-2xl border border-[#e7e5df] bg-white/70 p-6"
            >
              <h3 className="text-lg font-semibold text-[#1f4037]">
                {audience.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-stone-600">
                {audience.description}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
