import type { Metadata } from "next";
import { ContactCta } from "@/components/home/ContactCta";
import { SiteFooter } from "@/components/home/SiteFooter";
import { SiteHeader } from "@/components/home/SiteHeader";

export const metadata: Metadata = {
  title: "Contact — SureClear",
  description:
    "Contact SureClear about clearing strategy, transformation, operations or fractional leadership.",
  robots: {
    index: false,
    follow: false,
  },
};

export default function ContactPage() {
  return (
    <div className="flex min-h-dvh flex-col bg-[#f5f4ef] text-[#0b1220]">
      <SiteHeader />
      <main className="flex-1 pt-6 sm:pt-8">
        <ContactCta />
      </main>
      <SiteFooter />
    </div>
  );
}
