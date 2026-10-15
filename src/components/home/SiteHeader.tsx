import { BrandLogo } from "@/components/home/BrandLogo";

const navLinks = [
  { label: "Insights", href: null },
  { label: "Services", href: "/home/services" },
  { label: "About", href: "/home/about" },
  { label: "Contact", href: "/contact" },
] as const;

function NavChevron() {
  return (
    <svg
      viewBox="0 0 12 12"
      className="ml-1 h-2.5 w-2.5 shrink-0 text-current"
      aria-hidden="true"
      fill="none"
    >
      <path
        d="M2.5 4.25 6 7.75l3.5-3.5"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

type SiteHeaderProps = {
  /** Header logo variant — defaults to the SureClear wordmark */
  logoVariant?: "dark" | "light" | "wordmark" | "wordmark-light";
  /** Surface tone — cream matches most marketing pages; white for contact */
  tone?: "cream" | "white";
};

export function SiteHeader({
  logoVariant = "wordmark",
  tone = "cream",
}: SiteHeaderProps) {
  return (
    <header
      className={`sticky top-0 z-50 border-b border-[#e7e5df] backdrop-blur-md ${
        tone === "white" ? "bg-white/95" : "bg-[#f5f4ef]/90"
      }`}
    >
      <div className="flex h-16 w-full items-center justify-between pr-4 pl-4 sm:pr-5 sm:pl-5 lg:pr-6 lg:pl-6">
        <a href="/home" className="group inline-flex shrink-0 items-center">
          <BrandLogo
            variant={logoVariant}
            priority
            className="h-8 w-auto sm:h-9"
          />
        </a>

        <div className="flex items-center gap-5 sm:gap-6 md:gap-7">
          <nav
            className="hidden items-center gap-5 md:flex lg:gap-7"
            aria-label="Primary"
          >
            {navLinks.map((link) => {
              const className =
                "inline-flex items-center font-sans text-sm font-semibold text-stone-600 transition hover:text-[#1f4037]";

              return link.href ? (
                <a key={link.label} href={link.href} className={className}>
                  {link.label}
                  <NavChevron />
                </a>
              ) : (
                <span key={link.label} className={className}>
                  {link.label}
                  <NavChevron />
                </span>
              );
            })}
          </nav>

          <a
            href="/contact"
            className="rounded-full bg-[#1f4037] px-4 py-2 text-sm font-semibold text-white transition hover:bg-[#2d6a4f]"
          >
            Talk to us
          </a>
        </div>
      </div>
    </header>
  );
}
