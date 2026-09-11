import type { Metadata } from "next";
import { ContactCta } from "@/components/home/ContactCta";
import { ServicesHero } from "@/components/home/ServicesHero";
import { ServicesOverview } from "@/components/home/ServicesOverview";
import { SiteFooter } from "@/components/home/SiteFooter";
import { SiteHeader } from "@/components/home/SiteHeader";

export const metadata: Metadata = {
  title: "Services — SureClear",
  description:
    "SureClear services across clearing strategy, transformation, fractional leadership and operations.",
  robots: {
    index: false,
    follow: false,
  },
};

export default function ServicesPage() {
  return (
    <div className="flex min-h-dvh flex-col bg-[#f5f4ef] text-[#0b1220]">
      <SiteHeader />
      <main className="flex-1">
        <ServicesHero />
        <ServicesOverview />
      </main>
      <ContactCta />
      <SiteFooter />
    </div>
  );
}
