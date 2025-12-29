"use client";

import { useState } from "react";
import { Globe2, MapPin, Navigation, Map as MapIcon } from "lucide-react";

export default function Branches() {
  const branches = [
    {
      id: "all",
      city: "All Locations",
      // This URL is a wide view of Tamil Nadu containing all three markers
      mapEmbed: "https://www.google.com/maps/d/embed?mid=1_YV73DNApxBopTdb3rgM35fFRAg6c4g&ehbc=2E312F&noprof=1",
    },
    {
      id: "salem",
      city: "Salem (HQ)",
      mapEmbed: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3906.4746102007784!2d77.87505197481997!3d11.731577088481279!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ba95526313cdf43%3A0xdf0cffa84e6434b1!2sWEBRONIC!5e0!3m2!1sen!2sin!4v1766765905867!5m2!1sen!2sin",
    },
    {
      id: "chennai",
      city: "Chennai Hub",
      mapEmbed: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3887.0189370136713!2d80.25863407484252!3d13.034465987286662!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a5267cc96461077%3A0xadef1544d1e6436a!2sWEBRONIC!5e0!3m2!1sen!2sin!4v1766766428696!5m2!1sen!2sin",},
    {
      id: "madurai",
      city: "Madurai Branch",
      mapEmbed: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3929.5414196922807!2d78.09488787479319!3d9.972058390131934!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3b00c9001e310635%3A0x3ff446b5d53a9b3e!2sWebronic%20Industries%20Private%20Limited!5e0!3m2!1sen!2sin!4v1766766532998!5m2!1sen!2sin",
    },
  ];

  const [currentMap, setCurrentMap] = useState(branches[0]);

  return (
    <section id="branches" className="relative bg-white py-16 md:py-24 font-sora overflow-hidden">
      <div className="container mx-auto px-6 max-w-7xl">
        
        {/* --- HEADER --- */}
        <div className="flex flex-col items-center text-center mb-12">
          <div className="mb-6 inline-flex items-center gap-2 rounded-full bg-blue-50 border border-blue-100 px-4 py-1.5 shadow-sm">
            <span className="flex h-2 w-2 rounded-full bg-[#4888e8] animate-pulse" />
            <span className="text-[10px] font-bold uppercase tracking-widest text-slate-600">
              Our Network
            </span>
          </div>

          <h2 className="text-4xl md:text-6xl font-black text-slate-900 tracking-tight max-w-4xl">
            Strategic Presence Across <br />
            <span style={{ color: '#4888e8' }}>Tamil Nadu</span>
          </h2>
        </div>

        {/* --- MAP NAVIGATION PILLS --- */}
        <div className="flex flex-wrap justify-center gap-3 mb-10">
          {branches.map((b) => (
            <button
              key={b.id}
              onClick={() => setCurrentMap(b)}
              className={`flex items-center gap-2 px-6 py-3 rounded-2xl text-[10px] font-black uppercase tracking-widest transition-all ${
                currentMap.id === b.id 
                ? "bg-slate-900 text-white shadow-xl shadow-slate-200" 
                : "bg-slate-50 text-slate-400 hover:bg-slate-100"
              }`}
            >
              {b.id === 'all' ? <MapIcon size={14} /> : <MapPin size={14} />}
              {b.city}
            </button>
          ))}
        </div>

        {/* --- FULL WIDTH REAL MAP --- */}
        <div className="group relative w-full h-[500px] md:h-[650px] rounded-[3rem] border border-slate-100 bg-slate-50 overflow-hidden shadow-2xl transition-all duration-500">
          
          <iframe
            title="Webronic Industries Locations"
            src={currentMap.mapEmbed}
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen={true}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            className="grayscale-[10%] contrast-[1.05] hover:grayscale-0 transition-all duration-700"
          />

          {/* Map Overlay Decor */}
          <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-10 w-full max-w-sm px-4">
             <div className="bg-white/90 backdrop-blur-md p-4 rounded-2xl border border-slate-100 flex items-center justify-between shadow-xl">
                <div className="flex items-center gap-3">
                   <div className="h-8 w-8 rounded-lg bg-[#4888e8] flex items-center justify-center text-white">
                      <Navigation size={16} />
                   </div>
                   <p className="text-[10px] font-black uppercase tracking-[0.2em] text-slate-900">
                     Showing: {currentMap.city}
                   </p>
                </div>
                <Globe2 size={18} className="text-[#09b125]" />
             </div>
          </div>
        </div>

        {/* Footer Accent */}
        
      </div>
    </section>
  );
}