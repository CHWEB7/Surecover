import type { ReactNode } from "react";

type ServiceCard = {
  title: string;
  description: string;
  tags: readonly string[];
  icon: ReactNode;
};

const iconClass = "h-8 w-8";

const StrategyIcon = (
  <svg viewBox="0 0 24 24" fill="none" className={iconClass} aria-hidden="true">
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
);

const TransformationIcon = (
  <svg viewBox="0 0 24 24" fill="none" className={iconClass} aria-hidden="true">
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
);

const LeadershipIcon = (
  <svg viewBox="0 0 24 24" fill="none" className={iconClass} aria-hidden="true">
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
);

const OperationsIcon = (
  <svg viewBox="0 0 24 24" fill="none" className={iconClass} aria-hidden="true">
    <circle cx="12" cy="12" r="3" stroke="currentColor" strokeWidth="1.75" />
    <path
      d="M12 3v2.5M12 18.5V21M4.9 6.5l1.8 1.8M17.3 15.7l1.8 1.8M3 12h2.5M18.5 12H21M4.9 17.5l1.8-1.8M17.3 8.3l1.8-1.8"
      stroke="currentColor"
      strokeWidth="1.75"
      strokeLinecap="round"
    />
  </svg>
);

const services: ServiceCard[] = [
  {
    title: "Clearing Strategy",
    description:
      "Help organisations understand and respond to changes in clearing and market infrastructure — membership, product coverage and competitive positioning grounded in how markets actually work.",
    tags: ["Membership", "Product coverage", "Market structure", "Positioning"],
    icon: StrategyIcon,
  },
  {
    title: "Transformation & Change",
    description:
      "Turn a clearing decision into a workable operating model, roadmap and delivery plan — with outcomes that can be owned by the teams who run the business day to day.",
    tags: ["Operating model", "Roadmaps", "Vendor assessment", "Delivery"],
    icon: TransformationIcon,
  },
  {
    title: "Fractional Leadership",
    description:
      "Provide experienced clearing leadership without the commitment of a permanent senior hire — senior judgement when programmes, platforms or teams need it most.",
    tags: ["Interim leadership", "Programmes", "Stakeholders", "Decisions"],
    icon: LeadershipIcon,
  },
  {
    title: "Operations & Resilience",
    description:
      "Improve resilience, efficiency, controls and governance so clearing operations stay robust as volumes, products and regulatory expectations change.",
    tags: ["Controls", "Resilience", "Efficiency", "Governance"],
    icon: OperationsIcon,
  },
];

export function ServicesOverview() {
  return (
    <section className="w-full bg-[#0b1220] py-16 text-white lg:py-24">
      <div className="mx-auto max-w-7xl px-6 sm:px-10 lg:px-16 xl:px-24">
        <div className="max-w-2xl">
          <div
            className="mb-6 h-[3px] w-14 rounded-full bg-[#52b788]"
            aria-hidden="true"
          />
          <h2 className="text-3xl font-semibold tracking-tight text-white sm:text-4xl lg:text-[2.75rem]">
            Four core services
          </h2>
          <p className="mt-4 text-base leading-relaxed text-white/65 sm:text-lg">
            An overview of how SureClear supports clearing decisions across
            strategy, change, leadership and day-to-day operations.
          </p>
        </div>

        <div className="mt-12 grid gap-4 sm:grid-cols-2 xl:grid-cols-4 xl:gap-5">
          {services.map((service) => (
            <article
              key={service.title}
              className="flex h-full flex-col rounded-2xl bg-[#14201a] p-6 sm:p-7"
            >
              <div className="text-[#99f2c8]">{service.icon}</div>
              <h3 className="mt-5 text-xl font-semibold tracking-tight text-white sm:text-[1.35rem]">
                {service.title}
              </h3>
              <p className="mt-3 flex-1 text-sm leading-relaxed text-white/70 sm:text-[0.95rem]">
                {service.description}
              </p>
              <ul className="mt-6 flex flex-wrap gap-2">
                {service.tags.map((tag) => (
                  <li
                    key={tag}
                    className="rounded-full border border-white/20 px-2.5 py-1 text-xs text-white/70"
                  >
                    {tag}
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
