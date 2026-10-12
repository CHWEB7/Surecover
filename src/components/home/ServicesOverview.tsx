"use client";

import { useEffect, useState, type ReactNode } from "react";

type ServiceDetail = {
  id: string;
  title: string;
  shortDescription: string;
  headline: string;
  paragraphs: string[];
  points: string[];
  highlight: {
    quote: string;
    label: string;
    detail: string;
  };
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
    headline: "Clearing strategy that stands up in real markets",
    paragraphs: [
      "Clearing decisions are rarely just product or membership choices. They sit at the intersection of commercial positioning, risk appetite, regulation and the operating model needed to run the business day to day.",
      "SureClear helps leadership teams frame the decision properly, pressure-test options against market reality, and leave with a path that can be owned internally — not a generic market map.",
    ],
    points: [
      "Clarify CCP membership, product coverage and competitive positioning choices",
      "Stress-test options against regulation, economics and operating constraints",
      "Translate strategy into a decision narrative stakeholders can act on",
    ],
    highlight: {
      quote:
        "SureClear helps teams cut through clearing complexity and arrive at a decision they can defend commercially, operationally and with regulators.",
      label: "How SureClear helps",
      detail: "Independent clearing strategy advice for banks, brokers, CCPs and new market participants.",
    },
    icon: StrategyIcon,
  },
  {
    id: "transformation-change",
    title: "Transformation & Change",
    shortDescription:
      "Turn a clearing decision into a workable operating model, roadmap and delivery plan — with outcomes that can be owned by the teams who run the business day to day.",
    headline: "From clearing decision to delivery that sticks",
    paragraphs: [
      "Once the direction is set, the hard part begins: target operating models, sequencing, vendor choices, controls and the practical work of getting teams aligned.",
      "SureClear stays close through design and delivery — keeping transformation tied to clearing realities rather than generic programme theatre.",
    ],
    points: [
      "Design target operating models and practical delivery roadmaps",
      "Align technology, process and control changes to clearing outcomes",
      "Unblock decisions and keep programmes grounded in day-to-day operations",
    ],
    highlight: {
      quote:
        "We help turn a clearing decision into an operating model and delivery plan the business can actually run — with clear ownership after the engagement ends.",
      label: "How SureClear helps",
      detail: "Hands-on transformation support from practitioners who have lived clearing change.",
    },
    icon: TransformationIcon,
  },
  {
    id: "fractional-leadership",
    title: "Fractional Leadership",
    shortDescription:
      "Provide experienced clearing leadership without the commitment of a permanent senior hire — senior judgement when programmes, platforms or teams need it most.",
    headline: "Senior clearing judgement when you need it most",
    paragraphs: [
      "Some moments need experienced clearing leadership quickly — a platform migration, a membership expansion, a stretched team, or a programme that has lost its way.",
      "SureClear provides fractional leadership that brings senior judgement without forcing a permanent hire before the organisation is ready.",
    ],
    points: [
      "Embed experienced clearing leadership for critical programmes and transitions",
      "Support boards and executives with clear, practical recommendations",
      "Build internal capability so progress continues after the engagement",
    ],
    highlight: {
      quote:
        "Fractional clearing leadership gives you senior judgement at the moments that matter — without locking in a permanent structure too early.",
      label: "How SureClear helps",
      detail: "Flexible leadership support shaped around the decision, programme or team in front of you.",
    },
    icon: LeadershipIcon,
  },
  {
    id: "operations-resilience",
    title: "Operations & Resilience",
    shortDescription:
      "Improve resilience, efficiency, controls and governance so clearing operations stay robust as volumes, products and regulatory expectations change.",
    headline: "Operations built for resilience under pressure",
    paragraphs: [
      "Clearing operations have to absorb volume spikes, product change, control expectations and regulatory scrutiny without losing reliability.",
      "SureClear helps strengthen the operating backbone — processes, controls, governance and resilience — so clearing stays robust as the business evolves.",
    ],
    points: [
      "Strengthen controls, governance and operating discipline",
      "Improve resilience and efficiency across clearing workflows",
      "Prepare operations for volume, product and regulatory change",
    ],
    highlight: {
      quote:
        "We focus on the operating realities that keep clearing resilient — controls, process discipline and the governance teams need when pressure rises.",
      label: "How SureClear helps",
      detail: "Practical operations advice rooted in how clearing runs day to day.",
    },
    icon: OperationsIcon,
  },
];

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

