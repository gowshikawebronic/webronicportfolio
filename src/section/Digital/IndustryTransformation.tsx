"use client";
import { INDUSTRY_TRANSFORMATION_DATA } from "@/data/Digital/INDUSTRY_TRANSFORMATION_DATA";
import { 
  CheckCircle2, 
  ArrowUpRight, 
  ArrowDownRight, 
  Minus,
  ImageIcon
} from "lucide-react";

export default function IndustryTransformation() {
  
  // Helper to render trend icons for stats
  const renderTrendIcon = (trend: string) => {
    switch (trend) {
      case 'up': return <ArrowUpRight size={14} className="text-[#76ea27]" />;
      case 'down': return <ArrowDownRight size={14} className="text-[#76ea27]" />; // Green because reduction in cost/downtime is good
      case 'faster': return <ArrowUpRight size={14} className="text-[#76ea27]" />;
      default: return <Minus size={14} className="text-slate-400" />;
    }
  };

  return (
    <section className="py-20 lg:py-32 bg-white font-sora">
      <div className="container mx-auto px-6 max-w-7xl">
        
        {/* Section Header */}
        <div className="text-center mb-16 max-w-3xl mx-auto">
          <span className="text-[#2776ea] font-black uppercase tracking-[0.2em] text-xs mb-4 block">
            Sector Expertise
          </span>
          <h2 className="text-3xl md:text-5xl font-black text-slate-900 tracking-tighter mb-6">
            Industry-Specific <span className="bg-gradient-to-r from-[#2776ea] to-[#76ea27] bg-clip-text text-transparent">Transformation</span>
          </h2>
          <p className="text-slate-500 text-lg">
            Tailored digital strategies that address the unique challenges and opportunities of your sector.
          </p>
        </div>

        {/* Grid Layout */}
        <div className="grid md:grid-cols-2 gap-8 lg:gap-10">
          
          {INDUSTRY_TRANSFORMATION_DATA.map((item, index) => {
            const Icon = item.icon;
            
            return (
              <div 
                key={item.id} 
                className="group relative bg-white rounded-3xl border border-slate-100 shadow-xl shadow-slate-200/50 overflow-hidden hover:-translate-y-2 transition-transform duration-500"
              >
                {/* Top Border Accent */}
                <div className="absolute top-0 left-0 w-full h-1.5 bg-gradient-to-r from-[#2776ea] to-[#76ea27]" />

                <div className="p-8 md:p-10">
                  
                  {/* Card Header */}
                  <div className="flex items-start justify-between mb-8">
                    <div>
                      <div className="flex items-center gap-3 mb-2">
                        <div className="p-2 bg-[#2776ea]/10 rounded-lg text-[#2776ea]">
                          <Icon size={24} />
                        </div>
                        <h3 className="text-2xl font-black text-slate-900">
                          {item.industry}
                        </h3>
                      </div>
                      <span className="text-sm font-bold text-[#2776ea] uppercase tracking-wider block ml-1">
                        {item.subtitle}
                      </span>
                    </div>
                  </div>

                  {/* Image Placeholder */}
                  <div className="mb-8 p-4 bg-slate-50 border border-dashed border-slate-200 rounded-xl flex items-center gap-4 group-hover:border-[#2776ea]/30 transition-colors">
                     <div className="bg-white p-2 rounded shadow-sm text-slate-400">
                        <ImageIcon size={20} />
                     </div>
                     <span className="text-xs font-mono text-slate-500 line-clamp-1">
                        {item.imageTag}
                     </span>
                  </div>

                  {/* Features List */}
                  <ul className="space-y-3 mb-10">
                    {item.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start gap-3 text-slate-600 text-[15px] font-medium">
                        <CheckCircle2 size={18} className="text-[#2776ea] mt-0.5 shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>

                  {/* Outcomes Grid */}
                  <div className="bg-slate-900 rounded-2xl p-6 relative overflow-hidden">
                    {/* Background Glow */}
                    <div className="absolute top-0 right-0 w-32 h-32 bg-[#2776ea]/20 rounded-full blur-3xl -mr-10 -mt-10 pointer-events-none" />
                    
                    <h4 className="text-white font-bold text-sm uppercase tracking-widest mb-4 opacity-80">
                      Key Outcomes
                    </h4>
                    
                    <div className="grid grid-cols-2 gap-y-6 gap-x-4">
                      {item.outcomes.map((outcome, idx) => (
                        <div key={idx}>
                          <div className="flex items-center gap-2 text-[#76ea27] font-black text-2xl md:text-3xl tracking-tight">
                            {outcome.value}
                            {renderTrendIcon(outcome.trend)}
                          </div>
                          <p className="text-slate-400 text-xs font-bold uppercase mt-1">
                            {outcome.label}
                          </p>
                        </div>
                      ))}
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