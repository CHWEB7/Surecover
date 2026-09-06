export function SiteFooter() {
  return (
    <footer className="border-t border-slate-200 bg-white">
      <div className="mx-auto flex max-w-6xl flex-col gap-4 px-6 py-10 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <p className="text-sm font-semibold tracking-[0.18em] text-[#0b1220] uppercase">
            Sure Clear
          </p>
          <p className="mt-1 text-sm text-slate-500">
            Independent specialist advisory for the cleared derivatives
            industry.
          </p>
        </div>
        <p className="text-sm text-slate-400">
          © {new Date().getFullYear()} Sure Clear. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
