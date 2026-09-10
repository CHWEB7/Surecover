import { ContactForm } from "@/components/home/ContactForm";

export function ContactCta() {
  return (
    <section
      id="contact"
      className="scroll-mt-24 w-full"
      style={{
        backgroundImage:
          "linear-gradient(145deg, #1f4037 0%, #2d6a4f 42%, #99f2c8 100%)",
      }}
    >
      <div className="relative overflow-hidden px-6 py-24 sm:py-28 lg:py-32">
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top_left,_rgba(255,255,255,0.14),_transparent_55%)]"
        />
        <div
          aria-hidden
          className="pointer-events-none absolute -right-24 -bottom-32 h-80 w-80 rounded-full bg-[#99f2c8]/30 blur-3xl"
        />

        <div className="relative mx-auto max-w-3xl text-center">
          <h2 className="text-4xl leading-[1.08] font-semibold tracking-tight text-balance text-white sm:text-5xl lg:text-6xl">
            Ready to bring clearer thinking to clearing?
          </h2>
          <p className="mx-auto mt-5 max-w-2xl text-lg leading-relaxed text-white/85 sm:text-xl">
            Tell us about the decision, programme or operational challenge in
            front of you. We will respond with a focused conversation — not a
            generic pitch.
          </p>

          <div className="mx-auto mt-10 max-w-2xl text-left">
            <ContactForm />
          </div>
        </div>
      </div>
    </section>
  );
}
