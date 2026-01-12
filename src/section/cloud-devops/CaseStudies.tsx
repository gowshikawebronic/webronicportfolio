"use client";

import { useState } from "react";
import { CASE_STUDIES_DATA } from "@/data/clouddevops/CASE_STUDIES_DATA";
import { 
  ArrowRight, 
  CheckCircle2, 
  Briefcase, 
  AlertTriangle, 
  Lightbulb 
} from "lucide-react";

export default function CaseStudies() {
  const { header, cases } = CASE_STUDIES_DATA;
  const [activeTab, setActiveTab] = useState(0);

  return (
    <section className="relative  py-10 font-sora overflow-hidden">
      
      {/* Background Decor */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-[#76ea27]/5 rounded-full blur-[100px] translate-x-1/3 -translate-y-1/3 pointer-events-none" />

      <div className="container mx-auto px-6 max-w-7xl relative z-10">
        
        {/* --- HEADER --- */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          {/* <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#2776ea]/10 border border-[#2776ea]/20 mb-6">
            <Briefcase size={14} className="text-[#2776ea]" />
            <span className="text-[10px] font-black uppercase tracking-[0.25em] text-[#2776ea]">
              {header.badge}
            </span>
          </div> */}
          <div className="flex items-center justify-center gap-4 mb-6">
            <Briefcase size={14} className="text-[#2776ea]" />
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

        {/* --- NAVIGATION TABS --- */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {cases.map((item, index) => {
            const isActive = activeTab === index;
            const Icon = item.icon;
            return (
              <button
                key={item.id}
                onClick={() => setActiveTab(index)}
                className={`flex items-center gap-3 px-6 py-4 rounded-full border transition-all duration-300 font-bold text-sm uppercase tracking-wide ${
                  isActive
                    ? "bg-slate-900 text-white border-slate-900 shadow-xl scale-105"
                    : "bg-white text-slate-600 border-slate-200 hover:border-[#2776ea] hover:text-[#2776ea]"
                }`}
              >
                <Icon size={18} />
                {item.navTitle}
              </button>
            );
          })}
        </div>

        {/* --- ACTIVE CASE STUDY CONTENT --- */}
        <div className="animate-in fade-in slide-in-from-bottom-4 duration-500 key={activeTab}">
          
          {/* Main Card */}
          <div className="bg-white rounded-3xl border border-slate-200 shadow-xl overflow-hidden">
            
            {/* Top Bar: Client Info */}
            <div className="bg-slate-50 p-8 border-b border-slate-100">
              <span className="text-xs font-black uppercase tracking-widest text-slate-400 mb-2 block">
                Client Profile
              </span>
              <h3 className="text-xl md:text-2xl font-bold text-slate-800">
                {cases[activeTab].client}
              </h3>
            </div>

            <div className="grid lg:grid-cols-2">
              
              {/* Left Column: Challenge & Solution */}
              <div className="p-8 md:p-12 space-y-10 border-b lg:border-b-0 lg:border-r border-slate-100">
                
                {/* Challenge */}
                <div>
                  <div className="flex items-center gap-3 mb-4">
                    <div className="h-8 w-8 rounded-full bg-red-50 flex items-center justify-center text-red-500">
                      <AlertTriangle size={16} />
                    </div>
                    <h4 className="text-lg font-bold text-slate-900">The Challenge</h4>
                  </div>
                  <p className="text-slate-600 leading-relaxed font-medium">
                    {cases[activeTab].challenge}
                  </p>
                </div>

                {/* Solution */}
                <div>
                  <div className="flex items-center gap-3 mb-4">
                    <div className="h-8 w-8 rounded-full bg-[#2776ea]/10 flex items-center justify-center text-[#2776ea]">
                      <Lightbulb size={16} />
                    </div>
                    <h4 className="text-lg font-bold text-slate-900">Our Solution</h4>
                  </div>
                  <ul className="space-y-3">
                    {cases[activeTab].solution.map((step, idx) => (
                      <li key={idx} className="flex items-start gap-3 text-slate-600 font-medium">
                        <CheckCircle2 size={18} className="text-[#76ea27] shrink-0 mt-0.5" />
                        <span className="text-sm">{step}</span>
                      </li>
                    ))}
                  </ul>
                </div>

              </div>

              {/* Right Column: Key Results (Metrics) */}
              <div className="p-8 md:p-12 bg-slate-50/50">
                <h4 className="text-lg font-bold text-slate-900 mb-8 flex items-center gap-3">
                  <span className="h-1.5 w-1.5 rounded-full bg-[#76ea27]" />
                  Key Business Outcomes
                </h4>
                
                <div className="grid sm:grid-cols-2 gap-4">
                  {cases[activeTab].results.map((result, idx) => (
                    <div 
                      key={idx} 
                      className="bg-white p-6 rounded-2xl border border-slate-100 shadow-sm hover:shadow-md transition-all group"
                    >
                      <div className="text-3xl md:text-4xl font-black text-[#2776ea] mb-2 group-hover:scale-105 transition-transform origin-left">
                        {result.value}
                      </div>
                      <div className="text-sm font-bold text-slate-900 mb-1">
                        {result.label}
                      </div>
                      <div className="text-xs font-semibold text-slate-400 uppercase tracking-wide">
                        {result.desc}
                      </div>
                    </div>
                  ))}
                </div>

                {/* CTA inside the card */}
                <div className="mt-8 pt-8 border-t border-slate-200">
                  <a href="#" className="inline-flex items-center gap-2 text-sm font-black uppercase tracking-widest text-[#2776ea] hover:text-[#76ea27] transition-colors">
                    Read Full Case Study <ArrowRight size={16} />
                  </a>
                </div>
              </div>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
}