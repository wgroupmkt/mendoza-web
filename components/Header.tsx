import Image from "next/image";

export default function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-[#573325]/10 bg-[#F3EDDC]/95 backdrop-blur-md">
      <div className="mx-auto flex h-[82px] max-w-7xl items-center justify-between px-6 sm:px-10 lg:px-12">

        {/* LOGO */}
        <a href="#inicio" className="flex items-center">
          <Image
            src="/logo-mendoza-estudiantil.png"
            alt="Mendoza Estudiantil"
            width={170}
            height={55}
            priority
            className="h-auto w-[145px] sm:w-[165px]"
          />
        </a>

        {/* NAVEGACIÓN DESKTOP */}
        <nav className="hidden items-center gap-8 lg:flex">
          <a
            href="#inicio"
            className="text-sm font-medium tracking-wide text-[#573325] transition hover:text-[#8A7354]"
          >
            Inicio
          </a>

          <a
            href="#experiencias"
            className="text-sm font-medium tracking-wide text-[#573325] transition hover:text-[#8A7354]"
          >
            Experiencias
          </a>

          <a
            href="#nosotros"
            className="text-sm font-medium tracking-wide text-[#573325] transition hover:text-[#8A7354]"
          >
            Nosotros
          </a>

          <a
            href="#galeria"
            className="text-sm font-medium tracking-wide text-[#573325] transition hover:text-[#8A7354]"
          >
            Galería
          </a>

          <a
            href="#contacto"
            className="rounded-full bg-[#573325] px-6 py-3 text-sm font-semibold text-[#F3EDDC] transition hover:bg-[#8A7354]"
          >
            Contactanos
          </a>
        </nav>

        {/* MENÚ MOBILE */}
        <button
          type="button"
          aria-label="Abrir menú"
          className="group flex h-11 w-11 items-center justify-center rounded-full border border-[#573325]/20 transition hover:bg-[#573325] lg:hidden"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth={1.7}
            strokeLinecap="round"
            className="h-5 w-5 text-[#573325] transition group-hover:text-[#F3EDDC]"
          >
            <line x1="4" y1="8" x2="20" y2="8" />
            <line x1="8" y1="16" x2="20" y2="16" />
          </svg>
        </button>
      </div>
    </header>
  );
}