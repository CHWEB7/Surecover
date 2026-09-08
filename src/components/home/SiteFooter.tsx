import { BrandLogo } from "@/components/home/BrandLogo";

const footerColumns = [
  {
    title: "Focus",
    links: [
      { href: "/home#focus", label: "Clearing strategy" },
      { href: "/home#focus", label: "Transformation" },
      { href: "/home#focus", label: "Regulatory change" },
      { href: "/home#focus", label: "Operations" },
    ],
  },
  {
    title: "Who we help",
    links: [
      { href: "/home#clients", label: "Banks & brokers" },
      { href: "/home#clients", label: "Exchanges & CCPs" },
      { href: "/home#clients", label: "Fintechs" },
      { href: "/home#clients", label: "New market participants" },
    ],
  },
  {
    title: "Company",
    links: [
      { href: "/home#approach", label: "Our approach" },
      { href: "/home/services", label: "Services" },
      { href: "/home#contact", label: "Contact" },
      { href: "mailto:hello@sureclear.com", label: "hello@sureclear.com" },
    ],
  },
  {
    title: "Resources",
    links: [
      { href: "/home#focus", label: "Explore our focus" },
      { href: "/home#approach", label: "How we work" },
      { href: "/home#contact", label: "Start a conversation" },
    ],
  },
];

export function SiteFooter() {
  return (
    <footer className="w-full bg-[#0b1220] text-white">
      <div className="mx-auto max-w-7xl px-6 pt-14 pb-10 lg:px-10 lg:pt-16 lg:pb-12">
        <div className="flex flex-col gap-12 lg:flex-row lg:gap-16">
          <div className="shrink-0 lg:max-w-xs lg:w-64">
            <a href="/home" className="inline-flex items-center">
              <BrandLogo variant="light" className="h-8 w-auto sm:h-9" />
            </a>
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-white/55">
              Independent specialist advisory for the cleared derivatives
              industry.
            </p>
          </div>

          <div className="grid flex-1 grid-cols-2 gap-8 sm:grid-cols-4">
            {footerColumns.map((column) => (
              <div key={column.title}>
                <p className="text-sm font-semibold text-white">
                  {column.title}
                </p>
                <ul className="mt-4 space-y-2.5">
                  {column.links.map((link) => (
                    <li key={`${column.title}-${link.label}`}>
                      <a
                        href={link.href}
                        className="text-sm text-white/55 transition hover:text-white"
                      >
                        {link.label}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-12 flex flex-col gap-3 border-t border-white/10 pt-8 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-sm text-white/40">
            © {new Date().getFullYear()} Sureclear. All rights reserved.
          </p>
          <p className="text-sm text-white/40">
            Cleared derivatives advisory
          </p>
        </div>
      </div>
    </footer>
  );
}
