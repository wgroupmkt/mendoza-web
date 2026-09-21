export default function Footer() {
  return (
    <footer className="bg-sky-50 px-6 py-8 sm:px-10">
      <div className="mx-auto flex max-w-4xl flex-col items-center gap-4 text-sm font-semibold text-slate-800 sm:flex-row sm:justify-around">
        <a href="#contacto" className="hover:text-sky-700">
          Contacto
        </a>
        <a href="#redes" className="hover:text-sky-700">
          Redes Sociales
        </a>
        <a href="#mapa" className="hover:text-sky-700">
          Mapa
        </a>
      </div>
    </footer>
  );
}
