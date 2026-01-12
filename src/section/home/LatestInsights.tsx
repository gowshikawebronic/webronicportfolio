"use client";

import Link from "next/link";
import { ArrowRight, Calendar, ArrowUpRight } from "lucide-react";

// --- BLOG DATA ---
// Update these paths to your actual image files
const INSIGHTS = [
  {
    id: 1,
    title: "How AI is Revolutionizing Manufacturing Quality Control",
    excerpt: "Discover how computer vision and machine learning are transforming quality inspection processes, reducing defects by up to 95%.",
    date: "December 2025",
    category: "AI & Innovation",
    image: "./assets/images/blog1.png", // Placeholder path
    color: "from-[#2776ea] to-[#3a6db0]", // Blue Gradient for fallback/overlay
    link: "#"
  },
  {
    id: 2,
    title: "The Complete Guide to Cloud Migration for Enterprises",
    excerpt: "Step-by-step framework for successful cloud transformation, from assessment to optimization and security compliance.",
    date: "November 2025",
    category: "Cloud Excellence",
    image: "./assets/images/blog2.png", // Placeholder path
    color: "from-[#76ea27] to-[#4a9f30]", // Green Gradient for fallback/overlay
    link: "#"
  },
  {
    id: 3,
    title: "Industry 4.0: Implementing IoT for Predictive Maintenance",
    excerpt: "Real-world case studies showing how IoT sensors and AI analytics prevent equipment failures and optimize production workflows.",
    date: "November 2025",
    category: "IoT & Industry 4.0",
    image: "./assets/images/blog3.png", // Placeholder path
    color: "from-slate-700 to-slate-900", // Dark Gradient for fallback/overlay
    link: "#"
  },
];

export default function LatestInsights() {
  return (
    <section className=" py-20 md:py-28 font-sora relative overflow-hidden px-5 lg:px-25">
      
      {/* Background Decor */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none opacity-40">
        <div className="absolute top-[-10%] right-[-5%] w-[600px] h-[600px] bg-[#2776ea]/5 rounded-full blur-[100px]" />
        <div className="absolute bottom-[-10%] left-[-5%] w-[600px] h-[600px] bg-[#76ea27]/5 rounded-full blur-[100px]" />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        
        {/* --- CENTERED HEADER --- */}
        <div className="text-center max-w-4xl mx-auto mb-16 md:mb-24">
          <div className="flex items-center justify-center gap-4 mb-6">
            <span className="text-[11px] font-black uppercase tracking-[0.3em] text-[#2776ea]">
              Latest Insights
            </span>
          </div>
          
          <h2 className="text-3xl md:text-5xl lg:text-6xl font-black text-slate-900 tracking-tighter leading-tight">
            Trends Shaping the <br />
            <span className="bg-gradient-to-r from-[#2776ea] to-[#76ea27] bg-clip-text text-transparent">
              Future of Tech
            </span>
          </h2>
        </div>

        {/* --- BLOG GRID --- */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {INSIGHTS.map((post, index) => (
            <Link 
              href={post.link} 
              key={post.id}
              className="group flex flex-col bg-white rounded-[2.5rem] border border-slate-100 overflow-hidden hover:shadow-2xl hover:shadow-blue-900/10 hover:-translate-y-2 transition-all duration-500 h-full"
            >
              {/* Thumbnail Area (Image with Gradient Overlay) */}
              <div className={`h-56 w-full relative p-8 flex flex-col justify-between overflow-hidden`}>
                
                {/* Image Background */}
                <div className="absolute inset-0 z-0">
                   <img 
                     src={post.image} 
                     alt={post.title} 
                     className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                   />
                   {/* Gradient Overlay for Better Text Contrast */}
                   {/* <div className={`absolute inset-0 bg-gradient-to-br ${post.color} opacity-60 mix-blend-multiply`} /> */}
                </div>

                <div className="relative z-10">
                   <span className="inline-block px-3 py-1.5 rounded-lg bg-white/20 backdrop-blur-md border border-white/30 text-[10px] font-black uppercase tracking-wider text-white">
                     {post.category}
                   </span>
                </div>
              </div>

              {/* Content Area */}
              <div className="p-8 flex flex-col flex-1">
                <div className="flex items-center gap-3 text-xs font-bold text-slate-400 mb-4">
                  <Calendar size={14} className="text-[#2776ea]" />
                  <span>{post.date}</span>
                </div>

                <h3 className="text-xl font-black text-slate-900 mb-4 leading-snug group-hover:text-[#2776ea] transition-colors">
                  {post.title}
                </h3>

                <p className="text-sm text-slate-500 font-medium leading-relaxed mb-8 flex-1">
                  {post.excerpt}
                </p>

                <div className="pt-6 border-t border-slate-50 flex items-center justify-between">
                  <span className="text-xs font-black uppercase tracking-widest text-slate-900">Read More</span>
                  <div className="h-10 w-10 rounded-full bg-slate-50 flex items-center justify-center text-slate-400 group-hover:bg-[#2776ea] group-hover:text-white transition-all duration-300">
                    <ArrowUpRight size={18} className="group-hover:rotate-45 transition-transform" />
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>

        {/* --- CENTERED BOTTOM ACTION --- */}
        <div className="mt-16 text-center">
          <Link 
            href="/insights" 
            className="inline-flex items-center justify-center gap-3 px-8 py-4 rounded-xl bg-[#2776ea] text-white text-xs font-black uppercase tracking-widest hover:bg-[#76ea27] transition-all shadow-lg hover:shadow-blue-500/25 active:scale-95"
          >
            View All Insights <ArrowRight size={16} />
          </Link>
        </div>

      </div>
    </section>
  );
}