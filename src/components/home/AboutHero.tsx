import { PageDirectory } from "@/components/home/PageDirectory";

const featureCard = {
  title: "Built from clearing practice",
  eyebrow: "Our story",
  href: "#our-story",
  image: "/transformation-fibers.jpg",
  gradient: "linear-gradient(145deg, #0b1220 0%, #1f4037 48%, #2d6a4f 100%)",
} as const;

export function AboutHero() {
  return (
    <section className="services-hero-wash relative w-full overflow-hidden">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0"
        style={{
          backgroundImage: [
            "radial-gradient(ellipse 70% 85% at 0% 0%, rgba(31,64,55,0.12) 0%, rgba(31,64,55,0) 70%)",
            "radial-gradient(ellipse 75% 90% at 100% 0%, rgba(45,106,79,0.11) 0%, rgba(45,106,79,0) 68%)",
            "radial-gradient(ellipse 55% 60% at 50% 0%, rgba(31,64,55,0.06) 0%, rgba(31,64,55,0) 65%)",
            "linear-gradient(180deg, rgba(255,255,255,0) 0%, rgba(255,255,255,0.55) 58%, #ffffff 100%)",
          ].join(", "),
        }}
      />
      <div className="relative mx-auto max-w-7xl px-6 pt-5 pb-14 sm:px-10 sm:pt-6 sm:pb-16 lg:px-16 lg:pt-7 lg:pb-20 xl:px-24">
        <PageDirectory
          className="mb-8 sm:mb-10"
          items={[
            { label: "Home", href: "/home" },
            { label: "About" },
          ]}
        />
        <div className="grid items-center gap-10 lg:grid-cols-[minmax(0,1.35fr)_minmax(0,0.85fr)] lg:gap-12 xl:grid-cols-[minmax(0,1.45fr)_minmax(0,0.8fr)] xl:gap-14">
          <div className="max-w-2xl xl:max-w-3xl">
            <h1 className="text-5xl leading-[1.05] font-semibold tracking-tight text-[#0b1220] sm:text-6xl lg:text-7xl">
              About SureClear
            </h1>
            <p className="mt-4 max-w-2xl text-lg leading-relaxed text-stone-600 sm:text-xl">
              Independent specialist advice for the cleared derivatives industry
              — built from real operating experience, not generic consulting
              playbooks.
            </p>
            <div className="mt-8 flex flex-wrap items-center gap-4 sm:gap-5">
              <a
                href="/contact"
                className="inline-flex rounded-lg bg-[#0b1220] px-5 py-3 text-sm font-semibold text-white transition hover:bg-[#14201a]"
              >
                Talk to us
              </a>
              <a
                href="#meet-the-team"
                className="group inline-flex items-center gap-1 text-sm font-semibold text-[#0b1220] transition hover:text-[#2d6a4f]"
              >
                Meet the team
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
                  d="M60 200h130l65 112H125L60 200zm180 20h140l70 120H310l-70-120z"
                  stroke="rgba(153,242,200,0.55)"
                  strokeWidth="1.35"
                />
              </g>
            </svg>
            <div className="relative z-10 flex w-full flex-col justify-start p-7 sm:p-8 lg:p-9">
              <p className="text-sm font-medium tracking-wide text-white/70">
                {featureCard.eyebrow}
              </p>
              <h2 className="mt-3 max-w-[14ch] text-3xl leading-[1.08] font-semibold tracking-tight text-white sm:text-4xl lg:text-[2.75rem]">
                {featureCard.title}
              </h2>
            </div>
          </a>
        </div>
      </div>
    </section>
  );
}
