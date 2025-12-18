"use client";

import Image from "next/image";

export default function Hero() {
  return (
    <section className="relative min-h-screen overflow-hidden bg-[#0b0f1a] text-white flex items-center">
      
      {/* Subtle Tech Grid */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(99,102,241,0.06)_1px,transparent_1px),linear-gradient(90deg,rgba(99,102,241,0.06)_1px,transparent_1px)] bg-[size:64px_64px] animate-grid" />

      {/* Rings – calm & premium */}
      <div className="absolute left-1/2 top-1/2 h-[520px] w-[520px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-indigo-500/25 animate-spin-slow" />
      <div className="absolute left-1/2 top-1/2 h-[720px] w-[720px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-cyan-400/20 animate-spin-reverse" />

      {/* Ambient light */}
      <div className="absolute top-24 left-24 h-48 w-48 bg-indigo-500/20 blur-3xl animate-float" />
      <div className="absolute bottom-32 right-32 h-56 w-56 bg-cyan-400/20 blur-3xl animate-float delay-3000" />

      {/* Content */}
      <div className="relative z-10 mx-auto max-w-6xl px-6 text-center">
        
        <p className="mb-4 mt-35 text-xs tracking-[0.35em] text-indigo-400 animate-fade-in">
          DIGITAL SOLUTIONS PARTNER
        </p>

        <h1 className="text-5xl sm:text-7xl font-extrabold leading-tight animate-reveal">
          <span className="block text-gray-200">
            DESIGNING THE FUTURE
          </span>
          <span className="block bg-gradient-to-r from-indigo-400 to-cyan-400 bg-clip-text text-transparent">
            WEBRONIC
          </span>
        </h1>

        <p className="mt-6 max-w-2xl mx-auto text-base sm:text-lg text-gray-400 animate-fade-in delay-300">
          When you grow, with our technical expertise — we grow together.
        </p>

{/* <div className="mt-14 max-w-5xl mx-auto grid gap-4 sm:grid-cols-2 lg:grid-cols-3 animate-fade-in delay-600">
  {[
    "Are you planning to create a website for your business?",
    "Want to convert your business ideas into a mobile app?",
    "How about getting an SEO analysis done for your website?",
    "Need help reaching your target audience online?",
    "Thinking of making your business process smart with IoT?",
    "Still confused about choosing the right domain & hosting service?",
  ].map((text, index) => (
    <div
      key={index}
     className="group relative rounded-xl border border-white/10 bg-white/5 backdrop-blur-md px-6 py-5 text-sm leading-relaxed text-gray-300 transition-all duration-300 hover:border-indigo-400/40 hover:bg-white/10 hover:shadow-[0_0_20px_rgba(99,102,241,0.25)] hover:-translate-y-1"

    >
      

      {text}
    </div>
  ))}
</div> */}


        
        <div className="mt-24 mb-10 animate-fade-in delay-900 flex justify-center">
          <a
            href="https://vasanthwebronic-oss.github.io/storetech-portfolio/"
            target="_blank"
            rel="noopener noreferrer"
           className="group relative w-full max-w-3xl overflow-hidden rounded-xl border border-white/10 bg-white/5 backdrop-blur-md px-10 py-8 transition-all duration-700 hover:border-indigo-400/50"

          >
            {/* Soft gradient sweep */}
            <span
              aria-hidden
              className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-1000 bg-[linear-gradient(120deg,transparent,rgba(99,102,241,0.25),transparent)]"
            />

            <div className="relative z-10 flex flex-col sm:flex-row items-center gap-8">
              <Image
                src="/assets/image.png"
                alt="StoreTech"
                width={180}
                height={60}
                className="object-contain transition-transform duration-500 group-hover:scale-105"
              />

              <div className="text-center sm:text-left">
                <p className="text-xs uppercase tracking-[0.3em] text-gray-500 mb-2">
                  Featured Project
                </p>
                <h3 className="text-2xl font-semibold text-gray-100">
                  StoreTech — Smart Retail Platform
                </h3>
                <p className="mt-2 text-gray-400 text-sm max-w-md">
                  An intelligent retail ecosystem focused on automation,
                  scalability, and real-world deployment.
                </p>
              </div>

              <div className="text-indigo-400 text-xl transition-transform duration-500 group-hover:translate-x-2">
                →
              </div>
            </div>
          </a>
        </div>

      </div>
    </section>
  );
}