export function ServicesOverview() {
  const [activeId, setActiveId] = useState(services[0].id);
  const active = services.find((service) => service.id === activeId) ?? services[0];

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

  const selectService = (id: string) => {
    setActiveId(id);
    window.history.replaceState(null, "", `#${id}`);
  };

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
            Specialist clearing support for every critical decision
          </h2>
        </div>

        <div className="mt-10 grid gap-3 sm:mt-12 sm:grid-cols-2 xl:grid-cols-4 xl:gap-4">
          {services.map((service) => {
            const isActive = service.id === active.id;
            return (
              <button
                key={service.id}
                type="button"
                id={service.id}
                onClick={() => selectService(service.id)}
                className={`services-area-card group flex h-full flex-col rounded-2xl border p-5 text-left transition duration-300 ease-out sm:p-6 motion-reduce:transform-none motion-reduce:transition-none ${
                  isActive
                    ? "border-[#e7e5df] bg-[#f5f4ef] shadow-[0_16px_40px_rgba(11,18,32,0.08)]"
                    : "border-transparent bg-transparent hover:-translate-y-1 hover:border-[#e7e5df] hover:bg-[#f5f4ef] hover:shadow-[0_16px_40px_rgba(11,18,32,0.08)]"
                }`}
                aria-pressed={isActive}
              >
                <div
                  className={`transition duration-300 ${
                    isActive
                      ? "text-[#2d6a4f]"
                      : "text-[#0b1220] group-hover:text-[#2d6a4f]"
                  }`}
                >
                  {service.icon}
                </div>
                <h3 className="mt-5 text-xl font-semibold tracking-tight text-[#0b1220]">
                  {service.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-stone-600">
                  {service.shortDescription}
                </p>
              </button>
            );
          })}
        </div>

        <div className="mt-12 border-t border-[#e7e5df] pt-10 lg:mt-16 lg:pt-12">
          <div
            role="tablist"
            aria-label="Service areas"
            className="flex flex-wrap gap-x-8 gap-y-3 border-b border-[#e7e5df]"
          >
            {services.map((service) => {
              const isActive = service.id === active.id;
              return (
                <button
                  key={`tab-${service.id}`}
                  type="button"
                  role="tab"
                  aria-selected={isActive}
                  onClick={() => selectService(service.id)}
                  className={`relative pb-3 text-sm font-semibold transition ${
                    isActive
                      ? "text-[#0b1220]"
                      : "text-stone-400 hover:text-[#0b1220]"
                  }`}
                >
                  {service.title}
                  <span
                    aria-hidden
                    className={`absolute inset-x-0 -bottom-px h-[2px] rounded-full transition ${
                      isActive ? "bg-[#2d6a4f]" : "bg-transparent"
                    }`}
                  />
                </button>
              );
            })}
          </div>

          <div
            role="tabpanel"
            aria-labelledby={active.id}
            className="mt-10 grid items-start gap-10 lg:mt-12 lg:grid-cols-[minmax(0,1.2fr)_minmax(0,0.8fr)] lg:gap-14"
          >
            <div>
              <h3 className="text-3xl font-semibold tracking-tight text-[#0b1220] sm:text-4xl">
                {active.headline}
              </h3>
              <div className="mt-5 space-y-4 text-base leading-relaxed text-stone-600 sm:text-lg">
                {active.paragraphs.map((paragraph) => (
                  <p key={paragraph}>{paragraph}</p>
                ))}
              </div>
              <ul className="mt-8 space-y-4">
                {active.points.map((point) => (
                  <li
                    key={point}
                    className="flex items-start gap-3 text-base leading-snug text-[#0b1220] sm:text-[1.05rem]"
                  >
                    <CheckIcon />
                    <span>{point}</span>
                  </li>
                ))}
              </ul>
              <a
                href="/contact"
                className="mt-8 inline-flex rounded-lg bg-[#0b1220] px-5 py-3 text-sm font-semibold text-white transition hover:bg-[#14201a]"
              >
                Talk to us about {active.title.toLowerCase()}
              </a>
            </div>

            <aside className="rounded-2xl border border-[#e7e5df] border-l-[6px] border-l-[#2d6a4f] bg-[#f5f4ef] p-7 sm:p-8">
              <p className="text-lg leading-relaxed text-[#0b1220] italic sm:text-xl">
                “{active.highlight.quote}”
              </p>
              <div className="mt-6 border-t border-[#e7e5df] pt-5">
                <p className="text-base font-semibold text-[#0b1220]">
                  {active.highlight.label}
                </p>
                <p className="mt-2 text-sm leading-relaxed text-stone-600 sm:text-[0.95rem]">
                  {active.highlight.detail}
                </p>
              </div>
            </aside>
          </div>
        </div>
      </div>
    </section>
  );
}
