"use client";

import { CASE_STUDIES_DATA } from "@/data/Digital/CASE_STUDIES_DATA";
import { 
  AlertCircle, 
  CheckCircle2, 
  Trophy, 
  Clock, 
  ImageIcon,
  ArrowRight
} from "lucide-react";

export default function CaseStudies() {
  return (
    <section className="py-20 lg:py-32 bg-slate-50 font-sora">
      <div className="container mx-auto px-6 max-w-7xl">
        
        {/* Section Header */}
        <div className="text-center mb-16 max-w-3xl mx-auto">
          <span className="text-[#2776ea] font-black uppercase tracking-[0.2em] text-xs mb-4 block">
            Real Results
          </span>
          <h2 className="text-3xl md:text-5xl font-black text-slate-900 tracking-tighter mb-6">
            Transformation <span className="text-[#2776ea]">Case Studies</span>
          </h2>
          <p className="text-slate-600 text-lg">
            See how we've helped leading organizations navigate complexity and achieve measurable business value.
          </p>
        </div>

        {/* Case Studies Grid */}
        <div className="grid lg:grid-cols-3 gap-8">
          {CASE_STUDIES_DATA.map((study) => {
            const Icon = study.icon;
            
            return (
              <div key={study.id} className="flex flex-col bg-white rounded-3xl border border-slate-200 overflow-hidden shadow-lg hover:shadow-2xl hover:shadow-[#2776ea]/10 transition-all duration-300 group">
                
                {/* --- HEADER --- */}
                <div className="p-8 pb-6 border-b border-slate-100">
                  <div className="flex items-center justify-between mb-4">
                    <div className="p-3 bg-[#2776ea]/10 rounded-xl text-[#2776ea]">
                      <Icon size={24} />
                    </div>
                    {/* Placeholder for Image Tag Visual */}
                    <div className="group relative">
                        <ImageIcon size={20} className="text-slate-300 group-hover:text-[#2776ea] transition-colors cursor-help" />
                        <span className="absolute right-0 top-6 w-48 bg-slate-800 text-white text-[10px] p-2 rounded opacity-0 group-hover:opacity-100 transition-opacity z-10 pointer-events-none">
                            {study.imageTag}
                        </span>
                    </div>
                  </div>
                  
                  <h3 className="text-xl font-bold text-slate-900 mb-2 leading-tight min-h-[56px]">
                    {study.title}
                  </h3>
                  <p className="text-xs font-medium text-slate-500 uppercase tracking-wide leading-relaxed">
                    Client: {study.client}
                  </p>
                </div>

                {/* --- BODY (Challenge & Solution) --- */}
                <div className="p-8 flex-grow space-y-8">
                  
                  {/* Challenge Section */}
                  <div>
                    <h4 className="flex items-center gap-2 text-xs font-black text-red-500 uppercase tracking-widest mb-3">
                      <AlertCircle size={14} />
                      Challenge
                    </h4>
                    <ul className="space-y-2">
                      {study.challenge.items.map((item, idx) => (
                        <li key={idx} className="flex items-start gap-2 text-sm text-slate-600">
                          <span className="mt-1.5 w-1 h-1 bg-red-400 rounded-full shrink-0" />
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Solution Section */}
                  <div>
                    <div className="flex items-center justify-between mb-3">
                      <h4 className="flex items-center gap-2 text-xs font-black text-[#2776ea] uppercase tracking-widest">
                        <CheckCircle2 size={14} />
                        Solution
                      </h4>
                      <span className="text-[10px] bg-blue-50 text-blue-600 px-2 py-1 rounded font-bold flex items-center gap-1">
                        <Clock size={10} />
                        {study.solution.duration}
                      </span>
                    </div>
                    <ul className="space-y-2">
                      {study.solution.items.map((item, idx) => (
                        <li key={idx} className="flex items-start gap-2 text-sm text-slate-600">
                          <CheckCircle2 size={14} className="text-[#2776ea] mt-0.5 shrink-0 opacity-60" />
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* --- FOOTER (Results) --- */}
                <div className="bg-slate-900 p-8">
                  <h4 className="flex items-center gap-2 text-xs font-black text-[#76ea27] uppercase tracking-widest mb-6">
                    <Trophy size={14} />
                    Results & Impact
                  </h4>
                  
                  <div className="grid grid-cols-1 gap-4">
                    {study.results.map((result, idx) => (
                      <div key={idx} className="flex items-start justify-between border-b border-slate-800 pb-2 last:border-0 last:pb-0">
                        <span className="text-slate-400 text-xs font-bold uppercase mt-1">
                          {result.label}
                        </span>
                        <span className="text-white text-sm font-bold text-right pl-4 max-w-[60%]">
                          {result.value}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>

              </div>
            );
          })}
        </div>

        {/* Call to Action at bottom */}
        <div className="mt-16 text-center">
            <button className="inline-flex items-center gap-2 bg-[#2776ea] text-white px-8 py-4 rounded-full font-bold hover:bg-[#1e5cbf] transition-colors shadow-xl shadow-blue-500/30">
                View Full Case Studies
                <ArrowRight size={18} />
            </button>
        </div>

      </div>
    </section>
  );
}