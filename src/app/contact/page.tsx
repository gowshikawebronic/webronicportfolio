"use client";

import Image from "next/image";
import Link from "next/link";
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
  Building2,
  Navigation,
} from "lucide-react";

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
    await new Promise((resolve) => setTimeout(resolve, 2000));
    setIsSubmitting(false);
    setIsModalOpen(false);
  };

  const hubs = [
    {
      city: "Chennai Digital Hub",
      address: "A1-20, Sakthi Apartments, Teynampet - 600004",
      phone: "+91 72000 88500",
    },
    {
      city: "Madurai Operations",
      address: "JS Tower, Alanganallur Main Road - 625018",
      phone: "+91 63833 26928",
    },
    {
      city: "Salem Hub",
      address: "1-718, Sannasi Muniyappan Kovil, Salem - 636501",
      phone: "+91 72000 88500",
    },
  ];

  const socials = [
    {
      src: "./assets/icons/facebook.png",
      href: "https://www.facebook.com/thingsatweb",
      alt: "Facebook",
    },
    {
      src: "./assets/icons/instagram.png",
      href: "https://www.instagram.com/thingsatweb/",
      alt: "Instagram",
    },
    {
      src: "./assets/icons/youtube.png",
      href: "https://www.youtube.com/channel/UCp53pdpbd7qL-JNoAkAW0Ag",
      alt: "YouTube",
    },
    {
      src: "./assets/icons/linkedin.png",
      href: "https://www.linkedin.com/company/thingsatweb/",
      alt: "LinkedIn",
    },
  ];

  return (
    <section
      id="contact"
      className="relative overflow-hidden bg-white py-20 lg:py-32 font-sora"
    >
      <div className="absolute top-0 left-0 w-150 h-150 bg-[#76ea27]/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="relative mx-auto max-w-7xl px-6">
        <div className="grid grid-cols-1 gap-16 lg:grid-cols-[1.3fr_1fr]">
          <div className="flex flex-col">
            <div className="flex items-center gap-4 mb-6">
              <span className="text-[11px] font-black uppercase tracking-[0.3em] text-[#2776ea]">
                Connect with us
              </span>
            </div>

            <h2 className="text-4xl md:text-5xl mb-5 font-black tracking-tight text-slate-900 leading-[1.1]">
              Let’s Architect <br />
              <span className="bg-linear-to-r from-[#2776ea] to-[#76ea27] bg-clip-text text-transparent">
                The Future Together
              </span>
            </h2>

            <div className="mb-12 p-8 rounded-[2.5rem] bg-slate-50 border-l-4 border-[#76ea27] relative overflow-hidden group">
              <div className="absolute right-0 top-0 p-8 opacity-5 group-hover:opacity-10 transition-opacity">
                <Building2 size={80} />
              </div>
              <p className="text-[10px] font-black uppercase tracking-widest text-[#76ea27] mb-2">
                Registered Office
              </p>
              <h4 className="text-xl font-black text-slate-900 mb-4">
                Chennai{" "}
              </h4>
              <p className="text-slate-500 font-medium max-w-sm mb-6 leading-relaxed">
                New #33, Old #17, 2nd St, Mylapore, Chennai - 600004
              </p>
              <div className="flex flex-wrap gap-6">
                <div className="flex items-center gap-2 text-sm font-bold text-slate-900">
                  <Phone size={16} className="text-[#2776ea]" /> +91 72000 88500
                </div>
                <div className="flex items-center gap-2 text-sm font-bold text-slate-900">
                  <Mail size={16} className="text-[#2776ea]" />{" "}
                  contact@webronic.com
                </div>
              </div>
            </div>

            <div className="grid sm:grid-cols-3 gap-8 mb-12">
              {hubs.map((hub, i) => (
                <div key={i} className="flex flex-col">
                  <div className="h-8 w-8 rounded-lg bg-[#76ea27]/10 flex items-center justify-center text-[#76ea27] mb-4">
                    <MapPin size={16} />
                  </div>
                  <h5 className="text-sm font-black text-slate-900 mb-2">
                    {hub.city}
                  </h5>
                  <p className="text-xs font-medium text-slate-500 leading-relaxed mb-3">
                    {hub.address}
                  </p>
                  <p className="text-[11px] font-bold text-[#2776ea]">
                    {hub.phone}
                  </p>
                </div>
              ))}
            </div>

            <div className="flex items-center gap-4 max-md:justify-center">
              {socials.map((social, i) => (
                <a
                  key={i}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex h-12 w-12 items-center justify-center rounded-2xl bg-slate-50 border border-slate-100 transition-all hover:bg-white hover:shadow-lg hover:border-slate-200"
                >
                  <Image
                    src={social.src}
                    alt={social.alt}
                    width={22}
                    height={22}
                    className="transition-transform duration-300 group-hover:scale-110"
                  />
                </a>
              ))}
            </div>
          </div>

          <div className="lg:pl-10">
            <div className="bg-white rounded-[3rem] p-10 md:p-14 border border-slate-100 shadow-[0_30px_80px_-15px_rgba(0,0,0,0.08)] relative overflow-hidden">
              <div className="absolute top-0 right-0 p-10 text-[#76ea27]/5 rotate-12">
                <Navigation size={120} />
              </div>

              <div className="relative z-10">
                <div className="h-16 w-16 bg-[#2776ea]/10 rounded-2xl flex items-center justify-center mb-8">
                  <MessageSquare size={28} className="text-[#2776ea]" />
                </div>
                <h3 className="text-3xl font-black text-slate-900 mb-6 tracking-tight">
                  Project Enquiry
                </h3>
                <p className="text-slate-500 font-medium mb-10 leading-relaxed">
                  Have a technical requirement? Our solution architects are
                  ready to assist you.
                </p>

                <button
                  onClick={() => setIsModalOpen(true)}
                  className="w-full flex items-center cursor-pointer justify-center gap-3 bg-[#2776ea] text-white py-6 rounded-2xl font-black uppercase tracking-[0.2em] text-xs hover:bg-[#76ea27] transition-all shadow-xl shadow-blue-500/10 active:scale-95"
                >
                  Start Conversation <ArrowRight size={18} />
                </button>

                <Link
                  href="https://www.thingsatweb.com/"
                  target="_blank"
                  className="mt-12 flex items-center justify-center gap-6 opacity-60 hover:opacity-100 transition-opacity cursor-pointer group"
                >
                  <Image
                    src="./assets/images/thingsatweb.png"
                    alt="Partner"
                    width={110}
                    height={30}
                    style={{ height: "auto" }}
                  />
                  <div className="h-6 w-px bg-slate-200" />
                  <span className="text-[9px] font-black uppercase tracking-widest text-slate-400 group-hover:text-[#2776ea] transition-colors">
                    Global Partner
                  </span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>

      {isModalOpen && (
        <div className="fixed inset-0 z-100 flex items-center justify-center p-4">
          <div
            className="absolute inset-0 bg-slate-900/40 backdrop-blur-sm"
            onClick={() => setIsModalOpen(false)}
          />

          <div className="relative w-full max-w-xl bg-white rounded-[2.5rem] shadow-2xl overflow-hidden animate-in zoom-in-95">
            <div className="p-8 md:p-12">
              <button
                onClick={() => setIsModalOpen(false)}
                className="absolute right-8 top-8 text-slate-400 hover:text-slate-900 transition-colors"
              >
                <X size={24} />
              </button>

              <div className="flex items-center gap-4 mb-8">
                <div className="h-12 w-12 bg-[#76ea27]/10 rounded-xl flex items-center justify-center text-[#76ea27]">
                  <Send size={24} />
                </div>
                <div>
                  <h3 className="text-2xl font-black text-slate-900">
                    Get in Touch
                  </h3>
                  <p className="text-xs font-bold text-[#2776ea] uppercase tracking-widest mt-1">
                    We typically reply within 2 hours
                  </p>
                </div>
              </div>

              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid md:grid-cols-2 gap-5">
                  <div className="space-y-1.5">
                    <label className="text-[10px] font-black uppercase tracking-widest text-slate-400 ml-1">
                      Name
                    </label>
                    <input
                      type="text"
                      placeholder="Your Name"
                      className="w-full rounded-xl border border-slate-200 bg-slate-50 p-4 text-sm focus:ring-2 focus:ring-[#2776ea] focus:bg-white outline-none transition font-bold"
                      required
                    />
                  </div>
                  <div className="space-y-1.5">
                    <label className="text-[10px] font-black uppercase tracking-widest text-slate-400 ml-1">
                      Email
                    </label>
                    <input
                      type="email"
                      placeholder="email@company.com"
                      className="w-full rounded-xl border border-slate-200 bg-slate-50 p-4 text-sm focus:ring-2 focus:ring-[#2776ea] focus:bg-white outline-none transition font-bold"
                      required
                    />
                  </div>
                </div>

                <div className="space-y-1.5">
                  <label className="text-[10px] font-black uppercase tracking-widest text-slate-400 ml-1">
                    Interested Service
                  </label>
                  <select className="w-full rounded-xl border border-slate-200 bg-slate-50 p-4 text-sm focus:ring-2 focus:ring-[#2776ea] focus:bg-white outline-none transition font-bold appearance-none cursor-pointer">
                    <option>Web Development</option>
                    <option>App Development</option>
                    <option>Digital Marketing</option>
                    <option>Search Engine Optimization</option>
                    <option>IoT Solutions</option>
                    <option>Domain & Hosting</option>
                  </select>
                </div>

                <div className="space-y-1.5">
                  <label className="text-[10px] font-black uppercase tracking-widest text-slate-400 ml-1">
                    Message
                  </label>
                  <textarea
                    rows={4}
                    placeholder="How can we help you?"
                    className="w-full rounded-xl border border-slate-200 bg-slate-50 p-4 text-sm focus:ring-2 focus:ring-[#2776ea] focus:bg-white outline-none transition resize-none font-bold"
                    required
                  />
                </div>

                <button
                  disabled={isSubmitting}
                  className="w-full bg-slate-900 text-white py-5 rounded-2xl font-black uppercase tracking-[0.2em] text-[10px] hover:bg-[#76ea27] transition-all shadow-lg active:scale-95"
                >
                  {isSubmitting ? "Sending..." : "Submit Message"}
                </button>
              </form>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
