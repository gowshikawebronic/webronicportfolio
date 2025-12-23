"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { usePathname, useRouter } from "next/navigation";
import { ChevronDown } from "lucide-react";

const primaryItems = [
  { name: "Home", type: "section", id: "hero" },
  { name: "Services", type: "page", href: "/service" },
  { name: "Projects", type: "page", href: "/projects" },
  { name: "Team", type: "page", href: "/team" },
  { name: "Contact", type: "section", id: "contact" },
];

const secondaryItems = [
  { name: "About", type: "section", id: "about" },
  { name: "Partners", type: "section", id: "partner" },
  { name: "Clients", type: "section", id: "client" },
  { name: "Career", type: "section", id: "career" },
  { name: "Branches", type: "section", id: "branches" },
];

export default function Navbar() {
  const [active, setActive] = useState<string | null>("hero");
  const [open, setOpen] = useState(false);
  const router = useRouter();
  const path = usePathname();

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [open]);

  useEffect(() => {
    if (!path || path !== "/") return;
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
    if (el) {
      el.scrollIntoView({ behavior: "smooth", block: "start" });
      history.replaceState(null, "", `/#${item.id}`);
      setActive(item.id);
    } else {
      router.push(`/#${item.id}`);
    }
  };

  return (
    <>
      <header className="fixed inset-x-0 top-0 z-50 bg-slate-900/95 backdrop-blur-md border-b border-white/5">
        <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
          
          <a href="/#hero" onClick={(e) => { e.preventDefault(); handleNavClick({ type: "section", id: "hero" }); }} className="flex items-center">
            <Image src="./assets/storetechlogo2.png" alt="Logo" width={140} height={35} priority className="object-contain" />
          </a>

          <ul className="hidden md:flex items-center gap-7">
            {primaryItems.map((item) => (
              <NavItem key={item.name} item={item} active={active} path={path} onClick={handleNavClick} />
            ))}

            <li className="relative group">
              <button className="flex items-center gap-1 text-sm font-semibold text-slate-300 hover:text-white transition py-2">
                Company <ChevronDown size={14} className="transition-transform group-hover:rotate-180" />
              </button>
              
              <div className="absolute left-1/2 -translate-x-1/2 top-full hidden group-hover:block w-48 pt-2">
                <div className="rounded-xl bg-slate-800 border border-white/10 p-2 shadow-2xl backdrop-blur-xl">
                  {secondaryItems.map((item) => (
                    <button
                      key={item.name}
                      onClick={() => handleNavClick(item)}
                      className="block w-full text-left rounded-lg px-4 py-2.5 text-xs font-bold uppercase tracking-widest text-slate-400 hover:bg-white/5 hover:text-white transition"
                    >
                      {item.name}
                    </button>
                  ))}
                </div>
              </div>
            </li>
          </ul>

          <div className="flex items-center gap-4">
            <button
              onClick={() => handleNavClick({ type: "section", id: "contact" })}
              className="hidden sm:inline-flex items-center justify-center rounded-xl bg-white px-5 py-2 text-sm font-bold text-slate-900 shadow-lg hover:scale-105 transition"
            >
              Get in Touch
            </button>
            <button onClick={() => setOpen(true)} className="md:hidden p-2 text-white">☰</button>
          </div>
        </nav>
      </header>

      {open && (
        <>
          <div className="fixed inset-0 z-40 bg-black/60 backdrop-blur-sm" onClick={() => setOpen(false)} />
          <div className="fixed top-0 right-0 z-50 h-full w-[280px] bg-slate-900 p-6 shadow-2xl animate-in slide-in-from-right duration-300">
            <div className="flex flex-col gap-4 mt-12">
              <p className="text-[10px] font-bold text-slate-500 uppercase tracking-[0.2em] mb-2">Main Menu</p>
              {primaryItems.map((item) => (
                <MobileNavItem key={item.name} item={item} active={active} path={path} onClick={handleNavClick} />
              ))}
              
              <div className="h-px bg-white/10 my-4" />
              
              <p className="text-[10px] font-bold text-slate-500 uppercase tracking-[0.2em] mb-2">Explore</p>
              {secondaryItems.map((item) => (
                <MobileNavItem key={item.name} item={item} active={active} path={path} onClick={handleNavClick} />
              ))}
            </div>
          </div>
        </>
      )}
    </>
  );
}


function NavItem({ item, active, path, onClick }: any) {
  const isActive = item.type === "section" ? active === item.id : path === item.href;
  return (
    <li>
      <button
        onClick={() => onClick(item)}
        className={`group relative text-sm font-semibold transition ${isActive ? "text-white" : "text-slate-400 hover:text-slate-200"}`}
      >
        {item.name}
        <span className={`absolute -bottom-1 left-0 h-0.5 bg-blue-500 transition-all duration-300 ${isActive ? "w-full" : "w-0 group-hover:w-full"}`} />
      </button>
    </li>
  );
}

function MobileNavItem({ item, active, path, onClick }: any) {
  const isActive = item.type === "section" ? active === item.id : path === item.href;
  return (
    <button
      onClick={() => onClick(item)}
      className={`block w-full text-left rounded-xl px-4 py-3 text-sm font-bold transition ${isActive ? "bg-blue-600 text-white" : "text-slate-400 hover:bg-white/5"}`}
    >
      {item.name}
    </button>
  );
}