"use client";

import { AI_PROCESS_PHASES } from "@/data/AIML/AI_PROCESS_PHASES";
import { 
  Target, 
  ListTodo, 
  FileText, 
  Clock 
} from "lucide-react";
// Adjust the import path based on where you saved the data file


export default function AIDevelopmentProcess() {
  return (
    <section className="bg-white py-20 md:py-28 font-sora relative overflow-hidden">
      
      {/* Background Decor */}
      <div className="absolute inset-0 pointer-events-none opacity-30">
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-[#2776ea]/5 rounded-full blur-[120px]" />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        
        {/* --- HEADER --- */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-slate-50 border border-slate-100 shadow-sm mb-6">
            <span className="w-2 h-2 rounded-full bg-[#2776ea] animate-pulse" />
            <span className="text-[10px] font-black uppercase tracking-[0.25em] text-slate-500">
              How We Work
            </span>
          </div>
          <h2 className="text-3xl md:text-5xl font-black text-slate-900 tracking-tighter mb-6">
            AI Development <br />
            <span className="bg-gradient-to-r from-[#2776ea] to-[#76ea27] bg-clip-text text-transparent">
              Process
            </span>
          </h2>
          <p className="text-lg text-slate-500 font-medium leading-relaxed">
            From initial discovery to continuous optimization, our structured approach ensures 
            successful AI implementation and measurable business value.
          </p>
        </div>

        {/* --- PROCESS TIMELINE --- */}
        <div className="relative max-w-5xl mx-auto">
          
          {/* Vertical Connecting Line */}
          <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-px bg-slate-200 -translate-x-1/2 hidden md:block" />
          <div className="absolute left-8 top-0 bottom-0 w-px bg-slate-200 md:hidden" />

          <div className="space-y-16">
            {AI_PROCESS_PHASES.map((phase, index) => (
              <div key={index} className={`relative flex flex-col md:flex-row gap-8 md:gap-0 ${index % 2 === 0 ? 'md:flex-row-reverse' : ''}`}>
                
                {/* Timeline Node (Center Dot) */}
                <div className="absolute left-8 md:left-1/2 -translate-x-1/2 flex items-center justify-center w-16 h-16 rounded-2xl bg-white border border-slate-100 shadow-lg z-10">
                  <div className={`w-10 h-10 rounded-xl ${phase.color} flex items-center justify-center text-white shadow-md`}>
                    <phase.icon size={20} strokeWidth={2} />
                  </div>
                </div>

                {/* Spacer for Alternate Side */}
                <div className="hidden md:block md:w-1/2" />

                {/* Content Card */}
                <div className={`md:w-1/2 pl-24 md:pl-0 ${index % 2 === 0 ? 'md:pr-16' : 'md:pl-16'}`}>
                  <div className="group relative bg-slate-50 rounded-[2.5rem] p-8 md:p-10 border border-slate-100 hover:bg-white hover:shadow-xl hover:shadow-blue-900/5 hover:-translate-y-1 transition-all duration-300">
                    
                    {/* Phase Header */}
                    <div className="mb-8 pb-6 border-b border-slate-200/60">
                      <div className="flex items-center gap-3 mb-2">
                        <span className={`px-3 py-1 rounded-lg ${phase.color} bg-opacity-10 text-[10px] font-black uppercase tracking-widest ${phase.color.replace('bg-', 'text-')}`}>
                          {phase.phase}
                        </span>
                        <div className="flex items-center gap-1.5 text-xs font-bold text-slate-400 bg-white px-2 py-1 rounded-md border border-slate-100">
                          <Clock size={12} /> {phase.duration}
                        </div>
                      </div>
                      <h3 className="text-2xl font-black text-slate-900">{phase.title}</h3>
                    </div>

                    {/* Details Grid */}
                    <div className="space-y-8">
                      
                      {/* Objectives */}
                      <div>
                        <div className="flex items-center gap-2 mb-3">
                          <Target size={16} className="text-[#2776ea]" />
                          <h4 className="text-xs font-black uppercase tracking-widest text-slate-900">Objectives</h4>
                        </div>
                        <ul className="space-y-2">
                          {phase.objectives.map((item, i) => (
                            <li key={i} className="flex items-start gap-2 text-xs font-medium text-slate-500 leading-relaxed">
                              <span className="mt-1.5 h-1 w-1 rounded-full bg-[#2776ea] shrink-0" />
                              {item}
                            </li>
                          ))}
                        </ul>
                      </div>

                      {/* Activities */}
                      <div>
                        <div className="flex items-center gap-2 mb-3">
                          <ListTodo size={16} className="text-[#76ea27]" />
                          <h4 className="text-xs font-black uppercase tracking-widest text-slate-900">Activities</h4>
                        </div>
                        <ul className="space-y-2">
                          {phase.activities.map((item, i) => (
                            <li key={i} className="flex items-start gap-2 text-xs font-medium text-slate-500 leading-relaxed">
                              <span className="mt-1.5 h-1 w-1 rounded-full bg-[#76ea27] shrink-0" />
                              {item}
                            </li>
                          ))}
                        </ul>
                      </div>

                      {/* Deliverables */}
                      <div className="bg-white rounded-2xl p-5 border border-slate-100">
                        <div className="flex items-center gap-2 mb-3">
                          <FileText size={16} className="text-slate-400" />
                          <h4 className="text-xs font-black uppercase tracking-widest text-slate-900">Key Deliverables</h4>
                        </div>
                        <div className="flex flex-wrap gap-2">
                          {phase.deliverables.map((item, i) => (
                            <span key={i} className="px-2 py-1 rounded-md bg-slate-50 border border-slate-100 text-[10px] font-bold text-slate-600">
                              {item}
                            </span>
                          ))}
                        </div>
                      </div>

                    </div>
                  </div>
                </div>

              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}