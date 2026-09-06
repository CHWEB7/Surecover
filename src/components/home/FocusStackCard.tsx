import { FocusCardVisual } from "@/components/home/FocusCardVisual";

type FocusStackCardProps = {
  icon: React.ReactNode;
  title: string;
  description: string;
  ctaLabel: string;
  visualIcons: React.ReactNode[];
  style?: React.CSSProperties;
  className?: string;
};

export function FocusStackCard({
  icon,
  title,
  description,
  ctaLabel,
  visualIcons,
  style,
  className = "",
}: FocusStackCardProps) {
  return (
    <article
      style={style}
      className={`overflow-hidden rounded-[1.5rem] border border-[#e7e5df] bg-white shadow-[0_20px_50px_rgba(31,64,55,0.12)] ${className}`}
    >
      <div className="grid lg:grid-cols-2">
        <div className="flex flex-col justify-between p-8 sm:p-10 lg:p-12">
          <div>
            <div className="mb-5 flex h-10 w-10 items-center justify-center rounded-lg text-[#2d6a4f]">
              {icon}
            </div>
            <h3 className="max-w-md text-2xl leading-tight font-semibold tracking-tight text-[#0b1220] sm:text-3xl">
              {title}
            </h3>
            <p className="mt-4 max-w-md text-base leading-relaxed text-stone-600">
              {description}
            </p>
          </div>
          <a
            href="#contact"
            className="mt-8 inline-flex w-fit rounded-lg border border-[#0b1220] px-4 py-2.5 text-sm font-semibold text-[#0b1220] transition hover:bg-[#0b1220] hover:text-white"
          >
            {ctaLabel}
          </a>
        </div>

        <FocusCardVisual icons={visualIcons} />
      </div>
    </article>
  );
}
