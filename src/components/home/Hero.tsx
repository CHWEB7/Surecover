const services = [
  {
    title: "Clearing strategy",
    description:
      "Membership models, product coverage and competitive positioning grounded in how clearing markets actually work.",
    icon: (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        className="h-10 w-10"
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
        className="h-10 w-10"
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
        className="h-10 w-10"
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
    <section className="bg-[#f5f4ef] px-3 pt-3 pb-24 sm:px-4 sm:pt-4 sm:pb-28 lg:px-5 lg:pt-5 lg:pb-32">
      <div className="relative mx-auto max-w-[92rem]">
        {/* Large gradient panel — nearly full bleed, thin off-white edge */}
        <div
          className="relative min-h-[70vh] overflow-hidden rounded-[1.75rem] px-6 pt-20 pb-36 text-white sm:rounded-[2rem] sm:px-10 sm:pt-24 sm:pb-40 lg:min-h-[75vh] lg:rounded-[2.5rem] lg:px-16 lg:pt-28 lg:pb-44"
          style={{
            backgroundImage:
              "linear-gradient(145deg, #1f4037 0%, #2d6a4f 42%, #99f2c8 100%)",
          }}
        >
          <div
            aria-hidden
            className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top_left,_rgba(255,255,255,0.12),_transparent_50%)]"
          />

          <div className="relative mx-auto max-w-5xl text-center lg:max-w-6xl">
            <h1 className="font-[family-name:var(--font-outfit)] text-5xl leading-[1.05] font-semibold tracking-tight text-balance sm:text-6xl lg:text-7xl xl:text-8xl">
              Clarity for decisions that shape clearing.
            </h1>
            <p className="mx-auto mt-7 max-w-3xl text-xl leading-snug font-medium text-white text-pretty sm:text-2xl lg:text-[1.75rem]">
              Sureclear is an independent cleared derivatives advisory.
            </p>
            <p className="mx-auto mt-4 max-w-4xl text-sm leading-relaxed text-white/80 text-pretty sm:max-w-5xl sm:text-base lg:max-w-6xl">
              We help banks, brokers, exchanges, CCPs, fintechs and new market
              participants
              <br className="hidden sm:block" />
              make better decisions across clearing strategy, transformation,
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
                className="hero-focus-pulse rounded-full border border-white/55 px-6 py-3 text-sm font-semibold text-white transition hover:border-white hover:bg-white/10"
              >
                Explore our focus
              </a>
            </div>
          </div>
        </div>

        {/* Service cards — half over the gradient panel, half on the page below */}
        <div className="relative z-10 mx-auto -mt-28 grid max-w-6xl gap-5 px-4 sm:-mt-32 sm:grid-cols-2 sm:px-6 lg:-mt-36 lg:grid-cols-3">
          {services.map((service) => (
            <article
              key={service.title}
              className="rounded-2xl border border-white/10 bg-[#0b1220] p-6 text-left shadow-2xl shadow-[#1f4037]/25 transition hover:-translate-y-0.5 hover:shadow-[#1f4037]/35"
            >
              <div className="mb-5 text-[#99f2c8]">{service.icon}</div>
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
