import Image from "next/image";

const featureCards = [
  {
    title: "Decide with clarity",
    eyebrow: "Clearing strategy",
    href: "#clearing-strategy",
    image: "/regulation-network.jpg",
    gradient:
      "linear-gradient(145deg, #0b1220 0%, #1f4037 48%, #2d6a4f 100%)",
  },
  {
    title: "Deliver lasting change",
    eyebrow: "Transformation",
    href: "#transformation-change",
    image: "/transformation-fibers.jpg",
    gradient:
      "linear-gradient(155deg, #14201a 0%, #1f4037 42%, #52b788 100%)",
  },
] as const;

export function ServicesHero() {
  return (
    <section className="w-full bg-white">
      <div className="mx-auto max-w-7xl px-6 py-14 sm:px-10 sm:py-16 lg:px-16 lg:py-20 xl:px-24">
        <div className="max-w-2xl">
          <h1 className="text-5xl leading-[1.05] font-semibold tracking-tight text-[#0b1220] sm:text-6xl lg:text-7xl">
            SureClear Services
          </h1>
          <p className="mt-4 max-w-xl text-lg leading-relaxed text-stone-600 sm:text-xl">
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

        <div className="mt-12 grid gap-5 sm:mt-14 lg:mt-16 lg:grid-cols-2 lg:gap-6">
          {featureCards.map((card) => (
            <a
              key={card.title}
              href={card.href}
              className="services-feature-card group relative isolate flex min-h-[18rem] overflow-hidden rounded-tl-2xl rounded-tr-2xl rounded-bl-2xl rounded-br-[3.5rem] text-white shadow-[0_18px_50px_rgba(11,18,32,0.16)] sm:min-h-[20rem] lg:min-h-[22rem]"
              style={{ backgroundImage: card.gradient }}
            >
              <div
                aria-hidden
                className="pointer-events-none absolute inset-0 opacity-35 mix-blend-soft-light transition duration-500 group-hover:opacity-50"
                style={{
                  backgroundImage: `url(${card.image})`,
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                }}
              />
              <div
                aria-hidden
                className="pointer-events-none absolute inset-0 opacity-[0.18]"
                style={{
                  backgroundImage:
                    "radial-gradient(circle at 20% 20%, rgba(153,242,200,0.35), transparent 42%), radial-gradient(circle at 80% 70%, rgba(255,255,255,0.16), transparent 40%)",
                }}
              />
              <svg
                aria-hidden
                className="pointer-events-none absolute inset-0 h-full w-full opacity-25"
                viewBox="0 0 600 360"
                fill="none"
              >
                <path
                  d="M40 80h90l45 78H85L40 80zm140 40h110l55 95H235l-55-95zm210-20h100l50 86H400l-50-86zM80 220h120l60 104H140L80 220z"
                  stroke="rgba(255,255,255,0.55)"
                  strokeWidth="1.25"
                />
                <path
                  d="M320 200h140l70 120H390l-70-120z"
                  stroke="rgba(153,242,200,0.55)"
                  strokeWidth="1.25"
                />
              </svg>

              <div className="relative z-10 flex w-full flex-col justify-between p-7 sm:p-8 lg:p-9">
                <div>
                  <p className="text-sm font-medium tracking-wide text-white/70">
                    {card.eyebrow}
                  </p>
                  <h2 className="mt-3 max-w-[12ch] text-3xl leading-[1.08] font-semibold tracking-tight text-white sm:text-4xl lg:text-[2.6rem]">
                    {card.title}
                  </h2>
                </div>

                <div className="mt-10 flex items-end justify-between gap-4">
                  <div className="flex items-center gap-2.5">
                    <Image
                      src="/sureclear-logo-wordmark-light.png"
                      alt="SureClear"
                      width={140}
                      height={28}
                      className="h-6 w-auto opacity-95 sm:h-7"
                    />
                  </div>
                  <span
                    aria-hidden
                    className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-white/55 bg-white/10 text-lg text-white backdrop-blur-sm transition duration-300 group-hover:border-white group-hover:bg-white/20"
                  >
                    ›
                  </span>
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
