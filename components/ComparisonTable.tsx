import type { ReactNode } from "react";

const Check = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth={2.5}
    strokeLinecap="round"
    strokeLinejoin="round"
    className="mx-auto h-5 w-5 text-[#8A7354]"
  >
    <polyline points="20 6 9 17 4 12" />
  </svg>
);

const Dash = () => (
  <span className="text-lg text-[#573325]/20">—</span>
);

const columns = [
  {
    id: "condor-5",
    package: "CÓNDOR",
    duration: "5 días / 4 noches",
  },
  {
    id: "condor-4",
    package: "CÓNDOR",
    duration: "4 días / 3 noches",
  },
  {
    id: "andes-3",
    package: "ANDES",
    duration: "3 días / 2 noches",
  },
  {
    id: "andes-2",
    package: "ANDES",
    duration: "2 días / 1 noche",
  },
];

const rows: {
  label: string;
  values: [ReactNode, ReactNode, ReactNode, ReactNode];
}[] = [
  {
    label: "Transporte",
    values: [
      "Nogal de Cuyo",
      "Nogal de Cuyo",
      "Nogal de Cuyo",
      "Nogal de Cuyo",
    ],
  },
  {
    label: "Hotelería",
    values: ["Hilton", "Hilton", "3 y 4 estrellas", "3 y 4 estrellas"],
  },
  {
    label: "Desayuno",
    values: ["Chocolezza", "Chocolezza", "Chocolezza", "Chocolezza"],
  },
  {
    label: "Circuito Chico / Costa Norte",
    values: [
      <Check key="1" />,
      <Check key="2" />,
      <Check key="3" />,
      <Check key="4" />,
    ],
  },
  {
    label: "Alta Montaña",
    values: [
      <Check key="1" />,
      <Check key="2" />,
      <Dash key="3" />,
      <Dash key="4" />,
    ],
  },
  {
    label: "Complejos estudiantiles",
    values: [
      <Check key="1" />,
      <Check key="2" />,
      <Dash key="3" />,
      <Dash key="4" />,
    ],
  },
  {
    label: "Tour Bodega + Sunset",
    values: [
      <Check key="1" />,
      <Check key="2" />,
      <Check key="3" />,
      <Dash key="4" />,
    ],
  },
  {
    label: "Parque Recreativo",
    values: [
      <Check key="1" />,
      <Dash key="2" />,
      <Dash key="3" />,
      <Dash key="4" />,
    ],
  },
];

export default function ComparisonTable() {
  return (
    <section className="bg-white px-6 py-20 sm:px-10 lg:py-28">
      <div className="mx-auto max-w-7xl">

        {/* HEADER */}
        <div className="mx-auto max-w-3xl text-center">
          <span className="text-xs font-semibold uppercase tracking-[0.3em] text-[#8A7354]">
            Compará las experiencias
          </span>

          <h2 className="mt-4 text-3xl font-semibold uppercase leading-tight text-[#573325] sm:text-4xl lg:text-5xl">
            ¿Qué incluye
            <span className="text-[#8A7354]"> cada opción?</span>
          </h2>

          <p className="mx-auto mt-5 max-w-xl text-sm leading-7 text-[#573325]/65 sm:text-base">
            Encontrá la experiencia que mejor se adapte a tu grupo y al tiempo
            disponible para disfrutar Mendoza.
          </p>
        </div>

        {/* TABLA */}
        <div className="mt-12 overflow-hidden rounded-[2rem] border border-[#573325]/10">
          <div className="overflow-x-auto">
            <table className="w-full min-w-[900px] border-collapse text-sm">

              <thead>
                <tr>
                  <th className="w-[220px] bg-[#573325] p-6 text-left text-[#F3EDDC]">
                    Incluye
                  </th>

                  {columns.map((col) => (
                    <th
                      key={col.id}
                      className={`border-l border-white/10 p-6 text-center ${
                        col.package === "CÓNDOR"
                          ? "bg-[#573325]"
                          : "bg-[#8A7354]"
                      }`}
                    >
                      <span className="block text-xs font-medium uppercase tracking-[0.2em] text-[#D4BA97]">
                        Paquete
                      </span>

                      <span className="mt-2 block text-xl font-semibold text-white">
                        {col.package}
                      </span>

                      <span className="mt-1 block text-xs font-normal text-white/70">
                        {col.duration}
                      </span>
                    </th>
                  ))}
                </tr>
              </thead>

              <tbody>
                {rows.map((row, rowIndex) => (
                  <tr
                    key={row.label}
                    className={
                      rowIndex % 2 === 0
                        ? "bg-[#F3EDDC]/60"
                        : "bg-white"
                    }
                  >
                    <th
                      scope="row"
                      className="border-r border-t border-[#573325]/10 px-6 py-5 text-left font-semibold text-[#573325]"
                    >
                      {row.label}
                    </th>

                    {row.values.map((value, index) => (
                      <td
                        key={columns[index].id}
                        className="border-l border-t border-[#573325]/10 px-5 py-5 text-center text-[#573325]/75"
                      >
                        {value}
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>

            </table>
          </div>
        </div>

        {/* AYUDA */}
        <div className="mt-8 flex flex-col items-center justify-between gap-5 rounded-2xl bg-[#F3EDDC] px-6 py-6 sm:flex-row sm:px-8">
          <div>
            <p className="font-semibold text-[#573325]">
              ¿No sabés qué opción elegir?
            </p>

            <p className="mt-1 text-sm text-[#573325]/60">
              Te ayudamos a encontrar la experiencia ideal para tu grupo.
            </p>
          </div>

          <a
            href="#contacto"
            className="shrink-0 rounded-full bg-[#573325] px-7 py-3 text-sm font-semibold text-[#F3EDDC] transition hover:bg-[#8A7354]"
          >
            Consultanos
          </a>
        </div>

      </div>
    </section>
  );
}