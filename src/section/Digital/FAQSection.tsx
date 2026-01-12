"use client";

import { useState } from "react";
import { 
  Plus, 
  Minus, 
  HelpCircle, 
  CheckCircle2,
  ImageIcon
} from "lucide-react";
import { FAQ_DATA } from "@/data/Digital/FAQ_DATA.tsx";
export default function FAQSection() {
  const [openId, setOpenId] = useState<string | null>("q2");

  const toggleFAQ = (id: string) => {
    setOpenId(openId === id ? null : id);
  };

  return (
    <section className="py-16 lg:py-32 bg-slate-50 font-sora">
      <div className="container mx-auto px-4 md:px-6 max-w-7xl">
        
        {/* Header */}
        <div className="text-center mb-12 md:mb-16 max-w-3xl mx-auto">
          <span className="text-[#2776ea] font-black uppercase tracking-[0.2em] text-xs mb-3 block">
            Common Questions
          </span>
          <h2 className="text-3xl md:text-5xl font-black text-slate-900 tracking-tighter mb-6 leading-tight">
            Frequently Asked <span className="text-[#2776ea]">Questions</span>
          </h2>
          <p className="text-slate-500 text-base md:text-lg leading-relaxed">
            Everything you need to know about our transformation process, costs, and methodology.
          </p>
        </div>

        {/* Responsive Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-start">
          {FAQ_DATA.map((item) => {
            const isOpen = openId === item.id;

            return (
              <div 
                key={item.id} 
                className={`group bg-white rounded-2xl border transition-all duration-300 ease-out overflow-hidden ${
                  isOpen 
                    ? "border-[#2776ea] shadow-xl shadow-blue-900/10 ring-1 ring-[#2776ea]/10" 
                    : "border-slate-200 hover:border-[#2776ea]/40 hover:shadow-md"
                }`}
              >
                {/* Clickable Question Header */}
                <button
                  onClick={() => toggleFAQ(item.id)}
                  className="w-full flex items-start justify-between p-5 md:p-6 text-left gap-4"
                  aria-expanded={isOpen}
                >
                  <div className="flex items-start gap-4">
                    {/* Icon Box */}
                    <div className={`mt-1 p-2 rounded-lg transition-colors shrink-0 duration-300 ${
                      isOpen ? "bg-[#2776ea] text-white" : "bg-slate-100 text-slate-400 group-hover:text-[#2776ea] group-hover:bg-[#2776ea]/10"
                    }`}>
                      <HelpCircle size={20} />
                    </div>
                    
                    {/* Question Text */}
                    <span className={`font-bold text-base md:text-lg leading-snug transition-colors duration-300 ${
                      isOpen ? "text-[#2776ea]" : "text-slate-800"
                    }`}>
                      {item.question}
                    </span>
                  </div>
                  
                  {/* Toggle Icon */}
                  <div className={`mt-1 p-1 rounded-full border shrink-0 transition-all duration-300 ${
                    isOpen 
                      ? "bg-[#2776ea] border-[#2776ea] text-white rotate-180" 
                      : "bg-white border-slate-200 text-slate-400 group-hover:border-[#2776ea] group-hover:text-[#2776ea]"
                  }`}>
                    {isOpen ? <Minus size={16} /> : <Plus size={16} />}
                  </div>
                </button>

                {/* Collapsible Answer Content */}
                <div 
                  className={`grid transition-[grid-template-rows] duration-500 ease-in-out ${
                    isOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
                  }`}
                >
                  <div className="overflow-hidden">
                    {/* Padding logic: Less padding on mobile (pl-4) to save space, aligned with icon on desktop (pl-[76px]) */}
                    <div className="p-5 md:p-6 pt-0 pl-4 md:pl-[76px] pr-5 md:pr-8 text-slate-600 leading-relaxed text-sm md:text-base">
                      
                      <p className="mb-4">{item.answer.text}</p>
                      
                      {item.answer.list && (
                        <ul className="space-y-3 mb-5">
                          {item.answer.list.map((li, idx) => (
                            <li key={idx} className="flex items-start gap-3 text-sm font-medium text-slate-700 bg-slate-50 p-3 rounded-lg border border-slate-100 hover:border-slate-200 transition-colors">
                              <CheckCircle2 size={16} className="text-[#76ea27] mt-0.5 shrink-0" />
                              <span className="leading-snug">{li}</span>
                            </li>
                          ))}
                        </ul>
                      )}

                      {item.imageTag && (
                        <div className="my-5 p-3 md:p-4 border border-dashed border-blue-200 bg-blue-50/30 rounded-xl flex items-start md:items-center gap-3">
                           <ImageIcon size={18} className="text-[#2776ea] shrink-0 mt-1 md:mt-0" />
                           <span className="text-xs font-mono text-[#2776ea] font-medium break-words w-full">
                             {item.imageTag}
                           </span>
                        </div>
                      )}

                      {item.answer.outro && (
                        <div className="mt-4 pl-4 border-l-4 border-[#2776ea]">
                          <p className="font-bold text-slate-800 text-sm">
                            {item.answer.outro}
                          </p>
                        </div>
                      )}

                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}