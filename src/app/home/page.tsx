import type { Metadata } from "next";
import { Approach } from "@/components/home/Approach";
import { ContactCta } from "@/components/home/ContactCta";
import { FocusAreas } from "@/components/home/FocusAreas";
import { Hero } from "@/components/home/Hero";
import { SiteFooter } from "@/components/home/SiteFooter";
import { SiteHeader } from "@/components/home/SiteHeader";
import { WhoWeHelp } from "@/components/home/WhoWeHelp";

export const metadata: Metadata = {
  title: "Sure Clear — Cleared Derivatives Advisory",
  description:
    "Sure Clear is an independent specialist advisory firm focused exclusively on the cleared derivatives industry.",
  robots: {
    index: false,
    follow: false,
  },
};

export default function SureClearHomePage() {
  return (
    <div className="flex min-h-dvh flex-col bg-white text-[#0b1220]">
      <SiteHeader />
      <main className="flex-1">
        <Hero />
        <FocusAreas />
        <WhoWeHelp />
        <Approach />
        <ContactCta />
      </main>
      <SiteFooter />
    </div>
  );
}
