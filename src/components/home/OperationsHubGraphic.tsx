"use client";

import Image from "next/image";
import { useEffect, useRef } from "react";

const ACCENT = "#99f2c8";
const ACCENT_BASE = "rgba(153, 242, 200, 0.88)";

const nodes = [
  {
    // Operational risk reviews
    id: "risk-review",
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
          d="M12 8v4.5"
          stroke="currentColor"
          strokeWidth="1.75"
          strokeLinecap="round"
        />
        <circle cx="12" cy="15.5" r="1" fill="currentColor" />
      </>
    ),
  },
  {
    // Standard Operating Procedures and controls
    id: "sop-controls",
    icon: (
      <>
        <path
          d="M8 3.5h6.5L18.5 7.5V20a1.5 1.5 0 0 1-1.5 1.5H8A1.5 1.5 0 0 1 6.5 20V5A1.5 1.5 0 0 1 8 3.5z"
          stroke="currentColor"
          strokeWidth="1.75"
          strokeLinejoin="round"
          fill="none"
        />
        <path
          d="M14.5 3.5V7h3.5"
          stroke="currentColor"
          strokeWidth="1.75"
          strokeLinejoin="round"
          fill="none"
        />
        <path
          d="M9.5 12.5h5M9.5 15.5h5M9.5 9.5h2"
          stroke="currentColor"
          strokeWidth="1.75"
          strokeLinecap="round"
        />
      </>
    ),
  },
  {
    // Process optimization
    id: "process-optimize",
    icon: (
      <>
        <circle
          cx="8"
          cy="8"
          r="2.25"
          stroke="currentColor"
          strokeWidth="1.75"
          fill="none"
        />
        <circle
          cx="16"
          cy="12"
          r="2.25"
          stroke="currentColor"
          strokeWidth="1.75"
          fill="none"
        />
        <circle
          cx="8"
          cy="16"
          r="2.25"
          stroke="currentColor"
          strokeWidth="1.75"
          fill="none"
        />
        <path
          d="M10 8h3.5M10 16h3.5M13.5 8c1.5 0 2.5 1.8 2.5 4s-1 4-2.5 4"
          stroke="currentColor"
          strokeWidth="1.75"
          strokeLinecap="round"
          fill="none"
        />
      </>
    ),
  },
  {
    // Process automation
    id: "automation",
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
    // Outsourcing and Offshoring
    id: "outsourcing",
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

function curvePath(
  startX: number,
  startY: number,
  endX: number,
  endY: number,
) {
  const dx = Math.max((endX - startX) * 0.55, 28);
  return `M ${startX} ${startY} C ${startX + dx} ${startY}, ${endX - dx} ${endY}, ${endX} ${endY}`;
}

export function OperationsHubGraphic() {
  const wrapRef = useRef<HTMLDivElement>(null);
  const hubRef = useRef<HTMLDivElement>(null);
  const boxRefs = useRef<Array<HTMLDivElement | null>>([]);
  const basePathRefs = useRef<Array<SVGPathElement | null>>([]);
  const trailPathRefs = useRef<Array<SVGPathElement | null>>([]);
  const hubDotRef = useRef<SVGCircleElement | null>(null);
  const endDotRefs = useRef<Array<SVGCircleElement | null>>([]);

  useEffect(() => {
    const wrap = wrapRef.current;
    const hub = hubRef.current;
    if (!wrap || !hub) return;

    let frame = 0;
    let running = true;

    const syncPaths = () => {
      const wr = wrap.getBoundingClientRect();
      const hr = hub.getBoundingClientRect();
      // Origin is a separate anchor — not the logo — so lines never overlap it
      const startX = hr.left + hr.width / 2 - wr.left;
      const startY = hr.top + hr.height / 2 - wr.top;

      hubDotRef.current?.setAttribute("cx", String(startX));
      hubDotRef.current?.setAttribute("cy", String(startY));

      boxRefs.current.forEach((box, index) => {
        if (!box) return;
        const br = box.getBoundingClientRect();
        // Overlap the node border (SVG paints above boxes) so joins stay visible
        const endX = br.left - wr.left + 3;
        const endY = br.top + br.height / 2 - wr.top;
        const d = curvePath(startX, startY, endX, endY);

        basePathRefs.current[index]?.setAttribute("d", d);
        trailPathRefs.current[index]?.setAttribute("d", d);
        endDotRefs.current[index]?.setAttribute("cx", String(endX));
        endDotRefs.current[index]?.setAttribute("cy", String(endY));
      });
    };

    const tick = () => {
      if (!running) return;
      syncPaths();
      frame = window.requestAnimationFrame(tick);
    };

    syncPaths();
    frame = window.requestAnimationFrame(tick);

    const observer =
      typeof ResizeObserver !== "undefined"
        ? new ResizeObserver(() => syncPaths())
        : null;
    observer?.observe(wrap);
    window.addEventListener("resize", syncPaths);

    return () => {
      running = false;
      window.cancelAnimationFrame(frame);
      observer?.disconnect();
      window.removeEventListener("resize", syncPaths);
    };
  }, []);

  return (
    <div
      ref={wrapRef}
      className="relative z-10 flex h-full w-full items-center justify-between gap-10 overflow-hidden px-7 py-8 sm:gap-14 sm:px-10 sm:py-10"
      aria-hidden="true"
    >
      <div className="pointer-events-none absolute -top-24 -left-8 h-56 w-56 rounded-full bg-[#99f2c8]/18 blur-3xl" />
      <div className="pointer-events-none absolute right-0 bottom-0 h-44 w-44 rounded-full bg-[#2d6a4f]/40 blur-3xl" />

      {/* Logo sits left of the connector origin — not attached to the lines */}
      <div className="relative z-10 flex shrink-0 items-center gap-6 sm:gap-8">
        <Image
          src="/sureclear-logo-light.png"
          alt=""
          width={1557}
          height={300}
          className="h-7 w-auto sm:h-8 lg:h-9"
          priority={false}
        />
        {/* Invisible line origin — connectors start here, clear of the logo */}
        <div
          ref={hubRef}
          className="h-2 w-2 shrink-0"
          aria-hidden="true"
        />
      </div>

      {/* Five connected icon boxes — subtle float; lines track these refs */}
      <div className="relative z-[5] flex flex-col justify-center gap-3.5 sm:gap-4">
        {nodes.map((node, index) => (
          <div
            key={node.id}
            className="flex h-12 w-12 items-center justify-center sm:h-[3.35rem] sm:w-[3.35rem]"
          >
            <div
              ref={(el) => {
                boxRefs.current[index] = el;
              }}
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

      {/* Connectors above boxes so joins sit on the border */}
      <svg className="pointer-events-none absolute inset-0 z-20 h-full w-full overflow-visible">
        <defs>
          <filter
            id="ops-line-glow"
            x="-40%"
            y="-40%"
            width="180%"
            height="180%"
          >
            <feGaussianBlur stdDeviation="1.1" result="blur" />
            <feMerge>
              <feMergeNode in="blur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
          <filter
            id="ops-trail-glow"
            x="-60%"
            y="-60%"
            width="220%"
            height="220%"
          >
            <feGaussianBlur stdDeviation="2" result="blur" />
            <feMerge>
              <feMergeNode in="blur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
        </defs>

        {nodes.map((node, index) => (
          <g key={`ops-line-group-${node.id}`}>
            <path
              ref={(el) => {
                basePathRefs.current[index] = el;
              }}
              d=""
              fill="none"
              stroke={ACCENT_BASE}
              strokeWidth="2"
              strokeLinecap="round"
              filter="url(#ops-line-glow)"
            />
            <path
              ref={(el) => {
                trailPathRefs.current[index] = el;
              }}
              className="ops-line-trail"
              d=""
              fill="none"
              stroke={ACCENT}
              strokeWidth="2.75"
              strokeLinecap="round"
              filter="url(#ops-trail-glow)"
              style={{ animationDelay: `${index * 0.28}s` }}
            />
            <circle
              ref={(el) => {
                endDotRefs.current[index] = el;
              }}
              cx={0}
              cy={0}
              r="2.75"
              fill={ACCENT}
            />
          </g>
        ))}

        <circle ref={hubDotRef} cx={0} cy={0} r="3.75" fill={ACCENT} />
      </svg>
    </div>
  );
}
