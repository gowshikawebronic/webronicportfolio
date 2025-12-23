"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowRight, ShieldCheck, Zap, BarChart3 } from "lucide-react";

export default function About() {
  return (
    <section id="about" className="relative overflow-hidden bg-slate-50 py-15 ">
      
      <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(rgba(15,23,42,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(15,23,42,0.03)_1px,transparent_1px)] bg-[size:72px_72px]" />
      
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_right,rgba(99,102,241,0.08),transparent_55%)]" />

      <div className="relative mx-auto max-w-7xl px-6 grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
        
        <div className="relative flex justify-center group">
          <div className="absolute inset-0 -z-10 rounded-[40px] bg-blue-200/40 blur-[80px] transition-opacity group-hover:opacity-70" />

          <div className="relative w-full rounded-[32px] bg-white p-3 shadow-[0_32px_64px_-16px_rgba(0,0,0,0.1)] border border-slate-200 transition-all duration-700 group-hover:scale-[1.02] group-hover:rotate-1">
            <Image
              src="./assets/images/hero-dashboard.png"
              alt="Webronic dashboard preview"
              width={900}
              height={900}
              className="rounded-[24px]"
              priority
            />
            
            <div className="absolute -bottom-6 -right-6 hidden sm:flex items-center gap-3 rounded-2xl bg-slate-900 p-4 shadow-2xl animate-bounce-slow">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-blue-500/20 text-blue-400">
                <Zap size={20} fill="currentColor" />
              </div>
              <div className="pr-4">
                <p className="text-[10px] font-bold uppercase tracking-widest text-slate-400">Performance</p>
                <p className="text-sm font-bold text-white">99.9% Uptime</p>
              </div>
            </div>
          </div>
        </div>

        <div className="relative flex flex-col text-center lg:text-left">
          <div className="mb-6 inline-flex self-center lg:self-start rounded-full bg-blue-50 px-4 py-1.5 text-xs font-bold uppercase tracking-widest text-blue-600">
            About Webronic
          </div>

          <h2 className="text-4xl sm:text-5xl font-extrabold leading-[1.1] text-slate-900 tracking-tight">
            WHEN YOU GROW WITH 
            <span className="block bg-gradient-to-r from-blue-600 to-indigo-500 bg-clip-text text-transparent">
              TECHNICAL EXPERTISE
            </span>
            <span className="text-slate-400 font-medium">WE GROW TOGETHER</span>
          </h2>

          <div className="mt-8 space-y-4 text-lg text-slate-500 leading-relaxed font-medium">
            <p>
              We are the <span className="text-slate-900">One Stop Solution</span> for all your requirements. Our approach
              blends clean design, robust engineering, and future-ready
              architectures tailored to your growth.
            </p>
            <p>
              From concept to deployment, we focus on reliability, security, and
              performance — ensuring your digital foundation evolves alongside your
              business.
            </p>
          </div>

          <div className="mt-10">
            <Link
              href="/service"
              className="group inline-flex items-center gap-2 text-base font-bold text-blue-600 transition-all hover:gap-4"
            >
              Explore our services
              <ArrowRight size={20} className="transition-transform group-hover:translate-x-1" />
            </Link>
          </div>

          <div className="mt-16 grid grid-cols-1 sm:grid-cols-3 gap-4">
            {[
              { 
                title: "Scalable", 
                desc: "Built to evolve", 
                icon: BarChart3 
              },
              { 
                title: "Secure", 
                desc: "Enterprise foundations", 
                icon: ShieldCheck 
              },
              { 
                title: "Reliable", 
                desc: "Trustworthy performance", 
                icon: Zap 
              },
            ].map((point, i) => (
              <div key={i} className="flex flex-col items-center lg:items-start p-4 rounded-2xl border border-slate-100 bg-white shadow-sm transition-all hover:shadow-md hover:border-blue-100">
                <div className="mb-3 text-blue-600">
                  <point.icon size={24} strokeWidth={2} />
                </div>
                <p className="font-bold text-slate-900">{point.title}</p>
                <p className="mt-1 text-xs text-slate-400 leading-tight">{point.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}