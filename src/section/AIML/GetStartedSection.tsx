"use client";

import { GET_STARTED_DATA } from "@/data/AIML/GET_STARTED_DATA";
import { ArrowRight, CheckCircle2 } from "lucide-react";

export default function GetStartedSection() {
  const { header, cards, contact } = GET_STARTED_DATA;

  return (
    <section className="bg-white py-24 md:py-32 font-sora relative overflow-hidden">
      {/* Background Decor */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute top-0 left-1/4 w-[800px] h-[800px] bg-[#2776ea]/5 rounded-full blur-[120px] -translate-y-1/2" />
        <div className="absolute bottom-0 right-1/4 w-[800px] h-[800px] bg-[#76ea27]/5 rounded-full blur-[120px] translate-y-1/2" />
      </div>

      <div className="container mx-auto px-6 max-w-7xl relative z-10">
        
        {/* --- Header --- */}
        <div className="text-center max-w-3xl mx-auto mb-16 md:mb-20">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-slate-50 border border-slate-100 shadow-sm mb-6">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#76ea27] opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-[#76ea27]"></span>
            </span>
            <span className="text-[10px] font-black uppercase tracking-[0.25em] text-slate-500">
              {header.badge}
            </span>
          </div>

          <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-slate-900 tracking-tighter leading-[1.1] mb-6">
            {header.titleLines[0]} <br />
            <span className="bg-gradient-to-r from-[#2776ea] to-[#76ea27] bg-clip-text text-transparent">
              {header.titleLines[1]}
            </span>
          </h2>
          <p className="text-lg text-slate-500 font-medium leading-relaxed max-w-2xl mx-auto">
            {header.description}
          </p>
        </div>

        {/* --- Main Action Grid --- */}
        <div className="grid md:grid-cols-2 gap-6 lg:gap-10 mb-20">
          {cards.map((card, index) => {
            const isDark = card.theme === "dark";
            
            return (
              <div 
                key={index}
                className={`group relative flex flex-col rounded-[2.5rem] p-8 md:p-12 transition-all duration-500 hover:-translate-y-1 ${
                  isDark 
                    ? "bg-slate-900 text-white shadow-2xl overflow-hidden" 
                    : "bg-slate-50 border border-slate-100 hover:bg-white hover:shadow-2xl hover:shadow-blue-900/10 hover:border-[#2776ea]/20"
                }`}
              >
                {/* Dark Card Decor */}
                {isDark && (
                  <div className="absolute top-0 right-0 w-64 h-64 bg-[#76ea27]/20 rounded-full blur-[80px] -translate-y-1/2 translate-x-1/2" />
                )}

                <div className="relative z-10 flex flex-col h-full">
                  <div 
                    className={`h-14 w-14 rounded-2xl flex items-center justify-center mb-8 group-hover:scale-110 transition-transform duration-500 ${
                      isDark 
                        ? "bg-white/10 border border-white/5 backdrop-blur-sm text-[#76ea27]" 
                        : "bg-white border border-slate-100 shadow-sm text-[#2776ea]"
                    }`}
                  >
                    <card.icon size={28} />
                  </div>
                  
                  <h3 className={`text-2xl md:text-3xl font-black mb-4 ${isDark ? "text-white" : "text-slate-900"}`}>
                    {card.title}
                  </h3>
                  <p className={`font-medium mb-8 ${isDark ? "text-slate-400" : "text-slate-500"}`}>
                    {card.description}
                  </p>

                  <ul className="space-y-4 mb-10 flex-grow">
                    {card.list.map((item, i) => (
                      <li key={i} className={`flex items-start gap-3 text-sm font-bold ${isDark ? "text-slate-300" : "text-slate-600"}`}>
                        <CheckCircle2 
                          className={`shrink-0 mt-0.5 ${isDark ? "text-[#76ea27]" : "text-[#2776ea]"}`} 
                          size={16} 
                        />
                        {item}
                      </li>
                    ))}
                  </ul>

                  <a 
                    href={card.cta.link} 
                    className={`w-full inline-flex items-center justify-center gap-2 font-bold py-4 rounded-xl transition-colors group/btn ${
                      isDark 
                        ? "bg-[#76ea27] text-white hover:bg-[#529438]" 
                        : "bg-[#2776ea] text-white hover:bg-[#3b6499]"
                    }`}
                  >
                    <span>{card.cta.text}</span>
                    <ArrowRight size={18} className="group-hover/btn:translate-x-1 transition-transform" />
                  </a>
                </div>
              </div>
            );
          })}
        </div>

        {/* --- Contact Info Bar --- */}
        <div className="bg-white rounded-[2rem] border border-slate-100 p-8 shadow-sm">
          <div className="grid md:grid-cols-3 gap-8 items-center">
            
            {/* Label */}
            <div className="text-center md:text-left">
              <h4 className="text-lg font-black text-slate-900 mb-1">{contact.title}</h4>
              <p className="text-sm text-slate-500 font-medium">{contact.subtitle}</p>
            </div>

            {/* Separator (Desktop) */}
            <div className="hidden md:block w-px h-12 bg-slate-100 mx-auto" />

            {/* Details */}
            <div className="md:col-span-2 flex flex-col md:flex-row justify-between items-center gap-6">
              {contact.methods.map((method, index) => {
                const Wrapper = method.link ? "a" : "div";
                const wrapperProps = method.link ? { href: method.link } : {};

                return (
                  <Wrapper key={index} {...wrapperProps} className="flex items-center gap-3 group cursor-pointer">
                    <div className={`h-10 w-10 rounded-full bg-slate-50 flex items-center justify-center transition-colors ${method.iconColor} ${method.link ? `group-hover:${method.iconColor.replace('text-', 'bg-')} group-hover:text-white` : ''}`}>
                      <method.icon size={18} />
                    </div>
                    <div className="text-left">
                      <span className="block text-[10px] font-bold uppercase tracking-wider text-slate-400">
                        {method.label}
                      </span>
                      <span className={`text-sm font-bold text-slate-900 transition-colors ${method.link ? method.hoverColor : ''}`}>
                        {method.value}
                      </span>
                    </div>
                  </Wrapper>
                );
              })}
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}