
import { servicesData } from "@/data/AIML/allServicesData";
import ServiceSection from "@/section/AIML/ServiceSection";
import TechnologyStack from '@/section/AIML/TechnologyStack'
import AIDevelopmentProcess from "@/section/AIML/AIDevelopmentProcess";
import IndustryApplications from "@/section/AIML/IndustryApplications";
import CaseStudies from "@/section/AIML/CaseStudies";
import FAQ from "@/section/AIML/FAQ";
import GetStartedSection from "@/section/AIML/GetStartedSection";
import RelatedResourcesSection from "@/section/AIML/RelatedResourcesSection";
import AIHero from "@/section/AIML/AIHero";
import ServiceOverview from "@/section/AIML/ServiceOverview";

export default function ServicesPage() {
  return (
    <main>
     <AIHero />
      <ServiceOverview />
      {/* Render ALL sections dynamically */}
      {servicesData.map((service) => (
        <ServiceSection key={service.id} data={service} />
        
      ))}
      <TechnologyStack />
      <AIDevelopmentProcess />
      <IndustryApplications />
      <CaseStudies />
      <FAQ />
      <GetStartedSection />
      <RelatedResourcesSection />

    </main>
  );
}