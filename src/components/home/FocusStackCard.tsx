import {
  FocusCardVisual,
  type FocusVisualVariant,
} from "@/components/home/FocusCardVisual";

type FocusStackCardProps = {
  icon: React.ReactNode;
  title: string;
  description: string;
  ctaLabel: string;
  visualVariant: FocusVisualVariant;
  /** Optional line under the title */
  tagline?: string;
  /** Optional label above left-side bullets (e.g. "Includes:") */
  includesLabel?: string;
  /** Optional left-side service / include bullets */
  bullets?: readonly string[];
  style?: React.CSSProperties;
  className?: string;
  /** When false, parent owns the elevation shadow. */
  elevated?: boolean;
};

export function FocusStackCard({
  icon,
  title,
  description,
  ctaLabel,
  visualVariant,
  tagline,
  includesLabel,
  bullets,
  style,
  className = "",
  elevated = true,
}: FocusStackCardProps) {
  const hasBullets = Boolean(bullets?.length);

  return (
    <article
      style={{
        ...style,
        ...(elevated
          ? {
              boxShadow:
                "0 10px 24px rgba(15, 31, 26, 0.12), 0 2px 6px rgba(15, 31, 26, 0.05)",
            }
          : null),
      }}
      // Keep overflow off this shell when elevated so the rounded shadow
      // isn't clipped into a square.
      className={`rounded-[1.75rem] bg-transparent ${className}`}
    >
      <div className="h-full overflow-hidden rounded-[1.75rem] border border-[#e7e5df] bg-white">
        <div className="grid h-full lg:grid-cols-2">
          <div className="flex flex-col justify-between p-8 sm:p-10 lg:p-12">
            <div>
              <div className="mb-5 flex h-14 w-14 items-center justify-center text-[#0b1220]">
                {icon}
              </div>
              <h3 className="max-w-xl text-3xl leading-[1.12] font-semibold tracking-tight text-[#0b1220] sm:text-4xl lg:text-[2.75rem]">
                {title}
              </h3>
              {tagline ? (
                <p className="mt-3 max-w-xl text-lg font-medium tracking-tight text-[#2d6a4f] sm:text-xl">
                  {tagline}
                </p>
              ) : null}
              <p
                className={`max-w-xl text-base leading-relaxed text-stone-600 sm:text-lg ${
                  hasBullets ? "mt-3" : "mt-4"
                }`}
              >
                {description}
              </p>
              {hasBullets ? (
                <div className="mt-5">
                  {includesLabel ? (
                    <p className="text-sm font-semibold tracking-tight text-[#0b1220] sm:text-[0.95rem]">
                      {includesLabel}
                    </p>
                  ) : null}
                  <ul className="mt-2.5 flex flex-col gap-2">
                    {bullets!.map((item) => (
                      <li
                        key={item}
                        className="flex items-start gap-2.5 text-[0.95rem] leading-snug text-stone-700 sm:text-base"
                      >
                        <span
                          className="mt-1.5 inline-flex h-2 w-2 shrink-0 rounded-full bg-[#52b788]"
                          aria-hidden
                        />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ) : null}
            </div>
            <a
              href="#contact"
              className="mt-8 inline-flex w-fit rounded-lg border border-[#0b1220] px-5 py-2.5 text-sm font-semibold text-[#0b1220] transition hover:bg-[#0b1220] hover:text-white"
            >
              {ctaLabel}
            </a>
          </div>

          <FocusCardVisual variant={visualVariant} />
        </div>
      </div>
    </article>
  );
}
