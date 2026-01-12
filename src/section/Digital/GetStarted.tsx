"use client";

import { GET_STARTED_DATA } from "@/data/Digital/GET_STARTED_DATA";
import { ArrowRight, CheckCircle2 } from "lucide-react";

export default function GetStarted() {
  const { header, assessment, workshop, contact } = GET_STARTED_DATA;

  return (
    <section className="py-20 lg:py-32 bg-white font-sora relative overflow-hidden">
      
      {/* Background Decor */}
      <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(#e2e8f0_1px,transparent_1px)] [background-size:20px_20px] opacity-[0.4] pointer-events-none" />

      <div className="container mx-auto px-6 max-w-6xl relative z-10">
        
        {/* --- HEADER --- */}
        <div className="text-center mb-16 max-w-3xl mx-auto">
          <span className="text-[#2776ea] font-black uppercase tracking-[0.2em] text-xs mb-4 block">
            {header.badge}
          </span>
          <h2 className="text-4xl md:text-5xl font-black text-slate-900 tracking-tighter mb-6">
            {header.title}
          </h2>
          <p className="text-slate-500 text-lg">
            {header.subtitle}
          </p>
        </div>

        {/* --- CARDS GRID --- */}
        <div className="grid md:grid-cols-2 gap-8 lg:gap-12 items-stretch mb-20">
          
          {/* 1. FREE ASSESSMENT CARD */}
          <div className="bg-white rounded-3xl p-8 lg:p-10 border border-slate-200 shadow-xl shadow-slate-200/50 flex flex-col relative group hover:border-[#2776ea] transition-all duration-300">
            <div className="absolute top-6 right-6">
              <span className="bg-[#76ea27]/10 text-[#76ea27] text-xs font-black uppercase px-3 py-1 rounded-full tracking-wider border border-[#76ea27]/20">
                {assessment.badge}
              </span>
            </div>
            
            <div className="mb-6">
              <div className="w-14 h-14 bg-[#2776ea]/10 rounded-2xl flex items-center justify-center text-[#2776ea] mb-6">
                <assessment.icon size={28} />
              </div>
              <h3 className="text-2xl font-black text-slate-900 mb-2">
                {assessment.title}
              </h3>
              <p className="text-slate-500 text-sm leading-relaxed">
                {assessment.description}
              </p>
            </div>

            <ul className="space-y-4 mb-8 flex-grow">
              {assessment.features.map((feature, idx) => (
                <li key={idx} className="flex items-start gap-3 text-slate-600 font-medium text-sm">
                  <CheckCircle2 size={18} className="text-[#2776ea] mt-0.5 shrink-0" />
                  {feature}
                </li>
              ))}
            </ul>

            <button className="w-full py-4 rounded-xl border-2 border-[#2776ea] text-[#2776ea] font-bold text-sm uppercase tracking-wider hover:bg-[#2776ea] hover:text-white transition-all flex items-center justify-center gap-2 group-hover:shadow-lg group-hover:shadow-blue-500/20">
              {assessment.buttonText}
              <ArrowRight size={16} />
            </button>
          </div>

          {/* 2. WORKSHOP CARD (Premium) */}
          <div className="bg-slate-900 rounded-3xl p-8 lg:p-10 shadow-2xl shadow-slate-900/20 flex flex-col relative overflow-hidden text-white border border-slate-800 group transform md:-translate-y-4">
            
            {/* Glow Effect */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-[#2776ea]/20 rounded-full blur-[80px] -mr-16 -mt-16 pointer-events-none" />

            <div className="relative z-10 flex flex-col h-full">
              <div className="mb-6">
                <div className="w-14 h-14 bg-white/10 rounded-2xl flex items-center justify-center text-white mb-6 backdrop-blur-sm">
                  <workshop.icon size={28} />
                </div>
                <h3 className="text-2xl font-black text-white mb-2">
                  {workshop.title}
                </h3>
                <p className="text-slate-400 text-sm leading-relaxed">
                  {workshop.description}
                </p>
              </div>

              <div className="mb-8 p-4 rounded-xl bg-white/5 border border-white/10 backdrop-blur-md">
                <span className="text-3xl font-black text-white block">
                  {workshop.price}
                </span>
                <span className="text-xs text-slate-400 uppercase tracking-widest font-bold">
                  {workshop.priceSubtext}
                </span>
              </div>

              <ul className="space-y-4 mb-8 flex-grow">
                {workshop.features.map((feature, idx) => (
                  <li key={idx} className="flex items-start gap-3 text-slate-300 font-medium text-sm">
                    <CheckCircle2 size={18} className="text-[#76ea27] mt-0.5 shrink-0" />
                    {feature}
                  </li>
                ))}
              </ul>

              <button className="w-full py-4 rounded-xl bg-[#2776ea] text-white font-bold text-sm uppercase tracking-wider hover:bg-[#1e5cbf] transition-all flex items-center justify-center gap-2 shadow-lg shadow-blue-600/20">
                {workshop.buttonText}
                <ArrowRight size={16} />
              </button>
            </div>
          </div>

        </div>

        {/* --- CONTACT FOOTER --- */}
        <div className="border-t border-slate-200 pt-12">
          <div className="text-center mb-8">
            <h4 className="text-xl font-bold text-slate-900 mb-2">
              {contact.title}
            </h4>
          </div>
          
          <div className="flex flex-wrap justify-center gap-4 md:gap-12">
            {contact.info.map((item, idx) => {
              const Icon = item.icon;
              return (
                <div key={idx} className="flex items-center gap-3 bg-slate-50 px-6 py-3 rounded-full border border-slate-100">
                  <div className="p-2 bg-white rounded-full text-[#2776ea] shadow-sm">
                    <Icon size={16} />
                  </div>
                  <div>
                    <span className="block text-[10px] uppercase font-bold text-slate-400 tracking-widest">
                      {item.label}
                    </span>
                    {item.href ? (
                      <a href={item.href} className="text-sm font-bold text-slate-700 hover:text-[#2776ea] transition-colors">
                        {item.value}
                      </a>
                    ) : (
                      <span className="text-sm font-bold text-slate-700">
                        {item.value}
                      </span>
                    )}
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