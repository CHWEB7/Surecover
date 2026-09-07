"use client";

import { useState } from "react";

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
];

export function Approach() {
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <section
      id="approach"
      className="scroll-mt-24 bg-[#f5f4ef] py-16 lg:py-24"
    >
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <div className="overflow-hidden rounded-[1.75rem] border border-[#e7e5df] bg-white">
          <div className="grid lg:grid-cols-2">
            {/* Left — intro */}
            <div className="flex flex-col justify-center p-8 sm:p-10 lg:p-12">
              <h2 className="text-3xl font-semibold tracking-tight text-[#0b1220] sm:text-4xl">
                A clear process for complex clearing decisions
              </h2>
              <p className="mt-4 max-w-md text-base leading-relaxed text-stone-600 sm:text-lg">
                Specialist advice from practitioners who have lived clearing
                strategy, regulation and delivery — structured so each
                engagement moves from diagnosis to lasting capability.
              </p>
            </div>

            {/* Right — process dropdowns + CTAs */}
            <div className="border-t border-[#e7e5df] p-8 sm:p-10 lg:border-t-0 lg:border-l lg:p-12">
              <div className="divide-y divide-[#e7e5df] border-y border-[#e7e5df]">
                {processSteps.map((step, index) => {
                  const isOpen = openIndex === index;
                  return (
                    <div key={step.title}>
                      <button
                        type="button"
                        aria-expanded={isOpen}
                        onClick={() =>
                          setOpenIndex(isOpen ? -1 : index)
                        }
                        className="flex w-full items-center justify-between gap-4 py-4 text-left transition hover:text-[#2d6a4f]"
                      >
                        <span className="text-base font-semibold text-[#0b1220]">
                          {step.title}
                        </span>
                        <span
                          aria-hidden="true"
                          className={`flex h-7 w-7 shrink-0 items-center justify-center rounded-full border border-[#e7e5df] text-lg leading-none text-[#0b1220] transition ${
                            isOpen ? "bg-[#0b1220] text-white" : "bg-white"
                          }`}
                        >
                          {isOpen ? "−" : "+"}
                        </span>
                      </button>
                      <div
                        className={`grid transition-[grid-template-rows] duration-300 ease-out ${
                          isOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
                        }`}
                      >
                        <div className="overflow-hidden">
                          <p className="pb-4 text-sm leading-relaxed text-stone-600 sm:text-base">
                            {step.body}
                          </p>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>

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
        </div>
      </div>
    </section>
  );
}
