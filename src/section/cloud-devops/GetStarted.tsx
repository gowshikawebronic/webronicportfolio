"use client";

import Link from "next/link";
import { GET_STARTED_DATA } from "@/data/clouddevops/GET_STARTED_DATA";
import { 
  ArrowRight, 
  CheckCircle2, 
  Rocket 
} from "lucide-react";

export default function GetStarted() {
  const { header, cards } = GET_STARTED_DATA;

  return (
    <section className="relative  py-10 font-sora overflow-hidden">
      
      {/* --- BACKGROUND DECOR --- */}
      {/* <div className="absolute inset-0 pointer-events-none">
        <div className="absolute inset-0 bg-[radial-gradient(rgba(255,255,255,0.1)_1px,transparent_1px)] [background-size:32px_32px] opacity-20" />
        <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-[#2776ea]/10 rounded-full blur-[120px] translate-x-1/3 -translate-y-1/3" />
        <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-[#76ea27]/10 rounded-full blur-[100px] -translate-x-1/3 translate-y-1/3" />
      </div> */}

      <div className="container mx-auto px-6 max-w-6xl relative z-10">
        
        {/* --- HEADER --- */}
        <div className="text-center mb-16">
          {/* <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#2776ea]/20 border border-[#2776ea]/30 mb-6">
            <Rocket size={14} className="text-[#2776ea]" />
            <span className="text-[10px] font-black uppercase tracking-[0.25em] text-[#2776ea]">
              {header.badge}
            </span>
          </div> */}
          <div className="flex items-center justify-center gap-4 mb-6">
            <Rocket size={14} className="text-[#2776ea]" />
            <span className="text-[11px] font-black uppercase tracking-[0.3em] text-[#2776ea]">
              {header.badge}
            </span>
          </div>
          
          <h2 className="text-3xl md:text-5xl font-black text-black tracking-tighter leading-[1.1] mb-6">
            {header.title}{" "}
            <span className="bg-gradient-to-r from-[#2776ea] to-[#76ea27] bg-clip-text text-transparent">
              {header.titleHighlight}
            </span>
          </h2>
          
          <p className="text-lg text-slate-400 font-medium max-w-2xl mx-auto">
            {header.description}
          </p>
        </div>

        {/* --- CARDS GRID --- */}
        <div className="grid md:grid-cols-2 gap-8 lg:gap-12 items-stretch">
          {cards.map((card, index) => {
            const Icon = card.icon;
            const isBlue = card.theme === "blue";
            
            return (
              <div 
                key={index}
                className="group relative bg-white rounded-3xl p-8 md:p-10 overflow-hidden hover:-translate-y-2 transition-transform duration-300 h-full flex flex-col"
              >
                {/* Top Border Accent */}
                <div className={`absolute top-0 left-0 w-full h-2 ${isBlue ? "bg-[#2776ea]" : "bg-[#76ea27]"}`} />
                
                {/* Icon Circle */}
                <div className={`h-16 w-16 rounded-2xl flex items-center justify-center mb-8 shrink-0 ${
                  isBlue 
                    ? "bg-[#2776ea]/10 text-[#2776ea]" 
                    : "bg-[#76ea27]/10 text-[#76ea27]"
                }`}>
                  <Icon size={32} />
                </div>

                <div className="mb-8">
                  <h3 className="text-2xl font-bold text-slate-900 mb-2">
                    {card.title}
                  </h3>
                  <p className="text-slate-500 font-medium">
                    {card.subTitle}
                  </p>
                </div>

                {/* Features List - Flex-1 ensures this section expands to fill space, keeping buttons aligned */}
                <ul className="space-y-4 mb-10 flex-1">
                  {card.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start gap-3">
                      <div className={`mt-0.5 rounded-full p-0.5 shrink-0 ${
                        isBlue ? "bg-[#2776ea]/10 text-[#2776ea]" : "bg-[#76ea27]/10 text-[#76ea27]"
                      }`}>
                        <CheckCircle2 size={14} strokeWidth={3} />
                      </div>
                      <span className="text-sm font-bold text-slate-700">
                        {feature}
                      </span>
                    </li>
                  ))}
                </ul>

                {/* CTA Button - mt-auto ensures it sits at the bottom */}
                <Link 
                  href={card.link}
                  className={`w-full mt-auto inline-flex items-center justify-center gap-2 py-4 rounded-xl text-white font-black uppercase tracking-widest text-xs transition-all shadow-lg hover:shadow-xl ${
                    isBlue 
                      ? "bg-[#2776ea] shadow-blue-900/20 hover:bg-[#3a6db0]" 
                      : "bg-[#76ea27] shadow-green-900/20 hover:bg-[#529936]"
                  }`}
                >
                  {card.cta} <ArrowRight size={16} />
                </Link>

                {/* Hover Glow Effect */}
                <div className={`absolute -right-20 -bottom-20 w-60 h-60 rounded-full blur-[80px] opacity-0 group-hover:opacity-20 transition-opacity pointer-events-none ${
                   isBlue ? "bg-[#2776ea]" : "bg-[#76ea27]"
                }`} />
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}