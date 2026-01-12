"use client";

import { useState } from "react";
import {
  Award,
  Network,
  Globe2,
  Layers,
  BrainCircuit,
  Cpu,
  Sparkles,
  ChevronDown,
  ChevronUp,
} from "lucide-react";

export default function ServiceOverview() {
  const [isExpanded, setIsExpanded] = useState(false);

  const differentiators = [
    {
      title: "AI-First Methodology",
      description: "Embedded across all solutions for maximum efficiency.",
      icon: BrainCircuit,
    },
    {
      title: "Global Scale",
      description: "100+ successful AI implementations across 50+ countries.",
      icon: Globe2,
    },
    {
      title: "Deep Expertise",
      description: "Cross-industry knowledge spanning 15+ complex sectors.",
      icon: Layers,
    },
    {
      title: "Strategic Partnerships",
      description: "Direct collaboration with OpenAI, Google Cloud, and NVIDIA.",
      icon: Network,
    },
    {
      title: "Proprietary Accelerators",
      description: "Pre-built AI frameworks that reduce time-to-market by 40%.",
      icon: Cpu,
    },
  ];

  return (
    <section className="relative bg-white py-20 font-sora overflow-hidden px-5 lg:px-25">
      {/* Background Decor - Subtle & Professional */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none opacity-40">
        <div className="absolute top-[-10%] left-[-5%] w-[500px] h-[500px] bg-[#2776ea]/5 rounded-full blur-[120px]" />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-start">
          {/* --- LEFT: NARRATIVE CONTENT --- */}
          <div>
            {/* <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-slate-50 border border-slate-200 shadow-sm mb-8">
              <Sparkles size={14} className="text-[#2776ea] fill-[#2776ea]" />
              <span className="text-[10px] font-black uppercase tracking-[0.25em] text-slate-500">
                Service Overview
              </span>
            </div> */}
            <div className="flex items-center  gap-4 mb-6">
              <Sparkles size={14} className="text-[#2776ea] fill-[#2776ea]" />

              <span className="text-[11px] font-black uppercase tracking-[0.3em] text-[#2776ea]">
                 Service Overview
              </span>
            </div>

            <h2 className="text-3xl md:text-5xl font-black text-slate-900 tracking-tighter leading-[1.1] mb-8">
              Driving Competitive <br /> Advantage in the <br />
              <span className="bg-gradient-to-r from-[#2776ea] to-[#76ea27] bg-clip-text text-transparent">
                Data-Driven Economy
              </span>
            </h2>

            <div className="space-y-6 text-justify text-slate-600 font-medium leading-loose text-base md:text-lg">
              <p>
                In today's data-driven economy, artificial intelligence and
                machine learning have evolved from emerging technologies into
                essential business capabilities that drive competitive
                advantage. Webronic Industries delivers enterprise grade AI and
                machine learning solutions that transform how organizations
                operate, make decisions, and serve customers.
              </p>
              <p>
                Our AI practice combines deep technical expertise in machine
                learning algorithms with extensive industry knowledge across
                manufacturing, retail, financial services, and healthcare. We
                understand that successful AI implementation requires more than
                just powerful models—it demands a strategic approach that aligns
                technology capabilities with business objectives.
              </p>

              {/* Conditional Rendering for Extra Content */}
              {isExpanded && (
                <div className="space-y-6 animate-in fade-in slide-in-from-top-4 duration-500">
                  <p>
                    Whether you’re taking your first steps into AI or scaling
                    existing initiatives, our team of data scientists, ML engineers,
                    and domain experts guides you through every stage of the
                    journey—from strategy and data preparation through model
                    development, deployment, and continuous optimization.
                  </p>
                  <p>
                    We work with leading AI platforms including OpenAI, Google AI,
                    Azure AI, and AWS AI services, while also developing custom
                    models tailored to your unique requirements. Our solutions are
                    production ready, scalable, and designed for long-term
                    maintainability.
                  </p>
                </div>
              )}

              {/* Read More / Less Button */}
              <button
                onClick={() => setIsExpanded(!isExpanded)}
                className="group flex items-center gap-2 text-sm font-bold text-[#2776ea] hover:text-[#76ea27] transition-colors mt-4 outline-none"
              >
                {isExpanded ? (
                  <>
                    Read Less <ChevronUp size={16} />
                  </>
                ) : (
                  <>
                    Read More <ChevronDown size={16} />
                  </>
                )}
              </button>
            </div>
          </div>

          {/* --- RIGHT: DIFFERENTIATORS CARD --- */}
          <div className="relative">
            <div className="relative bg-slate-900 rounded-[2.5rem] p-8 md:p-10 text-white overflow-hidden shadow-2xl shadow-slate-900/20">
              {/* Card Header */}
              <div className="flex items-center gap-4 mb-8 border-b border-white/10 pb-6">
                <div className="h-12 w-12 rounded-2xl bg-[#76ea27] flex items-center justify-center text-white shadow-lg shadow-green-900/20">
                  <Award size={24} strokeWidth={2} />
                </div>
                <div>
                  <h3 className="text-xl font-black tracking-wide">
                    Key Differentiators
                  </h3>
                  <p className="text-xs text-slate-400 font-medium uppercase tracking-wider">
                    Why Webronic AI?
                  </p>
                </div>
              </div>

              {/* List Items */}
              <div className="space-y-2">
                {differentiators.map((item, index) => (
                  <div
                    key={index}
                    className="group flex items-start gap-4 p-4 rounded-2xl hover:bg-white/5 transition-all duration-300 border border-transparent hover:border-white/5"
                  >
                    <div className="mt-1 h-8 w-8 rounded-lg bg-white/10 flex items-center justify-center text-[#2776ea] group-hover:bg-[#2776ea] group-hover:text-white transition-all duration-300 shrink-0 shadow-sm">
                      <item.icon size={16} />
                    </div>
                    <div>
                      <h4 className="text-sm font-bold text-white mb-1 group-hover:text-[#2776ea] transition-colors">
                        {item.title}
                      </h4>
                      <p className="text-xs font-medium text-slate-400 leading-relaxed group-hover:text-slate-300">
                        {item.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>

              {/* Tech Stack Strip (Visual Footer) */}
              <div className="mt-8 pt-6 border-t border-white/10 flex items-center justify-between opacity-50">
                <span className="text-[10px] font-bold uppercase tracking-widest">
                  Powering AI With
                </span>
                <div className="flex gap-3">
                  <div className="h-2 w-2 rounded-full bg-white/50" />
                  <div className="h-2 w-2 rounded-full bg-white/50" />
                  <div className="h-2 w-2 rounded-full bg-white/50" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}