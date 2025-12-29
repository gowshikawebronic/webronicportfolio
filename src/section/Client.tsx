"use client";

import Image from "next/image";
import { Sparkles } from "lucide-react";

const logos: string[] = [
  "./assets/images/fpanalyzer.png",
  "./assets/images/ekoion.png",
  "./assets/images/bovalls.png",
  "./assets/images/bluewaters.png",
  "./assets/images/snus24.png",
  "./assets/images/iit.png",
  "./assets/images/akashavani.png",
  "./assets/images/annauniv.png",
  "./assets/images/locumap.png",
  "./assets/images/rorstrand.png",
  "./assets/images/hindustan.png",
  "./assets/images/sciotech.png",
  "./assets/images/tamilnadu.png",
  "./assets/images/smartstoring.png",
  "./assets/images/bharathwaj.png",
  "./assets/images/valueflow.png",
  "./assets/images/bluewaters.png",
  "./assets/images/tsf.png",
  "./assets/images/elshaddai.png",
  "./assets/images/24sju.png",
  "./assets/images/sahaya.png",
  "./assets/images/sribalaji.png",
  "./assets/images/atthi.png",
  "./assets/images/cumi.png",
];

export default function Clients() {
  const firstRow = logos.slice(0, Math.ceil(logos.length / 2));
  const secondRow = logos.slice(Math.ceil(logos.length / 2));

  return (
    <section id="client" className="relative overflow-hidden bg-white py-5 font-sora">
      
      
      <div className="relative mx-auto max-w-7xl px-6">
        
        <div className="mb-10 text-center animate-fade-up">
          <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-slate-50 border border-slate-200 px-4 py-1.5">
            <span className="flex h-2 w-2 rounded-full bg-[#4888e8] animate-pulse" />
            <span className="text-[10px] font-bold uppercase tracking-widest text-slate-600">Clients</span>
          </div>
          
          <h2 className="text-4xl font-extrabold tracking-tight text-slate-900 sm:text-6xl">
            Trusted by <span className="bg-gradient-to-r from-blue-600 to-indigo-500 bg-clip-text text-transparent">Industry Leaders</span>
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-slate-500 font-medium">
            Partnering with prestigious institutions and innovative enterprises to build the future of digital retail.
          </p>
        </div>

        <div className="relative mt-12 space-y-8">
          
          <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-3 md:w-32 bg-gradient-to-r from-white via-white/80 to-transparent" />
          <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-3 md:w-32 bg-gradient-to-l from-white via-white/80 to-transparent" />

          <div className="flex overflow-hidden group">
            <div className="animate-marquee flex w-max items-center gap-12 py-4">
              {[...firstRow, ...firstRow].map((src, i) => (
                <div
                  key={i}
                  className="flex h-20 w-44 items-center justify-center rounded-2xl border border-slate-100 bg-white/50 px-3 shadow-sm transition-all duration-300 hover:border-blue-200 hover:bg-white hover:shadow-md group-hover:[animation-play-state:paused]"
                >
                  <img
                    src={src}
                    alt="Client logo"
                    className="h-12 w-full object-contain "
                    loading="lazy"
                  />
                </div>
              ))}
            </div>
          </div>

          <div className="flex overflow-hidden group">
            <div className="animate-scroll-review-xrev flex w-max items-center gap-12 py-4">
              {[...secondRow, ...secondRow].map((src, i) => (
                <div
                  key={i}
                  className="flex h-20 w-44 items-center justify-center rounded-2xl border border-slate-100 bg-white/50 px-6 shadow-sm transition-all duration-300 hover:border-blue-200 hover:bg-white hover:shadow-md group-hover:[animation-play-state:paused]"
                >
                  <img
                    src={src}
                    alt="Client logo"
                    className="h-12 w-full object-contain "
                    loading="lazy"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* <div className="mt-20 flex items-center justify-center gap-4 text-center">
            <div className="h-px w-12 bg-slate-200" />
            <span className="text-[10px] font-bold uppercase tracking-[0.4em] text-slate-300">Enterprise Grade Solutions</span>
            <div className="h-px w-12 bg-slate-200" />
        </div> */}
      </div>
    </section>
  );
}