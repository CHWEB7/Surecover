import Image from "next/image";

const INFINITY_PATH =
  "M68.86,24.67 L70.88,23.77 L72.98,23.24 L75.14,23.15 L77.34,23.55 L79.55,24.51 L81.71,26.07 L83.76,28.27 L85.64,31.11 L87.26,34.56 L88.56,38.54 L89.47,42.94 L89.94,47.62 L89.94,52.38 L89.47,57.06 L88.56,61.46 L87.26,65.44 L85.64,68.89 L83.76,71.73 L81.71,73.93 L79.55,75.49 L77.34,76.45 L75.14,76.85 L72.98,76.76 L70.88,76.23 L68.86,75.33 L66.93,74.13 L65.09,72.66 L63.35,70.98 L61.70,69.13 L60.12,67.14 L58.62,65.04 L57.19,62.85 L55.81,60.59 L54.47,58.29 L53.17,55.94 L51.89,53.58 L50.63,51.19 L49.37,48.81 L48.11,46.42 L46.83,44.06 L45.53,41.71 L44.19,39.41 L42.81,37.15 L41.38,34.96 L39.88,32.86 L38.30,30.87 L36.65,29.02 L34.91,27.34 L33.07,25.87 L31.14,24.67 L29.12,23.77 L27.02,23.24 L24.86,23.15 L22.66,23.55 L20.45,24.51 L18.29,26.07 L16.24,28.27 L14.36,31.11 L12.74,34.56 L11.44,38.54 L10.53,42.94 L10.06,47.62 L10.06,52.38 L10.53,57.06 L11.44,61.46 L12.74,65.44 L14.36,68.89 L16.24,71.73 L18.29,73.93 L20.45,75.49 L22.66,76.45 L24.86,76.85 L27.02,76.76 L29.12,76.23 L31.14,75.33 L33.07,74.13 L34.91,72.66 L36.65,70.98 L38.30,69.13 L39.88,67.14 L41.38,65.04 L42.81,62.85 L44.19,60.59 L45.53,58.29 L46.83,55.94 L48.11,53.58 L49.37,51.19 L50.63,48.81 L51.89,46.42 L53.17,44.06 L54.47,41.71 L55.81,39.41 L57.19,37.15 L58.62,34.96 L60.12,32.86 L61.70,30.87 L63.35,29.02 L65.09,27.34 L66.93,25.87 L68.86,24.67 Z";

// Number of stacked, staggered segments that form the fading comet trail.
const TRAIL_SEGMENTS = 14;

// Extra flickering, jittering segments at the end of the tail (glitch effect).
const GLITCH_SEGMENTS = 6;

export default function Home() {
  return (
    <main className="flex min-h-dvh flex-col items-center justify-center gap-10 bg-[#f5f4ef] px-6 text-center">
      <p className="text-xs font-medium uppercase tracking-[0.35em] text-neutral-500 sm:text-sm">
        New website under development
      </p>

      <svg
        className="infinity-logo h-auto w-40 sm:w-52"
        viewBox="0 0 100 100"
        fill="none"
        role="img"
        aria-label="Animated infinity loop logo"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <linearGradient
            id="infinity-gradient"
            gradientUnits="userSpaceOnUse"
            x1="8"
            y1="50"
            x2="92"
            y2="50"
          >
            <stop offset="0" stopColor="#8bdeda" />
            <stop offset="0.25" stopColor="#43add0" />
            <stop offset="0.5" stopColor="#998ee0" />
            <stop offset="0.75" stopColor="#e17dc2" />
            <stop offset="1" stopColor="#ef9393" />
          </linearGradient>
        </defs>

        {/* Scale about the centre to widen and vertically compress the mark. */}
        <g transform="translate(50 50) scale(1.14 0.66) translate(-50 -50)">
          <path
            d={INFINITY_PATH}
            stroke="url(#infinity-gradient)"
            strokeWidth="6"
            strokeLinecap="round"
            strokeLinejoin="round"
            opacity={0.18}
          />

        {Array.from({ length: TRAIL_SEGMENTS }).map((_, i) => (
          <path
            key={i}
            className="infinity-runner"
            d={INFINITY_PATH}
            pathLength={100}
            stroke="url(#infinity-gradient)"
            strokeWidth="6"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeDasharray="4 96"
            style={{
              opacity: (i + 1) / TRAIL_SEGMENTS,
              animationDelay: `${(-(i * 0.038)).toFixed(3)}s`,
            }}
          />
        ))}

        {Array.from({ length: GLITCH_SEGMENTS }).map((_, i) => (
          <path
            key={`glitch-${i}`}
            className="infinity-glitch"
            d={INFINITY_PATH}
            pathLength={100}
            stroke="url(#infinity-gradient)"
            strokeWidth="6"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeDasharray="2.5 97.5"
            style={{
              // First delay positions the ghost just behind the tail tip;
              // second delay desyncs each segment's flicker.
              animationDelay: `${(0.03 + i * 0.024).toFixed(3)}s, ${(-(i * 0.11)).toFixed(3)}s`,
            }}
          />
        ))}
        </g>
      </svg>

      <div className="flex items-center gap-2">
        <Image
          src="/foxlead.png"
          alt="Foxlead logo"
          width={24}
          height={24}
          className="h-6 w-6 shrink-0"
          priority
        />
        <span className="text-sm font-semibold uppercase tracking-[0.25em] text-neutral-800">
          Foxlead
        </span>
      </div>
    </main>
  );
}
