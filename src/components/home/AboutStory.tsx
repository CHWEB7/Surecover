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
    icon: WhoIcon,
  },
  {
    id: "what-we-do",
    title: "What we do",
    shortDescription:
      "Strategy, transformation, fractional leadership and operations support — helping organisations decide, deliver and strengthen clearing with clarity.",
    icon: WhatIcon,
  },
  {
    id: "our-mission",
    title: "Our mission",
    shortDescription:
      "Close the gap between generic consulting and vendor-led advice — so clearing leaders can move with clarity and keep capability inside the business.",
    icon: MissionIcon,
  },
  {
    id: "when-founded",
    title: "When we were founded",
    shortDescription:
      "Established as an independent firm after decades of clearing leadership across banks and market infrastructure — so that experience could sit with the client.",
    icon: FoundedIcon,
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
