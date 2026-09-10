import { BrandLogo } from "@/components/home/BrandLogo";

const navLinks = [
  { href: "/home#focus", label: "Focus" },
  { href: "/home#clients", label: "Who we help" },
  { href: "/home#approach", label: "Approach" },
  { href: "/home/about", label: "About" },
  { href: "/contact", label: "Contact" },
];

type SiteHeaderProps = {
  /** Header logo variant — defaults to the standard dark mark */
  logoVariant?: "dark" | "light" | "wordmark";
};

export function SiteHeader({ logoVariant = "dark" }: SiteHeaderProps) {
  return (
    <header className="sticky top-0 z-50 border-b border-[#e7e5df] bg-[#f5f4ef]/90 backdrop-blur-md">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-6">
        <a href="/home" className="group inline-flex items-center">
          <BrandLogo
            variant={logoVariant}
            priority
            className={
              logoVariant === "wordmark"
                ? "h-8 w-auto sm:h-9"
                : "h-7 w-auto sm:h-8"
            }
          />
        </a>

        <nav className="hidden items-center gap-8 md:flex" aria-label="Primary">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm text-stone-600 transition hover:text-[#1f4037]"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <a
          href="/contact"
          className="rounded-full bg-[#1f4037] px-4 py-2 text-sm font-semibold text-white transition hover:bg-[#2d6a4f]"
        >
          Talk to us
        </a>
      </div>
    </header>
  );
}
