import Image from "next/image";

const member = {
  id: "simon",
  name: "Simon",
  role: "Founder, SureClear",
  headline: "Practitioner experience at the centre of every engagement",
  paragraphs: [
    "Simon Haggett began his career in derivatives clearing operations and progressed through senior leadership roles across SEB, Credit Suisse and FIS.",
    "He has led organisations of more than 100 professionals, managed major transformation portfolios and led global product organisations responsible for platforms supporting more than 80 CCPs and exchanges.",
    "That experience — including major industry transitions such as Brexit and regulatory change — is the foundation of SureClear.",
  ],
  points: [
    "Clearing operations, transformation and regulatory change",
    "Product leadership across platforms supporting 80+ CCPs and exchanges",
    "Commercial development and multi-million dollar change portfolios",
  ],
  image: "/simon-haggett.jpg",
  imageAlt: "Simon Haggett, Founder of SureClear",
} as const;

function CheckIcon() {
  return (
    <svg
      viewBox="0 0 20 20"
      className="mt-0.5 h-5 w-5 shrink-0 text-[#2d6a4f]"
      fill="none"
      aria-hidden="true"
    >
      <circle cx="10" cy="10" r="9" stroke="currentColor" strokeWidth="1.5" />
      <path
        d="M6 10.2l2.4 2.3L14 7.5"
        stroke="currentColor"
        strokeWidth="1.75"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function AboutTeam() {
  return (
    <section
      id="meet-the-team"
      className="scroll-mt-24 w-full border-t border-[#e7e5df] bg-white pb-20 lg:pb-28"
    >
      <div className="mx-auto max-w-7xl px-6 sm:px-10 lg:px-16 xl:px-24">
        <div className="max-w-3xl pt-14 lg:pt-20">
          <p className="text-sm font-semibold tracking-wide text-[#2d6a4f]">
            Meet the team
          </p>
          <h2 className="mt-3 text-3xl font-semibold tracking-tight text-[#0b1220] sm:text-4xl lg:text-[2.75rem]">
            Practitioners who have lived clearing, not just{" "}
            <span className="bg-[linear-gradient(135deg,#1f4037_0%,#2d6a4f_45%,#99f2c8_100%)] bg-clip-text text-transparent">
              advised on it
            </span>
          </h2>
        </div>

        <div className="mt-10 grid items-start gap-10 sm:mt-12 lg:grid-cols-[minmax(0,1.15fr)_minmax(0,0.85fr)] lg:gap-14">
          <div id={member.id}>
            <h3 className="text-3xl font-semibold tracking-tight text-[#0b1220] sm:text-4xl">
              {member.headline}
            </h3>
            <div className="mt-5 space-y-4 text-base leading-relaxed text-stone-600 sm:text-lg">
              {member.paragraphs.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
            </div>
            <ul className="mt-8 space-y-4">
              {member.points.map((point) => (
                <li
                  key={point}
                  className="flex items-start gap-3 text-base leading-snug text-[#0b1220] sm:text-[1.05rem]"
                >
                  <CheckIcon />
                  <span>{point}</span>
                </li>
              ))}
            </ul>
            <a
              href="/contact"
              className="mt-8 inline-flex rounded-lg bg-[#0b1220] px-5 py-3 text-sm font-semibold text-white transition hover:bg-[#14201a]"
            >
              Talk to Simon
            </a>
          </div>

          <div className="mx-auto w-full max-w-sm lg:mx-0 lg:ml-auto">
            <div className="relative aspect-[4/5] overflow-hidden rounded-[1.75rem] bg-[#ebe8e2] shadow-[0_18px_40px_rgba(11,18,32,0.08)]">
              <Image
                src={member.image}
                alt={member.imageAlt}
                fill
                sizes="(max-width: 1024px) min(100vw, 28rem), 26rem"
                quality={100}
                unoptimized
                className="object-cover object-[50%_18%]"
              />

              <div className="absolute inset-x-0 bottom-5 z-10 flex justify-center px-4 sm:bottom-6">
                <div className="inline-flex max-w-full items-center gap-2 rounded-full border border-[#0b1220] bg-white p-1.5 shadow-[0_8px_24px_rgba(11,18,32,0.12)] sm:gap-2.5 sm:p-1.5">
                  <span className="inline-flex shrink-0 items-center rounded-full bg-[#0b1220] px-4 py-1.5 text-sm font-medium text-white sm:px-5 sm:py-2">
                    {member.name}
                  </span>
                  <span className="pr-4 text-sm font-medium tracking-tight text-[#0b1220] sm:pr-5">
                    {member.role}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
