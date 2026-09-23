import Image from "next/image";

const packages = [
  {
    id: "condor",
    number: "01",
    name: "CÓNDOR",
    subtitle: "La experiencia más completa",
    image:
      "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&w=1200&q=85",
    options: [
      {
        title: "Opción 1",
        duration: "5 días / 4 noches",
        transport: "Nogal de Cuyo",
        hotel: "Hilton",
        breakfast: "Chocolezza",
        activities: [
          "Circuito Chico / Costa Norte",
          "Alta Montaña (educativo)",
          "Complejos (estudiantil)",
          "Tour Bodega + Sunset",
          "Parque Recreativo",
        ],
      },
      {
        title: "Opción 2",
        duration: "4 días / 3 noches",
        transport: "Nogal de Cuyo",
        hotel: "Hilton",
        breakfast: "Chocolezza",
        activities: [
          "Circuito Chico / Costa Norte",
          "Alta Montaña (educativo)",
          "Complejos (estudiantil)",
          "Tour Bodega + Sunset",
        ],
      },
    ],
  },

  {
    id: "andes",
    number: "02",
    name: "ANDES",
    subtitle: "Mendoza en pocos días",
    image:
      "https://images.unsplash.com/photo-1551632811-561732d1e306?auto=format&fit=crop&w=1200&q=85",
    options: [
      {
        title: "Opción 1",
        duration: "3 días / 2 noches",
        transport: "Nogal de Cuyo",
        hotel: "3 y 4 estrellas",
        breakfast: "Chocolezza",
        activities: [
          "Circuito Chico / Costa Norte",
          "Tour Bodega + Sunset",
        ],
      },
      {
        title: "Opción 2",
        duration: "2 días / 1 noche",
        transport: "Nogal de Cuyo",
        hotel: "3 y 4 estrellas",
        breakfast: "Chocolezza",
        activities: ["Circuito Chico / Costa Norte"],
      },
    ],
  },
];

export default function Packages() {
  return (
    <section
      id="experiencias"
      className="bg-[#F3EDDC] px-6 py-20 sm:px-10 lg:py-28"
    >
      <div className="mx-auto max-w-7xl">

        {/* CABECERA */}
        <div className="mb-14 max-w-3xl">
          <span className="mb-4 block text-xs font-semibold uppercase tracking-[0.3em] text-[#8A7354]">
            Paquetes Mendoza
          </span>

          <h2 className="text-4xl font-semibold uppercase leading-[1] text-[#573325] sm:text-5xl lg:text-6xl">
            Elegí tu forma
            <br />
            <span className="text-[#8A7354]">de vivir Mendoza.</span>
          </h2>

          <p className="mt-6 max-w-xl text-base leading-7 text-[#573325]/70">
            Experiencias pensadas para grupos estudiantiles, combinando
            turismo, educación y momentos para disfrutar Mendoza.
          </p>
        </div>

        {/* PAQUETES */}
        <div className="space-y-10">
          {packages.map((pkg) => (
            <article
              key={pkg.id}
              className="overflow-hidden rounded-[2rem] bg-white shadow-sm"
            >
              <div className="grid lg:grid-cols-[0.8fr_1.2fr]">

                {/* IMAGEN */}
                <div className="relative min-h-[350px] lg:min-h-[650px]">
                  <Image
                    src={pkg.image}
                    alt={`Paquete ${pkg.name}`}
                    fill
                    sizes="(max-width: 1024px) 100vw, 40vw"
                    className="object-cover"
                  />

                  <div className="absolute inset-0 bg-gradient-to-t from-[#573325]/90 via-[#573325]/20 to-transparent" />

                  <span className="absolute right-7 top-7 text-sm tracking-[0.2em] text-white/70">
                    {pkg.number}
                  </span>

                  <div className="absolute bottom-0 left-0 p-8 sm:p-10">
                    <span className="text-xs font-semibold uppercase tracking-[0.25em] text-[#D4BA97]">
                      Paquete Mendoza
                    </span>

                    <h3 className="mt-2 text-5xl font-semibold text-white lg:text-6xl">
                      {pkg.name}
                    </h3>

                    <p className="mt-3 text-sm text-white/70">
                      {pkg.subtitle}
                    </p>
                  </div>
                </div>

                {/* OPCIONES */}
                <div className="p-7 sm:p-10 lg:p-12">
                  <div className="grid gap-10 md:grid-cols-2">
                    {pkg.options.map((option, index) => (
                      <div
                        key={index}
                        className="flex flex-col border-[#573325]/10 md:border-r md:pr-8 md:last:border-none"
                      >
                        <span className="text-xs font-semibold uppercase tracking-[0.2em] text-[#8A7354]">
                          {option.title}
                        </span>

                        <h4 className="mt-2 text-2xl font-semibold text-[#573325]">
                          {option.duration}
                        </h4>

                        {/* SERVICIOS */}
                        <div className="mt-7 space-y-3 text-sm text-[#573325]/75">
                          <p>
                            <span className="font-semibold text-[#573325]">
                              Transporte:
                            </span>{" "}
                            {option.transport}
                          </p>

                          <p>
                            <span className="font-semibold text-[#573325]">
                              Hotelería:
                            </span>{" "}
                            {option.hotel}
                          </p>

                          <p>
                            <span className="font-semibold text-[#573325]">
                              Desayuno:
                            </span>{" "}
                            {option.breakfast}
                          </p>
                        </div>

                        {/* ACTIVIDADES */}
                        <div className="mt-7">
                          <p className="mb-4 text-xs font-semibold uppercase tracking-[0.2em] text-[#8A7354]">
                            Actividades
                          </p>

                          <ul className="space-y-3">
                            {option.activities.map((activity) => (
                              <li
                                key={activity}
                                className="flex gap-3 text-sm leading-6 text-[#573325]/75"
                              >
                                <span className="mt-[9px] h-1.5 w-1.5 shrink-0 rounded-full bg-[#D4BA97]" />

                                {activity}
                              </li>
                            ))}
                          </ul>
                        </div>

                        {/* CTA */}
                        <a
                          href="#contacto"
                          className="mt-8 inline-flex w-fit items-center gap-3 border-b border-[#573325] pb-1 text-sm font-semibold text-[#573325] transition hover:gap-5"
                        >
                          Consultar paquete
                          <span>→</span>
                        </a>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}