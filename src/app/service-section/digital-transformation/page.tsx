import CaseStudies from '@/section/Digital/CaseStudies.tsx'
import CoreServices from '@/section/Digital/CoreServices'
import DigitalTransformationHero from '@/section/Digital/DigitalTransformationHero'
import FAQSection from '@/section/Digital/FAQSection'
import GetStarted from '@/section/Digital/GetStarted'
import IndustryTransformation from '@/section/Digital/IndustryTransformation'
import RelatedServices from '@/section/Digital/RelatedServices'
import ServiceOverview from '@/section/Digital/ServiceOverview'
import TransformationMethodology from '@/section/Digital/TransformationMethodology'



export default function page() {
  return (
    <main>
      <DigitalTransformationHero />
      <ServiceOverview />
      <CoreServices />
      <TransformationMethodology />
      <IndustryTransformation />
      <CaseStudies />
      <FAQSection />
      <GetStarted />
      <RelatedServices />
    </main>
  )
}
