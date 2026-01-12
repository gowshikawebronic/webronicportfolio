"use client";

import { CLOUD_MIGRATION_DATA } from "@/data/clouddevops/CLOUD_MIGRATION_DATA";
import { 
  CheckCircle2, 
  GitMerge, 
  Clock 
} from "lucide-react";

export default function CloudMigration() {
  const { header, phases } = CLOUD_MIGRATION_DATA;

  return (
    <section className="relative bg-white py-10 font-sora overflow-hidden">
      
      {/* Background Decor */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1000px] h-[1000px] bg-slate-50 rounded-full blur-3xl -z-10" />

      <div className="container mx-auto px-6 max-w-5xl relative z-10">
        
        {/* --- HEADER --- */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          {/* <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#76ea27]/10 border border-[#76ea27]/20 mb-6">
            <GitMerge size={14} className="text-[#2776ea]" />
            <span className="text-[10px] font-black uppercase tracking-[0.25em] text-[#76ea27]">
              {header.badge}
            </span>
          </div> */}
          <div className="flex items-center justify-center gap-4 mb-6">
            <GitMerge size={14} className="text-[#2776ea]" />
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

        {/* --- PROCESS TIMELINE --- */}
        <div className="relative">
          
          {/* The Vertical Connecting Line */}
          <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-[#2776ea] via-[#76ea27] to-slate-200 md:-translate-x-1/2 hidden md:block" />
          {/* Mobile Line */}
          <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-slate-200 md:hidden" />

          <div className="space-y-12 md:space-y-0">
            {phases.map((phase, index) => {
              const Icon = phase.icon;
              const isEven = index % 2 === 0;

              return (
                <div key={index} className={`relative flex flex-col md:flex-row items-center ${isEven ? 'md:flex-row-reverse' : ''}`}>
                  
                  {/* Empty Spacer for desktop layout balance */}
                  <div className="hidden md:block md:w-1/2" />

                  {/* Central Node (The Dot) */}
                  <div className="absolute left-8 md:left-1/2 w-12 h-12 rounded-full bg-white border-4 border-[#2776ea] flex items-center justify-center z-10 -translate-x-1/2 shadow-lg shadow-blue-900/20">
                    <span className="text-[10px] font-black text-slate-900">{phase.phaseNum}</span>
                  </div>

                  {/* Content Card */}
                  <div className={`w-full md:w-1/2 pl-20 md:pl-0 ${isEven ? 'md:pr-12 md:text-right' : 'md:pl-12 md:text-left'}`}>
                    
                    <div className="bg-slate-50 p-6 md:p-8 rounded-3xl border border-slate-100 hover:shadow-xl hover:shadow-blue-900/5 hover:border-[#2776ea]/30 transition-all duration-300 group">
                      
                      {/* Card Header */}
                      <div className={`flex items-center gap-4 mb-4 ${isEven ? 'md:flex-row-reverse' : ''}`}>
                        <div className="h-10 w-10 rounded-xl bg-[#2776ea]/10 flex items-center justify-center text-[#2776ea] group-hover:bg-[#2776ea] group-hover:text-white transition-colors">
                          <Icon size={20} />
                        </div>
                        <div>
                          <h3 className="text-xl font-bold text-slate-900">Phase {index + 1}: {phase.name}</h3>
                          <div className={`flex items-center gap-1.5 text-xs font-bold text-[#76ea27] uppercase tracking-wide ${isEven ? 'md:justify-end' : ''}`}>
                            <Clock size={12} />
                            {phase.duration}
                          </div>
                        </div>
                      </div>

                      <p className="text-slate-500 text-sm font-medium mb-6 leading-relaxed">
                        {phase.description}
                      </p>

                      {/* Activities List */}
                      <ul className={`space-y-2 ${isEven ? 'md:items-end' : ''} flex flex-col`}>
                        {phase.activities.map((activity, idx) => (
                          <li key={idx} className={`flex items-start gap-2 text-sm text-slate-600 font-bold ${isEven ? 'md:flex-row-reverse' : ''}`}>
                            <CheckCircle2 size={16} className="text-[#2776ea] shrink-0 mt-0.5" />
                            <span>{activity}</span>
                          </li>
                        ))}
                      </ul>

                    </div>

                  </div>
                </div>
              );
            })}
          </div>
        </div>

      </div>
    </section>
  );
}