import Image from "next/image";

// Single open infinity stroke with round, near-circular loops whose two
// round-capped ends tuck in beside the centre crossing. A draw/erase "snake"
// travels this path (see globals.css).
const INFINITY_PATH =
  "M 47 46 C 40 69 16 67 16 51 C 16 35 40 33 50 50 C 62 70 84 68 84 52 C 84 36 62 34 53 54";

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
            x1="14"
            y1="50"
            x2="86"
            y2="50"
          >
            <stop offset="0" stopColor="#8bdeda" />
            <stop offset="0.25" stopColor="#43add0" />
            <stop offset="0.5" stopColor="#998ee0" />
            <stop offset="0.75" stopColor="#e17dc2" />
            <stop offset="1" stopColor="#ef9393" />
          </linearGradient>
        </defs>

        <path
          className="infinity-runner"
          d={INFINITY_PATH}
          pathLength={100}
          stroke="url(#infinity-gradient)"
          strokeWidth="8"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>

      <div className="flex items-center gap-2">
        <Image
          src="/foxlead.png"
          alt="Foxlead logo"
          width={32}
          height={32}
          className="h-8 w-8 shrink-0"
          priority
        />
        <span className="text-sm font-semibold uppercase tracking-[0.25em] text-neutral-800">
          Foxlead
        </span>
      </div>
    </main>
  );
}
