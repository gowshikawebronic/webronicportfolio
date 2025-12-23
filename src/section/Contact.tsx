"use client";

import Image from "next/image";
import { useState } from "react";
import { Mail, Phone, Globe, MapPin, Copy, Check, ArrowRight } from "lucide-react";

export default function Contact() {
  const [copied, setCopied] = useState<string | null>(null);

  const handleCopy = (text: string, id: string) => {
    navigator.clipboard.writeText(text);
    setCopied(id);
    setTimeout(() => setCopied(null), 2000);
  };

  return (
    <section id="contact" className="relative overflow-hidden bg-white py-5">
      
      
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_bottom_left,rgba(99,102,241,0.12),transparent_50%)]" />
      
      <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(rgba(15,23,42,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(15,23,42,0.03)_1px,transparent_1px)] bg-[size:72px_72px]" />

      <div className="relative mx-auto max-w-7xl px-6">
        <div className="grid grid-cols-1 gap-16 lg:grid-cols-2 lg:items-start">
          
          <div className="flex flex-col">
            <div className="mb-6 inline-flex self-start rounded-full border border-slate-200 bg-white/70 backdrop-blur px-4 py-1 text-sm font-semibold text-blue-600 shadow-sm">
              Get in Touch
            </div>

            <h2 className="text-4xl font-extrabold tracking-tight text-slate-900 sm:text-5xl lg:text-6xl">
              Let’s Build 
              <span className="block bg-gradient-to-r from-blue-600 to-blue-400 bg-clip-text text-transparent">
                Something Remarkable
              </span>
            </h2>

            <p className="mt-8 max-w-lg text-lg leading-relaxed text-slate-600">
              StoreTech, automation, or enterprise systems — 
              <span className="font-semibold text-slate-900"> WEBRONIC</span> partners with you from concept to high-impact deployment.
            </p>

            <div className="mt-12 relative group max-w-md">
              <div className="absolute inset-0 -z-10 rounded-3xl bg-blue-200/40 blur-2xl transition-opacity opacity-0 group-hover:opacity-100" />
              <a
                href="https://www.thingsatweb.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-6 rounded-3xl border border-slate-200 bg-white p-6 shadow-xl transition-transform hover:-translate-y-1"
              >
                <Image
                  src="./assets/images/thingsatweb.png"
                  alt="ThingsAtWeb"
                  width={140}
                  height={40}
                  className="object-contain"
                />
                <div className="h-10 w-px bg-slate-200" />
                <span className="text-xs font-bold uppercase tracking-widest text-slate-400">
                  Digital Partner
                </span>
              </a>
            </div>

            <div className="mt-12 flex items-center gap-4">
              {[
                { src: "./assets/icons/facebook.png", href: "https://www.facebook.com/thingsatweb" },
                { src: "./assets/icons/instagram.png", href: "https://www.instagram.com/thingsatweb/" },
                { src: "./assets/icons/youtube.png", href: "https://www.youtube.com/channel/UCp53pdpbd7qL-JNoAkAW0Ag" },
                { src: "./assets/icons/linkedin.png", href: "https://www.linkedin.com/company/thingsatweb/" },
              ].map((social, i) => (
                <a
                  key={i}
                  href={social.href}
                  target="_blank"
                  className="flex h-12 w-12 items-center justify-center rounded-xl border border-slate-200 bg-white transition-all hover:-translate-y-1 hover:border-blue-300 hover:shadow-lg"
                >
                  <Image src={social.src} alt="Social" width={20} height={20} className="opacity-60" />
                </a>
              ))}
            </div>
          </div>

          <div className="relative">
            <div className="absolute -inset-4 -z-10 rounded-[40px] bg-slate-50/50" />
            
            <div className="space-y-4">
              {[
                {
                  label: "Email",
                  value: "contact@webronic.com",
                  icon: Mail,
                  href: "mailto:contact@webronic.com",
                },
                {
                  label: "Phone",
                  value: "+91 72000 88500\n+91 94443 26334",
                  icon: Phone,
                },
                {
                  label: "Official Website",
                  value: "www.thingsatweb.com",
                  icon: Globe,
                  href: "https://www.thingsatweb.com/",
                },
                {
                  label: "Address",
                  value: "New #33, Old #17, 2nd St, Mylapore,\nChennai, Tamil Nadu 600004.",
                  icon: MapPin,
                },
              ].map((item, i) => (
                <div 
                  key={i}
                  className="group relative rounded-2xl border border-slate-200 bg-white p-8 transition-all hover:border-blue-200 hover:shadow-[0_20px_40px_rgba(0,0,0,0.04)]"
                >
                  <div className="flex items-start justify-between">
                    <div className="flex gap-5">
                      <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-slate-50 text-blue-600 transition-colors group-hover:bg-blue-50">
                        <item.icon size={22} strokeWidth={1.5} />
                      </div>
                      <div>
                        <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-blue-600/60">
                          {item.label}
                        </p>
                        {item.href ? (
                          <a href={item.href} className="mt-2 block text-xl font-bold text-slate-900 hover:text-blue-600 transition-colors">
                            {item.value}
                          </a>
                        ) : (
                          <p className="mt-2 text-xl font-bold text-slate-900 whitespace-pre-line leading-snug">
                            {item.value}
                          </p>
                        )}
                      </div>
                    </div>

                    <button 
                      onClick={() => handleCopy(item.value.split('\n')[0], item.label)}
                      className="rounded-lg p-2 text-slate-300 hover:bg-slate-50 hover:text-blue-600 transition-all"
                    >
                      {copied === item.label ? <Check size={18} className="text-green-500" /> : <Copy size={18} />}
                    </button>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-12 flex items-center gap-4 px-4 text-sm font-medium text-slate-400">
               <span className="h-px flex-1 bg-gradient-to-r from-transparent to-slate-200" />
               <span>Available for Global Projects</span>
               <span className="h-px flex-1 bg-gradient-to-l from-transparent to-slate-200" />
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}