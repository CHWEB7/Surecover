import Image from "next/image";
import { OperationsHubGraphic } from "@/components/home/OperationsHubGraphic";

type FocusVisualVariant =
  | "strategy"
  | "transformation"
  | "regulation"
  | "operations";

type FocusCardVisualProps = {
  variant: FocusVisualVariant;
  icons?: React.ReactNode[];
};

const backgrounds: Record<FocusVisualVariant, string> = {
  // Match hero: top-left → bottom-right site gradient
  strategy:
    "linear-gradient(145deg, #1f4037 0%, #2d6a4f 42%, #99f2c8 100%)",
  transformation:
    "linear-gradient(155deg, #0b1220 0%, #14261f 48%, #1f4037 100%)",
  regulation: "linear-gradient(155deg, #2d6a4f 0%, #52b788 48%, #99f2c8 100%)",
  operations:
    "linear-gradient(155deg, #0b1220 0%, #14261f 45%, #1f4037 100%)",
};

function StrategyGraphic() {
  const points = [
    {
      title: "Error Reduction",
      body: "Catching discrepancies and mismatched instructions before money or assets move.",
      icon: (
        <>
          <circle
            cx="10.5"
            cy="10.5"
            r="6"
            stroke="currentColor"
            strokeWidth="1.75"
            fill="none"
          />
          <path
            d="M15 15l4.5 4.5M8.5 10.5l1.5 1.5 3-3"
            stroke="currentColor"
            strokeWidth="1.75"
            strokeLinecap="round"
            strokeLinejoin="round"
            fill="none"
          />
        </>
      ),
    },
    {
      title: "Liquidity Management",
      body: "Optimizing cash flow and reducing the amount of idle capital needed to back pending trades.",
      icon: (
        <>
          <circle
            cx="12"
            cy="12"
            r="7.25"
            stroke="currentColor"
            strokeWidth="1.75"
            fill="none"
          />
          <path
            d="M12 8v4l2.5 1.5"
            stroke="currentColor"
            strokeWidth="1.75"
            strokeLinecap="round"
            strokeLinejoin="round"
            fill="none"
          />
        </>
      ),
    },
    {
      title: "Regulatory Compliance",
      body: "Maintaining transparent audit trails to meet anti-money laundering (AML) and know-your-customer (KYC) standards.",
      icon: (
        <>
          <path
            d="M7 4h10v16H7z"
            stroke="currentColor"
            strokeWidth="1.75"
            strokeLinejoin="round"
            fill="none"
          />
          <path
            d="M9.5 8h5M9.5 12h5M9.5 16h3"
            stroke="currentColor"
            strokeWidth="1.75"
            strokeLinecap="round"
          />
        </>
      ),
    },
  ];

  return (
    <div className="relative z-10 flex h-full w-full flex-col justify-between p-8 sm:p-10">
      <div className="flex flex-1 flex-col justify-center gap-0 pt-1">
        {points.map((point, index) => (
          <div
            key={point.title}
            className="strategy-step-enter flex items-stretch gap-4"
            style={{ animationDelay: `${index * 0.55}s` }}
          >
            <div className="flex w-12 shrink-0 flex-col items-center">
              <div
                className="strategy-node-pulse flex h-12 w-12 items-center justify-center rounded-full border border-white/80 bg-[#0b1220]/40 text-white backdrop-blur-sm"
                style={{ animationDelay: `${index * 0.55}s` }}
              >
                <svg viewBox="0 0 24 24" className="h-6 w-6" aria-hidden="true">
                  {point.icon}
                </svg>
              </div>
              {index < points.length - 1 && (
                <div
                  className="strategy-step-line mt-2 w-px flex-1 bg-gradient-to-b from-white/70 to-white/15"
                  style={{ animationDelay: `${index * 0.55 + 0.25}s` }}
                />
              )}
            </div>
            <div className="min-w-0 flex-1 pb-7 last:pb-0">
              <p className="text-lg font-semibold tracking-tight text-white sm:text-xl">
                {point.title}
              </p>
              <p className="mt-1.5 text-sm leading-relaxed text-white/80 sm:text-[0.95rem]">
                {point.body}
              </p>
            </div>
          </div>
        ))}
      </div>
      <p className="max-w-[18rem] text-sm text-white/75">
        Clearing models shaped around how markets actually clear.
      </p>
    </div>
  );
}

