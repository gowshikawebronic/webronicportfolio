"use client";

import Image from "next/image";
import Link from "next/link";

export default function Hero() {
  const scrollToServices = () => {
    const el = document.getElementById("services");
    if (el) {
      el.scrollIntoView({ behavior: "smooth", block: "start" });
      history.replaceState(null, "", "/#services");
    }
  };

  return (
    <section id="hero" className="relative overflow-hidden bg-white">
      <div className="absolute inset-0 bg-linear-to-b from-blue-50/60 to-white pointer-events-none" />

      <div className="relative mx-auto max-w-7xl px-6 py-24 lg:py-28 lg:flex lg:items-center lg:gap-16">
        
        <div className="max-w-2xl mx-auto lg:mx-0 text-center lg:text-left">
          {/* Eyebrow */}
          <p className="mb-4 inline-block rounded-full bg-blue-50 px-4 py-1 text-sm font-semibold text-blue-500">
            WEBRONIC • DESIGNING THE WORLD
          </p>

          <h1 className="text-4xl font-extrabold tracking-tight text-slate-900 sm:text-5xl lg:text-6xl">
            When You Grow
            <span className="block text-slate-600">
              With Our Technical Expertise, We Grow
            </span>
          </h1>

          {/* <p className="mt-6 text-lg leading-relaxed text-slate-600">
            WEBRONIC delivers reliable web, mobile, cloud, and AI-powered solutions
            designed to scale with your business and drive real-world results.
          </p> */}

          <p className="mt-6 text-lg leading-relaxed text-slate-600">
            We are the One Stop Solution for all your Requirements...
          </p>

          <div className="mt-8 flex flex-wrap justify-center lg:justify-start gap-4">
            
            <Link
              href="https://vasanthwebronic-oss.github.io/storetech-portfolio/"
              target="_blank"
              className="flex items-center gap-4 rounded-xl border border-slate-300 px-6 py-3 shadow-md bg-slate-900 hover:scale-105 transition-all ease-in duration-150"
            >
              <Image
                src="/assets/images/storetech-logo-white.png"
                alt="StoreTech Logo"
                width={50}
                height={50}
                className="object-contain"
              />
              <div>
                <p className="text-sm font-semibold text-slate-100">
                  Featured Project
                </p>
              </div>
            </Link>

            <button
              onClick={scrollToServices}
              className="inline-flex items-center justify-center rounded-xl border border-slate-300 bg-white px-7 py-3 text-base font-semibold text-slate-700 transition hover:border-slate-400 hover:bg-slate-50"
            >
              Explore Our Services
            </button>
          </div>

          <div className="mt-10 flex flex-wrap justify-center lg:justify-start gap-x-8 gap-y-3 text-sm font-medium text-slate-600">
            <span>✔ Scalable Architecture</span>
            <span>✔ Secure & Future-Ready</span>
            <span>✔ Business-First Approach</span>
          </div>
        </div>

        <div className="relative mt-16 flex flex-1 justify-center lg:mt-0">
          <div className="relative w-full max-w-md rounded-3xl border border-slate-200 bg-white p-4 shadow-xl">
            <Image
              src="/assets/images/hero-dashboard.png"
              alt="WEBRONIC dashboard preview"
              width={600}
              height={600}
              className="rounded-2xl"
              priority
            />

            <div className="absolute -right-30 top-10 hidden rounded-2xl bg-white px-5 py-4 shadow-lg md:block">
              <p className="text-sm font-semibold text-slate-900">
                Scalable Systems
              </p>
              <p className="text-xs text-slate-500">
                Built for long-term growth
              </p>
            </div>

            <div className="absolute -left-30 bottom-10 hidden rounded-2xl bg-white px-5 py-4 shadow-lg md:block">
              <p className="text-sm font-semibold text-slate-900">
                Secure by Design
              </p>
              <p className="text-xs text-slate-500">
                Enterprise-grade security
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
