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
      className={`font-body text-sm font-normal tracking-wide ${className}`.trim()}
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
                  className="font-normal text-[#2d6a4f] transition hover:text-[#1f4037]"
                >
                  {item.label}
                </a>
              ) : (
                <span
                  aria-current={isLast ? "page" : undefined}
                  className={
                    isLast
                      ? "font-normal text-stone-500"
                      : "font-normal text-[#2d6a4f]"
                  }
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
