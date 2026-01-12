"use client";

import { useState } from "react";
import {
  FileText,
  Scale,
  ShieldAlert,
  CreditCard,
  Eye,
  Lock,
  Handshake,
  Clock,
  Mail,
  Phone,
  ArrowRight,
  Gavel,
  Zap,
  ShieldCheck,
  Ban,
  FileSignature,
  UserCheck,
  X,
} from "lucide-react";

export default function TermsAndConditions() {
  const sections = [
    { id: "acceptance", title: "1. Acceptance", icon: Handshake },
    { id: "services", title: "2. Services", icon: Zap },
    { id: "obligations", title: "3. User Obligations", icon: UserCheck },
    { id: "ip", title: "4. Intellectual Property", icon: Lock },
    { id: "payment", title: "5. Payment Terms", icon: CreditCard },
    { id: "confidentiality", title: "6. Confidentiality", icon: ShieldCheck },
    { id: "privacy", title: "7. Privacy", icon: ShieldCheck },
    { id: "liability", title: "8. Liability", icon: Scale },
    { id: "warranties", title: "9. Warranties", icon: ShieldAlert },
    { id: "termination", title: "10. Termination", icon: Ban },
    { id: "force-majeure", title: "11. Force Majeure", icon: Clock },
    { id: "indemnity", title: "12. Indemnification", icon: ShieldCheck },
    { id: "jurisdiction", title: "13. Governing Law", icon: Gavel },
    { id: "modifications", title: "14. Modifications", icon: FileSignature },
  ];

  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
  };
  const [isModalOpen, setIsModalOpen] = useState(false);
  return (
    <main className="bg-white font-sora pt-24 pb-20">
      <section className="relative overflow-hidden  py-24 ">
        <div className="absolute inset-0 pointer-events-none opacity-40">
          <div className="absolute top-0 right-0 w-125 h-125 bg-[#2776ea]/10 rounded-full blur-[120px]" />
          <div className="absolute bottom-0 left-0 w-125 h-125 bg-[#76ea27]/10 rounded-full blur-[120px]" />
        </div>

        <div className="relative mx-auto max-w-5xl px-6">
          <div className="flex items-center  gap-4 mb-6">
            <FileText size={14} className="text-[#2776ea]" />
            <span className="text-[11px] font-black uppercase tracking-[0.3em] text-[#2776ea]">
              Corporate Governance
            </span>
          </div>
          <h1 className="text-4xl md:text-7xl font-black text-slate-900 tracking-tighter leading-tight">
            Terms &{" "}
            <span className="bg-linear-to-r from-[#2776ea] to-[#76ea27] bg-clip-text text-transparent">
              Conditions
            </span>
          </h1>
          <div className="mt-8 flex flex-wrap items-center gap-8 text-sm font-bold text-slate-400">
            <div className="flex items-center gap-2">
              <Clock size={18} className="text-[#2776ea]" />{" "}
              <span>Last Updated: Dec 18, 2025</span>
            </div>
            <div className="flex items-center gap-2">
              <Scale size={18} className="text-[#76ea27]" />{" "}
              <span>Webronic Industries Pvt Ltd</span>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-20">
        <div className="grid lg:grid-cols-[320px_1fr] gap-16">
          <aside className="hidden lg:block sticky top-32 h-[calc(100vh-140px)] overflow-y-auto pr-4 custom-scrollbar">
            <p className="text-[10px] font-black uppercase tracking-[0.2em] text-slate-400 mb-6 px-4">
              Legal Framework
            </p>
            <div className="space-y-1">
              {sections.map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className="w-full flex items-center gap-3 px-4 py-3.5 rounded-2xl text-[11px] font-black uppercase tracking-widest text-slate-500 hover:bg-slate-50 hover:text-[#2776ea] transition-all group text-left border border-transparent hover:border-slate-100"
                >
                  <item.icon
                    size={16}
                    className="group-hover:scale-110 transition-transform"
                  />
                  {item.title}
                </button>
              ))}
            </div>
          </aside>

          <div className="space-y-24">
            <div className="bg-[#2776ea]/5 rounded-3xl p-10 border border-[#2776ea]/10">
              <h2 className="text-xl font-black text-slate-900 mt-0 mb-4 flex items-center gap-3">
                <ShieldAlert className="text-[#2776ea]" /> Important Notice
              </h2>
              <p className="text-slate-600 font-medium leading-relaxed m-0 italic text-lg">
                By accessing and using the services provided by Webronic
                Industries Private Limited (&quot;Webronic&quot;,
                &quot;we&quot;, &quot;us&quot;, or &quot;our&quot;), you accept
                and agree to be bound by these Terms and Conditions.
              </p>
            </div>

            <div id="acceptance" className="scroll-mt-32">
              <h3 className="text-xl font-black uppercase tracking-widest text-[#2776ea] mb-8 flex items-center gap-3">
                <Handshake size={24} /> 1. Acceptance of Terms
              </h3>
              <p className="text-slate-500 font-medium leading-relaxed text-lg">
                By accessing and using Webronic Industries Private
                Limited&apos;s services, you acknowledge that you have read,
                understood, and agree to be bound by these Terms and Conditions.
                If you do not agree, please do not use our services.
              </p>
            </div>

            <div id="services" className="scroll-mt-32">
              <h3 className="text-xl font-black uppercase tracking-widest text-[#2776ea] mb-8 flex items-center gap-3">
                <Zap size={24} /> 2. Services Description
              </h3>
              <p className="text-slate-500 font-medium leading-relaxed mb-8">
                Webronic Industries Private Limited provides comprehensive
                technology solutions, software development, and related digital
                transformation services. The specific scope is governed by:
              </p>
              <div className="grid sm:grid-cols-2 gap-4">
                {[
                  "Technology Solutions",
                  "Software Development",
                  "Managed IT Services",
                  "Digital Consulting",
                ].map((item, i) => (
                  <div
                    key={i}
                    className="flex items-center gap-4 p-5 rounded-2xl bg-slate-50 border border-slate-100"
                  >
                    <div className="h-2 w-2 rounded-full bg-[#76ea27]" />
                    <span className="text-sm font-bold text-slate-700">
                      {item}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            <div id="obligations" className="scroll-mt-32">
              <h3 className="text-xl font-black uppercase tracking-widest text-[#2776ea] mb-8 flex items-center gap-3">
                <UserCheck size={24} /> 3. User Obligations
              </h3>
              <div className="space-y-4">
                {[
                  "Provide accurate and complete information for service delivery",
                  "Maintain strict confidentiality of account credentials",
                  "Ensure compliance with all local and international regulations",
                  "Zero interference with infrastructure or security protocols",
                  "Prohibition of services for unlawful activities",
                ].map((text, i) => (
                  <div
                    key={i}
                    className="flex items-start gap-4 p-4 rounded-xl border border-slate-100"
                  >
                    <div className="mt-1 h-5 w-5 rounded bg-blue-50 flex items-center justify-center shrink-0">
                      <span className="text-[10px] font-black text-[#2776ea]">
                        {i + 1}
                      </span>
                    </div>
                    <p className="text-sm font-medium text-slate-600">{text}</p>
                  </div>
                ))}
              </div>
            </div>

            <div id="ip" className="scroll-mt-32">
              <h3 className="text-xl font-black uppercase tracking-widest text-[#2776ea] mb-8 flex items-center gap-3">
                <Lock size={24} /> 4. Intellectual Property Rights
              </h3>
              <div className="p-8 rounded-4xl bg-slate-900 text-white relative overflow-hidden">
                <Lock
                  size={150}
                  className="absolute -right-10 -bottom-10 opacity-5"
                />
                <p className="relative z-10 text-slate-300 mb-6 leading-relaxed">
                  All rights in our services and materials remain the exclusive
                  property of Webronic Industries Private Limited.
                </p>
                <div className="relative z-10 grid sm:grid-cols-2 gap-6">
                  <div className="p-4 rounded-xl bg-white/5 border border-white/10">
                    <p className="text-[10px] font-black text-[#76ea27] uppercase mb-2">
                      Custom Work
                    </p>
                    <p className="text-xs text-slate-400 font-medium">
                      Ownership defined in specific Service Agreements/SOWs.
                    </p>
                  </div>
                  <div className="p-4 rounded-xl bg-white/5 border border-white/10">
                    <p className="text-[10px] font-black text-[#76ea27] uppercase mb-2">
                      Usage
                    </p>
                    <p className="text-xs text-slate-400 font-medium">
                      No reproduction or derivative works without written
                      consent.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div id="payment" className="scroll-mt-32">
              <h3 className="text-xl font-black uppercase tracking-widest text-[#2776ea] mb-8 flex items-center gap-3">
                <CreditCard size={24} /> 5. Payment Terms
              </h3>
              <div className="grid md:grid-cols-2 gap-8">
                <div className="bg-white border border-slate-100 rounded-3xl p-8 shadow-sm">
                  <p className="text-[10px] font-black text-[#2776ea] uppercase mb-4">
                    Standard Terms
                  </p>
                  <ul className="space-y-4">
                    <li className="flex items-center gap-3 text-sm font-bold text-slate-700">
                      <Clock size={16} className="text-[#76ea27]" /> Net 30 Days
                      from Invoice
                    </li>
                    <li className="flex items-center gap-3 text-sm font-bold text-slate-700">
                      <Scale size={16} className="text-[#76ea27]" /> Statutory
                      GST Applied
                    </li>
                  </ul>
                </div>
                <div className="bg-red-50/50 border border-red-100 rounded-3xl p-8">
                  <p className="text-[10px] font-black text-red-600 uppercase mb-4">
                    Delinquency
                  </p>
                  <p className="text-sm font-medium text-slate-600 leading-relaxed">
                    Late payments may incur interest charges as permitted by
                    law. We reserve the right to suspend service access for
                    overdue accounts.
                  </p>
                </div>
              </div>
            </div>
            <div id="confidentiality" className="scroll-mt-32">
              <h3 className="text-xl font-black uppercase tracking-widest text-[#2776ea] mb-6 flex items-center gap-3">
                <ShieldCheck /> 6. Confidentiality
              </h3>
              <p className="text-slate-500 font-medium leading-relaxed">
                Both parties agree to maintain the confidentiality of all
                proprietary information exchanged, including business
                strategies, technical data, and customer information.
              </p>
            </div>

            <div id="privacy" className="scroll-mt-32">
              <h3 className="text-xl font-black uppercase tracking-widest text-[#2776ea] mb-6 flex items-center gap-3">
                <Eye /> 7. Data Protection and Privacy
              </h3>
              <p className="text-slate-500 font-medium leading-relaxed">
                Our data practices are detailed in our Privacy Policy, which
                forms an integral part of these Terms and Conditions.
              </p>
            </div>

            <div id="liability" className="scroll-mt-32">
              <h3 className="text-xl font-black uppercase tracking-widest text-[#2776ea] mb-8 flex items-center gap-3">
                <Scale size={24} /> 8. Limitation of Liability
              </h3>
              <div className="bg-slate-50 border border-slate-200 rounded-[2.5rem] p-10">
                <p className="text-slate-700 font-bold mb-6 text-lg">
                  Maximum Liability Cap:
                </p>
                <div className="p-6 rounded-2xl bg-white border border-slate-200 mb-6">
                  <p className="text-sm text-slate-500 font-medium">
                    Webronic&apos;s total liability shall not exceed the amount
                    paid by you for the specific service giving rise to the
                    claim. We are not liable for any indirect, special, or
                    consequential damages.
                  </p>
                </div>
                <div className="flex items-center gap-3 text-xs font-black text-slate-400 uppercase tracking-widest">
                  <Ban size={14} className="text-red-500" /> No guarantee of
                  uninterrupted service
                </div>
              </div>
            </div>
            <div id="warranties" className="scroll-mt-32">
              <h3 className="text-xl font-black uppercase tracking-widest text-[#2776ea] mb-6 flex items-center gap-3">
                <ShieldAlert /> 9. Warranties and Disclaimers
              </h3>
              <p className="text-slate-500 font-medium leading-relaxed uppercase text-xs">
                Services are provided &quot;as is&quot; without any express or
                implied warranties, including fitness for a particular purpose.
              </p>
            </div>

            <div id="termination" className="scroll-mt-32">
              <h3 className="text-xl font-black uppercase tracking-widest text-[#2776ea] mb-6 flex items-center gap-3">
                <Ban /> 10. Termination
              </h3>
              <p className="text-slate-500 font-medium leading-relaxed">
                Either party may terminate upon written notice. Outstanding fees
                become immediately payable, and confidential info must be
                returned/destroyed.
              </p>
            </div>

            <div id="force-majeure" className="scroll-mt-32">
              <h3 className="text-xl font-black uppercase tracking-widest text-[#2776ea] mb-6 flex items-center gap-3">
                <Clock /> 11. Force Majeure
              </h3>
              <p className="text-slate-500 font-medium leading-relaxed">
                No liability for failures due to events beyond control (natural
                disasters, government actions, infrastructure failures).
              </p>
            </div>

            <div id="indemnity" className="scroll-mt-32">
              <h3 className="text-xl font-black uppercase tracking-widest text-[#2776ea] mb-6 flex items-center gap-3">
                <ShieldCheck /> 12. Indemnification
              </h3>
              <p className="text-slate-500 font-medium leading-relaxed">
                You agree to hold Webronic harmless from any claims arising from
                your use of services in violation of these terms.
              </p>
            </div>

            <div id="law" className="scroll-mt-32">
              <h3 className="text-xl font-black uppercase tracking-widest text-[#2776ea] mb-8 flex items-center gap-3">
                <Gavel size={24} /> 13. Governing Law & Jurisdiction
              </h3>
              <div className="p-10 rounded-3xl bg-slate-900 text-white relative overflow-hidden group">
                <Gavel
                  size={150}
                  className="absolute -right-10 -bottom-10 text-white/5 group-hover:rotate-12 transition-transform duration-700"
                />
                <div className="relative z-10">
                  <p className="text-2xl font-black mb-2 tracking-tight">
                    Chennai, India
                  </p>
                  <p className="text-slate-400 text-sm leading-relaxed max-w-md font-medium">
                    These Terms are governed by the laws of India. Any disputes
                    are subject to the exclusive jurisdiction of courts in
                    **Chennai, Tamil Nadu**.
                  </p>
                </div>
              </div>
            </div>
            <div id="modifications" className="scroll-mt-32">
              <h3 className="text-xl font-black uppercase tracking-widest text-[#2776ea] mb-6 flex items-center gap-3">
                <FileSignature /> 14. Modifications to Terms
              </h3>
              <p className="text-slate-500 font-medium leading-relaxed">
                We reserve the right to update these terms. Continued use
                constitutes acceptance of updated terms.
              </p>
            </div>
            <div
              id="legal-misc"
              className="scroll-mt-32 p-8 rounded-3xl bg-slate-50 border border-slate-200 space-y-4"
            >
              <p className="text-xs font-bold text-slate-600">
                <strong> Severability:</strong> Invalid provisions will not
                affect the validity of remaining terms.
              </p>
              <p className="text-xs font-bold text-slate-600">
                <strong> Entire Agreement:</strong> This constitutes the
                complete agreement between you and Webronic Industries Pvt Ltd.
              </p>
              <p className="text-xs font-bold text-slate-600">
                <strong> No Waiver:</strong> Failure to enforce terms does not
                waive our right to enforce them later.
              </p>
            </div>

            <div className="mt-20 pt-16 border-t border-slate-100">
              <div className="grid md:grid-cols-2 gap-12">
                <div>
                  <h4 className="text-2xl font-black text-slate-900 tracking-tight">
                    Legal & Support
                  </h4>
                  <p className="text-slate-500 font-medium mt-4 leading-relaxed">
                    For inquiries regarding these terms or specific service
                    agreements.
                  </p>
                  <div className="mt-8 space-y-4">
                    <a
                      href="mailto:contact@webronic.com"
                      className="flex items-center gap-4 text-[#2776ea] font-black text-[11px] uppercase tracking-widest"
                    >
                      <Mail size={18} /> contact@webronic.com
                    </a>
                    <a
                      href="mailto:support@webronic.com"
                      className="flex items-center gap-4 text-[#2776ea] font-black text-[11px] uppercase tracking-widest"
                    >
                      <ArrowRight size={18} /> support@webronic.com
                    </a>
                    <div className="flex items-center gap-4 text-slate-900 font-bold">
                      <Phone size={18} className="text-[#76ea27]" /> +91 72000
                      88500
                    </div>
                  </div>
                </div>
                <div className="bg-[#2776ea]/5 p-10 rounded-[2.5rem] border border-[#2776ea]/10 flex flex-col justify-between">
                  <div>
                    <p className="text-[10px] font-black uppercase tracking-[0.2em] text-[#2776ea] mb-4">
                      Headquarters
                    </p>
                    <p className="text-lg font-bold text-slate-900 leading-tight">
                      Webronic Industries Private Limited
                    </p>
                    <p className="text-sm text-slate-500 mt-2 font-medium">
                      Chennai, Tamil Nadu, India
                    </p>
                  </div>

                  <button
                    onClick={() => setIsModalOpen(true)}
                    className="mt-10 flex items-center justify-center gap-3 bg-[#2776ea] text-white px-8 py-4 rounded-2xl font-black text-[11px] uppercase tracking-widest hover:bg-[#76ea27] transition-all shadow-xl active:scale-95"
                  >
                    Service Inquiries <ArrowRight size={16} />
                  </button>

                  {isModalOpen && (
                    <div className="fixed inset-0 z-100 flex items-center justify-center p-4">
                      <div
                        className="absolute inset-0 bg-slate-900/60 backdrop-blur-sm animate-in fade-in duration-300"
                        onClick={() => setIsModalOpen(false)}
                      />

                      <div className="relative w-full max-w-lg bg-white rounded-[2.5rem] shadow-2xl p-8 md:p-10 animate-in zoom-in-95 slide-in-from-bottom-4 duration-300">
                        <button
                          onClick={() => setIsModalOpen(false)}
                          className="absolute top-6 right-6 text-slate-400 hover:text-slate-900 transition-colors"
                        >
                          <X size={20} />
                        </button>

                        <div className="mb-8">
                          <div className="h-12 w-12 bg-[#2776ea]/10 rounded-2xl flex items-center justify-center mb-6">
                            <Mail className="text-[#2776ea]" size={24} />
                          </div>
                          <h3 className="text-2xl font-black text-slate-900 tracking-tight">
                            Service Inquiry
                          </h3>
                          <p className="text-slate-500 text-sm font-medium mt-1">
                            Briefly tell us about your requirement.
                          </p>
                        </div>

                        <form
                          className="space-y-4"
                          onSubmit={(e) => {
                            e.preventDefault();
                          }}
                        >
                          <div className="grid grid-cols-2 gap-4">
                            <div className="space-y-1.5">
                              <label className="text-[10px] font-black uppercase text-slate-400 tracking-widest ml-1">
                                Full Name
                              </label>
                              <input
                                type="text"
                                className="w-full p-3.5 rounded-xl bg-slate-50 border border-slate-100 text-sm outline-none focus:ring-2 focus:ring-[#2776ea]/20 focus:border-[#2776ea] transition-all"
                                placeholder="Your Name"
                                required
                              />
                            </div>
                            <div className="space-y-1.5">
                              <label className="text-[10px] font-black uppercase text-slate-400 tracking-widest ml-1">
                                Company
                              </label>
                              <input
                                type="text"
                                className="w-full p-3.5 rounded-xl bg-slate-50 border border-slate-100 text-sm outline-none focus:ring-2 focus:ring-[#2776ea]/20 focus:border-[#2776ea] transition-all"
                                placeholder="Enter Company"
                              />
                            </div>
                          </div>

                          <div className="space-y-1.5">
                            <label className="text-[10px] font-black uppercase text-slate-400 tracking-widest ml-1">
                              Email Address
                            </label>
                            <input
                              type="email"
                              className="w-full p-3.5 rounded-xl bg-slate-50 border border-slate-100 text-sm outline-none focus:ring-2 focus:ring-[#2776ea]/20 focus:border-[#2776ea] transition-all"
                              placeholder="yourcompany@company.com"
                              required
                            />
                          </div>

                          <div className="space-y-1.5">
                            <label className="text-[10px] font-black uppercase text-slate-400 tracking-widest ml-1">
                              Message
                            </label>
                            <textarea
                              rows={4}
                              className="w-full p-3.5 rounded-xl bg-slate-50 border border-slate-100 text-sm outline-none focus:ring-2 focus:ring-[#2776ea]/20 focus:border-[#2776ea] transition-all resize-none"
                              placeholder="How can we help?"
                              required
                            ></textarea>
                          </div>

                          <button className="w-full bg-[#2776ea] text-white py-4 rounded-xl font-black text-[11px] uppercase tracking-[0.2em] shadow-lg shadow-blue-200 hover:bg-slate-900 transition-all active:scale-95">
                            Send Message
                          </button>
                        </form>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
