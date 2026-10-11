"use client";

import { useEffect, useRef, useState } from "react";

const processSteps = [
  {
    title: "Diagnose the decision",
    body: "We start with the commercial, risk and operational reality — membership, product coverage, regulation, technology and operating model — so the problem is framed clearly before options are shaped.",
    numberTone: "from-[#52b788] to-[#99f2c8]",
  },
  {
    title: "Design the path",
    body: "We translate that diagnosis into practical choices: target models, delivery plans and trade-offs that can be owned by the teams who run clearing day to day.",
    numberTone: "from-[#99f2c8] to-[#e7e5df]",
  },
  {
    title: "Deliver with the business",
    body: "We stay close through implementation — aligning stakeholders, unblocking decisions and keeping outcomes tied to clearing realities rather than generic programme theatre.",
    numberTone: "from-[#2d6a4f] to-[#52b788]",
  },
  {
    title: "Embed lasting capability",
    body: "We leave clients with clearer judgement, stronger controls and a transferable playbook — so progress continues after the engagement ends.",
    numberTone: "from-[#52b788] via-[#99f2c8] to-[#2d6a4f]",
  },
] as const;

const STEP_MS = 3200;
const INITIAL_DELAY_MS = 1100;
const TRANSITION_MS = 700;

export function Approach() {
  const sectionRef = useRef<HTMLElement | null>(null);
  const trackRef = useRef<HTMLDivElement | null>(null);
  const firstCardRef = useRef<HTMLElement | null>(null);
  const [order, setOrder] = useState(() => processSteps.map((_, i) => i));
  const [offset, setOffset] = useState(0);
  const [animating, setAnimating] = useState(false);
  const [reduceMotion, setReduceMotion] = useState(false);
  const [inView, setInView] = useState(false);
  const [stepWidth, setStepWidth] = useState(0);

  useEffect(() => {
    const media = window.matchMedia("(prefers-reduced-motion: reduce)");
    const sync = () => setReduceMotion(media.matches);
    sync();
    media.addEventListener("change", sync);
    return () => media.removeEventListener("change", sync);
  }, []);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry?.isIntersecting) setInView(true);
      },
      { threshold: 0.35 },
    );
    observer.observe(section);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const measure = () => {
      const card = firstCardRef.current;
      const track = trackRef.current;
      if (!card || !track) return;
      const styles = window.getComputedStyle(track);
      const gap = Number.parseFloat(styles.columnGap || styles.gap || "0") || 0;
      setStepWidth(card.getBoundingClientRect().width + gap);
    };

    measure();
    window.addEventListener("resize", measure);
    return () => window.removeEventListener("resize", measure);
  }, [order, reduceMotion]);

  useEffect(() => {
    if (reduceMotion || !inView || stepWidth <= 0) return;

    let advanceTimer = 0;
    let resetTimer = 0;
    let startTimer = 0;

    const advance = () => {
      setAnimating(true);
      setOffset(-stepWidth);

      resetTimer = window.setTimeout(() => {
        setAnimating(false);
        setOrder((prev) => [...prev.slice(1), prev[0]]);
        setOffset(0);
      }, TRANSITION_MS);
    };

    startTimer = window.setTimeout(() => {
      advance();
      advanceTimer = window.setInterval(advance, STEP_MS);
    }, INITIAL_DELAY_MS);

    return () => {
      window.clearTimeout(startTimer);
      window.clearTimeout(resetTimer);
      window.clearInterval(advanceTimer);
    };
  }, [reduceMotion, inView, stepWidth]);

  return (
    <section
      ref={sectionRef}
      id="approach"
      className="scroll-mt-24 overflow-hidden bg-[#0b1220] py-16 text-white lg:py-24"
    >
      <div className="mx-auto w-full max-w-[90rem] px-5 sm:px-6 lg:px-8">
        <div className="max-w-3xl">
          <h2 className="text-3xl font-semibold tracking-tight text-white sm:text-4xl lg:text-5xl">
            A clear process for complex clearing decisions
          </h2>
          <p className="mt-4 max-w-2xl text-base leading-relaxed text-white/65 sm:text-lg">
            Specialist advice from practitioners who have lived clearing
            strategy, regulation and delivery — structured so each engagement
            moves from diagnosis to lasting capability.
          </p>

          <div className="mt-8 flex flex-wrap items-center gap-5">
            <a
              href="#contact"
              className="services-cta-pulse inline-flex rounded-full border border-white/55 px-6 py-3 text-sm font-semibold text-white transition hover:border-white hover:bg-white/10"
            >
              Talk to us
            </a>
            <a
              href="/home/services"
              className="group inline-flex items-center gap-1 text-sm font-semibold text-white/85 transition hover:text-white"
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
        className="relative mt-12 w-full overflow-hidden sm:mt-14 lg:mt-16"
        aria-label="Process steps"
      >
        <div
          ref={trackRef}
          className={`flex gap-4 pl-[8%] sm:gap-5 sm:pl-[12%] lg:gap-6 lg:pl-[14%] ${
            animating
              ? "transition-transform duration-700 ease-[cubic-bezier(0.22,1,0.36,1)]"
              : ""
          }`}
          style={{ transform: `translate3d(${offset}px, 0, 0)` }}
        >
          {(reduceMotion ? processSteps.map((_, i) => i) : order).map(
            (stepIndex, visualIndex) => {
              const step = processSteps[stepIndex];
              const number = String(stepIndex + 1).padStart(2, "0");
              return (
                <article
                  key={step.title}
                  ref={visualIndex === 0 ? firstCardRef : undefined}
                  className="flex w-[min(20.5rem,78vw)] shrink-0 flex-col rounded-2xl border border-white/12 bg-[#14201a] p-6 sm:w-[min(22rem,42vw)] sm:p-7 lg:w-[min(23rem,28vw)]"
                >
                  <div className="flex items-start justify-between gap-4">
                    <span
                      className={`bg-gradient-to-br ${step.numberTone} bg-clip-text text-4xl font-semibold tracking-tight text-transparent sm:text-5xl`}
                      aria-hidden="true"
                    >
                      {number}
                    </span>
                    <span
                      aria-hidden="true"
                      className="mt-1 text-xl text-white/70"
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
            },
          )}
        </div>
      </div>
    </section>
  );
}
