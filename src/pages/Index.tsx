
import HeroSection from "@/components/HeroSection";
import MissionSection from "@/components/MissionSection";
import AboutSection from "@/components/AboutSection";
import ServicesSection from "@/components/ServicesSection";
import GuaranteesSection from "@/components/GuaranteesSection";
import ProcessSection from "@/components/ProcessSection";
import CoverageSection from "@/components/CoverageSection";
import FAQSection from "@/components/FAQSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <HeroSection />
      <MissionSection />
      <AboutSection />
      <ServicesSection />
      <GuaranteesSection />
      <ProcessSection />
      <CoverageSection />
      <FAQSection />
      <Footer />
    </div>
  );
};

export default Index;
