"use client";

import Image from "next/image";
import { useEffect, useRef } from "react";

const ACCENT = "#99f2c8";
const ACCENT_BASE = "rgba(153, 242, 200, 0.88)";
/** Gap between the logo’s right edge and where connectors begin */
const HUB_LINE_GAP = 28;

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
      // Start connectors slightly away from the logo, not flush against it
      const startX = hr.right - wr.left + HUB_LINE_GAP;
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
      className="relative z-10 flex h-full w-full items-center justify-between gap-8 overflow-hidden px-7 py-8 sm:gap-10 sm:px-10 sm:py-10"
      aria-hidden="true"
    >
      <div className="pointer-events-none absolute -top-24 -left-8 h-56 w-56 rounded-full bg-[#99f2c8]/18 blur-3xl" />
      <div className="pointer-events-none absolute right-0 bottom-0 h-44 w-44 rounded-full bg-[#2d6a4f]/40 blur-3xl" />

      {/* SureClear logo hub — light mark for the dark panel */}
      <div
        ref={hubRef}
        className="relative z-10 flex shrink-0 items-center justify-center px-1 py-2"
      >
        <Image
          src="/sureclear-logo-light.png"
          alt=""
          width={1557}
          height={300}
          className="h-10 w-auto sm:h-12 lg:h-14"
          priority={false}
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
