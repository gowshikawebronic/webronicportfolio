"use client";

import { useState } from "react";

import { 
  CheckCircle2, 
  ChevronRight, 
  ImageIcon
} from "lucide-react";
import { ContentBlock, CORE_SERVICES_DATA } from "@/data/Digital/CORE_SERVICES_DATA";

export default function CoreServices() {
  const [activeTab, setActiveTab] = useState(0);

  // Helper to render the complex nested content structure
  const renderContent = (block: ContentBlock, index: number) => {
    switch (block.type) {
      case 'heading':
        return (
          <h3 key={index} className="text-2xl font-bold text-slate-900 mt-8 mb-4 border-b pb-2 border-slate-100">
            {block.text}
          </h3>
        );
      case 'subheading':
        return (
          <h4 key={index} className="text-lg font-bold text-[#2776ea] mt-6 mb-3">
            {block.text}
          </h4>
        );
      case 'paragraph':
        return (
          <p key={index} className="text-slate-600 mb-4 leading-relaxed">
            {block.text}
          </p>
        );
      case 'list':
        return (
          <div key={index} className="mb-6 bg-slate-50 p-5 rounded-xl border border-slate-100">
            {block.title && (
              <h5 className="font-bold text-slate-800 mb-3 flex items-center gap-2">
                 {block.title}
              </h5>
            )}
            <ul className="space-y-3">
              {block.items.map((item, idx) => (
                <li key={idx} className="flex items-start gap-3">
                  <CheckCircle2 size={16} className="text-[#76ea27] mt-1 shrink-0" />
                  <span className="text-slate-600 text-sm md:text-[15px]">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        );
      case 'image_tag':
        return (
          <div key={index} className="my-8 p-6 bg-slate-50 border-2 border-dashed border-slate-200 rounded-xl flex flex-col items-center justify-center text-center group hover:border-[#2776ea]/50 transition-colors">
            <div className="h-12 w-12 bg-white rounded-full shadow-sm flex items-center justify-center text-slate-400 group-hover:text-[#2776ea] group-hover:scale-110 transition-all mb-3">
                <ImageIcon size={24} />
            </div>
            <p className="font-mono text-xs text-slate-500 bg-white px-2 py-1 rounded border border-slate-100">
                {block.text}
            </p>
            <span className="text-xs text-slate-400 mt-2">Diagram Placeholder</span>
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <section className="py-20 lg:py-32 bg-white font-sora">
      <div className="container mx-auto px-6 max-w-7xl">
        
        {/* Section Header */}
        <div className="text-center mb-16 max-w-3xl mx-auto">
          <span className="text-[#2776ea] font-black uppercase tracking-[0.2em] text-xs mb-4 block">
            Our Expertise
          </span>
          <h2 className="text-4xl md:text-5xl font-black text-slate-900 tracking-tighter mb-6">
            Core <span className="bg-gradient-to-r from-[#2776ea] to-[#76ea27] bg-clip-text text-transparent">Services</span>
          </h2>
          <p className="text-slate-500 text-lg">
            Comprehensive digital solutions designed to transform your business from strategy to execution.
          </p>
        </div>

        <div className="grid lg:grid-cols-12 gap-8 lg:gap-12 min-h-[600px]">
          
          {/* --- LEFT COLUMN: NAVIGATION --- */}
          <div className="lg:col-span-4 flex flex-col gap-2">
            {CORE_SERVICES_DATA.map((service, index) => {
              const isActive = activeTab === index;
              const Icon = service.icon;
              
              return (
                <button
                  key={service.id}
                  onClick={() => setActiveTab(index)}
                  className={`group flex items-center justify-between p-5 rounded-xl text-left transition-all duration-300 border ${
                    isActive 
                      ? "bg-[#2776ea] text-white border-[#2776ea] shadow-xl shadow-blue-900/20" 
                      : "bg-white text-slate-600 border-slate-100 hover:border-[#2776ea]/30 hover:bg-slate-50"
                  }`}
                >
                  <div className="flex items-center gap-4">
                    <div className={`p-2 rounded-lg ${isActive ? "bg-white/20" : "bg-slate-100 text-slate-400 group-hover:text-[#2776ea] group-hover:bg-[#2776ea]/10"} transition-colors`}>
                      <Icon size={20} />
                    </div>
                    <span className={`font-bold ${isActive ? "text-white" : "text-slate-700"}`}>
                      {service.title}
                    </span>
                  </div>
                  
                  {isActive && <ChevronRight size={18} className="animate-in slide-in-from-left-2" />}
                </button>
              );
            })}
          </div>

          {/* --- RIGHT COLUMN: CONTENT DISPLAY --- */}
          <div className="lg:col-span-8">
            <div className="relative bg-white rounded-3xl border border-slate-100 shadow-2xl shadow-slate-200/50 p-8 md:p-12 overflow-hidden h-full">
              
              {/* Background Decoration */}
              <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-bl from-[#2776ea]/5 to-transparent rounded-bl-full -mr-10 -mt-10 pointer-events-none" />
              
              {/* Animated Content Switcher */}
              <div className="relative z-10 animate-in fade-in slide-in-from-bottom-4 duration-500 key={activeTab}">
                
                {/* Header of Active Tab */}
                <div className="flex items-center gap-4 mb-8">
                  <div className="p-3 bg-[#2776ea]/10 rounded-xl text-[#2776ea]">
                    {(() => {
                        const Icon = CORE_SERVICES_DATA[activeTab].icon;
                        return <Icon size={32} />;
                    })()}
                  </div>
                  <h2 className="text-3xl font-black text-slate-900 tracking-tight">
                    {CORE_SERVICES_DATA[activeTab].title}
                  </h2>
                </div>

                {/* Render the Dynamic Content Blocks */}
                {/* <div className="prose prose-slate max-w-none prose-headings:font-bold prose-a:text-[#2776ea]">
                  {CORE_SERVICES_DATA[activeTab].content.map((block, index) => 
                    renderContent(block, index)
                  )}
                </div> */}

              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}