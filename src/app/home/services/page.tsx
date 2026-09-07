import type { Metadata } from "next";
import { SiteFooter } from "@/components/home/SiteFooter";
import { SiteHeader } from "@/components/home/SiteHeader";

export const metadata: Metadata = {
  title: "Services — Sureclear",
  description:
    "Specialist advisory across clearing strategy, transformation, regulatory change and operations.",
  robots: {
    index: false,
    follow: false,
  },
};

const services = [
  {
    title: "Clearing strategy",
    description:
      "Define clearing models, membership choices, product coverage and competitive positioning with decisions grounded in market structure — not generic frameworks.",
  },
  {
    title: "Transformation",
    description:
      "Shape and deliver change across technology, target operating models and client propositions — with outcomes that can be implemented by the teams who run the business.",
  },
  {
    title: "Regulatory change",
    description:
      "Translate regulatory requirements into practical programmes that meet obligations while preserving commercial momentum and operational resilience.",
  },
  {
    title: "Operations",
    description:
      "Strengthen day-to-day clearing operations, controls and resilience so growth does not come at the expense of risk or client service quality.",
  },
];

export default function ServicesPage() {
  return (
    <div className="flex min-h-dvh flex-col bg-[#f5f4ef] text-[#0b1220]">
      <SiteHeader />
      <main className="flex-1">
        <section className="mx-auto max-w-6xl px-6 pt-16 pb-20 lg:pt-24 lg:pb-28">
          <p className="text-xs font-semibold tracking-[0.28em] text-[#2d6a4f] uppercase">
            Services
          </p>
          <h1 className="mt-4 max-w-3xl text-4xl font-semibold tracking-tight text-[#0b1220] sm:text-5xl">
            Specialist advice across the clearing lifecycle
          </h1>
          <p className="mt-5 max-w-2xl text-lg text-stone-600">
            Sureclear helps banks, brokers, exchanges, CCPs, fintechs and new
            market participants make better decisions — from strategy through
            delivery and day-to-day operations.
          </p>

          <div className="mt-14 grid gap-5 md:grid-cols-2">
            {services.map((service) => (
              <article
                key={service.title}
                className="rounded-2xl border border-[#e7e5df] bg-white p-8 shadow-[0_10px_24px_rgba(15,31,26,0.06)]"
              >
                <h2 className="text-2xl font-semibold tracking-tight text-[#0b1220]">
                  {service.title}
                </h2>
                <p className="mt-3 text-base leading-relaxed text-stone-600">
                  {service.description}
                </p>
              </article>
            ))}
          </div>

          <div
            className="mt-14 overflow-hidden rounded-3xl px-8 py-12 text-white sm:px-12"
            style={{
              backgroundImage:
                "linear-gradient(135deg, #1f4037 0%, #2d6a4f 55%, #52b788 100%)",
            }}
          >
            <h2 className="max-w-xl text-3xl font-semibold tracking-tight">
              Talk through the decision in front of you
            </h2>
            <p className="mt-4 max-w-xl text-lg text-white/85">
              Tell us what you are working on. We will respond with a focused
              conversation — not a generic pitch.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <a
                href="mailto:hello@sureclear.com"
                className="inline-flex rounded-full bg-white px-6 py-3 text-sm font-semibold text-[#1f4037] transition hover:bg-[#f5f4ef]"
              >
                Email hello@sureclear.com
              </a>
              <a
                href="/home#focus"
                className="inline-flex rounded-full border border-white/40 px-6 py-3 text-sm font-semibold text-white transition hover:bg-white/10"
              >
                Back to focus
              </a>
            </div>
          </div>
        </section>
      </main>
      <SiteFooter />
    </div>
  );
}
