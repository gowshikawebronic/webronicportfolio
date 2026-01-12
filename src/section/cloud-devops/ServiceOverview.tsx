"use client";

import { useState } from "react";
import { SERVICE_OVERVIEW_DATA } from "@/data/clouddevops/SERVICE_OVERVIEW_DATA";
import { 
  Award, 
  CheckCircle2, 
  Layers,
  ShieldCheck,
  ChevronDown,
  ChevronUp
} from "lucide-react";

export default function ServiceOverview() {
  const { badge, title, titleHighlight, content, partnerships } = SERVICE_OVERVIEW_DATA;
  
  // State to manage text expansion
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <section className="relative  py-10 lg:py-32 font-sora overflow-hidden">
      
      {/* --- BACKGROUND DECOR (Webronic Pattern) --- */}
      {/* <div className="absolute inset-0 pointer-events-none">
        <div className="absolute inset-0 bg-[radial-gradient(#2776ea_1px,transparent_1px)] [background-size:32px_32px] opacity-[0.04]" />
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-[#2776ea]/5 rounded-full blur-[100px] translate-x-1/2 -translate-y-1/2" />
      </div> */}

      <div className="container mx-auto px-6 max-w-7xl relative z-10">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-20 items-start">
          
          {/* --- LEFT COLUMN: NARRATIVE (7 Columns) --- */}
          <div className="lg:col-span-7">
            
            {/* Badge */}
            <div className="flex items-center gap-4 mb-6">
              <Layers size={16} className="text-[#2776ea]" />
              <span className="text-[11px] font-black uppercase tracking-[0.3em] text-[#2776ea]">
                 {badge}
              </span>
            </div>

            {/* Headline */}
            <h2 className="text-3xl md:text-5xl font-black text-slate-900 tracking-tighter leading-[1.1] mb-8">
               {title}{" "}
              <span className="bg-gradient-to-r from-[#2776ea] to-[#76ea27] bg-clip-text text-transparent">
                {titleHighlight}
              </span>
            </h2>

            {/* Content Paragraphs Wrapper */}
            <div className="relative space-y-6 text-slate-600 text-justify leading-relaxed text-lg font-medium">
              
              {/* Always visible paragraphs (First 2) */}
              {content.slice(0, 2).map((paragraph, index) => (
                <p 
                  key={`static-${index}`} 
                  className="border-l-2 border-slate-100 pl-4 hover:border-[#2776ea] transition-colors duration-300"
                >
                  {paragraph}
                </p>
              ))}

              {/* Conditionally visible paragraphs (Rest) */}
              {isExpanded && content.slice(2).map((paragraph, index) => (
                <p 
                  key={`dynamic-${index}`} 
                  className="border-l-2 border-slate-100 pl-4 hover:border-[#2776ea] transition-colors duration-300 animate-in fade-in slide-in-from-top-4 duration-500"
                >
                  {paragraph}
                </p>
              ))}

              {/* Gradient Fade Overlay (Visible only when collapsed) */}
              {!isExpanded && (
                <div className="absolute bottom-0 left-0 w-full h-24 bg-gradient-to-t from-slate-50 to-transparent pointer-events-none" />
              )}
            </div>

            {/* Read More / Read Less Button */}
            <button 
              onClick={() => setIsExpanded(!isExpanded)}
              className="mt-8 inline-flex items-center gap-2 text-sm font-black uppercase tracking-widest text-[#2776ea] hover:text-[#3a6db0] transition-colors group"
            >
              {isExpanded ? "Read Less" : "Read More"}
              {isExpanded ? (
                <ChevronUp size={16} className="group-hover:-translate-y-1 transition-transform" />
              ) : (
                <ChevronDown size={16} className="group-hover:translate-y-1 transition-transform" />
              )}
            </button>
          </div>

          {/* --- RIGHT COLUMN: PARTNERSHIPS CARD (5 Columns) --- */}
          <div className="lg:col-span-5 relative mt-4 lg:mt-8">
            <div className="relative bg-white p-8 md:p-10 rounded-3xl shadow-2xl shadow-slate-200/60 border border-slate-100 overflow-hidden group hover:-translate-y-2 transition-transform duration-500 ease-out">
              
              {/* Card Background Decor */}
              <div className="absolute top-0 right-0 p-6 opacity-[0.08] group-hover:opacity-10 transition-opacity duration-500 transform group-hover:scale-110">
                <Award size={120} className="text-[#2776ea]" />
              </div>
              
              <div className="relative z-10">
                <h3 className="text-xl font-bold text-slate-900 mb-6 flex items-center gap-3">
                  <div className="h-10 w-10 rounded-xl bg-[#2776ea]/10 flex items-center justify-center text-[#2776ea]">
                    <ShieldCheck size={20} />
                  </div>
                  Strategic Partnerships
                </h3>
                
                <p className="text-slate-500 mb-8 leading-relaxed font-medium">
                  {partnerships.intro}
                </p>

                {/* Partnership List */}
                <ul className="space-y-4 mb-8">
                  {partnerships.list.map((partner, idx) => (
                    <li key={idx} className="flex items-start gap-3 bg-slate-50 p-4 rounded-xl border border-slate-100 group-hover:border-[#76ea27]/30 hover:shadow-sm transition-all duration-300">
                      <div className="mt-0.5 h-5 w-5 rounded-full bg-[#76ea27] flex items-center justify-center text-white shrink-0 shadow-md shadow-green-900/20 group-hover:scale-110 transition-transform">
                        <CheckCircle2 size={12} strokeWidth={3} />
                      </div>
                      <span className="text-sm font-bold text-slate-800">
                        {partner}
                      </span>
                    </li>
                  ))}
                </ul>

                <div className="bg-gradient-to-r from-[#2776ea]/5 to-transparent p-5 rounded-xl border border-[#2776ea]/10">
                   <p className="text-sm text-[#2776ea] font-bold leading-relaxed">
                    {partnerships.outro}
                  </p>
                </div>
              </div>
            </div>

            {/* Floating Blur Effect behind card */}
            <div className="absolute -z-10 top-10 -right-10 w-full h-full bg-[#76ea27]/10 rounded-3xl blur-3xl animate-pulse" />
          </div>

        </div>
      </div>
    </section>
  );
}