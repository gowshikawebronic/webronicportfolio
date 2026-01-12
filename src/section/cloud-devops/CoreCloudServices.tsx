"use client";

import { useState } from "react";
import { CORE_SERVICES_DATA } from "@/data/clouddevops/CORE_SERVICES_DATA";
import { CheckCircle2, ChevronRight, Layers } from "lucide-react";

export default function CoreCloudServices() {
  const { header, services } = CORE_SERVICES_DATA;
  const [activeTab, setActiveTab] = useState(0);

  const ActiveIcon = services[activeTab].icon;

  return (
    <section className="relative bg-white py-10 font-sora overflow-hidden">
      
      {/* Background Decor */}
      {/* <div className="absolute top-1/2 left-0 w-[500px] h-[500px] bg-[#2776ea]/5 rounded-full blur-[100px] -translate-y-1/2 -translate-x-1/2 pointer-events-none" /> */}

      <div className="container mx-auto px-6 max-w-7xl relative z-10">
        
        {/* --- SECTION HEADER --- */}
        <div className="max-w-3xl mb-16">
          <div className="flex items-center gap-4 mb-6">
            <Layers size={16} className="text-[#2776ea]" />
            <span className="text-[11px] font-black uppercase tracking-[0.3em] text-[#2776ea]">
              {header.badge}
            </span>
          </div>
          <h2 className="text-3xl md:text-5xl font-black text-slate-900 tracking-tighter leading-[1.1]">
            {header.title}{" "}
            <span className="bg-gradient-to-r from-[#2776ea] to-[#76ea27] bg-clip-text text-transparent">
              {header.titleHighlight}
            </span>
          </h2>
        </div>

        {/* --- MAIN CONTENT GRID --- */}
        <div className="grid lg:grid-cols-12 gap-8 lg:gap-12">
          
          {/* LEFT: NAVIGATION (4 Columns) */}
          <div className="lg:col-span-4 flex flex-col gap-3">
            {services.map((service, index) => {
              const Icon = service.icon;
              const isActive = activeTab === index;
              return (
                <button
                  key={service.id}
                  onClick={() => setActiveTab(index)}
                  className={`group relative flex items-center gap-4 p-5 text-left rounded-2xl transition-all duration-300 border ${
                    isActive
                      ? "bg-[#2776ea] border-[#2776ea] shadow-xl shadow-blue-900/20"
                      : "bg-slate-50 border-slate-100 hover:bg-white hover:shadow-lg hover:border-slate-200"
                  }`}
                >
                  <div
                    className={`h-10 w-10 rounded-xl flex items-center justify-center transition-colors ${
                      isActive
                        ? "bg-white text-[#2776ea]"
                        : "bg-white text-slate-400 group-hover:text-[#2776ea]"
                    }`}
                  >
                    <Icon size={20} />
                  </div>
                  <span
                    className={`text-sm font-bold tracking-wide ${
                      isActive ? "text-white" : "text-slate-600 group-hover:text-slate-900"
                    }`}
                  >
                    {service.title}
                  </span>
                  
                  {/* Arrow for active state */}
                  {isActive && (
                    <div className="absolute right-4 text-white animate-in fade-in slide-in-from-left-2">
                      <ChevronRight size={16} />
                    </div>
                  )}
                </button>
              );
            })}
          </div>

          {/* RIGHT: DYNAMIC CONTENT (8 Columns) */}
          <div className="lg:col-span-8">
            <div className=" rounded-3xl p-8 md:p-12 min-h-[600px] relative animate-in fade-in zoom-in-95 duration-500 key={activeTab}">
              
              {/* Content Header */}
              <div className="flex items-center gap-4 mb-8">
                <div className="h-14 w-14 rounded-2xl bg-[#76ea27]/10 flex items-center justify-center text-[#76ea27]">
                  <ActiveIcon size={28} />
                </div>
                <h3 className="text-2xl md:text-3xl font-bold text-slate-900">
                  {services[activeTab].title}
                </h3>
              </div>

              {/* Intro Text */}
              <p className="text-lg text-slate-600 leading-relaxed mb-10 font-medium text-justify">
                {services[activeTab].intro}
              </p>

              <div className="space-y-10">
                {/* Dynamic Content Blocks */}
                {services[activeTab].contentBlocks?.map((block: any, idx: number) => (
                  <div key={idx} className="group">
                    <h4 className="text-lg font-bold text-slate-900 mb-3 flex items-center gap-2">
                      <span className="h-1.5 w-1.5 rounded-full bg-[#2776ea]" />
                      {block.heading}
                    </h4>
                    
                    {/* Render standard text if exists */}
                    {block.text && (
                      <p className="text-slate-500 leading-relaxed text-sm md:text-base pl-4 border-l-2 border-slate-200 group-hover:border-[#2776ea] transition-colors">
                        {block.text}
                      </p>
                    )}

                    {/* Render Sub-Items (Groups/Phases) */}
                    {block.subItems && (
                      <div className="grid gap-4 mt-4 pl-2">
                        {block.subItems.map((sub: any, sIdx: number) => (
                          <div key={sIdx} className="bg-white p-4 rounded-xl border border-slate-100 shadow-sm">
                            <span className="block text-sm font-bold text-[#2776ea] mb-1">
                              {sub.title}
                            </span>
                            <span className="text-sm text-slate-500 leading-relaxed">
                              {sub.desc}
                            </span>
                          </div>
                        ))}
                      </div>
                    )}
                  </div>
                ))}

                {/* Primary List (e.g., Deliverables) */}
                {services[activeTab].listItems && (
                  <div className="bg-white p-6 rounded-2xl border border-slate-100 shadow-md">
                    <h4 className="text-sm font-black uppercase tracking-widest text-[#76ea27] mb-4">
                      {services[activeTab].listType}
                    </h4>
                    <ul className="grid sm:grid-cols-2 gap-3">
                      {services[activeTab].listItems?.map((item: string, i: number) => (
                        <li key={i} className="flex items-start gap-3">
                          <CheckCircle2 size={16} className="text-[#76ea27] shrink-0 mt-0.5" />
                          <span className="text-sm font-bold text-slate-700">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}

                {/* Secondary List (Optional - e.g. for Security section) */}
                {services[activeTab].secondaryListItems && (
                  <div className="bg-white p-6 rounded-2xl border border-slate-100 shadow-md mt-4">
                    <h4 className="text-sm font-black uppercase tracking-widest text-[#2776ea] mb-4">
                      {services[activeTab].secondaryListType}
                    </h4>
                    <ul className="grid sm:grid-cols-2 gap-3">
                      {services[activeTab].secondaryListItems?.map((item: string, i: number) => (
                        <li key={i} className="flex items-start gap-3">
                          <CheckCircle2 size={16} className="text-[#2776ea] shrink-0 mt-0.5" />
                          <span className="text-sm font-bold text-slate-700">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
}