"use client";

import { MapPin, Phone, ArrowUpRight, Building2 } from "lucide-react";

export default function Branches() {
  const branches = [
    {
      city: "Salem",
      type: "Headquarters",
      address: "1-718, Sannasi Muniyappan Kovil, Surappalli (PO), Mettur (TK), Jalakandapuram, Salem - 636501.",
      contact: "+91 72000 88500",
      mapUrl: "https://maps.google.com/?cid=16072502268513236145&g_mp=Cidnb29nbGUubWFwcy5wbGFjZXMudjEuUGxhY2VzLlNlYXJjaFRleHQ",
    },
    {
      city: "Madurai",
      type: "Regional Branch",
      address: "2nd Floor, 3/92B JS TOWER, Alanganallur Main Road, Sikkandar Savadi, Madurai, Tamil Nadu 625018.",
      contact: "+91 63833 26928",
      mapUrl: "https://maps.google.com/?cid=4608386065487272766&g_mp=Cidnb29nbGUubWFwcy5wbGFjZXMudjEuUGxhY2VzLlNlYXJjaFRleHQ",
    },
    {
      city: "Chennai",
      type: "Digital Hub",
      address: "A1 - No. 20, Sakthi Apartments, Cenotoph Road, Rathna Nagar, Teynampet, Chennai, Tamil Nadu 600004.",
      contact: "+91 72000 88500",
      mapUrl: "https://maps.google.com/?cid=12533259673318867818&g_mp=Cidnb29nbGUubWFwcy5wbGFjZXMudjEuUGxhY2VzLlNlYXJjaFRleHQ",
    },
  ];

  return (
    <section id="branches" className="relative overflow-hidden bg-white py-7">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_bottom_right,rgba(99,102,241,0.08),transparent_50%)]" />
      <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(rgba(15,23,42,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(15,23,42,0.03)_1px,transparent_1px)] bg-[size:72px_72px]" />

      <div className="relative mx-auto max-w-7xl px-6">
        <div className="mb-16 text-center lg:text-left">
          <div className="mb-6 inline-flex rounded-full border border-slate-200 bg-white/70 backdrop-blur px-4 py-1 text-xs font-bold uppercase tracking-widest text-blue-600 shadow-sm">
            Our Presence
          </div>
          <h2 className="text-4xl font-extrabold tracking-tight text-slate-900 sm:text-5xl">
            Strategic <span className="bg-gradient-to-r from-blue-600 to-indigo-400 bg-clip-text text-transparent">Locations</span>
          </h2>
          <p className="mt-4 max-w-2xl text-lg text-slate-600">
            Visit our offices across Tamil Nadu to discuss how Webronic can transform your business with retail automation and digital engineering.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {branches.map((branch, index) => (
            <div
              key={index}
              className="group relative flex flex-col justify-between rounded-[40px] border border-slate-200 bg-white p-8 transition-all duration-500 hover:-translate-y-2 hover:border-blue-300 hover:shadow-[0_40px_80px_-15px_rgba(0,0,0,0.08)]"
            >
              <div>
                <div className="mb-8 flex items-center justify-between">
                  <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-slate-50 text-blue-600 transition-colors group-hover:bg-blue-600 group-hover:text-white">
                    <Building2 size={28} strokeWidth={1.5} />
                  </div>
                  <a 
                    href={branch.mapUrl} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex h-10 w-10 items-center justify-center rounded-full border border-slate-100 text-slate-300 transition-all hover:bg-slate-900 hover:text-white"
                  >
                    <ArrowUpRight size={18} />
                  </a>
                </div>

                <div className="space-y-4">
                  <div>
                    <span className="text-[10px] font-black uppercase tracking-[0.2em] text-blue-500/60">
                      {branch.type}
                    </span>
                    <h3 className="text-3xl font-bold text-slate-900">{branch.city}</h3>
                  </div>

                  <div className="flex gap-3 text-slate-600">
                    <MapPin size={20} className="mt-1 flex-shrink-0 text-slate-300" />
                    <p className="text-sm leading-relaxed">
                      {branch.address}
                    </p>
                  </div>
                </div>
              </div>

              <div className="mt-10 pt-6 border-t border-slate-100">
                <a 
                  href={`tel:${branch.contact.replace(/\s/g, '')}`}
                  className="flex items-center gap-3 text-slate-900 hover:text-blue-600 transition-colors"
                >
                  <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-blue-50 text-blue-600">
                    <Phone size={14} fill="currentColor" />
                  </div>
                  <span className="font-bold tracking-tight">{branch.contact}</span>
                </a>
              </div>

              <div className="absolute bottom-0 left-1/2 h-1 w-0 -translate-x-1/2 bg-blue-600 transition-all duration-500 group-hover:w-1/3 rounded-t-full" />
            </div>
          ))}
        </div>

        <div className="mt-20 flex flex-col items-center justify-center space-y-4 text-center">
            <div className="h-px w-24 bg-gradient-to-r from-transparent via-slate-200 to-transparent" />
            <p className="text-sm font-medium text-slate-400">
              Webronic Industries Private Limited • Expanding Innovation Across India
            </p>
        </div>
      </div>
    </section>
  );
}