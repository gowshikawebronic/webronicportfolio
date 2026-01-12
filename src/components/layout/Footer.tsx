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
      className="relative w-full z-10 overflow-hidden bg-slate-900 border-t border-white/5 pt-16 md:pt-20 pb-10 font-sora"
    >
      <div className="absolute -bottom-24 -left-24 h-64 w-64 md:h-96 md:w-96 rounded-full bg-blue-600/10 blur-[80px] md:blur-[120px] pointer-events-none" />
      <div className="absolute top-0 right-0 h-48 w-48 md:h-64 md:w-64 rounded-full bg-indigo-500/5 blur-[70px] md:blur-[100px] pointer-events-none" />

      <div className="relative mx-auto max-w-7xl px-6">
        <div className="grid gap-10 lg:grid-cols-6 md:grid-cols-3 grid-cols-1 sm:grid-cols-2">
          <div className="space-y-6 lg:col-span-2 md:col-span-3">
            <div className="flex justify-start">
              <Image
                src="./assets/storetechlogo2.png"
                alt="WEBRONIC"
                width={140}
                height={40}
                className="object-contain transition-opacity hover:opacity-80"
              />
            </div>
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
                  className="flex h-9 w-9 items-center justify-center rounded-xl bg-white/5 border border-white/5 transition-all hover:bg-white/10 hover:-translate-y-1"
                >
                  <Image src={social.src} alt="Social" width={20} height={20} />
                </a>
              ))}
            </div>
          </div>

          <div className="space-y-4 md:space-y-6">
            <h4 className="text-[10px] font-black uppercase tracking-[0.2em] text-[#2776ea]">
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
                      className="mr-2 opacity-0 -translate-x-2 transition-all group-hover:opacity-100 group-hover:translate-x-0 text-[#76ea27]"
                    />
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="space-y-4 md:space-y-6">
            <h4 className="text-[10px] font-black uppercase tracking-[0.2em] text-[#2776ea]">
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
                { label: "Team", id: "/team", icon: Users, isExternal: true },
                {
                  label: "Location",
                  id: "location",
                  icon: MapPin,
                  isExternal: false,
                },
              ].map((item) => (
                <li key={item.label}>
                  {item.isExternal ? (
                    <Link
                      href={item.id}
                      className="text-xs md:text-sm text-slate-400 hover:text-white transition-all flex items-center group cursor-pointer"
                    >
                      <item.icon
                        size={13}
                        className="mr-2 text-slate-600 group-hover:text-[#76ea27] transition-colors shrink-0"
                      />
                      {item.label}
                    </Link>
                  ) : (
                    <button
                      onClick={() => scrollToSection(item.id)}
                      className="text-xs md:text-sm text-slate-400 hover:text-white transition-all flex items-center group bg-transparent border-none p-0 cursor-pointer text-left"
                    >
                      <item.icon
                        size={13}
                        className="mr-2 text-slate-600 group-hover:text-[#76ea27] transition-colors shrink-0"
                      />
                      {item.label}
                    </button>
                  )}
                </li>
              ))}
            </ul>
          </div>

          <div className="space-y-4 md:space-y-6">
            <h4 className="text-[10px] font-black uppercase tracking-[0.2em] text-[#2776ea]">
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
                      className="mr-2 text-slate-600 group-hover:text-[#76ea27] transition-colors shrink-0"
                    />
                    {policy.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="space-y-4 md:space-y-6">
            <h4 className="text-[10px] font-black uppercase tracking-[0.2em] text-[#2776ea]">
              Registered Office
            </h4>
            <div className="space-y-4 text-xs md:text-sm text-slate-400">
              <div className="flex gap-3 items-start">
                <MapPin size={16} className="text-[#2776ea] mt-1 shrink-0" />
                <p className="leading-relaxed">
                  New #33, Old #17, 2nd St, Mylapore, Chennai - 600004
                </p>
              </div>
              <div className="flex gap-3 items-center">
                <Phone size={16} className="text-[#2776ea] shrink-0" />
                <p className="font-bold">+91 72000 88500</p>
              </div>
              <div className="flex gap-3 items-center">
                <Mail size={16} className="text-[#2776ea] shrink-0" />
                <p className="break-all">contact@webronic.com</p>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-16 pt-12 border-t border-white/5">
          <h4 className="text-[10px] font-black uppercase tracking-[0.2em] text-[#2776ea] mb-8 text-center md:text-left">
            Regional Hubs
          </h4>
          <div className="grid gap-8 grid-cols-1 md:grid-cols-3">
            {[
              {
                title: "Chennai Digital Hub",
                address:
                  "A1 - No. 20, Sakthi Apartments, Cenotoph Road, Teynampet - 600004",
                phone: "+91 72000 88500",
              },
              {
                title: "Madurai Operations",
                address:
                  "JS Tower, Alanganallur Main Road, Sikkandar Savadi - 625018",
                phone: "+91 63833 26928",
              },
              {
                title: "Salem Hub",
                address:
                  "1-718, Sannasi Muniyappan Kovil, Surappalli, Salem - 636501",
                phone: "+91 72000 88500",
              },
            ].map((hub, idx) => (
              <div
                key={idx}
                className="group transition-all text-center md:text-left"
              >
                <p className="text-[10px] font-black uppercase tracking-widest text-slate-500 mb-2">
                  {hub.title}
                </p>
                <p className="text-xs text-slate-300 leading-relaxed">
                  {hub.address}
                </p>
                <p className="text-xs mt-1 text-[#2776ea] font-bold">
                  {hub.phone}
                </p>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6 md:gap-8 text-center md:text-left">
          <div className="order-2 md:order-1">
            <p className="text-[9px] md:text-[10px] font-bold uppercase tracking-[0.15em] md:tracking-[0.25em] text-slate-500 max-w-xs md:max-w-none">
              © {new Date().getFullYear()} WEBRONIC INDUSTRIES PRIVATE LIMITED.
              <br className="block md:hidden" /> ALL RIGHTS RESERVED.
            </p>
            <div className="flex items-center justify-center md:justify-start gap-2 mt-3 md:mt-2">
              <span className="h-1.5 w-1.5 rounded-full bg-[#2776ea] animate-pulse" />
              <p className="text-[9px] text-slate-600 uppercase tracking-widest font-medium">
                Global Enterprise Tech Solutions
              </p>
            </div>
          </div>

          <div className="flex items-center justify-center order-1 md:order-2">
            <a
              href="https://www.thingsatweb.com"
              target="_blank"
              rel="noopener noreferrer"
              className="opacity-70 hover:opacity-100 transition-opacity"
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
