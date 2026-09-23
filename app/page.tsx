import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Packages from "@/components/Packages";
import ComparisonTable from "@/components/ComparisonTable";
import Footer from "@/components/Footer";
import Brands from "@/components/Brands";

export default function Home() {
  return (
    <>
      <Header />
      <main className="flex-1">
        <Hero />
        <Packages />
        <ComparisonTable />
        <Brands/>
      </main>
      <Footer />
    </>
  );
}
