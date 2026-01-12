import Hero from "@/section/home/Hero"
import About from "@/section/home/About"
// import ServicesPage from "./service/page"
import Service from "@/section/home/Service"
// import Partners from "@/section/Partners"
import Client from "@/section/home/Client"
import Partner from "@/section/home/Partner"
import Contact from "@/section/home/Contact"
import Location from "@/section/home/Location"
import Career from "@/section/home/Career"
import IndustryFocus from "@/section/home/IndustryFocus"
import WhyChooseUs from "@/section/home/WhyChooseUs"
import LatestInsights from "@/section/home/LatestInsights"


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
