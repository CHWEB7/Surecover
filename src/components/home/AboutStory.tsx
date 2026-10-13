export function AboutStory() {
  return (
    <section id="our-story" className="scroll-mt-24 w-full bg-white py-16 lg:py-24">
      <div className="mx-auto max-w-7xl px-6 sm:px-10 lg:px-16 xl:px-24">
        <div className="max-w-3xl">
          <p className="text-sm font-semibold tracking-wide text-[#2d6a4f]">
            Our story
          </p>
          <h2 className="mt-3 text-3xl font-semibold tracking-tight text-[#0b1220] sm:text-4xl lg:text-[2.75rem]">
            Why SureClear started — and what it stands for
          </h2>
        </div>

        <div className="mt-10 grid items-start gap-10 lg:mt-14 lg:grid-cols-[minmax(0,1.2fr)_minmax(0,0.8fr)] lg:gap-14">
          <div className="space-y-5 text-base leading-relaxed text-stone-600 sm:text-lg">
            <p>
              SureClear was founded to give clearing leaders something the market
              rarely offers: specialist advice from people who have actually run
              clearing businesses, transformations and platforms.
            </p>
            <p>
              After a career spanning derivatives clearing operations and senior
              leadership roles across SEB, Credit Suisse and FIS, founder Simon
              Haggett established SureClear as an independent advisory — so that
              experience could sit on the client&apos;s side of the table, not
              inside a product vendor or a generalist firm.
            </p>
            <p>
              Too often, clearing decisions are shaped by generic consulting
              frameworks or by vendors with a product to sell. The result is
              advice that looks polished but fails under the pressure of
              regulation, operations and commercial reality.
            </p>
            <p>
              SureClear exists to close that gap — bringing practitioner
              judgement to membership choices, operating models, regulatory
              change and delivery, so clients can move with clarity and leave
              with capability that lasts.
            </p>
          </div>

          <aside className="rounded-2xl border border-[#e7e5df] border-l-[6px] border-l-[#2d6a4f] bg-[#f5f4ef] p-7 sm:p-8">
            <p className="text-sm font-semibold tracking-wide text-[#2d6a4f]">
              At a glance
            </p>
            <dl className="mt-5 space-y-5">
              <div>
                <dt className="text-sm font-semibold text-[#0b1220]">Why it started</dt>
                <dd className="mt-1.5 text-sm leading-relaxed text-stone-600 sm:text-[0.95rem]">
                  To bring clearing-native advice to decisions that are too
                  important for generic consulting.
                </dd>
              </div>
              <div>
                <dt className="text-sm font-semibold text-[#0b1220]">When it started</dt>
                <dd className="mt-1.5 text-sm leading-relaxed text-stone-600 sm:text-[0.95rem]">
                  Established as an independent firm after decades of clearing
                  leadership across banks and market infrastructure providers.
                </dd>
              </div>
              <div>
                <dt className="text-sm font-semibold text-[#0b1220]">What we do</dt>
                <dd className="mt-1.5 text-sm leading-relaxed text-stone-600 sm:text-[0.95rem]">
                  Strategy, transformation, fractional leadership and operations
                  support for banks, brokers, CCPs and new market participants.
                </dd>
              </div>
              <div>
                <dt className="text-sm font-semibold text-[#0b1220]">How we work</dt>
                <dd className="mt-1.5 text-sm leading-relaxed text-stone-600 sm:text-[0.95rem]">
                  Independent, practical and close to the business — so progress
                  continues after the engagement ends.
                </dd>
              </div>
            </dl>
          </aside>
        </div>
      </div>
    </section>
  );
}
