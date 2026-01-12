"use client";

import Link from "next/link";
import { CLOUD_HERO_DATA } from "@/data/clouddevops/CLOUD_HERO_DATA";
import {
  ArrowRight,
  CheckCircle2,
  Cloud,
  Server,
  Database,
  Shield,
} from "lucide-react";

export default function CloudHero() {
  const { h1, h1Highlight, subHeadline, valueProps, ctas } = CLOUD_HERO_DATA;

  return (
    <section className="relative overflow-hidden bg-white pt-32 pb-10 lg:pt-40 font-sora px-5 lg:px-25">
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-20 items-center">
          
          {/* --- LEFT COLUMN: CONTENT --- */}
          <div className="max-w-2xl">
            
            {/* Badge */}
            <div className="flex items-center gap-4 mb-6">
              <Cloud size={16} className="text-[#2776ea]" />
              <span className="text-[11px] font-black uppercase tracking-[0.3em] text-[#2776ea]">
                Cloud Solutions
              </span>
            </div>

            {/* Headline */}
            <h2 className="text-3xl font-extrabold tracking-tight text-slate-900 sm:text-5xl lg:text-6xl leading-tight mb-6">
              {h1} <br className="hidden sm:block" />
              <span className="bg-gradient-to-r from-[#2776ea] to-[#76ea27] bg-clip-text text-transparent">
                {h1Highlight}
              </span>
            </h2>

            {/* Sub-headline */}
            <p className="text-lg text-slate-500 font-medium leading-relaxed mb-10 max-w-xl">
              {subHeadline}
            </p>

            {/* Key Value Propositions Grid */}
            <div className="grid sm:grid-cols-2 gap-4 mb-10">
              {valueProps.map((prop, index) => (
                <div key={index} className="flex items-start gap-3">
                  <div className="mt-1 h-5 w-5 rounded-full bg-[#76ea27]/10 flex items-center justify-center text-[#76ea27] shrink-0">
                    <CheckCircle2 size={12} strokeWidth={3} />
                  </div>
                  <span className="text-sm font-bold text-slate-700 leading-snug">
                    {prop}
                  </span>
                </div>
              ))}
            </div>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                href="/cloud-assessment"
                className="inline-flex items-center justify-center gap-3 px-8 py-4 rounded-xl bg-[#2776ea] text-white text-sm font-black uppercase tracking-widest hover:bg-[#76ea27] transition-all shadow-xl shadow-blue-900/10 active:scale-95"
              >
                {ctas.primary}
              </Link>
              <Link
                href="/cloud-case-studies"
                className="inline-flex items-center justify-center gap-3 px-8 py-4 rounded-xl bg-white border border-slate-200 text-slate-600 text-sm font-black uppercase tracking-widest hover:border-[#76ea27] hover:text-[#76ea27] transition-all active:scale-95"
              >
                {ctas.secondary} <ArrowRight size={16} />
              </Link>
            </div>
          </div>

          {/* --- RIGHT COLUMN: ANIMATED VISUAL (Cloud Adaptation) --- */}
          <div className="relative h-[400px] lg:h-[500px] w-full flex items-center justify-center">
            {/* CSS Animations */}
            <style jsx>{`
              @keyframes float-slow {
                0%, 100% { transform: translateY(0); }
                50% { transform: translateY(-20px); }
              }
              @keyframes float-medium {
                0%, 100% { transform: translateY(0); }
                50% { transform: translateY(-15px); }
              }
              @keyframes pulse-ring {
                0% { transform: scale(0.8); opacity: 0.5; }
                100% { transform: scale(2); opacity: 0; }
              }
              .animate-float-slow { animation: float-slow 6s ease-in-out infinite; }
              .animate-float-medium { animation: float-medium 5s ease-in-out infinite; }
              .animate-pulse-ring { animation: pulse-ring 3s cubic-bezier(0, 0, 0.2, 1) infinite; }
            `}</style>

            {/* Central Node: Cloud */}
            <div className="relative z-20 h-32 w-32 rounded-3xl bg-white border border-slate-100 shadow-2xl flex items-center justify-center animate-float-slow">
              <div className="absolute inset-0 bg-gradient-to-br from-[#2776ea]/10 to-transparent rounded-3xl" />
              <Cloud size={64} className="text-[#2776ea]" />
              {/* Pulse Effect */}
              <div className="absolute inset-0 rounded-3xl border border-[#2776ea] animate-pulse-ring z-[-1]" />
            </div>

            {/* Orbiting Node 1: Server (Green) */}
            <div
              className="absolute top-10 right-10 lg:right-20 h-20 w-20 rounded-2xl bg-white border border-slate-100 shadow-xl flex items-center justify-center animate-float-medium"
              style={{ animationDelay: "1s" }}
            >
              <Server size={32} className="text-[#76ea27]" />
            </div>

            {/* Orbiting Node 2: Shield (Grey) */}
            <div
              className="absolute bottom-20 left-10 lg:left-0 h-16 w-16 rounded-2xl bg-white border border-slate-100 shadow-xl flex items-center justify-center animate-float-slow"
              style={{ animationDelay: "2s" }}
            >
              <Shield size={24} className="text-slate-400" />
            </div>

            {/* Orbiting Node 3: Database (Dark/Accent) */}
            <div
              className="absolute bottom-10 right-20 h-24 w-24 rounded-2xl bg-slate-900 shadow-xl flex items-center justify-center animate-float-medium"
              style={{ animationDelay: "0.5s" }}
            >
              <Database size={40} className="text-yellow-400 fill-yellow-400" />
            </div>

            {/* Connecting Lines (SVG) */}
            <svg className="absolute inset-0 w-full h-full pointer-events-none z-0">
              <path
                d="M50% 50% L80% 20%"
                className="stroke-slate-200 stroke-2 [stroke-dasharray:4_4]"
              />
              <path
                d="M50% 50% L20% 70%"
                className="stroke-slate-200 stroke-2 [stroke-dasharray:4_4]"
              />
              <path
                d="M50% 50% L70% 80%"
                className="stroke-slate-200 stroke-2 [stroke-dasharray:4_4]"
              />
            </svg>
          </div>
        </div>
      </div>
    </section>
  );
}