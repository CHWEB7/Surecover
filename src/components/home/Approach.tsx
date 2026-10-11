"use client";

import { useEffect, useRef, useState } from "react";

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
    <article className="flex w-[min(20.5rem,78vw)] shrink-0 flex-col rounded-2xl border border-white/10 bg-[#0b1220] p-6 sm:w-[min(22rem,42vw)] sm:p-7 lg:w-[min(23rem,28vw)]">
      <div className="flex items-start justify-between gap-4">
        <span
          className="text-4xl font-normal tracking-tight text-white sm:text-5xl"
          aria-hidden="true"
        >
          {number}
        </span>
        <span aria-hidden="true" className="mt-1 text-xl font-normal text-white/70">
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
  const sectionRef = useRef<HTMLElement | null>(null);
  const [reduceMotion, setReduceMotion] = useState(false);
  const [inView, setInView] = useState(false);

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

    const markVisible = () => setInView(true);
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry?.isIntersecting) markVisible();
      },
      { threshold: 0 },
    );
    observer.observe(section);

    // Start immediately if already on-screen (IO can miss the first paint).
    const rect = section.getBoundingClientRect();
    if (rect.top < window.innerHeight && rect.bottom > 0) markVisible();

    return () => observer.disconnect();
  }, []);

  const loopSteps = [...processSteps, ...processSteps];

  return (
    <section
      ref={sectionRef}
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
        className="relative mt-12 w-full overflow-hidden sm:mt-14 lg:mt-16"
        aria-label="Process steps"
      >
        {/* Offset lives outside the animated track so -50% stays seamless */}
        <div className="pl-[8%] sm:pl-[12%] lg:pl-[14%]">
          <div
            className={`approach-marquee-track flex w-max gap-4 sm:gap-5 lg:gap-6 ${
              reduceMotion
                ? ""
                : inView
                  ? "approach-marquee-running"
                  : "approach-marquee-paused"
            }`}
          >
            {(reduceMotion ? processSteps : loopSteps).map((step, index) => (
              <ProcessCard
                key={`${step.title}-${index}`}
                step={step}
                index={index % processSteps.length}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
