import Image from "next/image";
import { PageDirectory } from "@/components/home/PageDirectory";
import type { InsightPost } from "@/lib/insights";
import { getRelatedInsights } from "@/lib/insights";

type InsightArticleProps = {
  post: InsightPost;
};

function ArticleBody({ post }: { post: InsightPost }) {
  return (
    <div className="insight-prose space-y-5 text-base leading-relaxed text-stone-700 sm:text-lg">
      <p className="text-sm font-semibold tracking-wide text-[#2d6a4f]">
        {post.series}
      </p>
      {post.body.map((block, index) => {
        const key = `${block.type}-${index}`;
        if (block.type === "h2") {
          return (
            <h2
              key={key}
              className="pt-4 text-2xl font-semibold tracking-tight text-[#0b1220] sm:text-[1.75rem]"
            >
              {block.text}
            </h2>
          );
        }
        if (block.type === "lead") {
          return (
            <p
              key={key}
              className="text-xl font-semibold leading-snug tracking-tight text-[#0b1220] sm:text-2xl"
            >
              {block.text}
            </p>
          );
        }
        if (block.type === "quote") {
          return (
            <blockquote
              key={key}
              className="rounded-sm bg-[#eef3ef] px-6 py-5 text-lg font-medium leading-snug text-[#0b1220] sm:px-8 sm:py-6 sm:text-xl"
            >
              {block.text}
            </blockquote>
          );
        }
        if (block.type === "list") {
          return (
            <ul key={key} className="list-none space-y-3 pl-0">
              {block.items.map((item) => (
                <li key={item} className="flex gap-3">
                  <span
                    aria-hidden
                    className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[#2d6a4f]"
                  />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          );
        }
        return <p key={key}>{block.text}</p>;
      })}
      <p className="pt-2 text-sm font-semibold tracking-wide text-[#1f4037]">
        SureClear — Clarity in Clearing.
      </p>
    </div>
  );
}

export function InsightArticle({ post }: InsightArticleProps) {
  const related = getRelatedInsights(post.slug);

  return (
    <>
      <section className="relative w-full overflow-hidden bg-white">
        <div
          aria-hidden
          className="pointer-events-none absolute inset-x-0 top-0 h-[70%] bg-[linear-gradient(126deg,#e7f2ea_0%,#f3f8f4_48%,#ffffff_100%)]"
        />
        <div className="relative mx-auto max-w-7xl px-6 pt-6 pb-10 sm:px-10 sm:pt-8 sm:pb-12 lg:px-16 xl:px-24">
          <PageDirectory
            className="mb-8"
            items={[
              { label: "Home", href: "/home" },
              { label: "Insights", href: "/home/insights" },
              { label: post.category },
            ]}
          />

          <div className="grid gap-10 lg:grid-cols-[minmax(0,1.7fr)_minmax(16rem,0.7fr)] lg:gap-14 xl:gap-16">
            <div>
              <p className="flex items-center gap-2 text-sm text-stone-500">
                <time dateTime={post.publishedAt}>{post.publishedLabel}</time>
              </p>
              <h1 className="mt-4 max-w-3xl text-3xl font-semibold leading-[1.12] tracking-tight text-[#0b1220] sm:text-4xl lg:text-[2.75rem]">
                {post.title}
              </h1>
              <p className="mt-4 max-w-2xl text-lg leading-relaxed text-stone-600">
                {post.excerpt}
              </p>
              <div className="relative mt-8 aspect-[16/9] w-full overflow-hidden bg-[#eef3ef]">
                <Image
                  src={post.image}
                  alt={post.imageAlt}
                  fill
                  priority
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 70vw"
                />
              </div>
            </div>

            <aside className="flex flex-col gap-8 lg:pt-16">
              <div className="flex items-center gap-4">
                <div className="relative h-20 w-20 overflow-hidden rounded-full bg-[#eef3ef]">
                  <Image
                    src={post.author.image}
                    alt={post.author.imageAlt}
                    fill
                    className="object-cover"
                    sizes="80px"
                  />
                </div>
                <div>
                  <p className="text-base font-semibold text-[#0b1220]">
                    {post.author.name}
                  </p>
                  <p className="mt-0.5 text-sm text-stone-500">
                    {post.author.role}
                  </p>
                </div>
              </div>
              <div className="flex flex-wrap gap-2">
                {post.tags.map((tag) => (
                  <span
                    key={tag}
                    className="inline-flex rounded-full border border-[#d1d0d3] bg-[#fcfbfc] px-3.5 py-1 text-sm text-[#0b1220]"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </aside>
          </div>
        </div>
      </section>

      <section className="w-full bg-white pb-16 lg:pb-24">
        <div className="mx-auto max-w-7xl px-6 sm:px-10 lg:px-16 xl:px-24">
          <div className="grid gap-12 lg:grid-cols-[minmax(0,1.7fr)_minmax(16rem,0.7fr)] lg:gap-14 xl:gap-16">
            <ArticleBody post={post} />

            <aside className="lg:pt-2">
              <div className="sticky top-24 space-y-6">
                <div className="rounded-sm bg-[#f5f4ef] p-6 shadow-[0_2px_15px_rgba(0,0,0,0.06)] sm:p-7">
                  <p className="text-sm font-semibold tracking-wide text-[#2d6a4f]">
                    Need a clearing view?
                  </p>
                  <h2 className="mt-2 text-xl font-semibold tracking-tight text-[#0b1220]">
                    Talk through the operating model implications
                  </h2>
                  <p className="mt-3 text-sm leading-relaxed text-stone-600">
                    SureClear helps banks and clearing members assess readiness
                    across risk, liquidity, operations and governance.
                  </p>
                  <a
                    href="/contact"
                    className="mt-5 inline-flex w-full items-center justify-center rounded-lg bg-[#0b1220] px-4 py-3 text-sm font-semibold text-white transition hover:bg-[#14201a]"
                  >
                    Talk to us
                  </a>
                </div>
                <a
                  href="/home/insights"
                  className="group inline-flex items-center gap-1 text-sm font-semibold text-[#0b1220] transition hover:text-[#2d6a4f]"
                >
                  ← Back to Insights
                </a>
              </div>
            </aside>
          </div>
        </div>
      </section>

      {related.length > 0 ? (
        <section className="w-full border-t border-[#e7e5df] bg-white py-16 lg:py-20">
          <div className="mx-auto max-w-7xl px-6 sm:px-10 lg:px-16 xl:px-24">
            <div className="mb-4 h-0.5 w-12 rounded-full bg-[linear-gradient(90deg,#1f4037_0%,#2d6a4f_45%,#99f2c8_100%)]" />
            <h2 className="text-3xl font-semibold tracking-tight text-[#0b1220]">
              Related posts
            </h2>
            <div className="mt-10 grid gap-10 sm:grid-cols-2 lg:grid-cols-3 lg:gap-10">
              {related.map((item) => (
                <a
                  key={item.slug}
                  href={`/home/insights/${item.slug}`}
                  className="group flex flex-col"
                >
                  <p className="text-sm font-medium tracking-wide text-[#6b7a9b]">
                    {item.category}
                  </p>
                  <div className="relative mt-3 aspect-[16/9] w-full overflow-hidden bg-[#eef3ef]">
                    <Image
                      src={item.image}
                      alt={item.imageAlt}
                      fill
                      className="object-cover transition duration-500 group-hover:scale-[1.03]"
                      sizes="(max-width: 1024px) 50vw, 33vw"
                    />
                  </div>
                  <h3 className="mt-5 text-xl font-semibold leading-snug tracking-tight text-[#0b1220] transition group-hover:text-[#2d6a4f]">
                    {item.title}
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed text-stone-600">
                    {item.excerpt}
                  </p>
                </a>
              ))}
            </div>
          </div>
        </section>
      ) : null}
    </>
  );
}
