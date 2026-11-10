import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { ContactCta } from "@/components/home/ContactCta";
import { InsightArticle } from "@/components/home/InsightArticle";
import { SiteFooter } from "@/components/home/SiteFooter";
import { SiteHeader } from "@/components/home/SiteHeader";
import { getInsightBySlug, insightPosts } from "@/lib/insights";

type PageProps = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return insightPosts.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const post = getInsightBySlug(slug);
  if (!post) {
    return { title: "Insight — SureClear" };
  }
  return {
    title: `${post.title} — SureClear Insights`,
    description: post.excerpt,
    robots: {
      index: false,
      follow: false,
    },
  };
}

export default async function InsightPostPage({ params }: PageProps) {
  const { slug } = await params;
  const post = getInsightBySlug(slug);
  if (!post) notFound();

  return (
    <div className="flex min-h-dvh flex-col bg-white text-[#0b1220]">
      <SiteHeader />
      <main className="flex-1">
        <InsightArticle post={post} />
      </main>
      <ContactCta variant="brand" />
      <SiteFooter />
    </div>
  );
}
