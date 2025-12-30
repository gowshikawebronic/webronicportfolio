"use client";

import Image from "next/image";
import {
  Mail,
  Phone,
  MapPin,
  ArrowRight,
  Globe,
  ShieldCheck,
  FileText,
  Truck,
  RefreshCcw,
  HelpCircle,
  Briefcase,
  Users,
  Handshake,
  Info,
} from "lucide-react";
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
    {
      src: "./assets/icons/facebook.png",
      href: "https://www.facebook.com/thingsatweb",
    },
    {
      src: "./assets/icons/instagram.png",
      href: "https://www.instagram.com/thingsatweb/",
    },
    {
      src: "./assets/icons/youtube.png",
      href: "https://www.youtube.com/channel/UCp53pdpbd7qL-JNoAkAW0Ag",
    },
    {
      src: "./assets/icons/linkedin.png",
      href: "https://www.linkedin.com/company/thingsatweb/",
    },
  ];

  const policyLinks = [
    { label: "Privacy Policy", href: "/privacy-policy", icon: ShieldCheck },
    { label: "Terms & Conditions", href: "/terms", icon: FileText },
    { label: "Shipping and Exchange", href: "/shipping", icon: Truck },
    { label: "Cancellation and Refund", href: "/refund", icon: RefreshCcw },
    { label: "Contact Us", href: "/contact", icon: HelpCircle },
  ];

  return (
    <footer
      id="footer"
      className="relative z-10 overflow-hidden bg-slate-900 border-t border-white/5 pt-20 pb-10 font-sora"
    >
      {/* Dynamic Background Glows */}
      <div className="absolute -bottom-24 -left-24 h-96 w-96 rounded-full bg-blue-600/10 blur-[120px] pointer-events-none" />
      <div className="absolute top-0 right-0 h-64 w-64 rounded-full bg-indigo-500/5 blur-[100px] pointer-events-none" />

      <div className="relative mx-auto max-w-7xl px-6">
        <div className="grid gap-12 lg:grid-cols-6 md:grid-cols-3 sm:grid-cols-2">
          {/* Brand Identity */}
          <div className="space-y-8 lg:col-span-2 md:col-span-3">
            <Image
              src="./assets/storetechlogo2.png"
              alt="WEBRONIC"
              width={140}
              height={40}
              className="object-contain transition-opacity hover:opacity-80"
            />
            <p className="text-slate-400 leading-relaxed text-xs md:text-sm font-medium max-w-sm">
              Architecting scalable, secure, and future-ready digital
              foundations. Engineering innovation from concept to global impact.
            </p>
            <div className="flex gap-3">
              {socialIcons.map((social, i) => (
                <a
                  key={i}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex h-9 w-9 items-center justify-center rounded-xl bg-white/5 border border-white/5 transition-all  hover:-translate-y-1"
                >
                  <Image src={social.src} alt="Social" width={16} height={16} />
                </a>
              ))}
            </div>
          </div>

          {/* Navigation */}
          <div className="space-y-6">
            <h4 className="text-[10px] font-black uppercase tracking-[0.2em] text-[#336fa5]">
              Navigation
            </h4>
            <ul className="space-y-3">
              {[
                { label: "Home", href: "/" },
                { label: "Services", href: "/service" },
                { label: "Projects", href: "/projects" },
                { label: "Products", href: "/products" },
                { label: "Branches", href: "/branch" },
              ].map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href} 
                    className="text-xs md:text-sm text-slate-400 hover:text-white transition-all flex items-center group"
                  >
                    <ArrowRight
                      size={12}
                      className="mr-2 opacity-0 -translate-x-2 transition-all group-hover:opacity-100 group-hover:translate-x-0 text-[#5ba12d]"
                    />
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company Section */}
          <div className="space-y-6">
            <h4 className="text-[10px] font-black uppercase tracking-[0.2em] text-[#336fa5]">
              Company
            </h4>
            <ul className="space-y-3">
              {[
                {
                  label: "About Us",
                  id: "about",
                  icon: Info,
                  isExternal: false,
                },
                {
                  label: "Partners",
                  id: "partner",
                  icon: Handshake,
                  isExternal: false,
                },
                {
                  label: "Clients",
                  id: "client",
                  icon: Globe,
                  isExternal: false,
                },
                {
                  label: "Careers",
                  id: "career",
                  icon: Briefcase,
                  isExternal: false,
                },
                { label: "Team", id: "/team", icon: Users, isExternal: true }, // Navigates to /team page
                {
                  label: "Location",
                  id: "branches",
                  icon: MapPin,
                  isExternal: false,
                },
              ].map((item) => (
                <li key={item.label}>
                  {item.isExternal ? (
                    /* Separate Page Link for Team */
                    <Link
                      href={item.id} 
                      className="text-xs md:text-sm text-slate-400 hover:text-white transition-all flex items-center group cursor-pointer"
                    >
                      <item.icon
                        size={13}
                        className="mr-2 text-slate-600 group-hover:text-[#5ba12d] transition-colors"
                      />
                      {item.label}
                    </Link>
                  ) : (
                    /* Smooth Scroll Button for same-page sections */
                    <button
                      onClick={() => scrollToSection(item.id)}
                      className="text-xs md:text-sm text-slate-400 hover:text-white transition-all flex items-center group bg-transparent border-none p-0 cursor-pointer"
                    >
                      <item.icon
                        size={13}
                        className="mr-2 text-slate-600 group-hover:text-[#5ba12d] transition-colors"
                      />
                      {item.label}
                    </button>
                  )}
                </li>
              ))}
            </ul>
          </div>
          {/* Policies */}
          <div className="space-y-6">
            <h4 className="text-[10px] font-black uppercase tracking-[0.2em] text-[#336fa5]">
              Policies
            </h4>
            <ul className="space-y-3">
              {policyLinks.map((policy) => (
                <li key={policy.label}>
                  <Link
                    href={policy.href} 
                    className="text-xs md:text-sm text-slate-400 hover:text-white transition-all flex items-center group"
                  >
                    <policy.icon
                      size={14}
                      className="mr-2 text-slate-600 group-hover:text-[#5ba12d] transition-colors"
                    />
                    {policy.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Corporate HQ */}
          <div className="space-y-6">
            <h4 className="text-[10px] font-black uppercase tracking-[0.2em] text-[#336fa5]">
              Registered Office
            </h4>
            <div className="space-y-4 text-xs md:text-sm text-slate-400">
              <div className="flex gap-3 items-start">
                <MapPin
                  size={16}
                  className="text-[#336fa5] mt-1 flex-shrink-0"
                />
                <p className="leading-relaxed">
                  New #33, Old #17, 2nd St, Mylapore, Chennai - 600004
                </p>
              </div>
              <div className="flex gap-3 items-center">
                <Phone size={16} className="text-[#336fa5] flex-shrink-0" />
                <p className="font-bold">+91 72000 88500</p>
              </div>
              <div className="flex gap-3 items-center">
                <Mail size={16} className="text-[#336fa5] flex-shrink-0" />
                <p>contact@webronic.com</p>
              </div>
            </div>
          </div>
        </div>

        {/* Regional Offices Row */}
        <div className="mt-16 pt-12 border-t border-white/5">
          <h4 className="text-[10px] font-black uppercase tracking-[0.2em] text-[#336fa5] mb-8">
            Regional Hubs
          </h4>
          <div className="grid gap-8 md:grid-cols-3">
            <div className="group transition-all">
              <p className="text-[10px] font-black uppercase tracking-[0.1em] text-slate-500 mb-2">
                Chennai Digital Hub
              </p>
              <p className="text-xs text-slate-300 leading-relaxed">
                A1 - No. 20, Sakthi Apartments, Cenotoph Road, Teynampet -
                600004
              </p>
              <p className="text-xs mt-1 text-[#336fa5] font-bold">
                +91 72000 88500
              </p>
            </div>
            <div className="group transition-all">
              <p className="text-[10px] font-black uppercase tracking-[0.1em] text-slate-500 mb-2">
                Madurai Operations
              </p>
              <p className="text-xs text-slate-300 leading-relaxed">
                JS Tower, Alanganallur Main Road, Sikkandar Savadi - 625018
              </p>
              <p className="text-xs mt-1 text-[#336fa5] font-bold">
                +91 63833 26928
              </p>
            </div>
            <div className="group transition-all">
              <p className="text-[10px] font-black uppercase tracking-[0.1em] text-slate-500 mb-2">
                Salem Hub
              </p>
              <p className="text-xs text-slate-300 leading-relaxed">
                1-718, Sannasi Muniyappan Kovil, Surappalli, Salem - 636501
              </p>
              <p className="text-xs mt-1 text-[#336fa5] font-bold">
                +91 72000 88500
              </p>
            </div>
          </div>
        </div>

        {/* Final Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="text-center md:text-left">
            <p className="text-[9px] md:text-[10px] font-bold uppercase tracking-[0.25em] text-slate-500">
              © {new Date().getFullYear()} WEBRONIC INDUSTRIES PRIVATE LIMITED.
              ALL RIGHTS RESERVED.
            </p>
            <div className="flex items-center justify-center md:justify-start gap-2 mt-2">
              <span className="h-1 w-1 rounded-full bg-[#336fa5] animate-pulse" />
              <p className="text-[9px] text-slate-600 uppercase tracking-widest font-medium">
                Global Enterprise Tech Solutions
              </p>
            </div>
          </div>

          <div className="flex items-center gap-6 group ">
            <a
              href="https://www.thingsatweb.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Image
                src="./assets/images/thingsatweb.png"
                alt="ThingsAtWeb"
                width={100}
                height={28}
                className="object-contain"
              />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
