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
  transformation: "linear-gradient(160deg, #14261f 0%, #1f4037 100%)",
  regulation: "linear-gradient(160deg, #2d6a4f 0%, #52b788 100%)",
  operations:
    "linear-gradient(145deg, #1f4037 0%, #2d6a4f 42%, #99f2c8 100%)",
};

function StrategyGraphic() {
  const nodes = [
    {
      id: "advise",
      x: 38,
      y: 44,
      label: "Advise",
      delay: "0s",
      placement: "top" as const,
      icon: (
        <path
          d="M5 6.5h14v9.5H12l-3.5 3V16H5V6.5z"
          stroke="currentColor"
          strokeWidth="1.75"
          strokeLinejoin="round"
          fill="none"
        />
      ),
    },
    {
      id: "strategy",
      x: 162,
      y: 44,
      label: "Strategy",
      delay: "0.35s",
      placement: "top" as const,
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
          <circle cx="12" cy="12" r="2.5" fill="currentColor" />
          <path
            d="M12 3.5v2.2M12 18.3v2.2M3.5 12h2.2M18.3 12h2.2"
            stroke="currentColor"
            strokeWidth="1.75"
            strokeLinecap="round"
          />
        </>
      ),
    },
    {
      id: "transformation",
      x: 162,
      y: 156,
      label: "Transformation",
      delay: "0.7s",
      placement: "bottom" as const,
      icon: (
        <path
          d="M4 12a8 8 0 0 1 13.66-5.66M20 4v4h-4M20 12a8 8 0 0 1-13.66 5.66M4 20v-4h4"
          stroke="currentColor"
          strokeWidth="1.75"
          strokeLinecap="round"
          strokeLinejoin="round"
          fill="none"
        />
      ),
    },
    {
      id: "risk",
      x: 38,
      y: 156,
      label: "Risk & Compliance",
      delay: "1.05s",
      placement: "bottom" as const,
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
            d="M9 12l2 2 4-4"
            stroke="currentColor"
            strokeWidth="1.75"
            strokeLinecap="round"
            strokeLinejoin="round"
            fill="none"
          />
        </>
      ),
    },
  ];

  return (
    <div className="relative z-10 flex h-full w-full flex-col justify-between gap-4 p-8 sm:p-10">
      <div className="relative mx-auto aspect-square w-full max-w-[20rem] flex-1">
        <svg
          viewBox="0 0 200 200"
          className="h-full w-full"
          aria-hidden="true"
        >
          <circle
            cx="100"
            cy="100"
            r="42"
            className="strategy-pulse-ring"
            fill="none"
            stroke="rgba(255,255,255,0.35)"
            strokeWidth="1"
          />
          <circle
            cx="100"
            cy="100"
            r="42"
            className="strategy-pulse-ring strategy-pulse-ring--delayed"
            fill="none"
            stroke="rgba(153,242,200,0.45)"
            strokeWidth="1"
          />

          {nodes.map((node, index) => (
            <g key={node.id}>
              <line
                x1="100"
                y1="100"
                x2={node.x}
                y2={node.y}
                className="strategy-link"
                style={{ animationDelay: `${index * 0.28}s` }}
                stroke="rgba(255,255,255,0.55)"
                strokeWidth="1.6"
                strokeLinecap="round"
              />
              <line
                x1="100"
                y1="100"
                x2={node.x}
                y2={node.y}
                className="strategy-link-flow"
                style={{ animationDelay: `${index * 0.45}s` }}
                stroke="rgba(255,255,255,0.95)"
                strokeWidth="2"
                strokeLinecap="round"
              />
            </g>
          ))}

          <g className="strategy-hub">
            <circle
              cx="100"
              cy="100"
              r="34"
              fill="rgba(255,255,255,0.14)"
              stroke="rgba(255,255,255,0.7)"
              strokeWidth="1.5"
            />
            <text
              x="100"
              y="106"
              textAnchor="middle"
              fill="white"
              fontSize="18"
              fontWeight="700"
            >
              SC
            </text>
          </g>
        </svg>

        <div className="pointer-events-none absolute inset-0">
          {nodes.map((node) => (
            <div
              key={node.id}
              className="absolute flex w-[7.25rem] flex-col items-center gap-2"
              style={{
                left: `${(node.x / 200) * 100}%`,
                top: `${(node.y / 200) * 100}%`,
                transform:
                  node.placement === "top"
                    ? "translate(-50%, calc(-50% - 0.15rem))"
                    : "translate(-50%, calc(-50% + 0.15rem))",
              }}
            >
              {node.placement === "top" && (
                <span
                  className="strategy-label text-center text-base font-semibold leading-tight tracking-tight text-white sm:text-lg"
                  style={{ animationDelay: node.delay }}
                >
                  {node.label}
                </span>
              )}
              <div
                className="strategy-node-pulse flex h-12 w-12 shrink-0 items-center justify-center rounded-full border border-white/80 bg-[#0b1220]/40 text-white backdrop-blur-sm"
                style={{ animationDelay: node.delay }}
              >
                <svg viewBox="0 0 24 24" className="h-6 w-6" aria-hidden="true">
                  {node.icon}
                </svg>
              </div>
              {node.placement === "bottom" && (
                <span
                  className="strategy-label text-center text-base font-semibold leading-tight tracking-tight text-white sm:text-lg"
                  style={{ animationDelay: node.delay }}
                >
                  {node.label}
                </span>
              )}
            </div>
          ))}
        </div>
      </div>
      <p className="max-w-[16rem] text-sm text-white/80">
        Clearing models shaped around how markets actually clear.
      </p>
    </div>
  );
}

function TransformationGraphic() {
  const stages = [
    { label: "Diagnose", detail: "Operating model gaps" },
    { label: "Design", detail: "Target architecture" },
    { label: "Deliver", detail: "Implementation path" },
  ];

  return (
    <div className="relative z-10 flex h-full w-full flex-col justify-between p-8 sm:p-10">
      <div className="space-y-4 pt-2">
        {stages.map((stage, index) => (
          <div key={stage.label} className="flex items-stretch gap-3">
            <div className="flex w-10 flex-col items-center">
              <div className="flex h-10 w-10 items-center justify-center rounded-full border border-[#99f2c8]/50 bg-[#0b1220]/35 text-sm font-semibold text-[#99f2c8]">
                {index + 1}
              </div>
              {index < stages.length - 1 && (
                <div className="mt-1 w-px flex-1 bg-[#99f2c8]/35" />
              )}
            </div>
            <div className="flex-1 rounded-2xl border border-white/10 bg-white/5 px-4 py-3 backdrop-blur-sm">
              <p className="text-base font-semibold text-white">{stage.label}</p>
              <p className="mt-1 text-sm text-[#99f2c8]/85">{stage.detail}</p>
            </div>
          </div>
        ))}
      </div>
      <p className="max-w-[16rem] text-sm text-white/75">
        Change programmes built to be implemented — not just diagnosed.
      </p>
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
