"use client";

import React from "react";
import Link from "next/link";
import {
  BarChart3,
  Layers,
  Store,
  ArrowUpRight,
  CheckCircle2,
  Globe,
  ChartLine
  
} from "lucide-react";

interface Product {
  id: string;
  name: string;
  tagline: string;
  description: string;
  features: string[];
  icon: React.ReactNode;
  color1: string;
  color2: string;
  image: string;
  link: string;
}

const products: Product[] = [
  {
    id: "value-chart",
    name: "Value Chart",
    tagline: "Intelligence Platform",
    description:
      "Enterprise-grade data visualization engine that transforms fragmented metrics into high-fidelity actionable insights for financial leadership.",
    features: ["Real-time Analytics", "Custom Reporting", "Forecasting"],
    icon: <BarChart3 size={24} />,
    color1: "#2776ea",
    color2: "#76ea27",
    image: "./assets/images/valuechart.png",
    link: "https://www.valueflowsoft.com/",
  },
  {
    id: "tanlux",
    name: "Tanlux",
    tagline: "Industrial ERP",
    description:
      "A specialized ecosystem for manufacturing workflow optimization, integrating IoT monitoring with core resource planning modules.",
    features: ["Supply Chain Sync", "IoT Integration", "Resource Tracking"],
    icon: <Layers size={24} />,
    color1: "#2776ea",
    color2: "#76ea27",
    image: "./assets/images/tanluxlogo.png",
    link: "https://tanlux.se/",
  },
  {
    id: "fpanalyxer",
    name: "Fp analyzer",
    tagline: "Industrial ERP",
    description:
      "A specialized ecosystem for manufacturing workflow optimization, integrating IoT monitoring with core resource planning modules.",
    features: ["Supply Chain Sync", "IoT Integration", "Resource Tracking"],
    icon: <ChartLine  size={24} />,
    color1: "#2776ea",
    color2: "#76ea27",
    image: "./assets/images/fpanalyzer.png",
    link: "https://www.fpanalyzer.se/",
  },
  {
    id: "storetech",
    name: "StoreTech",
    tagline: "Automated Retail",
    description:
      "Cloud-native retail infrastructure providing automated checkout solutions and synchronized inventory management across global storefronts.",
    features: ["AI Checkout", "Inventory Cloud", "Loyalty Systems"],
    icon: <Store size={24} />,
    color1: "#2776ea",
    color2: "#76ea27",
    image: "./assets/images/storetech-logo1.png",
    link: "https://store-tech.se/",
  },
];

export default function ProductSection() {
  return (
    <section
      id="products"
      className="relative overflow-hidden bg-white py-20 lg:py-32 font-sora"
    >
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute -top-24 -left-24 w-96 h-96 bg-blue-50/50 rounded-full blur-[100px]" />
        <div className="absolute top-1/2 -right-24 w-80 h-80 bg-green-50/50 rounded-full blur-[100px]" />
      </div>

      <div className="relative container mx-auto px-6 md:px-12 lg:px-24">
        <div className="mb-20 text-center lg:text-left max-w-4xl animate-card-entry">
          <div className="flex items-center gap-4 mb-6">
            <span className="text-[11px] font-black uppercase tracking-[0.3em] text-[#2776ea]">
              Our products
            </span>
          </div>
          <h2 className="text-4xl md:text-5xl font-black tracking-tight text-slate-900 leading-[1.1]">
            Transforming Industry with <br />
            <span className="bg-linear-to-r from-[#2776ea] to-[#76ea27] bg-clip-text text-transparent">
              Proprietary Products
            </span>
          </h2>
          <p className="mt-6 text-base md:text-lg text-slate-500 max-w-2xl font-medium leading-relaxed">
            Scalable software solutions meticulously engineered to bridge the
            gap between complex data and operational excellence.
          </p>
        </div>

        <div className="space-y-16 lg:space-y-24">
          {products.map((product, index) => (
            <div
              key={product.id}
              style={{ animationDelay: `${index * 150}ms` }}
              className={`animate-card-entry group relative flex flex-col items-center gap-10 lg:gap-16 lg:flex-row ${
                index % 2 !== 0 ? "lg:flex-row-reverse" : ""
              }`}
            >
              <div className="flex-1 space-y-6">
                <div className="space-y-3">
                  <div
                    className="flex h-12 w-12 items-center justify-center rounded-xl text-white shadow-lg transition-all duration-500 group-hover:rotate-6"
                    style={{ backgroundColor: product.color1 }}
                  >
                    {product.icon}
                  </div>
                  <div>
                    <h3 className="text-3xl font-extrabold text-slate-900 tracking-tight">
                      {product.name}
                    </h3>
                    <p
                      className="text-sm font-bold uppercase tracking-[0.2em]"
                      style={{ color: product.color2 }}
                    >
                      {product.tagline}
                    </p>
                  </div>
                </div>

                <p className="text-base md:text-lg leading-relaxed text-slate-600 font-medium">
                  {product.description}
                </p>

                <div className="flex flex-wrap gap-4">
                  {product.features.map((feature, i) => (
                    <div
                      key={i}
                      className="flex items-center gap-2  "
                    >
                      <CheckCircle2
                        size={16}
                        style={{ color: product.color1 }}
                      />
                      <span className="text-xs font-bold text-slate-700 uppercase tracking-wide">
                        {feature}
                      </span>
                    </div>
                  ))}
                </div>

                <div className="pt-4">
                  <Link
                    href={product.link}
                    target="_blank"
                    className="inline-flex items-center gap-2 rounded-full bg-[#2776ea] px-7 py-3.5 text-xs font-black uppercase tracking-widest text-white transition-all hover:bg-[#76ea27] hover:shadow-xl active:scale-95 group/btn"
                  >
                    Explore Live Platform
                    <ArrowUpRight
                      size={18}
                      className="transition-transform group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5"
                    />
                  </Link>
                </div>
              </div>

              <div className="flex-1 relative w-full max-w-135">
                <Link href={product.link} target="_blank">
                  <div className="absolute inset-0 rounded-full blur-[100px] opacity-10 transition-opacity group-hover:opacity-20" />
                  <div className="relative overflow-hidden rounded-4xl border border-slate-200 bg-white p-6  transition-all duration-700 group-hover:border-blue-200/50">
                    <div className="relative aspect-4/3 w-full overflow-hidden rounded-xl bg-slate-50">
                      <img
                        src={product.image}
                        alt={product.name}
                        className="h-full w-full object-contain p-8 transition-transform duration-1000 group-hover:scale-110"
                        onError={(e) => {
                          (e.target as any).src =
                            "https://via.placeholder.com/600x400/f8fafc/64748b?text=Product+UI";
                        }}
                      />
                    </div>

                    <div className="mt-4 flex items-center justify-between border-t border-slate-50 pt-4">
                      <div className="flex items-center gap-2">
                        <Globe size={14} className="text-slate-400" />
                        <span className="text-[10px] font-bold text-slate-400 uppercase tracking-tighter truncate max-w-37.5">
                          {product.link.replace("https://", "")}
                        </span>
                      </div>
                      <span className="text-[10px] font-black uppercase text-[#2776ea] tracking-widest flex items-center gap-1">
                        Active{" "}
                        <span className="h-1.5 w-1.5 rounded-full bg-[#76ea27]" />
                      </span>
                    </div>
                  </div>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
