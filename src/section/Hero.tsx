"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Sparkles } from "lucide-react";

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative overflow-hidden bg-white py-15 mt-10 "
    >

      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(99,102,241,0.12),transparent_50%)]" />

      <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(rgba(15,23,42,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(15,23,42,0.03)_1px,transparent_1px)] bg-[size:72px_72px]" />

      <div className="pointer-events-none absolute inset-0">
        <div className="absolute top-20 left-10 h-[500px] w-[500px] rounded-full bg-blue-100/40 blur-[120px] animate-pulse" />
        <div className="absolute bottom-10 right-10 h-[400px] w-[400px] rounded-full bg-indigo-100/30 blur-[100px] animate-pulse delay-1000" />
      </div>


      <div className="relative mx-auto max-w-7xl px-6">
        <div className="grid grid-cols-1 items-center gap-16 lg:grid-cols-2">

          <div className="flex flex-col text-center lg:text-left">

            <div className="mb-8 inline-flex self-center lg:self-start rounded-full border border-slate-200 bg-white/80 backdrop-blur-md px-4 py-1.5 text-xs font-bold uppercase tracking-widest text-blue-600 shadow-sm">
              <Sparkles size={14} className="mr-2" />
              Product by WEBRONIC
            </div>

            <h1 className="text-5xl font-extrabold tracking-tight text-slate-900 sm:text-6xl lg:text-7xl leading-[1.1]">
              The Future of Retail,
              <span className="block bg-gradient-to-r from-blue-600 via-indigo-500 to-slate-500 bg-clip-text text-transparent">
                Automated.
              </span>
            </h1>

            <p className="mt-8 max-w-xl self-center lg:self-start text-lg lg:text-xl leading-relaxed text-slate-500 font-medium">
              Transform traditional retail into efficient, secure, and customer-centric spaces that generate revenue <span className="text-slate-900 underline decoration-blue-200 underline-offset-4">24/7 without intervention</span>.
            </p>

            <div className="mt-10 flex flex-wrap justify-center lg:justify-start gap-3">
              {["Smart Automation", "AI Security", "24/7 Operation"].map((item) => (
                <span key={item} className="rounded-full border border-slate-100 bg-slate-50/50 px-4 py-1 text-sm font-semibold text-slate-600 transition-colors hover:bg-white hover:border-blue-200 hover:text-blue-600">
                  {item}
                </span>
              ))}
            </div>

            <div className="mt-14 flex justify-center lg:justify-start">
              <Link
                href="https://vasanthwebronic-oss.github.io/storetech-portfolio/"
                target="_blank"
                className="group relative inline-flex items-center gap-6 rounded-2xl border border-slate-200 bg-white px-8 py-5 shadow-[0_20px_50px_rgba(0,0,0,0.05)] transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_40px_80px_rgba(0,0,0,0.1)]"
              >
                <div className="absolute inset-0 -z-10 rounded-2xl bg-gradient-to-r from-blue-100 to-indigo-100 opacity-0 blur-2xl transition-opacity group-hover:opacity-100" />
                
                <Image
                  src="./assets/images/storetech-logo-black.png"
                  alt="StoreTech"
                  width={140}
                  height={36}
                  className="object-contain transition-transform duration-500 group-hover:scale-105"
                />
                
                <div className="h-8 w-px bg-slate-200" />
                
                <span className="flex items-center gap-2 text-sm font-bold uppercase tracking-widest text-slate-900">
                  View Product
                  <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
                </span>
              </Link>
            </div>
          </div>

          <div className="relative flex justify-center lg:justify-end">
            <div className="relative w-full max-w-[640px] animate-float">
              
              <div className="absolute inset-0 -z-10 rounded-[40px] bg-blue-400/20 blur-[80px]" />
              <div className="absolute -inset-4 -z-20 rounded-[40px] bg-indigo-200/20 blur-[120px] animate-pulse" />

              <div className="overflow-hidden rounded-[32px] border border-slate-200 bg-white p-2 shadow-2xl transition-all duration-700 hover:rotate-[-1deg] hover:scale-[1.02]">
                <Image
                  src="./assets/images/storetech.png"
                  alt="StoreTech Dashboard"
                  width={1200}
                  height={1200}
                  className="rounded-[24px] object-cover"
                  priority
                />
              </div>

              <div className="absolute -bottom-6 -left-6 rounded-2xl border border-slate-200 bg-white/90 backdrop-blur-xl p-4 shadow-xl hidden md:block animate-bounce-slow">
                <div className="flex items-center gap-3">
                  <div className="h-3 w-3 rounded-full bg-green-500 animate-pulse" />
                  <span className="text-xs font-bold text-slate-800 uppercase tracking-tighter">System Live</span>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}