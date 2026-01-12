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
  ArrowRight,
  Gavel,
  FileText,
  Users,
  Cookie,
  ShieldAlert,
  AlertTriangle,
  ExternalLink,
  RefreshCw,
  Scale,
  CheckCircle2,
  MapPin,
  Search,
  Briefcase,
} from "lucide-react";

export default function PrivacyPolicy() {
  const sections = [
    { id: "controller", title: "1. Data Controller", icon: UserCheck },
    { id: "collection", title: "2. Information We Collect", icon: Database },
    { id: "method", title: "3. How We Collect", icon: Globe },
    { id: "basis", title: "4. Legal Basis", icon: Gavel },
    { id: "usage", title: "5. How We Use Data", icon: Eye },
    { id: "sharing", title: "6. Data Sharing", icon: Users },
    { id: "security", title: "7. Data Security", icon: Lock },
    { id: "retention", title: "8. Data Retention", icon: Clock },
    { id: "rights", title: "9. Your Rights", icon: ShieldCheck },
    { id: "cookies", title: "10. Cookies Policy", icon: Cookie },
    { id: "children", title: "11. Children's Privacy", icon: ShieldAlert },
    { id: "breach", title: "12. Breach Notice", icon: AlertTriangle },
    { id: "thirdparty", title: "13. Third-Party Links", icon: ExternalLink },
    { id: "changes", title: "14. Policy Changes", icon: RefreshCw },
    { id: "agreements", title: "15. Data Agreements", icon: FileText },
    { id: "compliance", title: "16. Legal Compliance", icon: Scale },
  ];

  return (
    <main className="bg-white font-sora pt-20 pb-12 md:pt-24 md:pb-20 w-full max-w-[100vw] overflow-x-hidden">
      <section className="relative overflow-hidden  py-12 md:py-24 ">
        <div className="absolute inset-0 pointer-events-none opacity-40">
          <div className="absolute top-0 right-0 w-50 h-50 md:w-125 md:h-125 bg-[#2776ea]/10 rounded-full blur-[60px] md:blur-[120px]" />
          <div className="absolute bottom-0 left-0 w-50 h-50 md:w-125 md:h-125 bg-[#76ea27]/10 rounded-full blur-[60px] md:blur-[120px]" />
        </div>

        <div className="relative mx-auto max-w-5xl px-5 md:px-6">
          <div className="flex items-center  gap-4 mb-6">
            <ShieldCheck size={14} className="text-[#2776ea] shrink-0" />
            <span className="text-[11px] font-black uppercase tracking-[0.3em] text-[#2776ea]">
              Enterprise Data Protection
            </span>
          </div>
          <h1 className="text-3xl sm:text-5xl md:text-7xl font-black text-slate-900 tracking-tighter leading-tight">
            Privacy{" "}
            <span className="bg-linear-to-r from-[#2776ea] to-[#76ea27] bg-clip-text text-transparent">
              Policy
            </span>
          </h1>
          <p className="mt-4 md:mt-6 text-slate-500 max-w-2xl text-sm md:text-lg font-medium leading-relaxed">
            Architecting trust through transparency. Our global privacy
            framework is designed to protect the digital foundations of your
            enterprise.
          </p>
          <div className="mt-8 md:mt-10 flex flex-col sm:flex-row sm:items-center gap-4 sm:gap-8 text-xs md:text-sm font-bold text-slate-400">
            <div className="flex items-center gap-2">
              <Clock size={16} className="text-[#2776ea] shrink-0" /> Last
              Updated: Dec 18, 2025
            </div>
            <div className="flex items-center gap-2">
              <Globe size={16} className="text-[#76ea27] shrink-0" /> Webronic
              Industries Private Limited
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 md:px-6 py-10 md:py-20">
        <div className="grid grid-cols-1 lg:grid-cols-[320px_1fr] gap-12 lg:gap-16  ">
          <aside className="hidden lg:block sticky top-32 h-[calc(100vh-140px)] overflow-y-auto pr-4 custom-scrollbar">
            
              <p className="text-[10px] font-black uppercase tracking-[0.2em] text-slate-400 mb-6 px-4">
                Policy Framework
              </p>
              <div className="space-y-1">
              {sections.map((item) => (
                <a
                  key={item.id}
                  href={`#${item.id}`}
                  className="flex items-center gap-3 px-4 py-3.5 rounded-2xl text-[11px] font-black uppercase tracking-widest text-slate-500 hover:bg-slate-50 hover:text-[#2776ea] transition-all group border border-transparent hover:border-slate-100"
                >
                  <item.icon
                    size={16}
                    className="group-hover:scale-110 transition-transform text-slate-400 group-hover:text-[#2776ea] shrink-0"
                  />
                  {item.title}
                </a>
              ))}
            </div>
          </aside>

          <div className="space-y-20 lg:space-y-32 w-full">
            <div id="controller" className="scroll-mt-32">
              <h3 className="text-lg md:text-xl font-black uppercase tracking-widest text-[#2776ea] mb-6 md:mb-8 flex items-center gap-3">
                <UserCheck size={24} className="shrink-0" /> 1. Data Controller
                Information
              </h3>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 bg-white border border-slate-100 rounded-2xl md:rounded-[2.5rem] p-5 md:p-10 shadow-sm relative overflow-hidden">
                <div className="space-y-6">
                  <div>
                    <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest mb-2">
                      Corporate HQ
                    </p>
                    <p className="text-lg md:text-xl font-black text-slate-900 leading-tight">
                      Webronic Industries Private Limited
                    </p>
                    <div className="flex gap-3 mt-4 text-slate-500 text-sm font-medium italic">
                      <MapPin size={18} className="shrink-0 text-[#2776ea]" />
                      <p className="leading-relaxed">
                        33, East Abhiramapuram, Second Street, Mylapore, Chennai
                        - 600004, India
                      </p>
                    </div>
                  </div>

                  <div className="pt-6 border-t border-slate-50 space-y-4">
                    <div className="flex items-center gap-3">
                      <Mail size={16} className="text-[#76ea27] shrink-0" />
                      <span className="text-sm font-bold text-slate-700 break-all">
                        contact@webronic.com
                      </span>
                    </div>
                    <div className="flex items-center gap-3">
                      <Phone size={16} className="text-[#2776ea] shrink-0" />
                      <span className="text-sm font-bold text-slate-700">
                        +91 72000 88500
                      </span>
                    </div>
                  </div>
                </div>

                <div className="bg-slate-50 rounded-xl md:rounded-3xl p-5 md:p-6 border border-slate-100">
                  <p className="text-[10px] font-black text-[#2776ea] uppercase tracking-widest mb-4">
                    Dedicated Support
                  </p>
                  <div className="space-y-3 md:space-y-4">
                    <div className="p-4 bg-white rounded-xl border border-slate-100">
                      <p className="text-[9px] font-black text-slate-400 uppercase mb-1">
                        DPO Inquiries
                      </p>
                      <p className="text-sm font-bold text-slate-800 break-all">
                        security@webronic.com
                      </p>
                    </div>
                    <div className="p-4 bg-white rounded-xl border border-slate-100">
                      <p className="text-[9px] font-black text-slate-400 uppercase mb-1">
                        General Inquiries
                      </p>
                      <p className="text-sm font-bold text-slate-800 break-all">
                        privacy@webronic.com
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div id="collection" className="scroll-mt-32">
              <h3 className="text-lg md:text-xl font-black uppercase tracking-widest text-[#2776ea] mb-6 md:mb-8 flex items-center gap-3">
                <Database size={24} className="shrink-0" /> 2. Information We
                Collect
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {[
                  {
                    title: "2.1 Identity Data",
                    details: "Name, title, company position",
                    icon: UserCheck,
                  },
                  {
                    title: "Contact Data",
                    details: "Email, telephone, business address",
                    icon: Mail,
                  },
                  {
                    title: "Business Data",
                    details: "Company name, type, GSTIN/Tax ID",
                    icon: Briefcase,
                  },
                  {
                    title: "Technical Data",
                    details: "IP address, browser, device info",
                    icon: Search,
                  },
                  {
                    title: "Usage Data",
                    details: "System interactions, access logs",
                    icon: Eye,
                  },
                  {
                    title: "Communication",
                    details: "Feedback, correspondence, support",
                    icon: RefreshCw,
                  },
                ].map((item, i) => (
                  <div
                    key={i}
                    className="p-5 md:p-6 rounded-2xl md:rounded-3xl bg-slate-50 border border-slate-100 hover:bg-white hover:border-[#2776ea]/30 transition-all group"
                  >
                    <div className="flex items-center gap-3 mb-3">
                      <item.icon
                        size={18}
                        className="text-[#76ea27] shrink-0"
                      />
                      <p className="text-xs font-black text-slate-900 uppercase tracking-widest">
                        {item.title}
                      </p>
                    </div>
                    <p className="text-sm font-medium text-slate-500 leading-relaxed">
                      {item.details}
                    </p>
                  </div>
                ))}
              </div>
              <div className="mt-6 md:mt-8 p-5 md:p-6 rounded-2xl md:rounded-3xl bg-blue-50/50 border border-blue-100">
                <p className="text-[10px] font-black text-[#2776ea] uppercase tracking-widest mb-2 flex items-center gap-2">
                  <ShieldAlert size={14} className="shrink-0" /> 2.2 Special
                  Categories
                </p>
                <p className="text-xs text-slate-600 font-medium italic leading-relaxed">
                  We do not intentionally collect sensitive personal data
                  (health, biometric, religious origin) unless explicitly
                  required for service delivery with your consent.
                </p>
              </div>
            </div>

            <div id="method" className="scroll-mt-32">
              <h3 className="text-lg md:text-xl font-black uppercase tracking-widest text-[#2776ea] mb-6 md:mb-8 flex items-center gap-3">
                <Globe size={24} className="shrink-0" /> 3. How We Collect Data
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="space-y-3">
                  <div className="h-1 w-10 bg-[#76ea27]" />
                  <p className="text-sm font-black text-slate-900 uppercase">
                    Direct Interactions
                  </p>
                  <p className="text-xs text-slate-500 font-medium">
                    Form submissions, contact requests, and service
                    registration.
                  </p>
                </div>
                <div className="space-y-3">
                  <div className="h-1 w-10 bg-[#2776ea]" />
                  <p className="text-sm font-black text-slate-900 uppercase">
                    Automated Tech
                  </p>
                  <p className="text-xs text-slate-500 font-medium">
                    Cookies, server logs, and automated tracking pixels.
                  </p>
                </div>
                <div className="space-y-3">
                  <div className="h-1 w-10 bg-slate-300" />
                  <p className="text-sm font-black text-slate-900 uppercase">
                    Third Parties
                  </p>
                  <p className="text-xs text-slate-500 font-medium">
                    Business partners, technical providers, and public sources.
                  </p>
                </div>
              </div>
            </div>

            <div id="basis" className="scroll-mt-32">
              <h3 className="text-lg md:text-xl font-black uppercase tracking-widest text-[#2776ea] mb-6 md:mb-8 flex items-center gap-3">
                <Gavel size={24} className="shrink-0" /> 4. Legal Basis for
                Processing
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {[
                  {
                    t: "Contract Performance",
                    d: "To fulfill our contractual obligations to you.",
                  },
                  {
                    t: "Legal Obligation",
                    d: "To comply with legal and regulatory requirements.",
                  },
                  {
                    t: "Explicit Consent",
                    d: "When you have given us clear permission for a specific purpose.",
                  },
                  {
                    t: "Legitimate Interests",
                    d: "For business operations and service improvement.",
                  },
                ].map((item, i) => (
                  <div
                    key={i}
                    className="p-5 md:p-6 rounded-2xl md:rounded-3xl border border-slate-100 bg-white shadow-sm"
                  >
                    <p className="text-sm font-black text-[#76ea27] uppercase mb-2">
                      {item.t}
                    </p>
                    <p className="text-xs text-slate-500 font-medium leading-relaxed">
                      {item.d}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            <div id="usage" className="scroll-mt-32">
              <h3 className="text-lg md:text-xl font-black uppercase tracking-widest text-[#2776ea] mb-6 md:mb-8 flex items-center gap-3">
                <Eye size={24} className="shrink-0" /> 5. How We Use Your
                Information
              </h3>
              <div className="w-full max-w-[90vw] md:max-w-full overflow-x-auto rounded-2xl md:rounded-4xl border border-slate-100 shadow-sm touch-pan-x">
                <table className="w-full text-left border-collapse min-w-150 md:min-w-full">
                  <thead className="bg-slate-50">
                    <tr>
                      <th className="px-4 py-4 md:px-6 md:py-5 text-[10px] font-black uppercase text-slate-400 whitespace-nowrap">
                        Purpose
                      </th>
                      <th className="px-4 py-4 md:px-6 md:py-5 text-[10px] font-black uppercase text-slate-400 whitespace-nowrap">
                        Type of Data
                      </th>
                      <th className="px-4 py-4 md:px-6 md:py-5 text-[10px] font-black uppercase text-slate-400 whitespace-nowrap">
                        Legal Basis
                      </th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-100">
                    {[
                      {
                        p: "Retail Automation Services",
                        t: "Identity, Contact, Business",
                        l: "Contract Performance",
                      },
                      {
                        p: "Maintenance & Support",
                        t: "Contact, Technical, Usage",
                        l: "Contract & Legitimate Interest",
                      },
                      {
                        p: "Service Improvement",
                        t: "Usage, Technical",
                        l: "Legitimate Interest",
                      },
                      {
                        p: "Security & Fraud Prevention",
                        t: "Technical, Transactional",
                        l: "Legal Obligation",
                      },
                      {
                        p: "Regulatory Compliance",
                        t: "All applicable data",
                        l: "Legal Obligation",
                      },
                      {
                        p: "Marketing (Opt-in)",
                        t: "Contact, Usage",
                        l: "Consent",
                      },
                    ].map((row, i) => (
                      <tr
                        key={i}
                        className="hover:bg-slate-50 transition-colors"
                      >
                        <td className="px-4 py-4 md:px-6 text-sm font-bold text-slate-700">
                          {row.p}
                        </td>
                        <td className="px-4 py-4 md:px-6 text-[11px] text-slate-500 font-medium">
                          {row.t}
                        </td>
                        <td className="px-4 py-4 md:px-6 text-[10px] text-[#2776ea] font-black uppercase whitespace-nowrap">
                          {row.l}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              <p className="mt-3 text-[10px] text-slate-400 text-center md:hidden italic">
                ← Scroll horizontally to view details →
              </p>
            </div>

            <div id="sharing" className="scroll-mt-32">
              <h3 className="text-lg md:text-xl font-black uppercase tracking-widest text-[#2776ea] mb-6 md:mb-8 flex items-center gap-3">
                <Users size={24} className="shrink-0" /> 6. Data Sharing and
                Disclosure
              </h3>
              <div className="space-y-6">
                <div className="bg-slate-900 text-white p-6 md:p-8 rounded-2xl md:rounded-[2.5rem]">
                  <h4 className="text-xs font-black uppercase tracking-widest text-[#76ea27] mb-6">
                    6.1 When We Share Your Data
                  </h4>
                  <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4 list-none p-0">
                    {[
                      "Service Providers",
                      "Professional Advisors",
                      "Government Authorities",
                      "Strategic Partners",
                    ].map((li) => (
                      <li
                        key={li}
                        className="flex items-center gap-3 text-sm font-bold opacity-80"
                      >
                        <CheckCircle2
                          size={16}
                          className="text-[#76ea27] shrink-0"
                        />{" "}
                        {li}
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="p-6 md:p-8 border border-slate-100 rounded-2xl md:rounded-[2.5rem]">
                  <h4 className="text-xs font-black uppercase tracking-widest text-[#2776ea] mb-4">
                    6.2 International Data Transfers
                  </h4>
                  <p className="text-sm text-slate-500 font-medium leading-relaxed italic">
                    Data may be transferred to countries with adequate data
                    protection standards using standard contractual clauses and
                    privacy impact assessments.
                  </p>
                </div>
              </div>
            </div>

            <div id="security" className="scroll-mt-32">
              <h3 className="text-lg md:text-xl font-black uppercase tracking-widest text-[#2776ea] mb-6 md:mb-8 flex items-center gap-3">
                <Lock size={24} className="shrink-0" /> 7. Data Security
                Measures
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {[
                  "AES-256 Encryption at Rest & TLS in Transit",
                  "MFA for administrative & system access",
                  "24/7 SIEM monitoring & threat detection",
                  "Bi-annual penetration testing by third parties",
                  "Mandatory staff security training programs",
                  "Documented Incident Response (IR) protocols",
                ].map((item, i) => (
                  <div
                    key={i}
                    className="flex items-start gap-4 p-5 rounded-2xl bg-slate-900 text-white shadow-lg"
                  >
                    <ShieldCheck
                      size={20}
                      className="text-[#76ea27] shrink-0 mt-0.5"
                    />
                    <span className="text-[11px] font-black uppercase tracking-widest leading-relaxed">
                      {item}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            <div id="retention" className="scroll-mt-32">
              <h3 className="text-lg md:text-xl font-black uppercase tracking-widest text-[#2776ea] mb-6 md:mb-8 flex items-center gap-3">
                <Clock size={24} className="shrink-0" /> 8. Data Retention
              </h3>
              <div className="grid grid-cols-2 lg:grid-cols-3 gap-3 md:gap-4">
                {[
                  {
                    t: "Contract Data",
                    v: "Duration + 7 years",
                    icon: FileText,
                  },
                  {
                    t: "Financial Records",
                    v: "7 years (Tax/Audit)",
                    icon: Scale,
                  },
                  { t: "Support Logs", v: "3 years", icon: RefreshCw },
                  { t: "Marketing Data", v: "Until Opt-out", icon: Mail },
                  { t: "Security Logs", v: "3-5 years", icon: Lock },
                ].map((item, i) => (
                  <div
                    key={i}
                    className="p-4 md:p-6 rounded-2xl md:rounded-3xl bg-slate-50 border border-slate-100 text-center"
                  >
                    <item.icon
                      size={20}
                      className="mx-auto mb-3 text-[#76ea27]"
                    />
                    <p className="text-[9px] md:text-[10px] font-black uppercase text-slate-400 mb-1">
                      {item.t}
                    </p>
                    <p className="text-xs font-black text-slate-800">
                      {item.v}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            <div id="rights" className="scroll-mt-32">
              <h3 className="text-lg md:text-xl font-black uppercase tracking-widest text-[#2776ea] mb-6 md:mb-8 flex items-center gap-3">
                <ShieldCheck size={24} className="shrink-0" /> 9. Your Privacy
                Rights
              </h3>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 md:gap-4">
                {[
                  "Right to Access",
                  "Right to Correction",
                  "Right to Erasure",
                  "Restriction of Processing",
                  "Data Portability",
                  "Right to Object",
                  "Withdraw Consent",
                ].map((right, i) => (
                  <div
                    key={i}
                    className="p-4 md:p-5 rounded-2xl border border-slate-100 bg-white flex flex-col justify-between h-28 md:h-32 hover:border-[#2776ea] transition-all"
                  >
                    <p className="text-[10px] font-black text-[#76ea27] uppercase">
                      0{i + 1}
                    </p>
                    <p className="text-xs md:text-sm font-bold text-slate-800 leading-tight">
                      {right}
                    </p>
                  </div>
                ))}
              </div>
              <div className="mt-6 md:mt-8 flex flex-col md:flex-row gap-4 items-center justify-between p-6 md:p-8 rounded-2xl md:rounded-4xl bg-slate-50 border border-slate-100">
                <p className="text-sm font-medium text-slate-500 text-center md:text-left">
                  To exercise these rights, email us at{" "}
                  <span className="text-[#2776ea] font-bold">
                    privacy@webronic.com
                  </span>
                  . We aim to respond within 30 days.
                </p>
              </div>
            </div>

            <div id="cookies" className="scroll-mt-32">
              <h3 className="text-lg md:text-xl font-black uppercase tracking-widest text-[#2776ea] mb-6 md:mb-8 flex items-center gap-3">
                <Cookie size={24} className="shrink-0" /> 10. Cookies and
                Tracking
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {[
                  {
                    t: "Essential Cookies",
                    d: "Necessary for website and system functionality.",
                  },
                  {
                    t: "Analytics Cookies",
                    d: "Help us understand traffic and user behavior.",
                  },
                  {
                    t: "Functional Cookies",
                    d: "Remember your login and interface preferences.",
                  },
                  {
                    t: "Marketing Cookies",
                    d: "Used for targeted notifications and insights.",
                  },
                ].map((item, i) => (
                  <div
                    key={i}
                    className="p-5 md:p-6 rounded-2xl md:rounded-3xl border border-slate-100"
                  >
                    <p className="text-sm font-bold text-slate-900 mb-2">
                      {item.t}
                    </p>
                    <p className="text-xs text-slate-500 font-medium leading-relaxed">
                      {item.d}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            <div className="space-y-12 md:space-y-16">
              <div id="children" className="scroll-mt-32">
                <h4 className="text-sm font-black uppercase tracking-widest text-[#2776ea] mb-4 flex items-center gap-2">
                  <ShieldAlert size={18} className="shrink-0" /> 11.
                  Children&apos;s Privacy
                </h4>
                <p className="text-sm text-slate-500 font-medium leading-relaxed">
                  Our services are not directed at children under 18 years of
                  age. If we discover data collected from a minor, we will
                  delete it immediately.
                </p>
              </div>

              <div id="breach" className="scroll-mt-32">
                <h4 className="text-sm font-black uppercase tracking-widest text-[#2776ea] mb-4 flex items-center gap-2">
                  <AlertTriangle size={18} className="shrink-0" /> 12. Data
                  Breach Notification
                </h4>
                <p className="text-sm text-slate-500 font-medium leading-relaxed">
                  In the event of a breach posing high risk, we notify affected
                  individuals and relevant authorities within **72 hours**.
                </p>
              </div>

              <div id="thirdparty" className="scroll-mt-32">
                <h4 className="text-sm font-black uppercase tracking-widest text-[#2776ea] mb-4 flex items-center gap-2">
                  <ExternalLink size={18} className="shrink-0" /> 13.
                  Third-Party Links
                </h4>
                <p className="text-sm text-slate-500 font-medium leading-relaxed">
                  We are not responsible for the privacy practices of external
                  sites linked from our platform. Please review their policies
                  independently.
                </p>
              </div>

              <div id="changes" className="scroll-mt-32">
                <h4 className="text-sm font-black uppercase tracking-widest text-[#2776ea] mb-4 flex items-center gap-2">
                  <RefreshCw size={18} className="shrink-0" /> 14. Changes to
                  Policy
                </h4>
                <p className="text-sm text-slate-500 font-medium leading-relaxed">
                  We may update this policy periodically. Continued use of our
                  services constitutes acceptance of the latest version.
                </p>
              </div>
            </div>

            <div id="agreements" className="scroll-mt-32">
              <h3 className="text-lg md:text-xl font-black uppercase tracking-widest text-[#2776ea] mb-6 md:mb-8 flex items-center gap-3">
                <FileText size={24} className="shrink-0" /> 15. Data Processing
                Agreements (DPA)
              </h3>
              <div className="bg-slate-900 text-white rounded-2xl md:rounded-[2.5rem] p-6 md:p-10 relative overflow-hidden group">
                <div className="absolute -right-10 -bottom-10 md:-right-20 md:-bottom-20 opacity-5 group-hover:rotate-12 transition-transform duration-1000">
                  <FileText className="w-32 h-32 md:w-50 md:h-50" />
                </div>
                <div className="relative z-10">
                  <p className="text-slate-400 text-sm font-medium leading-relaxed mb-6 md:mb-8 max-w-xl">
                    We process personal data on behalf of clients under strict
                    DPAs compliant with **GDPR Article 28** and the **Indian
                    DPDP Act**.
                  </p>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-6">
                    {[
                      "Clear Processing Instructions",
                      "Sub-processor safeguards",
                      "Audit & Deletion rights",
                      "Security Breach Protocols",
                    ].map((item) => (
                      <div key={item} className="flex items-center gap-3">
                        <CheckCircle2
                          size={16}
                          className="text-[#76ea27] shrink-0"
                        />
                        <span className="text-xs font-black uppercase tracking-widest">
                          {item}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            <div id="compliance" className="scroll-mt-32">
              <h3 className="text-lg md:text-xl font-black uppercase tracking-widest text-[#2776ea] mb-6 md:mb-8 flex items-center gap-3">
                <Scale size={24} className="shrink-0" /> 16. Legal Compliance
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                {[
                  {
                    title: "DPDP Act 2023",
                    sub: "India",
                    link: "Data Protection",
                  },
                  {
                    title: "IT Act 2000",
                    sub: "India",
                    link: "Information Tech",
                  },
                  { title: "EU GDPR", sub: "Europe", link: "Global Standard" },
                ].map((item) => (
                  <div
                    key={item.title}
                    className="p-6 rounded-2xl border-2 border-slate-50 bg-white hover:border-[#2776ea] transition-all"
                  >
                    <p className="text-[10px] font-black text-[#76ea27] uppercase mb-1">
                      {item.sub}
                    </p>
                    <p className="text-lg font-black text-slate-900">
                      {item.title}
                    </p>
                    <p className="text-xs text-slate-400 mt-2 font-medium">
                      {item.link}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-12 md:mt-20 pt-12 md:pt-16 border-t border-slate-100 flex flex-col md:flex-row items-center justify-between gap-8 md:gap-12">
              <div className="max-w-md text-center md:text-left">
                <h4 className="text-2xl md:text-3xl font-black text-slate-900 tracking-tighter">
                  Secure. Compliant. Future-Ready.
                </h4>
                <p className="text-slate-500 font-medium mt-4 leading-relaxed">
                  Questions about your data? Reach out to our dedicated
                  compliance team for a full data processing report.
                </p>
              </div>
              <div className="flex flex-col sm:flex-row gap-4 w-full md:w-auto">
                <a
                  href="mailto:security@webronic.com"
                  className="flex items-center justify-center gap-3 bg-[#2776ea] text-white px-10 py-5 rounded-2xl font-black text-[11px] uppercase tracking-[0.2em] hover:bg-[#76ea27] transition-all shadow-2xl active:scale-95"
                >
                  Contact DPO <Mail size={18} />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
