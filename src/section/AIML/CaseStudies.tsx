"use client";

import { CASE_STUDIES } from "@/data/AIML/CASE_STUDIES";
import { 
  ArrowUpRight, 
  CheckCircle2, 
  Quote, 
  TrendingUp,
  Cpu
} from "lucide-react";
// Adjust import path as needed


export default function CaseStudies() {
  return (
    <section className="bg-slate-50 py-24 md:py-32 font-sora relative overflow-hidden px-5 lg:px-25">
      
      {/* Background Decor */}
      <div className="absolute inset-0 pointer-events-none opacity-[0.03] bg-[radial-gradient(#2776ea_1px,transparent_1px)] [background-size:32px_32px]" />

      <div className="container mx-auto px-6 relative z-10">
        
        {/* --- HEADER --- */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white border border-slate-200 shadow-sm mb-6">
            <TrendingUp size={14} className="text-[#2776ea]" />
            <span className="text-[10px] font-black uppercase tracking-[0.25em] text-slate-500">
              Proven Impact
            </span>
          </div>
          <h2 className="text-3xl md:text-5xl font-black text-slate-900 tracking-tighter mb-6">
            Case Studies: <br />
            <span className="bg-gradient-to-r from-[#2776ea] to-[#76ea27] bg-clip-text text-transparent">
              Real World Success
            </span>
          </h2>
          <p className="text-lg text-slate-500 font-medium leading-relaxed">
            See how our AI solutions translate into measurable business value and ROI for industry leaders.
          </p>
        </div>

        {/* --- CASE STUDIES GRID --- */}
        <div className="grid lg:grid-cols-3 gap-8">
          {CASE_STUDIES.map((study, index) => (
            <div 
              key={index}
              className="group flex flex-col bg-white rounded-[2.5rem] border border-slate-100 shadow-xl shadow-slate-200/40 overflow-hidden hover:-translate-y-2 transition-transform duration-500"
            >
              
              {/* --- TOP: NARRATIVE --- */}
              <div className="p-8 md:p-10 flex-1">
                {/* Category Badge */}
                <div className="flex items-center justify-between mb-6">
                  <div className="flex items-center gap-2">
                    <div className={`p-2 rounded-lg bg-slate-50 ${study.color}`}>
                      <study.icon size={18} />
                    </div>
                    <span className="text-[10px] font-black uppercase tracking-widest text-slate-400">
                      {study.category}
                    </span>
                  </div>
                  <ArrowUpRight className="text-slate-300 group-hover:text-[#2776ea] transition-colors" size={20} />
                </div>

                <div className="mb-4">
                    <p className="text-[10px] font-bold text-slate-400 uppercase tracking-wide mb-1">Client</p>
                    <p className="text-xs font-semibold text-slate-600">{study.client}</p>
                </div>

                <h3 className="text-xl font-black text-slate-900 mb-6 leading-tight min-h-[3.5rem]">
                  {study.title}
                </h3>

                {/* Challenge & Solution */}
                <div className="space-y-6 mb-8">
                  <div>
                    <p className="text-[10px] font-black uppercase tracking-widest text-[#ef4444] mb-2 flex items-center gap-1.5">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#ef4444]" /> The Challenge
                    </p>
                    <p className="text-xs font-medium text-slate-500 leading-relaxed">
                      {study.challenge}
                    </p>
                  </div>
                  <div>
                    <p className="text-[10px] font-black uppercase tracking-widest text-[#2776ea] mb-2 flex items-center gap-1.5">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#2776ea]" /> The Solution
                    </p>
                    <p className="text-xs font-medium text-slate-500 leading-relaxed">
                      {study.solution}
                    </p>
                  </div>
                </div>

                {/* Implementation List */}
                <div className="bg-slate-50 rounded-2xl p-5 border border-slate-100">
                  <p className="text-[10px] font-black uppercase tracking-widest text-slate-400 mb-3 flex items-center gap-2">
                    <Cpu size={12} /> Implementation
                  </p>
                  <ul className="grid gap-2">
                    {study.implementation.map((item, i) => (
                      <li key={i} className="flex items-start gap-2 text-[11px] font-bold text-slate-600">
                        <CheckCircle2 size={12} className="text-[#76ea27] shrink-0 mt-0.5" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* --- BOTTOM: RESULTS & QUOTE --- */}
              <div className="bg-slate-900 p-8 md:p-10 text-white relative overflow-hidden mt-auto">
                {/* Decor */}
                <div className={`absolute top-0 right-0 w-32 h-32 ${study.color.replace('text-', 'bg-')}/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2`} />
                
                {/* Metrics Grid */}
                <div className="grid grid-cols-3 gap-4 mb-8 relative z-10 border-b border-white/10 pb-8">
                  {study.highlightResults.map((res, i) => (
                    <div key={i}>
                      <p className={`text-xl font-black ${i === 2 ? 'text-[#76ea27]' : 'text-white'} mb-1`}>
                        {res.value}
                      </p>
                      <p className="text-[9px] font-bold text-slate-400 uppercase tracking-wide leading-tight">
                        {res.label}
                      </p>
                    </div>
                  ))}
                </div>

                {/* Quote */}
                <div className="relative z-10">
                  <Quote size={20} className="text-white/20 mb-3" />
                  <p className="text-sm font-medium text-slate-300 italic mb-4 leading-relaxed">
                    "{study.quote}"
                  </p>
                  <div className="flex items-center gap-2">
                    <div className="h-0.5 w-4 bg-[#2776ea]" />
                    <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">
                      {study.author}
                    </span>
                  </div>
                </div>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
}