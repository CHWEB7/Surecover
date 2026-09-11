import { HeroServiceCards } from "@/components/home/HeroServiceCards";

export function Hero() {
  return (
    <section className="bg-[#f5f4ef] px-3 pt-3 pb-24 sm:px-4 sm:pt-4 sm:pb-28 lg:px-5 lg:pt-5 lg:pb-32">
      <div className="relative mx-auto max-w-[92rem]">
        {/* Large gradient panel — nearly full bleed, thin off-white edge */}
        <div
          className="relative min-h-[70vh] overflow-hidden rounded-[1.75rem] px-6 pt-20 pb-36 text-white sm:rounded-[2rem] sm:px-10 sm:pt-24 sm:pb-40 lg:min-h-[75vh] lg:rounded-[2.5rem] lg:px-16 lg:pt-28 lg:pb-44"
          style={{
            backgroundImage:
              "linear-gradient(145deg, #1f4037 0%, #2d6a4f 42%, #99f2c8 100%)",
          }}
        >
          <div
            aria-hidden
            className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top_left,_rgba(255,255,255,0.12),_transparent_50%)]"
          />

          <div className="relative mx-auto max-w-5xl text-center lg:max-w-6xl">
            <h1 className="text-5xl leading-[1.05] font-semibold tracking-tight text-balance sm:text-6xl lg:text-7xl xl:text-8xl">
              Clarity for complex clearing decisions.
            </h1>
            <div className="mx-auto mt-8 grid w-full max-w-5xl grid-cols-1 items-center gap-5 sm:mt-10 sm:grid-cols-[minmax(0,1fr)_auto_minmax(0,1fr)] sm:items-stretch sm:gap-0 lg:max-w-6xl">
              <p className="text-center text-base leading-snug font-medium text-white text-pretty sm:px-6 sm:text-lg lg:px-8 lg:text-xl">
                SureClear is an independent specialist advisory firm focused
                exclusively on the cleared derivatives industry
              </p>
              <div
                aria-hidden
                className="mx-auto h-px w-16 bg-white/35 sm:mx-0 sm:h-auto sm:w-px sm:self-stretch"
              />
              <p className="text-center text-sm leading-relaxed text-white/80 text-pretty sm:px-6 sm:text-base lg:px-8">
                We help financial institutions make confident decisions across
                clearing strategy, transformation and operations
              </p>
            </div>
            <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
              <a
                href="#contact"
                className="rounded-full bg-white px-6 py-3 text-sm font-semibold text-[#1f4037] transition hover:bg-[#f5f4ef]"
              >
                Start a conversation
              </a>
              <a
                href="#focus"
                className="hero-focus-pulse rounded-full border border-white/55 px-6 py-3 text-sm font-semibold text-white transition hover:border-white hover:bg-white/10"
              >
                Explore our focus
              </a>
            </div>
          </div>
        </div>

        <HeroServiceCards />
      </div>
    </section>
  );
}
