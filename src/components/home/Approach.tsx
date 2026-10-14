"use client";

import {
  useCallback,
  useEffect,
  useRef,
  useState,
  type PointerEvent as ReactPointerEvent,
} from "react";

const processSteps = [
  {
    title: "Diagnose the decision",
    body: "We clarify what needs to be decided before building the plan. We look across operations, technology, regulation, governance, risk and commercial priorities, ensuring the problem is framed correctly before solutions are formed.",
  },
  {
    title: "Design the path",
    body: "We turn the diagnosis into practical choices, target operating models, roadmaps and delivery plans.",
  },
  {
    title: "Deliver with the business",
    body: "Recommendations must work inside real teams, real systems and real operating models. We work with the teams who run clearing day to day, keeping delivery tied to operational reality.",
  },
  {
    title: "Embed lasting capability",
    body: "Every engagement should create greater confidence about what matters and what should happen next. We leave clients with clearer judgement, stronger controls and a practical playbook they can continue to use.",
  },
] as const;

function ProcessCard({
  step,
  index,
  cardRef,
}: {
  step: (typeof processSteps)[number];
  index: number;
  cardRef?: (node: HTMLElement | null) => void;
}) {
  const number = String(index + 1).padStart(2, "0");

  return (
    <article
      ref={cardRef}
      className="approach-scroll-card approach-process-card relative w-[17.5rem] shrink-0 self-stretch sm:w-[18.5rem] lg:w-[19.5rem]"
    >
      <div aria-hidden className="approach-card-ring absolute inset-0 rounded-2xl" />
      <div className="approach-process-card-inner relative flex h-full flex-col bg-[#0b1220] p-5 sm:p-6">
        <div className="flex items-start justify-between gap-3">
          <span
            className="text-3xl font-normal tracking-tight text-white sm:text-4xl"
            aria-hidden="true"
          >
            {number}
          </span>
          <span
            aria-hidden="true"
            className="mt-1 text-lg font-normal text-white/70"
          >
            →
          </span>
        </div>
        <h3 className="mt-6 text-lg font-semibold tracking-tight text-white sm:text-xl">
          {step.title}
        </h3>
        <p className="mt-2.5 flex-1 text-sm leading-relaxed text-white/65">
          {step.body}
        </p>
      </div>
    </article>
  );
}

