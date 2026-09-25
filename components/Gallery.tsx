"use client";

import { useEffect, useState } from "react";
import Image, { StaticImageData } from "next/image";

import foto1 from "../public/galeria/foto1.jpg";
import foto2 from "../public/galeria/foto2.jpg";
import foto3 from "../public/galeria/foto3.jpg";
import foto4 from "../public/galeria/foto4.jpg";
import foto5 from "../public/galeria/foto5.jpg";
import foto6 from "../public/galeria/foto6.jpg";
import foto7 from "../public/galeria/foto7.jpg";
import foto8 from "../public/galeria/foto8.jpg";

type GalleryItem = {
  src: StaticImageData;
  alt: string;
  className?: string;
};

const images: GalleryItem[] = [
  {
    src: foto1,
    alt: "Experiencia Mendoza Estudiantil",
    className: "md:col-span-2 md:row-span-2",
  },
  {
    src: foto2,
    alt: "Viaje estudiantil en Mendoza",
  },
  {
    src: foto3,
    alt: "Actividades en Mendoza",
  },
  {
    src: foto4,
    alt: "Grupo de estudiantes en Mendoza",
  },
  {
    src: foto5,
    alt: "Experiencias estudiantiles",
  },
  {
    src: foto6,
    alt: "Experiencias estudiantiles",
  },
  {
    src: foto7,
    alt: "Experiencias estudiantiles",
  },
  {
    src: foto8,
    alt: "Paisajes de Mendoza",
    className: "md:col-span-2",
  },
];

export default function Gallery() {
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);

  const nextImage = () => {
    if (selectedIndex === null) return;

    setSelectedIndex((selectedIndex + 1) % images.length);
  };

  const previousImage = () => {
    if (selectedIndex === null) return;

    setSelectedIndex(
      selectedIndex === 0 ? images.length - 1 : selectedIndex - 1
    );
  };

  const closeLightbox = () => {
    setSelectedIndex(null);
  };

  // Permite usar teclado
  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (selectedIndex === null) return;

      if (event.key === "Escape") {
        closeLightbox();
      }

      if (event.key === "ArrowRight") {
        nextImage();
      }

      if (event.key === "ArrowLeft") {
        previousImage();
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [selectedIndex]);

  return (
    <>
      <section
        id="galeria"
        className="bg-[#F3EDDC] px-6 py-16 sm:px-10 lg:py-24"
      >
        <div className="mx-auto max-w-7xl">

          {/* Encabezado */}
          <div className="mb-12 text-center">
            <span className="text-xs font-semibold uppercase tracking-[0.3em] text-[#8A7354]">
              Momentos inolvidables
            </span>

            <h2 className="mt-4 text-3xl font-semibold uppercase text-[#573325] sm:text-4xl lg:text-5xl">
              Nuestra
              <span className="text-[#8A7354]"> galería</span>
            </h2>

            <p className="mx-auto mt-4 max-w-2xl text-sm leading-7 text-[#573325]/65 sm:text-base">
              Conocé algunos de los momentos, lugares y experiencias que forman
              parte de cada viaje de Mendoza Estudiantil.
            </p>
          </div>

          {/* Galería */}
          <div className="grid auto-rows-[220px] grid-cols-1 gap-4 sm:grid-cols-2 md:auto-rows-[240px] lg:grid-cols-4">
            {images.map((image, index) => (
              <button
                key={index}
                type="button"
                onClick={() => setSelectedIndex(index)}
                className={`group relative overflow-hidden rounded-[2rem] cursor-pointer ${
                  image.className ?? ""
                }`}
              >
                <Image
                  src={image.src}
                  alt={image.alt}
                  fill
                  sizes="
                    (max-width: 640px) 100vw,
                    (max-width: 1024px) 50vw,
                    25vw
                  "
                  className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                />

                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#573325]/30 via-transparent to-transparent transition duration-500 group-hover:bg-[#573325]/10" />

                {/* Icono */}
                <div className="absolute inset-0 flex items-center justify-center opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-white/90 text-xl text-[#573325] shadow-lg backdrop-blur">
                    ↗
                  </div>
                </div>
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* LIGHTBOX */}
      {selectedIndex !== null && (
        <div
          className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/90 p-4 backdrop-blur-sm"
          onClick={closeLightbox}
        >
          {/* Cerrar */}
          <button
            type="button"
            onClick={closeLightbox}
            className="absolute right-5 top-5 z-50 flex h-12 w-12 items-center justify-center rounded-full bg-white/10 text-2xl text-white transition hover:bg-white/20"
          >
            ✕
          </button>

          {/* Contador */}
          <div className="absolute left-1/2 top-6 -translate-x-1/2 rounded-full bg-white/10 px-4 py-2 text-sm text-white backdrop-blur-md">
            {selectedIndex + 1} / {images.length}
          </div>

          {/* Flecha izquierda */}
          <button
            type="button"
            onClick={(e) => {
              e.stopPropagation();
              previousImage();
            }}
            className="absolute left-3 z-50 flex h-12 w-12 items-center justify-center rounded-full bg-white/10 text-3xl text-white transition hover:bg-white/20 sm:left-8"
          >
            ‹
          </button>

          {/* Imagen grande */}
          <div
            className="relative h-[75vh] w-full max-w-6xl"
            onClick={(e) => e.stopPropagation()}
          >
            <Image
              src={images[selectedIndex].src}
              alt={images[selectedIndex].alt}
              fill
              priority
              sizes="100vw"
              className="object-contain"
            />
          </div>

          {/* Flecha derecha */}
          <button
            type="button"
            onClick={(e) => {
              e.stopPropagation();
              nextImage();
            }}
            className="absolute right-3 z-50 flex h-12 w-12 items-center justify-center rounded-full bg-white/10 text-3xl text-white transition hover:bg-white/20 sm:right-8"
          >
            ›
          </button>
        </div>
      )}
    </>
  );
}