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
  MessageSquare,ShieldAlert
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
    { id: "updates", title: "12. Policy Updates", icon: Clock },
  ];

  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
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
    <main className="bg-white font-sora pt-24 pb-20">
      {/* --- HERO HEADER --- */}
      <section className="relative overflow-hidden bg-slate-50 py-24 border-b border-slate-100">
        <div className="absolute inset-0 pointer-events-none opacity-40">
           <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#336fa5]/10 rounded-full blur-[120px]" />
           <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-[#5ba12d]/10 rounded-full blur-[120px]" />
        </div>
        
        <div className="relative mx-auto max-w-5xl px-6">
          <div className="inline-flex items-center gap-2 rounded-full bg-white border border-slate-200 px-4 py-1.5 mb-8 shadow-sm">
            <CreditCard size={14} className="text-[#336fa5]" />
            <span className="text-[10px] font-black uppercase tracking-widest text-slate-600">Financial Transparency</span>
          </div>
          <h1 className="text-4xl md:text-7xl font-black text-slate-900 tracking-tighter leading-tight">
            Cancellation & <span className="text-[#336fa5]">Refund</span>
          </h1>
          <div className="mt-8 flex flex-wrap items-center gap-8 text-sm font-bold text-slate-400">
            <div className="flex items-center gap-2"><Clock size={18} className="text-[#336fa5]" /> Dec 18, 2025</div>
            <div className="flex items-center gap-2"><Scale size={18} className="text-[#5ba12d]" /> Webronic Industries Pvt Ltd</div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-20">
        <div className="grid lg:grid-cols-[320px_1fr] gap-16">
          
          {/* --- STICKY SIDEBAR --- */}
          <aside className="hidden lg:block sticky top-32 h-[calc(100vh-140px)] overflow-y-auto pr-4 custom-scrollbar">
            <p className="text-[10px] font-black uppercase tracking-[0.2em] text-slate-400 mb-6 px-4">Policy Contents</p>
            <div className="space-y-1">
              {sections.map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className="w-full flex items-center gap-3 px-4 py-3.5 rounded-2xl text-[11px] font-black uppercase tracking-widest text-slate-500 hover:bg-slate-50 hover:text-[#336fa5] transition-all group text-left border border-transparent hover:border-slate-100"
                >
                  <item.icon size={16} className="group-hover:text-[#336fa5] transition-colors" />
                  {item.title}
                </button>
              ))}
            </div>
          </aside>

          {/* --- MAIN CONTENT --- */}
          <div className="space-y-32">
            
            {/* 1. Overview */}
            <div id="overview" className="scroll-mt-32">
              <div className="bg-[#336fa5]/5 rounded-3xl p-10 border border-[#336fa5]/10">
                <h2 className="text-xl font-black text-slate-900 mt-0 mb-4 flex items-center gap-2">
                  <ShieldCheck className="text-[#336fa5]" /> 1. Policy Overview
                </h2>
                <p className="text-slate-600 font-medium leading-relaxed m-0 italic">
                  This policy outlines the terms and conditions for cancellation and refunds of services provided by Webronic Industries Private Limited. Please read this carefully before engagement.
                </p>
              </div>
            </div>

            {/* 2. Service Categories Table */}
            <div id="categories" className="scroll-mt-32">
              <h3 className="text-xl font-black uppercase tracking-widest text-[#336fa5] mb-8 flex items-center gap-3">
                <BarChart3 size={24} /> 2. Service Categories
              </h3>
              <div className="overflow-hidden rounded-[2rem] border border-slate-100 shadow-sm overflow-x-auto">
                <table className="w-full text-left border-collapse min-w-[700px]">
                  <thead className="bg-slate-50">
                    <tr>
                      <th className="px-6 py-5 text-[10px] font-black uppercase text-slate-400">Service Type</th>
                      <th className="px-6 py-5 text-[10px] font-black uppercase text-slate-400">Description</th>
                      <th className="px-6 py-5 text-[10px] font-black uppercase text-slate-400">Cancellation Terms</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-100 text-sm font-medium">
                    <tr>
                      <td className="px-6 py-4 text-slate-900 font-bold">Project-Based</td>
                      <td className="px-6 py-4 text-slate-500">Custom software, implementation</td>
                      <td className="px-6 py-4 text-[#336fa5]">Milestone-based</td>
                    </tr>
                    <tr>
                      <td className="px-6 py-4 text-slate-900 font-bold">Recurring Services</td>
                      <td className="px-6 py-4 text-slate-500">Monthly maintenance, subs</td>
                      <td className="px-6 py-4 text-[#336fa5]">30 days written notice</td>
                    </tr>
                    <tr>
                      <td className="px-6 py-4 text-slate-900 font-bold">Consulting</td>
                      <td className="px-6 py-4 text-slate-500">Advisory, Professional training</td>
                      <td className="px-6 py-4 text-[#336fa5]">48 hours notice</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>

            {/* 3. Cancellation Policy */}
            <div id="cancellation" className="scroll-mt-32">
              <h3 className="text-xl font-black uppercase tracking-widest text-[#336fa5] mb-8 flex items-center gap-3">
                <Ban size={24} /> 3. Cancellation Policy
              </h3>
              <div className="space-y-8">
                <div className="p-8 rounded-[2rem] bg-slate-50 border border-slate-100">
                  <h4 className="text-xs font-black text-slate-900 uppercase mb-4 tracking-widest">3.1 Project-Based Services</h4>
                  <ul className="space-y-3">
                    {["Before Initiation: Advance payments non-refundable", "During Execution: Paid based on completed milestones + pro-rated WIP", "Accepted Milestones: No refund for completed/accepted work"].map((item, i) => (
                      <li key={i} className="flex items-start gap-3 text-xs font-bold text-slate-600">
                        <CheckCircle2 size={16} className="text-[#5ba12d] mt-0.5" /> {item}
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="p-6 rounded-2xl border border-slate-100">
                    <p className="text-[10px] font-black text-[#336fa5] uppercase mb-2">3.2 Recurring</p>
                    <p className="text-xs text-slate-500 font-medium">Service continues until the end of the paid billing period. No partial refunds.</p>
                  </div>
                  <div className="p-6 rounded-2xl border border-slate-100">
                    <p className="text-[10px] font-black text-[#336fa5] uppercase mb-2">3.3 Fixed-Fee</p>
                    <p className="text-xs text-slate-500 font-medium">Full refund minus 10% processing fee before work begins.</p>
                  </div>
                </div>
              </div>
            </div>

            {/* 4. Refund Calculation */}
            <div id="refund-policy" className="scroll-mt-32">
              <h3 className="text-xl font-black uppercase tracking-widest text-[#336fa5] mb-8 flex items-center gap-3">
                <CreditCard size={24} /> 4. Refund Policy & Calculation
              </h3>
              <div className="bg-slate-900 text-white rounded-[2.5rem] p-10 relative overflow-hidden">
                <p className="text-xs font-black text-[#5ba12d] uppercase tracking-[0.2em] mb-6">Calculation Logic</p>
                <div className="p-6 bg-white/5 border border-white/10 rounded-2xl mb-8">
                  <code className="text-lg font-black text-white tracking-wider">Refund = Total Paid - (Work Done + Costs + Fee)</code>
                </div>
                <div className="grid sm:grid-cols-2 gap-6 text-[11px] font-black uppercase tracking-widest opacity-70">
                   <div className="flex gap-2"><ArrowRight size={14} className="text-[#5ba12d]" /> Third-party licenses: Non-refundable</div>
                   <div className="flex gap-2"><ArrowRight size={14} className="text-[#5ba12d]" /> Setup & Onboarding: Non-refundable</div>
                </div>
              </div>
            </div>

            {/* 5. Refund Process Timeline */}
            <div id="process" className="scroll-mt-32">
              <h3 className="text-xl font-black uppercase tracking-widest text-[#336fa5] mb-8 flex items-center gap-3">
                <RefreshCcw size={24} /> 5. Refund Process
              </h3>
              <div className="grid md:grid-cols-3 gap-6">
                {[
                  { t: "Review Period", v: "5-10 Business Days", d: "Internal assessment of request" },
                  { t: "Processing", v: "15 Business Days", d: "Approval to fund dispatch" },
                  { t: "Bank Credit", v: "5-7 Business Days", d: "Bank processing time" }
                ].map((item, i) => (
                  <div key={i} className="p-6 rounded-3xl bg-slate-50 border border-slate-200">
                    <p className="text-[10px] font-black text-slate-400 uppercase mb-1">{item.t}</p>
                    <p className="text-sm font-black text-slate-900 mb-2">{item.v}</p>
                    <p className="text-[10px] text-slate-500 font-medium">{item.d}</p>
                  </div>
                ))}
              </div>
            </div>
           
            {/* 6. Dispute Resolution */}
            <div id="dispute" className="scroll-mt-32">
              <h3 className="text-xl font-black uppercase tracking-widest text-[#336fa5] mb-8 flex items-center gap-3">
                <MessageSquare size={24} /> 6. Dispute Resolution
              </h3>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="p-8 rounded-[2rem] border border-slate-100 bg-white">
                  <h4 className="text-[10px] font-black text-slate-400 uppercase tracking-widest mb-4">6.1 Quality Issues</h4>
                  <p className="text-sm text-slate-600 font-medium leading-relaxed">
                    Contact us at <span className="text-[#336fa5] font-bold">support@webronic.com</span> within 3 days. Options include fixes, revisions, or partial refunds.
                  </p>
                </div>
                <div className="p-8 rounded-[2rem] bg-slate-900 text-white">
                  <h4 className="text-[10px] font-black text-[#5ba12d] uppercase tracking-widest mb-4">6.2 Escalation</h4>
                  <p className="text-sm opacity-80 font-medium leading-relaxed">
                    Unsatisfied? Email <span className="text-[#5ba12d] font-bold">contact@webronic.com</span> with &quot;ESCALATION&quot; in the subject. Response within 5 business days.
                  </p>
                </div>
              </div>
            </div>

            {/* 7. Special Circumstances */}
            <div id="special" className="scroll-mt-32">
               <h3 className="text-xl font-black uppercase tracking-widest text-[#336fa5] mb-8 flex items-center gap-3">
                <AlertCircle size={24} /> 7. Special Circumstances
              </h3>
              <div className="space-y-6">
                <div className="p-8 rounded-[2rem] bg-slate-50 border border-slate-100 flex items-start gap-6">
                  <AlertCircle className="text-[#336fa5] shrink-0" size={32} />
                  <div>
                    <h4 className="text-sm font-black text-slate-900 uppercase mb-2">7.1 Force Majeure</h4>
                    <p className="text-sm text-slate-500 font-medium leading-relaxed italic">
                      In cases of natural disasters or pandemics, service timelines may be extended. Refunds are provided at our discretion for significant delays.
                    </p>
                  </div>
                </div>
                <div className="p-8 rounded-[2rem] border border-red-100 bg-red-50 flex items-start gap-6">
                  <ShieldAlert className="text-red-500 shrink-0" size={32} />
                  <div>
                    <h4 className="text-sm font-black text-red-600 uppercase mb-2">7.2 Client Breach</h4>
                    <p className="text-sm text-red-700 font-medium leading-relaxed">
                      If cancellation is due to client breach of contract, no refund will be provided and we reserve the right to claim damages.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* 8. Scope Changes */}
            <div id="scope" className="scroll-mt-32">
              <h3 className="text-xl font-black uppercase tracking-widest text-[#336fa5] mb-8 flex items-center gap-3">
                <RefreshCcw size={24} /> 8. Changes to Service Scope
              </h3>
              <div className="bg-slate-900 text-white p-10 rounded-[2.5rem]">
                <p className="text-sm font-medium leading-relaxed opacity-80 mb-6">
                  Want to modify instead of cancel? Submit a written request. Existing payments may be adjusted toward the new scope.
                </p>
                <div className="flex items-center gap-4 text-[10px] font-black text-[#5ba12d] uppercase tracking-widest">
                  <CheckCircle2 size={16} /> No cancellation fees when transitioning scope.
                </div>
              </div>
            </div>

            {/* 9 & 10. Refusal & Contractual */}
            <div className="grid md:grid-cols-2 gap-8">
              <div id="refusal" className="scroll-mt-32 p-8 rounded-[2rem] border border-slate-100">
                <h4 className="text-xs font-black text-[#336fa5] uppercase tracking-widest mb-4 flex items-center gap-2">
                  <Ban size={16} /> 9. Right to Refuse
                </h4>
                <p className="text-xs text-slate-500 font-medium leading-relaxed">
                  We reserve the right to cancel and provide a full refund if requests are outside our expertise or involve legal compliance issues.
                </p>
              </div>
              <div id="contractual" className="scroll-mt-32 p-8 rounded-[2rem] bg-slate-50 border border-slate-100">
                <h4 className="text-xs font-black text-[#5ba12d] uppercase tracking-widest mb-4 flex items-center gap-2">
                  <Gavel size={16} /> 10. Contract Specifics
                </h4>
                <p className="text-xs text-slate-500 font-medium leading-relaxed">
                  Specific service agreements may include terms that supersede this general policy. Contract terms take precedence.
                </p>
              </div>
            </div>

            {/* 11. Data & IP Rights */}
            <div id="data-ip" className="scroll-mt-32">
               <h3 className="text-xl font-black uppercase tracking-widest text-[#336fa5] mb-8 flex items-center gap-3">
                <ShieldCheck size={24} /> 11. Data and IP Upon Cancellation
              </h3>
              <div className="grid md:grid-cols-2 gap-6">
                 <div className="p-8 rounded-[2rem] border border-slate-100">
                    <p className="text-xs font-black text-slate-900 uppercase mb-4 tracking-widest">User Data</p>
                    <p className="text-xs text-slate-500 leading-relaxed font-medium">You retain all rights. 30-day grace period for retrieval after which data is securely destroyed.</p>
                 </div>
                 <div className="p-8 rounded-[2rem] bg-slate-50 border border-slate-100">
                    <p className="text-xs font-black text-slate-900 uppercase mb-4 tracking-widest">Work Product</p>
                    <p className="text-xs text-slate-500 leading-relaxed font-medium">Rights for WIP are determined based on payment received. Proprietary tools remain Webronic IP.</p>
                 </div>
              </div>
            </div>

            {/* Support Footer */}
            <div className="mt-20 pt-16 border-t border-slate-100 grid md:grid-cols-2 gap-12">
               <div>
                  <h4 className="text-2xl font-black text-slate-900 tracking-tight">Financial Inquiries</h4>
                  <p className="text-slate-500 font-medium mt-4">For formal refund requests or billing disputes, please reach our accounts department.</p>
                  <div className="mt-8 space-y-4">
                     <div className="flex items-center gap-4 text-sm font-bold text-[#336fa5] hover:text-slate-900 transition-colors">
                        <Mail size={18} className="text-[#5ba12d]" /> support@webronic.com
                     </div>
                     <div className="flex items-center gap-4 text-sm font-bold text-slate-900">
                        <Phone size={18} className="text-[#336fa5]" /> +91 72000 88500
                     </div>
                  </div>
               </div>
               
               <div className="bg-[#336fa5]/5 p-10 rounded-[2.5rem] border border-[#336fa5]/10 flex flex-col justify-between">
                  <p className="text-xs font-bold text-slate-600 italic">Mention your Invoice/Contract number for expedited assessment.</p>
                  <button 
                    onClick={() => setIsModalOpen(true)}
                    className="mt-10 flex items-center justify-center gap-3 bg-[#336fa5] text-white px-8 py-4 rounded-2xl font-black text-[11px] uppercase tracking-widest hover:bg-[#5ba12d] transition-all shadow-xl active:scale-95"
                  >
                    Initiate Refund Request <ArrowRight size={16} />
                  </button>
               </div>
            </div>

          </div>
        </div>
      </section>

      {/* --- MODAL --- */}
      {isModalOpen && (
        <div className="fixed inset-0 z-[999] flex items-center justify-center p-4">
          <div className="absolute inset-0 bg-slate-900/60 backdrop-blur-md animate-in fade-in duration-300" onClick={() => setIsModalOpen(false)} />
          <div className="relative w-full max-w-lg bg-white rounded-[2.5rem] shadow-2xl p-10 animate-in zoom-in-95 duration-300">
            <button onClick={() => setIsModalOpen(false)} className="absolute top-6 right-6 text-slate-400 hover:text-slate-900 transition-colors"><X size={24} /></button>
            {!isSubmitted ? (
              <>
                <h3 className="text-2xl font-black text-slate-900 tracking-tight mb-2">Request Refund</h3>
                <p className="text-slate-500 text-sm font-medium mb-8">Please provide your project and billing details.</p>
                <form className="space-y-4" onSubmit={handleSubmit}>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <input type="text" placeholder="Contract Number" className="w-full p-4 rounded-xl bg-slate-50 border border-slate-100 text-sm outline-none focus:border-[#336fa5] transition-all" required />
                    <input type="text" placeholder="Project Name" className="w-full p-4 rounded-xl bg-slate-50 border border-slate-100 text-sm outline-none focus:border-[#336fa5] transition-all" required />
                  </div>
                  <input type="email" placeholder="Billing Email" className="w-full p-4 rounded-xl bg-slate-50 border border-slate-100 text-sm outline-none focus:border-[#336fa5] transition-all" required />
                  <textarea placeholder="Reason for refund request" rows={4} className="w-full p-4 rounded-xl bg-slate-50 border border-slate-100 text-sm outline-none focus:border-[#336fa5] transition-all resize-none" required />
                  <button className="w-full bg-[#336fa5] text-white py-5 rounded-xl font-black text-[11px] uppercase tracking-[0.2em] shadow-lg hover:bg-slate-900 transition-all active:scale-95">Submit Request</button>
                </form>
              </>
            ) : (
              <div className="py-12 text-center">
                <CheckCircle2 className="mx-auto text-[#5ba12d] mb-4" size={48} />
                <h4 className="text-xl font-black text-slate-900">Request Logged</h4>
                <p className="text-slate-500 text-sm font-medium mt-2">You will receive an update within 48 hours.</p>
              </div>
            )}
          </div>
        </div>
      )}
    </main>
  );
}