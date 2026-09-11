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
      title: "Clearing Strategy",
      body: "Define membership, product coverage and competitive positioning.",
      icon: (
        <>
          <path
            d="M12 3l8 4.5v9L12 21l-8-4.5v-9L12 3z"
            stroke="currentColor"
            strokeWidth="1.75"
            strokeLinejoin="round"
            fill="none"
          />
          <path
            d="M12 12l8-4.5M12 12v9M12 12L4 7.5"
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
      title: "Build scale and operating models",
      body: "Design operating models that can grow with the franchise.",
      icon: (
        <>
          <path
            d="M4 8.5 12 4l8 4.5L12 13 4 8.5zM4 12.5 12 17l8-4.5M4 16.5 12 21l8-4.5"
            stroke="currentColor"
            strokeWidth="1.75"
            strokeLinejoin="round"
            fill="none"
          />
        </>
      ),
    },
    {
      title: "Adapt to regulatory change",
      body: "Turn new obligations into practical, resilient programmes.",
      icon: (
        <>
          <path
            d="M12 3l8 3v5c0 5-3.5 8.5-8 10-4.5-1.5-8-5-8-10V6l8-3z"
            stroke="currentColor"
            strokeWidth="1.75"
            strokeLinejoin="round"
            fill="none"
          />
          <path
            d="M9.5 12l2 2 3.5-3.5"
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
      title: "Expanding into new markets",
      body: "Enter new products and geographies with a clear clearing plan.",
      icon: (
        <>
          <circle
            cx="12"
            cy="12"
            r="8"
            stroke="currentColor"
            strokeWidth="1.75"
            fill="none"
          />
          <path
            d="M4.5 12h15M12 4c2.2 2.4 3.3 5 3.3 8s-1.1 5.6-3.3 8c-2.2-2.4-3.3-5-3.3-8s1.1-5.6 3.3-8z"
            stroke="currentColor"
            strokeWidth="1.75"
            fill="none"
          />
        </>
      ),
    },
  ];

  return (
    <div className="relative z-10 flex h-full w-full flex-col justify-center p-7 sm:p-9">
      <div className="flex flex-col justify-center gap-0">
        {points.map((point, index) => (
          <div
            key={point.title}
            className="strategy-step-enter flex items-stretch gap-4"
            style={{ animationDelay: `${index * 0.45}s` }}
          >
            <div className="flex w-12 shrink-0 flex-col items-center">
              <div
                className="strategy-node-pulse flex h-11 w-11 items-center justify-center rounded-full border border-white/80 bg-[#0b1220]/40 text-white backdrop-blur-sm sm:h-12 sm:w-12"
                style={{ animationDelay: `${index * 0.45}s` }}
              >
                <svg viewBox="0 0 24 24" className="h-5 w-5 sm:h-6 sm:w-6" aria-hidden="true">
                  {point.icon}
                </svg>
              </div>
              {index < points.length - 1 && (
                <div
                  className="strategy-step-line mt-1.5 w-px flex-1 bg-gradient-to-b from-white/70 to-white/15"
                  style={{ animationDelay: `${index * 0.45 + 0.2}s` }}
                />
              )}
            </div>
            <div className="min-w-0 flex-1 pb-5 last:pb-0 sm:pb-6">
              <p className="text-base font-semibold tracking-tight text-white sm:text-lg">
                {point.title}
              </p>
              <p className="mt-1 text-sm leading-snug text-white/80 sm:text-[0.92rem]">
                {point.body}
              </p>
            </div>
          </div>
        ))}
      </div>
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

      <ul className="absolute inset-0 z-10 flex flex-col justify-center gap-4 px-8 py-10 sm:gap-5 sm:px-10 lg:px-12">
        {TRANSFORM_SERVICES.map((service, i) => (
          <li
            key={service}
            className="flex items-center gap-3.5 text-[1.08rem] font-medium leading-snug text-white sm:text-[1.18rem]"
          >
            <span
              className="transform-service-pulse relative inline-flex h-2.5 w-2.5 shrink-0 rounded-full bg-[#52b788]"
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

const FRACTIONAL_SERVICES = [
  "Operations leadership",
  "Change & Transformation leadership",
  "Programme recovery",
  "Governance",
  "Steering committee preparation",
  "Executive reporting",
] as const;

function RegulationGraphic() {
  return (
    <div className="relative z-10 h-full w-full overflow-hidden">
      <Image
        src="/regulation-network.jpg"
        alt=""
        fill
        sizes="(max-width: 1024px) 100vw, 40vw"
        className="regulation-network-image object-cover"
        priority={false}
        aria-hidden
      />
      {/* Darker wash so service list stays readable over the light network plate */}
      <div
        className="pointer-events-none absolute inset-0 bg-[#0b1220]/45 mix-blend-multiply"
        aria-hidden
      />
      <div
        className="pointer-events-none absolute inset-0 bg-gradient-to-br from-[#0b1220]/55 via-[#1f4037]/35 to-[#2d6a4f]/30"
        aria-hidden
      />
      <div
        className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#0b1220]/55 via-[#0b1220]/15 to-[#1f4037]/20"
        aria-hidden
      />
      <div
        className="pointer-events-none absolute inset-0 ring-1 ring-inset ring-white/15"
        aria-hidden
      />

      <ul className="absolute inset-0 z-10 flex flex-col justify-center gap-4 px-8 py-10 sm:gap-5 sm:px-10 lg:px-12">
        {FRACTIONAL_SERVICES.map((service, i) => (
          <li
            key={service}
            className="flex items-center gap-3.5 text-[1.08rem] font-medium leading-snug text-white sm:text-[1.18rem]"
          >
            <span
              className="transform-service-pulse relative inline-flex h-2.5 w-2.5 shrink-0 rounded-full bg-[#52b788]"
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
