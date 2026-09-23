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
        <video
  className="mt-4 aspect-video w-full max-w-xl rounded-xl object-cover shadow-lg"
  controls
  preload="metadata"
>
  <source src="/video-presentacion.mp4" type="video/mp4" />
  Tu navegador no soporta videos.
</video>
      </div>
    </section>
  );
}
