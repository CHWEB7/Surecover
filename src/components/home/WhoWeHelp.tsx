import type { ReactNode } from "react";

type Audience = {
  id: string;
  title: string;
  shortDescription: string;
  icon: ReactNode;
};

const iconClass = "h-9 w-9";

const ClearingParticipantsIcon = (
  <svg viewBox="0 0 24 24" fill="none" className={iconClass} aria-hidden="true">
    <path
      d="M4 18V8.5L12 4l8 4.5V18M4 18h16M7 18v-5h3v5M14 18v-5h3v5M9.5 9.5h5"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

const ExchangesIcon = (
  <svg viewBox="0 0 24 24" fill="none" className={iconClass} aria-hidden="true">
    <circle cx="12" cy="12" r="8" stroke="currentColor" strokeWidth="1.5" />
    <circle cx="12" cy="12" r="3.25" stroke="currentColor" strokeWidth="1.5" />
    <path
      d="M12 4v2.5M12 17.5V20M4 12h2.5M17.5 12H20"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
    />
  </svg>
);

const FintechsIcon = (
  <svg viewBox="0 0 24 24" fill="none" className={iconClass} aria-hidden="true">
    <rect
      x="5.5"
      y="5.5"
      width="13"
      height="13"
      rx="2.5"
      stroke="currentColor"
      strokeWidth="1.5"
    />
    <path
      d="M9 12h2.2l1.3-3.2L14.8 15 16 12h-1"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

const NewParticipantsIcon = (
  <svg viewBox="0 0 24 24" fill="none" className={iconClass} aria-hidden="true">
    <circle cx="8" cy="8" r="2.75" stroke="currentColor" strokeWidth="1.5" />
    <circle cx="16" cy="8.5" r="2.25" stroke="currentColor" strokeWidth="1.5" />
    <path
      d="M2.75 19c.7-2.8 2.7-4.4 5.25-4.4S12.55 16.2 13.25 19"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
    />
    <path
      d="M13.5 14.2c1.1-.7 2.4-1.1 3.9-1.1 2.2 0 3.9 1.2 4.6 3.4"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
    />
  </svg>
);

const audiences: Audience[] = [
  {
    id: "clearing-participants",
    title: "Clearing Participants",
    shortDescription:
      "Make clear decisions on clearing membership, tooling, client clearing propositions and operating models. Shape clearing access, margin efficiency, operational resilience and service models that win and retain sophisticated clients.",
    icon: ClearingParticipantsIcon,
  },
  {
    id: "exchanges-ccps",
    title: "Exchanges & CCPs",
    shortDescription:
      "Align product launches, margin changes and technology transformation with vendors and market participants. Strengthen membership, operations, participant requirements and change agendas while protecting resilience and market confidence.",
    icon: ExchangesIcon,
  },
  {
    id: "fintechs",
    title: "Fintechs",
    shortDescription:
      "Bridge product ambition with clearing realities — connectivity, risk, regulation, functionality, user experience and go-to-market.",
    icon: FintechsIcon,
  },
  {
    id: "new-market-participants",
    title: "New Market Participants",
    shortDescription:
      "Understand what needs to be built, establish procedures, controls and robust governance, make decisions on clearing relationships and memberships before entering the cleared derivatives ecosystem.",
    icon: NewParticipantsIcon,
  },
];

export function WhoWeHelp() {
  return (
    <section
      id="clients"
      className="scroll-mt-24 bg-[#f5f4ef] pt-8 pb-20 lg:pt-10 lg:pb-28"
    >
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <div className="max-w-5xl">
          <h2 className="max-w-4xl text-4xl leading-[1.08] font-semibold tracking-tight text-[#0b1220] sm:text-5xl lg:text-6xl">
            A clear process for complex clearing decisions,{" "}
            <span className="text-[#2d6a4f]">who we help.</span>
          </h2>
          <div className="mt-5 max-w-5xl space-y-3 text-lg leading-relaxed text-stone-600 sm:text-xl">
            <p>
              SureClear exists because the cleared derivatives industry
              doesn&apos;t need another generalist consultancy. It needs
              specialist experience.
            </p>
            <p>
              Our focus is deliberately narrow: helping organisations navigate
              clearing strategy, transformation and operations. SureClear draws
              on more than 30 years of experience across the cleared derivatives
              industry.
            </p>
            <p className="font-medium text-[#0b1220]">
              SureClear works with organisations that need specialist clearing
              judgement, practical experience and a clear path through complex
              decisions.
            </p>
          </div>
          <a
            href="/home/services"
            className="services-cta-pulse mt-8 inline-flex rounded-full border border-[#0b1220]/55 px-6 py-3 text-sm font-semibold text-[#0b1220] transition hover:border-[#0b1220] hover:bg-[#0b1220]/10"
          >
            View our services
          </a>
        </div>

        <div className="mt-12 grid gap-3 sm:mt-14 sm:grid-cols-2 xl:mt-16 xl:grid-cols-4 xl:gap-4">
          {audiences.map((audience) => (
            <article
              key={audience.id}
              id={audience.id}
              className="services-area-card group flex h-full flex-col rounded-2xl border border-transparent bg-transparent p-5 text-left transition duration-300 ease-out hover:-translate-y-1 hover:border-[#ecece8] hover:bg-[#f3f3f0] sm:p-6 motion-reduce:transform-none motion-reduce:transition-none"
            >
              <div className="text-[#0b1220] transition duration-300 group-hover:text-[#2d6a4f]">
                {audience.icon}
              </div>
              <h3 className="mt-5 text-xl font-semibold tracking-tight text-[#0b1220]">
                {audience.title}
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-stone-600">
                {audience.shortDescription}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
