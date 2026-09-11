import type { Metadata } from "next";
import { AboutHero } from "@/components/home/AboutHero";
import { AboutStory } from "@/components/home/AboutStory";
import { ContactCta } from "@/components/home/ContactCta";
import { SiteFooter } from "@/components/home/SiteFooter";
import { SiteHeader } from "@/components/home/SiteHeader";

export const metadata: Metadata = {
  title: "About — SureClear",
  description:
    "About SureClear — independent specialist advisory for the cleared derivatives industry.",
  robots: {
    index: false,
    follow: false,
  },
};

/** Alternate About page — kept for parity; site header now defaults to wordmark */
export default function AboutAltPage() {
  return (
    <div className="flex min-h-dvh flex-col bg-[#f5f4ef] text-[#0b1220]">
      <SiteHeader logoVariant="wordmark" />
      <main className="flex-1">
        <AboutHero />
        <AboutStory />
      </main>
      <ContactCta />
      <SiteFooter />
    </div>
  );
}
