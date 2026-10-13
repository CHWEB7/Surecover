"use client";

import { useEffect, useState, type ReactNode } from "react";

type AboutTopic = {
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

const FoundedIcon = (
  <svg viewBox="0 0 24 24" fill="none" className={iconClass} aria-hidden="true">
    <rect
      x="3.5"
      y="5"
      width="17"
      height="15"
      rx="2"
      stroke="currentColor"
      strokeWidth="1.5"
    />
    <path
      d="M3.5 10h17M8 3v4M16 3v4"
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
      "An independent clearing advisory led by practitioners who have run clearing operations, transformations and product organisations — not a generalist consulting bench.",
    headline: "Clearing specialists, not generalist consultants",
    paragraphs: [
      "SureClear is an independent advisory focused exclusively on the cleared derivatives industry. The firm is built around practitioner experience — the kind that comes from running clearing businesses, platforms and change programmes, not from adapting a generic playbook.",
      "That focus means every engagement is shaped by how clearing actually works: membership choices, operating models, regulation, commercial pressure and the day-to-day realities of delivery.",
    ],
    points: [
      "Independent by design — no product to place and no bench to fill",
      "Led by people who have lived clearing operations and transformation",
      "Built for banks, brokers, CCPs and new market participants",
    ],
    highlight: {
      quote:
        "SureClear exists to put clearing-native judgement on the client's side of the table — practical, independent and grounded in how markets run.",
      label: "Who SureClear is",
      detail:
        "A specialist advisory for the cleared derivatives industry, founded on real operating experience.",
    },
    icon: WhoIcon,
  },
  {
    id: "what-we-do",
    title: "What we do",
    shortDescription:
      "Strategy, transformation, fractional leadership and operations support — helping organisations decide, deliver and strengthen clearing with clarity.",
    headline: "Advice that moves from decision to delivery",
    paragraphs: [
      "SureClear helps leadership teams frame clearing decisions properly, turn direction into workable operating models, and strengthen the operations and leadership needed to run them.",
      "Whether the question is membership strategy, transformation delivery, fractional leadership or operational resilience, the work stays close to clearing realities — so progress continues after the engagement ends.",
    ],
    points: [
      "Clearing strategy for membership, coverage and positioning choices",
      "Transformation and change that can be owned by the teams who run it",
      "Fractional leadership and operations support when pressure is highest",
    ],
    highlight: {
      quote:
        "We help clients cut through clearing complexity and leave with a path they can defend commercially, operationally and with regulators.",
      label: "What SureClear delivers",
      detail:
        "Specialist support across strategy, change, leadership and operations — shaped around the decision in front of you.",
    },
    icon: WhatIcon,
  },
  {
    id: "our-mission",
    title: "Our mission",
    shortDescription:
      "Close the gap between generic consulting and vendor-led advice — so clearing leaders can move with clarity and keep capability inside the business.",
    headline: "Clarity for decisions that are too important to get wrong",
    paragraphs: [
      "Too often, clearing decisions are shaped by frameworks that ignore market mechanics, or by vendors with a product to sell. The result looks polished but fails under regulatory, operational and commercial pressure.",
      "SureClear's mission is to close that gap: bring practitioner judgement to the moments that matter, and leave clients with capability that lasts — not dependency on a slide deck or a product roadmap.",
    ],
    points: [
      "Replace generic advice with clearing-native judgement",
      "Keep the client's decision at the centre — not a product or a programme",
      "Build internal capability so progress continues after we leave",
    ],
    highlight: {
      quote:
        "The aim is simple: help clearing leaders decide with clarity, deliver with confidence, and keep the capability inside their organisation.",
      label: "Why this matters",
      detail:
        "Clearing choices sit at the intersection of markets, regulation and operations — they deserve specialist advice.",
    },
    icon: MissionIcon,
  },
  {
    id: "when-founded",
    title: "When we were founded",
    shortDescription:
      "Established as an independent firm after decades of clearing leadership across banks and market infrastructure — so that experience could sit with the client.",
    headline: "Founded to put experience on the client's side",
    paragraphs: [
      "SureClear was established after founder Simon Haggett's career spanning derivatives clearing operations and senior leadership roles across SEB, Credit Suisse and FIS.",
      "The firm was created so that experience — leading organisations, transformation portfolios and global product platforms — could sit independently on the client's side of the table, not inside a vendor or a generalist firm.",
    ],
    points: [
      "Rooted in decades of clearing leadership and operating experience",
      "Founded as an independent advisory, not a product or staffing business",
      "Built to stay close to the decision, the delivery and the day-to-day reality",
    ],
    highlight: {
      quote:
        "SureClear started when it became clear that clearing leaders needed specialist advice from people who had actually run the business — not another generic consulting engagement.",
      label: "How the firm began",
      detail:
        "An independent advisory founded to channel practitioner clearing experience directly into client decisions.",
    },
    icon: FoundedIcon,
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

export function AboutStory() {
  const [activeId, setActiveId] = useState(topics[0].id);
  const active = topics.find((topic) => topic.id === activeId) ?? topics[0];

  useEffect(() => {
    const applyHash = () => {
      const hash = window.location.hash.replace("#", "");
      if (topics.some((topic) => topic.id === hash)) {
        setActiveId(hash);
      }
    };
    applyHash();
    window.addEventListener("hashchange", applyHash);
    return () => window.removeEventListener("hashchange", applyHash);
  }, []);

  const selectTopic = (id: string) => {
    setActiveId(id);
    window.history.replaceState(null, "", `#${id}`);
  };

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
            <button
              key={topic.id}
              type="button"
              id={topic.id}
              onClick={() => selectTopic(topic.id)}
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
            </button>
          ))}
        </div>

        <div className="mt-12 border-t border-[#e7e5df] pt-10 lg:mt-16 lg:pt-12">
          <div
            role="tablist"
            aria-label="About SureClear"
            className="flex flex-wrap gap-x-8 gap-y-3 border-b border-[#e7e5df]"
          >
            {topics.map((topic) => {
              const isActive = topic.id === active.id;
              return (
                <button
                  key={`tab-${topic.id}`}
                  type="button"
                  role="tab"
                  aria-selected={isActive}
                  onClick={() => selectTopic(topic.id)}
                  className={`relative pb-3 text-sm font-semibold transition ${
                    isActive
                      ? "text-[#0b1220]"
                      : "text-stone-400 hover:text-[#0b1220]"
                  }`}
                >
                  {topic.title}
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
                Talk to us
              </a>
            </div>

            <aside className="rounded-2xl border border-[#e7e5df] border-l-[6px] border-l-[#2d6a4f] bg-[#f5f4ef] p-7 sm:p-8">
              <p className="text-lg leading-relaxed text-[#0b1220] italic sm:text-xl">
                "{active.highlight.quote}"
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
