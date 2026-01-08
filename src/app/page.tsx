import Hero from "@/section/Hero"
import About from "@/section/About"
// import ServicesPage from "./service/page"
import Service from "@/section/Service"
// import Partners from "@/section/Partners"
import Client from "@/section/Client"
import Partner from "@/section/Partner"
import Contact from "@/section/Contact"
import Location from "@/section/Location"
import Career from "@/section/Career"
import IndustryFocus from "@/section/IndustryFocus"
import WhyChooseUs from "@/section/WhyChooseUs"
import LatestInsights from "@/section/LatestInsights"


// import CareerPage from "./career/page"



// import Team from "@/section/Team"

export default function page() {
  return (
    <>
    <Hero />
    <About />
    <Service />
    <IndustryFocus />
    <WhyChooseUs />
    <Partner />
    <Client />
    <LatestInsights />
    <Career />
    <Contact />
    <Location />
    
    {/* <Team /> */}
   
    
    </>
  )
}
