"use client";

import { useState } from "react";
import Image from "next/image";
import logomarron from "../public/logo-marron.png";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  const closeMenu = () => {
    setMenuOpen(false);
  };

  return (
    <header className="sticky top-0 z-50 border-b border-[#573325]/10 bg-[#F3EDDC]/95 backdrop-blur-md">
      <div className="mx-auto flex h-[82px] max-w-7xl items-center justify-between px-6 sm:px-10 lg:px-12">

        {/* LOGO */}
        <a href="#inicio" className="flex items-center" onClick={closeMenu}>
          <Image
            src={logomarron}
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

        {/* BOTÓN MOBILE */}
        <button
          type="button"
          aria-label={menuOpen ? "Cerrar menú" : "Abrir menú"}
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen(!menuOpen)}
          className="group flex h-11 w-11 items-center justify-center rounded-full border border-[#573325]/20 transition hover:bg-[#573325] lg:hidden"
        >
          {menuOpen ? (
            // X
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth={1.7}
              strokeLinecap="round"
              className="h-5 w-5 text-[#573325] transition group-hover:text-[#F3EDDC]"
            >
              <line x1="6" y1="6" x2="18" y2="18" />
              <line x1="18" y1="6" x2="6" y2="18" />
            </svg>
          ) : (
            // HAMBURGUESA
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
          )}
        </button>
      </div>

      {/* MENÚ DESPLEGABLE MOBILE */}
      <div
        className={`overflow-hidden border-t border-[#573325]/10 bg-[#F3EDDC] transition-all duration-300 ease-in-out lg:hidden ${
          menuOpen
            ? "max-h-[400px] opacity-100"
            : "max-h-0 border-t-0 opacity-0"
        }`}
      >
        <nav className="flex flex-col px-6 py-6 sm:px-10">

          <a
            href="#inicio"
            onClick={closeMenu}
            className="border-b border-[#573325]/10 py-4 text-base font-medium text-[#573325] transition hover:text-[#8A7354]"
          >
            Inicio
          </a>

          <a
            href="#experiencias"
            onClick={closeMenu}
            className="border-b border-[#573325]/10 py-4 text-base font-medium text-[#573325] transition hover:text-[#8A7354]"
          >
            Experiencias
          </a>

          <a
            href="#galeria"
            onClick={closeMenu}
            className="border-b border-[#573325]/10 py-4 text-base font-medium text-[#573325] transition hover:text-[#8A7354]"
          >
            Galería
          </a>

          <a
            href="#contacto"
            onClick={closeMenu}
            className="mt-6 flex items-center justify-center rounded-full bg-[#573325] px-6 py-4 text-sm font-semibold text-[#F3EDDC] transition hover:bg-[#8A7354]"
          >
            Contactanos
          </a>

        </nav>
      </div>
    </header>
  );
}