const services = [
  {
    title: "Clearing strategy",
    description:
      "Membership models, product coverage and competitive positioning grounded in how clearing markets actually work.",
    icon: (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        className="h-6 w-6"
        aria-hidden="true"
      >
        <path
          d="M12 3l8 4.5v9L12 21l-8-4.5v-9L12 3z"
          stroke="currentColor"
          strokeWidth="1.75"
          strokeLinejoin="round"
        />
        <path
          d="M12 12l8-4.5M12 12v9M12 12L4 7.5"
          stroke="currentColor"
          strokeWidth="1.75"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    ),
  },
  {
    title: "Transformation",
    description:
      "Technology, operating model and client proposition change — designed for delivery, not just diagnosis.",
    icon: (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        className="h-6 w-6"
        aria-hidden="true"
      >
        <path
          d="M4 12a8 8 0 0 1 13.66-5.66M20 4v4h-4"
          stroke="currentColor"
          strokeWidth="1.75"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M20 12a8 8 0 0 1-13.66 5.66M4 20v-4h4"
          stroke="currentColor"
          strokeWidth="1.75"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    ),
  },
  {
    title: "Regulatory change",
    description:
      "Practical programmes that meet regulatory requirements while protecting commercial momentum.",
    icon: (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        className="h-6 w-6"
        aria-hidden="true"
      >
        <path
          d="M12 3l8 3v5c0 5-3.5 8.5-8 10-4.5-1.5-8-5-8-10V6l8-3z"
          stroke="currentColor"
          strokeWidth="1.75"
          strokeLinejoin="round"
        />
        <path
          d="M9 12l2 2 4-4"
          stroke="currentColor"
          strokeWidth="1.75"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    ),
  },
];

export function Hero() {
  return (
    <section className="bg-[#f5f4ef] px-4 pt-6 pb-10 sm:px-6 sm:pt-8 lg:pb-14">
      <div
        className="relative mx-auto max-w-6xl overflow-hidden rounded-[2rem] px-6 py-16 text-white shadow-xl shadow-[#1f4037]/15 sm:px-10 sm:py-20 lg:rounded-[2.5rem] lg:px-16 lg:py-24"
        style={{
          backgroundImage:
            "linear-gradient(145deg, #1f4037 0%, #2d6a4f 42%, #99f2c8 100%)",
        }}
      >
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top_left,_rgba(255,255,255,0.12),_transparent_50%)]"
        />

        <div className="relative mx-auto max-w-3xl text-center">
          <p className="mb-5 text-xs font-semibold tracking-[0.28em] text-[#d8f3dc] uppercase">
            Cleared derivatives advisory
          </p>
          <h1 className="text-4xl leading-tight font-semibold tracking-tight text-balance sm:text-5xl lg:text-6xl">
            Clarity for decisions that shape clearing.
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-white/85 text-pretty">
            Sure Clear is an independent specialist advisory firm focused
            exclusively on the cleared derivatives industry. We help banks,
            brokers, exchanges, CCPs, fintechs and new market participants make
            better decisions across clearing strategy, transformation,
            regulatory change and operations.
          </p>
          <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
            <a
              href="#contact"
              className="rounded-full bg-white px-6 py-3 text-sm font-semibold text-[#1f4037] transition hover:bg-[#f5f4ef]"
            >
              Start a conversation
            </a>
            <a
              href="#focus"
              className="rounded-full border border-white/40 px-6 py-3 text-sm font-semibold text-white transition hover:border-white hover:bg-white/10"
            >
              Explore our focus
            </a>
          </div>
        </div>

        <div className="relative mt-14 grid gap-5 sm:grid-cols-2 lg:mt-16 lg:grid-cols-3">
          {services.map((service) => (
            <article
              key={service.title}
              className="rounded-2xl border border-white/35 bg-white/15 p-6 text-left shadow-lg shadow-[#1f4037]/10 backdrop-blur-sm transition hover:bg-white/25"
            >
              <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-xl bg-white/20 text-white">
                {service.icon}
              </div>
              <h2 className="text-lg font-semibold text-white">
                {service.title}
              </h2>
              <p className="mt-3 text-sm leading-relaxed text-white/80">
                {service.description}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
