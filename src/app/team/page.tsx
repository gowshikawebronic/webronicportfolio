"use client";

import { useState } from "react";
import teamMembers from "@/components/common/TeamData";
import { X, ExternalLink, Briefcase } from "lucide-react";

type TeamMember = {
  name: string;
  role: string;
  image: string;
};

export default function TeamPage() {
  const [selectedMember, setSelectedMember] = useState<TeamMember | null>(null);

  return (
    <section className="relative overflow-hidden bg-white py-16 md:py-28 lg:py-36">
      
      {/* 1. NATIVE CSS ANIMATIONS */}
      {/* <style jsx global>{`
        @keyframes slideUpFade {
          from { opacity: 0; transform: translateY(30px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes slowFloat {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-10px); }
        }
        .animate-card-entry {
          opacity: 0;
          animation: slideUpFade 0.8s cubic-bezier(0.2, 0.8, 0.2, 1) forwards;
        }
        .animate-modal-entry {
          animation: slideUpFade 0.4s cubic-bezier(0.34, 1.56, 0.64, 1) forwards;
        }
      `}</style> */}

      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(99,102,241,0.1),transparent_50%)]" />
      <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(rgba(15,23,42,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(15,23,42,0.03)_1px,transparent_1px)] bg-[size:48px_48px] md:bg-[size:72px_72px]" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6">
        
        <div className="mb-12 md:mb-20 text-center lg:text-left animate-card-entry">
          <div className="mb-4 md:mb-6 inline-flex rounded-full border border-slate-200 bg-white/70 backdrop-blur px-3 py-1 text-xs md:text-sm font-semibold text-blue-600 shadow-sm">
            The Experts
          </div>
          <h2 className="text-3xl font-extrabold tracking-tight text-slate-900 sm:text-5xl lg:text-6xl leading-tight">
            Our <span className="bg-gradient-to-r from-blue-600 to-indigo-400 bg-clip-text text-transparent">Team</span>
          </h2>
          <p className="mt-4 md:mt-6 max-w-2xl text-base md:text-lg leading-relaxed text-slate-600">
            The visionaries and engineers behind Webronic driving technical excellence 
            and retail automation forward.
          </p>
        </div>

        <div className="grid gap-4 sm:gap-6 md:gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {teamMembers.map((member, index) => (
            <div
              key={index}
              style={{ animationDelay: `${index * 100}ms` }}
              className="animate-card-entry group relative flex flex-col overflow-hidden rounded-[24px] md:rounded-[32px] border border-slate-200 bg-white p-2 transition-all duration-500 hover:-translate-y-2 hover:border-blue-200 hover:shadow-[0_20px_40px_-15px_rgba(0,0,0,0.1)]"
            >
              <div className="relative aspect-square w-full overflow-hidden rounded-[20px] md:rounded-[24px] bg-slate-50">
                <img
                  src={member.image}
                  alt={member.name}
                  className="h-full w-full object-cover object-top transition-transform duration-700 group-hover:scale-105"
                />
                
                <div className="absolute inset-0 bg-gradient-to-t from-blue-900/40 via-transparent to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
                
                <button
                  onClick={() => setSelectedMember(member)}
                  className="absolute bottom-3 right-3 md:bottom-4 md:right-4 translate-y-4 rounded-full bg-white p-2.5 md:p-3 text-blue-600 opacity-0 shadow-xl transition-all duration-500 group-hover:translate-y-0 group-hover:opacity-100 hover:bg-blue-600 hover:text-white"
                >
                  <ExternalLink size={18} className="md:w-5 md:h-5" />
                </button>
              </div>

              <div className="w-full py-4 md:py-5 px-2 text-center">
                <h4 className="text-base md:text-lg font-bold text-slate-900 transition-colors group-hover:text-blue-600 line-clamp-1">
                  {member.name}
                </h4>
                <div className="mt-1 flex items-center justify-center gap-1.5">
                  <span className="h-1 w-1 rounded-full bg-blue-400 group-hover:scale-150 transition-transform" />
                  <p className="text-[10px] md:text-[11px] font-bold uppercase tracking-[0.12em] md:tracking-[0.15em] text-slate-400">
                    {member.role}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {selectedMember && (
        <div
          className="fixed inset-0 z-[100] flex items-center justify-center bg-slate-900/70 backdrop-blur-md px-4 py-6 overflow-y-auto"
          onClick={() => setSelectedMember(null)}
        >
          <div
            className="animate-modal-entry relative w-full max-w-4xl my-auto overflow-hidden rounded-[24px] md:rounded-[40px] border border-slate-200 bg-white shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setSelectedMember(null)}
              className="absolute right-4 top-4 md:right-6 md:top-6 z-20 rounded-full bg-white/90 backdrop-blur-sm p-2 text-slate-500 transition-all hover:bg-white hover:text-red-500 shadow-md hover:rotate-90"
            >
              <X size={20} />
            </button>

            <div className="flex flex-col md:flex-row h-full max-h-[90vh] md:max-h-none overflow-y-auto md:overflow-visible">
              <div className="w-full md:w-[50%] lg:w-[55%] bg-slate-50 shrink-0">
                <img
                  src={selectedMember.image}
                  alt={selectedMember.name}
                  className="h-[300px] sm:h-[400px] md:h-[600px] w-full object-contain md:object-cover lg:object-contain transition-all duration-700" 
                />
              </div>

              <div className="flex flex-col justify-center p-6 sm:p-10 md:p-12 lg:p-14 w-full md:w-[50%] lg:w-[45%] bg-white">
                <div className="mb-4 md:mb-6 inline-flex self-start rounded-full bg-blue-50 px-3 py-1 text-[9px] md:text-[10px] font-bold uppercase tracking-widest text-blue-600 animate-pulse">
                  Team Member
                </div>
                <h3 className="text-2xl text-3xl  font-extrabold text-slate-900 leading-tight">
                  {selectedMember.name}
                </h3>
                <p className="mt-2 md:mt-4 flex items-center gap-2 text-sm sm:text-base md:text-lg font-semibold text-blue-600/90">
                  <Briefcase size={18} className="md:w-5 md:h-5" strokeWidth={2.5} />
                  {selectedMember.role}
                </p>
                
                <div className="mt-6 md:mt-10 border-t border-slate-100 pt-6 md:pt-10">
                  <p className="text-sm md:text-base leading-relaxed text-slate-500 italic">
                    "Driving technical innovation and building clean, scalable 
                    architectural solutions at Webronic."
                  </p>
                </div>

                <div className="mt-8 md:mt-10 flex items-center gap-4">
                  <div className="h-1 md:h-1.5 w-12 md:w-16 rounded-full bg-blue-600 transition-all duration-700 hover:w-24" />
                  <div className="h-1 md:h-1.5 w-1 md:h-1.5 rounded-full bg-slate-200 animate-bounce" style={{animationDelay: '0.1s'}} />
                  <div className="h-1 md:h-1.5 w-1 md:h-1.5 rounded-full bg-slate-200 animate-bounce" style={{animationDelay: '0.2s'}} />
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}