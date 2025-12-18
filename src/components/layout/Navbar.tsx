"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { usePathname, useRouter } from "next/navigation";
import NavButton from "../common/NavButton";

type NavLink = { href: string; label: string; id: string };

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname() ?? "";
  const router = useRouter();

  const links: NavLink[] = [
    { href: "/#hero", label: "Home", id: "hero" },
    { href: "/#about", label: "About", id: "about" },
    { href: "/#features", label: "Features", id: "features" },
    { href: "/#products", label: "Products", id: "products" },
    { href: "/#service", label: "Service", id: "service" },
    { href: "/#industries", label: "Industries", id: "industries" },
    { href: "/#contact", label: "Contact", id: "contact" },
  ];

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  const scrollToSection = (id: string) => {
    setOpen(false);
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth", block: "start" });
      history.replaceState(null, "", `/#${id}`);
    } else {
      router.push(`/#${id}`);
    }
  };

  return (
    <>
      <header className="fixed top-0 inset-x-0 z-50 bg-black/95 backdrop-blur border-b border-gray-800">
        <div className="max-w-7xl mx-auto px-4 md:px-6">
          <div className="flex items-center justify-between h-20">
            {/* Logo */}
            <Link href="/#hero" className="flex items-center">
              <Image
                src="./assets/storetechlogo2.png"
                alt="StoreTech Logo"
                width={140}
                height={34}
                priority
              />
            </Link>

            <nav className="hidden lg:flex items-center gap-10">
              {links.map((l) => (
                <NavButton
                  key={l.id}
                  label={l.label}
                  id={l.id}
                  isActive={pathname.includes(l.id)}
                  onClick={scrollToSection}
                />
              ))}
            </nav>

            <div className="flex items-center gap-3">
              <button
                onClick={() => scrollToSection("contact")}
                className="hidden lg:inline-block bg-[#37c659] text-black px-5 py-2 rounded-lg font-semibold hover:bg-[#2fb84f] transition"
              >
                Get Started
              </button>

              <button
                onClick={() => setOpen(true)}
                className="lg:hidden p-2 rounded-md focus-visible:ring-2 focus-visible:ring-[#37c659]"
                aria-label="Open menu"
              >
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </header>

{open && (
  <>
    <div
      className="fixed inset-0 z-60 bg-black/60"
      onClick={() => setOpen(false)}
    />

    <div className="fixed top-20 right-4 z-70 w-[92%] max-w-sm">
      <div className="rounded-xl bg-black border border-gray-800 shadow-2xl overflow-hidden">
        
        <div className="flex items-center justify-between px-5 py-4 border-b border-gray-800">
          <Image
            src="./assets/storetechlogo2.png"
            alt="StoreTech"
            width={120}
            height={28}
          />
          <button
            onClick={() => setOpen(false)}
            aria-label="Close menu"
            className="p-2 rounded-md focus-visible:ring-2 focus-visible:ring-[#37c659]"
          >
            <svg
              className="w-6 h-6 text-white"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        <div className="px-5 py-4 space-y-2">
          {links.map((l) => (
            <button
              key={l.id}
              onClick={() => scrollToSection(l.id)}
              className="w-full text-left text-gray-300 px-3 py-3 rounded-md hover:bg-white/5 transition"
            >
              {l.label}
            </button>
          ))}

          <button
            onClick={() => scrollToSection("contact")}
            className="mt-3 w-full bg-[#37c659] text-black py-3 rounded-md font-semibold hover:bg-[#2fb84f] transition"
          >
            Get Started
          </button>
        </div>
      </div>
    </div>
  </>
)}

    </>
  );
}
