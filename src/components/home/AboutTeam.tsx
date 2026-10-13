export function AboutTeam() {
  return (
    <section
      id="meet-the-team"
      className="scroll-mt-24 w-full border-t border-[#e7e5df] bg-white py-16 lg:py-24"
    >
      <div className="mx-auto max-w-7xl px-6 sm:px-10 lg:px-16 xl:px-24">
        <div className="grid items-center gap-12 lg:grid-cols-[minmax(0,1.15fr)_minmax(0,0.85fr)] lg:gap-16">
          <div className="max-w-xl">
            <p className="text-sm font-semibold tracking-wide text-[#2d6a4f]">
              Meet the team
            </p>
            <h2 className="mt-3 text-3xl font-semibold tracking-tight text-[#0b1220] sm:text-4xl lg:text-[2.75rem]">
              Practitioners who have lived clearing, not just advised on it
            </h2>
            <p className="mt-5 text-base leading-relaxed text-stone-600 sm:text-lg">
              SureClear is led by people who have run clearing operations,
              transformations and product organisations — bringing that
              experience directly into every engagement.
            </p>
          </div>

          {/* Portrait card — image placeholder for now; name/title pill ready */}
          <div className="mx-auto w-full max-w-sm lg:mx-0 lg:ml-auto">
            <div className="relative aspect-[4/5] overflow-hidden rounded-[1.75rem] bg-[#ebe8e2] shadow-[0_18px_40px_rgba(11,18,32,0.08)]">
              {/* Image slot — replace this block when the portrait is provided */}
              <div
                aria-hidden
                className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_rgba(255,255,255,0.55),_transparent_55%)]"
              />

              <div className="absolute inset-x-0 bottom-5 flex justify-center px-4 sm:bottom-6">
                <div className="inline-flex max-w-full items-center gap-2 rounded-full border border-[#0b1220] bg-white p-1.5 shadow-[0_8px_24px_rgba(11,18,32,0.12)] sm:gap-2.5 sm:p-1.5">
                  <span className="inline-flex shrink-0 items-center rounded-full bg-[#0b1220] px-4 py-1.5 text-sm font-medium text-white sm:px-5 sm:py-2">
                    Simon
                  </span>
                  <span className="pr-4 text-sm font-medium tracking-tight text-[#0b1220] sm:pr-5">
                    Founder, SureClear
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
