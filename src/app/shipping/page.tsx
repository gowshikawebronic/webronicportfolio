"use client";

import React, { useState } from "react";
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
  FileCode,
  Ban,
  ShieldAlert,
  X,
  Settings2,
  CheckCircle2,
  Inbox,
  Award,
} from "lucide-react";

export default function ShippingAndExchange() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const sections = [
    { id: "overview", title: "1. Policy Overview", icon: Zap },
    { id: "digital", title: "2. Digital Delivery", icon: FileCode },
    { id: "physical", title: "3. Physical Shipping", icon: Package },
    { id: "timeline", title: "4. Delivery Timeline", icon: Clock },
    { id: "failed", title: "5. Failed Delivery", icon: AlertCircle },
    { id: "damage", title: "6. Damaged Items", icon: ShieldCheck },
    { id: "exchange", title: "7. Exchange Policy", icon: RefreshCcw },
    { id: "service-mod", title: "8. Service Mods", icon: Settings2 },
    { id: "international", title: "9. International", icon: Globe },
    { id: "special", title: "10. Special Handling", icon: Award },
    { id: "unclaimed", title: "11. Unclaimed Items", icon: Inbox },
    { id: "force-majeure", title: "12. Force Majeure", icon: AlertCircle },
    { id: "updates", title: "13. Policy Updates", icon: RefreshCcw },
  ];

  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      const offset = 90;
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
    <main className="bg-white font-sora w-full overflow-x-hidden pt-4">
      <section className="relative overflow-hidden bg-slate-50 py-12 md:py-24 border-b border-slate-100">
        <div className="absolute inset-0 pointer-events-none opacity-40">
          <div className="absolute -top-10 -right-10 w-40 h-40 md:w-125 md:h-125 bg-[#2776ea]/10 rounded-full blur-[60px] md:blur-[120px]" />
          <div className="absolute -bottom-10 -left-10 w-40 h-40 md:w-125 md:h-125 bg-[#76ea27]/10 rounded-full blur-[60px] md:blur-[120px]" />
        </div>

        <div className="relative mx-auto max-w-7xl px-4 md:px-6">
          <div className="flex items-center  gap-4 mb-6">
            <Truck size={14} className="text-[#2776ea]" />
            <span className="text-[11px] font-black uppercase tracking-[0.3em] text-[#2776ea]">
              Global Operations
            </span>
          </div>
          <h1 className="text-3xl sm:text-5xl md:text-7xl font-black text-slate-900 tracking-tighter leading-[1.1]">
            Shipping &{" "}
            <span className="bg-linear-to-r from-[#2776ea] to-[#76ea27] bg-clip-text text-transparent">
              Exchange
            </span>
          </h1>
          <div className="mt-8 flex flex-wrap items-center gap-6 md:gap-8 text-xs md:text-sm font-bold text-slate-400">
            <div className="flex items-center gap-2">
              <Clock size={18} className="text-[#2776ea]" />{" "}
              <span>Updated: Dec 18, 2025</span>
            </div>
            <div className="flex items-center gap-2">
              <Truck size={18} className="text-[#76ea27]" />{" "}
              <span>Webronic Industries Pvt Ltd</span>
            </div>
          </div>
        </div>
      </section>

      <div className="lg:hidden sticky top-0 z-40 bg-white/95 backdrop-blur-md border-b border-slate-100 flex items-center overflow-x-auto no-scrollbar px-4 py-4 gap-3">
        {sections.map((item) => (
          <button
            key={item.id}
            onClick={() => scrollToSection(item.id)}
            className="whitespace-nowrap flex items-center gap-2 px-4 py-2 bg-slate-50 border border-slate-100 rounded-full text-[10px] font-black uppercase text-slate-500 active:bg-[#2776ea] active:text-white transition-colors"
          >
            <item.icon size={12} /> {item.title.split(". ")[1]}
          </button>
        ))}
      </div>

      <section className="mx-auto max-w-7xl px-4 md:px-6 py-10 md:py-20">
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-16">
          <aside className="hidden lg:block w-75 shrink-0 sticky top-32 h-[calc(100vh-140px)] overflow-y-auto custom-scrollbar">
            <p className="text-[10px] font-black uppercase tracking-[0.2em] text-slate-400 mb-6 px-4">
              Policy Framework
            </p>
            <div className="space-y-1">
              {sections.map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className="w-full flex items-center gap-3 px-4 py-3.5 rounded-2xl text-[11px] font-black uppercase tracking-widest text-slate-500 hover:bg-slate-50 hover:text-[#2776ea] transition-all group text-left border border-transparent"
                >
                  <item.icon size={16} className="group-hover:text-[#2776ea]" />
                  {item.title}
                </button>
              ))}
            </div>
          </aside>

          <div className="flex-1 space-y-20 md:space-y-32">
            <div id="overview" className="scroll-mt-24">
              <div className="bg-[#2776ea]/5 rounded-4xl p-7 md:p-10 border border-[#2776ea]/10">
                <h2 className="text-xl md:text-2xl font-black text-slate-900 mb-4 flex items-center gap-3">
                  <Zap className="text-[#2776ea]" /> 1. Policy Overview
                </h2>
                <p className="text-slate-600 font-medium leading-relaxed text-sm md:text-base">
                  Webronic primarily provides digital technology services and
                  software solutions. This policy addresses the physical
                  delivery of materials (hardware, media, docs) and the exchange
                  of services where applicable.
                </p>
              </div>
            </div>

            <div id="digital" className="scroll-mt-24">
              <h3 className="text-lg md:text-xl font-black uppercase tracking-widest text-[#2776ea] mb-8 flex items-center gap-3">
                <FileCode size={24} /> 2. Digital Deliverables
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {[
                  {
                    label: "Software & Code",
                    val: "Secure repositories (GitHub/GitLab)",
                  },
                  {
                    label: "Docs & Reports",
                    val: "Email or secure cloud platforms",
                  },
                  {
                    label: "Delivery Time",
                    val: "Immediate to 48 hours post-milestone",
                  },
                  {
                    label: "Charges",
                    val: "Zero shipping fees for electronic delivery",
                  },
                ].map((item, i) => (
                  <div
                    key={i}
                    className="p-6 rounded-2xl bg-slate-50 border border-slate-100"
                  >
                    <p className="text-[10px] font-black text-[#76ea27] uppercase mb-2 tracking-widest">
                      {item.label}
                    </p>
                    <p className="text-sm font-bold text-slate-700">
                      {item.val}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            <div id="physical" className="scroll-mt-24">
              <h3 className="text-lg md:text-xl font-black uppercase tracking-widest text-[#2776ea] mb-8 flex items-center gap-3">
                <Package size={24} /> 3. Physical Deliveries
              </h3>
              <div className="overflow-x-auto rounded-4xl border border-slate-100 shadow-sm">
                <table className="w-full text-left border-collapse min-w-150">
                  <thead className="bg-slate-50">
                    <tr>
                      <th className="px-6 py-5 text-[10px] font-black uppercase text-slate-400">
                        Item Type
                      </th>
                      <th className="px-6 py-5 text-[10px] font-black uppercase text-slate-400">
                        Method
                      </th>
                      <th className="px-6 py-5 text-[10px] font-black uppercase text-slate-400">
                        Timeline
                      </th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-100 font-medium">
                    <tr className="text-sm">
                      <td className="px-6 py-4 text-slate-900">
                        Contracts & Legal
                      </td>
                      <td className="px-6 py-4 text-slate-500">
                        Courier / Speed Post
                      </td>
                      <td className="px-6 py-4 text-[#2776ea]">
                        3-5 Business Days
                      </td>
                    </tr>
                    <tr className="text-sm">
                      <td className="px-6 py-4 text-slate-900">
                        Hardware / Equipment
                      </td>
                      <td className="px-6 py-4 text-slate-500">
                        Courier with Tracking
                      </td>
                      <td className="px-6 py-4 text-[#2776ea]">
                        5-7 Business Days
                      </td>
                    </tr>
                    <tr className="text-sm">
                      <td className="px-6 py-4 text-slate-900">
                        Training Materials
                      </td>
                      <td className="px-6 py-4 text-slate-500">
                        Standard Post
                      </td>
                      <td className="px-6 py-4 text-[#2776ea]">
                        5-7 Business Days
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>

            <div id="timeline" className="scroll-mt-24">
              <h3 className="text-lg md:text-xl font-black uppercase tracking-widest text-[#2776ea] mb-8 flex items-center gap-3">
                <Clock size={24} /> 4. Delivery Timeline & Tracking
              </h3>
              <div className="overflow-x-auto rounded-4xl border border-slate-100 shadow-sm">
                <table className="w-full text-left border-collapse min-w-125">
                  <thead className="bg-slate-50">
                    <tr>
                      <th className="px-6 py-5 text-[10px] font-black uppercase text-slate-400">
                        Region
                      </th>
                      <th className="px-6 py-5 text-[10px] font-black uppercase text-slate-400">
                        Timeline
                      </th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-100 font-medium text-sm text-slate-700">
                    <tr>
                      <td className="px-6 py-4">Metro Cities (India)</td>
                      <td className="px-6 py-4 text-[#2776ea]">
                        3-5 Business Days
                      </td>
                    </tr>
                    <tr>
                      <td className="px-6 py-4">Tier 2/3 Cities</td>
                      <td className="px-6 py-4 text-[#2776ea]">
                        5-7 Business Days
                      </td>
                    </tr>
                    <tr>
                      <td className="px-6 py-4">Remote Areas</td>
                      <td className="px-6 py-4 text-[#2776ea]">
                        7-10 Business Days
                      </td>
                    </tr>
                    <tr>
                      <td className="px-6 py-4">International</td>
                      <td className="px-6 py-4 text-[#76ea27]">
                        10-20 Business Days
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>

            <div id="failed" className="scroll-mt-24">
              <h3 className="text-lg md:text-xl font-black uppercase tracking-widest text-[#2776ea] mb-8 flex items-center gap-3">
                <Ban size={24} /> 5. Failed Delivery & Non-Delivery
              </h3>
              <div className="space-y-4 text-sm text-slate-500 font-medium leading-relaxed">
                <p>
                  If a delivery attempt fails, the courier will typically
                  attempt redelivery 2-3 times. If unresolved, the package
                  returns to our facility.
                </p>
                <div className="p-4 bg-red-50 text-red-700 rounded-xl border border-red-100 text-xs font-bold">
                  Re-shipping costs apply if the return was due to an incorrect
                  address provided by the client.
                </div>
              </div>
            </div>

            <div id="damage" className="scroll-mt-24">
              <h3 className="text-lg md:text-xl font-black uppercase tracking-widest text-[#2776ea] mb-8 flex items-center gap-3">
                <ShieldAlert size={24} /> 6. Damaged or Lost Shipments
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="p-8 rounded-4xl border border-slate-100">
                  <h4 className="text-xs font-black text-slate-900 uppercase mb-4 tracking-widest">
                    Arrival Damage
                  </h4>
                  <p className="text-xs text-slate-500 mb-4 leading-relaxed">
                    Document damage with photos and contact us within 24 hours.
                  </p>
                  <p className="text-xs font-bold text-[#2776ea] break-all">
                    support@webronic.com
                  </p>
                </div>
                <div className="p-8 rounded-4xl bg-slate-900 text-white">
                  <h4 className="text-xs font-black text-[#76ea27] uppercase mb-4 tracking-widest">
                    Lost in Transit
                  </h4>
                  <p className="text-xs opacity-70 mb-4 leading-relaxed">
                    Investigation takes 7-14 days. We arrange replacements at no
                    cost once verified.
                  </p>
                </div>
              </div>
            </div>

            <div id="exchange" className="scroll-mt-24">
              <h3 className="text-lg md:text-xl font-black uppercase tracking-widest text-[#2776ea] mb-8 flex items-center gap-3">
                <RefreshCcw size={24} /> 7. Exchange Policy
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="p-8 rounded-4xl bg-white border border-slate-100 shadow-sm">
                  <h4 className="text-sm font-black text-slate-900 uppercase mb-4 tracking-widest">
                    Eligibility
                  </h4>
                  <ul className="space-y-3">
                    {[
                      "Defective Hardware",
                      "Wrong Items Shipped",
                      "Damage during transit",
                    ].map((li) => (
                      <li
                        key={li}
                        className="flex items-center gap-3 text-xs font-bold text-slate-600"
                      >
                        <CheckCircle2
                          size={16}
                          className="text-[#76ea27] shrink-0"
                        />{" "}
                        {li}
                      </li>
                    ))}
                  </ul>
                  <p className="mt-6 text-[10px] font-black text-[#2776ea] uppercase tracking-widest">
                    Window: 7 Days from Delivery
                  </p>
                </div>
                <div className="p-8 rounded-4xl bg-slate-900 text-white shadow-xl flex flex-col justify-between min-h-40">
                  <p className="text-sm font-medium opacity-80 leading-relaxed">
                    Digital services are exchangeable via tier adjustments or
                    technology switches within the project scope.
                  </p>
                  <button
                    onClick={() => setIsModalOpen(true)}
                    className="mt-6 flex items-center gap-2 text-[10px] font-black uppercase tracking-[0.2em] text-[#76ea27]"
                  >
                    Initiate Request <ArrowRight size={14} />
                  </button>
                </div>
              </div>
            </div>

            <div id="service-mod" className="scroll-mt-24">
              <h3 className="text-lg md:text-xl font-black uppercase tracking-widest text-[#2776ea] mb-8 flex items-center gap-3">
                <Settings2 size={24} /> 8. Service Exchange & Modifications
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="p-8 rounded-4xl bg-slate-50 border border-slate-200">
                  <h4 className="text-xs font-black text-slate-900 uppercase mb-4 tracking-widest">
                    8.1 Service Scope Changes
                  </h4>
                  <ul className="space-y-3">
                    {[
                      "Service Tier Adjustments",
                      "Technology Switching",
                      "Timeline adjustments",
                      "Resource changes",
                    ].map((li) => (
                      <li
                        key={li}
                        className="flex items-center gap-3 text-xs font-bold text-slate-600"
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
                <div className="p-8 rounded-4xl bg-slate-900 text-white">
                  <h4 className="text-xs font-black text-[#76ea27] uppercase mb-4 tracking-widest">
                    8.2 Modification Process
                  </h4>
                  <p className="text-xs opacity-70 leading-relaxed">
                    Submit written requests via support@webronic.com. We assess
                    impacts on cost and timeline before providing a formal
                    change order.
                  </p>
                </div>
              </div>
            </div>

            <div id="international" className="scroll-mt-24">
              <h3 className="text-lg md:text-xl font-black uppercase tracking-widest text-[#2776ea] mb-8 flex items-center gap-3">
                <Globe size={24} /> 9. International Shipments
              </h3>
              <div className="p-8 rounded-[2.5rem] bg-slate-50 border border-slate-100">
                <p className="text-sm text-slate-600 font-medium leading-relaxed mb-6">
                  For international contracts, the recipient is responsible for
                  all customs duties, taxes, and clearance fees.
                </p>
                <div className="flex items-center gap-3 text-[10px] font-black uppercase text-red-500">
                  <AlertCircle size={14} className="shrink-0" />{" "}
                  Trade-restricted countries are excluded.
                </div>
              </div>
            </div>

            <div id="special" className="scroll-mt-24">
              <h3 className="text-lg md:text-xl font-black uppercase tracking-widest text-[#2776ea] mb-8 flex items-center gap-3">
                <Award size={24} /> 10. Special Handling Requests
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="p-6 rounded-3xl bg-slate-50 border border-slate-200">
                  <p className="text-sm font-black text-slate-900 uppercase mb-2">
                    Express Delivery
                  </p>
                  <p className="text-xs text-slate-500 font-medium leading-relaxed">
                    Available for urgent shipments at additional cost. Reduces
                    typical timeline by 2-3 business days.
                  </p>
                </div>
                <div className="p-6 rounded-3xl bg-slate-50 border border-slate-200">
                  <p className="text-sm font-black text-slate-900 uppercase mb-2">
                    Protective Packaging
                  </p>
                  <p className="text-xs text-slate-500 font-medium leading-relaxed">
                    Extra protective layers available for fragile equipment.
                    Discrete packaging provided upon request.
                  </p>
                </div>
              </div>
            </div>

            <div id="unclaimed" className="scroll-mt-24">
              <h3 className="text-lg md:text-xl font-black uppercase tracking-widest text-[#2776ea] mb-8 flex items-center gap-3">
                <Inbox size={24} /> 11. Unclaimed Shipments
              </h3>
              <div className="bg-white border border-slate-100 rounded-[2.5rem] p-7 md:p-8 shadow-sm">
                <p className="text-sm text-slate-500 font-medium leading-relaxed mb-6">
                  If a shipment remains unclaimed, we will contact you to
                  arrange delivery. After **30 days**, the shipment may be
                  disposed of or recycled.
                </p>
                <div className="inline-flex items-center gap-2 p-3 bg-red-50 text-red-600 rounded-xl text-[10px] font-black uppercase tracking-widest">
                  <AlertCircle size={14} /> No refund for unclaimed shipments
                  after 30 days.
                </div>
              </div>
            </div>

            <div id="force-majeure" className="scroll-mt-24">
              <h3 className="text-lg md:text-xl font-black uppercase tracking-widest text-[#2776ea] mb-8 flex items-center gap-3">
                <AlertCircle size={24} /> 12. Force Majeure
              </h3>
              <div className="bg-slate-900 text-white rounded-[2.5rem] p-8 md:p-10 relative overflow-hidden">
                <AlertCircle
                  size={180}
                  className="absolute -right-10 -bottom-10 opacity-5 pointer-events-none"
                />
                <p className="relative z-10 text-sm text-slate-300 font-medium leading-relaxed max-w-2xl">
                  Webronic is not liable for delays caused by natural disasters,
                  strikes, government actions, pandemics, or civil unrest. We
                  will provide alternative arrangements where possible during
                  such disruptions.
                </p>
              </div>
            </div>

            <div id="updates" className="scroll-mt-24">
              <h3 className="text-lg md:text-xl font-black uppercase tracking-widest text-[#2776ea] mb-8 flex items-center gap-3">
                <RefreshCcw size={24} /> 13. Policy Updates
              </h3>
              <p className="text-sm text-slate-500 font-medium leading-relaxed">
                We may update this Shipping and Exchange Policy periodically.
                Changes will be posted on our website with a revised &quot;Last
                Updated&quot; date.
              </p>
            </div>

            <div className="mt-20 pt-16 border-t border-slate-100 grid grid-cols-1 md:grid-cols-2 gap-12">
              <div>
                <h4 className="text-2xl font-black text-slate-900 tracking-tight">
                  Need Assistance?
                </h4>
                <p className="text-slate-500 font-medium mt-4">
                  For all shipping, delivery, and exchange-related inquiries,
                  reach our support team.
                </p>
                <div className="mt-8 space-y-4">
                  <div className="flex items-center gap-4 text-sm font-bold text-[#2776ea] break-all">
                    <Mail size={18} className="text-[#76ea27] shrink-0" />{" "}
                    support@webronic.com
                  </div>
                  <div className="flex items-center gap-4 text-sm font-bold text-slate-900">
                    <Phone size={18} className="text-[#2776ea] shrink-0" /> +91
                    72000 88500
                  </div>
                </div>
              </div>

              <div className="bg-[#2776ea]/5 p-8 md:p-10 rounded-[2.5rem] border border-[#2776ea]/10 flex flex-col justify-between">
                <p className="text-[10px] font-bold text-slate-600 uppercase tracking-widest mb-6 text-center md:text-left">
                  Include order reference in all communications.
                </p>
                <button
                  onClick={() => setIsModalOpen(true)}
                  className="w-full flex items-center justify-center gap-3 bg-[#2776ea] text-white py-4 rounded-2xl font-black text-[10px] uppercase tracking-widest hover:bg-[#76ea27] transition-all shadow-xl active:scale-95"
                >
                  Open Support Case <ArrowRight size={16} />
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
          <div className="relative w-full max-w-md bg-white rounded-4xl shadow-2xl p-8 md:p-10 max-h-[90vh] overflow-y-auto">
            <button
              onClick={() => setIsModalOpen(false)}
              className="absolute top-6 right-6 text-slate-400 hover:text-red-500 transition-colors"
            >
              <X size={24} />
            </button>
            {!isSubmitted ? (
              <form className="space-y-4 pt-4" onSubmit={handleSubmit}>
                <h3 className="text-2xl font-black text-slate-900 tracking-tight">
                  Support Request
                </h3>
                <p className="text-slate-500 text-sm font-medium mb-6">
                  Enter details for shipping assistance.
                </p>
                <input
                  type="text"
                  placeholder="Full Name"
                  className="w-full p-4 rounded-xl bg-slate-50 border border-slate-100 text-sm outline-none focus:border-[#2776ea] transition-all"
                  required
                />
                <input
                  type="email"
                  placeholder="Email Address"
                  className="w-full p-4 rounded-xl bg-slate-50 border border-slate-100 text-sm outline-none focus:border-[#2776ea] transition-all"
                  required
                />
                <textarea
                  placeholder="Query / Order Reference"
                  rows={4}
                  className="w-full p-4 rounded-xl bg-slate-50 border border-slate-100 text-sm outline-none focus:border-[#2776ea] resize-none transition-all"
                  required
                />
                <button className="w-full bg-[#2776ea] text-white py-4 rounded-xl font-black text-[10px] uppercase tracking-[0.2em] shadow-lg hover:bg-[#76ea27] transition-all active:scale-95">
                  Send Query
                </button>
              </form>
            ) : (
              <div className="py-12 text-center">
                <CheckCircle2
                  className="mx-auto text-[#76ea27] mb-4"
                  size={48}
                />
                <h4 className="text-xl font-black text-slate-900">
                  Query Sent Successfully
                </h4>
              </div>
            )}
          </div>
        </div>
      )}
    </main>
  );
}
