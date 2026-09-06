const navLinks = [
  { href: "#focus", label: "Focus" },
  { href: "#clients", label: "Who we help" },
  { href: "#approach", label: "Approach" },
  { href: "#contact", label: "Contact" },
];

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-[#0b1220]/90 backdrop-blur-md">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-6">
        <a href="/home" className="group flex items-center gap-2.5">
          <span
            aria-hidden
            className="flex h-8 w-8 items-center justify-center rounded-md bg-gradient-to-br from-teal-300 to-cyan-600 text-sm font-bold text-[#0b1220]"
          >
            SC
          </span>
          <span className="text-sm font-semibold tracking-[0.18em] text-white uppercase">
            Sure Clear
          </span>
        </a>

        <nav className="hidden items-center gap-8 md:flex" aria-label="Primary">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm text-slate-300 transition hover:text-white"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <a
          href="#contact"
          className="rounded-full bg-teal-400 px-4 py-2 text-sm font-semibold text-[#0b1220] transition hover:bg-teal-300"
        >
          Talk to us
        </a>
      </div>
    </header>
  );
}
