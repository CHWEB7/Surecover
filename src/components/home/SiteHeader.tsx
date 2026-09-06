const navLinks = [
  { href: "#focus", label: "Focus" },
  { href: "#clients", label: "Who we help" },
  { href: "#approach", label: "Approach" },
  { href: "#contact", label: "Contact" },
];

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-50 border-b border-[#e7e5df] bg-[#f5f4ef]/90 backdrop-blur-md">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-6">
        <a href="/home" className="group flex items-center gap-2.5">
          <span
            aria-hidden
            className="flex h-8 w-8 items-center justify-center rounded-md bg-gradient-to-br from-[#1f4037] to-[#99f2c8] text-sm font-bold text-white"
          >
            SC
          </span>
          <span className="text-sm font-semibold tracking-[0.18em] text-[#1f4037] uppercase">
            Sure Clear
          </span>
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
          href="#contact"
          className="rounded-full bg-[#1f4037] px-4 py-2 text-sm font-semibold text-white transition hover:bg-[#2d6a4f]"
        >
          Talk to us
        </a>
      </div>
    </header>
  );
}
