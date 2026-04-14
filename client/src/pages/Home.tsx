import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import CatalogSection from "@/components/CatalogSection";
import LabBanner from "@/components/LabBanner";
import AboutSection from "@/components/AboutSection";
import ConsultationSection from "@/components/ConsultationSection";
import ContactsSection from "@/components/ContactsSection";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main>
        <HeroSection />
        <CatalogSection />
        <LabBanner />
        <AboutSection />
        <ConsultationSection />
        <ContactsSection />
      </main>
      <Footer />
    </div>
  );
}
