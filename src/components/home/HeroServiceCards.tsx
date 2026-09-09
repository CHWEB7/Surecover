"use client";

import { useEffect, useLayoutEffect, useRef, useState } from "react";

const services = [
  {
    title: "Clearing Strategy",
    description:
      "CCP connectivity, exchange membership, clearing operating models, clearing mandates and regulatory evolution.",
    icon: (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        className="h-10 w-10"
        aria-hidden="true"
      >
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
    ),
  },
  {
    title: "Transformation & Change",
    description:
      "Roadmaps, vendor assessment, RFPs, product strategy, governance and platform transformation.",
    icon: (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        className="h-10 w-10"
        aria-hidden="true"
      >
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
    ),
  },
  {
    title: "Operations & Resilience",
    description:
      "Controls, procedures, risk reviews, automation, operating models and outsourcing.",
    icon: (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        className="h-10 w-10"
        aria-hidden="true"
      >
        <circle cx="12" cy="12" r="3" stroke="currentColor" strokeWidth="1.75" />
        <path
          d="M12 3v2.5M12 18.5V21M4.9 6.5l1.8 1.8M17.3 15.7l1.8 1.8M3 12h2.5M18.5 12H21M4.9 17.5l1.8-1.8M17.3 8.3l1.8-1.8"
          stroke="currentColor"
          strokeWidth="1.75"
          strokeLinecap="round"
        />
      </svg>
    ),
  },
  {
    title: "Fractional Leadership",
    description:
      "COO support, programme recovery, steering committee preparation, executive reporting and transformation leadership.",
    icon: (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        className="h-10 w-10"
        aria-hidden="true"
      >
        <path
          d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"
          stroke="currentColor"
          strokeWidth="1.75"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <circle
          cx="9"
          cy="7"
          r="4"
          stroke="currentColor"
          strokeWidth="1.75"
        />
        <path
          d="M22 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75"
          stroke="currentColor"
          strokeWidth="1.75"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    ),
  },
];

const GAP_PX = 20; // gap-5
const VISIBLE = 3;

export function HeroServiceCards() {
  const viewportRef = useRef<HTMLDivElement>(null);
  const [cardWidth, setCardWidth] = useState(0);
  const [shifted, setShifted] = useState(false);
  const [reduceMotion, setReduceMotion] = useState(false);

  useEffect(() => {
    const media = window.matchMedia("(prefers-reduced-motion: reduce)");
    const sync = () => setReduceMotion(media.matches);
    sync();
    media.addEventListener("change", sync);
    return () => media.removeEventListener("change", sync);
  }, []);

  useLayoutEffect(() => {
    const viewport = viewportRef.current;
    if (!viewport) return;

    const measure = () => {
      const width = viewport.clientWidth;
      setCardWidth((width - GAP_PX * (VISIBLE - 1)) / VISIBLE);
    };

    measure();
    const observer = new ResizeObserver(measure);
    observer.observe(viewport);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    let timeoutId = 0;
    let cancelled = false;

    const arm = () => {
      if (cancelled) return;
      timeoutId = window.setTimeout(() => {
        if (!cancelled) setShifted(true);
      }, 2000);
    };

    if (document.readyState === "complete") {
      arm();
    } else {
      window.addEventListener("load", arm, { once: true });
    }

    return () => {
      cancelled = true;
      window.clearTimeout(timeoutId);
      window.removeEventListener("load", arm);
    };
  }, []);

  const stepPx = cardWidth > 0 ? cardWidth + GAP_PX : 0;

  return (
    <div
      ref={viewportRef}
      className="relative z-10 mx-auto -mt-28 max-w-6xl overflow-hidden px-4 sm:-mt-32 sm:px-6 lg:-mt-36"
    >
      <div
        className={`flex ${
          reduceMotion
            ? ""
            : "transition-transform duration-[900ms] ease-[cubic-bezier(0.22,1,0.36,1)]"
        }`}
        style={{
          gap: GAP_PX,
          transform:
            shifted && stepPx > 0
              ? `translate3d(-${stepPx}px, 0, 0)`
              : "translate3d(0, 0, 0)",
        }}
      >
        {services.map((service) => (
          <article
            key={service.title}
            className="shrink-0 rounded-2xl border border-white/10 bg-[#0b1220] p-6 text-left shadow-2xl shadow-[#1f4037]/25"
            style={{
              width: cardWidth || undefined,
              flex: cardWidth ? `0 0 ${cardWidth}px` : `0 0 calc((100% - ${GAP_PX * (VISIBLE - 1)}px) / ${VISIBLE})`,
            }}
          >
            <div className="mb-5 text-[#99f2c8]">{service.icon}</div>
            <h2 className="text-lg font-semibold text-white">{service.title}</h2>
            <p className="mt-3 text-sm leading-relaxed text-slate-300">
              {service.description}
            </p>
          </article>
        ))}
      </div>
    </div>
  );
}
