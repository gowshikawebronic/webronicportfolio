"use client";

import Image from "next/image";
import { Mail, Globe, Phone, MapPin, ArrowRight } from "lucide-react";
import Link from "next/link";

export default function Footer() {
  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth", block: "start" });
      history.replaceState(null, "", `/#${id}`);
    } else {
      window.location.href = `/#${id}`;
    }
  };

  const socialIcons = [
    { src: "./assets/icons/facebook.png", href: "https://www.facebook.com/thingsatweb" },
    { src: "./assets/icons/instagram.png", href: "https://www.instagram.com/thingsatweb/" },
    { src: "./assets/icons/youtube.png", href: "https://www.youtube.com/channel/UCp53pdpbd7qL-JNoAkAW0Ag" },
    { src: "./assets/icons/linkedin.png", href: "https://www.linkedin.com/company/thingsatweb/" },
  ];

  return (
    <footer id="footer" className="relative z-10 overflow-hidden bg-slate-900 border-t border-white/5 pt-20 pb-10">
      
     
      <div className="absolute -bottom-24 -left-24 h-96 w-96 rounded-full bg-blue-600/10 blur-[120px] pointer-events-none" />
      <div className="absolute top-0 right-0 h-64 w-64 rounded-full bg-indigo-500/5 blur-[100px] pointer-events-none" />

      <div className="relative mx-auto max-w-7xl px-6">
        <div className="grid gap-12 lg:grid-cols-4 md:grid-cols-2">
          
          <div className="space-y-8">
            <Image 
              src="./assets/storetechlogo2.png" 
              alt="WEBRONIC" 
              width={160} 
              height={40} 
              className="object-contain" 
            />
            <p className="text-slate-400 leading-relaxed text-sm">
              One Stop Solution for scalable, secure, and future-ready digital foundations. 
              Engineering innovation from idea to impact.
            </p>
            <div className="flex gap-4">
              {socialIcons.map((social, i) => (
                <a 
                  key={i} 
                  href={social.href} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex h-10 w-10 items-center justify-center rounded-xl bg-white/5 transition-all hover:bg-blue-600 hover:-translate-y-1"
                >
                  <Image src={social.src} alt="Social" width={18} height={18} className="" />
                </a>
              ))}
            </div>
          </div>

          <div className="space-y-6">
            <h4 className="text-[10px] font-black uppercase tracking-[0.2em] text-white">Navigation</h4>
            <ul className="space-y-3">
              {[
                { label: "Home", id: "hero" },
                { label: "About", id: "about" },
                { label: "Partners", id: "partner" },
                { label: "Clients", id: "client" },
                { label: "Branches", id: "branches" }
              ].map((link) => (
                <li key={link.id}>
                  <button 
                    onClick={() => scrollToSection(link.id)} 
                    className="text-sm text-slate-400 hover:text-white transition-colors flex items-center group"
                  >
                    <ArrowRight size={12} className="mr-2 opacity-0 -translate-x-2 transition-all group-hover:opacity-100 group-hover:translate-x-0 text-blue-500" />
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          <div className="space-y-6">
            <h4 className="text-[10px] font-black uppercase tracking-[0.2em] text-white">Chennai HQ</h4>
            <div className="space-y-4 text-sm text-slate-400">
              <div className="flex gap-3">
                <MapPin size={18} className="text-blue-500 flex-shrink-0" />
                <p>New #33, Old #17, 2nd St, Mylapore, Chennai - 600004</p>
              </div>
              <div className="flex gap-3">
                <Phone size={18} className="text-blue-500 flex-shrink-0" />
                <p>+91 72000 88500</p>
              </div>
              <div className="flex gap-3">
                <Mail size={18} className="text-blue-500 flex-shrink-0" />
                <p>contact@webronic.com</p>
              </div>
            </div>
          </div>

          <div className="space-y-6">
            <h4 className="text-[10px] font-black uppercase tracking-[0.2em] text-white">Regional Offices</h4>
            <div className="space-y-6 text-sm text-slate-400">
              <div className="group">
                <p className="font-bold text-slate-200 mb-1 group-hover:text-blue-400 transition-colors">Madurai</p>
                <p className="text-xs leading-relaxed">JS Tower, Sikkandar Savadi, Madurai - 625018</p>
                <p className="text-xs mt-1 text-blue-500 font-bold">+91 63833 26928</p>
              </div>
              <div className="group border-t border-white/5 pt-4">
                <p className="font-bold text-slate-200 mb-1 group-hover:text-blue-400 transition-colors">Salem</p>
                <p className="text-xs leading-relaxed">Surappalli, Jalakandapuram, Salem - 636501</p>
                <p className="text-xs mt-1 text-blue-500 font-bold">+91 72000 88500</p>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-20 pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="text-center md:text-left">
            <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-slate-500">
              © {new Date().getFullYear()} WEBRONIC INDUSTRIES PRIVATE LIMITED.
            </p>
            <p className="text-[9px] text-slate-600 mt-1 uppercase tracking-widest">Digital Excellence in every pixel</p>
          </div>
          
          <div className="flex items-center gap-6">
            <a 
              href="https://www.thingsatweb.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className=""
            >
              <Image src="./assets/images/thingsatweb.png" alt="ThingsAtWeb" width={110} height={30} className="" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}