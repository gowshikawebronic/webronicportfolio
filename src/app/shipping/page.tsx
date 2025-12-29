"use client";

import React from "react";
import { 
  Truck, 
  RefreshCcw, 
  Globe, 
  Zap, 
  Package, 
  ShieldCheck, 
  Clock, 
  Mail, 
  Phone,
  ArrowRight,
  AlertCircle,
  FileCode
} from "lucide-react";

export default function ShippingAndExchange() {
  // Ordered sections for the sidebar navigation
  const sections = [
    { id: "nature", title: "1. Nature of Services", icon: Zap },
    { id: "digital", title: "2. Digital Delivery", icon: FileCode },
    { id: "physical", title: "3. Physical Shipping", icon: Package },
    { id: "timeline", title: "4. Delivery Timeline", icon: Clock },
    { id: "damage", title: "5. Damaged Shipments", icon: ShieldCheck },
    { id: "exchange", title: "6. Exchange Policy", icon: RefreshCcw },
    { id: "international", title: "7. International", icon: Globe },
  ];

  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <main className="bg-white font-sora pt-24 pb-20">
      {/* --- HERO HEADER --- */}
      <section className="relative overflow-hidden bg-slate-50 py-20 border-b border-slate-100">
        <div className="absolute inset-0 pointer-events-none opacity-40">
           <div className="absolute top-0 right-0 w-96 h-96 bg-[#4888e8]/10 rounded-full blur-[120px]" />
           <div className="absolute bottom-0 left-0 w-96 h-96 bg-[#09b125]/10 rounded-full blur-[120px]" />
        </div>
        
        <div className="relative mx-auto max-w-5xl px-6">
          <div className="inline-flex items-center gap-2 rounded-full bg-white border border-slate-200 px-4 py-1.5 mb-6 shadow-sm">
            <Truck size={14} className="text-[#4888e8]" />
            <span className="text-[10px] font-black uppercase tracking-widest text-slate-600">Logistics & Revisions</span>
          </div>
          <h1 className="text-4xl md:text-6xl font-black text-slate-900 tracking-tighter leading-tight">
            Shipping & <span className="text-[#4888e8]">Exchange</span>
          </h1>
          <div className="mt-6 flex flex-wrap items-center gap-6 text-sm font-medium text-slate-500">
            <div className="flex items-center gap-2">
              <Clock size={16} /> <span>Last Updated: Dec 18, 2025</span>
            </div>
            <div className="flex items-center gap-2">
              <Truck size={16} /> <span>Entity: StoreTech</span>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-20">
        <div className="grid lg:grid-cols-[280px_1fr] gap-16">
          
          {/* --- STICKY SIDEBAR --- */}
          <aside className="hidden lg:block sticky top-32 h-fit space-y-2">
            <p className="text-[10px] font-black uppercase tracking-[0.2em] text-slate-400 mb-6 px-4">Policy Segments</p>
            {sections.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className="w-full flex items-center gap-3 px-4 py-3 rounded-xl text-sm font-bold text-slate-500 hover:bg-slate-50 hover:text-[#4888e8] transition-all group text-left"
              >
                <item.icon size={18} className="group-hover:scale-110 transition-transform" />
                {item.title}
              </button>
            ))}
          </aside>

          {/* --- POLICY CONTENT --- */}
          <div className="space-y-16">
            
            {/* Section 1: Nature of Service */}
            <div id="nature" className="scroll-mt-32">
              <div className="bg-[#4888e8]/5 rounded-3xl p-8 border border-[#4888e8]/10">
                <h2 className="text-xl font-black text-slate-900 mt-0 mb-4 flex items-center gap-2">
                  <Zap className="text-[#4888e8]" /> 1. Nature of Services
                </h2>
                <p className="text-slate-600 font-medium leading-relaxed m-0">
                  StoreTech primarily provides digital technology services, software solutions, 
                  and professional consulting. This policy addresses the delivery of physical 
                  materials and exchange of services where applicable.
                </p>
              </div>
            </div>

            {/* Section 2: Digital Delivery */}
            <div id="digital" className="scroll-mt-32">
              <h3 className="text-xl font-black uppercase tracking-widest text-[#4888e8] mb-6 flex items-center gap-3">
                <FileCode /> 2. Digital Deliverables
              </h3>
              <div className="grid sm:grid-cols-2 gap-4">
                {[
                  { label: "Software & Code", val: "GitHub, GitLab, or secure repositories" },
                  { label: "Reports", val: "Secure cloud platforms or encrypted email" },
                  { label: "Timeline", val: "Immediate to 48 hours post-milestone" },
                  { label: "Fees", val: "No shipping charges for electronic delivery" }
                ].map((item, i) => (
                  <div key={i} className="p-5 rounded-2xl bg-slate-50 border border-slate-100">
                    <p className="text-[10px] font-black text-[#09b125] uppercase mb-1">{item.label}</p>
                    <p className="text-sm font-bold text-slate-700">{item.val}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Section 3: Physical Shipping */}
            <div id="physical" className="scroll-mt-32">
              <h3 className="text-xl font-black uppercase tracking-widest text-[#4888e8] mb-6 flex items-center gap-3">
                <Package /> 3. Physical Shipping
              </h3>
              <p className="text-slate-500 font-medium leading-relaxed mb-6">
                When physical items (hardware, documentation, or media) need to be shipped, we ensure secure packaging, tracking information, and insurance for high-value items.
              </p>
              <div className="grid sm:grid-cols-3 gap-4">
                <div className="p-4 rounded-2xl bg-white border border-slate-100 text-center">
                  <p className="text-xs font-bold text-slate-900">Secure Packaging</p>
                </div>
                <div className="p-4 rounded-2xl bg-white border border-slate-100 text-center">
                  <p className="text-xs font-bold text-slate-900">Tracking Provided</p>
                </div>
                <div className="p-4 rounded-2xl bg-white border border-slate-100 text-center">
                  <p className="text-xs font-bold text-slate-900">Insured Goods</p>
                </div>
              </div>
            </div>

            {/* Section 4: Timeline Table */}
            <div id="timeline" className="scroll-mt-32">
              <h3 className="text-xl font-black uppercase tracking-widest text-[#4888e8] mb-6 flex items-center gap-3">
                <Clock /> 4. Delivery Timeline & Tracking
              </h3>
              <div className="overflow-hidden rounded-3xl border border-slate-100 shadow-sm">
                <table className="w-full text-left border-collapse">
                  <thead className="bg-slate-50">
                    <tr>
                      <th className="px-6 py-4 text-[10px] font-black uppercase text-slate-400">Location</th>
                      <th className="px-6 py-4 text-[10px] font-black uppercase text-slate-400">Estimated Days</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-50">
                    <tr>
                      <td className="px-6 py-4 text-sm font-bold text-slate-700">Metro Cities (India)</td>
                      <td className="px-6 py-4 text-sm text-[#4888e8] font-bold">3–5 Business Days</td>
                    </tr>
                    <tr>
                      <td className="px-6 py-4 text-sm font-bold text-slate-700">Tier 2/3 Cities</td>
                      <td className="px-6 py-4 text-sm text-[#4888e8] font-bold">5–7 Business Days</td>
                    </tr>
                    <tr>
                      <td className="px-6 py-4 text-sm font-bold text-slate-700">International</td>
                      <td className="px-6 py-4 text-sm text-[#09b125] font-bold">10–20 Business Days</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>

            {/* Section 6: Damage Policy */}
            <div id="damage" className="scroll-mt-32">
              <h3 className="text-xl font-black uppercase tracking-widest text-[#4888e8] mb-6 flex items-center gap-3">
                <ShieldCheck /> 5. Damaged or Lost Shipments
              </h3>
              <div className="p-6 rounded-3xl border-2 border-dashed border-slate-100 space-y-4">
                <p className="text-sm text-slate-500 leading-relaxed font-medium">
                  If you receive damaged items, document the damage with photographs and contact us within **24 hours** at <span className="text-[#4888e8] font-bold">support@webronic.com</span>.
                </p>
                <p className="text-sm text-slate-500 leading-relaxed font-medium">
                  Lost shipments will be investigated with our courier partners, and replacement shipments will be arranged upon claim resolution (7–14 days).
                </p>
              </div>
            </div>

            {/* Section 7: Exchange Policy */}
            <div id="exchange" className="scroll-mt-32">
              <h3 className="text-xl font-black uppercase tracking-widest text-[#4888e8] mb-6 flex items-center gap-3">
                <RefreshCcw /> 6. Exchange Policy
              </h3>
              <div className="space-y-6">
                <div className="bg-white border border-slate-100 rounded-3xl p-8 shadow-sm">
                  <h4 className="text-lg font-extrabold text-slate-900 mb-4">Physical Items</h4>
                  <p className="text-sm text-slate-500 leading-relaxed mb-6">
                    Exchanges are available within **7 days of delivery** for defective, 
                    wrongly shipped, or damaged items. Items must be unused and 
                    in original packaging.
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {["Manufacturing Defects", "Shipping Damage", "Incorrect Item"].map((tag) => (
                      <span key={tag} className="px-3 py-1 rounded-full bg-blue-50 text-[#4888e8] text-[10px] font-bold uppercase">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="bg-slate-50 rounded-3xl p-8 border border-slate-100">
                  <h4 className="text-lg font-extrabold text-slate-900 mb-4">Service Scope Changes</h4>
                  <p className="text-sm text-slate-500 leading-relaxed">
                    Digital service modifications involve tier upgrades/downgrades or 
                    technology platform switches within the project scope. Changes 
                    must be documented via a formal change order.
                  </p>
                </div>
              </div>
            </div>

            {/* Section 9: International */}
            <div id="international" className="scroll-mt-32">
              <h3 className="text-xl font-black uppercase tracking-widest text-[#4888e8] mb-6 flex items-center gap-3">
                <Globe /> 7. International Shipments
              </h3>
              <div className="p-8 rounded-3xl bg-slate-50 border border-slate-100">
                <p className="text-sm text-slate-500 leading-relaxed mb-4 font-medium">
                  Recipient is responsible for all customs duties, taxes, and clearance fees. We provide accurate customs documentation, but delays may occur during clearance.
                </p>
                <div className="inline-flex items-center gap-2 text-xs font-bold text-red-500 bg-red-50 px-3 py-1 rounded-lg">
                  <AlertCircle size={14} /> Restricted Countries Policy Applies
                </div>
              </div>
            </div>

            {/* Section 12: Force Majeure Alert */}
            <div className="p-8 rounded-3xl bg-slate-900 text-white relative overflow-hidden group">
              <AlertCircle size={120} className="absolute -right-8 -bottom-8 text-white/5 group-hover:rotate-12 transition-transform duration-700" />
              <p className="relative z-10 text-lg font-bold">8. Force Majeure</p>
              <p className="relative z-10 text-slate-400 mt-2 text-sm leading-relaxed max-w-md">
                Delivery timelines may be affected by events beyond our control, 
                including natural disasters, courier disruptions, or government restrictions.
              </p>
            </div>

            {/* Support Footer */}
            <div className="mt-20 pt-12 border-t border-slate-100 grid md:grid-cols-2 gap-12">
                <div>
                  <h4 className="text-xl font-black text-slate-900">Shipping Queries?</h4>
                  <p className="text-slate-500 font-medium mt-2">Our logistics team responds within 2 business days.</p>
                  <div className="mt-6 space-y-3">
                    <a href="mailto:support@webronic.com" className="flex items-center gap-3 text-[#4888e8] font-bold transition-colors hover:text-slate-900">
                      <Mail size={18} /> support@webronic.com
                    </a>
                    <div className="flex items-center gap-3 text-slate-900 font-bold">
                      <Phone size={18} /> +91 72000 88500
                    </div>
                  </div>
                </div>
                <div className="bg-[#09b125]/5 p-8 rounded-[2.5rem] flex flex-col justify-between border border-[#09b125]/10">
                   <p className="text-[10px] font-black uppercase tracking-widest text-[#09b125]">Tracking Assistance</p>
                   <p className="text-sm font-medium text-slate-600 mt-4 leading-relaxed">
                     Include your **Order/Shipment Reference** in all communications 
                     for faster resolution.
                   </p>
                   <button className="mt-8 flex items-center gap-2 text-sm font-black text-slate-900 uppercase tracking-widest transition-all hover:gap-3">
                     Support Center <ArrowRight size={16} />
                   </button>
                </div>
            </div>

          </div>
        </div>
      </section>
    </main>
  );
}