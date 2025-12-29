"use client";

import React from "react";
import { 
  FileText, 
  Scale, 
  ShieldAlert, 
  CreditCard, 
  Lock, 
  Handshake, 
  Clock, 
  Mail, 
  Phone,
  ArrowRight,
  Gavel,
  Zap
} from "lucide-react";

export default function TermsAndConditions() {
  const sections = [
    { id: "acceptance", title: "1. Acceptance", icon: Handshake },
    { id: "services", title: "2. Services", icon: Zap },
    { id: "obligations", title: "3. User Obligations", icon: ShieldAlert },
    { id: "ip", title: "4. Intellectual Property", icon: Lock },
    { id: "payment", title: "5. Payment Terms", icon: CreditCard },
    { id: "liability", title: "8. Liability", icon: Scale },
    { id: "law", title: "13. Governing Law", icon: Gavel },
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
            <FileText size={14} className="text-[#4888e8]" />
            <span className="text-[10px] font-black uppercase tracking-widest text-slate-600">Legal Agreement</span>
          </div>
          <h1 className="text-4xl md:text-6xl font-black text-slate-900 tracking-tighter leading-tight">
            Terms & <span className="text-[#4888e8]">Conditions</span>
          </h1>
          <div className="mt-6 flex flex-wrap items-center gap-6 text-sm font-medium text-slate-500">
            <div className="flex items-center gap-2">
              <Clock size={16} /> <span>Last Updated: Dec 18, 2025</span>
            </div>
            <div className="flex items-center gap-2">
              <Scale size={16} /> <span>Entity: StoreTech</span>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-20">
        <div className="grid lg:grid-cols-[280px_1fr] gap-16">
          
          {/* --- STICKY SIDEBAR NAVIGATION --- */}
          <aside className="hidden lg:block sticky top-32 h-fit space-y-2">
            <p className="text-[10px] font-black uppercase tracking-[0.2em] text-slate-400 mb-6 px-4">Navigation</p>
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

          {/* --- TERMS CONTENT --- */}
          <div className="space-y-16">
            
            {/* Notice Box */}
            <div className="bg-[#4888e8]/5 rounded-3xl p-8 border border-[#4888e8]/10">
              <h2 className="text-xl font-black text-slate-900 mt-0 mb-4 flex items-center gap-2">
                <ShieldAlert className="text-[#4888e8]" /> Important Notice
              </h2>
              <p className="text-slate-600 font-medium leading-relaxed m-0 italic">
                By accessing and using the services provided by StoreTech (&quot;we&quot;, &quot;us&quot;, or &quot;our&quot;), 
                you accept and agree to be bound by these Terms and Conditions.
              </p>
            </div>

            {/* Section 1: Acceptance */}
            <div id="acceptance" className="scroll-mt-32">
              <h3 className="text-xl font-black uppercase tracking-widest text-[#4888e8] mb-6 flex items-center gap-3">
                <Handshake /> 1. Acceptance of Terms
              </h3>
              <p className="text-slate-500 font-medium leading-relaxed">
                By accessing and using StoreTech&apos;s services, you acknowledge that you have read, 
                understood, and agree to be bound by these Terms and Conditions. 
                If you do not agree, please do not use our services.
              </p>
            </div>

            {/* Section 2: Services Grid */}
            <div id="services" className="scroll-mt-32">
              <h3 className="text-xl font-black uppercase tracking-widest text-[#4888e8] mb-6 flex items-center gap-3">
                <Zap /> 2. Services Description
              </h3>
              <div className="grid sm:grid-cols-2 gap-4">
                {[
                  "Smart retail technology solutions",
                  "Software development and integration",
                  "Hardware installation and maintenance",
                  "Consulting and advisory services",
                  "24/7 support and monitoring"
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-3 p-4 rounded-2xl bg-slate-50 border border-slate-100">
                    <div className="h-1.5 w-1.5 rounded-full bg-[#09b125]" />
                    <span className="text-sm font-bold text-slate-700">{item}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Section 5: Payment Terms */}
            <div id="payment" className="scroll-mt-32">
              <h3 className="text-xl font-black uppercase tracking-widest text-[#4888e8] mb-6 flex items-center gap-3">
                <CreditCard /> 5. Payment Terms
              </h3>
              <div className="bg-white border border-slate-100 rounded-3xl p-8 shadow-sm space-y-4">
                <p className="text-sm text-slate-600 leading-relaxed font-medium">
                  Invoices are typically due within **30 days** unless otherwise stated.
                </p>
                <p className="text-sm text-slate-600 leading-relaxed font-medium">
                   Late payments may incur interest charges at the rate specified in the agreement.
                </p>
                <div className="flex items-center gap-2 p-3 bg-red-50 text-red-600 rounded-xl text-xs font-bold uppercase tracking-widest">
                  <ShieldAlert size={14} /> 
                  We reserve the right to suspend services for overdue payments.
                </div>
              </div>
            </div>

            {/* Section 13: Jurisdiction */}
            <div id="law" className="scroll-mt-32">
              <h3 className="text-xl font-black uppercase tracking-widest text-[#4888e8] mb-6 flex items-center gap-3">
                <Gavel /> 13. Governing Law & Jurisdiction
              </h3>
              <div className="p-8 rounded-3xl bg-slate-900 text-white relative overflow-hidden group">
                <Gavel size={120} className="absolute -right-8 -bottom-8 text-white/5 group-hover:rotate-12 transition-transform duration-700" />
                <p className="relative z-10 text-lg font-bold">Laws of India</p>
                <p className="relative z-10 text-slate-400 mt-2 text-sm leading-relaxed max-w-md">
                  Any disputes shall be subject to the exclusive jurisdiction of courts in **Chennai, Tamil Nadu, India**.
                </p>
              </div>
            </div>

            {/* Contact Footer */}
            <div className="mt-20 pt-12 border-t border-slate-100">
              <div className="grid md:grid-cols-2 gap-12">
                <div>
                  <h4 className="text-xl font-black text-slate-900">Legal Contact</h4>
                  <p className="text-slate-500 font-medium mt-2">For inquiries regarding legal matters and documentation.</p>
                  <div className="mt-6 space-y-3">
                    <a href="mailto:legal@store-tech.se" className="flex items-center gap-3 text-[#4888e8] font-bold">
                      <Mail size={18} /> legal@store-tech.se
                    </a>
                    <div className="flex items-center gap-3 text-slate-900 font-bold">
                      <Phone size={18} /> +91 72000 88500
                    </div>
                  </div>
                </div>
                <div className="bg-slate-50 p-8 rounded-[2.5rem] flex flex-col justify-between">
                   <p className="text-[10px] font-black uppercase tracking-widest text-slate-400">Business Hours</p>
                   <p className="text-lg font-bold text-slate-900 mt-2">Monday to Friday</p>
                   <p className="text-sm font-medium text-slate-500">9:30 AM to 6:30 PM IST</p>
                   <button className="mt-8 flex items-center gap-2 text-sm font-black text-[#09b125] uppercase tracking-widest">
                     Support Center <ArrowRight size={16} />
                   </button>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>
    </main>
  );
}