type AboutTopic = {
  id: string;
  title: string;
  shortDescription: string;
};

const topics: AboutTopic[] = [
  {
    id: "who-we-are",
    title: "Who we are",
    shortDescription:
      "SureClear is an independent specialist advisory firm for the cleared derivatives industry. Founded by Simon Haggett and built on 30+ years inside clearing, the firm exists to make complex clearing decisions clearer.",
  },
  {
    id: "what-we-do",
    title: "What we do",
    shortDescription:
      "Clearing does not need more complexity. It needs clearer judgement. Cleared derivatives is a specialist market. The decisions are technical, operational, regulatory and commercial at the same time. Senior teams rarely need more information. They need to know what matters, what it means and what to do next.",
  },
  {
    id: "our-mission",
    title: "Our mission",
    shortDescription:
      "SureClear was created to bring specialist clearing experience directly to those moments. Not broad consultancy. Not generic frameworks. Not advice detached from delivery. Clear judgement. Practical action. Experience from inside the industry.",
  },
  {
    id: "who-we-help",
    title: "Who we help",
    shortDescription:
      "Banks, brokers, exchanges, CCPs, fintechs and new market participants — organisations navigating clearing strategy, transformation and operations. We understand the industry because we've worked inside it.",
  },
];

export function AboutStory() {
  return (
    <section
      id="our-story"
      className="scroll-mt-24 w-full bg-white pb-20 lg:pb-28"
    >
      <div className="mx-auto max-w-7xl px-6 sm:px-10 lg:px-16 xl:px-24">
        <div className="max-w-3xl pt-4 lg:pt-6">
          <p className="text-sm font-semibold tracking-wide text-[#2d6a4f]">
            About SureClear
          </p>
          <h2 className="mt-3 text-3xl font-semibold tracking-tight text-[#0b1220] sm:text-4xl lg:text-[2.75rem]">
            The story behind specialist advice for every{" "}
            <span className="bg-[linear-gradient(135deg,#1f4037_0%,#2d6a4f_45%,#99f2c8_100%)] bg-clip-text text-transparent">
              clearing decision
            </span>
          </h2>
        </div>

        <div className="mt-10 grid gap-4 sm:mt-12 sm:grid-cols-2 sm:gap-5">
          {topics.map((topic) => (
            <article
              key={topic.id}
              id={topic.id}
              className="services-area-card group flex min-h-0 flex-col rounded-sm bg-[#f5f4ef] px-6 py-5 text-left transition duration-300 ease-out hover:-translate-y-1 hover:bg-[#eef3ef] motion-reduce:transform-none motion-reduce:transition-none"
            >
              <h3 className="text-[1.15rem] font-semibold leading-snug tracking-tight text-[#0b1220] sm:text-xl">
                {topic.title}
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-stone-600">
                {topic.shortDescription}
              </p>
              <span
                aria-hidden="true"
                className="mt-8 text-base font-normal leading-none text-[#0b1220] transition group-hover:translate-x-0.5 group-hover:text-[#2d6a4f]"
              >
                →
              </span>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
