import Image from "next/image";

type Package = {
  id: string;
  icon: string;
  name: string;
  tagline: string;
  image: string;
  imageAlt: string;
  features: string[];
};

const packages: Package[] = [
  {
    id: "condor",
    icon: "🦅",
    name: "CÓNDOR",
    tagline: "(Paquete PREMIUM / Completo)",
    image:
      "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?auto=format&fit=crop&w=600&q=80",
    imageAlt: "Mesa gourmet con maridaje de vinos",
    features: ["Alojamiento 5★", "Tours Privados", "Maridajes"],
  },
  {
    id: "andes",
    icon: "⛰️",
    name: "ANDES",
    tagline: "(Paquete INTERMEDIO)",
    image:
      "https://images.unsplash.com/photo-1551632811-561732d1e306?auto=format&fit=crop&w=600&q=80",
    imageAlt: "Excursionistas caminando por la montaña",
    features: ["Hotel 4★", "Excursiones Grupales"],
  },
  {
    id: "aconcagua",
    icon: "🏔️",
    name: "ACONCAGUA",
    tagline: "(Paquete BÁSICO / Económico)",
    image:
      "https://images.unsplash.com/photo-1519681393784-d120267933ba?auto=format&fit=crop&w=600&q=80",
    imageAlt: "Trekking en la cordillera de los Andes",
    features: ["Hostel/Posada", "Transporte Esencial"],
  },
];

export default function Packages() {
  return (
    <section className="bg-sky-50/60 px-6 py-14 sm:px-10">
      <div className="mx-auto max-w-5xl">
        <h2 className="text-center text-xl font-bold text-slate-900 sm:text-2xl">
          NUESTROS PAQUETES:{" "}
          <span className="font-normal">Elegí cómo querés vivir tu viaje</span>
        </h2>

        <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-3">
          {packages.map((pkg) => (
            <div
              key={pkg.id}
              className="flex flex-col rounded-lg border border-slate-200 bg-white p-5 shadow-sm"
            >
              <h3 className="flex items-center gap-2 text-base font-bold text-slate-900">
                <span aria-hidden>{pkg.icon}</span>
                {pkg.name}
              </h3>
              <p className="text-xs text-slate-500">{pkg.tagline}</p>

              <div className="relative mt-3 aspect-[4/3] w-full overflow-hidden rounded-md bg-slate-100">
                <Image
                  src={pkg.image}
                  alt={pkg.imageAlt}
                  fill
                  sizes="(min-width: 640px) 33vw, 100vw"
                  className="object-cover"
                />
              </div>

              <ul className="mt-4 flex-1 space-y-1.5 text-sm text-slate-700">
                {pkg.features.map((feature) => (
                  <li key={feature} className="flex items-center gap-2">
                    <span className="text-slate-400">•</span>
                    {feature}
                  </li>
                ))}
              </ul>

              <button
                type="button"
                className="mt-5 w-full rounded-md bg-sky-700 py-2 text-sm font-semibold text-white transition hover:bg-sky-800"
              >
                VER {pkg.name}
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
