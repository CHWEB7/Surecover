const INFINITY_PATH =
  "M24.3,30 C11.4,30 5,43.3 5,50 C5,56.7 11.4,70 24.3,70 C37.2,70 43.5,56.7 50,50 C56.5,43.3 62.8,30 75.7,30 C88.6,30 95,43.3 95,50 C95,56.7 88.6,70 75.7,70 C62.8,70 56.5,56.7 50,50 C43.5,43.3 37.2,30 24.3,30 Z";

export default function Home() {
  return (
    <main className="flex min-h-dvh flex-col items-center justify-center gap-10 bg-[#f5f4ef] px-6 text-center">
      <p className="text-xs font-medium uppercase tracking-[0.35em] text-neutral-500 sm:text-sm">
        New website under development
      </p>

      <svg
        className="infinity-logo h-auto w-48 sm:w-64"
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
            <stop offset="0" stopColor="#06b6d4" />
            <stop offset="0.5" stopColor="#6366f1" />
            <stop offset="1" stopColor="#a855f7" />
          </linearGradient>
        </defs>

        <path
          className="infinity-track"
          d={INFINITY_PATH}
          stroke="#e7e5e4"
          strokeWidth="9"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          className="infinity-runner"
          d={INFINITY_PATH}
          pathLength={100}
          stroke="url(#infinity-gradient)"
          strokeWidth="9"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeDasharray="32 68"
        />
      </svg>

      <p className="text-lg font-semibold uppercase tracking-[0.4em] text-neutral-800 sm:text-xl">
        CHWEB
      </p>
    </main>
  );
}
