import { ContactForm } from "@/components/home/ContactForm";

export function ContactHero() {
  return (
    <section className="w-full bg-[#f5f4ef]">
      <div className="mx-auto grid min-h-[calc(100dvh-4rem)] max-w-[92rem] lg:grid-cols-2">
        {/* Left — contact information */}
        <div className="flex flex-col justify-center px-6 py-14 sm:px-10 sm:py-16 lg:px-14 lg:py-20 xl:px-20">
          <p className="text-sm font-semibold tracking-wide text-[#2d6a4f] uppercase">
            Contact
          </p>
          <h1 className="mt-3 max-w-xl text-4xl leading-[1.08] font-semibold tracking-tight text-[#0b1220] sm:text-5xl lg:text-[3.25rem]">
            Tell us about the clearing challenge in front of you.
          </h1>
          <p className="mt-5 max-w-lg text-lg leading-relaxed text-stone-600 sm:text-xl">
            Share a little context and we will come back with a focused
            conversation — not a generic pitch. Specialist support across
            strategy, transformation, operations and leadership.
          </p>

          <dl className="mt-10 space-y-5 text-left">
            <div>
              <dt className="text-sm font-semibold text-[#0b1220]">Email</dt>
              <dd className="mt-1">
                <a
                  href="mailto:hello@sureclear.com"
                  className="text-base font-medium text-[#2d6a4f] underline-offset-2 hover:underline sm:text-lg"
                >
                  hello@sureclear.com
                </a>
              </dd>
            </div>
            <div>
              <dt className="text-sm font-semibold text-[#0b1220]">
                Typical response
              </dt>
              <dd className="mt-1 text-base text-stone-600 sm:text-lg">
                Within one to two working days
              </dd>
            </div>
            <div>
              <dt className="text-sm font-semibold text-[#0b1220]">Focus</dt>
              <dd className="mt-1 text-base text-stone-600 sm:text-lg">
                Cleared derivatives strategy, change and operations
              </dd>
            </div>
          </dl>
        </div>

        {/* Right — green gradient + form card */}
        <div
          className="relative flex items-center justify-center overflow-hidden px-6 py-14 sm:px-10 sm:py-16 lg:px-12 lg:py-20"
          style={{
            backgroundImage:
              "linear-gradient(145deg, #1f4037 0%, #2d6a4f 42%, #99f2c8 100%)",
          }}
        >
          <div
            aria-hidden
            className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top_left,_rgba(255,255,255,0.14),_transparent_55%)]"
          />
          <div
            aria-hidden
            className="pointer-events-none absolute -right-16 -bottom-20 h-64 w-64 rounded-full bg-[#99f2c8]/35 blur-3xl"
          />
          <div className="relative w-full max-w-md">
            <ContactForm />
          </div>
        </div>
      </div>
    </section>
  );
}
