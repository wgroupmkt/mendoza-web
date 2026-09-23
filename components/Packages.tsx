import Image from "next/image";
import principal from "../public/Principal.jpeg"

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
          <Image src={principal} className="mt-10"></Image>
        
      </div>
    </section>
  );
}
