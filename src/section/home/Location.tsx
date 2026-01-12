"use client";

import { useState } from "react";
import { Globe2, MapPin, Navigation, Building2, ArrowRight } from "lucide-react";

export default function Branches() {
  const branches = [
    {
      id: "all",
      city: "Our Branches",
      mapEmbed: "https://www.google.com/maps/d/embed?mid=1_YV73DNApxBopTdb3rgM35fFRAg6c4g&ehbc=2E312F&noprof=1",
    },
  ];

  const [currentMap, setCurrentMap] = useState(branches[0]);
  const isAll = currentMap.id === "all";

  return (
    <section
      id="location"
      className="relative bg-white py-16 md:py-24 font-sora overflow-hidden"
    >
      <div className="container mx-auto px-6 max-w-7xl">
        
        {/* --- HEADER --- */}
        <div className="flex flex-col items-center text-center mb-12">
          <div className="flex items-center justify-center gap-4 mb-6">
            <span className="text-[11px] font-black uppercase tracking-[0.3em] text-[#2776ea]">
              locations
            </span>
          </div>

          <h2 className="text-3xl font-extrabold tracking-tight text-slate-900 sm:text-5xl lg:text-6xl leading-tight">
            Global    {" "} 
            <span className="bg-gradient-to-r from-[#2776ea] to-[#76ea27] bg-clip-text text-transparent">
              Presence
            </span>
          </h2>
        </div>

        <div className="group relative w-full h-125 md:h-162.5 rounded-[3rem] border border-slate-100 bg-slate-50 overflow-hidden shadow-2xl transition-all duration-500 mb-16">
          <iframe
            title="Webronic Industries Locations"
            src={currentMap.mapEmbed}
            width="100%"
            style={{
              border: 0,
              marginTop: isAll ? "-60px" : "0px",
              height: isAll ? "calc(100% + 60px)" : "100%",
            }}
            allowFullScreen={true}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            className="grayscale-10 contrast-[1.05] hover:grayscale-0 transition-all duration-700"
          />

          <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-10 w-full max-w-sm px-4">
            <div className="bg-white/90 backdrop-blur-md p-4 rounded-2xl border border-slate-100 flex items-center justify-between shadow-xl">
              <div className="flex items-center gap-3">
                <div className="h-8 w-8 rounded-lg bg-[#2776ea] flex items-center justify-center text-white">
                  <Navigation size={16} />
                </div>
                <p className="text-[10px] font-black uppercase tracking-[0.2em] text-slate-900">
                  Showing: {currentMap.city}
                </p>
              </div>
              <Globe2 size={18} className="text-[#76ea27]" />
            </div>
          </div>
        </div>

        {/* --- NEW: DETAILED LOCATIONS GRID --- */}
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20">
          
          {/* India Operations */}
          <div>
            <h3 className="flex items-center gap-3 text-xl font-black text-slate-900 mb-8">
              <span className="h-8 w-1 bg-[#2776ea] rounded-full" />
              India Operations
            </h3>
            
            <div className="space-y-6">
              {[
                { title: "Madurai R&D Operations", addr: "JS Tower, Alanganallur Main Road, Sikkandar Savadi - 625018" },
                { title: "Chennai Admin Hub", addr: "A1-20, Sakthi Apartments, Cenotoph Road, Teynampet - 600004" },
                { title: "Salem Digital Hub", addr: "1-718, Sannasi Muniyappan Kovil, Surappalli - 636501" }
              ].map((loc, idx) => (
                <div key={idx} className="group flex items-start gap-4 p-6 rounded-3xl bg-slate-50 border border-slate-100 hover:bg-white hover:shadow-xl hover:shadow-blue-900/5 transition-all duration-300">
                  <div className="shrink-0 h-10 w-10 rounded-xl bg-white border border-slate-100 flex items-center justify-center text-[#2776ea] shadow-sm group-hover:bg-[#2776ea] group-hover:text-white transition-colors">
                    <MapPin size={18} />
                  </div>
                  <div>
                    <h4 className="text-sm font-black text-slate-900 mb-2">{loc.title}</h4>
                    <p className="text-xs font-medium text-slate-500 leading-relaxed max-w-xs">
                      {loc.addr}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* International & Global Reach */}
          <div className="flex flex-col gap-8">
            
            {/* European Operations */}
            <div>
              <h3 className="flex items-center gap-3 text-xl font-black text-slate-900 mb-8">
                <span className="h-8 w-1 bg-[#76ea27] rounded-full" />
                European Operations
              </h3>
              <div className="p-8 rounded-[2.5rem] bg-slate-900 text-white relative overflow-hidden">
                <div className="relative z-10">
                  <p className="text-[10px] font-black uppercase tracking-widest text-[#76ea27] mb-3">Strategic Partner</p>
                  <h4 className="text-2xl font-black mb-4">Thingsatweb Sweden AB</h4>
                  <p className="text-sm font-medium text-slate-400 leading-relaxed">
                    Collaborating to bring Scandinavian innovation standards to global digital solutions.
                  </p>
                </div>
                <Building2 className="absolute -bottom-6 -right-6 text-white/5 w-32 h-32" />
              </div>
            </div>

            {/* Global Reach */}
            <div className="flex-1 bg-gradient-to-br from-[#2776ea]/5 to-transparent rounded-[2.5rem] p-8 border border-[#2776ea]/10">
               <h3 className="flex items-center gap-2 text-sm font-black text-slate-900 uppercase tracking-widest mb-4">
                 <Globe2 size={16} className="text-[#2776ea]" /> Global Reach
               </h3>
               <p className="text-sm font-medium text-slate-600 leading-relaxed">
                 Serving clients across countries spanning <span className="font-bold text-slate-900">North America, Europe, Asia-Pacific</span>, and <span className="font-bold text-slate-900">Middle East</span> regions.
               </p>
              
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}