"use client";

import React from "react";
import { 
  ShieldCheck, 
  Lock, 
  Eye, 
  Database, 
  Globe, 
  UserCheck, 
  Clock, 
  Mail, 
  Phone,
  ArrowRight
} from "lucide-react";

export default function PrivacyPolicy() {
  const sections = [
    { id: "controller", title: "1. Data Controller", icon: UserCheck },
    { id: "collection", title: "2. Data Collection", icon: Database },
    { id: "usage", title: "5. Data Usage", icon: Eye },
    { id: "security", title: "7. Data Security", icon: Lock },
    { id: "rights", title: "9. Your Rights", icon: ShieldCheck },
  ];

  return (
    <main className="bg-white font-sora pt-24 pb-20">
      {/* --- HEADER SECTION --- */}
      <section className="relative overflow-hidden bg-slate-50 py-20 border-b border-slate-100">
        <div className="absolute inset-0 pointer-events-none opacity-40">
           <div className="absolute top-0 right-0 w-96 h-96 bg-[#4888e8]/10 rounded-full blur-[120px]" />
           <div className="absolute bottom-0 left-0 w-96 h-96 bg-[#09b125]/10 rounded-full blur-[120px]" />
        </div>
        
        <div className="relative mx-auto max-w-5xl px-6">
          <div className="inline-flex items-center gap-2 rounded-full bg-white border border-slate-200 px-4 py-1.5 mb-6 shadow-sm">
            <ShieldCheck size={14} className="text-[#4888e8]" />
            <span className="text-[10px] font-black uppercase tracking-widest text-slate-600">Legal Documentation</span>
          </div>
          <h1 className="text-4xl md:text-6xl font-black text-slate-900 tracking-tighter leading-tight">
            Privacy <span className="text-[#4888e8]">Policy</span>
          </h1>
          <div className="mt-6 flex flex-wrap items-center gap-6 text-sm font-medium text-slate-500">
            <div className="flex items-center gap-2">
              <Clock size={16} /> <span>Last Updated: Dec 18, 2025</span>
            </div>
            <div className="flex items-center gap-2">
              <Globe size={16} /> <span>Entity: StoreTech</span>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-20">
        <div className="grid lg:grid-cols-[280px_1fr] gap-16">
          
          {/* --- SIDE NAVIGATION (Desktop Only) --- */}
          <aside className="hidden lg:block sticky top-32 h-fit space-y-2">
            <p className="text-[10px] font-black uppercase tracking-[0.2em] text-slate-400 mb-6 px-4">Sections</p>
            {sections.map((item) => (
              <a
                key={item.id}
                href={`#${item.id}`}
                className="flex items-center gap-3 px-4 py-3 rounded-xl text-sm font-bold text-slate-500 hover:bg-slate-50 hover:text-[#4888e8] transition-all group"
              >
                <item.icon size={18} className="group-hover:scale-110 transition-transform" />
                {item.title}
              </a>
            ))}
          </aside>

          {/* --- POLICY CONTENT --- */}
          <div className="prose prose-slate max-w-none space-y-16">
            
            <div className="bg-blue-50/50 rounded-3xl p-8 border border-blue-100/50">
              <h2 className="text-2xl font-black text-slate-900 mt-0 mb-4">Your Privacy Matters</h2>
              <p className="text-slate-600 font-medium leading-relaxed m-0">
                At StoreTech, we are committed to protecting your personal data and respecting your privacy rights. 
                This Privacy Policy explains how we collect, use, store, and protect your information in 
                compliance with applicable data protection laws.
              </p>
            </div>

            {/* Section 1 */}
            <div id="controller" className="scroll-mt-32">
              <h3 className="text-xl font-black uppercase tracking-widest text-[#4888e8] mb-6 flex items-center gap-3">
                <UserCheck /> 1. Data Controller Information
              </h3>
              <div className="grid sm:grid-cols-2 gap-6 bg-white border border-slate-100 rounded-3xl p-8 shadow-sm">
                <div>
                  <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest mb-1">Entity</p>
                  <p className="text-lg font-bold text-slate-900">StoreTech</p>
                </div>
                <div>
                  <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest mb-1">Email</p>
                  <p className="text-lg font-bold text-[#4888e8]">privacy@store-tech.se</p>
                </div>
                <div>
                  <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest mb-1">Phone</p>
                  <p className="text-lg font-bold text-slate-900">+91 72000 88500</p>
                </div>
                <div>
                  <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest mb-1">DPO Inquiries</p>
                  <p className="text-lg font-bold text-[#09b125]">security@store-tech.se</p>
                </div>
              </div>
            </div>

            {/* Section 2 */}
            <div id="collection" className="scroll-mt-32">
              <h3 className="text-xl font-black uppercase tracking-widest text-[#4888e8] mb-6 flex items-center gap-3">
                <Database /> 2. Information We Collect
              </h3>
              <div className="space-y-8">
                <div>
                  <h4 className="text-lg font-extrabold text-slate-900 mb-4">2.1 Personal Information</h4>
                  <div className="grid sm:grid-cols-2 gap-4">
                    {[
                      { label: "Identity", val: "Name, title, company position" },
                      { label: "Contact", val: "Email, phone, business address" },
                      { label: "Business", val: "Company name, GSTIN/Tax ID" },
                      { label: "Technical", val: "IP address, browser, device info" }
                    ].map((item, i) => (
                      <div key={i} className="p-5 rounded-2xl bg-slate-50 border border-slate-100">
                        <p className="text-[10px] font-black text-[#09b125] uppercase mb-1">{item.label}</p>
                        <p className="text-sm font-bold text-slate-700">{item.val}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Section 5 - Table Implementation */}
            <div id="usage" className="scroll-mt-32">
              <h3 className="text-xl font-black uppercase tracking-widest text-[#4888e8] mb-6 flex items-center gap-3">
                <Eye /> 5. How We Use Your Information
              </h3>
              <div className="overflow-hidden rounded-3xl border border-slate-100 shadow-sm">
                <table className="w-full text-left border-collapse">
                  <thead className="bg-slate-50">
                    <tr>
                      <th className="px-6 py-4 text-[10px] font-black uppercase text-slate-400">Purpose</th>
                      <th className="px-6 py-4 text-[10px] font-black uppercase text-slate-400">Legal Basis</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-50">
                    <tr>
                      <td className="px-6 py-4 text-sm font-bold text-slate-700">Retail Automation Services</td>
                      <td className="px-6 py-4 text-sm text-[#4888e8] font-bold">Contract Performance</td>
                    </tr>
                    <tr>
                      <td className="px-6 py-4 text-sm font-bold text-slate-700">Support & Maintenance</td>
                      <td className="px-6 py-4 text-sm text-[#4888e8] font-bold">Legitimate Interest</td>
                    </tr>
                    <tr>
                      <td className="px-6 py-4 text-sm font-bold text-slate-700">Marketing Communications</td>
                      <td className="px-6 py-4 text-sm text-[#09b125] font-bold">Consent</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>

            {/* Section 7 */}
            <div id="security" className="scroll-mt-32">
              <h3 className="text-xl font-black uppercase tracking-widest text-[#4888e8] mb-6 flex items-center gap-3">
                <Lock /> 7. Data Security
              </h3>
              <div className="grid gap-4">
                {[
                  "Advanced encryption for data in transit and at rest",
                  "Role-based access controls with multi-factor authentication",
                  "Continuous security monitoring and threat detection",
                  "Regular security audits and penetration testing"
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-4 p-4 rounded-2xl bg-white border border-slate-100 hover:border-[#4888e8]/30 transition-colors">
                    <div className="h-2 w-2 rounded-full bg-[#09b125]" />
                    <span className="text-sm font-bold text-slate-700">{item}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Footer Contact Accent */}
            <div className="mt-20 pt-12 border-t border-slate-100 flex flex-col md:flex-row items-center justify-between gap-8">
              <div>
                <h4 className="text-xl font-black text-slate-900">Have questions?</h4>
                <p className="text-slate-500 font-medium">Reach out to our Data Protection Officer.</p>
              </div>
              <a 
                href="mailto:security@store-tech.se"
                className="flex items-center gap-3 bg-[#4888e8] text-white px-8 py-4 rounded-2xl font-bold hover:bg-slate-900 transition-all shadow-xl shadow-blue-200/50"
              >
                Contact Security <ArrowRight size={18} />
              </a>
            </div>

          </div>
        </div>
      </section>
    </main>
  );
}