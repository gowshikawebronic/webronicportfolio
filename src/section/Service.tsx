"use client";

import React from "react";
import {
  Smartphone,
  Globe,
  Server,
  Megaphone,
  Search,
  Cpu,
  ArrowRight,
} from "lucide-react";
import Link from "next/link";

type Card = {
  id: number;
  icon: React.ReactNode;
  title: string;
  description: string;
  image: string;
};

export default function ServiceCarousel() {
  const cards: Card[] = [
    {
      id: 1,
      icon: <Smartphone size={24} />,
      title: "App Development",
      description:
        "High-performance mobile applications with world-class UI/UX.",
      image: "./assets/images/appdevelopment.png",
    },
    {
      id: 2,
      icon: <Globe size={24} />,
      title: "Web Development",
      description: "Scalable, SEO-driven platforms engineered for performance.",
      image: "./assets/images/webdevelopment.png",
    },
    {
      id: 3,
      icon: <Server size={24} />,
      title: "Domain & Hosting",
      description:
        "Fast, secure, cloud-native solutions powered by modern infrastructure.",
      image: "./assets/images/domainhosting.png",
    },
    {
      id: 4,
      icon: <Megaphone size={24} />,
      title: "Digital Marketing",
      description:
        "Performance-driven strategies that convert traffic into revenue.",
      image: "./assets/images/digitalmarketing.png",
    },
    {
      id: 5,
      icon: <Search size={24} />,
      title: "SEO Optimization",
      description:
        "Data-driven strategies that put your business on top of search.",
      image: "./assets/images/seo.png",
    },
    {
      id: 6,
      icon: <Cpu size={24} />,
      title: "IoT Solutions",
      description:
        "Smart IoT ecosystems for monitoring and predictive insights.",
      image: "./assets/images/iot.png",
    },
  ];

  return (
    <section className="bg-white py-16 md:py-24 mx-auto container overflow-hidden font-sora ">
      {/* Centered Heading Section */}
      <div className="container mx-auto px-6 mb-12 md:mb-20 text-center">
        <div className="flex items-center  justify-center gap-4 mb-6">
              <span className="text-[11px] font-black uppercase tracking-[0.3em] text-[#336fa5]">
                Our Services
              </span>
            </div>
          <h2 className="text-3xl font-extrabold tracking-tight text-slate-900 sm:text-5xl lg:text-6xl leading-tight">
             Intelligent Solutions <br className="hidden sm:block" />
              <span className="bg-gradient-to-r from-[#336fa5] to-[#5ba12d] bg-clip-text text-transparent">
                Built for Growth
              </span>
            </h2>
        {/* <h2 className="text-3xl md:text-6xl font-black text-slate-900 tracking-tight leading-tight">
          Intelligent Solutions <br />
          <span className="text-[#336fa5]">Built for Growth.</span>
        </h2> */}

        <p className="mt-6 text-sm md:text-lg text-slate-500 max-w-2xl mx-auto font-medium">
          WEBRONIC delivers scalable digital solutions that automate, optimize,
          and future-proof your business.
        </p>

        <div className="mt-8">
          <Link
            href="/service"
            className="group inline-flex items-center gap-2 text-sm font-bold text-[#336fa5] hover:underline"
          >
            Explore All Services
            <ArrowRight
              size={18}
              className="group-hover:translate-x-1 transition-transform"
            />
          </Link>
        </div>
      </div>

      {/* GAPLESS INFINITE CAROUSEL */}
      <div className="relative flex pause-animation group">
        {/* Masking gradients for smooth edges */}
        <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-20 md:w-40 bg-gradient-to-r from-white to-transparent" />
        <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-20 md:w-40 bg-gradient-to-l from-white to-transparent" />

        <div className="flex gap-6 animate-carousel-x">
          {/* We repeat the array once more (total 3 times) to ensure there is never a gap on large screens */}
          {[...cards, ...cards, ...cards].map((card, index) => (
            <div
              key={`${card.id}-${index}`}
              className="w-[280px] md:w-[400px] shrink-0 group/card relative overflow-hidden rounded-[2.5rem] border border-slate-100 bg-slate-50/50 p-8 md:p-10 transition-all duration-500 hover:bg-white hover:shadow-2xl hover:shadow-blue-500/10 hover:-translate-y-2"
            >
              <div className="relative z-10 flex flex-col h-full">
                <div
                  className="mb-6 flex h-14 w-14 items-center justify-center rounded-2xl text-white shadow-lg transition-transform duration-500 group-hover/card:rotate-6 group-hover/card:scale-110"
                  style={{
                    backgroundColor: index % 2 === 0 ? "#336fa5" : "#09b125",
                  }}
                >
                  {card.icon}
                </div>

                <h3 className="text-xl md:text-2xl font-black text-slate-900 mb-3 tracking-tight">
                  {card.title}
                </h3>
                <p className="text-xs md:text-sm font-semibold text-slate-400 leading-relaxed mb-8">
                  {card.description}
                </p>

                <div className="mt-auto relative">
                  <img
                    src={card.image}
                    alt={card.title}
                    className="h-32 md:h-48 w-full object-contain transition-transform duration-1000 group-hover/card:scale-110 drop-shadow-2xl"
                  />
                </div>
              </div>

              {/* Decorative Corner Accent */}
              <div
                className="absolute top-0 right-0 -mr-10 -mt-10 h-32 w-32 rounded-full blur-3xl opacity-0 group-hover/card:opacity-20 transition-opacity duration-500"
                style={{
                  backgroundColor: index % 2 === 0 ? "#4888e8" : "#09b125",
                }}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
