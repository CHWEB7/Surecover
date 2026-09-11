import { ContactForm } from "@/components/home/ContactForm";

const iconClass = "h-5 w-5 shrink-0 text-[#0b1220]";

function ContactLeadIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      className="h-8 w-8 text-[#0b1220] sm:h-9 sm:w-9"
      stroke="currentColor"
      strokeWidth="1.75"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d="M4.5 6.75A2.25 2.25 0 0 1 6.75 4.5h10.5A2.25 2.25 0 0 1 19.5 6.75v7.5A2.25 2.25 0 0 1 17.25 16.5H9.6L5.7 19.2a.75.75 0 0 1-1.2-.6V6.75Z" />
      <path d="M8.25 9h7.5M8.25 12.25h4.5" />
    </svg>
  );
}

function EmailIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      className={iconClass}
      stroke="currentColor"
      strokeWidth="1.75"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <rect x="3.5" y="5.5" width="17" height="13" rx="2" />
      <path d="m4.5 7.5 7.5 5.5L19.5 7.5" />
    </svg>
  );
}

function PhoneIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      className={iconClass}
      stroke="currentColor"
      strokeWidth="1.75"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d="M8.2 4.75h2.3l1.1 3.3-1.45 1.05a11.5 11.5 0 0 0 5.25 5.25l1.05-1.45 3.3 1.1v2.3c0 .9-.7 1.7-1.6 1.8-7.2.75-13.25-5.3-12.5-12.5.1-.9.9-1.6 1.8-1.6Z" />
    </svg>
  );
}

function LinkedInIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      className={iconClass}
      stroke="currentColor"
      strokeWidth="1.75"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <rect x="3.5" y="3.5" width="17" height="17" rx="2" />
      <path d="M8 11v6M8 8v.01M12 17v-4.5a2.5 2.5 0 0 1 5 0V17" />
    </svg>
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
            Start with the{" "}
            <span className="text-[#1f4037]">problem</span>.
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

          <div className="mt-10 max-w-lg text-[#0b1220]">
            <p className="text-sm font-semibold tracking-wide uppercase">
              Prefer to contact Simon directly?
            </p>
            <p className="mt-3 text-xl font-semibold tracking-tight">
              Simon Haggett
            </p>
            <ul className="mt-5 space-y-3.5">
              <li>
                <a
                  href="mailto:simon@sureclear.co.uk"
                  className="inline-flex items-start gap-3 text-base transition hover:text-[#1f4037] sm:text-lg"
                >
                  <EmailIcon />
                  <span>simon@sureclear.co.uk</span>
                </a>
              </li>
              <li>
                <a
                  href="tel:+447761834938"
                  className="inline-flex items-start gap-3 text-base transition hover:text-[#1f4037] sm:text-lg"
                >
                  <PhoneIcon />
                  <span>07761 834938</span>
                </a>
              </li>
              <li>
                <a
                  href="https://www.linkedin.com/in/simon-haggett-b370b532/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-start gap-3 text-base transition hover:text-[#1f4037] sm:text-lg"
                >
                  <LinkedInIcon />
                  <span className="break-all">
                    linkedin.com/in/simon-haggett-b370b532/
                  </span>
                </a>
              </li>
            </ul>
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
