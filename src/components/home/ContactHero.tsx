import { ContactForm } from "@/components/home/ContactForm";

function ContactLeadIcon() {
  return (
    <div
      className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-[#edf7f1] text-[#2d6a4f] sm:h-14 sm:w-14"
      aria-hidden="true"
    >
      <svg
        viewBox="0 0 24 24"
        fill="none"
        className="h-7 w-7 sm:h-8 sm:w-8"
        stroke="currentColor"
        strokeWidth="1.75"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        {/* Message / conversation mark — start with the problem by talking it through */}
        <path d="M4.5 6.75A2.25 2.25 0 0 1 6.75 4.5h10.5A2.25 2.25 0 0 1 19.5 6.75v7.5A2.25 2.25 0 0 1 17.25 16.5H9.6L5.7 19.2a.75.75 0 0 1-1.2-.6V6.75Z" />
        <path d="M8.25 9h7.5M8.25 12.25h4.5" />
      </svg>
    </div>
  );
}

export function ContactHero() {
  return (
    <section className="w-full bg-[#f5f4ef]">
      <div className="mx-auto grid min-h-[calc(100dvh-4rem)] max-w-[92rem] lg:grid-cols-2">
        {/* Left — contact information */}
        <div className="flex flex-col justify-center px-6 py-14 sm:px-10 sm:py-16 lg:px-14 lg:py-20 xl:px-20">
          <ContactLeadIcon />

          <h1 className="mt-5 max-w-xl text-4xl leading-[1.08] font-semibold tracking-tight text-[#0b1220] sm:mt-6 sm:text-5xl lg:text-[3.25rem]">
            Start with the problem.
          </h1>
          <div className="mt-5 max-w-lg space-y-4 text-lg leading-relaxed text-stone-600 sm:text-xl">
            <p>
              You do not need to know exactly what support you need before
              getting in touch.
            </p>
            <p>
              Share a few details about the decision, programme or operational
              challenge in front of you. We&apos;ll respond with a focused
              conversation — not a generic pitch.
            </p>
          </div>

          <div className="mt-10 max-w-lg rounded-2xl border border-[#e7e5df] bg-white/70 p-5 sm:p-6">
            <p className="text-sm font-semibold tracking-wide text-[#2d6a4f] uppercase">
              Prefer to contact Simon directly?
            </p>
            <p className="mt-3 text-xl font-semibold tracking-tight text-[#0b1220]">
              Simon Haggett
            </p>
            <dl className="mt-4 space-y-3 text-left">
              <div>
                <dt className="text-sm font-semibold text-[#0b1220]">Email</dt>
                <dd className="mt-1">
                  <a
                    href="mailto:simon@sureclear.co.uk"
                    className="text-base font-medium text-[#2d6a4f] underline-offset-2 hover:underline sm:text-lg"
                  >
                    simon@sureclear.co.uk
                  </a>
                </dd>
              </div>
              <div>
                <dt className="text-sm font-semibold text-[#0b1220]">Phone</dt>
                <dd className="mt-1">
                  <a
                    href="tel:+447761834938"
                    className="text-base font-medium text-[#2d6a4f] underline-offset-2 hover:underline sm:text-lg"
                  >
                    07761 834938
                  </a>
                </dd>
              </div>
              <div>
                <dt className="text-sm font-semibold text-[#0b1220]">
                  LinkedIn
                </dt>
                <dd className="mt-1">
                  <a
                    href="https://www.linkedin.com/in/simon-haggett-b370b532/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="break-all text-base font-medium text-[#2d6a4f] underline-offset-2 hover:underline sm:text-lg"
                  >
                    linkedin.com/in/simon-haggett-b370b532/
                  </a>
                </dd>
              </div>
            </dl>
          </div>
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
