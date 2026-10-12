"use client";

import { useCallback, useEffect, useRef, type PointerEvent as ReactPointerEvent } from "react";

const processSteps = [
  {
    title: "Diagnose the decision",
    body: "We start with the commercial, risk and operational reality — membership, product coverage, regulation, technology and operating model — so the problem is framed clearly before options are shaped.",
  },
  {
    title: "Design the path",
    body: "We translate that diagnosis into practical choices: target models, delivery plans and trade-offs that can be owned by the teams who run clearing day to day.",
  },
  {
    title: "Deliver with the business",
    body: "We stay close through implementation — aligning stakeholders, unblocking decisions and keeping outcomes tied to clearing realities rather than generic programme theatre.",
  },
  {
    title: "Embed lasting capability",
    body: "We leave clients with clearer judgement, stronger controls and a transferable playbook — so progress continues after the engagement ends.",
  },
] as const;

function ProcessCard({
  step,
  index,
}: {
  step: (typeof processSteps)[number];
  index: number;
}) {
  const number = String(index + 1).padStart(2, "0");

  return (
    <article className="approach-scroll-card flex w-[min(20.5rem,78vw)] shrink-0 snap-start flex-col rounded-2xl border border-white/10 bg-[#0b1220] p-6 sm:w-[min(22rem,42vw)] sm:p-7 lg:w-[min(23rem,28vw)]">
      <div className="flex items-start justify-between gap-4">
        <span
          className="text-4xl font-normal tracking-tight text-white sm:text-5xl"
          aria-hidden="true"
        >
          {number}
        </span>
        <span
          aria-hidden="true"
          className="mt-1 text-xl font-normal text-white/70"
        >
          →
        </span>
      </div>
      <h3 className="mt-8 text-xl font-semibold tracking-tight text-white sm:text-[1.35rem]">
        {step.title}
      </h3>
      <p className="mt-3 text-sm leading-relaxed text-white/65 sm:text-[0.95rem]">
        {step.body}
      </p>
    </article>
  );
}

export function Approach() {
  const scrollerRef = useRef<HTMLDivElement | null>(null);
  const dragRef = useRef<{
    active: boolean;
    startX: number;
    startScroll: number;
    moved: boolean;
  }>({ active: false, startX: 0, startScroll: 0, moved: false });

  const onPointerDown = useCallback((event: ReactPointerEvent<HTMLDivElement>) => {
    const scroller = scrollerRef.current;
    if (!scroller || event.button !== 0) return;

    dragRef.current = {
      active: true,
      startX: event.clientX,
      startScroll: scroller.scrollLeft,
      moved: false,
    };
    scroller.setPointerCapture(event.pointerId);
    scroller.classList.add("approach-scroll-dragging");
  }, []);

  const onPointerMove = useCallback((event: ReactPointerEvent<HTMLDivElement>) => {
    const scroller = scrollerRef.current;
    const drag = dragRef.current;
    if (!scroller || !drag.active) return;

    const delta = event.clientX - drag.startX;
    if (Math.abs(delta) > 4) drag.moved = true;
    scroller.scrollLeft = drag.startScroll - delta;
  }, []);

  const endDrag = useCallback((event: ReactPointerEvent<HTMLDivElement>) => {
    const scroller = scrollerRef.current;
    const drag = dragRef.current;
    if (!scroller || !drag.active) return;

    drag.active = false;
    scroller.classList.remove("approach-scroll-dragging");
    try {
      scroller.releasePointerCapture(event.pointerId);
    } catch {
      // Pointer may already be released.
    }
  }, []);

  useEffect(() => {
    const scroller = scrollerRef.current;
    if (!scroller) return;

    const onWheel = (event: WheelEvent) => {
      // Prefer horizontal intent; map vertical wheel to sideways scroll.
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

    scroller.addEventListener("wheel", onWheel, { passive: false });
    return () => scroller.removeEventListener("wheel", onWheel);
  }, []);

  return (
    <section
      id="approach"
      className="scroll-mt-24 overflow-hidden py-16 text-white lg:py-24"
      style={{
        backgroundImage:
          "linear-gradient(145deg, #1f4037 0%, #2d6a4f 42%, #99f2c8 100%)",
      }}
    >
      <div className="mx-auto w-full max-w-[90rem] px-5 sm:px-6 lg:px-8">
        <div className="max-w-3xl">
          <h2 className="text-3xl font-semibold tracking-tight text-white sm:text-4xl lg:text-5xl">
            A clear process for complex clearing decisions
          </h2>
          <p className="mt-4 max-w-2xl text-base leading-relaxed text-white/80 sm:text-lg">
            Specialist advice from practitioners who have lived clearing
            strategy, regulation and delivery — structured so each engagement
            moves from diagnosis to lasting capability.
          </p>

          <div className="mt-8 flex flex-wrap items-center gap-5">
            <a
              href="#contact"
              className="hero-focus-pulse inline-flex rounded-full border border-white/70 px-6 py-3 text-sm font-semibold text-white transition hover:border-white hover:bg-white/10"
            >
              Talk to us
            </a>
            <a
              href="/home/services"
              className="group inline-flex items-center gap-1 text-sm font-semibold text-white/90 transition hover:text-white"
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

      <div
        ref={scrollerRef}
        className="approach-scroll-strip relative mt-12 w-full touch-pan-x overflow-x-auto overscroll-x-contain pb-3 sm:mt-14 lg:mt-16"
        aria-label="Process steps"
        onPointerDown={onPointerDown}
        onPointerMove={onPointerMove}
        onPointerUp={endDrag}
        onPointerCancel={endDrag}
      >
        <div className="flex w-max gap-4 px-[8%] sm:gap-5 sm:px-[12%] lg:gap-6 lg:px-[14%]">
          {processSteps.map((step, index) => (
            <ProcessCard key={step.title} step={step} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
