"use client";

import { useEffect, useState, type ReactNode } from "react";

type ServiceOffering = {
  title: string;
  body?: string;
  includes?: string[];
  /** When false, hide the contact link under the card body. */
  showLink?: boolean;
  /** Match the docked active menu highlight (`#eef3ef`). */
  tone?: "mint" | "cream";
};

type ServiceDetail = {
  id: string;
  title: string;
  shortDescription: string;
  subtitle: string;
  intro: string;
  offerings: ServiceOffering[];
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

const services: ServiceDetail[] = [
  {
    id: "clearing-strategy",
    title: "Clearing Strategy",
    shortDescription:
      "Help organisations understand and respond to changes in clearing and market infrastructure — membership, product coverage and competitive positioning grounded in how markets actually work.",
    subtitle: "Know what to do next.",
    intro:
      "We help organisations make clear strategic decisions across clearing access, CCP connectivity, exchange membership, client clearing propositions, product coverage and market infrastructure.",
    offerings: [
      {
        title: "Includes",
        body: "CCP connectivity and access models, exchange membership and onboarding, clearing operating models, market entry and product coverage, and new clearing mandates.",
        showLink: false,
        tone: "mint",
      },
    ],
    icon: StrategyIcon,
  },
  {
    id: "transformation-change",
    title: "Transformation & Change",
    shortDescription:
      "Turn a clearing decision into a workable operating model, roadmap and delivery plan — with outcomes that can be owned by the teams who run the business day to day.",
    subtitle: "From clearing decision to delivery that sticks.",
    intro:
      "Once the direction is set, the hard part begins: target operating models, sequencing, vendor choices, controls and the practical work of getting teams aligned.",
    offerings: [
      {
        title: "Target operating models",
        body: "Design practical operating models and delivery roadmaps that turn a clearing decision into something the business can run.",
      },
      {
        title: "Technology & control alignment",
        body: "Align technology, process and control changes to clearing outcomes — not generic programme theatre.",
      },
      {
        title: "Delivery that sticks",
        body: "Unblock decisions and keep programmes grounded in day-to-day operations so change lands with clear ownership.",
      },
    ],
    icon: TransformationIcon,
  },
  {
    id: "fractional-leadership",
    title: "Fractional Leadership",
    shortDescription:
      "Provide experienced clearing leadership without the commitment of a permanent senior hire — senior judgement when programmes, platforms or teams need it most.",
    subtitle: "Senior clearing judgement when you need it most.",
    intro:
      "Some moments need experienced clearing leadership quickly — a platform migration, a membership expansion, a stretched team, or a programme that has lost its way.",
    offerings: [
      {
        title: "Embedded clearing leadership",
        body: "Bring experienced clearing leadership into critical programmes and transitions without locking in a permanent hire too early.",
      },
      {
        title: "Executive decision support",
        body: "Support boards and executives with clear, practical recommendations when the decision window is tight.",
      },
      {
        title: "Capability that remains",
        body: "Build internal capability so progress continues after the engagement ends and the team can own what comes next.",
      },
    ],
    icon: LeadershipIcon,
  },
  {
    id: "operations-resilience",
    title: "Operations & Resilience",
    shortDescription:
      "Improve resilience, efficiency, controls and governance so clearing operations stay robust as volumes, products and regulatory expectations change.",
    subtitle: "Operations built for resilience under pressure.",
    intro:
      "Clearing operations have to absorb volume spikes, product change, control expectations and regulatory scrutiny without losing reliability.",
    offerings: [
      {
        title: "Controls & governance",
        body: "Strengthen controls, governance and operating discipline so clearing stays robust when pressure rises.",
      },
      {
        title: "Resilience & efficiency",
        body: "Improve resilience and efficiency across clearing workflows without adding unnecessary complexity.",
      },
      {
        title: "Ready for change",
        body: "Prepare operations for volume, product and regulatory change with a practical operating backbone.",
      },
    ],
    icon: OperationsIcon,
  },
];

export function ServicesOverview() {
  const [activeId, setActiveId] = useState(services[0].id);
  const active =
    services.find((service) => service.id === activeId) ?? services[0];

  useEffect(() => {
    const applyHash = () => {
      const hash = window.location.hash.replace("#", "");
      if (services.some((service) => service.id === hash)) {
        setActiveId(hash);
      }
    };
    applyHash();
    window.addEventListener("hashchange", applyHash);
    return () => window.removeEventListener("hashchange", applyHash);
  }, []);

  const selectService = (id: string, scrollToDetail = false) => {
    setActiveId(id);
    window.history.replaceState(null, "", `#${id}`);
    if (scrollToDetail) {
      document
        .getElementById("service-detail")
        ?.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <section
      id="core-services"
      className="scroll-mt-24 w-full bg-white pb-20 lg:pb-28"
    >
      <div className="mx-auto max-w-7xl px-6 sm:px-10 lg:px-16 xl:px-24">
        <div className="max-w-3xl pt-4 lg:pt-6">
          <p className="text-sm font-semibold tracking-wide text-[#2d6a4f]">
            By service
          </p>
          <h2 className="mt-3 text-3xl font-semibold tracking-tight text-[#0b1220] sm:text-4xl lg:text-[2.75rem]">
            Specialist clearing support for every{" "}
            <span className="bg-[linear-gradient(135deg,#1f4037_0%,#2d6a4f_45%,#99f2c8_100%)] bg-clip-text text-transparent">
              critical decision
            </span>
          </h2>
        </div>

        <div className="mt-10 grid gap-3 sm:mt-12 sm:grid-cols-2 xl:grid-cols-4 xl:gap-4">
          {services.map((service) => (
            <button
              key={service.id}
              type="button"
              onClick={() => selectService(service.id, true)}
              className="services-area-card group flex h-full flex-col rounded-2xl border border-transparent bg-transparent p-5 text-left transition duration-300 ease-out hover:-translate-y-1 hover:border-[#ecece8] hover:bg-[#f3f3f0] sm:p-6 motion-reduce:transform-none motion-reduce:transition-none"
            >
              <div className="text-[#0b1220] transition duration-300 group-hover:text-[#2d6a4f]">
                {service.icon}
              </div>
              <h3 className="mt-5 text-xl font-semibold tracking-tight text-[#0b1220]">
                {service.title}
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-stone-600">
                {service.shortDescription}
              </p>
            </button>
          ))}
        </div>

        <div
          id="service-detail"
          className="mt-14 scroll-mt-28 border-t border-[#e7e5df] pt-12 lg:mt-20 lg:pt-16"
        >
          <div className="grid items-start gap-10 lg:grid-cols-[minmax(0,1fr)_17.5rem] lg:gap-14 xl:grid-cols-[minmax(0,1fr)_19rem] xl:gap-16">
            <div>
              <div
                aria-hidden
                className="h-1 w-14 rounded-full bg-[linear-gradient(90deg,#1f4037_0%,#2d6a4f_45%,#99f2c8_100%)]"
              />
              <h3
                id={active.id}
                className="mt-5 text-3xl font-semibold tracking-tight text-[#0b1220] sm:text-4xl lg:text-[2.75rem]"
              >
                {active.title}
              </h3>
              <p className="mt-3 text-xl font-semibold tracking-tight text-[#0b1220] sm:text-2xl">
                {active.subtitle}
              </p>
              <p className="mt-4 max-w-3xl text-base leading-relaxed text-stone-600 sm:text-lg">
                {active.intro}
              </p>

              <div className="mt-8 space-y-4 sm:mt-10 sm:space-y-5">
                {active.offerings.map((offering) => {
                  const isMint = offering.tone === "mint";
                  return (
                    <article
                      key={offering.title}
                      className={`rounded-lg px-6 py-7 sm:px-8 sm:py-8 ${
                        isMint ? "bg-[#eef3ef]" : "bg-[#f5f4ef]"
                      }`}
                    >
                      <h4 className="text-xl font-semibold tracking-tight text-[#0b1220] sm:text-2xl">
                        {offering.title}
                      </h4>
                      {offering.includes ? (
                        <ul className="mt-4 space-y-2.5">
                          {offering.includes.map((item) => (
                            <li
                              key={item}
                              className="flex items-start gap-2.5 text-base leading-relaxed text-stone-600"
                            >
                              <span
                                aria-hidden
                                className="mt-2 inline-block h-1.5 w-1.5 shrink-0 rounded-full bg-[#2d6a4f]"
                              />
                              <span>{item}</span>
                            </li>
                          ))}
                        </ul>
                      ) : (
                        <>
                          <p
                            className={
                              isMint
                                ? "mt-3 text-sm font-semibold leading-relaxed text-[#0b1220]"
                                : "mt-3 text-base leading-relaxed text-stone-600"
                            }
                          >
                            {offering.body}
                          </p>
                          {offering.showLink !== false ? (
                            <a
                              href="/contact"
                              className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-[#2d6a4f] transition hover:text-[#1f4037]"
                            >
                              <span
                                aria-hidden
                                className="inline-block h-1.5 w-1.5 rounded-full bg-[#2d6a4f]"
                              />
                              {offering.title}
                            </a>
                          ) : null}
                        </>
                      )}
                    </article>
                  );
                })}
              </div>
            </div>

            <aside className="lg:sticky lg:top-28">
              <a
                href="/contact"
                className="inline-flex w-full items-center justify-center rounded-lg bg-[#0b1220] px-5 py-3.5 text-sm font-semibold text-white transition hover:bg-[#14201a]"
              >
                Talk to us
              </a>

              <nav
                aria-label="Service areas"
                className="mt-6 flex flex-col gap-1"
              >
                {services.map((service) => {
                  const isActive = service.id === active.id;
                  return (
                    <button
                      key={`nav-${service.id}`}
                      type="button"
                      onClick={() => selectService(service.id)}
                      aria-current={isActive ? "true" : undefined}
                      className={`rounded-xl px-4 py-3 text-left text-sm font-semibold transition ${
                        isActive
                          ? "bg-[#eef3ef] text-[#0b1220]"
                          : "text-[#0b1220] hover:bg-[#f5f4ef]"
                      }`}
                    >
                      {service.title}
                    </button>
                  );
                })}
              </nav>
            </aside>
          </div>
        </div>
      </div>
    </section>
  );
}
