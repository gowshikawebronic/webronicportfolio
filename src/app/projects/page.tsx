"use client";

import { useState, useRef, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { Smartphone, Globe, ShoppingBag, Zap, ArrowRight, ExternalLink } from "lucide-react";

// Types
type ProjectLogo = {
  name: string;
  image: string;
  link: string;
};

type Category = "Dynamic" | "E-commerce" | "Static" | "Mobile";

interface ProjectCategory {
  id: Category;
  title: string;
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
      title: "Dynamic Websites",
      icon: Globe,
      description: "Scalable, data-driven web applications with real-time functionality.",
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
      title: "E-commerce",
      icon: ShoppingBag,
      description: "High-conversion online stores with secure payment and inventory sync.",
      logos: [
        { name: "Bovalls", image: "./assets/images/bovalls.png", link: "https://www.bovalls.com/" },
        { name: "Smart Storing", image: "./assets/images/smartstoring.png", link: "https://smartstoring.eu/" },
        { name: "Snus24", image: "./assets/images/snus24.png", link: "https://www.snus24.com/" },
      ]
    },
    {
      id: "Static",
      title: "Static Website",
      icon: Zap,
      description: "Ultra-fast, SEO-optimized landing pages and corporate sites.",
      logos: [
        { name: "SLE Dack", image: "./assets/images/sledack.png", link: "https://www.sledack.se/" },
      ]
    },
    {
      id: "Mobile",
      title: "Mobile Apps",
      icon: Smartphone,
      description: "Native and cross-platform mobile solutions for iOS and Android.",
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
    <section id="projects" className="relative overflow-hidden bg-white py-16 md:py-24 lg:py-36">
      
      <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(rgba(15,23,42,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(15,23,42,0.03)_1px,transparent_1px)] bg-[size:72px_72px] animate-grid opacity-50" />
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(99,102,241,0.08),transparent_50%)]" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6">
        
        <div className="mb-12 md:mb-20 text-center lg:text-left animate-fade-up">
          <div className="mb-4 md:mb-6 inline-flex rounded-full bg-blue-50 px-4 py-1.5 text-[10px] md:text-xs font-bold uppercase tracking-widest text-blue-600 shadow-sm">
            Expertise
          </div>
          <h2 className="text-3xl font-extrabold tracking-tight text-slate-900 sm:text-5xl lg:text-6xl leading-tight">
            Our <span className="bg-gradient-to-r from-blue-600 to-indigo-500 bg-clip-text text-transparent">Digital Projects</span>
          </h2>
          <p className="mt-4 md:mt-6 max-w-2xl text-base md:text-lg text-slate-500 font-medium">
            Explore our successful implementations across various technical domains.
          </p>
        </div>

        <div className="relative">
          <div 
            ref={scrollRef}
            className="flex flex-row gap-4 overflow-x-auto pb-4 scrollbar-hide lg:grid lg:grid-cols-4 lg:gap-6 lg:overflow-visible"
          >
            {projectData.map((category) => (
              <button
                key={category.id}
                onClick={() => setActiveTab(category.id)}
                className={`group relative flex min-w-[240px] flex-1 flex-col items-center rounded-[24px] md:rounded-[32px] border p-6 md:p-8 transition-all duration-500 lg:min-w-0 ${
                  activeTab === category.id 
                  ? "border-blue-600 bg-blue-600 text-white shadow-xl -translate-y-1 md:-translate-y-2" 
                  : "border-slate-100 bg-white text-slate-900 hover:border-blue-200 hover:shadow-lg"
                }`}
              >
                <div className={`mb-4 md:mb-6 flex h-12 w-12 md:h-16 md:w-16 items-center justify-center rounded-xl md:rounded-2xl transition-colors ${
                  activeTab === category.id ? "bg-white/20 text-white" : "bg-blue-50 text-blue-600"
                }`}>
                  <category.icon size={28} strokeWidth={1.5} className="md:w-8 md:h-8" />
                </div>
                <h3 className="text-lg md:text-xl font-bold tracking-tight whitespace-nowrap">{category.title}</h3>
                <p className={`mt-1 md:mt-2 text-center text-[10px] md:text-xs font-medium leading-relaxed opacity-80 ${activeTab === category.id ? "text-blue-50" : "text-slate-400"}`}>
                  {category.logos.length} Projects
                </p>
                
                {activeTab === category.id && (
                  <div className="absolute -bottom-2 left-1/2 hidden h-4 w-4 -translate-x-1/2 rotate-45 bg-blue-600 lg:block" />
                )}
              </button>
            ))}
          </div>
        </div>

        <div className="mt-8 md:mt-16 animate-fade-up">
          <div className="rounded-[32px] md:rounded-[44px] border border-slate-200 bg-slate-50/50 p-6 md:p-10 lg:p-16">
            <div className="mb-8 md:mb-10 flex flex-col items-center justify-between gap-4 md:flex-row">
              <div className="text-center md:text-left">
                <h4 className="text-xl md:text-2xl font-bold text-slate-900">{activeContent?.title}</h4>
                <p className="mt-1 md:mt-2 text-sm md:text-slate-500 max-w-md">{activeContent?.description}</p>
              </div>
              <div className="h-px flex-1 bg-slate-200 mx-8 hidden md:block" />
              <div className="flex items-center gap-2 text-[10px] font-bold uppercase tracking-widest text-blue-600">
                <ExternalLink size={14} />
                Click logo to Visit Project
              </div>
            </div>

            <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 md:gap-4">
              {activeContent?.logos.map((logo, i) => (
                <Link
                  key={i}
                  href={logo.link}
                  target="_blank"
                  className="group relative flex aspect-square flex-col items-center justify-center rounded-2xl md:rounded-3xl border border-slate-100 bg-white p-4 md:p-6 transition-all hover:border-blue-300 hover:shadow-xl active:scale-95 md:hover:-translate-y-2"
                >
                  <div className="relative h-full w-full">
                    <img
                      src={logo.image}
                      alt={logo.name}
                      className="h-full w-full object-contain"
                    />
                  </div>
                  <div className="mt-3 overflow-hidden text-center md:mt-4">
                    <p className="text-[9px] md:text-[10px] font-black uppercase tracking-widest text-slate-300 group-hover:text-blue-600 transition-colors">
                      {logo.name}
                    </p>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-12 md:mt-16 flex items-center justify-center gap-4 text-center">
            <div className="h-px w-8 md:w-12 bg-slate-200" />
            <span className="text-[8px] md:text-[10px] font-bold uppercase tracking-[0.2em] md:tracking-[0.4em] text-slate-300">
              Webronic Technical Solutions
            </span>
            <div className="h-px w-8 md:w-12 bg-slate-200" />
        </div>

      </div>
      
    
    </section>
  );
}