"use client";

import Link from "next/link";
import { ArrowRight, Zap, Heart, Coffee, Globe } from "lucide-react";

const perks = [
  {
    icon: Globe,
    title: "Remote First",
    desc: "Global flexibility and work-life balance.",
  },
  {
    icon: Zap,
    title: "Latest Tech",
    desc: "Work with modern stacks and high-end hardware.",
  },
  {
    icon: Heart,
    title: "Health First",
    desc: "Comprehensive insurance and wellness support.",
  },
  {
    icon: Coffee,
    title: "Great Culture",
    desc: "A zero-ego, collaborative engineering team.",
  },
];

export default function CareerSection() {
  return (
    <section
      id="career"
      className="relative py-20 lg:py-32 bg-white font-sora overflow-hidden px-5 lg:px-25"
    >
      <div className="absolute top-0 right-0 w-125 h-125 bg-[#4a7dc0]/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="relative container mx-auto px-6">
        <div className="max-w-4xl mx-auto text-center mb-16 lg:mb-24">
          <div className="flex items-center justify-center gap-4 mb-6">
            <span className="text-[11px] font-black uppercase tracking-[0.3em] text-[#4a7dc0]">
              Career
            </span>
          </div>

          <h2 className="text-3xl font-extrabold tracking-tight text-slate-900 sm:text-5xl lg:text-6xl leading-tight">
            Build the future of <br className="hidden sm:block" />
            <span className="bg-linear-to-r from-[#4a7dc0] to-[#63b344] bg-clip-text text-transparent">
              Digital Innovation
            </span>
          </h2>
          <p className="text-slate-500 text-lg md:text-xl font-medium max-w-2xl mx-auto leading-relaxed mb-10">
            We solve complex problems at scale. We’re looking for visionaries to
            help us architect high-performance digital solutions.
          </p>

          <Link
            href="/career"
            className="group inline-flex items-center gap-3 bg-[#4a7dc0] text-white px-10 py-5 rounded-2xl font-black uppercase tracking-widest text-xs hover:bg-[#63b344] transition-all shadow-2xl hover:shadow-blue-500/20 active:scale-95"
          >
            View All Openings
            <ArrowRight
              size={20}
              className="group-hover:translate-x-1 transition-transform"
            />
          </Link>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {perks.map((perk, i) => (
            <div
              key={i}
              className="group p-8 rounded-[2.5rem] bg-slate-50 border border-slate-100 transition-all duration-500 hover:bg-white hover:shadow-xl hover:shadow-slate-200/50 hover:-translate-y-2"
            >
              <div className="h-14 w-14 bg-white rounded-2xl flex items-center justify-center text-[#63b344] shadow-sm mb-6 group-hover:bg-[#63b344] group-hover:text-white transition-all duration-500">
                <perk.icon size={28} strokeWidth={2.5} />
              </div>
              <h3 className="text-lg font-black text-slate-900 mb-2">
                {perk.title}
              </h3>
              <p className="text-slate-500 text-sm font-medium leading-relaxed">
                {perk.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
