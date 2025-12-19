"use client";

import { useEffect, useRef, useState } from "react";
import { useParallax } from "react-scroll-parallax";

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
      rotation: "rotate-[40deg]",
      rotation2: "-rotate-[40deg]",
      link: "https://24-sju.se/",
    },
    {
      image: "./assets/images/slattens.png",
      rotation: "rotate-[65deg]",
      rotation2: "-rotate-[40deg]",
      link: "https://www.slattensfoder.se/",
    },
    {
      image: "./assets/images/tanluxlogo.png",
      rotation: "rotate-[90deg]",
      rotation2: "-rotate-[90deg]",
      link: "https://tanlux.se/",
    },
    {
      image: "./assets/images/matmed.png",
      rotation: "rotate-[115deg]",
      rotation2: "-rotate-[90deg]",
      link: "https://norlandiaforskolor.se/matmedsmak",
    },
    {
      image: "./assets/images/storetech-logo-black.png",
      rotation: "rotate-[140deg]",
      rotation2: "-rotate-[140deg]",
      link: "https://store-tech.se/",
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
    <section id="partner" className="mt-16">
      <div className="container mx-auto px-4">
        <div className="flex flex-col gap-6 py-12">
          <h1 className="mx-auto text-center text-2xl font-semibold md:text-4xl">
            PARTNERS
            <br />
            <span className="text-lg font-normal text-gray-500">
              Partnering with innovative brands to deliver scalable, reliable,
              and future-ready digital solutions.
            </span>
          </h1>
          <div className="hidden md:block">
            <div className="relative flex h-65 w-full justify-center overflow-hidden md:h-[360px]">
              <div
                ref={ref}
                className="relative mt-10 h-[500px] w-[500px] rounded-full bg-gradient-to-b from-blue-50 via-white to-white md:h-[1000px] md:w-[1000px]"
              >
                {items.map((item, i) => (
                  <div
                    key={i}
                    className={`absolute top-1/2 w-full -translate-y-1/2 ${item.rotation}`}
                  >
                    <a
                      href={item.link}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <div
                        ref={(el) => {
                          eleRefs.current[i] = el;
                        }}
                        className="flex h-10 w-10 translate-x-16 items-center justify-center rounded-xl   bg-slate-50 shadow-lg transition-transform hover:scale-105 md:h-20 md:w-20"
                      >
                        <img
                          src={item.image}
                          alt={`partner-${i + 1}`}
                          className={`h-12 w-auto ${item.rotation2} absolute object-contain md:h-14`}
                        />
                      </div>
                    </a>
                  </div>
                ))}
              </div>
            </div>
          </div>
          <div className="md:hidden grid grid-cols-3 gap-6 place-items-center mt-8">
            {items.map((item, i) => (
              <a
                key={i}
                href={item.link}
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-16 w-16 items-center justify-center rounded-xl bg-white shadow-md"
              >
                <img
                  src={item.image}
                  alt={`partner-${i + 1}`}
                  className="h-10 object-contain"
                />
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
