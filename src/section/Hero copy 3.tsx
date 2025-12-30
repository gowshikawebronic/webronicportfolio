"use client";

import Image from "next/image";
import Link from "next/link";
import { useState, useEffect } from "react";
import { ArrowRight, Sparkles } from "lucide-react";

// The array order is the absolute source of truth.
const HERO_DATA = [
  { text: "Smart Kiosk", img: "./assets/images/hero/kiosk.png" },
  { text: "Smart Vending Machine", img: "./assets/images/hero/vending.png" },
  { text: "Smart Fridge", img: "./assets/images/hero/fridge.png" },
  { text: "Shopping App", img: "./assets/images/hero/app.png" },
  { text: "Smart Door Controller", img: "./assets/images/hero/door.png" },
  { text: "Android TV Promotion Manager", img: "./assets/images/hero/tv.png" },
  { text: "Unified ERP & Management", img: "./assets/images/hero/erp.png" },
  { text: "AI-Powered Security", img: "./assets/images/hero/security.png" },
  { text: "Electronic Price Tags", img: "./assets/images/hero/tags.png" },
  { text: "Passage System", img: "./assets/images/hero/passage.png" },
  { text: "Automated Tan Beds", img: "./assets/images/hero/tan.png" },
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

    // STEP 1: Type the word fully while keeping the image static
    if (!typingComplete) {
      if (displayText.length < currentWord.length) {
        const typingTimeout = setTimeout(() => {
          setDisplayText(currentWord.substring(0, displayText.length + 1));
        }, 100); 
        return () => clearTimeout(typingTimeout);
      } else {
        // Text is finished. Stop typing and start the display pause.
        setTypingComplete(true);
      }
    } 
    
    // STEP 2: Wait 3 seconds, then swap image and text simultaneously
    else {
      const waitTimeout = setTimeout(() => {
        setDisplayText(""); 
        setTypingComplete(false); 
        // Index only changes here, ensuring the next image matches the next text perfectly
        setIndex((prev) => (prev + 1) % HERO_DATA.length); 
      }, 2000); 
      return () => clearTimeout(waitTimeout);
    }
  }, [displayText, index, isMounted, typingComplete]);

  if (!isMounted) return null;

  const nextIndex = (index + 1) % HERO_DATA.length;

  return (
    <section id="/" className="relative overflow-hidden bg-white py-20 mt-10 font-sora">
      <style>{`
        @keyframes soltioSwap {
          0% { transform: translateX(0) scale(1); opacity: 1; z-index: 20; }
          40% { transform: translateX(110%) scale(0.95) rotate(4deg); opacity: 0.5; z-index: 20; }
          50% { transform: translateX(110%); z-index: 5; opacity: 0; }
          100% { transform: translateX(0) scale(0.8); opacity: 0; z-index: 5; }
        }
        @keyframes soltioReveal {
          0% { transform: scale(0.9); opacity: 0; }
          100% { transform: scale(1); opacity: 1; }
        }
        .animate-soltio-swap {
          animation: soltioSwap 1.2s cubic-bezier(0.4, 0, 0.2, 1) forwards;
        }
        .animate-soltio-reveal {
          animation: soltioReveal 0.6s cubic-bezier(0.4, 0, 0.2, 1) 0.1s forwards;
        }
        .cursor-blink {
          display: inline-block;
          width: 3px;
          height: 1.1em;
          background-color: #336fa5;
          margin-left: 4px;
          vertical-align: middle;
          animation: blink 0.8s step-end infinite;
        }
        @keyframes blink { 50% { opacity: 0; } }
      `}</style>

      {/* Grid Background */}
      <div className="absolute inset-0 z-0 opacity-[0.03] pointer-events-none bg-[radial-gradient(#336fa5_1px,transparent_1px)] [background-size:40px_40px]" />

      <div className="relative z-10 mx-auto max-w-7xl px-6">
        <div className="grid grid-cols-1 items-center gap-16 lg:grid-cols-2">
          
          <div className="flex flex-col text-center lg:text-left">
            <div className="mb-8 inline-flex self-center lg:self-start items-center gap-2 rounded-full bg-slate-50 border border-slate-200 px-4 py-1.5 text-[10px] font-black uppercase tracking-widest text-[#336fa5]">
              <Sparkles size={14} className="text-[#5ba12d]" />
              Innovation by WEBRONIC
            </div>

            <h1 className="min-h-[180px] text-5xl font-black tracking-tight text-slate-900 sm:text-6xl lg:text-7xl leading-[1.1]">
              The Future of Retail, <br />
              <span className="text-[#336fa5]">
                {displayText}
                <span className="cursor-blink" />
              </span>
            </h1>

            <p className="mt-8 max-w-xl self-center lg:self-start text-lg lg:text-xl leading-relaxed text-slate-500 font-medium">
              Revolutionizing traditional commerce into intelligent, autonomous environments operating 
              <span className="text-slate-900 font-bold ml-1 underline decoration-[#5ba12d] decoration-2 underline-offset-4">
                seamlessly 24/7
              </span>.
            </p>

            <div className="mt-14 flex justify-center lg:justify-start">
              <Link
                href="https://vasanthwebronic-oss.github.io/storetech-portfolio/"
                target="_blank"
                className="group relative inline-flex items-center gap-6 rounded-2xl border border-slate-100 bg-white px-8 py-5 shadow-xl transition-all hover:-translate-y-1"
              >
                <Image src="./assets/images/storetech-logo-black.png" alt="StoreTech" width={140} height={36} className="object-contain" />
                <div className="h-8 w-px bg-slate-200" />
                <span className="flex items-center gap-2 text-sm font-black uppercase tracking-widest text-slate-900">
                  Explore Product <ArrowRight size={16} />
                </span>
              </Link>
            </div>
          </div>

          <div className="relative flex justify-center lg:justify-end">
            <div className="relative w-full max-w-[500px] aspect-square flex items-center justify-center">
              
              {/* BACK CARD: Pre-loads the image for the NEXT text item */}
              <div 
                key={`next-${nextIndex}`}
                className="animate-soltio-reveal absolute inset-0 z-0 overflow-hidden rounded-[2.5rem] border border-slate-100 bg-slate-50 p-6"
              >
                <div className="relative h-full w-full">
                  <Image
                    src={HERO_DATA[nextIndex].img}
                    alt="Next service"
                    fill
                    className="object-contain"
                  />
                </div>
              </div>

              {/* FRONT CARD: Swaps out to reveal the back card */}
              <div 
                key={`active-${index}`} 
                className="animate-soltio-swap absolute inset-0 z-10 overflow-hidden rounded-[2.5rem] border border-slate-200 bg-white p-6 shadow-2xl"
              >
                <div className="relative h-full w-full">
                  <Image
                    src={HERO_DATA[index].img}
                    alt={HERO_DATA[index].text}
                    fill
                    className="object-contain"
                    priority
                  />
                </div>
                
                <div className="absolute top-8 right-8 rounded-full bg-white/90 backdrop-blur-md px-4 py-2 shadow-sm border border-slate-100 flex items-center gap-3">
                  <div className="h-2 w-2 rounded-full bg-[#5ba12d] animate-pulse" />
                  <span className="text-[9px] font-black uppercase tracking-widest text-slate-900">Live System</span>
                </div>
              </div>

              <div className="absolute -bottom-10 -right-10 h-64 w-64 bg-[#336fa5]/10 blur-[100px] rounded-full z-[-1]" />
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}