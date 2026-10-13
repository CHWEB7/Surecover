type Crumb = {
  label: string;
  href?: string;
};

type PageDirectoryProps = {
  items: Crumb[];
};

export function PageDirectory({ items }: PageDirectoryProps) {
  if (items.length === 0) return null;

  return (
    <nav
      aria-label="Breadcrumb"
      className="w-full border-b border-[#ebe8e2]/80 bg-white/80"
    >
      <div className="mx-auto flex max-w-7xl flex-wrap items-center gap-x-2 gap-y-1 px-6 py-3 text-sm sm:px-10 lg:px-16 xl:px-24">
        <ol className="flex flex-wrap items-center gap-x-2 gap-y-1">
          {items.map((item, index) => {
            const isLast = index === items.length - 1;

            return (
              <li key={`${item.label}-${index}`} className="flex items-center gap-x-2">
                {index > 0 ? (
                  <span aria-hidden="true" className="text-[#2d6a4f]/70">
                    ›
                  </span>
                ) : null}

                {item.href && !isLast ? (
                  <a
                    href={item.href}
                    className="font-medium text-[#2d6a4f] transition hover:text-[#1f4037]"
                  >
                    {item.label}
                  </a>
                ) : (
                  <span
                    aria-current={isLast ? "page" : undefined}
                    className={
                      isLast
                        ? "font-medium text-stone-600"
                        : "font-medium text-[#2d6a4f]"
                    }
                  >
                    {item.label}
                  </span>
                )}
              </li>
            );
          })}
        </ol>
      </div>
    </nav>
  );
}
