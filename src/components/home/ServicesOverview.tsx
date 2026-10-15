"use client";

import { useEffect, useState, type ReactNode } from "react";

type ServiceDetail = {
  id: string;
  title: string;
  shortDescription: string;
  subtitle: string;
  intro: string;
  includes: string[];
  icon: ReactNode;
};

function CheckIcon() {
  return (
    <svg
      viewBox="0 0 20 20"
      className="mt-0.5 h-5 w-5 shrink-0 text-[#2d6a4f]"
      fill="none"
      aria-hidden="true"
    >
      <circle cx="10" cy="10" r="9" stroke="currentColor" strokeWidth="1.5" />
      <path
        d="M6 10.2l2.4 2.3L14 7.5"
        stroke="currentColor"
        strokeWidth="1.75"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

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

const services: ServiceDetail[] = [
  {
    id: "clearing-strategy",
    title: "Clearing Strategy",
    shortDescription:
      "Help organisations understand and respond to changes in clearing and market infrastructure — membership, product coverage and competitive positioning grounded in how markets actually work.",
    subtitle: "Know what to do next.",
    intro:
      "We help organisations make clear strategic decisions across clearing access, CCP connectivity, exchange membership, client clearing propositions, product coverage and market infrastructure.",
    includes: [
      "CCP connectivity and access models",
      "Exchange membership and onboarding",
      "Clearing operating models",
      "Market entry and product coverage",
      "New clearing mandates",
    ],
    icon: StrategyIcon,
  },
  {
    id: "transformation-change",
    title: "Transformation & Change",
    shortDescription:
      "Turn a clearing decision into a workable operating model, roadmap and delivery plan — with outcomes that can be owned by the teams who run the business day to day.",
    subtitle: "Turn decisions into capability.",
    intro:
      "We help translate clearing strategy into practical roadmaps, delivery plans, operating models and technology change that can work in the real world.",
    includes: [
      "Product and platform transformation",
      "Capability mapping and roadmaps",
      "Vendor assessment and RFP support",
      "Regulatory change",
      "Programme structure, delivery support and governance",
    ],
    icon: TransformationIcon,
  },
  {
    id: "operations-resilience",
    title: "Operations & Resilience",
    shortDescription:
      "Improve resilience, efficiency, controls and governance so clearing operations stay robust as volumes, products and regulatory expectations change.",
    subtitle: "Make clearing work better.",
    intro:
      "We support clearing operations that need to become more resilient, efficient, controlled or scalable.",
    includes: [
      "Operational risk and control reviews",
      "Procedures, controls and SLA frameworks",
      "Process optimisation and automation",
      "Target operating models",
      "Outsourcing, offshoring and governance",
    ],
    icon: OperationsIcon,
  },
  {
    id: "fractional-leadership",
    title: "Fractional Leadership",
    shortDescription:
      "Provide experienced clearing leadership without the commitment of a permanent senior hire — senior judgement when programmes, platforms or teams need it most.",
    subtitle: "Senior experience when it matters.",
    intro:
      "We provide experienced clearing leadership without the commitment of a permanent senior hire, supporting organisations through change, recovery, governance or capability build.",
    includes: [
      "Fractional COO support",
      "Operations leadership",
      "Change and transformation leadership",
      "Programme recovery",
      "Steering committee preparation and executive reporting",
    ],
    icon: LeadershipIcon,
  },
];

export function ServicesOverview() {
  const [activeId, setActiveId] = useState(services[0].id);

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

  useEffect(() => {
    const syncActiveFromScroll = () => {
      // Activate the last section whose top has crossed under the sticky header band.
      const activationLine = 160;
      let current = services[0].id;
      for (const service of services) {
        const el = document.getElementById(service.id);
        if (!el) continue;
        if (el.getBoundingClientRect().top <= activationLine) {
          current = service.id;
        }
      }
      setActiveId((prev) => (prev === current ? prev : current));
    };

    syncActiveFromScroll();
    window.addEventListener("scroll", syncActiveFromScroll, { passive: true });
    window.addEventListener("resize", syncActiveFromScroll);
    return () => {
      window.removeEventListener("scroll", syncActiveFromScroll);
      window.removeEventListener("resize", syncActiveFromScroll);
    };
  }, []);

  const selectService = (id: string, fromOverview = false) => {
    setActiveId(id);
    window.history.replaceState(null, "", `#${id}`);
    document.getElementById(id)?.scrollIntoView({
      behavior: "smooth",
      block: fromOverview ? "start" : "start",
    });
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
            <div className="space-y-16 sm:space-y-20 lg:space-y-24">
              {services.map((service, index) => (
                <article
                  key={service.id}
                  id={service.id}
                  className="scroll-mt-28"
                >
                  <div
                    aria-hidden
                    className="h-1 w-14 rounded-full bg-[linear-gradient(90deg,#1f4037_0%,#2d6a4f_45%,#99f2c8_100%)]"
                  />
                  <h3 className="mt-5 text-3xl font-semibold tracking-tight text-[#0b1220] sm:text-4xl lg:text-[2.75rem]">
                    {service.title}
                  </h3>
                  <p className="mt-3 text-xl font-semibold tracking-tight text-[#0b1220] sm:text-2xl">
                    {service.subtitle}
                  </p>
                  <p className="mt-4 max-w-3xl text-base leading-relaxed text-stone-600 sm:text-lg">
                    {service.intro}
                  </p>

                  <div className="mt-8 rounded-lg bg-[#eef3ef] px-6 py-7 sm:mt-10 sm:px-8 sm:py-8">
                    <h4 className="text-xl font-semibold tracking-tight text-[#0b1220] sm:text-2xl">
                      Includes
                    </h4>
                    <ul className="mt-5 grid gap-x-8 gap-y-3 sm:grid-cols-2">
                      {service.includes.map((item) => (
                        <li
                          key={item}
                          className="flex items-start gap-3 text-sm font-semibold leading-snug text-[#0b1220] sm:text-[0.95rem]"
                        >
                          <CheckIcon />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {index < services.length - 1 ? (
                    <div
                      aria-hidden
                      className="mt-16 border-b border-[#e7e5df] sm:mt-20 lg:mt-24"
                    />
                  ) : null}
                </article>
              ))}
            </div>

            <aside className="lg:sticky lg:top-28 lg:self-start">
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
                  const isActive = service.id === activeId;
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
