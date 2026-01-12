"use client";

import React, { useState } from "react";
import {
  X,
  Mail,
  Phone,
  ArrowRight,
  Clock,
  ShieldCheck,
  Ban,
  RefreshCcw,
  CreditCard,
  Gavel,
  AlertCircle,
  CheckCircle2,
  FileText,
  BarChart3,
  Scale,
  MessageSquare,
  ShieldAlert,
  Menu,
} from "lucide-react";

export default function CancellationRefundPolicy() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const sections = [
    { id: "overview", title: "1. Policy Overview", icon: FileText },
    { id: "categories", title: "2. Service Categories", icon: BarChart3 },
    { id: "cancellation", title: "3. Cancellation Policy", icon: Ban },
    { id: "refund-policy", title: "4. Refund Policy", icon: CreditCard },
    { id: "process", title: "5. Refund Process", icon: RefreshCcw },
    { id: "dispute", title: "6. Dispute Resolution", icon: Scale },
    { id: "special", title: "7. Special Circumstances", icon: AlertCircle },
    { id: "scope", title: "8. Scope Changes", icon: RefreshCcw },
    { id: "refusal", title: "9. Right to Refuse", icon: ShieldCheck },
    { id: "contractual", title: "10. Contract Specifics", icon: Gavel },
    { id: "data-ip", title: "11. Data & IP Rights", icon: ShieldCheck },
    //
  ];

  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      const offset = 100;
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = el.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      window.scrollTo({
        top: elementPosition - offset,
        behavior: "smooth",
      });
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
    setTimeout(() => {
      setIsModalOpen(false);
      setIsSubmitted(false);
    }, 2000);
  };

  return (
    <main className="bg-white font-sora w-full overflow-x-hidden pt-12 md:pt-24 pb-20">
      <section className="relative overflow-hidden bg-slate-50 py-16 md:py-24 border-b border-slate-100">
        <div className="absolute inset-0 pointer-events-none opacity-40">
          <div className="absolute -top-10 -right-10 w-64 h-64 md:w-125 md:h-125 bg-[#2776ea]/10 rounded-full blur-[80px] md:blur-[120px]" />
          <div className="absolute -bottom-10 -left-10 w-64 h-64 md:w-125 md:h-125 bg-[#76ea27]/10 rounded-full blur-[80px] md:blur-[120px]" />
        </div>

        <div className="relative mx-auto max-w-7xl px-4 md:px-6">
          <div className="flex items-center  gap-4 mb-6">
            <CreditCard size={14} className="text-[#2776ea]" />
            <span className="text-[11px] font-black uppercase tracking-[0.3em] text-[#2776ea]">
              Financial Transparency
            </span>
          </div>
          <h1 className="text-3xl sm:text-5xl md:text-7xl font-black text-slate-900 tracking-tighter leading-tight">
            Cancellation &{" "}
            <span className="bg-linear-to-r from-[#2776ea] to-[#76ea27] bg-clip-text text-transparent">
              Refund
            </span>
          </h1>
          <div className="mt-8 flex flex-wrap items-center gap-4 md:gap-8 text-xs md:text-sm font-bold text-slate-400">
            <div className="flex items-center gap-2">
              <Clock size={18} className="text-[#2776ea]" /> Dec 18, 2025
            </div>
            <div className="flex items-center gap-2">
              <Scale size={18} className="text-[#76ea27]" /> Webronic Industries
              Pvt Ltd
            </div>
          </div>
        </div>
      </section>

      <div className="lg:hidden sticky top-0 z-40 bg-white/95 backdrop-blur-md border-b border-slate-100 flex items-center overflow-x-auto no-scrollbar px-4 py-3 gap-2">
        {sections.map((item) => (
          <button
            key={item.id}
            onClick={() => scrollToSection(item.id)}
            className="whitespace-nowrap flex items-center gap-2 px-4 py-2 bg-slate-50 border border-slate-100 rounded-full text-[10px] font-black uppercase text-slate-500 active:bg-[#2776ea] active:text-white transition-all"
          >
            <item.icon size={12} /> {item.title.split(". ")[1]}
          </button>
        ))}
      </div>

      <section className="mx-auto max-w-7xl px-4 md:px-6 py-10 md:py-20">
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-16">
          <aside className="hidden lg:block w-75 shrink-0 sticky top-32 h-[calc(100vh-140px)] overflow-y-auto pr-4 custom-scrollbar">
            <p className="text-[10px] font-black uppercase tracking-[0.2em] text-slate-400 mb-6 px-4">
              Policy Contents
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
                    className="group-hover:text-[#2776ea] transition-colors"
                  />
                  {item.title}
                </button>
              ))}
            </div>
          </aside>

          <div className="flex-1 space-y-20 md:space-y-32">
            <div id="overview" className="scroll-mt-24 md:scroll-mt-32">
              <div className="bg-[#2776ea]/5 rounded-2xl md:rounded-3xl p-6 md:p-10 border border-[#2776ea]/10">
                <h2 className="text-xl md:text-2xl font-black text-slate-900 mb-4 flex items-center gap-2">
                  <ShieldCheck className="text-[#2776ea] shrink-0" /> 1. Policy
                  Overview
                </h2>
                <p className="text-slate-600 font-medium leading-relaxed m-0 italic text-sm md:text-base">
                  This policy outlines the terms and conditions for cancellation
                  and refunds of services provided by Webronic Industries
                  Private Limited. Please read this carefully before engagement.
                </p>
              </div>
            </div>

            <div id="categories" className="scroll-mt-24 md:scroll-mt-32">
              <h3 className="text-lg md:text-xl font-black uppercase tracking-widest text-[#2776ea] mb-6 md:mb-8 flex items-center gap-3">
                <BarChart3 size={24} className="shrink-0" /> 2. Service
                Categories
              </h3>
              <div className="overflow-x-auto rounded-2xl md:rounded-4xl border border-slate-100 shadow-sm">
                <table className="w-full text-left border-collapse min-w-150">
                  <thead className="bg-slate-50">
                    <tr>
                      <th className="px-6 py-5 text-[10px] font-black uppercase text-slate-400">
                        Service Type
                      </th>
                      <th className="px-6 py-5 text-[10px] font-black uppercase text-slate-400">
                        Description
                      </th>
                      <th className="px-6 py-5 text-[10px] font-black uppercase text-slate-400">
                        Cancellation Terms
                      </th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-100 text-xs md:text-sm font-medium">
                    <tr>
                      <td className="px-6 py-4 text-slate-900 font-bold">
                        Project-Based
                      </td>
                      <td className="px-6 py-4 text-slate-500">
                        Custom software, implementation
                      </td>
                      <td className="px-6 py-4 text-[#2776ea]">
                        Milestone-based
                      </td>
                    </tr>
                    <tr>
                      <td className="px-6 py-4 text-slate-900 font-bold">
                        Recurring Services
                      </td>
                      <td className="px-6 py-4 text-slate-500">
                        Monthly maintenance, subs
                      </td>
                      <td className="px-6 py-4 text-[#2776ea]">
                        30 days written notice
                      </td>
                    </tr>
                    <tr>
                      <td className="px-6 py-4 text-slate-900 font-bold">
                        Consulting
                      </td>
                      <td className="px-6 py-4 text-slate-500">
                        Advisory, Professional training
                      </td>
                      <td className="px-6 py-4 text-[#2776ea]">
                        48 hours notice
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>

            <div id="cancellation" className="scroll-mt-24 md:scroll-mt-32">
              <h3 className="text-lg md:text-xl font-black uppercase tracking-widest text-[#2776ea] mb-8 flex items-center gap-3">
                <Ban size={24} className="shrink-0" /> 3. Cancellation Policy
              </h3>
              <div className="space-y-6 md:space-y-8">
                <div className="p-6 md:p-8 rounded-2xl md:rounded-4xl bg-slate-50 border border-slate-100">
                  <h4 className="text-xs font-black text-slate-900 uppercase mb-4 tracking-widest">
                    3.1 Project-Based Services
                  </h4>
                  <ul className="space-y-3">
                    {[
                      "Before Initiation: Advance payments non-refundable",
                      "During Execution: Paid based on milestones + WIP",
                      "Accepted Milestones: No refund for completed work",
                    ].map((item, i) => (
                      <li
                        key={i}
                        className="flex items-start gap-3 text-xs font-bold text-slate-600"
                      >
                        <CheckCircle2
                          size={16}
                          className="text-[#76ea27] mt-0.5 shrink-0"
                        />{" "}
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="p-6 rounded-2xl border border-slate-100">
                    <p className="text-[10px] font-black text-[#2776ea] uppercase mb-2">
                      3.2 Recurring
                    </p>
                    <p className="text-xs text-slate-500 font-medium">
                      Service continues until the end of the paid billing
                      period. No partial refunds.
                    </p>
                  </div>
                  <div className="p-6 rounded-2xl border border-slate-100">
                    <p className="text-[10px] font-black text-[#2776ea] uppercase mb-2">
                      3.3 Fixed-Fee
                    </p>
                    <p className="text-xs text-slate-500 font-medium">
                      Full refund minus 10% processing fee before work begins.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div id="refund-policy" className="scroll-mt-24 md:scroll-mt-32">
              <h3 className="text-lg md:text-xl font-black uppercase tracking-widest text-[#2776ea] mb-8 flex items-center gap-3">
                <CreditCard size={24} className="shrink-0" /> 4. Refund Policy
              </h3>
              <div className="bg-slate-900 text-white rounded-4xl md:rounded-[2.5rem] p-6 md:p-10 relative overflow-hidden">
                <p className="text-xs font-black text-[#76ea27] uppercase tracking-[0.2em] mb-6">
                  Calculation Logic
                </p>
                <div className="p-4 md:p-6 bg-white/5 border border-white/10 rounded-2xl mb-8">
                  <code className="text-sm md:text-lg font-black text-white tracking-wider wrap-break-word block">
                    Refund = Total Paid - (Work Done + Costs + Fee)
                  </code>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-[10px] md:text-[11px] font-black uppercase tracking-widest opacity-70">
                  <div className="flex gap-2">
                    <ArrowRight size={14} className="text-[#76ea27] shrink-0" />{" "}
                    Third-party licenses: Non-refundable
                  </div>
                  <div className="flex gap-2">
                    <ArrowRight size={14} className="text-[#76ea27] shrink-0" />{" "}
                    Setup & Onboarding: Non-refundable
                  </div>
                </div>
              </div>
            </div>

            <div id="process" className="scroll-mt-24 md:scroll-mt-32">
              <h3 className="text-lg md:text-xl font-black uppercase tracking-widest text-[#2776ea] mb-8 flex items-center gap-3">
                <RefreshCcw size={24} className="shrink-0" /> 5. Refund Process
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                {[
                  { t: "Review Period", v: "5-10 Days", d: "Assessment" },
                  { t: "Processing", v: "15 Days", d: "Fund dispatch" },
                  { t: "Bank Credit", v: "5-7 Days", d: "Bank processing" },
                ].map((item, i) => (
                  <div
                    key={i}
                    className="p-5 md:p-6 rounded-2xl md:rounded-3xl bg-slate-50 border border-slate-200 text-center sm:text-left"
                  >
                    <p className="text-[10px] font-black text-slate-400 uppercase mb-1">
                      {item.t}
                    </p>
                    <p className="text-sm md:text-base font-black text-slate-900 mb-2">
                      {item.v}
                    </p>
                    <p className="text-[10px] text-slate-500 font-medium">
                      {item.d}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            <div id="dispute" className="scroll-mt-24 md:scroll-mt-32">
              <h3 className="text-lg md:text-xl font-black uppercase tracking-widest text-[#2776ea] mb-8 flex items-center gap-3">
                <MessageSquare size={24} className="shrink-0" /> 6. Dispute
                Resolution
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
                <div className="p-6 md:p-8 rounded-2xl md:rounded-4xl border border-slate-100 bg-white">
                  <h4 className="text-[10px] font-black text-slate-400 uppercase tracking-widest mb-4">
                    6.1 Quality Issues
                  </h4>
                  <p className="text-sm text-slate-600 font-medium leading-relaxed">
                    Contact{" "}
                    <span className="text-[#2776ea] font-bold break-all">
                      support@webronic.com
                    </span>{" "}
                    within 3 days. Options include fixes or partial refunds.
                  </p>
                </div>
                <div className="p-6 md:p-8 rounded-2xl md:rounded-4xl bg-slate-900 text-white">
                  <h4 className="text-[10px] font-black text-[#76ea27] uppercase tracking-widest mb-4">
                    6.2 Escalation
                  </h4>
                  <p className="text-sm opacity-80 font-medium leading-relaxed">
                    Email{" "}
                    <span className="text-[#76ea27] font-bold break-all">
                      contact@webronic.com
                    </span>{" "}
                    with &quot;ESCALATION&quot;. Response within 5 business
                    days.
                  </p>
                </div>
              </div>
            </div>

            <div id="special" className="scroll-mt-24 md:scroll-mt-32">
              <h3 className="text-lg md:text-xl font-black uppercase tracking-widest text-[#2776ea] mb-8 flex items-center gap-3">
                <AlertCircle size={24} className="shrink-0" /> 7. Special Cases
              </h3>
              <div className="space-y-4">
                <div className="p-6 md:p-8 rounded-2xl md:rounded-4xl bg-slate-50 border border-slate-100 flex flex-col sm:flex-row items-start gap-4 md:gap-6">
                  <AlertCircle className="text-[#2776ea] shrink-0" size={32} />
                  <div>
                    <h4 className="text-sm font-black text-slate-900 uppercase mb-2">
                      7.1 Force Majeure
                    </h4>
                    <p className="text-sm text-slate-500 font-medium leading-relaxed italic">
                      In cases of natural disasters or pandemics, service
                      timelines may be extended. Refunds are discretionary.
                    </p>
                  </div>
                </div>
                <div className="p-6 md:p-8 rounded-2xl md:rounded-4xl border border-red-100 bg-red-50 flex flex-col sm:flex-row items-start gap-4 md:gap-6">
                  <ShieldAlert className="text-red-500 shrink-0" size={32} />
                  <div>
                    <h4 className="text-sm font-black text-red-600 uppercase mb-2">
                      7.2 Client Breach
                    </h4>
                    <p className="text-sm text-red-700 font-medium leading-relaxed">
                      If cancellation is due to client breach, no refund will be
                      provided and we reserve the right to claim damages.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div id="scope" className="scroll-mt-24 md:scroll-mt-32">
              <h3 className="text-lg md:text-xl font-black uppercase tracking-widest text-[#2776ea] mb-8 flex items-center gap-3">
                <RefreshCcw size={24} className="shrink-0" /> 8. Changes to
                Scope
              </h3>
              <div className="bg-slate-900 text-white p-6 md:p-10 rounded-2xl md:rounded-[2.5rem]">
                <p className="text-sm font-medium leading-relaxed opacity-80 mb-6">
                  Want to modify instead of cancel? Submit a written request.
                  Existing payments may be adjusted toward the new scope.
                </p>
                <div className="flex items-center gap-3 text-[10px] font-black text-[#76ea27] uppercase tracking-widest">
                  <CheckCircle2 size={16} className="shrink-0" /> No
                  cancellation fees for transitioning.
                </div>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-8">
              <div
                id="refusal"
                className="scroll-mt-24 p-6 md:p-8 rounded-2xl md:rounded-4xl border border-slate-100"
              >
                <h4 className="text-xs font-black text-[#2776ea] uppercase mb-4 flex items-center gap-2">
                  <Ban size={16} /> 9. Refuse
                </h4>
                <p className="text-xs text-slate-500 font-medium leading-relaxed">
                  We may cancel if requests are outside expertise or involve
                  legal compliance issues.
                </p>
              </div>
              <div
                id="contractual"
                className="scroll-mt-24 p-6 md:p-8 rounded-2xl md:rounded-4xl bg-slate-50 border border-slate-100"
              >
                <h4 className="text-xs font-black text-[#76ea27] uppercase mb-4 flex items-center gap-2">
                  <Gavel size={16} /> 10. Contract
                </h4>
                <p className="text-xs text-slate-500 font-medium leading-relaxed">
                  Specific service agreements may include terms that take
                  precedence over this policy.
                </p>
              </div>
            </div>

            <div id="data-ip" className="scroll-mt-24 md:scroll-mt-32">
              <h3 className="text-lg md:text-xl font-black uppercase tracking-widest text-[#2776ea] mb-8 flex items-center gap-3">
                <ShieldCheck size={24} className="shrink-0" /> 11. Data and IP
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-6">
                <div className="p-6 md:p-8 rounded-2xl md:rounded-4xl border border-slate-100">
                  <p className="text-xs font-black text-slate-900 uppercase mb-4 tracking-widest">
                    User Data
                  </p>
                  <p className="text-xs text-slate-500 leading-relaxed font-medium">
                    30-day grace period for retrieval after which data is
                    destroyed.
                  </p>
                </div>
                <div className="p-6 md:p-8 rounded-2xl md:rounded-4xl bg-slate-50 border border-slate-100">
                  <p className="text-xs font-black text-slate-900 uppercase mb-4 tracking-widest">
                    Work Product
                  </p>
                  <p className="text-xs text-slate-500 leading-relaxed font-medium">
                    Rights determined based on payments received. Proprietary
                    tools remain Webronic IP.
                  </p>
                </div>
              </div>
            </div>

            <div className="mt-10 md:mt-20 pt-10 md:pt-16 border-t border-slate-100 grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-12">
              <div className="text-center md:text-left">
                <h4 className="text-xl md:text-2xl font-black text-slate-900 tracking-tight">
                  Financial Inquiries
                </h4>
                <p className="text-slate-500 font-medium mt-4 text-sm md:text-base">
                  For formal refund requests, please reach our accounts
                  department.
                </p>
                <div className="mt-8 space-y-4">
                  <div className="flex items-center justify-center md:justify-start gap-3 md:gap-4 text-sm font-bold text-[#2776ea] break-all">
                    <Mail size={18} className="text-[#76ea27] shrink-0" />{" "}
                    support@webronic.com
                  </div>
                  <div className="flex items-center justify-center md:justify-start gap-4 text-sm font-bold text-slate-900">
                    <Phone size={18} className="text-[#2776ea] shrink-0" /> +91
                    72000 88500
                  </div>
                </div>
              </div>

              <div className="bg-[#2776ea]/5 p-6 md:p-10 rounded-2xl md:rounded-[2.5rem] border border-[#2776ea]/10 flex flex-col justify-between">
                <p className="text-[10px] md:text-xs font-bold text-slate-600 italic mb-6">
                  Mention your Invoice/Contract number for expedited assessment.
                </p>
                <button
                  onClick={() => setIsModalOpen(true)}
                  className="flex items-center justify-center gap-3 bg-[#2776ea] text-white px-4 md:px-8 py-4 rounded-xl md:rounded-2xl font-black text-[10px] md:text-[11px] uppercase tracking-widest hover:bg-[#76ea27] transition-all shadow-xl active:scale-95"
                >
                  Initiate Refund Request <ArrowRight size={16} />
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {isModalOpen && (
        <div className="fixed inset-0 z-999 flex items-center justify-center p-4">
          <div
            className="absolute inset-0 bg-slate-900/60 backdrop-blur-md"
            onClick={() => setIsModalOpen(false)}
          />
          <div className="relative w-full max-w-lg bg-white rounded-2xl md:rounded-[2.5rem] shadow-2xl p-6 md:p-10 max-h-[90vh] overflow-y-auto">
            <button
              onClick={() => setIsModalOpen(false)}
              className="absolute top-6 right-6 text-slate-400 hover:text-slate-900"
            >
              <X size={24} />
            </button>
            {!isSubmitted ? (
              <>
                <h3 className="text-xl md:text-2xl font-black text-slate-900 tracking-tight mb-2">
                  Request Refund
                </h3>
                <p className="text-slate-500 text-xs md:text-sm font-medium mb-6 md:mb-8">
                  Provide your project and billing details.
                </p>
                <form className="space-y-4" onSubmit={handleSubmit}>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <input
                      type="text"
                      placeholder="Contract No."
                      className="w-full p-4 rounded-xl bg-slate-50 border border-slate-100 text-sm outline-none focus:border-[#2776ea]"
                      required
                    />
                    <input
                      type="text"
                      placeholder="Project Name"
                      className="w-full p-4 rounded-xl bg-slate-50 border border-slate-100 text-sm outline-none focus:border-[#2776ea]"
                      required
                    />
                  </div>
                  <input
                    type="email"
                    placeholder="Billing Email"
                    className="w-full p-4 rounded-xl bg-slate-50 border border-slate-100 text-sm outline-none focus:border-[#2776ea]"
                    required
                  />
                  <textarea
                    placeholder="Reason"
                    rows={3}
                    className="w-full p-4 rounded-xl bg-slate-50 border border-slate-100 text-sm outline-none focus:border-[#2776ea] resize-none"
                    required
                  />
                  <button className="w-full bg-[#2776ea] text-white py-4 md:py-5 rounded-xl font-black text-[10px] md:text-[11px] uppercase tracking-[0.2em] shadow-lg hover:bg-[#76ea27] transition-all active:scale-95">
                    Submit Request
                  </button>
                </form>
              </>
            ) : (
              <div className="py-10 md:py-12 text-center">
                <CheckCircle2
                  className="mx-auto text-[#76ea27] mb-4"
                  size={48}
                />
                <h4 className="text-xl font-black text-slate-900">
                  Request Logged
                </h4>
                <p className="text-slate-500 text-sm font-medium mt-2">
                  Update within 48 hours.
                </p>
              </div>
            )}
          </div>
        </div>
      )}
    </main>
  );
}
