"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { usePathname, useRouter } from "next/navigation";
import { ChevronDown, Sparkles, X, Menu } from "lucide-react";

const primaryItems = [
  { name: "Home", type: "section", id: "hero" },
  { name: "Services", type: "page", href: "/service" },
  { name: "Projects", type: "page", href: "/projects" },
  { name: "Products", type: "page", href: "/products" },
  { name: "Branches", type: "page", href: "/branch" },
];

const secondaryItems = [
  { name: "About", type: "section", id: "about" },
  { name: "Partners", type: "section", id: "partner" },
  { name: "Clients", type: "section", id: "client" },
  { name: "Career", type: "section", id: "career" },
  { name: "Location", type: "section", id: "location" },
  { name: "Team", type: "page", href: "/team" },
];

export default function Navbar() {
  const [active, setActive] = useState<string | null>("hero");
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [mobileCompanyOpen, setMobileCompanyOpen] = useState(false);
  const router = useRouter();
  const path = usePathname();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (open) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
      setMobileCompanyOpen(false);
    }
  }, [open]);

  useEffect(() => {
    if (!path || path !== "/") {
      setActive(null);
      return;
    }
    const sections = document.querySelectorAll("section[id]");
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActive(entry.target.id);
        });
      },
      { rootMargin: "-40% 0px -50% 0px" }
    );
    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, [path]);

  const handleNavClick = (item: any) => {
    setOpen(false);
    if (item.type === "page") {
      setActive(item.href);
      router.push(item.href);
      return;
    }
    const el = document.getElementById(item.id);
    if (el && path === "/") {
      el.scrollIntoView({ behavior: "smooth", block: "start" });
      history.replaceState(null, "", `/#${item.id}`);
      setActive(item.id);
    } else {
      router.push(`/#${item.id}`);
    }
  };

  return (
    <>
      <header 
        className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 font-sora ${
          scrolled ? "py-2 lg:py-3" : "py-4 lg:py-6"
        }`}
      >
        <nav className={`mx-auto flex max-w-[95%] lg:max-w-6xl items-center justify-between px-4 lg:px-6 py-2.5 lg:py-3 rounded-xl lg:rounded-2xl transition-all duration-500 border ${
          scrolled 
          ? "bg-slate-900/90 backdrop-blur-xl border-white/10 shadow-2xl" 
          : "bg-transparent border-transparent"
        }`}>
          <Link
            href="/#hero"
            onClick={(e) => {
              e.preventDefault();
              handleNavClick({ type: "section", id: "hero" });
            }}
            className="flex items-center shrink-0 transition-transform active:scale-95"
          >
            <Image
              src="./assets/webronic.png"
              alt="Logo"
              width={120}
              height={28}
              priority
              className="object-contain lg:w-[130px] lg:h-[32px]"
            />
          </Link>

          {/* Desktop Menu - Hidden on Tablet (lg breakpoint) */}
          <ul className="hidden lg:flex items-center gap-1">
            {primaryItems.map((item) => (
              <NavItem
                key={item.name}
                item={item}
                active={active}
                path={path}
                onClick={handleNavClick}
              />
            ))}

            <li className="relative group ml-2">
              <button className="flex items-center gap-1.5 px-4 py-2 text-[13px] font-bold text-slate-300  transition-colors cursor-pointer uppercase tracking-widest">
                Company
                <ChevronDown
                  size={14}
                  className="transition-transform duration-300 group-hover:rotate-180"
                  style={{ color: '#336fa5' }}
                />
              </button>

              <div className="absolute left-1/2 -translate-x-1/2 top-full hidden group-hover:block w-56 pt-3 animate-in fade-in zoom-in-95 duration-200">
                <div className="rounded-2xl bg-slate-900/95 border border-white/10 p-2 shadow-2xl backdrop-blur-2xl">
                  {secondaryItems.map((item) => (
                    <button
                      key={item.name}
                      onClick={() => handleNavClick(item)}
                      className="flex items-center justify-between w-full rounded-xl px-4 py-3 text-[10px] cursor-pointer font-black uppercase tracking-widest text-slate-400 hover:bg-white/5 hover:text-white transition group/item"
                    >
                      {item.name}
                      <Sparkles size={10} className="opacity-0 group-hover/item:opacity-100 transition-opacity" style={{ color: '#336fa5' }} />
                    </button>
                  ))}
                </div>
              </div>
            </li>
          </ul>

          <div className="flex items-center gap-2 lg:gap-4">
            <Link
              href="/contact"
              className="hidden sm:inline-flex items-center justify-center rounded-xl bg-white px-5 lg:px-6 py-2 lg:py-2.5 text-[10px] lg:text-[11px]  uppercase tracking-[0.15em] text-slate-500 font-semibold shadow-xl transition-all duration-300 active:scale-95 hover:bg-[#336fa5] hover:text-white"
            >
              Contact us
            </Link>

            {/* Hamburger - Visible on Tablet and Mobile */}
            <button
              onClick={() => setOpen(true)}
              className="lg:hidden p-2 text-slate-400 active:scale-90 transition-all"
            >
              <Menu size={24} />
            </button>
          </div>
        </nav>
      </header>

      {/* Mobile/Tablet Drawer */}
      <div 
        className={`fixed inset-0 z-[100] lg:hidden transition-all duration-500 ${
          open ? "visible" : "invisible"
        }`}
      >
        <div
          className={`absolute inset-0 bg-slate-950/80 backdrop-blur-sm transition-opacity duration-500 ${
            open ? "opacity-100" : "opacity-0"
          }`}
          onClick={() => setOpen(false)}
        />
        
        <div 
          className={`absolute top-0 right-0 h-full w-[85%] max-w-[320px] bg-slate-900 border-l border-white/10 p-6 shadow-2xl transition-transform duration-500 flex flex-col ${
            open ? "translate-x-0" : "translate-x-full"
          }`}
        >
          <div className="flex items-center justify-between mb-8">
            <Image src="./assets/webronic.png" alt="Logo" width={100} height={24} className="object-contain" />
            <button onClick={() => setOpen(false)} className="p-2 text-slate-400 hover:text-white">
              <X size={24} />
            </button>
          </div>

          <div className="flex-1 overflow-y-auto pr-2 custom-scrollbar">
            <div className="space-y-1">
              <p className="text-[10px] font-black uppercase tracking-[0.3em] mb-4 pl-4" style={{ color: '#336fa5' }}>
                Main Menu
              </p>
              {primaryItems.map((item) => (
                <MobileNavItem
                  key={item.name}
                  item={item}
                  active={active}
                  path={path}
                  onClick={handleNavClick}
                />
              ))}

              <div className="h-px bg-white/5 my-6 mx-4" />

              <div className="space-y-1">
                <button 
                  onClick={() => setMobileCompanyOpen(!mobileCompanyOpen)}
                  className="flex items-center justify-between w-full pl-4 pr-2 py-3 text-xs font-black uppercase tracking-widest text-slate-400"
                >
                  <span style={{ color: '#336fa5' }}>Explore Company</span>
                  <ChevronDown size={16} className={`transition-transform duration-300 ${mobileCompanyOpen ? "rotate-180" : ""}`} />
                </button>
                
                {mobileCompanyOpen && (
                  <div className="pl-4 space-y-1 animate-in slide-in-from-top-2 duration-300">
                    {secondaryItems.map((item) => (
                      <MobileNavItem
                        key={item.name}
                        item={item}
                        active={active}
                        path={path}
                        onClick={handleNavClick}
                      />
                    ))}
                  </div>
                )}
              </div>
            </div>
            
            <div className="mt-10 px-4">
              <Link
                href="/contact"
                onClick={() => setOpen(false)}
                className="flex items-center justify-center w-full rounded-xl py-4 text-[11px]  uppercase tracking-[0.2em] text-white shadow-lg transition-all active:scale-95"
                style={{ backgroundColor: '#336fa5' }}
              >
                Contact us
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

function NavItem({ item, active, path, onClick }: any) {
  // Logic Fix: Section IDs are only "active" if on the root path
  const isActive = item.type === "section" 
    ? (active === item.id && path === "/") 
    : path === item.href;

  return (
    <li>
      <button
        onClick={() => onClick(item)}
        className={`group relative px-4 py-2 text-[13px] font-bold uppercase tracking-widest transition-all duration-300 cursor-pointer ${
          isActive ? "text-slate-500" : "text-slate-300 "
        }`}
      >
        <span className="relative z-10">{item.name}</span>
        {isActive && (
            <div 
              className="absolute inset-0  animate-in fade-in zoom-in-95 duration-500" 
              style={{  }}
            />
        )}
        {!isActive && (
            <span 
              className="absolute bottom-1 left-1/2 -translate-x-1/2 w-0 h-1 rounded-full group-hover:w-1 transition-all duration-300" 
              style={{ backgroundColor: '#5ba12d' }}
            />
        )}
      </button>
    </li>
  );
}

function MobileNavItem({ item, active, path, onClick }: any) {
  const isActive = item.type === "section" 
    ? (active === item.id && path === "/") 
    : path === item.href;

  return (
    <button
      onClick={() => onClick(item)}
      className={`block w-full text-left rounded-xl px-5 py-3.5 text-[11px] font-black uppercase tracking-widest transition-all ${
        isActive ? "text-white shadow-lg shadow-blue-900/20" : "text-slate-400 hover:bg-white/5"
      }`}
      style={{ backgroundColor: isActive ? '#336fa5' : 'transparent' }}
    >
      {item.name}
    </button>
  );
}