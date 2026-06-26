import { useState } from "react";
import Header from "@/components/Header";
import { useSEO } from "@/hooks/useSEO";
import { homeSEO, organizationJsonLd } from "@/lib/seo";
import HeroSection from "@/components/HeroSection";
import CatalogSection from "@/components/CatalogSection";
import AboutSection from "@/components/AboutSection";
import ProductionSection from "@/components/ProductionSection";
import ContactsSection from "@/components/ContactsSection";
import Footer from "@/components/Footer";

export default function Home() {
  const [searchQuery, setSearchQuery] = useState("");

  useSEO({
    title: homeSEO.title,
    description: homeSEO.description,
    canonical: "/",
    jsonLd: organizationJsonLd,
  });

  const handleSearch = (query: string) => {
    setSearchQuery(query);
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main>
        <HeroSection onSearch={handleSearch} />
        <CatalogSection externalSearch={searchQuery} />
        <AboutSection />
        <ProductionSection />
        <ContactsSection />
      </main>
      <Footer />
    </div>
  );
}
