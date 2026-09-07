import type { ReactNode } from "react";

const ICON = "#0b1220";

type Audience = {
  title: string;
  description: string;
  href: string;
  mark: ReactNode;
};

const audiences: Audience[] = [
  {
    title: "Banks",
    description:
      "Navigate clearing membership, capital, client clearing propositions and operating model choices.",
    href: "#contact",
    mark: (
      <path
        d="M4 18V8.5L12 4l8 4.5V18M4 18h16M7 18v-5h3v5M14 18v-5h3v5M9.5 9.5h5"
        stroke={ICON}
        strokeWidth="1.75"
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="none"
      />
    ),
  },
  {
    title: "Brokers",
    description:
      "Shape clearing access, margin efficiency and service models that win and retain sophisticated clients.",
    href: "#contact",
    mark: (
      <path
        d="M5 16.5 9.5 8l3 5.5L16 7.5 19 16.5M4 19h16"
        stroke={ICON}
        strokeWidth="1.75"
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="none"
      />
    ),
  },
  {
    title: "Exchanges",
    description:
      "Align clearing arrangements, product launches and market structure with commercial goals.",
    href: "#contact",
    mark: (
      <>
        <path
          d="M7 8.5 12 4l5 4.5M7 15.5 12 20l5-4.5"
          stroke={ICON}
          strokeWidth="1.75"
          strokeLinecap="round"
          strokeLinejoin="round"
          fill="none"
        />
        <path
          d="M8.5 12h7"
          stroke={ICON}
          strokeWidth="1.75"
          strokeLinecap="round"
        />
      </>
    ),
  },
  {
    title: "CCPs",
    description:
      "Support risk, membership, operations and change agendas that keep markets resilient and competitive.",
    href: "#contact",
    mark: (
      <>
        <circle
          cx="12"
          cy="12"
          r="7.25"
          stroke={ICON}
          strokeWidth="1.75"
          fill="none"
        />
        <circle cx="12" cy="12" r="2.75" fill={ICON} />
      </>
    ),
  },
  {
    title: "Fintechs",
    description:
      "Bridge product ambition with clearing realities — connectivity, risk, regulation and go-to-market.",
    href: "#contact",
    mark: (
      <>
        <rect
          x="5.5"
          y="5.5"
          width="13"
          height="13"
          rx="2.5"
          stroke={ICON}
          strokeWidth="1.75"
          fill="none"
        />
        <path
          d="M9 12h2.2l1.3-3.2L14.8 15 16 12h-1"
          stroke={ICON}
          strokeWidth="1.75"
          strokeLinecap="round"
          strokeLinejoin="round"
          fill="none"
        />
      </>
    ),
  },
  {
    title: "New market participants",
    description:
      "Enter cleared markets with a clear path through onboarding, membership and operating readiness.",
    href: "#contact",
    mark: (
      <>
        <circle
          cx="12"
          cy="12"
          r="7.25"
          stroke={ICON}
          strokeWidth="1.75"
          fill="none"
        />
        <path
          d="M12 8.2v7.6M8.2 12h7.6"
          stroke={ICON}
          strokeWidth="1.75"
          strokeLinecap="round"
        />
      </>
    ),
  },
];

export function WhoWeHelp() {
  return (
    <section id="clients" className="scroll-mt-24 bg-[#f5f4ef] py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <div className="max-w-3xl">
          <h2 className="text-4xl leading-[1.08] font-semibold tracking-tight text-[#0b1220] sm:text-5xl lg:text-6xl">
            We help organisations make complex clearing decisions clearer.
          </h2>
          <p className="mt-5 max-w-2xl text-lg text-stone-600 sm:text-xl">
            From incumbents to new entrants, we advise organisations that need
            specialist judgement — not generic frameworks.
          </p>
          <a
            href="/home/services"
            className="mt-8 inline-flex rounded-full border border-[#0b1220] px-6 py-3 text-sm font-semibold text-[#0b1220] transition hover:bg-[#0b1220] hover:text-white"
          >
            View our services
          </a>
        </div>

        <ul className="mt-14 grid list-none gap-x-10 gap-y-14 sm:grid-cols-2 lg:mt-16 lg:grid-cols-3 lg:gap-x-16 lg:gap-y-16">
          {audiences.map((audience) => (
            <li key={audience.title} className="max-w-sm">
              <svg
                viewBox="0 0 24 24"
                className="h-11 w-11 sm:h-12 sm:w-12"
                aria-hidden="true"
              >
                {audience.mark}
              </svg>

              <a
                href={audience.href}
                className="group mt-5 inline-flex items-center gap-1.5 text-lg font-semibold tracking-tight text-[#0b1220] transition hover:text-[#2d6a4f]"
              >
                {audience.title}
                <span
                  aria-hidden="true"
                  className="translate-y-px text-base font-normal text-[#0b1220] transition group-hover:translate-x-0.5 group-hover:text-[#2d6a4f]"
                >
                  ›
                </span>
              </a>

              <p className="mt-3 text-base leading-relaxed text-stone-600">
                {audience.description}
              </p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
