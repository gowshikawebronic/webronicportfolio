"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { usePathname, useRouter } from "next/navigation";

const navItems = [
  { name: "Home", id: "hero", href: "/" },
  { name: "Partners", id: "partner", href: "/#partner" },
  { name: "Clients", id: "client", href: "/#client" },
  { name: "Services", id: "services", href: "/#services" },
  { name: "Team", id: "team", href: "/#team" },
];

export default function Navbar() {
  const [active, setActive] = useState<string>("hero");
  const [open, setOpen] = useState(false);
  const pathname = usePathname();
  const router = useRouter();

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  const handleScroll = (id: string) => {
    setOpen(false);
    setActive(id);

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
      <header className="fixed inset-x-0 top-0 z-50 bg-white/80 backdrop-blur-md border-b border-slate-200">
        <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
          {/* LOGO */}
          <button
            onClick={() => handleScroll("hero")}
            className="flex items-center gap-3"
            aria-label="Go to home"
          >
            <div className="flex items-center rounded-xl bg-slate-900 px-4 py-2 shadow-md ring-1 ring-slate-200">
              <Image
                src="./assets/storetechlogo2.png"
                alt="WEBRONIC Logo"
                width={160}
                height={40}
                priority
                className="object-contain"
              />
            </div>
          </button>

          <ul className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
              <li key={item.id}>
                <button
                  onClick={() => handleScroll(item.id)}
                  className={`relative text-md font-semibold transition ${
                    active === item.id
                      ? "text-blue-600"
                      : "text-slate-700 hover:text-blue-600"
                  }`}
                >
                  {item.name}
                  <span
                    className={`absolute -bottom-1 left-0 h-0.5 bg-blue-600 transition-all duration-300 ${
                      active === item.id ? "w-full" : "w-0 group-hover:w-full"
                    }`}
                  />
                </button>
              </li>
            ))}
          </ul>

          <div className="flex items-center gap-4">
            <button
              onClick={() => handleScroll("footer")}
              className="hidden sm:inline-flex items-center justify-center rounded-xl bg-blue-600 px-6 py-2.5 text-sm font-semibold text-white shadow-md transition hover:bg-blue-700 hover:shadow-lg"
            >
              Contact Us
            </button>

            <button
              onClick={() => setOpen(true)}
              className="md:hidden rounded-lg border border-slate-300 p-2 text-slate-700 hover:bg-slate-100"
              aria-label="Open menu"
            >
              ☰
            </button>
          </div>
        </nav>
      </header>

      {open && (
        <>
          <div
            className="fixed inset-0 z-40 bg-black/40"
            onClick={() => setOpen(false)}
          />

          <div className="fixed top-20 right-4 z-50 w-[90%] max-w-sm rounded-xl bg-white shadow-xl ring-1 ring-slate-200">
            <div className="px-6 py-4 space-y-2">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => handleScroll(item.id)}
                  className={`block w-full text-left rounded-lg px-4 py-3 font-semibold transition ${
                    active === item.id
                      ? "bg-blue-50 text-blue-600"
                      : "text-slate-700 hover:bg-slate-100"
                  }`}
                >
                  {item.name}
                </button>
              ))}

              <button
                onClick={() => handleScroll("footer")}
                className="block mt-3 w-full rounded-lg bg-blue-600 py-3 font-semibold text-white hover:bg-blue-700"
              >
                Contact Us
              </button>
            </div>
          </div>
        </>
      )}
    </>
  );
}
