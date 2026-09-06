export function ContactCta() {
  return (
    <section id="contact" className="scroll-mt-24 bg-[#f5f4ef] py-20 lg:py-28">
      <div className="mx-auto max-w-6xl px-6">
        <div
          className="overflow-hidden rounded-3xl px-8 py-14 text-white shadow-xl shadow-[#1f4037]/15 sm:px-12"
          style={{
            backgroundImage:
              "linear-gradient(135deg, #1f4037 0%, #2d6a4f 55%, #52b788 100%)",
          }}
        >
          <div className="max-w-2xl">
            <p className="text-xs font-semibold tracking-[0.28em] text-[#d8f3dc] uppercase">
              Next step
            </p>
            <h2 className="mt-4 text-3xl font-semibold tracking-tight sm:text-4xl">
              Ready to bring clearer thinking to clearing?
            </h2>
            <p className="mt-4 text-lg text-white/85">
              Tell us about the decision, programme or operational challenge in
              front of you. We will respond with a focused conversation — not a
              generic pitch.
            </p>
            <a
              href="mailto:hello@sureclear.com"
              className="mt-8 inline-flex rounded-full bg-white px-6 py-3 text-sm font-semibold text-[#1f4037] transition hover:bg-[#f5f4ef]"
            >
              Email hello@sureclear.com
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
