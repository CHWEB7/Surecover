const INFINITY_PATH =
  "M42.856,34.68 A20,20 0 1,0 42.856,65.32 C51.28,58.25 48.71,41.75 57.144,34.68 A20,20 0 1,1 57.144,65.32 C48.71,58.25 51.28,41.75 42.856,34.68 Z";

// Number of stacked, staggered segments that form the fading comet trail.
const TRAIL_SEGMENTS = 14;

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
            x1="0"
            y1="50"
            x2="100"
            y2="50"
          >
            <stop offset="0" stopColor="#516b8b" />
            <stop offset="1" stopColor="#056b3b" />
          </linearGradient>
        </defs>

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
      </svg>

      <p className="text-lg font-semibold uppercase tracking-[0.4em] text-neutral-800 sm:text-xl">
        CHWEB
      </p>
    </main>
  );
}
