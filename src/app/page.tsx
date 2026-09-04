const INFINITY_PATH =
  "M50,50 C50,35 35,25 25,35 C15,45 15,55 25,65 C35,75 50,65 50,50 C50,35 65,25 75,35 C85,45 85,55 75,65 C65,75 50,65 50,50 Z";

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
          strokeWidth="7"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          className="infinity-runner"
          d={INFINITY_PATH}
          pathLength={100}
          stroke="url(#infinity-gradient)"
          strokeWidth="7"
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
