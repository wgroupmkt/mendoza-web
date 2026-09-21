import type { ReactNode } from "react";

const Check = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth={3}
    strokeLinecap="round"
    strokeLinejoin="round"
    className="mx-auto h-4 w-4 text-emerald-600"
  >
    <polyline points="20 6 9 17 4 12" />
  </svg>
);

const Dash = () => <span className="text-slate-300">—</span>;

const columns = [
  { id: "condor", icon: "🦅", name: "CÓNDOR", tagline: "(Paquete PREMIUM / Completo)" },
  { id: "andes", icon: "⛰️", name: "ANDES", tagline: "(Paquete INTERMEDIO)" },
  { id: "aconcagua", icon: "🏔️", name: "ACONCAGUA", tagline: "(Paquete BÁSICO / Económico)" },
];

const rows: { label: string; values: [ReactNode, ReactNode, ReactNode] }[] = [
  { label: "Traslados", values: [<Check key="c" />, <Check key="a" />, <Check key="ac" />] },
  { label: "Alojamiento", values: ["Alojamiento 5★", "Hotel 4★", "Hostel/Posada"] },
  { label: "Actividades", values: ["Tours Privados", "Excursiones Grupales", "Transporte Esencial"] },
  { label: "Bodegas", values: ["Maridajes y degustaciones", <Dash key="a" />, <Dash key="ac" />] },
  { label: "Guías", values: [<Check key="c" />, <Check key="a" />, <Dash key="ac" />] },
];

export default function ComparisonTable() {
  return (
    <section className="bg-white px-6 py-14 sm:px-10">
      <div className="mx-auto max-w-4xl">
        <h2 className="text-center text-xl font-bold text-slate-900 sm:text-2xl">
          ¿QUÉ INCLUYE CADA EXPERIENCIA?
        </h2>

        <div className="mt-8 overflow-x-auto">
          <table className="w-full min-w-[560px] border-collapse text-sm">
            <thead>
              <tr>
                <th className="w-1/4" />
                {columns.map((col) => (
                  <th
                    key={col.id}
                    className={`border border-slate-200 px-3 py-3 text-center font-bold text-slate-900 ${
                      col.id === "condor" ? "bg-sky-100" : "bg-slate-50"
                    }`}
                  >
                    <div className="flex items-center justify-center gap-1.5">
                      <span aria-hidden>{col.icon}</span>
                      {col.name}
                    </div>
                    <div className="mt-1 text-[11px] font-normal text-slate-500">
                      {col.tagline}
                    </div>
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {rows.map((row) => (
                <tr key={row.label}>
                  <th
                    scope="row"
                    className="border border-slate-200 bg-slate-50 px-3 py-3 text-left font-semibold text-slate-800"
                  >
                    {row.label}
                  </th>
                  {row.values.map((value, i) => (
                    <td
                      key={columns[i].id}
                      className={`border border-slate-200 px-3 py-3 text-center text-slate-700 ${
                        columns[i].id === "condor" ? "bg-sky-50" : ""
                      }`}
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
    </section>
  );
}