const TRANSFORM_SERVICES = [
  "Roadmaps",
  "Vendor assessment and scoping",
  "RFPs",
  "Product strategy",
  "Programme Governance",
  "RAID Analysis",
  "Platform transformation",
] as const;

function TransformationGraphic() {
  return (
    <div className="relative z-10 h-full w-full overflow-hidden">
      {/* Fiber optic plate — hue-shifted + softly blurred */}
      <Image
        src="/transformation-fibers.jpg"
        alt=""
        fill
        sizes="(max-width: 1024px) 100vw, 40vw"
        className="transform-fiber-image object-cover"
        priority={false}
        aria-hidden
      />
      {/* Brand color wash — slightly stronger so service list stays readable */}
      <div
        className="pointer-events-none absolute inset-0 bg-[#1f4037]/45 mix-blend-multiply"
        aria-hidden
      />
      <div
        className="pointer-events-none absolute inset-0 bg-gradient-to-br from-[#0b1220]/60 via-[#2d6a4f]/30 to-[#99f2c8]/25 mix-blend-soft-light"
        aria-hidden
      />
      <div
        className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#0b1220]/55 via-[#0b1220]/20 to-[#1f4037]/25"
        aria-hidden
      />
      <div
        className="pointer-events-none absolute inset-0 ring-1 ring-inset ring-white/10"
        aria-hidden
      />

      <ul className="absolute inset-0 z-10 flex flex-col justify-center gap-3.5 px-8 py-10 sm:gap-4 sm:px-10 lg:px-12">
        {TRANSFORM_SERVICES.map((service, i) => (
          <li
            key={service}
            className="flex items-center gap-3 text-[0.95rem] font-medium leading-snug text-white sm:text-[1.02rem]"
          >
            <span
              className="transform-service-pulse relative inline-flex h-2 w-2 shrink-0 rounded-full bg-[#52b788]"
              style={{ animationDelay: `${i * 0.2}s` }}
              aria-hidden
            />
            <span className="drop-shadow-[0_1px_10px_rgba(0,0,0,0.5)]">
              {service}
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
}

function RegulationGraphic() {
  return (
    <div className="relative z-10 h-full w-full overflow-hidden" aria-hidden="true">
      <Image
        src="/regulation-network.jpg"
        alt=""
        fill
        sizes="(max-width: 1024px) 100vw, 40vw"
        className="regulation-network-image object-cover"
        priority={false}
      />
      {/* Lighter brand-green wash */}
      <div className="pointer-events-none absolute inset-0 bg-[#99f2c8]/40 mix-blend-screen" />
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-[#52b788]/30 via-[#99f2c8]/35 to-[#d8f3dc]/40 mix-blend-soft-light" />
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#2d6a4f]/25 via-transparent to-[#99f2c8]/20" />
      <div className="pointer-events-none absolute inset-0 ring-1 ring-inset ring-white/20" />
    </div>
  );
}

function OperationsGraphic() {
  return <OperationsHubGraphic />;
}

const graphics: Record<FocusVisualVariant, () => React.ReactNode> = {
  strategy: StrategyGraphic,
  transformation: TransformationGraphic,
  regulation: RegulationGraphic,
  operations: OperationsGraphic,
};

export function FocusCardVisual({ variant }: FocusCardVisualProps) {
  const Graphic = graphics[variant];

  return (
    <div
      className="relative flex h-full min-h-[320px] overflow-hidden lg:min-h-full"
      style={{ backgroundImage: backgrounds[variant] }}
    >
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top_left,_rgba(255,255,255,0.14),_transparent_55%)]"
      />
      <Graphic />
    </div>
  );
}

export type { FocusVisualVariant };
