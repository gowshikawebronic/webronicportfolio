"use client";

import { useState } from "react";
import { Globe2, MapPin, Navigation, Map as MapIcon } from "lucide-react";

export default function Branches() {
  const branches = [
    {
      id: "all",
      city: "Our Branches",
      mapEmbed:
        "https://www.google.com/maps/d/embed?mid=1_YV73DNApxBopTdb3rgM35fFRAg6c4g&ehbc=2E312F&noprof=1",
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
        <div className="flex flex-col items-center text-center mb-12">
         <div className="flex items-center justify-center gap-4 mb-6">
              <span className="text-[11px] font-black uppercase tracking-[0.3em] text-[#4a7dc0]">
                Location
              </span>
            </div>

         
           <h2 className="text-3xl font-extrabold tracking-tight text-slate-900 sm:text-5xl lg:text-6xl leading-tight">
              Strategic  {" "} 
              <span className="bg-linear-to-r from-[#4a7dc0] to-[#63b344] bg-clip-text text-transparent">
               Presence
              </span>
            </h2>
        </div>

       

        <div className="group relative w-full h-125 md:h-162.5 rounded-[3rem] border border-slate-100 bg-slate-50 overflow-hidden shadow-2xl transition-all duration-500">
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
                <div className="h-8 w-8 rounded-lg bg-[#4a7dc0] flex items-center justify-center text-white">
                  <Navigation size={16} />
                </div>
                <p className="text-[10px] font-black uppercase tracking-[0.2em] text-slate-900">
                  Showing: {currentMap.city}
                </p>
              </div>
              <Globe2 size={18} className="text-[#63b344]" />
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
