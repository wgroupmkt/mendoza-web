export default function Header() {
  return (
    <header className="sticky top-0 z-20 flex items-center justify-between border-b border-slate-200 bg-white px-6 py-3 sm:px-10">
      <span className="text-lg font-semibold tracking-wide text-slate-700">
        Logo
      </span>
      <button
        type="button"
        className="flex items-center gap-2 text-sm font-medium text-slate-700 hover:text-slate-900"
      >
        Menú
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth={2}
          strokeLinecap="round"
          strokeLinejoin="round"
          className="h-5 w-5"
        >
          <line x1="4" y1="6" x2="20" y2="6" />
          <line x1="4" y1="12" x2="20" y2="12" />
          <line x1="4" y1="18" x2="20" y2="18" />
        </svg>
      </button>
    </header>
  );
}
