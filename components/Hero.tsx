import Image from "next/image";

export default function Hero() {
  return (
    <section
      id="inicio"
      className="relative min-h-[calc(100vh-82px)] overflow-hidden"
    >
      {/* Imagen de fondo */}
      <div className="absolute inset-0">
        <Image
          src="https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&w=1800&q=85"
          alt="Cordillera de los Andes en Mendoza"
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />

        {/* Overlay */}
        <div className="absolute inset-0 bg-black/45" />

        {/* Degradado inferior */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#573325]/70 via-transparent to-black/20" />
      </div>

      {/* Contenido */}
      <div className="relative mx-auto flex min-h-[calc(100vh-82px)] max-w-7xl items-center px-6 py-16 sm:px-10 lg:px-12">
        <div className="grid w-full items-center gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:gap-16">

          {/* Texto */}
          <div className="max-w-xl text-white">
            <span className="mb-5 inline-block text-xs font-semibold uppercase tracking-[0.3em] text-[#D4BA97] sm:text-sm">
              Mendoza Estudiantil
            </span>

            <h1 className="text-4xl font-semibold uppercase leading-[0.95] tracking-tight sm:text-5xl lg:text-7xl">
              Descubrí
              <br />
              Mendoza
              <br />
              <span className="text-[#D4BA97]">a tu manera.</span>
            </h1>

            <p className="mt-7 max-w-md text-base leading-relaxed text-white/80 sm:text-lg">
              Experiencias educativas y turísticas pensadas para vivir,
              aprender y descubrir Mendoza de una manera diferente.
            </p>

            <div className="mt-8 flex flex-wrap items-center gap-4">
              <a
                href="#experiencias"
                className="rounded-full bg-[#F3EDDC] px-7 py-3.5 text-sm font-semibold text-[#573325] transition hover:bg-[#D4BA97]"
              >
                Conocé las experiencias
              </a>

              <a
                href="#contacto"
                className="rounded-full border border-white/40 px-7 py-3.5 text-sm font-semibold text-white backdrop-blur-sm transition hover:bg-white/10"
              >
                Contactanos
              </a>
            </div>
          </div>

          {/* Video */}
          <div className="relative lg:justify-self-end">
            <div className="absolute -inset-4 rounded-[2rem] border border-white/10" />

            <video
              className="relative aspect-video w-full max-w-2xl rounded-2xl object-cover shadow-2xl"
              controls
              preload="metadata"
            >
              <source src="/video-presentacion.mp4" type="video/mp4" />
              Tu navegador no soporta videos.
            </video>

            <div className="mt-4 flex items-center gap-3 text-white/70">
              <span className="h-px w-8 bg-[#D4BA97]" />

              <p className="text-xs uppercase tracking-[0.2em]">
                Conocé Mendoza Estudiantil
              </p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}