export function Approach() {
  const scrollerRef = useRef<HTMLDivElement | null>(null);
  const lastCardRef = useRef<HTMLElement | null>(null);
  const [canAdvance, setCanAdvance] = useState(true);
  const dragRef = useRef<{
    active: boolean;
    startX: number;
    startScroll: number;
    moved: boolean;
    pointerId: number | null;
  }>({
    active: false,
    startX: 0,
    startScroll: 0,
    moved: false,
    pointerId: null,
  });

  const syncAdvanceState = useCallback(() => {
    const scroller = scrollerRef.current;
    if (!scroller) return;
    const maxScroll = scroller.scrollWidth - scroller.clientWidth;
    setCanAdvance(maxScroll > 8 && scroller.scrollLeft < maxScroll - 8);
  }, []);

  const userInteractedRef = useRef(false);

  const scrollToLastCard = useCallback(() => {
    const scroller = scrollerRef.current;
    const lastCard = lastCardRef.current;
    if (!scroller || !lastCard) return;

    userInteractedRef.current = true;
    const maxScroll = scroller.scrollWidth - scroller.clientWidth;
    scroller.scrollTo({
      left: Math.max(0, maxScroll),
      behavior: "smooth",
    });
  }, []);

  const onPointerDown = useCallback(
    (event: ReactPointerEvent<HTMLDivElement>) => {
      const scroller = scrollerRef.current;
      if (!scroller || event.button !== 0) return;
      if ((event.target as HTMLElement | null)?.closest("button")) return;

      dragRef.current = {
        active: true,
        startX: event.clientX,
        startScroll: scroller.scrollLeft,
        moved: false,
        pointerId: event.pointerId,
      };
      scroller.setPointerCapture(event.pointerId);
      scroller.classList.add("approach-scroll-dragging");
    },
    [],
  );

  const onPointerMove = useCallback(
    (event: ReactPointerEvent<HTMLDivElement>) => {
      const scroller = scrollerRef.current;
      const drag = dragRef.current;
      if (!scroller || !drag.active) return;

      const delta = event.clientX - drag.startX;
      if (Math.abs(delta) > 4) drag.moved = true;
      scroller.scrollLeft = drag.startScroll - delta;
      syncAdvanceState();
    },
    [syncAdvanceState],
  );

  const endDrag = useCallback((event: ReactPointerEvent<HTMLDivElement>) => {
    const scroller = scrollerRef.current;
    const drag = dragRef.current;
    if (!scroller || !drag.active) return;

    drag.active = false;
    scroller.classList.remove("approach-scroll-dragging");
    try {
      if (drag.pointerId !== null) {
        scroller.releasePointerCapture(drag.pointerId);
      }
    } catch {
      // Pointer may already be released.
    }
    drag.pointerId = null;
  }, []);

  useEffect(() => {
    const scroller = scrollerRef.current;
    if (!scroller) return;

    const markInteracted = () => {
      userInteractedRef.current = true;
    };

    const lockStart = () => {
      if (!userInteractedRef.current) scroller.scrollLeft = 0;
      syncAdvanceState();
    };

    // Hash/scrollIntoView can nudge nested overflow; reassert the offset start.
    lockStart();
    const raf = requestAnimationFrame(lockStart);
    const t1 = window.setTimeout(lockStart, 50);
    const t2 = window.setTimeout(lockStart, 200);

    const onScroll = () => syncAdvanceState();
    const onWheel = (event: WheelEvent) => {
      markInteracted();
      const dominant =
        Math.abs(event.deltaX) > Math.abs(event.deltaY)
          ? event.deltaX
          : event.deltaY;
      if (dominant === 0) return;

      const maxScroll = scroller.scrollWidth - scroller.clientWidth;
      if (maxScroll <= 0) return;

      const next = Math.max(
        0,
        Math.min(maxScroll, scroller.scrollLeft + dominant),
      );
      if (next !== scroller.scrollLeft) {
        event.preventDefault();
        scroller.scrollLeft = next;
      }
    };

    scroller.addEventListener("pointerdown", markInteracted, { passive: true });
    scroller.addEventListener("scroll", onScroll, { passive: true });
    scroller.addEventListener("wheel", onWheel, { passive: false });
    window.addEventListener("resize", syncAdvanceState);

    return () => {
      cancelAnimationFrame(raf);
      window.clearTimeout(t1);
      window.clearTimeout(t2);
      scroller.removeEventListener("pointerdown", markInteracted);
      scroller.removeEventListener("scroll", onScroll);
      scroller.removeEventListener("wheel", onWheel);
      window.removeEventListener("resize", syncAdvanceState);
    };
  }, [syncAdvanceState]);

  return (
    <section
      id="approach"
      className="approach-section scroll-mt-24 overflow-hidden bg-[#f5f4ef] pt-16 pb-20 text-[#0b1220] lg:pt-24 lg:pb-28"
    >
      <div className="relative z-10 mx-auto w-full max-w-7xl px-6 lg:px-10">
        <div className="max-w-5xl">
          <h2 className="max-w-3xl text-4xl leading-[1.08] font-semibold tracking-tight text-[#0b1220] sm:text-5xl lg:text-6xl">
            Clear thinking.{" "}
            <span className="text-[#2d6a4f]">Practical action.</span>
          </h2>
          <p className="mt-5 max-w-3xl text-lg leading-relaxed text-stone-600 sm:text-xl">
            Every engagement is shaped around the decision or outcome the client
            needs to reach. The work is practical, focused and designed to
            create clarity quickly.
          </p>

          <div className="mt-8 flex flex-wrap items-center gap-5">
            <a
              href="#contact"
              className="services-cta-pulse inline-flex rounded-full border border-[#0b1220]/55 px-6 py-3 text-sm font-semibold text-[#0b1220] transition hover:border-[#0b1220] hover:bg-[#0b1220]/10"
            >
              Talk to us
            </a>
            <a
              href="/home/services"
              className="group inline-flex items-center gap-1 text-sm font-semibold text-[#0b1220] transition hover:text-[#2d6a4f]"
            >
              View our services
              <span
                aria-hidden="true"
                className="transition group-hover:translate-x-0.5"
              >
                ›
              </span>
            </a>
          </div>
        </div>
      </div>

      <div className="relative z-10 mt-12 sm:mt-14 lg:mt-16">
        <div
          ref={scrollerRef}
          className="approach-scroll-strip relative w-full touch-pan-x overflow-x-auto overscroll-x-contain overflow-anchor-none"
          aria-label="Process steps"
          onPointerDown={onPointerDown}
          onPointerMove={onPointerMove}
          onPointerUp={endDrag}
          onPointerCancel={endDrag}
        >
          <div className="flex w-max items-stretch gap-5 pl-[8%] pr-8 sm:gap-6 sm:pl-[10%] sm:pr-10 lg:gap-7 lg:pl-[12%] lg:pr-14">
            <button
              type="button"
              onClick={() => {
                scrollToLastCard();
              }}
              disabled={!canAdvance}
              aria-label="Show the final process step"
              className="approach-scroll-cta my-auto mr-3 flex h-12 w-12 shrink-0 items-center justify-center self-center rounded-full border border-[#0b1220]/45 bg-[#0b1220]/5 text-xl text-[#0b1220] transition hover:border-[#0b1220] hover:bg-[#0b1220]/10 disabled:cursor-default disabled:opacity-35 sm:mr-4 sm:h-14 sm:w-14 sm:text-2xl lg:h-16 lg:w-16 lg:text-3xl"
            >
              <span aria-hidden="true">→</span>
            </button>

            {processSteps.map((step, index) => (
              <ProcessCard
                key={step.title}
                step={step}
                index={index}
                cardRef={
                  index === processSteps.length - 1
                    ? (node) => {
                        lastCardRef.current = node;
                      }
                    : undefined
                }
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
