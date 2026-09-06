export function ContactCta() {
  return (
    <section id="contact" className="scroll-mt-24 bg-[#f7f8fa] py-20 lg:py-28">
      <div className="mx-auto max-w-6xl px-6">
        <div className="overflow-hidden rounded-3xl bg-[#0b1220] px-8 py-14 text-white shadow-xl shadow-slate-900/10 sm:px-12">
          <div className="max-w-2xl">
            <p className="text-xs font-semibold tracking-[0.28em] text-teal-300 uppercase">
              Next step
            </p>
            <h2 className="mt-4 text-3xl font-semibold tracking-tight sm:text-4xl">
              Ready to bring clearer thinking to clearing?
            </h2>
            <p className="mt-4 text-lg text-slate-300">
              Tell us about the decision, programme or operational challenge in
              front of you. We will respond with a focused conversation — not a
              generic pitch.
            </p>
            <a
              href="mailto:hello@sureclear.com"
              className="mt-8 inline-flex rounded-full bg-teal-400 px-6 py-3 text-sm font-semibold text-[#0b1220] transition hover:bg-teal-300"
            >
              Email hello@sureclear.com
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
