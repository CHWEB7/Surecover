"use client";

import {
  useCallback,
  useEffect,
  useLayoutEffect,
  useRef,
  useState,
} from "react";

const ACCENT = "#99f2c8";

const nodes = [
  {
    id: "layers",
    icon: (
      <path
        d="M4 8.5 12 4l8 4.5L12 13 4 8.5zM4 12.5 12 17l8-4.5M4 16.5 12 21l8-4.5"
        stroke="currentColor"
        strokeWidth="1.75"
        strokeLinejoin="round"
        fill="none"
      />
    ),
  },
  {
    id: "shield",
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
    id: "spark",
    icon: (
      <path
        d="M12 3.5 13.2 9.2 18.5 12 13.2 14.8 12 20.5 10.8 14.8 5.5 12l5.3-2.8L12 3.5zM17.5 5.5l.6 1.8L20 8l-1.9.6-.6 1.9-.6-1.9L15 8l1.9-.7.6-1.8z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinejoin="round"
        fill="none"
      />
    ),
  },
  {
    id: "chip",
    icon: (
      <>
        <rect
          x="7"
          y="7"
          width="10"
          height="10"
          rx="1.5"
          stroke="currentColor"
          strokeWidth="1.75"
          fill="none"
        />
        <path
          d="M10 3.5v3.5M14 3.5v3.5M10 17v3.5M14 17v3.5M3.5 10h3.5M3.5 14h3.5M17 10h3.5M17 14h3.5"
          stroke="currentColor"
          strokeWidth="1.75"
          strokeLinecap="round"
        />
      </>
    ),
  },
  {
    id: "database",
    icon: (
      <>
        <ellipse
          cx="12"
          cy="7"
          rx="6.5"
          ry="2.5"
          stroke="currentColor"
          strokeWidth="1.75"
          fill="none"
        />
        <path
          d="M5.5 7v10c0 1.4 2.9 2.5 6.5 2.5s6.5-1.1 6.5-2.5V7"
          stroke="currentColor"
          strokeWidth="1.75"
          fill="none"
        />
        <path
          d="M5.5 12c0 1.4 2.9 2.5 6.5 2.5s6.5-1.1 6.5-2.5"
          stroke="currentColor"
          strokeWidth="1.75"
          fill="none"
        />
      </>
    ),
  },
];

type HubPoint = { x: number; y: number };

export function OperationsHubGraphic() {
  const wrapRef = useRef<HTMLDivElement>(null);
  const hubRef = useRef<HTMLDivElement>(null);
  const slotRefs = useRef<Array<HTMLDivElement | null>>([]);
  const [paths, setPaths] = useState<string[]>([]);
  const [hubPoint, setHubPoint] = useState<HubPoint | null>(null);

  const updatePaths = useCallback(() => {
    const wrap = wrapRef.current;
    const hub = hubRef.current;
    if (!wrap || !hub) return;

    const wr = wrap.getBoundingClientRect();
    const hr = hub.getBoundingClientRect();
    // Anchor on the hub’s right-middle edge (static — hub does not float)
    const startX = hr.right - wr.left;
    const startY = hr.top + hr.height / 2 - wr.top;
    setHubPoint({ x: startX, y: startY });

    const next = slotRefs.current.map((slot) => {
      if (!slot) return "";
      // Measure the static outer slot so lines stay pinned while inner boxes float
      const sr = slot.getBoundingClientRect();
      const endX = sr.left - wr.left;
      const endY = sr.top + sr.height / 2 - wr.top;
      const dx = Math.max((endX - startX) * 0.55, 28);
      return `M ${startX} ${startY} C ${startX + dx} ${startY}, ${endX - dx} ${endY}, ${endX} ${endY}`;
    });

    setPaths(next);
  }, []);

  useLayoutEffect(() => {
    updatePaths();
    const wrap = wrapRef.current;
    if (!wrap || typeof ResizeObserver === "undefined") return;

    const observer = new ResizeObserver(() => updatePaths());
    observer.observe(wrap);
    window.addEventListener("resize", updatePaths);
    return () => {
      observer.disconnect();
      window.removeEventListener("resize", updatePaths);
    };
  }, [updatePaths]);

  useEffect(() => {
    const id = window.setTimeout(updatePaths, 50);
    return () => window.clearTimeout(id);
  }, [updatePaths]);

  return (
    <div
      ref={wrapRef}
      className="relative z-10 flex h-full w-full items-center justify-between gap-8 overflow-hidden px-7 py-8 sm:gap-10 sm:px-10 sm:py-10"
      aria-hidden="true"
    >
      <div className="pointer-events-none absolute -top-24 -left-8 h-56 w-56 rounded-full bg-[#99f2c8]/18 blur-3xl" />
      <div className="pointer-events-none absolute right-0 bottom-0 h-44 w-44 rounded-full bg-[#2d6a4f]/40 blur-3xl" />

      <svg className="pointer-events-none absolute inset-0 h-full w-full overflow-visible">
        <defs>
          <filter
            id="ops-line-glow"
            x="-40%"
            y="-40%"
            width="180%"
            height="180%"
          >
            <feGaussianBlur stdDeviation="1.2" result="blur" />
            <feMerge>
              <feMergeNode in="blur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
        </defs>
        {paths.map((d, index) =>
          d ? (
            <path
              key={`ops-line-${index}`}
              d={d}
              fill="none"
              stroke={ACCENT}
              strokeWidth="1.75"
              strokeLinecap="round"
              opacity="0.92"
              filter="url(#ops-line-glow)"
            />
          ) : null,
        )}
        {hubPoint ? (
          <circle cx={hubPoint.x} cy={hubPoint.y} r="3.75" fill={ACCENT} />
        ) : null}
      </svg>

      {/* SC logo placeholder — static hub */}
      <div
        ref={hubRef}
        className="relative z-10 flex h-[5.25rem] w-[5.25rem] shrink-0 items-center justify-center rounded-[1.35rem] bg-white shadow-[0_12px_36px_rgba(0,0,0,0.28)] sm:h-28 sm:w-28 sm:rounded-[1.6rem]"
      >
        <span className="text-2xl font-bold tracking-tight text-[#0b1220] sm:text-[1.75rem]">
          SC
        </span>
      </div>

      {/* Five connected icon boxes — subtle float on the boxes only */}
      <div className="relative z-10 flex flex-col justify-center gap-3.5 sm:gap-4">
        {nodes.map((node, index) => (
          <div
            key={node.id}
            ref={(el) => {
              slotRefs.current[index] = el;
            }}
            className="flex h-12 w-12 items-center justify-center sm:h-[3.35rem] sm:w-[3.35rem]"
          >
            <div
              className="ops-node-float flex h-full w-full items-center justify-center rounded-[0.9rem] border border-[#99f2c8]/85 bg-[#0b1220]/55 text-white shadow-[0_0_18px_rgba(153,242,200,0.18)] backdrop-blur-sm sm:rounded-[1rem]"
              style={{ animationDelay: `${index * 0.28}s` }}
            >
              <svg viewBox="0 0 24 24" className="h-6 w-6" aria-hidden="true">
                {node.icon}
              </svg>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
