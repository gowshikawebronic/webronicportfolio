"use client";

import { useState } from "react";
import teamMembers from "@/components/common/TeamData";
import {
  X,
  ExternalLink,
  Briefcase,
  Linkedin,
  Github,
  Terminal,
  ArrowRight,
} from "lucide-react";

type TeamMember = {
  name: string;
  role: string;
};

export default function TeamPage() {
  const [selectedMember, setSelectedMember] = useState<TeamMember | null>(null);

  return (
    <section className="relative overflow-hidden bg-white py-16 md:py-28 font-sora">
      <div className="relative mx-auto max-w-5xl px-6 animate-card-entry">
        <div className="flex items-center gap-4 mb-6">
          <span className="text-[11px] font-black uppercase tracking-[0.3em] text-[#2776ea]">
            our Team
          </span>
        </div>
        <div className="mb-16 md:mb-24 text-left border-l-2 border-slate-100 pl-24 ">
          <h2 className="text-4xl md:text-5xl font-black tracking-tight text-slate-900 leading-[1.1]">
            Our <br />
            <span className="bg-linear-to-r from-[#2776ea] to-[#76ea27] bg-clip-text text-transparent">
              Core Team
            </span>
          </h2>
          <p className="mt-4 max-w-xl text-base text-slate-500 font-medium leading-relaxed">
            A specialized collective of software architects and digital
            consultants delivering enterprise-grade retail automation solutions.
          </p>
        </div>

        <div className="divide-y divide-slate-100 border-t border-b border-slate-100">
          {teamMembers.map((member, index) => (
            <div
              key={index}
              className="group flex flex-col md:flex-row md:items-center justify-between py-6 md:py-8 transition-all duration-300 hover:px-4"
            >
              <div className="flex items-center gap-8">
                <span className="hidden md:block text-xs font-bold text-slate-300 group-hover:text-[#76ea27] transition-colors tabular-nums">
                  {(index + 1).toString().padStart(2, "0")}
                </span>

                <div>
                  <h4 className="text-lg md:text-xl font-bold text-slate-900 group-hover:text-[#2776ea] transition-colors">
                    {member.name}
                  </h4>
                  <p className="text-[10px] font-bold uppercase tracking-widest text-slate-400 mt-0.5">
                    {member.role}
                  </p>
                </div>
              </div>

              <div className="mt-6 md:mt-0 flex items-center gap-6">
                <div className="flex items-center gap-4 opacity-0 -translate-x-2 transition-all group-hover:opacity-100 group-hover:translate-x-0">
                  <a
                    href="#"
                    className="text-slate-300 hover:text-[#2776ea] transition-colors"
                  >
                    <Linkedin size={16} />
                  </a>
                  <a
                    href="#"
                    className="text-slate-300 hover:text-slate-900 transition-colors"
                  >
                    <Github size={16} />
                  </a>
                </div>

                <button
                  onClick={() => setSelectedMember(member)}
                  className="flex items-center gap-2 text-[10px] cursor-pointer font-black uppercase tracking-widest text-slate-400 group-hover:text-[#76ea27] transition-all"
                >
                  Briefing
                  <ArrowRight
                    size={12}
                    className="group-hover:translate-x-1 transition-transform"
                  />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {selectedMember && (
        <div
          className="fixed inset-0 z-110 flex items-center justify-center p-6"
          onClick={() => setSelectedMember(null)}
        >
          <div className="absolute inset-0 bg-white/90 backdrop-blur-sm" />

          <div
            className="animate-modal-pop  relative w-full max-w-md overflow-hidden rounded-3xl border border-slate-100 bg-white p-10 shadow-[0_50px_100px_-20px_rgba(0,0,0,0.1)]"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setSelectedMember(null)}
              className="absolute right-6 top-6 text-slate-300  hover:text-red-500 transition-colors"
            >
              <X size={18} />
            </button>

            <div className="text-center">
              <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-xl bg-slate-900 text-[#76ea27]">
                <Briefcase size={20} />
              </div>

              <div className="mt-6">
                <h3 className="text-2xl font-extrabold text-slate-900 tracking-tight">
                  {selectedMember.name}
                </h3>
                <p className="text-xs font-bold uppercase tracking-widest text-[#2776ea] mt-1">
                  {selectedMember.role}
                </p>
              </div>

              <div className="mt-8 border-t border-slate-50 pt-8">
                <p className="text-sm leading-relaxed text-slate-500 font-medium italic">
                  &quot;Architecting scalable digital environments with a focus
                  on industrial automation and retail efficiency.&quot;
                </p>
              </div>

              <div className="mt-8 flex justify-center gap-6 border-t border-slate-50 pt-8">
                <a
                  href="#"
                  className="flex items-center gap-2 text-[10px] font-black uppercase tracking-widest text-slate-400 hover:text-[#2776ea] transition-colors"
                >
                  <Linkedin size={16} /> LinkedIn
                </a>
                <a
                  href="#"
                  className="flex items-center gap-2 text-[10px] font-black uppercase tracking-widest text-slate-400 hover:text-slate-900 transition-colors"
                >
                  <Github size={16} /> GitHub
                </a>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
