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
  transformation: "linear-gradient(155deg, #0b1220 0%, #14261f 42%, #1f4037 100%)",
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
  const traces = [
    "M -20 40 H 70 Q 82 40 82 52 V 110 Q 82 122 94 122 H 180",
    "M 20 -10 V 70 Q 20 82 32 82 H 120 Q 132 82 132 94 V 210",
    "M -10 150 H 55 Q 68 150 68 138 V 90 Q 68 78 80 78 H 210",
    "M 160 -15 V 48 Q 160 60 148 60 H 95 Q 83 60 83 72 V 160 Q 83 172 95 172 H 220",
    "M 40 210 V 130 Q 40 118 52 118 H 145 Q 157 118 157 106 V 30",
    "M 200 100 H 140 Q 128 100 128 112 V 175 Q 128 187 140 187 H 90",
    "M 10 20 H 100 Q 112 20 112 32 V 85",
    "M 175 200 V 140 Q 175 128 163 128 H 110",
  ];

  const nodes = [
    { x: 82, y: 52 },
    { x: 94, y: 122 },
    { x: 32, y: 82 },
    { x: 132, y: 94 },
    { x: 68, y: 138 },
    { x: 80, y: 78 },
    { x: 148, y: 60 },
    { x: 83, y: 72 },
    { x: 95, y: 172 },
    { x: 52, y: 118 },
    { x: 157, y: 106 },
    { x: 128, y: 112 },
    { x: 112, y: 32 },
    { x: 163, y: 128 },
    { x: 55, y: 150 },
    { x: 145, y: 118 },
  ];

  const clusters = [
    { x: 118, y: 48 },
    { x: 48, y: 98 },
    { x: 150, y: 148 },
    { x: 95, y: 95 },
  ];

  return (
    <div className="relative z-10 h-full w-full overflow-hidden" aria-hidden="true">
      <div className="pointer-events-none absolute -top-16 -left-10 h-56 w-56 rounded-full bg-[#99f2c8]/25 blur-3xl" />
      <div className="pointer-events-none absolute top-10 right-0 h-40 w-40 rounded-full bg-[#2d6a4f]/45 blur-3xl" />
      <div className="pointer-events-none absolute -right-8 bottom-0 h-48 w-48 rounded-full bg-[#52b788]/20 blur-3xl" />

      <svg
        viewBox="0 0 200 200"
        preserveAspectRatio="xMidYMid slice"
        className="transform-circuit absolute inset-0 h-[130%] w-[130%] -translate-x-[8%] -translate-y-[12%] rotate-[-8deg]"
      >
        <defs>
          <linearGradient id="transform-trace" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#1f4037" stopOpacity="0.35" />
            <stop offset="45%" stopColor="#52b788" stopOpacity="0.85" />
            <stop offset="100%" stopColor="#99f2c8" stopOpacity="0.95" />
          </linearGradient>
          <linearGradient id="transform-trace-soft" x1="0%" y1="100%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#0b1220" stopOpacity="0.2" />
            <stop offset="100%" stopColor="#2d6a4f" stopOpacity="0.55" />
          </linearGradient>
          <filter id="transform-glow" x="-40%" y="-40%" width="180%" height="180%">
            <feGaussianBlur stdDeviation="1.6" result="blur" />
            <feMerge>
              <feMergeNode in="blur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
        </defs>

        {/* Soft background grid */}
        {Array.from({ length: 10 }).map((_, i) => (
          <line
            key={`h-${i}`}
            x1="-20"
            y1={i * 24}
            x2="220"
            y2={i * 24}
            stroke="rgba(153,242,200,0.08)"
            strokeWidth="0.6"
          />
        ))}
        {Array.from({ length: 10 }).map((_, i) => (
          <line
            key={`v-${i}`}
            x1={i * 24}
            y1="-20"
            x2={i * 24}
            y2="220"
            stroke="rgba(153,242,200,0.06)"
            strokeWidth="0.6"
          />
        ))}

        {traces.map((d, index) => (
          <g key={`trace-${index}`}>
            <path
              d={d}
              fill="none"
              stroke="url(#transform-trace-soft)"
              strokeWidth={index % 2 === 0 ? 4.5 : 3.2}
              strokeLinecap="round"
              strokeLinejoin="round"
              opacity="0.7"
            />
            <path
              d={d}
              className="transform-circuit-flow"
              fill="none"
              stroke="url(#transform-trace)"
              strokeWidth={index % 2 === 0 ? 3.2 : 2.2}
              strokeLinecap="round"
              strokeLinejoin="round"
              filter="url(#transform-glow)"
              style={{ animationDelay: `${index * 0.35}s` }}
            />
          </g>
        ))}

        {nodes.map((node, index) => (
          <g key={`node-${index}`}>
            <circle
              cx={node.x}
              cy={node.y}
              r="5.5"
              className="transform-circuit-node"
              fill="rgba(15,31,26,0.55)"
              stroke="rgba(153,242,200,0.9)"
              strokeWidth="1.2"
              style={{ animationDelay: `${(index % 6) * 0.28}s` }}
            />
            <circle
              cx={node.x}
              cy={node.y}
              r="2.2"
              fill="#99f2c8"
              opacity="0.95"
            />
          </g>
        ))}

        {clusters.map((cluster, index) => (
          <g
            key={`cluster-${index}`}
            transform={`translate(${cluster.x} ${cluster.y})`}
            className="transform-circuit-cluster"
            style={{ animationDelay: `${index * 0.45}s` }}
          >
            {[0, 1, 2].map((row) =>
              [0, 1].map((col) => (
                <rect
                  key={`${row}-${col}`}
                  x={col * 7}
                  y={row * 6}
                  width="4.5"
                  height="3.5"
                  rx="1"
                  fill={
                    (row + col) % 2 === 0
                      ? "rgba(153,242,200,0.85)"
                      : "rgba(45,106,79,0.9)"
                  }
                />
              )),
            )}
          </g>
        ))}
      </svg>
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
