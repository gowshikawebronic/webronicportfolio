"use client";

import { useEffect, useRef, useState } from "react";
import { useParallax } from "react-scroll-parallax";
import { Sparkles } from "lucide-react";

type IntegrationItem = {
  image: string;
  rotation: string;
  rotation2?: string;
  link: string;
};

export default function Integrations() {
  const [eleProgress, setEleProgress] = useState(0);
  const eleRefs = useRef<(HTMLDivElement | null)[]>([]);

  const { ref } = useParallax<HTMLDivElement>({
    onProgressChange: (progress) => {
      setEleProgress(progress);
    },
  });

  const items: IntegrationItem[] = [
    {
      image: "./assets/24sju-se.png",
      rotation: "rotate-[30deg]",
      rotation2: "-rotate-[30deg]",
      link: "https://24-sju.se/",
    },
    {
      image: "./assets/images/valuechart.png",
      rotation: "rotate-[54deg]",
      rotation2: "-rotate-[54deg]",
      link: "https://www.valueflowsoft.com/",
    },
    {
      image: "./assets/images/tanluxlogo.png",
      rotation: "rotate-[78deg]",
      rotation2: "-rotate-[78deg]",
      link: "https://tanlux.se/",
    },
    {
      image: "./assets/images/fpanalyzer.png",
      rotation: "rotate-[102deg]",
      rotation2: "-rotate-[102deg]",
      link: "https://www.fpanalyzer.se/",
    },
    {
      image: "./assets/images/storetech-logo1.png",
      rotation: "rotate-[126deg]",
      rotation2: "-rotate-[126deg]",
      link: "https://store-tech.se/",
    },
    {
      image: "./assets/images/thingsatweb.png",
      rotation: "rotate-[150deg]",
      rotation2: "-rotate-[150deg]",
      link: "https://www.thingsatweb.com/",
    },
  ];

  useEffect(() => {
    const value = eleProgress * 100;
    const translateX = value * -5;

    eleRefs.current.forEach((el) => {
      if (!el) return;
      el.style.transform =
        value <= 16 ? `translateX(${translateX}px)` : `translateX(-80px)`;
    });
  }, [eleProgress]);

  return (
    <section id="partner" className="relative overflow-hidden bg-white py-12 md:py-20 lg:py-7">
      <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(rgba(15,23,42,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(15,23,42,0.03)_1px,transparent_1px)] bg-[size:72px_72px]" />
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(99,102,241,0.08),transparent_70%)]" />

      <div className="relative mx-auto max-w-7xl px-6">
        <div className="flex flex-col gap-10 md:gap-16">
          
          <div className="text-center">
            <div className="mb-4 md:mb-6 hidden  md:inline-flex  rounded-full bg-blue-50 px-4 py-1.5 text-[10px] md:text-xs font-bold uppercase tracking-widest text-blue-600 shadow-sm">
              <Sparkles size={14} className="mr-2" />
              Strategic Alliances
            </div>
            
            <h2 className="text-3xl font-extrabold tracking-tight text-slate-900 sm:text-5xl lg:text-6xl leading-tight">
              Partnering with <br className="hidden sm:block" />
              <span className="bg-gradient-to-r from-blue-600 to-indigo-500 bg-clip-text text-transparent">
                Innovative Brands
              </span>
            </h2>
            
            <p className="mx-auto mt-4 md:mt-6 max-w-2xl text-base md:text-lg font-medium leading-relaxed text-slate-500 px-4">
              Delivering scalable, reliable, and future-ready digital solutions 
              through shared technical excellence.
            </p>
          </div>

          <div className="hidden lg:block">
            <div className="relative flex h-100 w-full justify-center overflow-hidden lg:h-125">
              <div
                ref={ref}
                className="relative mt-20 h-150 w-150  rounded-full border border-slate-100 bg-gradient-to-b from-blue-50/50 via-white to-white md:h-250 md:w-250 shadow-[inset_0_0_100px_rgba(99,102,241,0.05)]"
              >
                <div className="absolute inset-[15%]  rounded-full border border-dashed border-slate-200 opacity-50" />
                {items.map((item, i) => (
                  <div
                    key={i}
                    className={`absolute top-1/2 w-full -translate-y-1/2 ${item.rotation}`}
                  >
                    <a
                      href={item.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group block w-fit"
                    >
                      <div
                        ref={(el) => {
                          eleRefs.current[i] = el;
                        }}
                        className="flex h-20 w-20 translate-x-16 items-center justify-center rounded-2xl bg-white border border-slate-100 shadow-[0_10px_30px_-10px_rgba(0,0,0,0.1)] transition-all duration-500 group-hover:-translate-y-2 group-hover:border-blue-200 group-hover:shadow-blue-100 group-hover:shadow-2xl"
                      >
                        <img
                          src={item.image}
                          alt={`partner-${i + 1}`}
                          className={`h-12 w-12 object-contain transition-transform duration-500 group-hover:scale-110 ${item.rotation2}`}
                        />
                      </div>
                    </a>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="lg:hidden">
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 md:gap-6 max-w-4xl mx-auto">
              {items.map((item, i) => (
                <a
                  key={i}
                  href={item.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex h-28 sm:h-32 w-full items-center justify-center rounded-2xl border border-slate-100 bg-white p-6 shadow-sm hover:shadow-md transition-shadow duration-300"
                >
                  <img
                    src={item.image}
                    alt={`partner-${i + 1}`}
                    className="h-10 sm:h-12 w-auto object-contain transition-transform duration-300 active:scale-95"
                  />
                </a>
              ))}
            </div>
          </div>

          <div className="mt-4 md:mt-8 flex items-center justify-center gap-4 px-4 text-center">
             <div className="h-px w-8 md:w-12 bg-slate-200" />
             <span className="text-[9px] md:text-[10px] font-bold uppercase tracking-[0.3em] text-slate-300 whitespace-nowrap">Shared Impact</span>
             <div className="h-px w-8 md:w-12 bg-slate-200" />
          </div>

        </div>
      </div>
    </section>
  );
}