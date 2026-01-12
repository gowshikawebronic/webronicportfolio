"use client";

import {
  Cloud,
  Bot,
  Settings,
  Layers,
  Code2,
  CheckCircle2,
} from "lucide-react";
// Adjust the import path based on where you saved the data file
import { TECH_STACK_DATA } from "@/data/AIML/TECH_STACK_DATA";

export default function TechnologyStack() {
  return (
    <section className="relative bg-slate-50 py-24 md:py-32 font-sora px-5 lg:px-10 overflow-hidden">
      
      {/* Background Decor */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none opacity-[0.03]">
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-[#2776ea] rounded-full blur-[120px] -translate-y-1/2 translate-x-1/2" />
        <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-[#76ea27] rounded-full blur-[120px] translate-y-1/2 -translate-x-1/2" />
        <div className="absolute inset-0 bg-[radial-gradient(#000_1px,transparent_1px)] [background-size:32px_32px]" />
      </div>

      <div className="container mx-auto max-w-7xl relative z-10">
        
        {/* --- HEADER --- */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white border border-slate-200 shadow-sm mb-6">
            <Layers size={14} className="text-[#2776ea]" />
            <span className="text-[10px] font-black uppercase tracking-[0.25em] text-slate-500">
              Infrastructure
            </span>
          </div>
          
          <h2 className="text-3xl md:text-5xl font-black text-slate-900 tracking-tighter leading-tight mb-6">
            Enterprise-Grade <br />
            <span className="bg-gradient-to-r from-[#2776ea] to-[#76ea27] bg-clip-text text-transparent">
              Technology Stack
            </span>
          </h2>
          <p className="text-lg text-slate-500 font-medium leading-relaxed max-w-2xl mx-auto">
            We leverage a robust ecosystem of cutting-edge frameworks, cloud platforms, 
            and MLOps tools to build scalable, production-ready AI solutions.
            
          </p>
        </div>

        {/* --- TECH GRID --- */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">

          {/* 1. ML FRAMEWORKS */}
          <div className="bg-white rounded-[2.5rem] p-8 md:p-10 border border-slate-100 shadow-xl shadow-blue-900/5 hover:border-[#2776ea]/30 transition-all duration-300 group">
            <div className="flex items-center gap-4 mb-8">
              <div className="h-12 w-12 rounded-2xl bg-[#2776ea]/10 flex items-center justify-center text-[#2776ea] group-hover:bg-[#2776ea] group-hover:text-white transition-all">
                <Code2 size={24} />
              </div>
              <h3 className="text-xl font-black text-slate-900">Machine Learning Frameworks</h3>
            </div>
            <div className="space-y-6">
              {TECH_STACK_DATA.mlFrameworks.map((item, i) => (
                <div key={i} className="group/item">
                  <h4 className="text-sm font-bold text-slate-900 mb-1 flex items-center gap-2">
                    <span className="h-1.5 w-1.5 rounded-full bg-[#2776ea]" /> {item.name}
                  </h4>
                  <p className="text-xs font-medium text-slate-500 pl-3.5 border-l border-slate-100 leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* 2. LLMs & MLOPS (Combined Column for Balance) */}
          <div className="flex flex-col gap-8">
            
            {/* LLMs Card */}
            <div className="bg-white rounded-[2.5rem] p-8 md:p-10 border border-slate-100 shadow-xl shadow-blue-900/5 hover:border-[#76ea27]/30 transition-all duration-300 group flex-1">
              <div className="flex items-center gap-4 mb-8">
                <div className="h-12 w-12 rounded-2xl bg-[#76ea27]/10 flex items-center justify-center text-[#76ea27] group-hover:bg-[#76ea27] group-hover:text-white transition-all">
                  <Bot size={24} />
                </div>
                <h3 className="text-xl font-black text-slate-900">Large Language Models</h3>
              </div>
              <div className="space-y-4">
                {TECH_STACK_DATA.llms.map((item, i) => (
                  <div key={i} className="flex items-start gap-3">
                    <CheckCircle2 size={16} className="text-[#76ea27] mt-0.5 shrink-0" />
                    <div>
                      <p className="text-sm font-bold text-slate-900">{item.name}</p>
                      <p className="text-xs text-slate-500 font-medium leading-relaxed">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* MLOps Card */}
            <div className="bg-slate-900 rounded-[2.5rem] p-8 md:p-10 text-white shadow-xl shadow-slate-900/20 group relative overflow-hidden">
              <div className="relative z-10">
                <div className="flex items-center gap-4 mb-8">
                  <div className="h-12 w-12 rounded-2xl bg-white/10 flex items-center justify-center text-white border border-white/10">
                    <Settings size={24} />
                  </div>
                  <h3 className="text-xl font-black">MLOps & Infrastructure</h3>
                </div>
                <div className="flex flex-wrap gap-2">
                  {TECH_STACK_DATA.mlOps.map((tag, i) => (
                    <span key={i} className="px-3 py-1.5 rounded-lg bg-white/10 border border-white/5 text-[11px] font-bold tracking-wide hover:bg-white/20 transition-colors cursor-default">
                      {tag}
                    </span>
                  ))}
                </div>
                <p className="mt-6 text-xs text-slate-400 font-medium leading-relaxed">
                  End-to-end lifecycle management including experiment tracking, model registry, deployment, containerization, and orchestration for reproducible deployments.
                </p>
              </div>
              {/* Decor */}
              <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-[#2776ea]/20 rounded-full blur-3xl" />
            </div>

          </div>

          {/* 3. CLOUD AI PLATFORMS (Full Width) */}
          <div className="md:col-span-2 bg-white rounded-[2.5rem] p-8 md:p-12 border border-slate-100 shadow-xl shadow-blue-900/5 relative overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-[#2776ea] via-[#76ea27] to-[#2776ea]" />
            
            <div className="flex items-center gap-4 mb-10">
              <div className="h-12 w-12 rounded-2xl bg-slate-50 border border-slate-100 flex items-center justify-center text-slate-700">
                <Cloud size={24} />
              </div>
              <h3 className="text-xl font-black text-slate-900">Cloud AI Platforms</h3>
            </div>

            <div className="grid md:grid-cols-3 gap-8 md:gap-12">
              
              {TECH_STACK_DATA.cloudPlatforms.map((platform, i) => (
                <div key={i} className={i !== 0 ? "md:border-l md:border-slate-100 md:pl-10" : ""}>
                  <h4 className={`text-sm font-black uppercase tracking-widest ${platform.color} mb-4 flex items-center gap-2`}>
                    {platform.provider}
                  </h4>
                  <ul className="space-y-3">
                    {platform.services.map((service, j) => (
                      <li key={j} className="text-xs font-bold text-slate-600 flex items-start gap-2">
                        <div className="h-1 w-1 rounded-full bg-slate-300 mt-1.5 shrink-0" /> 
                        <span className="leading-snug">{service}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}

            </div>
          </div>

        </div>
      </div>
    </section>
  );
}