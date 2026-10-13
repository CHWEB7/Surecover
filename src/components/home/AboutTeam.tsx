"use client";

import Image from "next/image";
import type { ReactNode } from "react";

type TeamMember = {
  id: string;
  name: string;
  role: string;
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
  image: string;
  imageAlt: string;
};

const iconClass = "h-9 w-9";

const FounderIcon = (
  <svg viewBox="0 0 24 24" fill="none" className={iconClass} aria-hidden="true">
    <circle cx="12" cy="8" r="3.25" stroke="currentColor" strokeWidth="1.5" />
    <path
      d="M5 19.5c1.2-3.6 3.8-5.5 7-5.5s5.8 1.9 7 5.5"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
    />
  </svg>
);

const team: TeamMember[] = [
  {
    id: "simon",
    name: "Simon",
    role: "Founder, SureClear",
    shortDescription:
      "Founder of SureClear — bringing decades of clearing operations, transformation and product leadership directly into every client engagement.",
    headline: "Practitioner experience at the centre of every engagement",
    paragraphs: [
      "Simon Haggett began his career in derivatives clearing operations and progressed through senior leadership roles across SEB, Credit Suisse and FIS.",
      "He has led organisations of more than 100 professionals, managed major transformation portfolios and led global product organisations responsible for platforms supporting more than 80 CCPs and exchanges.",
      "That experience — including major industry transitions such as Brexit and regulatory change — is the foundation of SureClear.",
    ],
    points: [
      "Clearing operations, transformation and regulatory change",
      "Product leadership across platforms supporting 80+ CCPs and exchanges",
      "Commercial development and multi-million dollar change portfolios",
    ],
    highlight: {
      quote:
        "SureClear is built on experience from running clearing businesses and platforms — so advice stays practical when markets, regulation and operations collide.",
      label: "Experience that shapes the firm",
      detail:
        "Independent clearing advice from someone who has lived the operating, commercial and delivery realities of the industry.",
    },
    icon: FounderIcon,
    image: "/simon-haggett.jpg",
    imageAlt: "Simon Haggett, Founder of SureClear",
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

export function AboutTeam() {
  // Single team member — keep the Services-style layout, but only one
  // selectable option so the tab state stays fixed on Simon.
  const active = team[0];

  return (
    <section
      id="meet-the-team"
      className="scroll-mt-24 w-full border-t border-[#e7e5df] bg-white pb-20 lg:pb-28"
    >
      <div className="mx-auto max-w-7xl px-6 sm:px-10 lg:px-16 xl:px-24">
        <div className="max-w-3xl pt-14 lg:pt-20">
          <p className="text-sm font-semibold tracking-wide text-[#2d6a4f]">
            Meet the team
          </p>
          <h2 className="mt-3 text-3xl font-semibold tracking-tight text-[#0b1220] sm:text-4xl lg:text-[2.75rem]">
            Practitioners who have lived clearing, not just{" "}
            <span className="bg-[linear-gradient(135deg,#1f4037_0%,#2d6a4f_45%,#99f2c8_100%)] bg-clip-text text-transparent">
              advised on it
            </span>
          </h2>
        </div>

        <div className="mt-10 grid gap-3 sm:mt-12 sm:max-w-md">
          {team.map((member) => (
            <div
              key={member.id}
              id={member.id}
              aria-current="true"
              className="services-area-card flex h-full flex-col rounded-2xl border border-[#ecece8] bg-[#f3f3f0] p-5 text-left sm:p-6"
            >
              <div className="text-[#2d6a4f]">{member.icon}</div>
              <h3 className="mt-5 text-xl font-semibold tracking-tight text-[#0b1220]">
                {member.name}
              </h3>
              <p className="mt-1 text-sm font-medium text-[#2d6a4f]">
                {member.role}
              </p>
              <p className="mt-3 text-sm leading-relaxed text-stone-600">
                {member.shortDescription}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-12 border-t border-[#e7e5df] pt-10 lg:mt-16 lg:pt-12">
          <div
            role="tablist"
            aria-label="Team members"
            className="flex flex-wrap gap-x-8 gap-y-3 border-b border-[#e7e5df]"
          >
            {team.map((member) => (
              <button
                key={`tab-${member.id}`}
                type="button"
                role="tab"
                aria-selected="true"
                className="relative pb-3 text-sm font-semibold text-[#0b1220]"
              >
                {member.name}
                <span
                  aria-hidden
                  className="absolute inset-x-0 -bottom-px h-[2px] rounded-full bg-[#2d6a4f]"
                />
              </button>
            ))}
          </div>

          <div
            role="tabpanel"
            aria-labelledby={active.id}
            className="mt-10 grid items-start gap-10 lg:mt-12 lg:grid-cols-[minmax(0,1.15fr)_minmax(0,0.85fr)] lg:gap-14"
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
                Talk to Simon
              </a>
            </div>

            <div className="mx-auto w-full max-w-sm lg:mx-0 lg:ml-auto">
              <div className="relative aspect-[4/5] overflow-hidden rounded-[1.75rem] bg-[#ebe8e2] shadow-[0_18px_40px_rgba(11,18,32,0.08)]">
                <Image
                  src={active.image}
                  alt={active.imageAlt}
                  fill
                  sizes="(max-width: 1024px) min(100vw, 28rem), 26rem"
                  quality={100}
                  unoptimized
                  className="object-cover object-[50%_18%]"
                />

                <div className="absolute inset-x-0 bottom-5 z-10 flex justify-center px-4 sm:bottom-6">
                  <div className="inline-flex max-w-full items-center gap-2 rounded-full border border-[#0b1220] bg-white p-1.5 shadow-[0_8px_24px_rgba(11,18,32,0.12)] sm:gap-2.5 sm:p-1.5">
                    <span className="inline-flex shrink-0 items-center rounded-full bg-[#0b1220] px-4 py-1.5 text-sm font-medium text-white sm:px-5 sm:py-2">
                      {active.name}
                    </span>
                    <span className="pr-4 text-sm font-medium tracking-tight text-[#0b1220] sm:pr-5">
                      {active.role}
                    </span>
                  </div>
                </div>
              </div>

              <aside className="mt-6 rounded-2xl border border-[#e7e5df] border-l-[6px] border-l-[#2d6a4f] bg-[#f5f4ef] p-6 sm:p-7">
                <p className="text-base leading-relaxed text-[#0b1220] italic sm:text-lg">
                  "{active.highlight.quote}"
                </p>
                <div className="mt-5 border-t border-[#e7e5df] pt-4">
                  <p className="text-sm font-semibold text-[#0b1220]">
                    {active.highlight.label}
                  </p>
                  <p className="mt-2 text-sm leading-relaxed text-stone-600">
                    {active.highlight.detail}
                  </p>
                </div>
              </aside>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
