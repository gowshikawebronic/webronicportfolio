"use client";

import Link from "next/link";
import {
  Briefcase,
  MapPin,
  ArrowRight,
  ChevronLeft,
  Sparkles,
  GraduationCap,
} from "lucide-react";

export default function CareerPage() {
  return (
    <main className="bg-[#fafbfc] min-h-screen pt-24 pb-20 font-sora relative overflow-hidden">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-100 bg-linear-to-b from-[#2776ea]/5 to-transparent pointer-events-none" />

      <div className="container mx-auto px-6 mt-5 lg:mt-10  max-w-5xl relative z-10">
        <Link
          href="/#career"
          className="inline-flex items-center gap-2 text-slate-400 hover:text-[#336fa5] font-bold text-[10px] uppercase tracking-[0.2em] mb-12 transition-all group"
        >
          <div className="flex h-7 w-7 items-center justify-center rounded-full bg-white border border-slate-100 shadow-sm group-hover:border-[#336fa5]/30 group-hover:bg-blue-50 transition-all">
            <ChevronLeft
              size={14}
              className="group-hover:-translate-x-0.5 transition-transform"
            />
          </div>
          Return to Careers
        </Link>

        <div className="mb-16">
          <div className="flex items-center gap-4 mb-6">
            <Sparkles size={12} className="text-[#76ea27]" />
            <span className="text-[11px] font-black uppercase tracking-[0.3em] text-[#2776ea]">
              Join the Collective
            </span>
          </div>

          <h2 className="text-4xl md:text-5xl font-black tracking-tight text-slate-900 leading-[1.1] ">
            Help us build the <br />
            <span className="bg-linear-to-r from-[#2776ea] to-[#76ea27] bg-clip-text text-transparent">
              Next Generation
            </span>
          </h2>
          <p className="text-slate-500 text-base md:text-lg max-w-xl font-medium leading-relaxed opacity-70">
            Select your path below to join our mission of bridging complex data
            with intuitive human experiences.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          <a
            href="https://forms.gle/XcoACD7EHUAvjc8Z8"
            target="_blank"
            rel="noopener noreferrer"
            className="group relative p-8 md:p-10 rounded-[2.5rem] border border-slate-100 bg-white hover:bg-slate-50/50 hover:border-[#76ea27]/20 transition-all duration-300 shadow-sm"
          >
            <div className="flex flex-col h-full justify-between">
              <div>
                <div className="h-14 w-14 rounded-2xl bg-[#76ea27]/10 flex items-center justify-center text-[#76ea27] mb-8 group-hover:scale-110 transition-transform duration-500">
                  <GraduationCap size={28} />
                </div>
                <h3 className="text-2xl md:text-3xl font-black text-slate-800 mb-4 tracking-tight">
                  Apply for <br />
                  <span className="text-[#76ea27]">Internship</span>
                </h3>
                <p className="text-slate-500 text-sm font-medium leading-relaxed mb-8 opacity-80">
                  Perfect for students and recent graduates looking to gain
                  hands-on experience in high-impact tech environments.
                </p>
              </div>

              <div className="flex items-center gap-3">
                <span className="text-[10px] font-black uppercase tracking-widest text-[#76ea27]">
                  Start Application
                </span>
                <div className="h-10 w-10 rounded-xl bg-slate-50 text-slate-300 flex items-center justify-center group-hover:bg-[#76ea27] group-hover:text-white group-hover:shadow-lg group-hover:shadow-green-500/20 transition-all duration-300">
                  <ArrowRight
                    size={18}
                    className="group-hover:-rotate-45 transition-transform"
                  />
                </div>
              </div>
            </div>
          </a>

          <a
            href="https://forms.gle/NK1STfVt5GDLKGgz8"
            target="_blank"
            rel="noopener noreferrer"
            className="group relative p-8 md:p-10 rounded-[2.5rem] border border-slate-100 bg-white hover:bg-slate-50/50 hover:border-[#2776ea]/20 transition-all duration-300 shadow-sm"
          >
            <div className="flex flex-col h-full justify-between">
              <div>
                <div className="h-14 w-14 rounded-2xl bg-[#2776ea]/10 flex items-center justify-center text-[#2776ea] mb-8 group-hover:scale-110 transition-transform duration-500">
                  <Briefcase size={28} />
                </div>
                <h3 className="text-2xl md:text-3xl font-black text-slate-800 mb-4 tracking-tight">
                  Experienced <br />
                  <span className="text-[#2776ea]">Recruitment</span>
                </h3>
                <p className="text-slate-500 text-sm font-medium leading-relaxed mb-8 opacity-80">
                  For industry professionals looking for specialized roles in
                  software engineering, design, or project management.
                </p>
              </div>

              <div className="flex items-center gap-3">
                <span className="text-[10px] font-black uppercase tracking-widest text-[#2776ea]">
                  View Opportunities
                </span>
                <div className="h-10 w-10 rounded-xl bg-slate-50 text-slate-300 flex items-center justify-center group-hover:bg-[#2776ea] group-hover:text-white group-hover:shadow-lg group-hover:shadow-blue-500/20 transition-all duration-300">
                  <ArrowRight
                    size={18}
                    className="group-hover:-rotate-45 transition-transform"
                  />
                </div>
              </div>
            </div>
          </a>
        </div>

        <div className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-6 opacity-60">
          <div className="flex flex-col items-center text-center">
            <MapPin size={16} className="text-slate-400 mb-2" />
            <span className="text-[9px] font-bold uppercase tracking-widest text-slate-500">
              Global Hybrid
            </span>
          </div>
          <div className="flex flex-col items-center text-center">
            <Sparkles size={16} className="text-slate-400 mb-2" />
            <span className="text-[9px] font-bold uppercase tracking-widest text-slate-500">
              Modern Stack
            </span>
          </div>
          <div className="flex flex-col items-center text-center">
            <GraduationCap size={16} className="text-slate-400 mb-2" />
            <span className="text-[9px] font-bold uppercase tracking-widest text-slate-500">
              Growth Plan
            </span>
          </div>
          <div className="flex flex-col items-center text-center">
            <Briefcase size={16} className="text-slate-400 mb-2" />
            <span className="text-[9px] font-bold uppercase tracking-widest text-slate-500">
              Equity Focus
            </span>
          </div>
        </div>
      </div>
    </main>
  );
}
