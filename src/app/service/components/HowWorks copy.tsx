"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { services } from "@/app/service/components/data";

export default function HowWorks() {
  const [openTech, setOpenTech] = useState<number | null>(null);

  return (
    <section className="relative overflow-hidden py-20 lg:py-32 bg-white">
      <style jsx global>{`
        /* Fade and Slide up for cards */
        @keyframes revealUp {
          0% { opacity: 0; transform: translateY(40px) scale(0.98); }
          100% { opacity: 1; transform: translateY(0) scale(1); }
        }
        /* Fade and Slide down for header */
        @keyframes revealDown {
          0% { opacity: 0; transform: translateY(-20px); }
          100% { opacity: 1; transform: translateY(0); }
        }
        /* Floating effect for images */
        @keyframes subtleFloat {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-12px); }
        }

        .animate-reveal-up {
          opacity: 0; /* Start hidden */
          animation: revealUp 0.8s cubic-bezier(0.16, 1, 0.3, 1) forwards;
        }
        .animate-reveal-down {
          opacity: 0;
          animation: revealDown 0.8s cubic-bezier(0.16, 1, 0.3, 1) forwards;
        }
        .animate-subtle-float {
          animation: subtleFloat 4s ease-in-out infinite;
        }
      `}</style>

      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(59,130,246,0.1),transparent_70%)]" />
        <div className="absolute inset-0 bg-[linear-gradient(rgba(59,130,246,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(59,130,246,0.03)_1px,transparent_1px)] bg-[size:50px_50px]" />
      </div>

      <div className="relative container mx-auto px-6 md:px-12 lg:px-20">
        
        <div className="mb-16 lg:mb-24 text-center max-w-4xl mx-auto animate-reveal-down [animation-delay:100ms]">
          <h3 className="mb-6 text-3xl md:text-4xl font-extrabold uppercase tracking-widest text-slate-900">
            Our <span className="text-blue-600">Services</span>
          </h3>
          <p className="text-base md:text-lg text-slate-500 leading-relaxed">
            WEBRONIC delivers intelligent digital solutions designed to scale,
            automate, and future-proof your business.
          </p>
        </div>

        <div className="grid gap-12 lg:gap-20">
          {services.map((service, index) => {
            const isOpen = openTech === service.id;

            return (
              <div
                key={service.id}
                style={{ animationDelay: `${(index + 2) * 200}ms` }}
                className="animate-reveal-up group relative grid gap-10 lg:gap-12 rounded-[2.5rem] border border-slate-100 bg-white/60 backdrop-blur-md p-8 md:p-12 shadow-sm transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl hover:bg-white lg:grid-cols-[1fr_380px] overflow-hidden"
              >
                <div className="relative z-10">
                  <div className="flex flex-col md:flex-row gap-6">
                    <div className="flex h-16 w-16 shrink-0 items-center justify-center rounded-2xl bg-blue-600 text-white shadow-lg transition-transform duration-500 group-hover:rotate-12 group-hover:scale-110">
                      {service.icon}
                    </div>

                    <div>
                      <h3 className="text-2xl md:text-3xl font-bold text-slate-900">
                        {service.title}
                      </h3>
                      <p className="mt-1 text-blue-500 font-bold uppercase tracking-wide text-sm">
                        {service.tagline}
                      </p>
                      <p className="mt-4 text-slate-500 leading-relaxed text-sm md:text-base">
                        {service.description}
                      </p>
                    </div>
                  </div>

                  <ul className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {service.points.map((p, i) => (
                      <li key={i} className="flex items-center gap-2 text-slate-600 text-sm font-medium">
                        <span className="h-1.5 w-1.5 rounded-full bg-blue-600" />
                        {p}
                      </li>
                    ))}
                  </ul>

                  <div className="mt-8 pt-6 border-t border-slate-100">
                    <button
                      onClick={() => setOpenTech(isOpen ? null : service.id)}
                      className="flex items-center gap-2 text-[10px] font-bold uppercase tracking-[0.2em] text-slate-400 hover:text-blue-600 transition-colors"
                    >
                      Stack
                      <ChevronDown className={`h-3 w-3 transition-transform ${isOpen ? "rotate-180" : ""}`} />
                    </button>

                    <div className={`overflow-hidden transition-all duration-500 ${isOpen ? "max-h-32 opacity-100 mt-4" : "max-h-0 opacity-0"}`}>
                      <div className="flex flex-wrap gap-5 grayscale opacity-70">
                        {service.technologies.map((t) => (
                          <img key={t.name} src={t.logo} alt={t.name} className="h-7 w-auto hover:grayscale-0 transition-all cursor-pointer" />
                        ))}
                      </div>
                    </div>
                  </div>

                  <div className="mt-8">
                    <button className="rounded-xl bg-slate-900 px-7 py-3 text-xs font-bold text-white uppercase tracking-widest transition-all hover:bg-blue-600 hover:shadow-lg active:scale-95">
                      {service.cta}
                    </button>
                  </div>
                </div>

                <div className="relative flex items-center justify-center">
                  <div className="absolute inset-0 bg-blue-100 rounded-full blur-3xl opacity-20 group-hover:opacity-40 transition-opacity" />
                  
                  <img
                    src={service.image}
                    alt={service.title}
                    className="relative z-10 size-60 md:size-72 object-contain animate-subtle-float transition-transform duration-700 group-hover:scale-105"
                  />
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}