"use client";

import type { ReactNode } from "react";
import {
  Smartphone,
  Globe,
  Server,
  Megaphone,
  Search,
  Cpu,
} from "lucide-react";

type Card = {
  id: number;
  icon: ReactNode;
  title: string;
  description: string;
  image: string;
};

export default function HowWorks() {
  const cards: Card[] = [
    {
      id: 1,
      icon: <Smartphone size={20} strokeWidth={1} />,
      title: "App Development",
      description:
        "We design and build high-performance mobile applications with world-class UI/UX and cross-platform scalability.",
      image: "/assets/images/appdevelopment.png",
    },
    {
      id: 2,
      icon: <Globe size={20} strokeWidth={1} />,
      title: "Web Development",
      description:
        "Scalable, SEO-driven websites and platforms engineered for performance and growth.",
      image: "/assets/images/webdevelopment.png",
    },
    {
      id: 3,
      icon: <Server size={20} strokeWidth={1} />,
      title: "Domain & Hosting",
      description:
        "Fast, secure, cloud-native hosting solutions powered by AWS and modern infrastructure.",
      image: "/assets/images/domainhosting.png",
    },
    {
      id: 4,
      icon: <Megaphone size={20} strokeWidth={1} />,
      title: "Digital Marketing",
      description:
        "Performance-driven marketing strategies that convert traffic into revenue.",
      image: "/assets/images/digitalmarketing.png",
    },
    {
      id: 5,
      icon: <Search size={20} strokeWidth={1} />,
      title: "SEO Optimization",
      description:
        "Data-driven SEO strategies that put your business on top of search results.",
      image: "/assets/images/seo.png",
    },
    {
      id: 6,
      icon: <Cpu size={20} strokeWidth={1} />,
      title: "IoT Solutions",
      description:
        "Smart IoT ecosystems for real-time monitoring, automation, and predictive insights.",
      image: "/assets/images/iot.png",
    },
  ];

  return (
    <section id="services" className="container mx-auto mt-24 px-6">
      <h3 className="mb-12 text-center text-3xl font-semibold   uppercase tracking-widest text-black">
            Our Services
          </h3>
      <div className="grid lg:mt-8 grid-cols-1 gap-14 md:grid-cols-2">
        {/* LEFT – Sticky heading */}
        <div className="sticky top-24 mt-10 self-start">
          

          <h1 className="text-center text-2xl font-semibold lg:text-5xl">
            Intelligent IT solutions
            <br />
            built for growth.
          </h1>

          <p className="mt-6 text-center text-gray-400">
            WEBRONIC delivers scalable digital solutions that automate,
            optimize, and future-proof your business.
          </p>
        </div>

        {/* RIGHT – Service cards */}
        <div className="grid gap-20 mt-20">
          {cards.map((card) => (
            <div
              key={card.id}
              className="sticky top-28 relative flex flex-col justify-between rounded-2xl border border-black/5 bg-gradient-to-b from-white to-gray-50 px-10 py-10 shadow-xl shadow-black/10 md:h-[420px]"
            >
              {/* Header */}
              <div className="flex flex-col gap-6 lg:flex-row lg:gap-10">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-blue-600 text-white">
                  {card.icon}
                </div>

                <div>
                  <h3 className="text-2xl font-medium">{card.title}</h3>
                  <p className="mt-2 text-lg text-gray-400">
                    {card.description}
                  </p>
                </div>
              </div>

              {/* Image */}
              <div className="mt-8 flex items-center justify-center">
                <img
                  src={card.image}
                  alt={card.title}
                  className="h-48 object-contain lg:h-60"
                />
              </div>

              {/* Index */}
              <div className="absolute right-5 top-5 flex h-8 w-8 items-center justify-center rounded-full bg-gray-200 text-sm text-gray-500">
                {card.id < 10 ? `0${card.id}` : card.id}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
