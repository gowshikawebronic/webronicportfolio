"use client";

import { useState } from "react";
import { ArrowRight, Sparkles } from "lucide-react";
import { INDUSTRIES } from "@/data/AIML/INDUSTRIES";
// Adjust the import path based on where you saved the data file


export default function IndustryApplications() {
  const [activeTab, setActiveTab] = useState("manufacturing");

  // Helper to get active data
  const currentIndustry = INDUSTRIES.find((ind) => ind.id === activeTab) || INDUSTRIES[0];
  const isBlue = currentIndustry.theme === "blue";
  const themeColor = isBlue ? "text-[#2776ea]" : "text-[#76ea27]";
  const themeBg = isBlue ? "bg-[#2776ea]" : "bg-[#76ea27]";
  
  // We can use the theme border variable if needed, but currently styling relies on hover states.
  // const themeBorder = isBlue ? "border-[#2776ea]" : "border-[#76ea27]"; 

  return (
    <section className="bg-white py-24 md:py-32 font-sora relative overflow-hidden px-5 lg:px-25">
      
      {/* Background Decor */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none opacity-[0.02]">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[1000px] bg-slate-900 rounded-full blur-[150px]" />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        
        {/* --- HEADER --- */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-slate-50 border border-slate-200 shadow-sm mb-6">
            <Sparkles size={14} className="text-[#2776ea]" />
            <span className="text-[10px] font-black uppercase tracking-[0.25em] text-slate-500">
              Real-World Impact
            </span>
          </div>
          
          <h2 className="text-3xl md:text-5xl font-black text-slate-900 tracking-tighter leading-tight mb-6">
            Industry <br />
            <span className="bg-gradient-to-r from-[#2776ea] to-[#76ea27] bg-clip-text text-transparent">
              Applications
            </span>
          </h2>
          <p className="text-lg text-slate-500 font-medium leading-relaxed">
            Discover how we apply intelligent technology to solve specific challenges across diverse sectors.
          </p>
        </div>

        {/* --- TABS NAVIGATION --- */}
        <div className="flex flex-wrap justify-center gap-4 mb-16">
          {INDUSTRIES.map((ind) => (
            <button
              key={ind.id}
              onClick={() => setActiveTab(ind.id)}
              className={`group flex items-center gap-3 px-6 py-4 rounded-2xl transition-all duration-300 border ${
                activeTab === ind.id
                  ? `${ind.theme === 'blue' ? 'bg-[#2776ea] border-[#2776ea]' : 'bg-[#76ea27] border-[#76ea27]'} text-white shadow-xl shadow-slate-200`
                  : "bg-white border-slate-100 text-slate-500 hover:border-slate-300 hover:bg-slate-50"
              }`}
            >
              <ind.icon 
                size={20} 
                className={activeTab === ind.id ? "text-white" : "text-slate-400 group-hover:text-slate-600"} 
              />
              <span className="text-xs font-black uppercase tracking-wider">
                {ind.label}
              </span>
            </button>
          ))}
        </div>

        {/* --- CONTENT GRID --- */}
        <div className="grid md:grid-cols-2 gap-8 animate-in fade-in slide-in-from-bottom-8 duration-500" key={activeTab}>
          {currentIndustry.features.map((feature, idx) => (
            <div 
              key={idx}
              className="group flex flex-col bg-slate-50 rounded-[2.5rem] p-8 border border-slate-100 hover:bg-white hover:shadow-2xl hover:shadow-blue-900/5 transition-all duration-300 h-full"
            >
              {/* Icon Header */}
              <div className="flex items-start justify-between mb-6">
                <div className={`h-14 w-14 rounded-2xl bg-white border border-slate-100 flex items-center justify-center shadow-sm group-hover:scale-110 transition-transform duration-300 ${themeColor}`}>
                  <feature.icon size={28} strokeWidth={1.5} />
                </div>
                {/* Decorative Dot */}
                <div className={`h-2 w-2 rounded-full ${themeBg} opacity-20 group-hover:opacity-100 transition-opacity`} />
              </div>

              {/* Text Content */}
              <h3 className="text-xl font-black text-slate-900 mb-4 group-hover:text-[#2776ea] transition-colors">
                {feature.title}
              </h3>
              <p className="text-sm font-medium text-slate-500 leading-relaxed mb-6">
                {feature.desc}
              </p>

              {/* Case Study Box (Conditional) */}
              {feature.caseStudy && (
                <div className="mt-auto bg-white rounded-2xl p-5 border border-slate-100 border-l-4 shadow-sm group-hover:border-l-[#2776ea] transition-colors relative overflow-hidden">
                  <div className="relative z-10">
                    <p className="text-[10px] font-black uppercase tracking-widest text-[#2776ea] mb-2 flex items-center gap-2">
                      Case Study <ArrowRight size={12} />
                    </p>
                    <p className="text-xs font-bold text-slate-900 mb-1">
                      {feature.caseStudy.title}
                    </p>
                    <p className="text-xs text-slate-500 font-medium leading-relaxed">
                      {feature.caseStudy.result}
                    </p>
                  </div>
                  {/* Background decoration for case study */}
                  <div className={`absolute top-0 right-0 w-20 h-20 ${themeBg} opacity-[0.03] rounded-full blur-xl -translate-y-1/2 translate-x-1/2`} />
                </div>
              )}
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}