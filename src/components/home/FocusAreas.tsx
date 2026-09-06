"use client";

import { useEffect, useRef, useState } from "react";
import { FocusStackCard } from "@/components/home/FocusStackCard";

const iconClass = "h-6 w-6";

const CubeIcon = (
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

const RefreshIcon = (
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

const ShieldIcon = (
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

const GearIcon = (
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

const LayersIcon = (
  <svg viewBox="0 0 24 24" fill="none" className={iconClass} aria-hidden="true">
    <path
      d="M12 3l9 5-9 5-9-5 9-5z"
      stroke="currentColor"
      strokeWidth="1.75"
      strokeLinejoin="round"
    />
    <path
      d="M3 12l9 5 9-5M3 16l9 5 9-5"
      stroke="currentColor"
      strokeWidth="1.75"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

const SparkIcon = (
  <svg viewBox="0 0 24 24" fill="none" className={iconClass} aria-hidden="true">
    <path
      d="M12 3l1.8 5.2L19 10l-5.2 1.8L12 17l-1.8-5.2L5 10l5.2-1.8L12 3z"
      stroke="currentColor"
      strokeWidth="1.75"
      strokeLinejoin="round"
    />
  </svg>
);

const ChipIcon = (
  <svg viewBox="0 0 24 24" fill="none" className={iconClass} aria-hidden="true">
    <rect
      x="7"
      y="7"
      width="10"
      height="10"
      rx="1.5"
      stroke="currentColor"
      strokeWidth="1.75"
    />
    <path
      d="M9 3v4M12 3v4M15 3v4M9 17v4M12 17v4M15 17v4M3 9h4M3 12h4M3 15h4M17 9h4M17 12h4M17 15h4"
      stroke="currentColor"
      strokeWidth="1.75"
      strokeLinecap="round"
    />
  </svg>
);

const DatabaseIcon = (
  <svg viewBox="0 0 24 24" fill="none" className={iconClass} aria-hidden="true">
    <ellipse
      cx="12"
      cy="6"
      rx="7"
      ry="3"
      stroke="currentColor"
      strokeWidth="1.75"
    />
    <path
      d="M5 6v6c0 1.7 3.1 3 7 3s7-1.3 7-3V6M5 12v6c0 1.7 3.1 3 7 3s7-1.3 7-3v-6"
      stroke="currentColor"
      strokeWidth="1.75"
    />
  </svg>
);

const NetworkIcon = (
  <svg viewBox="0 0 24 24" fill="none" className={iconClass} aria-hidden="true">
    <circle cx="6" cy="7" r="2.25" stroke="currentColor" strokeWidth="1.75" />
    <circle cx="18" cy="7" r="2.25" stroke="currentColor" strokeWidth="1.75" />
    <circle cx="12" cy="17" r="2.25" stroke="currentColor" strokeWidth="1.75" />
    <path
      d="M8 8.5l3 6.5M16 8.5l-3 6.5M8.2 7h7.6"
      stroke="currentColor"
      strokeWidth="1.75"
      strokeLinecap="round"
    />
  </svg>
);

const cards = [
  {
    title: "Clearing strategy that fits how markets actually work",
    description:
      "Define clearing models, membership choices, product coverage and competitive positioning with decisions grounded in market structure — not generic frameworks.",
    ctaLabel: "Talk to us about strategy",
    icon: CubeIcon,
    visualIcons: [LayersIcon, NetworkIcon, SparkIcon, ChipIcon, DatabaseIcon],
  },
  {
    title: "Transformation designed for delivery, not just diagnosis",
    description:
      "Shape and deliver change across technology, target operating models and client propositions — with outcomes that can be implemented by the teams who run the business.",
    ctaLabel: "Talk to us about transformation",
    icon: RefreshIcon,
    visualIcons: [ChipIcon, LayersIcon, GearIcon, SparkIcon, NetworkIcon],
  },
  {
    title: "Regulatory change that protects the franchise",
    description:
      "Translate regulatory requirements into practical programmes that meet obligations while preserving commercial momentum and operational resilience.",
    ctaLabel: "Talk to us about regulation",
    icon: ShieldIcon,
    visualIcons: [ShieldIcon, DatabaseIcon, LayersIcon, ChipIcon, SparkIcon],
  },
  {
    title: "Operations that keep scale, risk and service in balance",
    description:
      "Strengthen day-to-day clearing operations, controls and resilience so growth does not come at the expense of risk or client service quality.",
    ctaLabel: "Talk to us about operations",
    icon: GearIcon,
    visualIcons: [GearIcon, NetworkIcon, DatabaseIcon, LayersIcon, ChipIcon],
  },
];

function clamp(value: number, min: number, max: number) {
  return Math.min(max, Math.max(min, value));
}

export function FocusAreas() {
  const trackRef = useRef<HTMLDivElement | null>(null);
  const [progress, setProgress] = useState(0);
  const [reduceMotion, setReduceMotion] = useState(false);

  useEffect(() => {
    const media = window.matchMedia("(prefers-reduced-motion: reduce)");
    const sync = () => setReduceMotion(media.matches);
    sync();
    media.addEventListener("change", sync);
    return () => media.removeEventListener("change", sync);
  }, []);

  useEffect(() => {
    const track = trackRef.current;
    if (!track || reduceMotion) return;

    let frame = 0;
    const update = () => {
      frame = 0;
      const rect = track.getBoundingClientRect();
      const scrollable = track.offsetHeight - window.innerHeight;
      if (scrollable <= 0) {
        setProgress(0);
        return;
      }
      setProgress(clamp(-rect.top / scrollable, 0, 1));
    };

    const onScroll = () => {
      if (frame) return;
      frame = window.requestAnimationFrame(update);
    };

    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      if (frame) window.cancelAnimationFrame(frame);
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, [reduceMotion]);

  // 0 = first card pinned; 1 = fourth card fully stacked on top
  const stackIndex = progress * Math.max(cards.length - 1, 1);

  return (
    <section id="focus" className="scroll-mt-24 bg-[#f5f4ef]">
      <div className="mx-auto max-w-6xl px-6 pt-16 lg:pt-24">
        <div className="max-w-2xl">
          <p className="text-xs font-semibold tracking-[0.28em] text-[#2d6a4f] uppercase">
            Where we focus
          </p>
          <h2 className="mt-4 text-3xl font-semibold tracking-tight text-[#1f4037] sm:text-4xl">
            Better decisions across the clearing lifecycle
          </h2>
          <p className="mt-4 text-lg text-stone-600">
            Keep scrolling — the next card stacks over the current one until all
            four are complete, then the page continues.
          </p>
        </div>
      </div>

      {/* Mobile / reduced motion: static vertical list */}
      <div
        className={`mx-auto max-w-6xl space-y-6 px-6 pt-12 pb-16 ${
          reduceMotion ? "block" : "md:hidden"
        }`}
      >
        {cards.map((card) => (
          <FocusStackCard
            key={card.title}
            icon={card.icon}
            title={card.title}
            description={card.description}
            ctaLabel={card.ctaLabel}
            visualIcons={card.visualIcons}
          />
        ))}
      </div>

      {/* Desktop: scroll is “spent” inside a tall track while a sticky
          viewport stays fixed and cards stack over the first one. */}
      {!reduceMotion && (
        <div
          ref={trackRef}
          className="relative mt-10 hidden md:block"
          style={{ height: `${cards.length * 100}vh` }}
        >
          <div className="sticky top-0 flex h-screen items-center overflow-hidden">
            <div className="relative mx-auto w-full max-w-6xl px-6">
              <div className="relative h-[min(34rem,70vh)] overflow-hidden lg:h-[min(36rem,72vh)]">
                {cards.map((card, index) => {
                  const delta = stackIndex - index;
                  const translateY =
                    delta < 0 ? Math.min(120, -delta * 120) : 0;
                  const buried = clamp(delta, 0, 1);
                  const scale = 1 - buried * 0.05;
                  const opacity = delta < -0.98 ? 0 : 1 - buried * 0.18;
                  const brightness = 1 - buried * 0.08;

                  return (
                    <div
                      key={card.title}
                      className="absolute inset-x-0 top-0 will-change-transform"
                      style={{
                        zIndex: index + 1,
                        transform: `translateY(${translateY}%) scale(${scale})`,
                        opacity,
                        filter: `brightness(${brightness})`,
                        pointerEvents:
                          delta < -0.05 || delta > 1.05 ? "none" : "auto",
                      }}
                    >
                      <FocusStackCard
                        icon={card.icon}
                        title={card.title}
                        description={card.description}
                        ctaLabel={card.ctaLabel}
                        visualIcons={card.visualIcons}
                        className="w-full"
                      />
                    </div>
                  );
                })}
              </div>

              <div
                className="mt-8 flex items-center justify-center gap-2"
                aria-hidden="true"
              >
                {cards.map((card, index) => {
                  const active =
                    Math.round(stackIndex) === index ||
                    (index === cards.length - 1 && progress >= 0.99);
                  return (
                    <span
                      key={card.title}
                      className={`h-1.5 rounded-full transition-all duration-300 ${
                        active
                          ? "w-6 bg-[#1f4037]"
                          : "w-1.5 bg-[#1f4037]/25"
                      }`}
                    />
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
