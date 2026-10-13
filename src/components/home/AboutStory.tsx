import type { ReactNode } from "react";

type AboutTopic = {
  id: string;
  title: string;
  shortDescription: string;
  icon: ReactNode;
};

const iconClass = "h-9 w-9";

const WhoIcon = (
  <svg viewBox="0 0 24 24" fill="none" className={iconClass} aria-hidden="true">
    <circle cx="9" cy="8" r="3" stroke="currentColor" strokeWidth="1.5" />
    <path
      d="M3.5 19c.8-3.2 3-5 5.5-5s4.7 1.8 5.5 5"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
    />
    <path
      d="M16 8h5M18.5 5.5v5"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
    />
  </svg>
);

const WhatIcon = (
  <svg viewBox="0 0 24 24" fill="none" className={iconClass} aria-hidden="true">
    <path
      d="M4 7h16M4 12h10M4 17h13"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
    />
    <circle cx="18.5" cy="12" r="2" stroke="currentColor" strokeWidth="1.5" />
  </svg>
);

const MissionIcon = (
  <svg viewBox="0 0 24 24" fill="none" className={iconClass} aria-hidden="true">
    <circle cx="12" cy="12" r="8" stroke="currentColor" strokeWidth="1.5" />
    <circle cx="12" cy="12" r="4" stroke="currentColor" strokeWidth="1.5" />
    <circle cx="12" cy="12" r="1.25" fill="currentColor" />
  </svg>
);

const HelpIcon = (
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

const topics: AboutTopic[] = [
  {
    id: "who-we-are",
    title: "Who we are",
    shortDescription:
      "SureClear is an independent specialist advisory firm for the cleared derivatives industry. Built on 30+ years inside clearing, the firm exists to make complex clearing decisions clearer.",
    icon: WhoIcon,
  },
  {
    id: "what-we-do",
    title: "What we do",
    shortDescription:
      "Clearing does not need more complexity. It needs clearer judgement. Cleared derivatives is a specialist market. The decisions are technical, operational, regulatory and commercial at the same time. Senior teams rarely need more information. They need to know what matters, what it means and what to do next.",
    icon: WhatIcon,
  },
  {
    id: "our-mission",
    title: "Our mission",
    shortDescription:
      "SureClear was created to bring specialist clearing experience directly to those moments. Not broad consultancy. Not generic frameworks. Not advice detached from delivery. Clear judgement. Practical action. Experience from inside the industry.",
    icon: MissionIcon,
  },
  {
    id: "who-we-help",
    title: "Who we help",
    shortDescription:
      "Banks, brokers, exchanges, CCPs, fintechs and new market participants — organisations navigating clearing strategy, transformation and operations. We understand the industry because we've worked inside it.",
    icon: HelpIcon,
  },
];

export function AboutStory() {
  return (
    <section
      id="our-story"
      className="scroll-mt-24 w-full bg-white pb-20 lg:pb-28"
    >
      <div className="mx-auto max-w-7xl px-6 sm:px-10 lg:px-16 xl:px-24">
        <div className="max-w-3xl pt-4 lg:pt-6">
          <p className="text-sm font-semibold tracking-wide text-[#2d6a4f]">
            About SureClear
          </p>
          <h2 className="mt-3 text-3xl font-semibold tracking-tight text-[#0b1220] sm:text-4xl lg:text-[2.75rem]">
            The story behind specialist advice for every{" "}
            <span className="bg-[linear-gradient(135deg,#1f4037_0%,#2d6a4f_45%,#99f2c8_100%)] bg-clip-text text-transparent">
              clearing decision
            </span>
          </h2>
        </div>

        <div className="mt-10 grid gap-3 sm:mt-12 sm:grid-cols-2 xl:grid-cols-4 xl:gap-4">
          {topics.map((topic) => (
            <article
              key={topic.id}
              id={topic.id}
              className="services-area-card group flex h-full flex-col rounded-2xl border border-transparent bg-transparent p-5 text-left transition duration-300 ease-out hover:-translate-y-1 hover:border-[#ecece8] hover:bg-[#f3f3f0] sm:p-6 motion-reduce:transform-none motion-reduce:transition-none"
            >
              <div className="text-[#0b1220] transition duration-300 group-hover:text-[#2d6a4f]">
                {topic.icon}
              </div>
              <h3 className="mt-5 text-xl font-semibold tracking-tight text-[#0b1220]">
                {topic.title}
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-stone-600">
                {topic.shortDescription}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
