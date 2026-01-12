"use client";

import { METHODOLOGY_DATA } from "@/data/Digital/METHODOLOGY_DATA";
import { CheckCircle2, FileText, Clock, ArrowDown } from "lucide-react";

export default function TransformationMethodology() {
  return (
    <section className="py-20 lg:py-32 bg-slate-50 font-sora overflow-hidden">
      <div className="container mx-auto px-6 max-w-5xl">
        
        {/* Header */}
        <div className="text-center mb-16">
          <span className="text-[#2776ea] font-black uppercase tracking-[0.2em] text-xs mb-4 block">
            How We Work
          </span>
          <h2 className="text-3xl md:text-5xl font-black text-slate-900 tracking-tighter mb-6">
            Webronic Transformation <span className="text-[#2776ea]">Framework</span>
          </h2>
          <p className="text-slate-600 text-lg max-w-2xl mx-auto">
            Our proven 6-phase methodology ensures a structured, low-risk journey from initial vision to ongoing optimization.
          </p>
          
          <div className="mt-10 mb-12 flex justify-center">
             [Image of digital transformation methodology roadmap 6 phases]
          </div>
        </div>

        {/* Timeline Container */}
        <div className="relative">
          
          {/* Vertical Connecting Line (Absolute centered) */}
          <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-0.5 bg-slate-200 -translate-x-1/2 hidden md:block" />
          {/* Mobile Line (Left aligned) */}
          <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-slate-200 -translate-x-1/2 md:hidden" />

          <div className="space-y-12 relative z-10">
            {METHODOLOGY_DATA.map((item, index) => {
              const Icon = item.icon;
              // Determine alignment for desktop (even index = left, odd = right)
              const isEven = index % 2 === 0;

              return (
                <div key={index} className={`relative flex flex-col md:flex-row items-start ${isEven ? 'md:flex-row-reverse' : ''} gap-8 md:gap-0`}>
                  
                  {/* --- Spacer for Desktop Alignment --- */}
                  <div className="hidden md:block w-1/2" />

                  {/* --- Center Node (Icon) --- */}
                  <div className="absolute left-8 md:left-1/2 -translate-x-1/2 flex flex-col items-center justify-center">
                    <div className="w-16 h-16 rounded-full bg-white border-4 border-[#2776ea] shadow-lg shadow-blue-500/20 flex items-center justify-center text-[#2776ea] z-20">
                      <Icon size={28} strokeWidth={1.5} />
                    </div>
                  </div>

                  {/* --- Content Card --- */}
                  <div className={`w-full md:w-1/2 pl-20 md:pl-0 ${isEven ? 'md:pr-16 text-left' : 'md:pl-16 text-left'}`}>
                    <div className="bg-white p-6 md:p-8 rounded-2xl shadow-xl shadow-slate-200/50 border border-slate-100 hover:border-[#2776ea]/30 transition-all duration-300 group">
                      
                      {/* Card Header */}
                      <div className="flex items-center justify-between mb-4 border-b border-slate-100 pb-4">
                        <div>
                          <span className="text-xs font-bold uppercase tracking-widest text-[#76ea27]">
                            {item.phase}
                          </span>
                          <h3 className="text-2xl font-black text-slate-900 mt-1">
                            {item.title}
                          </h3>
                        </div>
                        <div className="flex items-center gap-2 bg-slate-50 px-3 py-1 rounded-full text-xs font-bold text-slate-500 border border-slate-200">
                          <Clock size={14} />
                          {item.duration}
                        </div>
                      </div>

                      {/* Content Grid */}
                      <div className="space-y-6">
                        
                        {/* Activities List */}
                        <div>
                          <p className="text-sm font-bold text-slate-400 uppercase tracking-wider mb-3 flex items-center gap-2">
                             Key Activities
                          </p>
                          <ul className="space-y-2">
                            {item.activities.map((act, idx) => (
                              <li key={idx} className="flex items-start gap-2 text-slate-600 text-sm font-medium">
                                <CheckCircle2 size={16} className="text-[#2776ea] mt-0.5 shrink-0" />
                                {act}
                              </li>
                            ))}
                          </ul>
                        </div>

                        {/* Deliverables Box */}
                        <div className="bg-[#2776ea]/5 rounded-xl p-4 border border-[#2776ea]/10">
                          <p className="text-sm font-bold text-[#2776ea] uppercase tracking-wider mb-3 flex items-center gap-2">
                             <FileText size={14} />
                             Deliverables
                          </p>
                          <ul className="space-y-2">
                            {item.deliverables.map((del, idx) => (
                              <li key={idx} className="flex items-start gap-2 text-slate-700 text-sm">
                                <span className="w-1.5 h-1.5 bg-[#76ea27] rounded-full mt-1.5 shrink-0" />
                                {del}
                              </li>
                            ))}
                          </ul>
                        </div>

                      </div>
                    </div>
                  </div>

                </div>
              );
            })}
          </div>

          {/* End Node */}
          <div className="absolute left-8 md:left-1/2 bottom-0 w-4 h-4 bg-slate-300 rounded-full -translate-x-1/2 translate-y-2" />
        </div>
        
        {/* Visual End Arrow */}
        <div className="flex justify-center mt-12 text-slate-300">
             <ArrowDown size={32} className="animate-bounce" />
        </div>

      </div>
    </section>
  );
}