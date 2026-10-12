import type { ReactNode } from "react";

type ServiceCard = {
  id: string;
  title: string;
  description: string;
  icon: ReactNode;
};

const iconClass = "h-9 w-9";

const StrategyIcon = (
  <svg viewBox="0 0 24 24" fill="none" className={iconClass} aria-hidden="true">
    <path
      d="M12 3l8 4.5v9L12 21l-8-4.5v-9L12 3z"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinejoin="round"
    />
    <path
      d="M12 12l8-4.5M12 12v9M12 12L4 7.5"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

const TransformationIcon = (
  <svg viewBox="0 0 24 24" fill="none" className={iconClass} aria-hidden="true">
    <path
      d="M4 12a8 8 0 0 1 13.66-5.66M20 4v4h-4"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M20 12a8 8 0 0 1-13.66 5.66M4 20v-4h4"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

const LeadershipIcon = (
  <svg viewBox="0 0 24 24" fill="none" className={iconClass} aria-hidden="true">
    <path
      d="M12 3l8 3v5c0 5-3.5 8.5-8 10-4.5-1.5-8-5-8-10V6l8-3z"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinejoin="round"
    />
    <path
      d="M9 12l2 2 4-4"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

const OperationsIcon = (
  <svg viewBox="0 0 24 24" fill="none" className={iconClass} aria-hidden="true">
    <circle cx="12" cy="12" r="3" stroke="currentColor" strokeWidth="1.5" />
    <path
      d="M12 3v2.5M12 18.5V21M4.9 6.5l1.8 1.8M17.3 15.7l1.8 1.8M3 12h2.5M18.5 12H21M4.9 17.5l1.8-1.8M17.3 8.3l1.8-1.8"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
    />
  </svg>
);

const services: ServiceCard[] = [
  {
    id: "clearing-strategy",
    title: "Clearing Strategy",
    description:
      "Help organisations understand and respond to changes in clearing and market infrastructure — membership, product coverage and competitive positioning grounded in how markets actually work.",
    icon: StrategyIcon,
  },
  {
    id: "transformation-change",
    title: "Transformation & Change",
    description:
      "Turn a clearing decision into a workable operating model, roadmap and delivery plan — with outcomes that can be owned by the teams who run the business day to day.",
    icon: TransformationIcon,
  },
  {
    id: "fractional-leadership",
    title: "Fractional Leadership",
    description:
      "Provide experienced clearing leadership without the commitment of a permanent senior hire — senior judgement when programmes, platforms or teams need it most.",
    icon: LeadershipIcon,
  },
  {
    id: "operations-resilience",
    title: "Operations & Resilience",
    description:
      "Improve resilience, efficiency, controls and governance so clearing operations stay robust as volumes, products and regulatory expectations change.",
    icon: OperationsIcon,
  },
];

export function ServicesOverview() {
  return (
    <section
      id="core-services"
      className="scroll-mt-24 w-full bg-white pb-20 lg:pb-28"
    >
      <div className="mx-auto max-w-7xl px-6 sm:px-10 lg:px-16 xl:px-24">
        <div className="max-w-3xl border-t border-[#e7e5df] pt-12 lg:pt-16">
          <p className="text-sm font-semibold tracking-wide text-[#2d6a4f]">
            By service
          </p>
          <h2 className="mt-3 text-3xl font-semibold tracking-tight text-[#0b1220] sm:text-4xl lg:text-[2.75rem]">
            Four core service areas for complex clearing decisions
          </h2>
        </div>

        <div className="mt-10 grid gap-3 sm:mt-12 sm:grid-cols-2 xl:grid-cols-4 xl:gap-4">
          {services.map((service) => (
            <a
              key={service.id}
              id={service.id}
              href="/contact"
              className="services-area-card group flex h-full flex-col rounded-2xl border border-transparent bg-transparent p-5 transition duration-300 ease-out hover:-translate-y-1 hover:border-[#e7e5df] hover:bg-[#f5f4ef] hover:shadow-[0_16px_40px_rgba(11,18,32,0.08)] sm:p-6 motion-reduce:transform-none motion-reduce:transition-none"
            >
              <div className="text-[#0b1220] transition duration-300 group-hover:text-[#2d6a4f]">
                {service.icon}
              </div>
              <h3 className="mt-5 text-xl font-semibold tracking-tight text-[#0b1220] transition group-hover:text-[#1f4037]">
                {service.title}
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-stone-600 transition group-hover:text-stone-700">
                {service.description}
              </p>
              <span className="mt-5 inline-flex items-center gap-1 text-sm font-semibold text-[#0b1220] opacity-0 transition duration-300 group-hover:opacity-100">
                Talk to us
                <span
                  aria-hidden="true"
                  className="transition group-hover:translate-x-0.5"
                >
                  ›
                </span>
              </span>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
