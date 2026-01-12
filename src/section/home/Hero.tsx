"use client";

import Link from "next/link";
import { useState, useEffect, useRef, useCallback } from "react";
import { ArrowRight, CheckCircle2, Globe, Layers, Users, Brain, Server, Code, Database, Cpu } from "lucide-react";

// --- CONTENT DATA WITH LINKS ---
const CAROUSEL_DATA = [
  {
    id: "slide1",
    title: "StoreTech",
    headline: "Autonomous Retail Technology",
    description: "Cloud-native platform powering 150+ unmanned stores with AI checkout, IoT inventory management, and integrated loyalty systems. Reduces operational costs by 60%. Proven with 50M+ transactions and 99.7% success rate across European and Indian markets.",
    stats: ["60% Cost Reduction", "99.7% Success Rate", "50M+ transactions"],
    cta: "Explore StoreTech",
    img: "./assets/images/storetech-logo-black.png",
    url: "https://vasanthwebronic-oss.github.io/storetech-portfolio/",
  },
  {
    id: "slide2",
    title: "Tanlux",
    headline: "Tanning Studio Automation",
    description: "Comprehensive ERP enabling 24/7 unmanned tanning studio operations with mobile booking, automated bed management, smart access control, and integrated retail. Leverages StoreTech infrastructure to deliver 70% labor cost reduction and seamless customer experience.",
    stats: ["70% labor cost reduction", "24/7 autonomous operations", "Multi-location scalability"],
    cta: "Explore Tanlux",
    img: "./assets/images/tanluxlogo.png",
    url: "https://tanlux.se/",
  },
  {
    id: "slide3",
    title: "Value Charts",
    headline: "Visual Collaboration Platform",
    description: "AI-powered diagramming and workflow visualization platform that transforms complex business processes into intelligent, interactive diagrams. Enables teams to map, automate, and optimize operations with enterprise-grade collaboration tools.",
    stats: ["Intelligent process mapping", "Real-time collaboration", "Workflow automation"],
    cta: "Explore Value Charts",
    img: "./assets/images/valuechart.png",
    url: "https://www.valueflowsoft.com/",
  },
  {
    id: "slide4",
    title: "FP Analyzer",
    headline: "Manufacturing Intelligence",
    description: "Real-time IoT monitoring platform that tracks OEE (Overall Equipment Effectiveness), eliminates downtime, and optimizes production workflows. Delivers predictive maintenance alerts and actionable process analytics to maximize manufacturing efficiency.",
    stats: ["Real-time OEE tracking ", "Predictive maintenance", "Downtime elimination"],
    cta: "Explore FP Analyzer",
    img: "./assets/images/fpanalyzer.png",
    url: "https://www.fpanalyzer.se/",
  },
];

// --- TRUST INDICATORS WITH NUMERIC VALUES FOR ANIMATION ---
const TRUST_INDICATORS = [
  { target: 500, suffix: "+", label: "Global Clients", icon: Users },
  { target: 15, suffix: "+", label: "Years of Excellence", icon: Layers },
  { target: 50, suffix: "+", label: "Countries Reached", icon: Globe },
  { target: 99.9, suffix: "%", label: "Client Satisfaction", icon: CheckCircle2 },
];

// --- ANIMATED COUNTER COMPONENT ---
function CountUp({ target, suffix, duration = 2000 }: { target: number; suffix: string; duration?: number }) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let startTime: number | null = null;
    const animate = (currentTime: number) => {
      if (!startTime) startTime = currentTime;
      const progress = Math.min((currentTime - startTime) / duration, 1);

      // Easing function for smooth finish
      const easeOut = 1 - Math.pow(1 - progress, 3);

      setCount(progress === 1 ? target : Number((easeOut * target).toFixed(1))); // Handle decimals for 99.9

      if (progress < 1) {
        requestAnimationFrame(animate);
      }
    };
    requestAnimationFrame(animate);
  }, [target, duration]);

  return <>{count}{suffix}</>;
}

