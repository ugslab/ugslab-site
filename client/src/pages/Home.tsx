import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import WhyChinaSection from "@/components/WhyChinaSection";
import HowWeWorkSection from "@/components/HowWeWorkSection";
import PackagingSection from "@/components/PackagingSection";
import CatalogSection from "@/components/CatalogSection";
import HowToOrderSection from "@/components/HowToOrderSection";
import AboutSection from "@/components/AboutSection";
import ProductionSection from "@/components/ProductionSection";
import ContactsSection from "@/components/ContactsSection";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main>
        <HeroSection />
        <WhyChinaSection />
        <HowWeWorkSection />
        <PackagingSection />
        <CatalogSection />
        <HowToOrderSection />
        <AboutSection />
        <ProductionSection />
        <ContactsSection />
      </main>
      <Footer />
    </div>
  );
}
