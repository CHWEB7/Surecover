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
  style,
  className = "",
  elevated = true,
}: FocusStackCardProps) {
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
              <p className="mt-4 max-w-xl text-base leading-relaxed text-stone-600 sm:text-lg">
                {description}
              </p>
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
