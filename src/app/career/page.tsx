"use client";

import Link from "next/link";
import { Briefcase, MapPin, Clock, ArrowRight, ChevronLeft, Sparkles } from "lucide-react";
import { openPositions } from "./data";

export default function CareerPage() {
  return (
    <main className="bg-[#fafbfc] min-h-screen pt-24 pb-20 font-sora relative overflow-hidden">
      {/* Soft Background Accents */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[400px] bg-gradient-to-b from-[#4888e8]/5 to-transparent pointer-events-none" />
      
      <div className="container mx-auto px-6 max-w-5xl relative z-10">
        
        {/* Minimalist Breadcrumb */}
        <Link 
          href="/" 
          className="inline-flex items-center gap-2 text-slate-400 hover:text-[#4888e8] font-bold text-[10px] uppercase tracking-[0.2em] mb-12 transition-all group"
        >
          <div className="flex h-7 w-7 items-center justify-center rounded-full bg-white border border-slate-100 shadow-sm group-hover:border-[#4888e8]/30 group-hover:bg-blue-50 transition-all">
            <ChevronLeft size={14} className="group-hover:-translate-x-0.5 transition-transform" /> 
          </div>
          Return Home
        </Link>

        {/* Professional Header Section */}
        <div className="mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white border border-slate-100 shadow-sm mb-5">
            <Sparkles size={12} className="text-[#09b125]" />
            <span className="text-[9px] font-black uppercase tracking-[0.1em] text-slate-500">Join the Collective</span>
          </div>
          <h1 className="text-4xl md:text-6xl font-black text-slate-900 tracking-tighter mb-6 leading-[1.1]">
            Help us build the <br />
            <span className="text-[#4888e8]">Next Generation.</span>
          </h1>
          <p className="text-slate-500 text-base md:text-lg max-w-xl font-medium leading-relaxed opacity-70">
            We are looking for specialized talent to help us bridge the gap between 
            complex data and intuitive human experiences.
          </p>
        </div>

        {/* Refined Job List */}
        <div className="grid gap-4">
          {openPositions.map((job) => (
            <Link 
              href={`/career/${job.id}`} 
              key={job.id} 
              className="group relative flex flex-col md:flex-row md:items-center justify-between p-6 md:p-8 rounded-[2rem] border border-slate-100 bg-white hover:bg-slate-50/50 hover:border-[#4888e8]/20 transition-all duration-300"
            >
              <div className="flex flex-col gap-3">
                <h3 className="text-xl md:text-2xl font-extrabold text-slate-800 group-hover:text-[#4888e8] transition-colors tracking-tight">
                  {job.title}
                </h3>
                
                <div className="flex flex-wrap gap-2">
                  <div className="flex items-center gap-1.5 px-3 py-1 rounded-lg bg-slate-50 border border-slate-100 text-[10px] font-bold uppercase tracking-wide text-slate-500">
                    <Briefcase size={12} className="text-[#4888e8]" /> {job.department}
                  </div>
                  <div className="flex items-center gap-1.5 px-3 py-1 rounded-lg bg-[#09b125]/5 border border-[#09b125]/10 text-[10px] font-bold uppercase tracking-wide text-[#09b125]">
                    <MapPin size={12} /> {job.location}
                  </div>
                  <div className="flex items-center gap-1.5 px-3 py-1 rounded-lg bg-slate-50 border border-slate-100 text-[10px] font-bold uppercase tracking-wide text-slate-400">
                    <Clock size={12} /> {job.type}
                  </div>
                </div>
              </div>

              {/* Minimalist Action Trigger */}
              <div className="mt-6 md:mt-0 flex items-center gap-4">
                <span className="text-[10px] font-black uppercase tracking-widest text-[#4888e8] opacity-0 group-hover:opacity-100 transition-all duration-300 translate-x-2 group-hover:translate-x-0 hidden md:block">
                  View Position
                </span>
                <div className="h-12 w-12 rounded-xl bg-slate-50 text-slate-300 flex items-center justify-center group-hover:bg-[#4888e8] group-hover:text-white group-hover:shadow-lg group-hover:shadow-blue-500/20 transition-all duration-300">
                  <ArrowRight size={20} className="group-hover:rotate-[-45deg] transition-transform" />
                </div>
              </div>
            </Link>
          ))}
        </div>

       
      </div>

      {/* Subtle Footer Stamp */}
      <div className="mt-24 pb-12 flex flex-col items-center opacity-20 pointer-events-none">
          <div className="h-px w-16 bg-slate-300 mb-6" />
          <p className="text-[9px] font-black uppercase tracking-[0.4em] text-slate-400">
            Engineered Excellence • Chennai, IN
          </p>
      </div>
    </main>
  );
}