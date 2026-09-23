import Image from "next/image";
import marcas from "../public/marcas.jpeg"

export default function Brands() {
  return (
    <section className="bg-[#F3EDDC] px-6 py-16 sm:px-10 lg:py-24">
      <div className="mx-auto max-w-7xl">

        {/* Encabezado */}
        <div className="mb-10 text-center">
          <span className="text-xs font-semibold uppercase tracking-[0.3em] text-[#8A7354]">
            Trabajamos juntos
          </span>

          <h2 className="mt-4 text-3xl font-semibold uppercase text-[#573325] sm:text-4xl lg:text-5xl">
            Marcas que nos
            <span className="text-[#8A7354]"> acompañan</span>
          </h2>

          <p className="mx-auto mt-4 max-w-2xl text-sm leading-7 text-[#573325]/65 sm:text-base">
            Empresas y espacios que forman parte de las experiencias de
            Mendoza Estudiantil.
          </p>
        </div>

        {/* Imagen */}
        <div className="overflow-hidden rounded-[2rem]">
          <Image
            src={marcas}
            alt="Marcas que acompañan a Mendoza Estudiantil"
            width={1920}
            height={1080}
            className="h-auto w-full"
          />
        </div>

      </div>
    </section>
  );
}