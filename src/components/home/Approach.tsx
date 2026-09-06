export function Approach() {
  return (
    <section
      id="approach"
      className="scroll-mt-24 bg-[#f5f4ef] py-20 lg:py-28"
    >
      <div className="mx-auto grid max-w-6xl gap-12 px-6 lg:grid-cols-2 lg:items-center">
        <div>
          <p className="text-xs font-semibold tracking-[0.28em] text-[#2d6a4f] uppercase">
            Our approach
          </p>
          <h2 className="mt-4 text-3xl font-semibold tracking-tight text-[#1f4037] sm:text-4xl">
            Specialist advice from people who have done the work
          </h2>
          <p className="mt-5 text-lg leading-relaxed text-stone-600">
            The firm is built on deep practitioner experience rather than
            broad-based consultancy. We bring the judgement of operators who
            have lived clearing strategy, regulation and delivery — not slide
            decks recycled from adjacent industries.
          </p>
        </div>

        <div className="grid gap-4">
          {[
            {
              title: "Independent by design",
              body: "No clearing product to sell. Advice stays aligned to client outcomes.",
            },
            {
              title: "Exclusive industry focus",
              body: "Cleared derivatives only — so context, nuance and risk are understood.",
            },
            {
              title: "Practical delivery",
              body: "Recommendations that can be implemented by the teams who run the business.",
            },
          ].map((item) => (
            <div
              key={item.title}
              className="rounded-2xl border border-[#e7e5df] bg-white/70 p-6"
            >
              <h3 className="text-lg font-semibold text-[#1f4037]">
                {item.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-stone-600">
                {item.body}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
