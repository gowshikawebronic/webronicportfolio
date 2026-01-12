"use client";

import Link from "next/link";
import { RELATED_SERVICES_DATA } from "@/data/clouddevops/RELATED_SERVICES_DATA";
import { ArrowRight, LayoutGrid } from "lucide-react";

export default function RelatedServices() {
  const { header, services } = RELATED_SERVICES_DATA;

  return (
    <section className="relative  py-10 font-sora overflow-hidden">
      
      {/* --- BACKGROUND DECOR --- */}
      {/* <div className="absolute inset-0 pointer-events-none">
        <div className="absolute inset-0 bg-[radial-gradient(#2776ea_1px,transparent_1px)] [background-size:32px_32px] opacity-[0.03]" />
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-[#2776ea]/5 rounded-full blur-[100px] translate-x-1/2 -translate-y-1/2" />
      </div> */}

      <div className="container mx-auto px-6 max-w-7xl relative z-10">
        
        {/* --- HEADER --- */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div className="max-w-2xl">
            {/* <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-200/50 border border-slate-300 mb-4">
              <LayoutGrid size={14} className="text-slate-600" />
              <span className="text-[10px] font-black uppercase tracking-[0.25em] text-slate-600">
                {header.badge}
              </span>
            </div> */}
            <div className="flex items-center  gap-4 mb-6">
              <LayoutGrid size={14} className="text-slate-600" />
            <span className="text-[11px] font-black uppercase tracking-[0.3em] text-[#2776ea]">
              {header.badge}
            </span>
          </div>
            <h2 className="text-3xl md:text-4xl font-black text-slate-900 tracking-tighter">
              {header.title}{" "}
              <span className="bg-gradient-to-r from-[#2776ea] to-[#76ea27] bg-clip-text text-transparent">
                {header.titleHighlight}
              </span>
            </h2>
          </div>
          
          <Link 
            href="/services" 
            className="hidden md:inline-flex items-center gap-2 text-sm font-black uppercase tracking-widest text-[#2776ea] hover:text-[#3a6db0] transition-colors group"
          >
            View All Services 
            <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>

        {/* --- SERVICE GRID --- */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <Link 
                key={index} 
                href={service.link}
                className="group relative bg-white p-8 rounded-3xl border border-slate-200 shadow-sm hover:shadow-2xl hover:shadow-blue-900/10 hover:border-[#2776ea]/30 transition-all duration-300 hover:-translate-y-2 flex flex-col h-full overflow-hidden"
              >
                {/* Hover Gradient Overlay */}
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-[#2776ea] to-[#76ea27] opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                {/* Icon Box */}
                <div className="h-14 w-14 rounded-2xl bg-slate-50 flex items-center justify-center text-slate-400 mb-6 group-hover:bg-gradient-to-br group-hover:from-[#2776ea] group-hover:to-[#76ea27] group-hover:text-white transition-all duration-300 shadow-sm group-hover:shadow-md">
                  <Icon size={28} strokeWidth={1.5} />
                </div>
                
                <h3 className="text-lg font-bold text-slate-900 mb-3 group-hover:text-[#2776ea] transition-colors">
                  {service.title}
                </h3>
                
                <p className="text-sm text-slate-500 font-medium leading-relaxed mb-8 flex-1">
                  {service.description}
                </p>

                <div className="mt-auto flex items-center gap-2 text-xs font-black uppercase tracking-widest text-slate-400 group-hover:text-[#2776ea] transition-colors">
                  Learn More 
                  <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
                </div>
              </Link>
            );
          })}
        </div>

        {/* Mobile View All Link (Visible only on small screens) */}
        <div className="mt-12 text-center md:hidden">
          <Link 
            href="/services" 
            className="inline-flex items-center gap-2 text-sm font-black uppercase tracking-widest text-[#2776ea] hover:text-[#3a6db0]"
          >
            View All Services <ArrowRight size={16} />
          </Link>
        </div>

      </div>
    </section>
  );
}