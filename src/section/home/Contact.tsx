"use client";

import Image from "next/image";
import { useState } from "react";
import {
  Mail,
  Phone,
  MapPin,
  Copy,
  Check,
  ArrowRight,
  X,
  Send,
  MessageSquare,
} from "lucide-react";

export default function Contact() {
  const [copied, setCopied] = useState<string | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  // --- CONTACT DATA ---
  const contactDetails = [
    {
      label: "Phone Support",
      value: "+91 72000 88500",
      icon: Phone,
      href: "tel:+917200088500",
    },
    {
      label: "Email Enquiries",
      value: "contact@webronic.com",
      icon: Mail,
      href: "mailto:contact@webronic.com",
    },
    {
        label: "Registered Office",
        value: "Mylapore, Chennai, TN 600004.",
        icon: MapPin,
    },
  ];

  const handleCopy = (text: string, id: string) => {
    navigator.clipboard.writeText(text);
    setCopied(id);
    setTimeout(() => setCopied(null), 2000);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    await new Promise((resolve) => setTimeout(resolve, 2000));
    setIsSubmitting(false);
    setIsModalOpen(false);
    alert("Message sent successfully!");
  };

  return (
    <section
      id="contact"
      className="relative overflow-hidden bg-white py-12 lg:py-20 font-sora"
    >
      <div className="relative mx-auto max-w-7xl px-6">
        <div className="grid grid-cols-1 gap-16 lg:grid-cols-2 lg:items-start">
          
          {/* --- LEFT COLUMN: CTA & TEXT --- */}
          <div className="flex flex-col">
            <div className="flex items-center justify-center lg:justify-start gap-4 mb-6">
              <span className="text-[11px] font-black uppercase tracking-[0.3em] text-[#2776ea]">
                Get Started
              </span>
            </div>

            <h2 className="text-3xl font-extrabold flex flex-col items-center lg:items-start tracking-tight text-slate-900 sm:text-5xl lg:text-6xl leading-tight">
              Ready to Transform
              <br className="hidden sm:block" />
              <span className="bg-gradient-to-r from-[#2776ea] to-[#76ea27] bg-clip-text text-transparent">
                Your Business?
              </span>
            </h2>

            <div className="mt-8 max-w-lg text-center lg:text-start text-lg leading-relaxed text-slate-500 font-medium">
              Our solution architects are ready to discuss your technology 
              challenges and design custom solutions that drive measurable
               business results.
            </div>

            <div className="mt-10 max-md:text-center">
              <button
                onClick={() => setIsModalOpen(true)}
                className="group relative inline-flex cursor-pointer items-center gap-3 overflow-hidden rounded-2xl bg-[#2776ea] px-5 py-4 font-black uppercase tracking-widest text-xs text-white transition-all hover:bg-[#76ea27] hover:shadow-xl hover:shadow-blue-500/20 active:scale-95"
              >
                Schedule Free Consultation
                <ArrowRight
                  size={18}
                  className="transition-transform group-hover:translate-x-1"
                />
              </button>
            </div>

            {/* Partner Logo */}
            <div className="mt-16 relative group max-w-xs mx-auto lg:mx-0">
              <a
                href="https://www.thingsatweb.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-5 rounded-2xl border border-slate-100 bg-slate-50/50 p-5 transition-all hover:bg-white hover:shadow-xl"
              >
                <Image
                  src="./assets/images/thingsatweb.png"
                  alt="ThingsAtWeb"
                  width={120}
                  height={30}
                  style={{ height: "auto" }}
                  className="object-contain"
                />
                <div className="h-8 w-px bg-slate-200" />
                <span className="text-[9px] font-black uppercase tracking-widest text-slate-400">
                  Global Partner
                </span>
              </a>
            </div>
          </div>

          {/* --- RIGHT COLUMN: CONTACT CARDS --- */}
          <div className="relative">
            <div className="space-y-10">
              {contactDetails.map((item, i) => (
                <div
                  key={i}
                  className="group relative rounded-2xl border border-slate-100 bg-white p-6 md:p-8 transition-all hover:border-[#2776ea]/20 hover:shadow-2xl hover:shadow-slate-200/50"
                >
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-4">
                      <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-slate-50 text-[#2776ea] transition-colors group-hover:bg-[#2776ea] group-hover:text-white duration-200 ease-in">
                        <item.icon size={22} strokeWidth={2} />
                      </div>
                      <div>
                        <p className="text-[10px] font-black uppercase tracking-[0.2em] text-slate-400">
                          {item.label}
                        </p>
                        {item.href ? (
                          <a
                            href={item.href}
                            className="mt-1 block text-base md:text-lg font-bold text-slate-900 hover:text-[#2776ea] transition-colors"
                          >
                            {item.value}
                          </a>
                        ) : (
                          <p className="mt-1 text-base md:text-lg font-bold text-slate-900 leading-snug">
                            {item.value}
                          </p>
                        )}
                      </div>
                    </div>

                    <button
                      onClick={() => handleCopy(item.value, item.label)}
                      className="rounded-lg p-2 text-slate-300 hover:bg-slate-50 hover:text-[#76ea27] transition-all"
                      title="Copy to clipboard"
                    >
                      {copied === item.label ? (
                        <Check size={18} className="text-[#76ea27]" />
                      ) : (
                        <Copy size={18} />
                      )}
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* --- MODAL --- */}
      {isModalOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 md:p-6">
          <div
            className="absolute inset-0 bg-slate-900/60 backdrop-blur-md transition-opacity duration-300"
            onClick={() => setIsModalOpen(false)}
          />

          <div className="relative w-full max-w-xl overflow-hidden rounded-[2.5rem] bg-white shadow-2xl transition-all animate-in zoom-in-95">
            <div className="bg-slate-900 p-8 text-white relative">
              <button
                onClick={() => setIsModalOpen(false)}
                className="absolute right-6 top-6 h-10 w-10 flex items-center justify-center rounded-full bg-white/10 hover:bg-white/20 transition-colors"
              >
                <X size={20} />
              </button>
              <div className="flex items-center gap-3 mb-4">
                <div className="h-10 w-10 flex items-center justify-center rounded-xl bg-[#2776ea]/20 text-[#2776ea]">
                  <MessageSquare size={20} />
                </div>
                <h3 className="text-2xl font-black tracking-tight">
                  Direct Enquiry
                </h3>
              </div>
              <p className="text-slate-400 text-sm font-medium leading-relaxed">
                Fill in the details below and our technical team will get back
                to you within 24 hours.
              </p>
            </div>

            <form onSubmit={handleSubmit} className="p-8 space-y-5">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                <div className="space-y-1.5">
                  <label className="text-[10px] font-black uppercase tracking-widest text-slate-400 ml-1">
                    Full Name
                  </label>
                  <input
                    type="text"
                    placeholder="Your Name"
                    className="w-full rounded-xl border border-slate-200 p-4 text-sm focus:ring-2 focus:ring-[#2776ea] focus:border-transparent outline-none transition font-medium text-slate-700"
                    required
                  />
                </div>
                <div className="space-y-1.5">
                  <label className="text-[10px] font-black uppercase tracking-widest text-slate-400 ml-1">
                    Email Address
                  </label>
                  <input
                    type="email"
                    placeholder="eg@gmail.com"
                    className="w-full rounded-xl border border-slate-200 p-4 text-sm focus:ring-2 focus:ring-[#2776ea] focus:border-transparent outline-none transition font-medium text-slate-700"
                    required
                  />
                </div>
              </div>

              <div className="space-y-1.5">
                <label className="text-[10px] font-black uppercase tracking-widest text-slate-400 ml-1">
                  Subject
                </label>
                <select className="w-full rounded-xl border border-slate-200 p-4 text-sm focus:ring-2 focus:ring-[#2776ea] outline-none transition font-medium text-slate-700 appearance-none bg-white cursor-pointer">
                  <option>New Project Consultation</option>
                  <option>Technical Support</option>
                  <option>Partnership Inquiry</option>
                  <option>Other</option>
                </select>
              </div>

              <div className="space-y-1.5">
                <label className="text-[10px] font-black uppercase tracking-widest text-slate-400 ml-1">
                  Message
                </label>
                <textarea
                  rows={4}
                  placeholder="Briefly describe your requirements..."
                  className="w-full rounded-xl border border-slate-200 p-4 text-sm focus:ring-2 focus:ring-[#2776ea] outline-none transition resize-none font-medium text-slate-700"
                  required
                />
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-[#2776ea] text-white font-black uppercase tracking-[0.2em] text-[10px] py-5 rounded-2xl hover:bg-[#76ea27] transition-all shadow-xl shadow-blue-500/10 flex items-center justify-center gap-3 disabled:opacity-70"
              >
                {isSubmitting ? (
                  "Processing..."
                ) : (
                  <>
                    Send Message <Send size={14} />
                  </>
                )}
              </button>
            </form>
          </div>
        </div>
      )}
    </section>
  );
}