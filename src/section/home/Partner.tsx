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
      rotation: "rotate-[24deg]",
      rotation2: "-rotate-[24deg]",
      link: "https://24-sju.se/",
    },
    {
      image: "./assets/images/valuechart.png",
      rotation: "rotate-[50deg]",
      rotation2: "-rotate-[50deg]",
      link: "https://www.valueflowsoft.com/",
    },
    {
      image: "./assets/images/tanluxlogo.png",
      rotation: "rotate-[76deg]",
      rotation2: "-rotate-[76deg]",
      link: "https://tanlux.se/",
    },
    {
      image: "./assets/images/fpanalyzer.png",
      rotation: "rotate-[104deg]",
      rotation2: "-rotate-[104deg]",
      link: "https://www.fpanalyzer.se/",
    },
    {
      image: "./assets/images/storetech-logo1.png",
      rotation: "rotate-[130deg]",
      rotation2: "-rotate-[130deg]",
      link: "https://store-tech.se/",
    },
    {
      image: "./assets/images/thingsatweb.png",
      rotation: "rotate-[156deg]",
      rotation2: "-rotate-[156deg]",
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
    <section
      id="partner"
      className="relative overflow-hidden bg-white py-12 md:py-20 lg:py-7 font-sora"
    >
      <div className="relative mx-auto max-w-7xl px-6">
        <div className="flex flex-col gap-10 md:gap-16">
          <div className="text-center">
            <div className="flex items-center justify-center gap-4 mb-6">
              <span className="text-[11px] font-black uppercase tracking-[0.3em] text-[#2776ea]">
                partners
              </span>
            </div>

            <h2 className="text-3xl font-extrabold tracking-tight text-slate-900 sm:text-5xl lg:text-6xl leading-tight">
              Partnering with <br className="hidden sm:block" />
              <span className="bg-linear-to-r from-[#2776ea] to-[#76ea27] bg-clip-text text-transparent">
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
                className="relative mt-20 h-150 w-150 rounded-full border border-slate-100 bg-linear-to-b from-[#2776ea]/5 via-white to-white md:h-250 md:w-250 shadow-[inset_0_0_100px_rgba(51,111,165,0.05)]"
              >
                {/* <div className="absolute inset-[15%] rounded-full border border-dashed border-[#76ea27]/20 opacity-50" /> */}
                {items.map((item, i) => (
                  <div
                    key={i}
                    className={`absolute top-1/2 w-full -translate-y-3/4  ${item.rotation}`}
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
                        className="flex h-26 w-26 translate-x-16 items-center justify-center rounded-2xl bg-white border border-slate-100 shadow-[0_10px_30px_-10px_rgba(0,0,0,0.1)] transition-all duration-500 group-hover:-translate-y-2 group-hover:border-[#2776ea]/30 group-hover:shadow-[#2776ea]/10 group-hover:shadow-2xl"
                      >
                        <img
                          src={item.image}
                          alt={`partner-${i + 1}`}
                          className={`h-18 w-18 object-contain transition-transform duration-500 group-hover:scale-110 ${item.rotation2}`}
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
                  className="flex h-28 sm:h-32 w-full items-center justify-center rounded-2xl border border-slate-100 bg-white p-6 shadow-sm hover:border-[#2776ea]/20 hover:shadow-md transition-all duration-300"
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
        </div>
      </div>
    </section>
  );
}