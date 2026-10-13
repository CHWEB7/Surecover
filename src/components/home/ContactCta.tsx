type ContactCtaProps = {
  /** About page “card 4” — site green gradient treatment */
  variant?: "default" | "brand";
};

export function ContactCta({ variant = "default" }: ContactCtaProps) {
  const isBrand = variant === "brand";

  return (
    <section
      id="contact"
      className={`scroll-mt-24 -mt-6 w-full lg:-mt-8 ${
        isBrand ? "contact-cta-brand" : "bg-[#f5f4ef]"
      }`}
    >
      <div className="relative overflow-hidden px-6 pt-8 pb-24 sm:pt-10 sm:pb-28 lg:pt-12 lg:pb-32">
        {isBrand ? (
          <>
            <div
              aria-hidden
              className="pointer-events-none absolute inset-0"
              style={{
                backgroundImage:
                  "linear-gradient(145deg, #0b1220 0%, #1f4037 48%, #2d6a4f 100%)",
              }}
            />
            <div
              aria-hidden
              className="pointer-events-none absolute inset-0 opacity-40"
              style={{
                backgroundImage:
                  "radial-gradient(circle at 18% 20%, rgba(153,242,200,0.35), transparent 42%), radial-gradient(circle at 82% 75%, rgba(255,255,255,0.14), transparent 40%)",
              }}
            />
          </>
        ) : (
          <>
            <div
              aria-hidden
              className="pointer-events-none absolute -left-24 top-20 h-64 w-64 rounded-full bg-[#99f2c8]/10 blur-3xl"
            />
            <div
              aria-hidden
              className="pointer-events-none absolute -right-20 bottom-0 h-72 w-72 rounded-full bg-[#2d6a4f]/06 blur-3xl"
            />
          </>
        )}

        <div className="relative mx-auto max-w-3xl text-center">
          <h2
            className={`text-4xl leading-[1.08] font-semibold tracking-tight text-balance sm:text-5xl lg:text-6xl ${
              isBrand ? "text-white" : "text-[#0b1220]"
            }`}
          >
            Ready to bring clearer thinking to clearing?
          </h2>
          <p
            className={`mx-auto mt-5 max-w-2xl text-lg leading-relaxed sm:text-xl ${
              isBrand ? "text-white/75" : "text-[#0b1220]/70"
            }`}
          >
            Tell us about the decision, programme or operational challenge in
            front of you. We will respond with a focused conversation — not a
            generic pitch.
          </p>

          <div className="mt-10 flex flex-wrap items-center justify-center gap-4 sm:gap-5">
            <a
              href="/contact"
              className={
                isBrand
                  ? "contact-cta-pulse inline-flex rounded-full border border-white/70 px-6 py-3.5 text-sm font-semibold text-white transition hover:border-white hover:bg-white/10"
                  : "services-cta-pulse inline-flex rounded-full border border-[#0b1220]/55 px-6 py-3.5 text-sm font-semibold text-[#0b1220] transition hover:border-[#0b1220] hover:bg-[#0b1220]/10"
              }
            >
              Get in touch
            </a>
            <a
              href="mailto:hello@sureclear.com"
              className={`inline-flex items-center gap-1 text-sm font-semibold transition ${
                isBrand
                  ? "text-[#99f2c8] hover:text-white"
                  : "text-[#1f4037] hover:text-[#2d6a4f]"
              }`}
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
