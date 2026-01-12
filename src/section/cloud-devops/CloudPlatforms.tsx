"use client";

import { useState } from "react";
import { CLOUD_PLATFORMS_DATA } from "@/data/clouddevops/CLOUD_PLATFORMS_DATA";
import { 
  Cloud, 
  Server, 
  Award, 
  CheckCircle2, 
  Cpu, 
  Zap 
} from "lucide-react";

export default function CloudPlatforms() {
  const { header, platforms } = CLOUD_PLATFORMS_DATA;
  const [activeTab, setActiveTab] = useState(0);

  return (
    <section className="relative bg-white py-10 font-sora overflow-hidden">
      
      {/* Background Decor */}
      {/* <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[500px] bg-[#2776ea]/5 rounded-full blur-[120px] pointer-events-none" /> */}

      <div className="container mx-auto px-6 max-w-7xl relative z-10">
        
        {/* --- HEADER --- */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          {/* <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#76ea27]/10 border border-[#76ea27]/20 mb-6">
            <Cloud size={14} className="text-[#76ea27]" />
            <span className="text-[10px] font-black uppercase tracking-[0.25em] text-[#76ea27]">
              {header.badge}
            </span>
          </div> */}
          <div className="flex items-center justify-center gap-4 mb-6">
            <Cloud size={14} className="text-[#2776ea]" />
            <span className="text-[11px] font-black uppercase tracking-[0.3em] text-[#2776ea]">
              {header.badge}
            </span>
          </div>
          
          <h2 className="text-3xl md:text-5xl font-black text-slate-900 tracking-tighter leading-[1.1] mb-6">
            {header.title}{" "}
            <span className="bg-gradient-to-r from-[#2776ea] to-[#76ea27] bg-clip-text text-transparent">
              {header.titleHighlight}
            </span>
          </h2>
          
          <p className="text-lg text-slate-500 font-medium">
            {header.description}
          </p>
        </div>

        {/* --- PLATFORM SELECTOR (TABS) --- */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-12">
          {platforms.map((platform, index) => {
            const isActive = activeTab === index;
            return (
              <button
                key={platform.id}
                onClick={() => setActiveTab(index)}
                className={`relative group p-6 rounded-2xl border text-left transition-all duration-300 ${
                  isActive
                    ? "bg-slate-900 border-slate-900 shadow-xl scale-[1.02]"
                    : "bg-white border-slate-100 hover:border-[#2776ea]/30 hover:shadow-lg"
                }`}
              >
                <div className="flex items-center justify-between mb-4">
                  <h3 className={`text-xl font-bold ${isActive ? "text-white" : "text-slate-900"}`}>
                    {platform.shortName}
                  </h3>
                  {isActive && (
                    <span className="px-3 py-1 rounded-full bg-[#2776ea] text-white text-xs font-bold">
                      Selected
                    </span>
                  )}
                </div>
                <p className={`text-sm ${isActive ? "text-slate-400" : "text-slate-500"}`}>
                  {platform.name}
                </p>
              </button>
            );
          })}
        </div>

        {/* --- ACTIVE CONTENT PANEL --- */}
        <div className="bg-slate-50 rounded-3xl p-8 md:p-12 border border-slate-100 shadow-sm min-h-[500px] animate-in fade-in slide-in-from-bottom-4 duration-500 key={activeTab}">
          
          {/* Platform Intro */}
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 mb-12 border-b border-slate-200 pb-8">
            <div>
              <h3 className="text-2xl font-bold text-slate-900 mb-2">
                {platforms[activeTab].name}
              </h3>
              <p className="text-slate-500 font-medium">
                {platforms[activeTab].description}
              </p>
            </div>
            <div className="px-6 py-3 rounded-xl bg-white border border-slate-200 shadow-sm flex items-center gap-3">
              <Zap size={20} className="text-[#76ea27] fill-[#76ea27]" />
              <span className="font-bold text-slate-900">
                {platforms[activeTab].stats}
              </span>
            </div>
          </div>

          {/* 3-Column Detail Grid */}
          <div className="grid md:grid-cols-3 gap-8 md:gap-12">
            
            {/* Column 1: Core Services */}
            <div>
              <div className="flex items-center gap-3 mb-6">
                <div className="h-10 w-10 rounded-lg bg-[#2776ea]/10 flex items-center justify-center text-[#2776ea]">
                  <Server size={20} />
                </div>
                <h4 className="text-lg font-bold text-slate-900">Core Services</h4>
              </div>
              <ul className="space-y-3">
                {platforms[activeTab].coreServices.map((item, idx) => (
                  <li key={idx} className="flex items-start gap-3 text-sm font-medium text-slate-600">
                    <span className="h-1.5 w-1.5 rounded-full bg-[#2776ea] mt-2 shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            {/* Column 2: Advanced Services */}
            <div>
              <div className="flex items-center gap-3 mb-6">
                <div className="h-10 w-10 rounded-lg bg-[#76ea27]/10 flex items-center justify-center text-[#76ea27]">
                  <Cpu size={20} />
                </div>
                <h4 className="text-lg font-bold text-slate-900">Advanced Services</h4>
              </div>
              <ul className="space-y-3">
                {platforms[activeTab].advancedServices.map((item, idx) => (
                  <li key={idx} className="flex items-start gap-3 text-sm font-medium text-slate-600">
                    <span className="h-1.5 w-1.5 rounded-full bg-[#76ea27] mt-2 shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            {/* Column 3: Certifications */}
            <div>
              <div className="flex items-center gap-3 mb-6">
                <div className="h-10 w-10 rounded-lg bg-yellow-500/10 flex items-center justify-center text-yellow-600">
                  <Award size={20} />
                </div>
                <h4 className="text-lg font-bold text-slate-900">Certifications</h4>
              </div>
              <div className="space-y-4">
                {platforms[activeTab].certifications.map((cert, idx) => (
                  <div key={idx} className="flex items-start gap-3 bg-white p-4 rounded-xl border border-slate-200 shadow-sm">
                    <CheckCircle2 size={16} className="text-yellow-500 mt-0.5 shrink-0" />
                    <span className="text-sm font-bold text-slate-800 leading-snug">
                      {cert}
                    </span>
                  </div>
                ))}
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}