export function ContactCta() {
  return (
    <section id="contact" className="scroll-mt-24 -mt-6 w-full bg-[#f5f4ef] lg:-mt-8">
      <div className="relative overflow-hidden px-6 pt-8 pb-24 sm:pt-10 sm:pb-28 lg:pt-12 lg:pb-32">
        <div
          aria-hidden
          className="pointer-events-none absolute -left-24 top-20 h-64 w-64 rounded-full bg-[#99f2c8]/10 blur-3xl"
        />
        <div
          aria-hidden
          className="pointer-events-none absolute -right-20 bottom-0 h-72 w-72 rounded-full bg-[#2d6a4f]/06 blur-3xl"
        />

        <div className="relative mx-auto max-w-3xl text-center">
          <h2 className="text-4xl leading-[1.08] font-semibold tracking-tight text-balance text-[#0b1220] sm:text-5xl lg:text-6xl">
            Ready to bring clearer thinking to clearing?
          </h2>
          <p className="mx-auto mt-5 max-w-2xl text-lg leading-relaxed text-[#0b1220]/70 sm:text-xl">
            Tell us about the decision, programme or operational challenge in
            front of you. We will respond with a focused conversation — not a
            generic pitch.
          </p>

          <div className="mt-10 flex flex-wrap items-center justify-center gap-4 sm:gap-5">
            <a
              href="/contact"
              className="inline-flex rounded-lg bg-[#0b1220] px-6 py-3.5 text-sm font-semibold text-white transition hover:bg-[#14201a]"
            >
              Get in touch
            </a>
            <a
              href="mailto:hello@sureclear.com"
              className="inline-flex items-center gap-1 text-sm font-semibold text-[#1f4037] transition hover:text-[#2d6a4f]"
            >
              Or email hello@sureclear.com
              <span aria-hidden="true">›</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
