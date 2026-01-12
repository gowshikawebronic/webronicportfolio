"use client";

import { useState } from "react";
import { MessageCircle } from "lucide-react";
import { FAQ_DATA } from "@/data/AIML/FAQ_DATA";

export default function FAQSection() {
  const [openItem, setOpenItem] = useState<number | null>(null);

  const toggleItem = (index: number) => {
    setOpenItem(openItem === index ? null : index);
  };

  return (
    <section className="bg-[#fafbfc] py-24 md:py-32 font-sora relative overflow-hidden" id="faq">
      {/* Background Ambience */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-[#2776ea]/5 rounded-full blur-[120px] pointer-events-none -translate-y-1/2 translate-x-1/3" />
      <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-[#76ea27]/5 rounded-full blur-[120px] pointer-events-none translate-y-1/2 -translate-x-1/3" />
      
      <div className="container mx-auto px-6 max-w-7xl relative z-10">
        
        {/* --- Header Section --- */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-10 mb-16">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 mb-6">
              <span className="text-[10px] font-black uppercase tracking-[0.25em] text-[#2776ea]">
                FAQ
              </span>
            </div>
            
            <h2 className="text-3xl md:text-5xl font-black text-slate-900 tracking-tighter leading-[1.1]">
              Everything you need to <br />
              <span className="text-slate-400">know about our process.</span>
            </h2>
          </div>

          <div className="hidden lg:block pb-2">
            <p className="text-slate-500 font-medium text-sm text-right">
              Can't find the answer you're looking for?
            </p>
            <a href="/contact" className="group flex items-center justify-end gap-2 text-[#2776ea] font-bold text-sm mt-1">
              <span>Talk to our team</span>
              <span className="group-hover:translate-x-1 transition-transform">→</span>
            </a>
          </div>
        </div>

        {/* --- Unified Equal Grid --- */}
        <div className="grid md:grid-cols-2 gap-6 items-start">
          {FAQ_DATA.map((item, index) => {
            const isOpen = openItem === index;
            const displayNum = (index + 1).toString().padStart(2, "0");

            return (
              <div
                key={index}
                className={`group bg-white rounded-[2rem] border transition-all duration-300 overflow-hidden ${
                  isOpen
                    ? "border-[#2776ea] shadow-xl shadow-blue-900/5 ring-1 ring-[#2776ea]/10"
                    : "border-slate-100 hover:border-[#2776ea]/30 hover:shadow-lg hover:shadow-slate-100"
                }`}
              >
                <button
                  onClick={() => toggleItem(index)}
                  className="w-full text-left p-6 md:p-8 flex items-start gap-5 focus:outline-none"
                >
                  <span
                    className={`text-xs font-black tracking-widest pt-1.5 transition-colors duration-300 shrink-0 ${
                      isOpen ? "text-[#2776ea]" : "text-slate-300 group-hover:text-[#2776ea]/60"
                    }`}
                  >
                    {displayNum}
                  </span>
                  
                  <div className="flex-1">
                    <h3
                      className={`text-lg font-bold leading-tight transition-colors duration-300 pr-8 ${
                        isOpen ? "text-[#2776ea]" : "text-slate-800"
                      }`}
                    >
                      {item.question}
                    </h3>

                    <div
                      className={`grid transition-[grid-template-rows] duration-500 ease-in-out ${
                        isOpen ? "grid-rows-[1fr] opacity-100 mt-4" : "grid-rows-[0fr] opacity-0 mt-0"
                      }`}
                    >
                      <div className="overflow-hidden">
                        <p className="text-slate-500 font-medium leading-relaxed text-sm md:text-[15px]">
                          {item.answer}
                        </p>
                      </div>
                    </div>
                  </div>
                </button>
              </div>
            );
          })}
        </div>

        {/* --- Mobile Only Footer --- */}
        <div className="mt-12 lg:hidden text-center">
             <p className="text-slate-400 text-sm font-medium mb-3">Still have questions?</p>
             <a href="mailto:support@webronic.com" className="inline-flex items-center gap-2 text-[#2776ea] font-bold text-sm">
                <MessageCircle size={16} />
                Contact Support
             </a>
        </div>

      </div>
    </section>
  );
}