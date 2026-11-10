import Image from "next/image";
import { insightPosts } from "@/lib/insights";

export function InsightsRecent() {
  return (
    <section
      id="recent-posts"
      className="scroll-mt-24 w-full bg-white pb-20 lg:pb-28"
    >
      <div className="mx-auto max-w-7xl px-6 sm:px-10 lg:px-16 xl:px-24">
        <div className="pt-10 sm:pt-12 lg:pt-14">
          <div
            aria-hidden
            className="mb-4 h-0.5 w-12 rounded-full bg-[linear-gradient(90deg,#1f4037_0%,#2d6a4f_45%,#99f2c8_100%)]"
          />
          <h2 className="text-3xl font-semibold tracking-tight text-[#0b1220] sm:text-4xl lg:text-[2.75rem]">
            Recent posts
          </h2>
        </div>

        <div className="mt-10 grid gap-10 sm:mt-12 sm:grid-cols-2 sm:gap-8 lg:grid-cols-3 lg:gap-10">
          {insightPosts.map((post) => (
            <a
              key={post.slug}
              href={`/home/insights/${post.slug}`}
              className="group flex flex-col text-left transition"
            >
              <p className="text-sm font-medium tracking-wide text-[#6b7a9b]">
                {post.category}
              </p>
              <div className="relative mt-3 aspect-[16/9] w-full overflow-hidden bg-[#eef3ef]">
                <Image
                  src={post.image}
                  alt={post.imageAlt}
                  fill
                  className="object-cover transition duration-500 group-hover:scale-[1.03]"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                />
              </div>
              <h3 className="mt-5 text-xl font-semibold leading-snug tracking-tight text-[#0b1220] transition group-hover:text-[#2d6a4f] sm:text-[1.35rem]">
                {post.title}
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-stone-600 sm:text-[0.95rem]">
                {post.excerpt}
              </p>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
