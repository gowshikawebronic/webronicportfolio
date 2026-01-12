"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { ArrowRight, Sparkles } from "lucide-react";
import Image from "next/image";
const HERO_DATA = [
  { text: "Smart Kiosk", img: "assets/images/hero/kiosk.png" },
  { text: "Smart Vending Machine", img: "assets/images/hero/vending.png" },
  { text: "Smart Fridge", img: "assets/images/hero/fridge.png" },
  { text: "Shopping App", img: "assets/images/hero/shopping.png" },
  { text: "Smart Door Controller", img: "assets/images/hero/door.png" },
  { text: "Android TV Promotion Manager", img: "assets/images/hero/tv.png" },
  { text: "Unified ERP & Management", img: "assets/images/hero/erp.png" },
  { text: "AI-Powered Security", img: "assets/images/hero/security.png" },
  { text: "Electronic Price Tags", img: "assets/images/hero/tags.png" },
  { text: "Passage System", img: "assets/images/hero/passage.png" },
  { text: "Automated Tan Beds", img: "assets/images/hero/tan.png" },
];

export default function Hero() {
  const [index, setIndex] = useState(0);
  const [displayText, setDisplayText] = useState("");
  const [isMounted, setIsMounted] = useState(false);
  const [typingComplete, setTypingComplete] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  useEffect(() => {
    if (!isMounted) return;

    const currentWord = HERO_DATA[index].text;

    if (!typingComplete) {
      if (displayText.length < currentWord.length) {
        const typingTimeout = setTimeout(() => {
          setDisplayText(currentWord.substring(0, displayText.length + 1));
        }, 80);
        return () => clearTimeout(typingTimeout);
      } else {
        setTypingComplete(true);
      }
    } else {
      const waitTimeout = setTimeout(() => {
        setDisplayText("");
        setTypingComplete(false);
        setIndex((prev) => (prev + 1) % HERO_DATA.length);
      }, 2500);
      return () => clearTimeout(waitTimeout);
    }
  }, [displayText, index, isMounted, typingComplete]);

  if (!isMounted) return null;

  const prevIndex = (index - 1 + HERO_DATA.length) % HERO_DATA.length;
  const nextIndex = (index + 1) % HERO_DATA.length;
  const thirdIndex = (index + 2) % HERO_DATA.length;

  return (
    <section className="relative overflow-hidden bg-white py-20 mt-10 font-sora min-h-200 flex items-center">
      <style jsx global>{`
        @keyframes card-enter {
          0% {
            transform: scale(0.95) translateY(10px) rotate(5deg);
            opacity: 0;
          }
          100% {
            transform: scale(1) translateY(0) rotate(0deg);
            opacity: 1;
          }
        }
        @keyframes card-cycle-back {
          0% {
            transform: scale(1) translateY(0) rotate(0deg);
            opacity: 1;
            z-index: 50;
          }
          50% {
            transform: translateX(60px) translateY(20px) rotate(15deg)
              scale(0.9);
            opacity: 0.5;
            z-index: 0;
          }
          100% {
            transform: translateX(30px) translateY(-10px) rotate(24deg)
              scale(0.85);
            opacity: 0.2;
            z-index: 0;
          }
        }
        .animate-card-enter {
          animation: card-enter 0.6s cubic-bezier(0.2, 0.8, 0.2, 1) forwards;
        }
        .animate-cycle-back {
          animation: card-cycle-back 0.8s ease-in-out forwards;
        }
        .card-transition {
          transition: all 0.7s cubic-bezier(0.25, 0.8, 0.25, 1);
        }

        /* Blinking Cursor Animation */
        .cursor-blink {
          display: inline-block;
          width: 4px;
          height: 1em;
          background-color: #2776ea;
          margin-left: 4px;
          vertical-align: middle;
          animation: blink 1s step-end infinite;
        }
        @keyframes blink {
          50% {
            opacity: 0;
          }
        }
      `}</style>

      <div className="absolute inset-0 z-0 opacity-[0.03] pointer-events-none bg-[radial-gradient(#2776ea_1px,transparent_1px)] bg-size-[40px_40px]" />

      <div className="relative z-10 mx-auto max-w-7xl px-6 w-full">
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2">
          <div className="flex flex-col text-center lg:text-left z-20">
            <h1 className="min-h-40 text-4xl font-black tracking-tight text-slate-900 sm:text-5xl lg:text-6xl leading-[1.1]">
              The Future of Retail, <br />
              <span className="bg-linear-to-r from-[#2776ea] to-[#76ea27] bg-clip-text text-transparent">
                {displayText}
                {displayText === "" && <span>&nbsp;</span>}
              </span>
            </h1>

            <p className="mt-8 max-w-xl self-center lg:self-start text-lg lg:text-xl leading-relaxed text-slate-500 font-medium">
              Revolutionizing traditional commerce into intelligent, autonomous
              environments operating
              <span className="text-slate-900 font-bold ml-1 underline decoration-[#76ea27] decoration-2 underline-offset-4">
                seamlessly 24/7
              </span>
              .
            </p>

            <div className="mt-14 flex justify-center lg:justify-start">
              <Link
                href="https://vasanthwebronic-oss.github.io/storetech-portfolio/"
                target="_blank"
                className="group relative inline-flex items-center gap-6 rounded-2xl border border-slate-100 bg-white px-8 py-5 shadow-xl transition-all hover:-translate-y-1"
              >
                <Image
                  src="./assets/images/storetech-logo-black.png"
                  alt="StoreTech"
                  width={140}
                  height={36}
                  className="object-contain"
                />

                <div className="h-8 w-px bg-slate-200" />
                <span className="flex items-center gap-2 text-sm font-black uppercase tracking-widest text-slate-900">
                  Explore Product <ArrowRight size={16} />
                </span>
              </Link>
            </div>
          </div>

          <div className="relative flex justify-center lg:justify-end h-125 items-center">
            <div className="relative w-[320px] h-112.5 perspective-1000">
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-125 w-125 bg-[#2776ea]/15 blur-[100px] rounded-full z-[-1]" />

              <div
                key={`prev-${prevIndex}`}
                className="animate-cycle-back absolute inset-0 rounded-4xl border border-slate-200/50 bg-white shadow-sm overflow-hidden"
              >
                <img
                  src={HERO_DATA[prevIndex].img}
                  alt="Exiting"
                  className="h-full w-full object-contain p-8 opacity-40 grayscale"
                />
              </div>

              <div
                className="absolute inset-0 rounded-4xl border border-slate-100 bg-white/40 shadow-sm card-transition"
                style={{
                  transform:
                    "translateX(50px) translateY(-15px) rotate(24deg) scale(0.85)",
                  opacity: 0.3,
                  zIndex: 10,
                }}
              >
                <div className="relative h-full w-full opacity-60 grayscale blur-[1px]">
                  <img
                    src={HERO_DATA[thirdIndex].img}
                    alt="Back Card"
                    className="h-full w-full object-contain p-8"
                  />
                </div>
              </div>

              <div
                className="absolute inset-0 rounded-4xl border border-slate-200 bg-white/80 shadow-md card-transition"
                style={{
                  transform:
                    "translateX(25px) translateY(-8px) rotate(12deg) scale(0.92)",
                  opacity: 0.6,
                  zIndex: 20,
                }}
              >
                <div className="relative h-full w-full">
                  <img
                    src={HERO_DATA[nextIndex].img}
                    alt="Middle Card"
                    className="h-full w-full object-contain p-8"
                  />
                </div>
              </div>

              <div
                key={index}
                className="animate-card-enter absolute inset-0 z-30 rounded-4xl border border-slate-200 bg-white shadow-2xl overflow-hidden"
              >
                <div className="relative h-full w-full flex items-center justify-center p-8">
                  <img
                    src={HERO_DATA[index].img}
                    alt={HERO_DATA[index].text}
                    className="h-full w-full object-contain drop-shadow-sm"
                    loading="eager"
                  />
                </div>

                <div className="absolute top-6 right-6 rounded-full bg-slate-50/90 backdrop-blur-md px-3 py-1.5 shadow-sm border border-slate-100 flex items-center gap-2">
                  <div className="h-1.5 w-1.5 rounded-full bg-[#76ea27] animate-pulse" />
                  <span className="text-[9px] font-black uppercase tracking-widest text-slate-700">
                    Live
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
