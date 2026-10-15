import type { Metadata } from "next";
import { ContactHero } from "@/components/home/ContactHero";
import { ContactPageShell } from "@/components/home/ContactPageShell";
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
    <ContactPageShell>
      <div className="flex min-h-dvh flex-col bg-white text-[#0b1220]">
        <SiteHeader tone="white" />
        <main className="flex-1 bg-white">
          <ContactHero />
        </main>
        <SiteFooter />
      </div>
    </ContactPageShell>
  );
}
