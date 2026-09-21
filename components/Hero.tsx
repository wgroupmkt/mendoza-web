import Image from "next/image";

export default function Hero() {
  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0">
        <Image
          src="https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&w=1600&q=80"
          alt="Cordillera de los Andes en Mendoza"
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />
        <div className="absolute inset-0 bg-white/55" />
      </div>

      <div className="relative mx-auto flex max-w-3xl flex-col items-center gap-4 px-6 py-14 text-center sm:py-20">
        <h1 className="text-2xl font-extrabold tracking-tight text-slate-900 sm:text-4xl">
          DESCUBRÍ MENDOZA A TU MANERA
        </h1>
        <p className="text-sm text-slate-700 sm:text-base">
          ¿Quiénes somos? (Video de Presentación de Experiencias)
        </p>

        <button
          type="button"
          aria-label="Reproducir video de presentación"
          className="group mt-4 flex aspect-video w-full max-w-xl items-center justify-center rounded-xl bg-slate-300/90 shadow-lg transition hover:bg-slate-300"
        >
          <span className="flex h-16 w-16 items-center justify-center rounded-full bg-white/90 shadow-md transition group-hover:scale-105 sm:h-20 sm:w-20">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="ml-1 h-7 w-7 text-slate-500 sm:h-9 sm:w-9"
            >
              <path d="M8 5v14l11-7z" />
            </svg>
          </span>
        </button>
      </div>
    </section>
  );
}
