const experienceAreas = [
  "Clearing Operations",
  "Business & Operational Transformation",
  "Regulatory Change",
  "Product Management",
  "Technology & Infrastructure",
  "Operating Models",
  "Commercial Development",
];

export function AboutStory() {
  return (
    <section className="w-full bg-white py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-6 sm:px-10 lg:px-16 xl:px-24">
        <div className="max-w-3xl">
          <div
            className="mb-6 h-[3px] w-14 rounded-full bg-[#2d6a4f]"
            aria-hidden="true"
          />
          <h2 className="text-3xl font-semibold tracking-tight text-[#0b1220] sm:text-4xl lg:text-[2.75rem]">
            Simon Haggett
          </h2>

          <div className="mt-8 space-y-6 text-base leading-relaxed text-stone-600 sm:text-lg">
            <p>
              Simon Haggett began his career in derivatives clearing operations
              and progressed through senior leadership roles across SEB, Credit
              Suisse and FIS.
            </p>

            <div>
              <p className="font-medium text-[#0b1220]">His experience spans:</p>
              <ul className="mt-4 grid gap-2.5 sm:grid-cols-2">
                {experienceAreas.map((item) => (
                  <li key={item} className="flex items-start gap-2.5">
                    <span
                      aria-hidden="true"
                      className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[#2d6a4f]"
                    />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <p>
              He has led organisations of more than 100 professionals, managed
              major transformation portfolios and led global product
              organisations responsible for platforms supporting more than 80
              CCPs and exchanges.
            </p>

            <p>
              He has also delivered major industry transitions, including Brexit
              and regulatory change, managed multi-million dollar change
              portfolios and generated annual recurring revenue through
              commercial product development.
            </p>

            <p className="text-xl font-semibold tracking-tight text-[#0b1220] sm:text-2xl">
              That experience is the foundation of SureClear.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
