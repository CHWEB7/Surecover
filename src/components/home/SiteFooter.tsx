export function SiteFooter() {
  return (
    <footer className="border-t border-[#e7e5df] bg-[#f5f4ef]">
      <div className="mx-auto flex max-w-6xl flex-col gap-4 px-6 py-10 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <p className="text-sm font-semibold tracking-[0.18em] text-[#1f4037] uppercase">
            Sure Clear
          </p>
          <p className="mt-1 text-sm text-stone-500">
            Independent specialist advisory for the cleared derivatives
            industry.
          </p>
        </div>
        <p className="text-sm text-stone-400">
          © {new Date().getFullYear()} Sure Clear. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
