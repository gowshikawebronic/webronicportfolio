"use client";

import { 
  MapPin, 
  Phone, 
  ArrowUpRight, 
  Building2, 
  ChevronRight,
  Globe2
} from "lucide-react";

export default function Branches() {
  const branches = [
    {
      city: "Salem",
      type: "Headquarters",
      address: "1-718, Sannasi Muniyappan Kovil, Surappalli (PO), Mettur (TK), Jalakandapuram, Salem - 636501.",
      contact: "+91 72000 88500",
      mapUrl: "https://maps.google.com/?q=Surappalli+Salem",
    },
    {
      city: "Madurai",
      type: "Regional Branch",
      address: "2nd Floor, 3/92B JS TOWER, Alanganallur Main Road, Sikkandar Savadi, Madurai, Tamil Nadu 625018.",
      contact: "+91 63833 26928",
      mapUrl: "https://maps.google.com/?q=Sikkandar+Savadi+Madurai",
    },
    {
      city: "Chennai",
      type: "Digital Hub",
      address: "A1 - No. 20, Sakthi Apartments, Cenotoph Road, Rathna Nagar, Teynampet, Chennai, Tamil Nadu 600004.",
      contact: "+91 72000 88500",
      mapUrl: "https://maps.google.com/?q=Teynampet+Chennai",
    },
  ];

  return (
    <section id="branches" className="relative overflow-hidden bg-white py-20 lg:py-32 font-sora">
      
      {/* Abstract Background Decor - Matching Projects Style */}
      <div className="absolute inset-0 pointer-events-none opacity-40">
        <div className="absolute top-1/4 -right-20 w-80 h-80 bg-[#4888e8]/10 rounded-full blur-[120px]" />
        <div className="absolute bottom-1/4 -left-20 w-80 h-80 bg-[#09b125]/10 rounded-full blur-[120px]" />
      </div>

      <div className="relative mx-auto px-6 md:px-12 lg:px-24">
        
        {/* Header Section - Aligned with Projects Left-Alignment */}
        <div className="mb-16 text-center lg:text-left max-w-4xl animate-card-entry">
          <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-slate-50 border border-slate-200 px-4 py-1.5">
            <span className="flex h-2 w-2 rounded-full bg-[#4888e8] animate-pulse" />
            <span className="text-[10px] font-bold uppercase tracking-widest text-slate-600">Our Presence</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-black tracking-tight text-slate-900 leading-[1.1]">
            Strategic Digital <br />
            <span className="bg-gradient-to-r from-[#4888e8] to-[#09b125] bg-clip-text text-transparent">Operations Hubs</span>
          </h2>
          <p className="mt-6 text-lg text-slate-500 font-medium max-w-2xl leading-relaxed">
            Visit our physical locations to experience how we merge industrial 
            logic with creative engineering across Tamil Nadu.
          </p>
        </div>

        {/* Content Container - Modern White Frame to Match Projects UI */}
        <div className="animate-fade-up">
          <div className="rounded-[40px] border border-slate-100 bg-white p-8 md:p-16 shadow-[0_40px_100px_-20px_rgba(0,0,0,0.03)]">
            
            <div className="mb-12 flex flex-col items-center justify-between gap-6 md:flex-row border-b border-slate-50 pb-10">
              <div className="text-center md:text-left">
                <div className="flex items-center gap-2 justify-center md:justify-start text-[#09b125]">
                   <Globe2 size={18} />
                   <span className="text-sm font-bold uppercase tracking-widest">Network Coverage</span>
                </div>
              </div>
              
              <div className="flex items-center gap-3 px-5 py-2.5 rounded-full bg-slate-50 text-[11px] font-black uppercase tracking-[0.2em] text-[#4888e8]">
                <span className="relative flex h-2.5 w-2.5">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#4888e8] opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-[#4888e8]"></span>
                </span>
                Active Hubs
              </div>
            </div>

            {/* Branches Grid */}
            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
              {branches.map((branch, index) => (
                <div
                  key={index}
                  className="group relative flex flex-col justify-between rounded-[2.5rem] border border-slate-50 bg-white p-8 transition-all duration-500 hover:shadow-[0_20px_50px_-10px_rgba(0,0,0,0.08)] hover:-translate-y-2 overflow-hidden"
                >
                  {/* Subtle Background Accent on Hover */}
                  <div className="absolute inset-0 bg-slate-50 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                  <div className="relative z-10">
                    <div className="mb-8 flex items-center justify-between">
                      <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-slate-50 text-[#4888e8] shadow-sm transition-all duration-500 group-hover:bg-[#4888e8] group-hover:text-white group-hover:rotate-6">
                        <Building2 size={26} strokeWidth={1.5} />
                      </div>
                      <a 
                        href={branch.mapUrl} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="flex h-10 w-10 items-center justify-center rounded-full border border-slate-100 text-slate-300 transition-all group-hover:bg-slate-900 hover:text-white"
                      >
                        <ArrowUpRight size={18} />
                      </a>
                    </div>

                    <div className="space-y-4">
                      <div>
                        <span className="text-[10px] font-black uppercase tracking-[0.2em] text-[#09b125]">
                          {branch.type}
                        </span>
                        <h3 className="text-3xl font-black text-slate-900 tracking-tight">{branch.city}</h3>
                      </div>

                      <div className="flex gap-3 text-slate-500">
                        <MapPin size={18} className="mt-1 flex-shrink-0 text-slate-300 group-hover:text-[#4888e8] transition-colors" />
                        <p className="text-sm font-medium leading-relaxed">
                          {branch.address}
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="relative z-10 mt-10 pt-6 border-t border-slate-50">
                    <a 
                      href={`tel:${branch.contact.replace(/\s/g, '')}`}
                      className="group/phone flex items-center justify-between text-slate-900 hover:text-[#4888e8] transition-colors"
                    >
                      <div className="flex items-center gap-3">
                        <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-blue-50 text-[#4888e8] group-hover/phone:bg-[#4888e8] group-hover/phone:text-white transition-all">
                          <Phone size={14} fill="currentColor" />
                        </div>
                        <span className="font-bold tracking-tight text-sm">{branch.contact}</span>
                      </div>
                      <ChevronRight size={14} className="opacity-0 -translate-x-2 transition-all group-hover/phone:opacity-100 group-hover/phone:translate-x-0" />
                    </a>
                  </div>
                  
                  {/* Decorative Progress Bar Line */}
                  <div className="absolute bottom-0 left-0 h-1 w-0 bg-gradient-to-r from-[#4888e8] to-[#09b125] transition-all duration-700 group-hover:w-full" />
                </div>
              ))}
            </div>
          </div>
        </div>

        
       
      </div>
    </section>
  );
}