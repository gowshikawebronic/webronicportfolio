"use client";
 
import { RELATED_SERVICES_DATA } from "@/data/Digital/RELATED_SERVICES_DATA";
import { ArrowRight } from "lucide-react";
import Link from "next/link";

export default function RelatedServices() {
  return (
    <section className="py-20 bg-slate-50 border-t border-slate-200 font-sora">
      <div className="container mx-auto px-6 max-w-7xl">
        
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-2xl md:text-3xl font-black text-slate-900 mb-4">
            Explore Related <span className="text-[#2776ea]">Capabilities</span>
          </h2>
          <p className="text-slate-500 max-w-2xl mx-auto">
            Discover how our other core services can complement your digital transformation journey.
          </p>
        </div>

        {/* Services Grid - Using Flex Wrap for better centering of 5 items */}
        <div className="flex flex-wrap justify-center gap-6">
          {RELATED_SERVICES_DATA.map((service) => {
            const Icon = service.icon;
            
            return (
              <Link 
                key={service.id} 
                href={service.href}
                className="group relative w-full sm:w-[calc(50%-12px)] lg:w-[calc(33.33%-16px)] xl:w-[calc(20%-20px)] bg-white p-6 rounded-2xl border border-slate-200 shadow-sm hover:shadow-xl hover:shadow-blue-500/10 hover:-translate-y-1 transition-all duration-300 flex flex-col items-center text-center"
              >
                {/* Hover Top Border */}
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-[#2776ea] to-[#76ea27] scale-x-0 group-hover:scale-x-100 transition-transform duration-300 rounded-t-2xl" />

                <div className="w-12 h-12 bg-slate-50 rounded-xl flex items-center justify-center text-slate-400 group-hover:bg-[#2776ea] group-hover:text-white transition-all duration-300 mb-4">
                  <Icon size={24} />
                </div>
                
                <h3 className="text-sm font-bold text-slate-800 mb-4 h-10 flex items-center justify-center">
                  {service.title}
                </h3>

                <div className="mt-auto opacity-0 group-hover:opacity-100 transform translate-y-2 group-hover:translate-y-0 transition-all duration-300">
                  <span className="text-xs font-bold text-[#2776ea] flex items-center gap-1">
                    View Service <ArrowRight size={12} />
                  </span>
                </div>
              </Link>
            );
          })}
        </div>

      </div>
    </section>
  );
}