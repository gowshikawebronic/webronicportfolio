"use client";

import Image from "next/image";
import { useState } from "react";
import { Mail, Phone, Globe, MapPin, Copy, Check, ArrowRight, X, Send, MessageSquare } from "lucide-react";

export default function Contact() {
  const [copied, setCopied] = useState<string | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleCopy = (text: string, id: string) => {
    navigator.clipboard.writeText(text);
    setCopied(id);
    setTimeout(() => setCopied(null), 2000);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    // Simulate API logic
    await new Promise((resolve) => setTimeout(resolve, 2000));
    setIsSubmitting(false);
    setIsModalOpen(false);
    alert("Message sent successfully!");
  };

  return (
    <section id="contact" className="relative overflow-hidden bg-white py-12 lg:py-15 font-sora">
      <div className="relative mx-auto max-w-7xl px-6">
        <div className="grid grid-cols-1 gap-16 lg:grid-cols-2 lg:items-start">
          
          <div className="flex flex-col">
            {/* --- REQUESTED BADGE STYLE --- */}
            <div className="mb-6 inline-flex max-md:self-center md:w-fit items-center gap-2 rounded-full bg-slate-50 border border-slate-200 px-4 py-1.5">
              <span className="flex h-2 w-2 rounded-full bg-[#4888e8] animate-pulse" />
              <span className="text-[10px] font-bold uppercase tracking-widest text-slate-600">
                Contact us
              </span>
            </div>

            <h2 className="text-4xl max-md:text-center font-black tracking-tight text-slate-900 sm:text-5xl lg:text-6xl leading-[1.1]">
              Ready to Build <br />
              <span style={{ color: '#4888e8' }}>Something Great?</span>
            </h2>

            <p className="mt-8 max-w-lg max-md:text-center text-lg leading-relaxed text-slate-500 font-medium">
              Enterprise automation or custom digital systems 
              <span className="font-bold text-slate-900"> WEBRONIC</span> delivers 
              precision engineering from strategy to deployment.
            </p>

            {/* Modal Trigger Button */}
            <div className="mt-10 max-md:text-center">
              <button
                onClick={() => setIsModalOpen(true)}
                className="group relative inline-flex items-center gap-3 overflow-hidden rounded-2xl bg-[#4888e8] px-10 py-5 font-black uppercase tracking-widest text-xs text-white transition-all hover:bg-[#09b125] hover:shadow-xl hover:shadow-blue-500/20 active:scale-95"
              >
                Send a Message
                <ArrowRight size={18} className="transition-transform group-hover:translate-x-1" />
              </button>
            </div>

            <div className="mt-16 relative group max-w-xs">
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
                  Digital Partner
                </span>
              </a>
            </div>
          </div>

          {/* Contact Details List */}
          <div className="relative">
            <div className="space-y-4">
              {[
                {
                  label: "Email Support",
                  value: "contact@webronic.com",
                  icon: Mail,
                  href: "mailto:contact@webronic.com",
                },
                {
                  label: "Phone Enquiries",
                  value: "+91 72000 88500",
                  icon: Phone,
                },
                {
                  label: "Registered Office",
                  value: "Mylapore, Chennai, TN 600004.",
                  icon: MapPin,
                },
              ].map((item, i) => (
                <div 
                  key={i}
                  className="group relative rounded-2xl border border-slate-100 bg-white p-6 md:p-8 transition-all hover:border-[#4888e8]/20 hover:shadow-2xl hover:shadow-slate-200/50"
                >
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-6">
                      <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-slate-50 text-[#4888e8] transition-colors group-hover:bg-[#4888e8] group-hover:text-white">
                        <item.icon size={22} strokeWidth={2} />
                      </div>
                      <div>
                        <p className="text-[10px] font-black uppercase tracking-[0.2em] text-slate-400">
                          {item.label}
                        </p>
                        {item.href ? (
                          <a href={item.href} className="mt-1 block text-lg font-bold text-slate-900 hover:text-[#4888e8] transition-colors">
                            {item.value}
                          </a>
                        ) : (
                          <p className="mt-1 text-lg font-bold text-slate-900 leading-snug">
                            {item.value}
                          </p>
                        )}
                      </div>
                    </div>

                    <button 
                      onClick={() => handleCopy(item.value, item.label)}
                      className="rounded-lg p-2 text-slate-300 hover:bg-slate-50 hover:text-[#09b125] transition-all"
                    >
                      {copied === item.label ? <Check size={18} className="text-[#09b125]" /> : <Copy size={18} />}
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* --- CONTACT MODAL --- */}
      {isModalOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 md:p-6">
          <div 
            className="absolute inset-0 bg-slate-900/60 backdrop-blur-md transition-opacity duration-300" 
            onClick={() => setIsModalOpen(false)} 
          />
          
          <div className="relative w-full max-w-xl overflow-hidden rounded-[2.5rem] bg-white shadow-2xl transition-all">
            <div className="bg-slate-900 p-8 text-white relative">
              <button 
                onClick={() => setIsModalOpen(false)}
                className="absolute right-6 top-6 h-10 w-10 flex items-center justify-center rounded-full bg-white/10 hover:bg-white/20 transition-colors"
              >
                <X size={20} />
              </button>
              <div className="flex items-center gap-3 mb-4">
                <div className="h-10 w-10 flex items-center justify-center rounded-xl bg-[#4888e8]/20 text-[#4888e8]">
                  <MessageSquare size={20} />
                </div>
                <h3 className="text-2xl font-black tracking-tight">Direct Enquiry</h3>
              </div>
              <p className="text-slate-400 text-sm font-medium leading-relaxed">
                Fill in the details below and our technical team will get back to you within 24 hours.
              </p>
            </div>

            <form onSubmit={handleSubmit} className="p-8 space-y-5">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                <div className="space-y-1.5">
                  <label className="text-[10px] font-black uppercase tracking-widest text-slate-400 ml-1">Full Name</label>
                  <input type="text" placeholder="John Doe" className="w-full rounded-xl border border-slate-200 p-4 text-sm focus:ring-2 focus:ring-[#4888e8] focus:border-transparent outline-none transition font-medium text-slate-700" required />
                </div>
                <div className="space-y-1.5">
                  <label className="text-[10px] font-black uppercase tracking-widest text-slate-400 ml-1">Email Address</label>
                  <input type="email" placeholder="john@webronic.com" className="w-full rounded-xl border border-slate-200 p-4 text-sm focus:ring-2 focus:ring-[#4888e8] focus:border-transparent outline-none transition font-medium text-slate-700" required />
                </div>
              </div>

              <div className="space-y-1.5">
                <label className="text-[10px] font-black uppercase tracking-widest text-slate-400 ml-1">Subject</label>
                <select className="w-full rounded-xl border border-slate-200 p-4 text-sm focus:ring-2 focus:ring-[#4888e8] outline-none transition font-medium text-slate-700 appearance-none bg-white cursor-pointer">
                  <option>New Project Consultation</option>
                  <option>Technical Support</option>
                  <option>Partnership Inquiry</option>
                  <option>Other</option>
                </select>
              </div>

              <div className="space-y-1.5">
                <label className="text-[10px] font-black uppercase tracking-widest text-slate-400 ml-1">Message</label>
                <textarea rows={4} placeholder="Briefly describe your requirements..." className="w-full rounded-xl border border-slate-200 p-4 text-sm focus:ring-2 focus:ring-[#4888e8] outline-none transition resize-none font-medium text-slate-700" required />
              </div>

              <button 
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-[#4888e8] text-white font-black uppercase tracking-[0.2em] text-[10px] py-5 rounded-2xl hover:bg-slate-900 transition-all shadow-xl shadow-blue-500/10 flex items-center justify-center gap-3 disabled:opacity-70"
              >
                {isSubmitting ? "Processing..." : <>Send Message <Send size={14} /></>}
              </button>
            </form>
          </div>
        </div>
      )}
    </section>
  );
}