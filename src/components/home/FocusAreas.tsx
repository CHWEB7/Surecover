"use client";

import { useEffect, useRef, useState, type ReactNode } from "react";
import { FocusStackCard } from "@/components/home/FocusStackCard";
import type { FocusVisualVariant } from "@/components/home/FocusCardVisual";

const iconClass = "h-10 w-10";
const iconStroke = "#0b1220";

const CubeIcon = (
  <svg viewBox="0 0 24 24" fill="none" className={iconClass} aria-hidden="true">
    <path
      d="M12 3l8 4.5v9L12 21l-8-4.5v-9L12 3z"
      stroke={iconStroke}
      strokeWidth="1.75"
      strokeLinejoin="round"
    />
    <path
      d="M12 12l8-4.5M12 12v9M12 12L4 7.5"
      stroke={iconStroke}
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
      stroke={iconStroke}
      strokeWidth="1.75"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M20 12a8 8 0 0 1-13.66 5.66M4 20v-4h4"
      stroke={iconStroke}
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
      stroke={iconStroke}
      strokeWidth="1.75"
      strokeLinejoin="round"
    />
    <path
      d="M9 12l2 2 4-4"
      stroke={iconStroke}
      strokeWidth="1.75"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

const GearIcon = (
  <svg viewBox="0 0 24 24" fill="none" className={iconClass} aria-hidden="true">
    <circle cx="12" cy="12" r="3" stroke={iconStroke} strokeWidth="1.75" />
    <path
      d="M12 3v2.5M12 18.5V21M4.9 6.5l1.8 1.8M17.3 15.7l1.8 1.8M3 12h2.5M18.5 12H21M4.9 17.5l1.8-1.8M17.3 8.3l1.8-1.8"
      stroke={iconStroke}
      strokeWidth="1.75"
      strokeLinecap="round"
    />
  </svg>
);

type FocusCard = {
  title: string;
  tagline?: string;
  description: string;
  includesLabel?: string;
  bullets?: readonly string[];
  ctaLabel: string;
  icon: ReactNode;
  visualVariant: FocusVisualVariant;
};

const cards: FocusCard[] = [
  {
    title: "Clearing Strategy",
    tagline: "Navigate what comes next.",
    description:
      "Helping organisations understand and respond to changes in Clearing and market infrastructure.",
    ctaLabel: "Talk to us about strategy",
    icon: CubeIcon,
    visualVariant: "strategy",
  },
  {
    title: "Transformation & Change",
    tagline: "Turn decisions into capability.",
    description:
      "We help turn a clearing decision into a workable operating model, roadmap and delivery plan.",
    ctaLabel: "Talk to us about transformation",
    icon: RefreshIcon,
    visualVariant: "transformation",
  },
  {
    title: "Fractional Leadership",
    tagline: "Senior experience when it matters.",
    description:
      "Providing experienced leadership without the commitment of a permanent senior hire.",
    ctaLabel: "Talk to us about fractional leadership",
    icon: ShieldIcon,
    visualVariant: "regulation",
  },
  {
    title: "Operations & Resilience",
    tagline: "Make clearing work better.",
    description:
      "Helping organisations improve resilience, efficiency, controls and governance.",
    ctaLabel: "Talk to us about operations",
    icon: GearIcon,
    visualVariant: "operations",
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

  // Same pacing for every card, including the last: one sticky step per
  // interval. The track ends when the final card lands, so the page
  // continues immediately — no settle / collapse phase.
  const lastIndex = Math.max(cards.length - 1, 1);
  const stackIndex = progress * lastIndex;
  const peekRoom = 40;

  return (
    <section id="focus" className="scroll-mt-24 bg-[#f5f4ef]">
      <div className="mx-auto max-w-7xl px-6 pt-16 lg:px-10 lg:pt-24">
        <div className="max-w-5xl">
          <h2 className="max-w-3xl text-4xl leading-[1.08] font-semibold tracking-tight text-[#0b1220] sm:text-5xl lg:text-6xl">
            Make complex clearing decisions with confidence.
          </h2>
          <p className="mt-5 text-lg leading-relaxed text-stone-600 sm:text-xl">
            Specialist cleared derivatives advisory across strategy,
            transformation, operations and regulatory change.
            <br />
            Built on 30+ years inside clearing across operations, transformation,
            product and market infrastructure.
          </p>
          <a
            href="/home/services"
            className="mt-8 inline-flex rounded-lg border border-[#0b1220] px-5 py-2.5 text-sm font-semibold text-[#0b1220] transition hover:bg-[#0b1220] hover:text-white"
          >
            Explore our services
          </a>
        </div>
      </div>

      {/* Mobile / reduced motion: static vertical list */}
      <div
        className={`mx-auto max-w-7xl space-y-6 px-6 pt-6 pb-8 lg:px-10 ${
          reduceMotion ? "block" : "md:hidden"
        }`}
      >
        {cards.map((card) => (
          <FocusStackCard
            key={card.title}
            icon={card.icon}
            title={card.title}
            tagline={card.tagline}
            description={card.description}
            includesLabel={card.includesLabel}
            bullets={card.bullets}
            ctaLabel={card.ctaLabel}
            visualVariant={card.visualVariant}
          />
        ))}
      </div>

      {/* Desktop: pinned viewport — page scroll drives card stacking */}
      {!reduceMotion && (
        <div
          ref={trackRef}
          className="relative mt-3 hidden md:block"
          style={{ height: `${lastIndex * 100}vh` }}
        >
          <div className="sticky top-16 flex h-[calc(100vh-4rem)] flex-col overflow-hidden pt-3 pb-6">
            <div className="relative mx-auto w-[min(80vw,78rem)]">
              <div className="relative h-[min(42rem,74vh)] overflow-hidden xl:h-[min(46rem,76vh)]">
                {cards.map((card, index) => {
                  const delta = stackIndex - index;
                  // Incoming: start narrower than the original card, grow to
                  // full width as it arrives. Buried cards peek ABOVE the
                  // front card (tops visible), including after the last card.
                  const approach = clamp(1 + delta, 0, 1);
                  const translateYPercent =
                    delta < 0 ? Math.min(110, -delta * 110) : 0;
                  const peekUpPx = delta >= 0 ? -delta * 16 : 0;
                  const scaleX = delta < 0 ? 0.88 + 0.12 * approach : 1;
                  const visible = delta >= -0.98;
                  const frontIndex = Math.min(
                    lastIndex,
                    Math.floor(stackIndex + 0.999),
                  );

                  return (
                    <div
                      key={card.title}
                      className="absolute overflow-visible rounded-[1.75rem] bg-white"
                      style={{
                        // Leave room for the rounded shadow so the overflow
                        // container doesn't hard-clip it into a square edge.
                        top: peekRoom,
                        right: 52,
                        bottom: 36,
                        left: 52,
                        zIndex: index + 1,
                        transformOrigin: "center top",
                        transform: `translate3d(0, calc(${translateYPercent}% + ${peekUpPx}px), 0) scaleX(${scaleX})`,
                        visibility: visible ? "visible" : "hidden",
                        pointerEvents:
                          delta < -0.05 || delta > 1.05 ? "none" : "auto",
                        // Opaque rounded shell + matching radius = soft
                        // shadow that reads as part of the card.
                        boxShadow:
                          index === frontIndex
                            ? "0 10px 24px rgba(15, 31, 26, 0.12), 0 2px 6px rgba(15, 31, 26, 0.05)"
                            : "none",
                      }}
                    >
                      <FocusStackCard
                        icon={card.icon}
                        title={card.title}
                        tagline={card.tagline}
                        description={card.description}
                        includesLabel={card.includesLabel}
                        bullets={card.bullets}
                        ctaLabel={card.ctaLabel}
                        visualVariant={card.visualVariant}
                        elevated={false}
                        className="h-full w-full"
                      />
                    </div>
                  );
                })}
              </div>

              <div
                className="mt-4 flex items-center justify-center gap-2"
                aria-hidden="true"
              >
                {cards.map((card, index) => {
                  const active = Math.round(stackIndex) === index;
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
