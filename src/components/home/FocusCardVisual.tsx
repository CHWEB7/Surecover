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
  regulation: "linear-gradient(160deg, #2d6a4f 0%, #52b788 100%)",
  operations:
    "linear-gradient(145deg, #1f4037 0%, #2d6a4f 42%, #99f2c8 100%)",
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

function TransformationGraphic() {
  return (
    <div className="relative z-10 h-full w-full overflow-hidden" aria-hidden="true">
      {/* Fiber optic plate — hue-shifted toward brand greens */}
      <img
        src="/transformation-fibers.jpg"
        alt=""
        className="transform-fiber-image absolute inset-0 h-full w-full object-cover"
      />
      {/* Brand color wash */}
      <div className="pointer-events-none absolute inset-0 bg-[#1f4037]/35 mix-blend-multiply" />
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-[#0b1220]/55 via-[#2d6a4f]/25 to-[#99f2c8]/35 mix-blend-soft-light" />
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#0b1220]/50 via-transparent to-[#1f4037]/20" />
      <div className="pointer-events-none absolute inset-0 ring-1 ring-inset ring-white/10" />
    </div>
  );
}

function RegulationGraphic() {
  return (
    <div className="relative z-10 flex h-full w-full flex-col justify-between p-8 sm:p-10">
      <div className="relative mx-auto flex aspect-square w-full max-w-[16rem] flex-1 items-center justify-center">
        <svg
          viewBox="0 0 200 200"
          className="absolute inset-0 h-full w-full"
          aria-hidden="true"
        >
          <circle
            cx="100"
            cy="100"
            r="78"
            fill="none"
            stroke="rgba(255,255,255,0.2)"
            strokeWidth="1"
            strokeDasharray="4 6"
          />
          <circle
            cx="100"
            cy="100"
            r="58"
            fill="none"
            stroke="rgba(255,255,255,0.28)"
            strokeWidth="1.5"
          />
        </svg>
        <div className="relative z-10 flex h-28 w-28 flex-col items-center justify-center rounded-[1.75rem] border border-white/35 bg-[#1f4037]/35 text-white shadow-lg shadow-black/20 backdrop-blur-sm">
          <svg
            viewBox="0 0 24 24"
            fill="none"
            className="h-9 w-9"
            aria-hidden="true"
          >
            <path
              d="M12 3l8 3v5c0 5-3.5 8.5-8 10-4.5-1.5-8-5-8-10V6l8-3z"
              stroke="currentColor"
              strokeWidth="1.75"
              strokeLinejoin="round"
            />
            <path
              d="M9 12l2 2 4-4"
              stroke="currentColor"
              strokeWidth="1.75"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
          <span className="mt-2 text-[11px] font-semibold tracking-[0.18em] uppercase">
            Protect
          </span>
        </div>
        {[
          { label: "Obligations", style: "top-2 left-1/2 -translate-x-1/2" },
          { label: "Resilience", style: "right-0 bottom-10" },
          { label: "Franchise", style: "bottom-2 left-1/2 -translate-x-1/2" },
          { label: "Momentum", style: "top-16 left-0" },
        ].map((item) => (
          <span
            key={item.label}
            className={`absolute rounded-full border border-white/30 bg-[#1f4037]/25 px-2.5 py-1 text-[10px] font-semibold tracking-wide text-white uppercase backdrop-blur-sm ${item.style}`}
          >
            {item.label}
          </span>
        ))}
      </div>
      <p className="max-w-[16rem] text-sm text-white/85">
        Practical programmes that meet obligations without stalling the
        business.
      </p>
    </div>
  );
}

function OperationsGraphic() {
  const pillars = [
    { label: "Scale", value: "Growth ready" },
    { label: "Risk", value: "Controls tight" },
    { label: "Service", value: "Client first" },
  ];

  return (
    <div className="relative z-10 flex h-full w-full flex-col justify-between p-8 sm:p-10">
      <div className="grid grid-cols-3 gap-3 pt-2">
        {pillars.map((pillar) => (
          <div
            key={pillar.label}
            className="rounded-2xl border border-white/25 bg-[#0b1220]/25 px-3 py-5 text-center backdrop-blur-sm"
          >
            <div className="mx-auto mb-3 flex h-11 w-11 items-center justify-center rounded-full border border-white/40 bg-white/10">
              <span className="text-sm font-bold text-white">
                {pillar.label[0]}
              </span>
            </div>
            <p className="text-sm font-semibold text-white">{pillar.label}</p>
            <p className="mt-1 text-[11px] leading-snug text-white/75">
              {pillar.value}
            </p>
          </div>
        ))}
      </div>
      <div className="rounded-2xl border border-white/20 bg-white/10 px-4 py-3 backdrop-blur-sm">
        <div className="flex items-center justify-between gap-3">
          <span className="text-xs font-semibold tracking-[0.18em] text-white/70 uppercase">
            Day-to-day clearing
          </span>
          <span className="text-xs font-semibold text-white">In balance</span>
        </div>
        <div className="mt-3 h-2 overflow-hidden rounded-full bg-[#0b1220]/25">
          <div
            className="h-full rounded-full bg-white/85"
            style={{ width: "72%" }}
          />
        </div>
      </div>
      <p className="max-w-[16rem] text-sm text-white/80">
        Operations that keep growth, risk and client service aligned.
      </p>
    </div>
  );
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
