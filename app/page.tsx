import { AiServicesSection } from "@/components/AiServicesSection";
import { CapabilitiesSection } from "@/components/CapabilitiesSection";
import { CtaFooter } from "@/components/CtaFooter";
import { HeroSection } from "@/components/HeroSection";
import { OutcomesSection } from "@/components/OutcomesSection";
import { PartnersSection } from "@/components/PartnersSection";
import { ProblemSection } from "@/components/ProblemSection";
import { RoiCalculator } from "@/components/RoiCalculator";
import { SiteHeader } from "@/components/SiteHeader";
import { SuccessStories } from "@/components/SuccessStories";
import { TimelineSection } from "@/components/TimelineSection";
import { TopBanner } from "@/components/TopBanner";

export default function HomePage() {
  return (
    <>
      <TopBanner />
      <SiteHeader />
      <main>
        <HeroSection />
        <ProblemSection />
        <CapabilitiesSection />
        <OutcomesSection />
        <AiServicesSection />
        <TimelineSection />
        <SuccessStories />
        <PartnersSection />
        <RoiCalculator />
        <CtaFooter />
      </main>
    </>
  );
}
