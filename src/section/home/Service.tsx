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
  path: string; // Added path property
};

export default function ServiceCarousel() {
  const cards: Card[] = [
    {
      id: 1,
      icon: <Smartphone size={24} />,
      title: "Custom Software Development",
      description:
        "Build enterprise-grade applications tailored to your unique requirements. Full-stack development expertise across web, mobile, and IoT platforms",
      image: "./assets/images/appdevelopment.png",
      path: "/service-section/custom-software", // Dummy path
    },
    {
      id: 2,
      icon: <Globe size={24} />,
      title: "AI & Machine Learning",
      description:
        "Transform your business with intelligent automation and predictive analytics. Our AI-first approach embeds machine learning across all solutions.",
      image: "./assets/images/webdevelopment.png",
      path: "/service-section/ai-machine-learning", // Dummy path
    },
    {
      id: 3,
      icon: <Server size={24} />,
      title: "Cloud & DevOps",
      description:
        "Accelerate digital transformation with cloud-native architectures. We design scalable, secure cloud solutions across AWS, Azure, and Google Cloud platforms",
      image: "./assets/images/domainhosting.png",
      path: "/service-section/cloud-devops", // Dummy path
    },
    {
      id: 4,
      icon: <Megaphone size={24} />,
      title: "Digital Transformation",
      description:
        "Reimagine your business processes with cutting-edge technology. From strategy to execution, we guide organizations through comprehensive digital evolution",
      image: "./assets/images/digitalmarketing.png",
      path: "/service-section/digital-transformation", // Dummy path
    },
    {
      id: 5,
      icon: <Search size={24} />,
      title: "Cybersecurity",
      description:
        "Protect your digital assets with enterprise-grade security solutions. From threat assessment to managed security operations, we safeguard your business",
      image: "./assets/images/seo.png",
      path: "/service-section/cybersecurity", // Dummy path
    },
    {
      id: 6,
      icon: <Cpu size={24} />,
      title: "IoT & Industry 4.0",
      description:
        "Connect your operations with intelligent IoT ecosystems. Real-time monitoring, predictive maintenance, and automated workflows for manufacturing excellence",
      image: "./assets/images/iot.png",
      path: "/service-section/iot-industry-4", // Dummy path
    },
  ];

  return (
    <section className="bg-white py-16 md:py-24 mx-auto container overflow-hidden font-sora ">
      <div className="container mx-auto px-6 mb-12 md:mb-20 text-center">
        <div className="flex items-center  justify-center gap-4 mb-6">
          <span className="text-[11px] font-black uppercase tracking-[0.3em] text-[#2776ea]">
            Our Services
          </span>
        </div>
        <h2 className="text-3xl font-extrabold tracking-tight text-slate-900 sm:text-5xl lg:text-6xl leading-tight">
          Intelligent Solutions <br className="hidden sm:block" />
          <span className="bg-linear-to-r from-[#2776ea] to-[#76ea27] bg-clip-text text-transparent">
            Built for Growth
          </span>
        </h2>

        <p className="mt-6 text-sm md:text-lg text-slate-500 max-w-2xl mx-auto font-medium">
          WEBRONIC delivers scalable digital solutions that automate, optimize,
          and future-proof your business.
        </p>

        <div className="mt-8">
          <Link
            href="/service"
            className="group inline-flex items-center gap-2 text-sm font-bold text-[#2776ea] hover:underline"
          >
            Explore All Services
            <ArrowRight
              size={18}
              className="group-hover:translate-x-1 transition-transform"
            />
          </Link>
        </div>
      </div>

      <div className="relative flex pause-animation group">
        <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-20 md:w-40 bg-linear-to-r from-white to-transparent" />
        <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-20 md:w-40 bg-linear-to-l from-white to-transparent" />

        <div className="flex gap-6 animate-carousel-x">
          {[...cards, ...cards, ...cards].map((card, index) => (
            <div
              key={`${card.id}-${index}`}
              className="w-70 md:w-100 shrink-0 group/card relative overflow-hidden rounded-[2.5rem] border border-slate-100 bg-slate-50/50 p-8 md:p-10 transition-all duration-500 hover:bg-white hover:shadow-2xl hover:shadow-blue-500/10 hover:-translate-y-2"
            >
              <div className="relative z-10 flex flex-col h-full">
                <div
                  className="mb-6 flex h-14 w-14 items-center justify-center rounded-2xl text-white shadow-lg transition-transform duration-500 group-hover/card:rotate-6 group-hover/card:scale-110"
                  style={{
                    backgroundColor: index % 2 === 0 ? "#2776ea" : "#76ea27",
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

                <div className="mt-auto relative flex flex-col items-center">
                  <img
                    src={card.image}
                    alt={card.title}
                    className="h-32 md:h-48 w-full object-contain transition-transform duration-1000 group-hover/card:scale-110 drop-shadow-2xl mb-6"
                  />

                  {/* --- UPDATED: LEARN MORE LINK WITH DYNAMIC PATH --- */}
                  <Link
                    href={card.path}
                    className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-[#2776ea] hover:text-[#76ea27] transition-colors"
                  >
                    Learn More <ArrowRight size={14} />
                  </Link>
                </div>
              </div>

              <div
                className="absolute top-0 right-0 -mr-10 -mt-10 h-32 w-32 rounded-full blur-3xl opacity-0 group-hover/card:opacity-20 transition-opacity duration-500"
                style={{
                  backgroundColor: index % 2 === 0 ? "#2776ea" : "#76ea27",
                }}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}