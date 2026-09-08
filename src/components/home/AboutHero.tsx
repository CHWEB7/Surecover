export function AboutHero() {
  return (
    <section className="w-full bg-white">
      <div className="grid min-h-[min(36rem,78vh)] lg:grid-cols-2">
        {/* Copy */}
        <div className="flex items-center px-6 py-16 sm:px-10 lg:px-16 xl:px-24">
          <div className="max-w-xl">
            <h1 className="text-5xl leading-[1.05] font-semibold tracking-tight text-[#0b1220] sm:text-6xl lg:text-7xl">
              About SureClear
            </h1>
            <p className="mt-5 max-w-md text-lg leading-relaxed text-stone-600 sm:text-xl">
              Behind the scenes of specialist advice for the cleared derivatives
              industry.
            </p>
          </div>
        </div>

        {/* Visual panel — fiber image fills the brand mark */}
        <div className="relative flex items-center justify-center overflow-hidden bg-[#ebe8e2] px-8 py-16 sm:px-12 lg:px-16">
          <div
            aria-hidden
            className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_rgba(153,242,200,0.28),_transparent_55%)]"
          />

          <div
            className="about-mark-fill relative aspect-square w-full max-w-[28rem] lg:max-w-[32rem]"
            role="img"
            aria-label="SureClear mark filled with clearing network imagery"
            style={{
              backgroundImage: "url(/transformation-fibers.jpg)",
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          />
        </div>
      </div>
    </section>
  );
}
