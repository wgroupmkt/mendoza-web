import Image from "next/image";
import logo from "../public/logo-mendoza-estudiantil.png"


export default function Footer() {
  return (
    <footer
      id="contacto"
      className="relative overflow-hidden bg-[#573325] text-[#F3EDDC]"
    >
      {/* Línea superior */}
      <div className="h-px w-full bg-[#D4BA97]/30" />

      <div className="mx-auto max-w-7xl px-6 py-16 sm:px-10 lg:px-12 lg:py-20">

        {/* CTA PRINCIPAL */}
        <div className="grid gap-10 border-b border-white/10 pb-14 lg:grid-cols-[1.2fr_0.8fr] lg:items-end">

          <div>
            <span className="text-xs font-semibold uppercase tracking-[0.3em] text-[#D4BA97]">
              Mendoza Estudiantil
            </span>

            <h2 className="mt-5 max-w-3xl text-3xl font-semibold uppercase leading-[1.05] sm:text-4xl lg:text-5xl">
              ¿Listos para vivir
              <br />
              <span className="text-[#D4BA97]">
                Mendoza de otra manera?
              </span>
            </h2>

            <p className="mt-5 max-w-xl text-sm leading-7 text-white/65 sm:text-base">
              Organizamos experiencias educativas y turísticas pensadas
              especialmente para grupos estudiantiles.
            </p>
          </div>

          <div className="lg:justify-self-end">
            <a
              href="#"
              className="group inline-flex items-center gap-4 rounded-full bg-[#F3EDDC] px-7 py-4 text-sm font-semibold text-[#573325] transition hover:bg-[#D4BA97]"
            >
              Consultanos por WhatsApp

              <span className="transition-transform group-hover:translate-x-1">
                →
              </span>
            </a>
          </div>

        </div>

        {/* FOOTER PRINCIPAL */}
        <div className="grid gap-12 py-12 sm:grid-cols-2 lg:grid-cols-4">

          {/* LOGO / MARCA */}
          <div className="sm:col-span-2 lg:col-span-1">
            <Image
              src={logo}
              alt="Mendoza Estudiantil"
              width={180}
              height={70}
              className="h-auto w-[160px]"
            />

            <p className="mt-5 max-w-xs text-sm leading-6 text-white/55">
              Experiencias que combinan educación, turismo y momentos
              inolvidables en Mendoza.
            </p>
          </div>

          {/* NAVEGACIÓN */}
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.25em] text-[#D4BA97]">
              Navegación
            </p>

            <nav className="mt-5 flex flex-col gap-3">
              <a
                href="#inicio"
                className="w-fit text-sm text-white/65 transition hover:text-white"
              >
                Inicio
              </a>

              <a
                href="#experiencias"
                className="w-fit text-sm text-white/65 transition hover:text-white"
              >
                Experiencias
              </a>

              <a
                href="#nosotros"
                className="w-fit text-sm text-white/65 transition hover:text-white"
              >
                Nosotros
              </a>

              <a
                href="#galeria"
                className="w-fit text-sm text-white/65 transition hover:text-white"
              >
                Galería
              </a>
            </nav>
          </div>

          {/* PAQUETES */}
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.25em] text-[#D4BA97]">
              Paquetes
            </p>

            <div className="mt-5 flex flex-col gap-3">
              <a
                href="#experiencias"
                className="w-fit text-sm text-white/65 transition hover:text-white"
              >
                Cóndor
              </a>

              <a
                href="#experiencias"
                className="w-fit text-sm text-white/65 transition hover:text-white"
              >
                Andes
              </a>

              <a
                href="#experiencias"
                className="w-fit text-sm text-white/65 transition hover:text-white"
              >
                Comparar experiencias
              </a>
            </div>
          </div>

          {/* CONTACTO */}
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.25em] text-[#D4BA97]">
              Contacto
            </p>

            <div className="mt-5 flex flex-col gap-3 text-sm text-white/65">
              <p>Mendoza, Argentina</p>

              <a
                href="mailto:info@mendozaestudiantil.com"
                className="w-fit transition hover:text-white"
              >
                info@mendozaestudiantil.com
              </a>

              <a
                href="#"
                className="w-fit transition hover:text-white"
              >
                WhatsApp
              </a>

              <a
                href="#"
                className="w-fit transition hover:text-white"
              >
                Instagram
              </a>
            </div>
          </div>

        </div>

        {/* COPYRIGHT */}
        <div className="flex flex-col gap-4 border-t border-white/10 pt-7 text-xs text-white/40 sm:flex-row sm:items-center sm:justify-between">

          <p>
            © {new Date().getFullYear()} Mendoza Estudiantil. Todos los
            derechos reservados.
          </p>

          <p>
            Mendoza · Argentina
          </p>

        </div>
      </div>

      {/* DETALLE DECORATIVO */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -bottom-32 -right-32 h-80 w-80 rounded-full border border-[#D4BA97]/10"
      />

      <div
        aria-hidden="true"
        className="pointer-events-none absolute -bottom-20 -right-20 h-52 w-52 rounded-full border border-[#D4BA97]/10"
      />
    </footer>
  );
}