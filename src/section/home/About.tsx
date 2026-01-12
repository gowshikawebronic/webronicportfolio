"use client";

import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  ShieldCheck,
  Zap,
  BarChart3,
  CheckCircle2,
} from "lucide-react";

export default function About() {
  return (
    <section
      id="about"
      className="relative overflow-hidden bg-white py-12 md:py-20 font-sora"
    >

      <div className="relative mx-auto max-w-7xl px-6 grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 items-center">
        <div className="relative flex justify-center order-2 lg:order-1 group">
          <div className="absolute inset-0 -z-10 rounded-[3rem] bg-linear-to-tr from-[#2776ea]/20 to-[#76ea27]/20 blur-[60px] md:blur-[80px] opacity-50" />

          <div className="relative w-full max-w-[320px] sm:max-w-100 lg:max-w-125 aspect-square flex items-center justify-center rounded-[2.5rem] md:rounded-[3rem] bg-slate-50/50 backdrop-blur-sm border border-slate-200/60 shadow-2xl transition-all duration-700">
            <div className="absolute inset-3 md:inset-4 rounded-4xl md:rounded-[2.5rem] border border-dashed border-slate-300 opacity-30" />

            <div className="relative p-8 md:p-12 transition-transform duration-700 group-hover:scale-105">
              <Image
                src="./assets/images/hero-dashboard.png"
                alt="Webronic Company Logo"
                width={400}
                height={400}
                className="w-full h-auto object-contain drop-shadow-[0_15px_30px_rgba(72,136,232,0.2)]"
                priority
              />
            </div>

            <div className="absolute -bottom-4 -right-2 md:-bottom-6 md:-right-6 flex items-center gap-3 md:gap-4 rounded-xl md:rounded-2xl bg-slate-900 px-4 py-3 md:px-6 md:py-4 shadow-2xl animate-float">
              <div className="flex h-10 w-10 md:h-12 md:w-12 items-center justify-center rounded-lg md:rounded-xl bg-[#76ea27]/20 text-[#76ea27]">
                <Zap size={20} className="md:size={24}" fill="currentColor" />
              </div>
              <div>
                <p className="text-[8px] md:text-[10px] font-black uppercase tracking-[0.2em] text-slate-400">
                  Reliability
                </p>
                <p className="text-sm md:text-lg font-extrabold text-white">
                  99.9% Uptime
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="relative flex flex-col text-center lg:text-left order-1 lg:order-2">
          <div className="flex justify-center lg:justify-start lg:items-center  gap-4 mb-6">
            <span className="text-[11px] font-black uppercase tracking-[0.3em] text-[#2776ea]">
              About us
            </span>
          </div>

          <h2 className="text-3xl font-extrabold tracking-tight text-slate-900 sm:text-3xl lg:text-5xl leading-tight">
            WHEN YOU GROW <br className="hidden sm:block" />
            <span className="bg-linear-to-r from-[#2776ea] to-[#76ea27] bg-clip-text text-transparent">
              WITH OUR TECHNICAL EXPERTISE, WE GROW
            </span>
          </h2>

          <div className="mt-6 md:mt-8 space-y-6 text-base md:text-lg text-slate-500 leading-relaxed font-medium">
            <p>
              We are the{" "}
              <span className="text-slate-900 font-bold underline decoration-[#2776ea] decoration-2 underline-offset-4">
                One Stop Solution
              </span>{" "}
              for all your high-performance infrastructure requirements.
            </p>

            <div className="grid grid-cols-2 lg:grid-cols-2 gap-y-3 gap-x-2 pt-2">
              {[
                "Agile Deployment",
                "Scalable Architecture",
                "Cloud Migration",
                "Security First",
              ].map((item) => (
                <div key={item} className="flex items-center gap-2 group/item">
                  <div className="flex h-5 w-5 md:h-6 md:w-6 shrink-0 items-center justify-center rounded-full  text-[#76ea27]">
                    <CheckCircle2
                      size={14}
                      className="md:size={16}"
                      strokeWidth={3}
                    />
                  </div>
                  <span className="text-[11px] md:text-sm font-bold text-slate-700 whitespace-nowrap">
                    {item}
                  </span>
                </div>
              ))}
            </div>
          </div>

          <div className="mt-10 md:mt-12">
            <Link
              href="/service"
              className="group relative inline-flex items-center justify-center w-full sm:w-auto gap-3 overflow-hidden rounded-xl md:rounded-2xl bg-[#2776ea] px-10 py-4 font-black uppercase tracking-widest text-[10px] md:text-xs text-white transition-all hover:bg-[#76ea27] active:scale-95"
            >
              Our Services
              <ArrowRight
                size={18}
                className="transition-transform group-hover:translate-x-1"
              />
            </Link>
          </div>

          <div className="mt-12 md:mt-16 grid grid-cols-1 sm:grid-cols-3 gap-4">
            {[
              {
                title: "Scalable",
                desc: "Modular Code",
                icon: BarChart3,
                accent: "#2776ea",
              },
              {
                title: "Secure",
                desc: "E2E Encryption",
                icon: ShieldCheck,
                accent: "#76ea27",
              },
              {
                title: "High Speed",
                desc: "Low Latency",
                icon: Zap,
                accent: "#2776ea",
              },
            ].map((point, i) => (
              <div
                key={i}
                className="flex items-center sm:flex-col sm:items-start p-4 md:p-5 rounded-2xl md:rounded-4xl border border-slate-100 bg-slate-50/50 transition-all hover:bg-white hover:shadow-xl"
              >
                <div
                  className="mr-4 sm:mr-0 sm:mb-4 flex h-10 w-10 md:h-12 md:w-12 shrink-0 items-center justify-center rounded-xl bg-white shadow-sm"
                  style={{ color: point.accent }}
                >
                  <point.icon
                    size={20}
                    className="md:size={22}"
                    strokeWidth={2.5}
                  />
                </div>
                <div>
                  <p className="font-black text-[10px] md:text-[11px] uppercase tracking-widest text-slate-900">
                    {point.title}
                  </p>
                  <p className="text-[9px] md:text-[10px] font-bold text-slate-400 uppercase tracking-tighter">
                    {point.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
