"use client";

import { useState, useRef } from "react";
import Link from "next/link";
import { 
  Smartphone, 
  Globe, 
  ShoppingBag, 
  Zap, 
  ExternalLink, 
  ChevronRight,
  Monitor
} from "lucide-react";

// --- Types ---
type ProjectLogo = {
  name: string;
  image: string;
  link: string;
};

type Category = "Dynamic" | "E-commerce" | "Static" | "Mobile";

interface ProjectCategory {
  id: Category;
  title: string;
  shortTitle: string;
  icon: any;
  description: string;
  logos: ProjectLogo[];
}

export default function Projects() {
  const [activeTab, setActiveTab] = useState<Category>("Dynamic");
  const scrollRef = useRef<HTMLDivElement>(null);

  const projectData: ProjectCategory[] = [
    {
      id: "Dynamic",
      title: "Dynamic Applications",
      shortTitle: "Dynamic",
      icon: Monitor,
      description: "Enterprise-grade web systems featuring real-time data sync and complex backend architectures.",
      logos: [
        { name: "24sju", image: "./assets/images/24sju.png", link: "https://www.24-sju.se/" },
        { name: "Rorstrand Museum", image: "./assets/images/rorstrand.png", link: "https://rorstrand-museum.se/" },
        { name: "FP Analyzer", image: "./assets/images/fpanalyzer.png", link: "https://www.fpanalyzer.se/" },
        { name: "ThingsAtWeb", image: "./assets/images/thingsatweb.png", link: "https://www.thingsatweb.se/" },
        { name: "Value Charts", image: "./assets/images/valueflow.png", link: "https://www.valueflowsoft.com/" },
        { name: "Vrickade Teatern", image: "./assets/images/vrickade.png", link: "https://vrickadeteatern.se/" },
        { name: "LaserClean", image: "./assets/images/laserclean.png", link: "https://laserclean.se/" },
        { name: "Hindustan", image: "./assets/images/hindustan.png", link: "https://hcaschennai.edu.in/" },
        { name: "Sahayya Finserve", image: "./assets/images/sahaya.png", link: "https://www.sahayyafinserve.com/" },
        { name: "Sri Balaji", image: "./assets/images/sribalaji.png", link: "https://www.sribalajiscience.com/" },
      ]
    },
    {
      id: "E-commerce",
      title: "Digital Commerce",
      shortTitle: "E-comm",
      icon: ShoppingBag,
      description: "High-conversion retail platforms integrated with global payment gateways and inventory logic.",
      logos: [
        { name: "Bovalls", image: "./assets/images/bovalls.png", link: "https://www.bovalls.com/" },
        { name: "Smart Storing", image: "./assets/images/smartstoring.png", link: "https://smartstoring.eu/" },
        { name: "Snus24", image: "./assets/images/snus24.png", link: "https://www.snus24.com/" },
      ]
    },
    {
      id: "Static",
      title: "Corporate Identity",
      shortTitle: "Static",
      icon: Globe,
      description: "Ultra-high performance static sites optimized for maximum SEO reach and global distribution.",
      logos: [
        { name: "SLE Dack", image: "./assets/images/sledack.png", link: "https://www.sledack.se/" },
      ]
    },
    {
      id: "Mobile",
      title: "Mobile Ecosystems",
      shortTitle: "Mobile",
      icon: Smartphone,
      description: "Custom iOS and Android solutions engineered for high performance and intuitive user experiences.",
      logos: [
        { name: "24sju App", image: "./assets/images/24sju1.png", link: "https://24-sju.se/apps/" },
        { name: "Value Charts", image: "./assets/images/valueflow.png", link: "https://play.google.com/store/apps/details?id=com.valuecharts.app&hl=en_IN&gl=US&pli=1" },
        { name: "Lean", image: "./assets/images/lean.png", link: "https://play.google.com/store/apps/details?id=com.leanvaluestream.app&hl=en_IE&gl=US" },
        { name: "Matmed Smak", image: "./assets/images/matmed.png", link: "https://store-tech.se/norlandia/apps/" },
        { name: "24sju App", image: "./assets/images/24sju2.png", link: "https://www.24-sju.se/apps/no/" },
      ]
    }
  ];

  const activeContent = projectData.find(cat => cat.id === activeTab);

  return (
    <section id="projects" className="relative overflow-hidden bg-white py-20 lg:py-32 font-sora">
      
      {/* Abstract Background Decor */}
      <div className="absolute inset-0 pointer-events-none opacity-40">
        <div className="absolute top-1/4 -left-20 w-80 h-80 bg-[#4888e8]/10 rounded-full blur-[120px]" />
        <div className="absolute bottom-1/4 -right-20 w-80 h-80 bg-[#09b125]/10 rounded-full blur-[120px]" />
      </div>

      <div className="relative mx-auto px-6 md:px-12 lg:px-24  ">
        
        {/* Header Section */}
        <div className="mb-16 text-center lg:text-left max-w-4xl animate-card-entry">
          <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-slate-50 border border-slate-200 px-4 py-1.5">
            <span className="flex h-2 w-2 rounded-full bg-[#4888e8] animate-pulse" />
            <span className="text-[10px] font-bold uppercase tracking-widest text-slate-600">Projects</span>
          </div>
          {/* <h2 className="text-4xl md:text-6xl font-extrabold tracking-tight text-slate-900 leading-[1.1]">
            Our <span style={{ color: '#4888e8' }}>Technical</span> & <span style={{ color: '#09b125' }}>Creative</span> Impact
          </h2> */}
          <h2 className="text-4xl md:text-5xl font-black tracking-tight text-slate-900 leading-[1.1]">
            Our Technical & <br />
            <span className="bg-gradient-to-r from-[#4888e8] to-[#09b125] bg-clip-text text-transparent">Creative Impact</span>
          </h2>
          <p className="mt-6 text-lg text-slate-500 font-medium max-w-2xl">
            From industrial automation to high-conversion retail, we build digital 
            architectures that drive business growth.
          </p>
        </div>

        {/* 1. Category Navigation */}
        <div className="relative mb-12 animate-card-entry">
          <div 
            ref={scrollRef}
            className="flex flex-row gap-3 overflow-x-auto pb-6 [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden lg:grid lg:grid-cols-4 lg:gap-8"
          >
            {projectData.map((category) => (
              <button
                key={category.id}
                onClick={() => setActiveTab(category.id)}
                className={`flex shrink-0 items-center justify-center gap-4 rounded-full border px-6 py-4 transition-all duration-500 md:flex-col md:items-start md:rounded-[2.5rem] md:p-10 lg:min-w-0 ${
                  activeTab === category.id 
                  ? "bg-white border-white shadow-2xl scale-[1.02]" 
                  : "bg-slate-50 border-slate-100 hover:bg-white hover:border-[#4888e8]/30"
                }`}
                style={{
                  boxShadow: activeTab === category.id ? '0 30px 60px -12px rgba(72, 136, 232, 0.15)' : ''
                }}
              >
                <div 
                  className={`flex h-10 w-10 items-center justify-center rounded-2xl transition-all duration-500 shadow-sm ${
                    activeTab === category.id ? "bg-[#4888e8] text-white rotate-6" : "bg-white text-slate-400"
                  }`}
                >
                  <category.icon size={20} className="md:size-6" />
                </div>
                <div className="flex flex-col text-left">
                  <span className={`text-sm md:text-xl font-extrabold tracking-tight ${activeTab === category.id ? "text-slate-900" : "text-slate-500"}`}>
                    {category.title}
                  </span>
                  <p className="hidden md:block mt-1 text-[10px] font-black uppercase tracking-[0.1em] text-slate-400 opacity-60">
                    {category.logos.length} Case Studies
                  </p>
                </div>
              </button>
            ))}
          </div>
          {/* Mobile Swipe Indicator */}
          <div className="flex items-center gap-2 mt-[-15px] text-[10px] font-black text-[#4888e8] md:hidden justify-end pr-2 uppercase italic tracking-widest">
            Slide <ChevronRight size={12} strokeWidth={3} />
          </div>
        </div>

        {/* 2. Content Container - Modern White Frame */}
        <div className="animate-fade-up">
          <div className="rounded-[40px] border border-slate-100 bg-white p-8 md:p-16 lg:p-20 shadow-[0_40px_100px_-20px_rgba(0,0,0,0.03)]">
            <div className="mb-12 flex flex-col items-center justify-between gap-6 md:flex-row border-b border-slate-50 pb-12">
              <div className="text-center md:text-left">
                <h4 className="text-2xl md:text-4xl font-black text-slate-900 tracking-tight">
                  {activeContent?.title}
                </h4>
                <p className="mt-3 text-base text-slate-500 max-w-lg font-medium leading-relaxed">
                  {activeContent?.description}
                </p>
              </div>
              
              <div 
                className="flex items-center gap-3 px-5 py-2.5 rounded-full bg-slate-50 text-[11px] font-black uppercase tracking-[0.2em]"
                style={{ color: '#09b125' }}
              >
                <span className="relative flex h-2.5 w-2.5">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#09b125] opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-[#09b125]"></span>
                </span>
                Live Implementations
              </div>
            </div>

            {/* Project Grid */}
            <div className="grid grid-cols-2 gap-4 xs:grid-cols-3 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 md:gap-8">
              {activeContent?.logos.map((logo, i) => (
                <Link
                  key={i}
                  href={logo.link}
                  target="_blank"
                  className="group relative flex aspect-square flex-col items-center justify-center rounded-[2rem] border border-slate-50 bg-white p-6 md:p-10 transition-all duration-500 hover:shadow-[0_20px_50px_-10px_rgba(0,0,0,0.08)] active:scale-95 md:hover:-translate-y-2 overflow-hidden"
                >
                  {/* Hover Background Accent */}
                  <div className="absolute inset-0 bg-slate-50 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  
                  <div className="relative h-4/5 w-full z-10 transition-all duration-500 group-hover:scale-110">
                    <img
                      src={logo.image}
                      alt={logo.name}
                      className="h-full w-full object-contain filter "
                    />
                  </div>
                  
                  <div className="absolute bottom-4 opacity-0 group-hover:opacity-100 transition-all duration-500 translate-y-2 group-hover:translate-y-0 flex items-center gap-1.5">
                    <span className="text-[9px] font-black uppercase tracking-widest text-[#4888e8]">View Project</span>
                    <ExternalLink size={10} className="text-[#4888e8]" strokeWidth={3} />
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </div>

        

      </div>
    </section>
  );
}