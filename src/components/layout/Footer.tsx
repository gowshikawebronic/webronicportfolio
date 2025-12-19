"use client";

import Image from "next/image";

type NavLink = {
  label: string;
  id: string;
};

export default function Footer() {
  const navLinks: NavLink[] = [
    { label: "Home", id: "hero" },
    { label: "Partners", id: "partner" },
    { label: "Clients", id: "client" },
    { label: "Services", id: "services" },
    { label: "Team", id: "team" },
  ];

  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth", block: "start" });
      history.replaceState(null, "", `/#${id}`);
    }
  };

  return (
    <footer
      id="footer"
      className="relative mt-24 border-t border-slate-200 bg-white"
    >
      <div className="absolute inset-x-0 -top-24 h-24 bg-gradient-to-t from-blue-50/70 to-transparent pointer-events-none" />

      <div className="relative mx-auto max-w-7xl px-6 py-16">
        <div className="grid gap-14 lg:grid-cols-3">

          <div className="flex flex-col items-center lg:items-start gap-6 text-center lg:text-left">
            <div className="inline-flex rounded-xl bg-slate-900 px-4 py-2 shadow-md ring-1 ring-slate-200">
              <Image
                src="/assets/storetechlogo2.png"
                alt="WEBRONIC Logo"
                width={150}
                height={38}
                className="object-contain"
              />
            </div>

            <p className="text-slate-600 leading-relaxed max-w-sm">
              WEBRONIC is a technology-driven IT company delivering scalable,
              secure, and future-ready digital solutions for modern businesses.
            </p>

            <p className="text-sm text-slate-500">
              Powering innovation through reliable digital ecosystems.
            </p>
          </div>

          <div className="flex justify-center lg:justify-start lg:ml-20">
            <div className="flex flex-col items-center lg:items-start gap-3 text-center lg:text-left">
              <p className="mb-3 text-sm font-semibold tracking-wide text-slate-900 uppercase">
                Navigation
              </p>
              {navLinks.map(({ label, id }) => (
                <button
                  key={id}
                  onClick={() => scrollToSection(id)}
                  className="group flex items-center gap-2 text-slate-600 transition hover:text-blue-600"
                >
                  <span className="hidden lg:block h-1.5 w-1.5 rounded-full bg-blue-600 opacity-0 group-hover:opacity-100 transition" />
                  {label}
                </button>
              ))}
            </div>
          </div>

          <div className="flex flex-col items-center lg:items-start gap-5 text-center lg:text-left">
            <p className="text-sm font-semibold tracking-wide text-slate-900 uppercase">
              Contact
            </p>

            <div className="space-y-2 text-slate-600">
              <p>
                📧{" "}
                <a
                  href="mailto:contact@webronic.com"
                  className="hover:text-blue-600 transition"
                >
                  contact@webronic.com
                </a>
              </p>

              <p>
                🌐{" "}
                <a
                  href="https://www.thingsatweb.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-blue-600 transition"
                >
                  www.thingsatweb.com
                </a>
              </p>

              <p>📞 +91 72000 88500</p>
              <p>📞 +91 94443 26334</p>

              <p className="pt-2 text-sm text-slate-500">
                📍 New #33, Old #17, 2nd St, Mylapore,
                <br />
                Chennai, Tamil Nadu 600004.
              </p>
            </div>

            <div className="mt-4 flex items-center justify-center lg:justify-start gap-4">
              {[
                "/assets/icons/facebook.png",
                "/assets/icons/instagram.png",
                "/assets/icons/youtube.png",
                "/assets/icons/linkedin.png",
              ].map((src, i) => (
                <Image
                  key={i}
                  src={src}
                  alt="social"
                  width={28}
                  height={28}
                  className="opacity-70 transition hover:opacity-100 cursor-pointer"
                />
              ))}

              <span className="h-6 w-px bg-slate-300 mx-1 hidden sm:block" />

              <a
                href="https://www.thingsatweb.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Visit ThingsAtWeb"
              >
                <Image
                  src="/assets/images/thingsatweb.png"
                  alt="ThingsAtWeb"
                  width={90}
                  height={24}
                  className="opacity-80 hover:opacity-100 transition cursor-pointer"
                />
              </a>
            </div>
          </div>
        </div>

        <div className="mt-16 border-t border-slate-200 pt-6 text-center text-sm text-slate-500">
          © {new Date().getFullYear()} WEBRONIC. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
