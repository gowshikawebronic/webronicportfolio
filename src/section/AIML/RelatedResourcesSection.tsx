"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { RELATED_RESOURCES_DATA } from "@/data/AIML/RELATED_RESOURCES_DATA";
// Adjust the import path based on where you saved the data file

export default function RelatedResourcesSection() {
  const { services, resourceColumns } = RELATED_RESOURCES_DATA;

  return (
    <section className="bg-[#fafbfc] py-24 border-t border-slate-100 font-sora">
      <div className="container mx-auto px-6 max-w-7xl">
        
        {/* --- PART 1: RELATED SERVICES --- */}
        <div className="mb-20">
          <div className="flex items-center gap-3 mb-10">
            <span className="h-px w-8 bg-[#2776ea]" />
            <span className="text-[10px] font-black uppercase tracking-[0.25em] text-[#2776ea]">
              Related Services
            </span>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
            {services.map((service, index) => (
              <Link
                key={index}
                href={service.href}
                className="group flex flex-col items-center text-center p-6 bg-white rounded-3xl border border-slate-100 shadow-sm hover:shadow-xl hover:shadow-slate-200/50 hover:border-[#2776ea]/20 transition-all duration-300 hover:-translate-y-1"
              >
                <div
                  className={`h-14 w-14 rounded-2xl ${service.bg} flex items-center justify-center ${service.color} mb-5 group-hover:scale-110 transition-transform duration-300`}
                >
                  <service.icon size={24} strokeWidth={1.5} />
                </div>
                <h4 className="text-sm font-bold text-slate-700 leading-tight group-hover:text-[#2776ea] transition-colors">
                  {service.title}
                </h4>
              </Link>
            ))}
          </div>
        </div>

        {/* --- PART 2: RESOURCE LIBRARY --- */}
        <div className="grid lg:grid-cols-3 gap-10 lg:gap-16">
          {resourceColumns.map((col, idx) => (
            <div key={idx} className="flex flex-col">
              <div className="flex items-center gap-3 mb-8 pb-4 border-b border-slate-200/60">
                <col.icon className="text-[#76ea27]" size={20} />
                <h3 className="text-lg font-black text-slate-900 tracking-tight">
                  {col.title}
                </h3>
              </div>

              <ul className="space-y-4">
                {col.items.map((item, i) => (
                  <li key={i}>
                    <Link
                      href={item.href}
                      className="group flex items-start justify-between gap-4 p-4 rounded-2xl bg-white border border-slate-100 hover:border-[#2776ea]/30 hover:shadow-md hover:shadow-blue-500/5 transition-all duration-300"
                    >
                      <span className="text-sm font-medium text-slate-600 group-hover:text-[#2776ea] transition-colors line-clamp-2">
                        {item.label}
                      </span>
                      <ArrowRight 
                        size={16} 
                        className="shrink-0 text-slate-300 group-hover:text-[#2776ea] group-hover:translate-x-1 transition-all mt-0.5" 
                      />
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}