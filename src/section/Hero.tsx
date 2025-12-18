"use client";

import Image from "next/image";
import { Parallax } from "react-scroll-parallax";

export default function Home() {
  return (
    <section id="home" className="mt-20 lg:mt-28 px-20">
      <div className="container">
        {/* HERO TEXT */}
        <div className="flex flex-col items-center justify-between text-black lg:flex-row">
          {/* LEFT */}
          <div className="flex flex-col items-center text-[clamp(1.25rem,4vw,3.75rem)] font-medium lg:items-start">
            <span className="font-bold tracking-wide">WEBRONIC</span>
            <span className="bg-gradient-to-b from-black via-gray-500 to-gray-300 bg-clip-text text-nowrap text-transparent">
              DESIGNING THE FUTURE
            </span>
          </div>

          {/* RIGHT */}
          <div className="flex flex-col items-center justify-between gap-5 lg:items-end">
            <p className="text-center text-gray-500 lg:text-end">
              When you grow, with our technical expertise — we grow together.
            </p>

            {/* StoreTech Logo Link */}
            <a
              href="https://vasanthwebronic-oss.github.io/storetech-portfolio/"
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center gap-4 rounded-3xl border border-black/10 bg-white px-6 py-3 shadow-sm shadow-black/10 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:shadow-black/20"
            >
              <img
                src="/assets/images/storetech-logo-black.png"
                alt="StoreTech"
                className="h-10 w-auto object-contain"
              />
              <span className="text-sm font-medium text-gray-700 transition-colors duration-300 group-hover:text-black">
                Featured Project
              </span>
            </a>
          </div>
        </div>

        {/* HERO IMAGE SECTION */}
        <div className="overflow-y-hidden">
          <div className="relative z-0 mt-20 flex h-96 items-center justify-center rounded-4xl bg-gradient-to-b from-gray-50 to-gray-50">
            <Parallax speed={20}>
              <Image
                src="/assets/Home/h1.png"
                alt="Main Illustration"
                width={200}
                height={200}
                className="z-10 w-50"
              />
            </Parallax>

            <Image
              src="/assets/Home/h2.png"
              alt=""
              width={120}
              height={80}
              className="absolute top-20 left-1/3 -z-10 hidden rounded-3xl shadow-2xl md:block md:-translate-x-48 lg:-translate-x-40"
            />

            <Image
              src="/assets/Home/h3.png"
              alt=""
              width={120}
              height={96}
              className="absolute right-1/3 bottom-20 hidden rounded-3xl shadow-2xl md:block md:translate-x-40 lg:translate-x-28"
            />

            <div className="absolute top-20 right-1/3 hidden min-w-fit rounded-3xl bg-black px-5 py-3 text-sm text-white md:block md:translate-x-40 lg:translate-x-10">
              Create a Website
            </div>

            <div className="absolute bottom-10 left-1/3 hidden min-w-fit rounded-3xl bg-black px-5 py-3 text-sm text-white md:block md:-translate-x-40 lg:-translate-x-10">
              SEO Analysis
            </div>

            <div className="inner-bottom-white absolute inset-0 rounded-4xl" />
          </div>
        </div>
      </div>
    </section>
  );
}
