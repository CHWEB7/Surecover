export function AboutHero() {
  return (
    <section className="relative isolate w-full overflow-hidden bg-white">
      {/* Narrower tinted panel on the right (~36%) */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-y-0 right-0 hidden w-[36%] bg-[#ebe8e2] lg:block"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute inset-y-0 right-0 hidden w-[36%] bg-[radial-gradient(ellipse_at_top_right,_rgba(153,242,200,0.22),_transparent_55%)] lg:block"
      />

      <div className="relative mx-auto flex min-h-[min(34rem,72vh)] max-w-7xl flex-col justify-center px-6 py-16 sm:px-10 lg:px-10 lg:py-24">
        {/* Copy — sits in the wider white area */}
        <div className="relative z-10 max-w-md lg:max-w-lg xl:max-w-xl">
          <h1 className="text-5xl leading-[1.05] font-semibold tracking-tight text-[#0b1220] sm:text-6xl lg:text-7xl">
            About SureClear
          </h1>
          <p className="mt-5 max-w-md text-lg leading-relaxed text-stone-600 sm:text-xl">
            Behind the scenes of specialist advice for the cleared derivatives
            industry.
          </p>
        </div>

        {/* Mobile / tablet: tinted band + centered mark */}
        <div className="relative mt-12 flex justify-center rounded-3xl bg-[#ebe8e2] px-8 py-14 lg:hidden">
          <div
            className="about-mark-fill aspect-square w-full max-w-[16rem] sm:max-w-[18rem]"
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

      {/* Desktop: smaller mark straddling the split, biased onto the tinted panel */}
      <div
        className="about-mark-fill pointer-events-none absolute top-1/2 left-[70%] hidden aspect-square w-[min(22rem,28vw)] -translate-x-1/2 -translate-y-1/2 lg:block xl:w-[min(24rem,26vw)]"
        role="img"
        aria-label="SureClear mark filled with clearing network imagery"
        style={{
          backgroundImage: "url(/transformation-fibers.jpg)",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      />
    </section>
  );
}
