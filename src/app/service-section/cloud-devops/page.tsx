import CaseStudies from '@/section/cloud-devops/CaseStudies'
import CloudHero from '@/section/cloud-devops/CloudHero'
import CloudMigration from '@/section/cloud-devops/CloudMigration'
import CloudPlatforms from '@/section/cloud-devops/CloudPlatforms'
import CoreCloudServices from '@/section/cloud-devops/CoreCloudServices'
import FAQSection from '@/section/cloud-devops/FAQSection'
import GetStarted from '@/section/cloud-devops/GetStarted'
import RelatedServices from '@/section/cloud-devops/RelatedServices'
import ServiceOverview from '@/section/cloud-devops/ServiceOverview'




import React from 'react'



export default function page() {
  return (
    <main>
      <CloudHero />
      <ServiceOverview />
      <CoreCloudServices />
      <CloudPlatforms />
      <CaseStudies />
      <CloudMigration />
      <FAQSection />
      <GetStarted />
      <RelatedServices />
      

    </main>
  )
}
