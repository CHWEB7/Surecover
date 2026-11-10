type Crumb = {
  label: string;
  href?: string;
};

type PageDirectoryProps = {
  items: Crumb[];
  className?: string;
};

export function PageDirectory({ items, className = "" }: PageDirectoryProps) {
  if (items.length === 0) return null;

  return (
    <nav
      aria-label="Breadcrumb"
      className={`font-body text-sm tracking-wide ${className}`.trim()}
      style={{ fontWeight: 200 }}
    >
      <ol className="flex flex-wrap items-center gap-x-2 gap-y-1">
        {items.map((item, index) => {
          const isLast = index === items.length - 1;

          return (
            <li key={`${item.label}-${index}`} className="flex items-center gap-x-2">
              {index > 0 ? (
                <span aria-hidden="true" className="text-[#2d6a4f]/65">
                  ›
                </span>
              ) : null}

              {item.href && !isLast ? (
                <a
                  href={item.href}
                  className="text-[#2d6a4f] transition hover:text-[#1f4037]"
                  style={{ fontWeight: 200 }}
                >
                  {item.label}
                </a>
              ) : (
                <span
                  aria-current={isLast ? "page" : undefined}
                  className={isLast ? "text-stone-500" : "text-[#2d6a4f]"}
                  style={{ fontWeight: 200 }}
                >
                  {item.label}
                </span>
              )}
            </li>
          );
        })}
      </ol>
    </nav>
  );
}
