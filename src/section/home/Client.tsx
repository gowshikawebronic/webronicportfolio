"use client";

import Image from "next/image";
import { useState } from "react"; // Added for dropdown state
import { Sparkles, Quote, Factory, ShoppingBag, Landmark, HeartPulse, Layers, ChevronDown } from "lucide-react";

const logos: string[] = [
  "./assets/images/fpanalyzer.png",
  "./assets/images/ekoion.png",
  "./assets/images/bovalls.png",
  "./assets/images/bluewaters.png",
  "./assets/images/snus24.png",
  "./assets/images/iit.png",
  "./assets/images/akashavani.png",
  "./assets/images/annauniv.png",
  "./assets/images/locumap.png",
  "./assets/images/rorstrand.png",
  "./assets/images/hindustan.png",
  "./assets/images/sciotech.png",
  "./assets/images/tamilnadu.png",
  "./assets/images/smartstoring.png",
  "./assets/images/bharathwaj.png",
  "./assets/images/valueflow.png",
  "./assets/images/bluewaters.png",
  "./assets/images/tsf.png",
  "./assets/images/elshaddai.png",
  "./assets/images/24sju.png",
  "./assets/images/sahaya.png",
  "./assets/images/sribalaji.png",
  "./assets/images/atthi.png",
  "./assets/images/cumi.png",
];

const INDUSTRIES = [
  { name: "Manufacturing & Industrial", percent: 35, icon: Factory, color: "bg-[#2776ea]" },
  { name: "Retail & E-commerce", percent: 25, icon: ShoppingBag, color: "bg-[#76ea27]" },
  { name: "Financial Services", percent: 20, icon: Landmark, color: "bg-[#2776ea]" },
  { name: "Healthcare", percent: 10, icon: HeartPulse, color: "bg-[#76ea27]" },
  { name: "Other Sectors", percent: 10, icon: Layers, color: "bg-slate-400" },
];

const TESTIMONIALS = [
  {
    text: "Webronic transformed our retail operations with StoreTech. The autonomous checkout system has reduced operational costs by 60% while improving customer satisfaction.",
    author: "Jocke Assarsson",
    role: "CEO, 24-Sju Snabbköp Sverige AB",
  },
  {
    text: "Their AI-powered predictive maintenance solution has prevented over $2M in potential equipment failures and reduced downtime by 75%.",
    author: "Carl Magnus Tang",
    role: "FP Analyzer",
  },
  {
    text: "The Tanlux platform enabled us to operate 24/7 unmanned studios, expanding our business model and increasing revenue by 200%.",
    author: "Markus Front",
    role: "Founder, Tanlux AB",
  },
];

