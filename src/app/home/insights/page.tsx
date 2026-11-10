import type { Metadata } from "next";
import { ContactCta } from "@/components/home/ContactCta";
import { InsightsHero } from "@/components/home/InsightsHero";
import { InsightsRecent } from "@/components/home/InsightsRecent";
import { SiteFooter } from "@/components/home/SiteFooter";
import { SiteHeader } from "@/components/home/SiteHeader";

export const metadata: Metadata = {
  title: "Insights — SureClear",
  description:
    "SureClear insights on clearing strategy, market infrastructure and operating models.",
  robots: {
    index: false,
    follow: false,
  },
};

export default function InsightsPage() {
  return (
    <div className="flex min-h-dvh flex-col bg-white text-[#0b1220]">
      <SiteHeader />
      <main className="flex-1">
        <InsightsHero />
        <InsightsRecent />
      </main>
      <ContactCta variant="brand" />
      <SiteFooter />
    </div>
  );
}
