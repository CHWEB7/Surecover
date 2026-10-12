const featureCard = {
  title: "Decide with clarity",
  eyebrow: "Clearing strategy",
  href: "#clearing-strategy",
  image: "/regulation-network.jpg",
  gradient: "linear-gradient(145deg, #0b1220 0%, #1f4037 48%, #2d6a4f 100%)",
} as const;

export function ServicesHero() {
  return (
    <section className="services-hero-wash relative w-full overflow-hidden">
      {/* Soft brand wash from the top corners only — fades cleanly into white */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0"
        style={{
          backgroundImage: [
            "radial-gradient(ellipse 70% 85% at 0% 0%, rgba(31,64,55,0.10) 0%, rgba(31,64,55,0) 70%)",
            "radial-gradient(ellipse 75% 90% at 100% 0%, rgba(153,242,200,0.18) 0%, rgba(153,242,200,0) 68%)",
            "radial-gradient(ellipse 55% 60% at 55% 0%, rgba(45,106,79,0.06) 0%, rgba(45,106,79,0) 65%)",
            "linear-gradient(180deg, rgba(255,255,255,0) 0%, rgba(255,255,255,0.55) 58%, #ffffff 100%)",
          ].join(", "),
        }}
      />
      <div className="relative mx-auto max-w-7xl px-6 py-14 sm:px-10 sm:py-16 lg:px-16 lg:py-20 xl:px-24">
        <div className="grid items-center gap-10 lg:grid-cols-[minmax(0,1.35fr)_minmax(0,0.85fr)] lg:gap-12 xl:grid-cols-[minmax(0,1.45fr)_minmax(0,0.8fr)] xl:gap-14">
          <div className="max-w-2xl xl:max-w-3xl">
            <h1 className="text-5xl leading-[1.05] font-semibold tracking-tight text-[#0b1220] sm:text-6xl lg:text-7xl">
              SureClear Services
            </h1>
            <p className="mt-4 max-w-2xl text-lg leading-relaxed text-stone-600 sm:text-xl">
              Explore specialist clearing journeys across strategy, change,
              leadership and operations — grounded in how markets actually work.
            </p>
            <div className="mt-8 flex flex-wrap items-center gap-4 sm:gap-5">
              <a
                href="/contact"
                className="inline-flex rounded-lg bg-[#0b1220] px-5 py-3 text-sm font-semibold text-white transition hover:bg-[#14201a]"
              >
                Talk to us
              </a>
              <a
                href="#core-services"
                className="group inline-flex items-center gap-1 text-sm font-semibold text-[#0b1220] transition hover:text-[#2d6a4f]"
              >
                Explore our services
                <span
                  aria-hidden="true"
                  className="transition group-hover:translate-x-0.5"
                >
                  ›
                </span>
              </a>
            </div>
          </div>

          <a
            href={featureCard.href}
            className="services-feature-card group relative isolate mx-auto flex min-h-[16rem] w-full max-w-[28rem] overflow-hidden rounded-tl-2xl rounded-tr-2xl rounded-bl-2xl rounded-br-[3rem] text-white shadow-[0_18px_50px_rgba(11,18,32,0.16)] sm:min-h-[18rem] lg:mx-0 lg:ml-auto lg:min-h-[19rem] lg:max-w-[26rem] xl:min-h-[20rem] xl:max-w-[28rem]"
            style={{ backgroundImage: featureCard.gradient }}
          >
            <div
              aria-hidden
              className="pointer-events-none absolute inset-0 opacity-30 mix-blend-soft-light transition duration-500 group-hover:opacity-45"
              style={{
                backgroundImage: `url(${featureCard.image})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
            />
            <div
              aria-hidden
              className="pointer-events-none absolute inset-0 opacity-[0.16]"
              style={{
                backgroundImage:
                  "radial-gradient(circle at 20% 20%, rgba(153,242,200,0.35), transparent 42%), radial-gradient(circle at 80% 70%, rgba(255,255,255,0.16), transparent 40%)",
              }}
            />

            <svg
              aria-hidden
              className="services-feature-lines pointer-events-none absolute inset-0 h-full w-full"
              viewBox="0 0 600 360"
              fill="none"
              preserveAspectRatio="xMidYMid slice"
            >
              <g className="services-feature-lines-drift">
                <path
                  className="services-feature-line services-feature-line-a"
                  d="M20 70h100l50 86H70L20 70zm130 30h120l60 104H210l-60-104zm200-25h110l55 95H405l-55-95z"
                  stroke="rgba(255,255,255,0.45)"
                  strokeWidth="1.35"
                />
                <path
                  className="services-feature-line services-feature-line-b"
                  d="M60 200h130l65 112H125L60 200zm180 20h140l70 120H310l-70-120zm210-40h100l50 86H500l-50-86z"
                  stroke="rgba(153,242,200,0.55)"
                  strokeWidth="1.35"
                />
                <path
                  className="services-feature-line services-feature-line-c"
                  d="M-10 140h90l45 78H35L-10 140zm420 90h120l60 104H480l-60-104zM250 10h90l45 78H295L250 10z"
                  stroke="rgba(255,255,255,0.32)"
                  strokeWidth="1.2"
                />
                <path
                  className="services-feature-line services-feature-line-d"
                  d="M150 250h90l45 78H195l-45-78zm280 40h80l40 69H360l-40-69z"
                  stroke="rgba(153,242,200,0.4)"
                  strokeWidth="1.2"
                />
              </g>
            </svg>

            <div className="relative z-10 flex w-full flex-col justify-start p-7 sm:p-8 lg:p-9">
              <p className="text-sm font-medium tracking-wide text-white/70">
                {featureCard.eyebrow}
              </p>
              <h2 className="mt-3 max-w-[12ch] text-3xl leading-[1.08] font-semibold tracking-tight text-white sm:text-4xl lg:text-[2.75rem]">
                {featureCard.title}
              </h2>
            </div>
          </a>
        </div>
      </div>
    </section>
  );
}