export default function HeroCompact() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isMounted, setIsMounted] = useState(false);
  const autoAdvanceRef = useRef<NodeJS.Timeout | null>(null);

  // Swipe State
  const touchStartX = useRef(0);
  const touchEndX = useRef(0);

  useEffect(() => {
    setIsMounted(true);
    startAutoAdvance();
    return () => stopAutoAdvance();
  }, []);

  const startAutoAdvance = () => {
    stopAutoAdvance();
    autoAdvanceRef.current = setInterval(() => {
      nextSlide();
    }, 5000);
  };

  const stopAutoAdvance = () => {
    if (autoAdvanceRef.current) clearInterval(autoAdvanceRef.current);
  };

  const nextSlide = useCallback(() => {
    setActiveIndex((prev) => (prev + 1) % CAROUSEL_DATA.length);
  }, []);

  const prevSlide = useCallback(() => {
    setActiveIndex((prev) => (prev - 1 + CAROUSEL_DATA.length) % CAROUSEL_DATA.length);
  }, []);

  const handleManualDot = (index: number) => {
    stopAutoAdvance();
    setActiveIndex(index);
    startAutoAdvance();
  };

  const handleTouchStart = (e: React.TouchEvent) => {
    stopAutoAdvance();
    touchStartX.current = e.targetTouches[0].clientX;
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    touchEndX.current = e.targetTouches[0].clientX;
  };

  const handleTouchEnd = () => {
    if (!touchStartX.current || !touchEndX.current) return;
    const distance = touchStartX.current - touchEndX.current;
    if (distance > 50) nextSlide();
    if (distance < -50) prevSlide();
    touchStartX.current = 0;
    touchEndX.current = 0;
    startAutoAdvance();
  };

  if (!isMounted) return null;

  // Indices
  const len = CAROUSEL_DATA.length;
  const prevIndex = (activeIndex - 1 + len) % len;
  const activeSlide = CAROUSEL_DATA[activeIndex];

  return (
    <section
      className="relative overflow-hidden bg-white mt-20 lg:mt-28 font-sora flex items-center justify-center py-4 sm:py-0"
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
      onTouchEnd={handleTouchEnd}
    >
      <style jsx global>{`
        @keyframes card-enter {
          0% { transform: scale(0.95) translateY(20px) rotate(5deg); opacity: 0; }
          100% { transform: scale(1) translateY(0) rotate(0deg); opacity: 1; }
        }
        @keyframes card-cycle-back {
          0% { transform: scale(1) translateY(0) rotate(0deg); opacity: 1; z-index: 50; }
          50% { transform: translateX(60px) translateY(20px) rotate(15deg) scale(0.9); opacity: 0.5; z-index: 0; }
          100% { transform: translateX(30px) translateY(-10px) rotate(24deg) scale(0.85); opacity: 0.2; z-index: 0; }
        }
        @keyframes fade-up-gentle {
            from { opacity: 0; transform: translateY(10px); }
            to { opacity: 1; transform: translateY(0); }
        }
        @keyframes flow-code {
            0% { transform: translateY(0); opacity: 0; }
            50% { opacity: 0.3; }
            100% { transform: translateY(-100px); opacity: 0; }
        }
        @keyframes pulse-network {
            0%, 100% { opacity: 0.1; transform: scale(1); }
            50% { opacity: 0.3; transform: scale(1.1); }
        }
        @keyframes float-icon {
            0%, 100% { transform: translateY(0px); }
            50% { transform: translateY(-15px); }
        }
        .animate-card-enter { animation: card-enter 0.7s cubic-bezier(0.2, 0.8, 0.2, 1) forwards; }
        .animate-cycle-back { animation: card-cycle-back 0.9s ease-in-out forwards; }
        .animate-text-reveal { animation: fade-up-gentle 0.5s ease-out forwards; }
        .animate-flow-code { animation: flow-code 4s linear infinite; }
        .animate-pulse-network { animation: pulse-network 4s ease-in-out infinite; }
        .animate-float-slow { animation: float-icon 6s ease-in-out infinite; }
        .animate-float-medium { animation: float-icon 4s ease-in-out infinite; }
        .animate-float-fast { animation: float-icon 3s ease-in-out infinite; }
        .card-transition { transition: all 0.8s cubic-bezier(0.25, 0.8, 0.25, 1); }
      `}</style>

      {/* --- ADDED: ANIMATED VISUAL BACKGROUND (Network/Code/Cloud) --- */}
      <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
        {/* Base Gradient */}
        {/* <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(74,125,192,0.05),transparent_70%)]" /> */}
        
        {/* Animated Code Flow - Simulating Digital Streams */}
        <div className="absolute top-20 right-[10%] w-64 h-96 opacity-10 hidden lg:block">
            <div className="font-mono text-xs text-[#2776ea] space-y-2">
                <p className="animate-flow-code" style={{ animationDelay: '0s' }}>import &#123; AI &#125; from &apos;neural-net&apos;;</p>
                <p className="animate-flow-code" style={{ animationDelay: '1s' }}>const cloud = new Infrastructure();</p>
                <p className="animate-flow-code" style={{ animationDelay: '2s' }}>await platform.scale(infinity);</p>
                <p className="animate-flow-code" style={{ animationDelay: '0.5s' }}>data.optimize(&#123; OEE: 100 &#125;);</p>
            </div>
        </div>

        {/* Neural Network Nodes - Abstract Representation */}
        <div className="absolute top-1/3 right-0 w-[500px] h-[500px] opacity-20">
            {/* Node 1: Brain (AI) */}
            <div className="absolute top-10 right-20 animate-float-slow">
                <Brain size={64} className="text-[#2776ea]" />
                <div className="absolute top-1/2 left-1/2 w-32 h-0.5 bg-gradient-to-r from-[#2776ea] to-transparent -translate-x-full" />
            </div>
            {/* Node 2: Server (Cloud) */}
            <div className="absolute top-40 right-60 animate-float-medium">
                <Server size={48} className="text-[#76ea27]" />
                <div className="absolute top-full left-1/2 h-24 w-0.5 bg-gradient-to-b from-[#76ea27] to-transparent" />
            </div>
            {/* Node 3: Code (Platform) */}
            <div className="absolute bottom-20 right-10 animate-float-fast">
                <Code size={56} className="text-slate-400" />
            </div>
            {/* Connection Lines */}
            <svg className="absolute inset-0 w-full h-full stroke-[#2776ea] stroke-1 fill-none opacity-30">
                <path d="M400,50 Q300,150 200,200 T50,350" className="animate-pulse-network" />
            </svg>
        </div>
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-6 w-full h-full flex items-center">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 items-center w-full">
          
          {/* --- LEFT COLUMN --- */}
          <div className="flex flex-col text-center lg:text-left z-20">
            
            {/* Top Tagline */}
            <div className="mb-4 flex flex-wrap justify-center lg:justify-start items-center gap-3 text-xs font-bold tracking-widest uppercase text-slate-400">
              <span className="text-[#2776ea]">Global IT Services</span>
              <span className="w-1 h-1 rounded-full bg-slate-300" />
              <span>AI Innovation</span>
              <span className="w-1 h-1 rounded-full bg-slate-300" />
              <span>Cloud Excellence</span>
            </div>

            {/* Headline */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tighter text-slate-900 leading-[1.1]">
              Transforming Business 
              <span className="text-3xl sm:text-4xl lg:text-5xl text-slate-400 font-extrabold block mt-1">
                Through 
                <span className="bg-gradient-to-r from-[#2776ea] to-[#76ea27] bg-clip-text text-transparent ml-2">
                  Intelligent Technology
                </span>
              </span>
            </h1>

            {/* --- ADDED: PRIMARY & SECONDARY CTAs --- */}
            <div className="flex flex-wrap justify-center items-center lg:justify-start gap-4 mt-8 mb-8">
                <Link 
                  href="/service" 
                  className="px-5 py-3 rounded-xl bg-[#2776ea] text-white text-sm font-bold  tracking-widest hover:bg-[#76ea27] transition-all shadow-lg shadow-blue-900/20 active:scale-95"
                >
                  Explore Our Solutions
                </Link>
                <Link 
                  href="/contact" 
                  className="px-4 py-2 rounded-xl border-2 border-slate-200 text-slate-600 text-sm font-bold  tracking-widest hover:border-[#2776ea] hover:text-[#2776ea] transition-all active:scale-95 bg-white/50 backdrop-blur-sm"
                >
                  Talk to an Expert
                </Link>
            </div>

            {/* Dynamic Content Area */}
            <div key={activeIndex} className="mt-4 animate-text-reveal min-h-[220px]">
                <div className="flex items-center justify-center lg:justify-start gap-2 mb-2">
                    <span className="h-px w-6 bg-[#76ea27]"></span>
                    <span className="text-xs font-bold text-[#76ea27] uppercase tracking-widest">{activeSlide.title}</span>
                </div>

                <h2 className="text-2xl font-bold text-slate-800 mb-3">
                   {activeSlide.headline}
                </h2>
                
                <p className="text-base text-slate-500 font-medium leading-relaxed max-w-lg mx-auto lg:mx-0">
                  {activeSlide.description}
                </p>

                {/* Compact Stats */}
                <div className="mt-4 flex flex-wrap justify-center lg:justify-start gap-2">
                    {activeSlide.stats.map((stat, i) => (
                         <span key={i} className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-slate-50 border border-slate-100 text-xs font-bold text-slate-600">
                            <CheckCircle2 size={12} className="text-[#76ea27]" />
                            {stat}
                         </span>
                    ))}
                </div>

                {/* Dynamic Link Button */}
                <div className="mt-5 flex justify-center lg:justify-start">
                    <a 
                      href={activeSlide.url} 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      className="group inline-flex items-center gap-2 text-sm font-bold text-[#2776ea] hover:text-[#3a6db0] transition-all"
                    >
                        {activeSlide.cta} 
                        <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                    </a>
                </div>
            </div>

            {/* Dots */}
            <div className="mt-2 flex justify-center lg:justify-start gap-2">
              {CAROUSEL_DATA.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => handleManualDot(idx)}
                  className={`h-1.5 rounded-full transition-all duration-300 ${
                    idx === activeIndex ? "w-6 bg-[#2776ea]" : "w-1.5 bg-slate-200 hover:bg-slate-300"
                  }`}
                  aria-label={`Go to slide ${idx + 1}`}
                />
              ))}
            </div>

            {/* Animated Trust Indicators */}
            <div className="mt-8 pt-6 border-t border-slate-100 grid grid-cols-2 md:grid-cols-4 gap-4">
                {TRUST_INDICATORS.map((item, idx) => (
                    <div key={idx} className="flex flex-col items-center lg:items-start">
                        <span className="text-xl font-black text-slate-900">
                           <CountUp target={item.target} suffix={item.suffix} />
                        </span>
                        <span className="text-[9px] font-bold uppercase tracking-wider text-slate-400 flex items-center gap-1">
                            <item.icon size={10} className="text-[#76ea27]" /> {item.label}
                        </span>
                    </div>
                ))}
            </div>

          </div>

          {/* --- RIGHT COLUMN: COMPACT 3D CAROUSEL --- */}
          <div className="relative hidden lg:flex justify-end items-center h-[450px] perspective-1000">
              
             {/* Container */}
            <div className="relative w-[320px] h-[420px]">
              
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-[400px] w-[400px] bg-[#2776ea]/10 blur-[60px] rounded-full z-[-1]" />

              {/* Exiting Card */}
              <div
                key={`prev-${prevIndex}`}
                className="animate-cycle-back absolute inset-0 rounded-3xl border border-slate-100 bg-white shadow-sm overflow-hidden p-8 flex items-center justify-center"
              >
                 <img 
                   src={CAROUSEL_DATA[prevIndex].img} 
                   className="w-full h-full object-contain opacity-30 grayscale" 
                   alt="" 
                 />
              </div>

              {/* Back Decor */}
              <div
                className="absolute inset-0 rounded-3xl border border-slate-100 bg-white/50 shadow-sm card-transition"
                style={{ transform: "translateX(40px) translateY(-15px) rotate(12deg) scale(0.9)", opacity: 0.5, zIndex: 10 }}
              ></div>

              {/* Active Card */}
              <div
                key={activeIndex}
                className="animate-card-enter absolute inset-0 z-30 rounded-3xl border-[3px] border-white ring-1 ring-slate-900/5 bg-white shadow-xl overflow-hidden"
              >
                <div className="relative h-full w-full group cursor-grab active:cursor-grabbing p-10 flex flex-col justify-center items-center">
                  
                  <div className="relative w-full h-[60%] flex items-center justify-center">
                    <img
                      src={activeSlide.img}
                      alt={activeSlide.title}
                      className="w-full h-full object-contain transition-transform duration-700 group-hover:scale-105"
                    />
                  </div>

                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900/10 to-transparent pointer-events-none" />

                  <div className="absolute bottom-6 left-6 right-6 text-center">
                      <p className="text-[10px] font-bold uppercase tracking-widest text-[#76ea27] mb-1 bg-white/90 inline-block px-2 py-1 rounded-full shadow-sm">{activeSlide.title}</p>
                  </div>
                </div>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
}