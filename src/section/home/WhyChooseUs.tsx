"use client";

import React from "react";
import { Brain, Globe, Trophy, Infinity, Sparkles } from "lucide-react";

const FEATURES = [
  {
    id: 1,
    title: "AI-First Innovation",
    description:
      "Unlike traditional IT companies, we embed artificial intelligence and machine learning across all our services, ensuring your solutions are future-ready and intelligent from day one.",
    icon: Brain,
    color: "#2776ea", // Blue
  },
  {
    id: 2,
    title: "Global-Local Advantage",
    description:
      "With operations in India and Europe (through Thingsatweb Sweden AB), we combine Indian innovation excellence with European quality standards, delivering world-class solutions.",
    icon: Globe,
    color: "#76ea27", // Green
  },
  {
    id: 3,
    title: "Proven Track Record",
    description:
      "Over 15 years of delivering successful projects across 50+ countries, serving clients from startups to Fortune 500 enterprises with consistent 99.9% satisfaction ratings.",
    icon: Trophy,
    color: "#2776ea",
  },
  {
    id: 4,
    title: "End-to-End Solutions",
    description:
      "From initial strategy and consulting through development, deployment, and ongoing support, we provide comprehensive technology services that evolve with your business needs.",
    icon: Infinity,
    color: "#76ea27",
  },
];

export default function WhyChooseUs() {
  return (
    <section className="bg-white py-20 md:py-28 font-sora relative overflow-hidden px-5 lg:px-25">
      {/* Background Decor - Subtle Gradients */}
      <div className="absolute inset-0 pointer-events-none opacity-40">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[800px] bg-[radial-gradient(circle,rgba(74,125,192,0.05)_0%,transparent_70%)]" />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        {/* --- HEADER --- */}
        <div className="text-center max-w-3xl mx-auto mb-16 md:mb-24">
          <div className="flex items-center justify-center gap-4 mb-6">
            <span className="text-[11px] font-black uppercase tracking-[0.3em] text-[#2776ea]">
              Why Choose Webronic
            </span>
          </div>

          <h2 className="text-3xl md:text-5xl lg:text-6xl font-black text-slate-900 tracking-tighter leading-tight mb-6">
            Why Partner With <br />
            <span className="bg-gradient-to-r from-[#2776ea] to-[#76ea27] bg-clip-text text-transparent">
              Webronic Industries?
            </span>
          </h2>

          <p className="text-sm md:text-base text-slate-500 font-medium leading-relaxed">
            We bridge the gap between complex technology and tangible business
            results through a unique blend of global expertise and AI-driven
            innovation.
          </p>
        </div>

        {/* --- FEATURES GRID --- */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10">
          {FEATURES.map((feature, index) => (
            <div
              key={feature.id}
              className="group relative p-8 md:p-10 rounded-[2.5rem] bg-slate-50 border border-slate-100 hover:bg-white hover:shadow-2xl hover:shadow-blue-900/10 hover:-translate-y-1 transition-all duration-500 overflow-hidden"
            >
              <div className="relative z-10 flex flex-col md:flex-row gap-6 md:gap-8 items-start">
                {/* Icon Box */}
                <div
                  className="shrink-0 h-16 w-16 rounded-2xl flex items-center justify-center text-white shadow-lg transition-transform duration-500 group-hover:scale-110 group-hover:rotate-6"
                  style={{ backgroundColor: feature.color }}
                >
                  <feature.icon size={32} strokeWidth={1.5} />
                </div>

                {/* Content */}
                <div className="flex-1">
                  <h3 className="text-xl md:text-2xl font-black text-slate-900 mb-4 tracking-tight group-hover:text-[#2776ea] transition-colors">
                    {feature.title}
                  </h3>
                  <p className="text-sm font-medium text-slate-500 leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              </div>

              {/* Decorative Background Blob on Hover */}
              <div
                className="absolute -right-10 -top-10 w-40 h-40 rounded-full blur-[60px] opacity-0 group-hover:opacity-20 transition-opacity duration-500 pointer-events-none"
                style={{ backgroundColor: feature.color }}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
