import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import VisionMissionSection from "@/components/VisionMissionSection";
import ServicesSection from "@/components/ServicesSection";

import TeamSection from "@/components/TeamSection";
import AffiliationsSection from "@/components/AffiliationsSection";

const Index = () => {
  return (
    <div className="min-h-screen">
      <HeroSection />
      <AboutSection />
      <VisionMissionSection />
      <ServicesSection />
      <TeamSection />
      <AffiliationsSection />
    </div>
  );
};

export default Index;
