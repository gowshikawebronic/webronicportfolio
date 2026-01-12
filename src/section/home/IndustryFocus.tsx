"use client";

import React from "react";
import {
  Factory,
  ShoppingBag,
  Landmark,
  HeartPulse,
  Zap,
  Radio,
  CheckCircle2,
  ArrowUpRight,
} from "lucide-react";

const INDUSTRIES = [
  {
    id: 1,
    title: "Manufacturing & Industrial",
    description:
      "Driving efficiency through Industry 4.0 automation and IoT integration.",
    features: [
      "Industry 4.0 transformation",
      "Smart factory solutions",
      "Predictive maintenance",
    ],
    icon: Factory,
    color: "#2776ea", // Blue
  },
  {
    id: 2,
    title: "Retail & E-commerce",
    description:
      "Creating seamless shopping experiences bridging digital and physical realms.",
    features: [
      "Omnichannel platforms",
      "AI-powered checkout",
      "Customer analytics",
    ],
    icon: ShoppingBag,
    color: "#76ea27", // Green
  },
  {
    id: 3,
    title: "Banking & Finance Services",
    description:
      "Secure, scalable fintech architectures for the modern financial ecosystem.",
    features: [
      "Digital banking portals",
      "Fintech development",
      "AI-driven fraud detection",
    ],
    icon: Landmark,
    color: "#2776ea",
  },
  {
    id: 4,
    title: "Healthcare & Life Sciences",
    description:
      "Innovating patient care with advanced telemedicine and data solutions.",
    features: [
      "Telemedicine platforms",
      "Medical imaging AI",
      "Healthcare IT solutions",
    ],
    icon: HeartPulse,
    color: "#76ea27",
  },
  {
    id: 5,
    title: "Energy & Utilities",
    description:
      "Optimizing resource management with smart grid technology and analytics.",
    features: ["Smart grid solutions", "Asset management", "Energy analytics"],
    icon: Zap,
    color: "#2776ea",
  },
  {
    id: 6,
    title: "Telecommunications",
    description:
      "Empowering connectivity through next-gen network optimization tools.",
    features: [
      "Network optimization",
      "5G integration",
      "customer experience platforms",
    ],
    icon: Radio,
    color: "#76ea27",
  },
];

export default function IndustryFocus() {
  return (
    <section className=" py-20  font-sora relative overflow-hidden px-5 lg:px-25">
      {/* Background Decor */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none opacity-30">
        <div className="absolute top-[-10%] left-[-10%] w-[500px] h-[500px] bg-[#2776ea]/5 rounded-full blur-[100px]" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[500px] h-[500px] bg-[#76ea27]/5 rounded-full blur-[100px]" />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        {/* --- SECTION HEADER --- */}
        <div className="text-center max-w-3xl mx-auto mb-16 md:mb-24">
          <div className="flex items-center justify-center gap-4 mb-6">
            <span className="text-[11px] font-black uppercase tracking-[0.3em] text-[#2776ea]">
              Industry Focus
            </span>
          </div>

          <h2 className="text-3xl md:text-5xl lg:text-6xl font-black text-slate-900 tracking-tighter leading-tight mb-6">
            Specialized Solutions for <br />
            <span className="bg-gradient-to-r from-[#2776ea] to-[#76ea27] bg-clip-text text-transparent">
              Diverse Sectors
            </span>
          </h2>

          <p className="text-sm md:text-base text-slate-500 font-medium leading-relaxed">
            Webronic Industries serves organizations across diverse sectors,
            delivering specialized solutions that address industry-specific
            challenges
          </p>
        </div>

        {/* --- INDUSTRY GRID --- */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {INDUSTRIES.map((industry, index) => (
            <div
              key={industry.id}
              className="group relative bg-white rounded-[2.5rem] p-8 border border-slate-100 hover:border-[#2776ea]/30 hover:shadow-2xl hover:shadow-blue-900/5 transition-all duration-500 flex flex-col h-full"
            >
              {/* Icon Header */}
              <div className="flex items-start justify-between mb-6">
                <div
                  className="h-14 w-14 rounded-2xl flex items-center justify-center text-white shadow-lg transition-transform duration-500 group-hover:scale-110 group-hover:rotate-3"
                  style={{ backgroundColor: industry.color }}
                >
                  <industry.icon size={26} />
                </div>
                <ArrowUpRight
                  size={20}
                  className="text-slate-300 group-hover:text-[#2776ea] group-hover:translate-x-1 group-hover:-translate-y-1 transition-all duration-300"
                />
              </div>

              {/* Text Content */}
              <h3 className="text-xl font-black text-slate-900 mb-3 group-hover:text-[#2776ea] transition-colors">
                {industry.title}
              </h3>
              <p className="text-xs text-slate-500 font-medium leading-relaxed mb-8 min-h-[40px]">
                {industry.description}
              </p>

              {/* Feature List */}
              <div className="mt-auto space-y-3 pt-6 border-t border-slate-50">
                {industry.features.map((feature, i) => (
                  <div key={i} className="flex items-start gap-3">
                    <CheckCircle2
                      size={14}
                      className="shrink-0 mt-0.5"
                      style={{ color: industry.color }}
                    />
                    <span className="text-xs font-bold text-slate-600 uppercase tracking-wide">
                      {feature}
                    </span>
                  </div>
                ))}
              </div>

              {/* Hover Decor */}
              <div className="absolute inset-0 rounded-[2.5rem] border-2 border-transparent group-hover:border-[#2776ea]/10 pointer-events-none transition-colors duration-500" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
