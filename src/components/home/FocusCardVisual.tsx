type FocusCardVisualProps = {
  icons: React.ReactNode[];
};

export function FocusCardVisual({ icons }: FocusCardVisualProps) {
  const positions = [8, 28, 48, 68, 88];

  return (
    <div
      className="relative flex h-full min-h-[280px] items-center justify-center overflow-hidden lg:min-h-full"
      style={{
        backgroundImage:
          "radial-gradient(ellipse at 30% 20%, rgba(153,242,200,0.22), transparent 55%), linear-gradient(145deg, #0f1f1a 0%, #1f4037 45%, #14261f 100%)",
      }}
    >
      <svg
        className="absolute inset-0 h-full w-full"
        viewBox="0 0 100 100"
        preserveAspectRatio="none"
        aria-hidden="true"
      >
        {positions.map((y, i) => (
          <path
            key={y}
            d={`M 38 50 C 52 ${50 + (y - 50) * 0.15}, 62 ${y}, 78 ${y}`}
            fill="none"
            stroke="#99f2c8"
            strokeWidth="0.45"
            opacity={0.55 + i * 0.05}
          />
        ))}
        <circle cx="38" cy="50" r="1.2" fill="#99f2c8" />
      </svg>

      <div className="relative z-10 flex w-full max-w-md items-center justify-between gap-6 px-8 py-10 sm:px-10">
        <div className="flex h-16 w-16 shrink-0 items-center justify-center rounded-2xl bg-white shadow-lg shadow-black/20">
          <span className="text-lg font-bold tracking-tight text-[#1f4037]">
            SC
          </span>
        </div>

        <div className="flex flex-col gap-3">
          {icons.slice(0, 5).map((icon, index) => (
            <div
              key={index}
              className="flex h-11 w-11 items-center justify-center rounded-xl border border-[#99f2c8]/35 bg-[#0b1220]/55 text-[#99f2c8] shadow-md shadow-black/20 backdrop-blur-sm"
            >
              {icon}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