export default function Clients() {
  const [activeTestimonial, setActiveTestimonial] = useState(0); // State for Accordion
  const firstRow = logos.slice(0, Math.ceil(logos.length / 2));
  const secondRow = logos.slice(Math.ceil(logos.length / 2));

  return (
    <section id="client" className="relative overflow-hidden bg-white py-16 md:py-24 font-sora px-5 lg:px-10">
      
      {/* Background Decor */}
      <div className="absolute inset-0 pointer-events-none opacity-40">
         <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#2776ea]/5 rounded-full blur-[120px]" />
         <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-[#76ea27]/5 rounded-full blur-[120px]" />
      </div>

      <div className="relative mx-auto max-w-7xl px-6">
        
        {/* --- HEADER --- */}
        <div className="mb-16 text-center animate-fade-up">
          <div className="flex items-center justify-center gap-4 mb-6">
            <span className="text-[11px] font-black uppercase tracking-[0.3em] text-[#2776ea]">
              Client Showcase
            </span>
          </div>

          <h2 className="text-3xl font-extrabold tracking-tight text-slate-900 sm:text-5xl lg:text-6xl leading-tight">
            Trusted by <br className="hidden sm:block" />
            <span className="bg-gradient-to-r from-[#2776ea] to-[#76ea27] bg-clip-text text-transparent">
              Leading Organizations
            </span>
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-slate-500 font-medium">
            Partnering with prestigious institutions and innovative enterprises worldwide.
          </p>
        </div>

        {/* --- LOGO MARQUEE --- */}
        <div className="relative mt-12 space-y-8 mb-24">
          <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-12 md:w-32 bg-gradient-to-r from-white via-white/80 to-transparent" />
          <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-12 md:w-32 bg-gradient-to-l from-white via-white/80 to-transparent" />

          <div className="flex overflow-hidden group">
            <div className="animate-marquee flex w-max items-center gap-12 py-4">
              {[...firstRow, ...firstRow].map((src, i) => (
                <div
                  key={`row1-${i}`}
                  className="flex h-24 w-48 items-center justify-center rounded-2xl border border-slate-100 bg-white/50 px-6 shadow-sm transition-all duration-300 hover:border-blue-200 hover:bg-white hover:shadow-md"
                >
                  <img src={src} alt="Client logo" className="h-12 w-full object-contain" loading="lazy" />
                </div>
              ))}
            </div>
          </div>

          <div className="flex overflow-hidden group">
            <div className="animate-scroll-review-xrev flex w-max items-center gap-12 py-4">
              {[...secondRow, ...secondRow].map((src, i) => (
                <div
                  key={`row2-${i}`}
                  className="flex h-24 w-48 items-center justify-center rounded-2xl border border-slate-100 bg-white/50 px-6 shadow-sm transition-all duration-300 hover:border-blue-200 hover:bg-white hover:shadow-md"
                >
                  <img src={src} alt="Client logo" className="h-12 w-full object-contain" loading="lazy" />
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* --- INDUSTRY DISTRIBUTION & TESTIMONIALS GRID --- */}
        <div className="grid lg:grid-cols-[1fr_1.5fr] gap-12 lg:gap-20 mt-20 border-t border-slate-100 pt-20">
          
          {/* Left: Industry Distribution */}
          <div>
            <h3 className="text-2xl font-black text-slate-900 mb-8 flex items-center gap-3">
              <span className="w-8 h-1 bg-[#2776ea] rounded-full" /> Industry Distribution
            </h3>
            <div className="space-y-6">
              {INDUSTRIES.map((ind, i) => (
                <div key={i} className="group">
                  <div className="flex justify-between items-center mb-2">
                    <div className="flex items-center gap-3">
                      <ind.icon size={16} className="text-slate-400 group-hover:text-[#2776ea] transition-colors" />
                      <span className="text-sm font-bold text-slate-700">{ind.name}</span>
                    </div>
                    <span className="text-sm font-black text-slate-900">{ind.percent}%</span>
                  </div>
                  <div className="h-2 w-full bg-slate-100 rounded-full overflow-hidden">
                    <div 
                      className={`h-full ${ind.color} rounded-full transition-all duration-1000 ease-out`} 
                      style={{ width: `${ind.percent}%` }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right: Featured Testimonials (ACCORDION) */}
          <div>
            <h3 className="text-2xl font-black text-slate-900 mb-8 flex items-center gap-3">
              <span className="w-8 h-1 bg-[#76ea27] rounded-full" /> Featured Stories
            </h3>
            <div className="space-y-4">
              {TESTIMONIALS.map((t, i) => (
                <div 
                  key={i} 
                  className={`rounded-[2rem] border transition-all duration-500 overflow-hidden ${
                    activeTestimonial === i 
                      ? "bg-white border-[#2776ea]/20 shadow-xl shadow-blue-900/5" 
                      : "bg-slate-50 border-slate-100 hover:bg-white"
                  }`}
                >
                  {/* Accordion Header */}
                  <button 
                    onClick={() => setActiveTestimonial(activeTestimonial === i ? -1 : i)}
                    className="w-full flex items-center justify-between p-6 text-left"
                  >
                    <div className="flex items-center gap-4">
                      <div className={`shrink-0 h-10 w-10 rounded-full flex items-center justify-center text-white font-bold text-xs shadow-md transition-colors ${
                        i % 2 === 0 ? "bg-[#2776ea]" : "bg-[#76ea27]"
                      }`}>
                        {t.author.charAt(0)}
                      </div>
                      <div>
                        <p className="text-sm font-black text-slate-900">{t.author}</p>
                        <p className="text-xs font-bold text-slate-400 uppercase tracking-wider">{t.role}</p>
                      </div>
                    </div>
                    <div className={`p-2 rounded-full transition-all duration-300 ${activeTestimonial === i ? "bg-slate-100 rotate-180" : "bg-white"}`}>
                       <ChevronDown size={16} className="text-slate-400" />
                    </div>
                  </button>

                  {/* Accordion Content */}
                  <div 
                    className={`transition-all duration-500 ease-in-out px-6 ${
                      activeTestimonial === i ? "max-h-48 opacity-100 pb-8" : "max-h-0 opacity-0 pb-0"
                    }`}
                  >
                    <div className="relative pl-6 border-l-2 border-slate-100">
                      <Quote size={24} className="absolute -top-1 left-6 text-slate-200 opacity-50" />
                      <p className="text-sm md:text-base text-slate-600 font-medium leading-relaxed italic relative z-10">
                        &quot;{t.text}&quot;
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}