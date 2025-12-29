"use client";

import { useParams, useRouter } from "next/navigation";
import { useState } from "react";
import { 
  ArrowLeft, 
  MapPin, 
  Briefcase, 
  Clock, 
  CheckCircle2, 
  UploadCloud, 
  Send, 
  Loader2 
} from "lucide-react";
import { openPositions } from "../data";

export default function JobDetailsPage() {
  const params = useParams();
  const router = useRouter();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  // Find the specific job based on the ID in the URL
  const job = openPositions.find((p) => p.id === params.id);

  if (!job) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center font-sora">
        <h2 className="text-2xl font-black text-slate-900 mb-4">Position Not Found</h2>
        <button onClick={() => router.push("/career")} className="text-[#4888e8] font-bold underline">
          Return to Career Page
        </button>
      </div>
    );
  }

  const handleApply = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    // Simulate API logic
    await new Promise((resolve) => setTimeout(resolve, 2000));
    setIsSubmitting(false);
    setSubmitted(true);
  };

  return (
    <main className="bg-white min-h-screen pt-32 pb-20 font-sora">
      <div className="container mx-auto px-6 max-w-6xl">
        
        {/* Navigation Back */}
        <button 
          onClick={() => router.back()} 
          className="flex items-center gap-2 text-slate-400 hover:text-[#4888e8] font-bold text-sm mb-10 transition-colors group"
        >
          <ArrowLeft size={18} className="group-hover:-translate-x-1 transition-transform" /> 
          Back to Listings
        </button>

        <div className="grid lg:grid-cols-[1fr_400px] gap-16">
          
          {/* LEFT: JOB DESCRIPTION */}
          <div className="animate-card-entry">
            <h1 className="text-4xl md:text-6xl font-black text-slate-900 mb-6 tracking-tight">
              {job.title}
            </h1>
            
            <div className="flex flex-wrap gap-4 mb-12">
              <span className="px-5 py-2 rounded-xl bg-blue-50 text-[#4888e8] font-black text-[10px] uppercase tracking-widest border border-blue-100 flex items-center gap-2">
                <Briefcase size={14} /> {job.department}
              </span>
              <span className="px-5 py-2 rounded-xl bg-green-50 text-[#09b125] font-black text-[10px] uppercase tracking-widest border border-green-100 flex items-center gap-2">
                <MapPin size={14} /> {job.location}
              </span>
              <span className="px-5 py-2 rounded-xl bg-slate-50 text-slate-500 font-black text-[10px] uppercase tracking-widest border border-slate-100 flex items-center gap-2">
                <Clock size={14} /> {job.type}
              </span>
            </div>

            <section className="space-y-12">
              <div>
                <h3 className="text-2xl font-black text-slate-900 mb-4 tracking-tight">Overview</h3>
                <p className="text-slate-500 text-lg leading-relaxed font-medium">
                  {job.description || `Join Webronic as a ${job.title}. We are seeking a high-performance individual to help us architect the next generation of digital infrastructure and automation tools.`}
                </p>
              </div>
              
              <div>
                <h3 className="text-2xl font-black text-slate-900 mb-6 tracking-tight">Key Responsibilities</h3>
                <ul className="space-y-4">
                  {(job.responsibilities.length > 0 ? job.responsibilities : [
                    "Develop and maintain scalable technical solutions",
                    "Collaborate with cross-functional engineering teams",
                    "Ensure high code quality and architectural integrity",
                    "Participate in agile sprints and technical roadmapping"
                  ]).map((item, i) => (
                    <li key={i} className="flex items-start gap-4 font-bold text-slate-600">
                      <CheckCircle2 size={22} className="text-[#09b125] shrink-0 mt-0.5" strokeWidth={3} />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </section>
          </div>

          {/* RIGHT: STICKY APPLICATION FORM */}
          <aside className="relative">
            <div className="sticky top-32 bg-slate-900 p-8 md:p-10 rounded-[3rem] shadow-2xl shadow-[#4888e8]/20 border border-white/5">
              {!submitted ? (
                <>
                  <h4 className="text-2xl font-black text-white mb-2 tracking-tight">Apply for this Role</h4>
                  <p className="text-slate-400 text-sm mb-8 font-medium">Submit your details to start the journey.</p>
                  
                  <form className="space-y-4" onSubmit={handleApply}>
                    <div className="space-y-1.5">
                      <label className="text-[10px] font-black uppercase text-slate-500 tracking-widest ml-1">Full Name</label>
                      <input type="text" placeholder="John Doe" className="w-full p-4 rounded-2xl bg-white/5 border border-white/10 text-white placeholder:text-slate-700 focus:ring-2 focus:ring-[#4888e8] outline-none transition font-medium" required />
                    </div>

                    <div className="space-y-1.5">
                      <label className="text-[10px] font-black uppercase text-slate-500 tracking-widest ml-1">Email Address</label>
                      <input type="email" placeholder="john@webronic.com" className="w-full p-4 rounded-2xl bg-white/5 border border-white/10 text-white placeholder:text-slate-700 focus:ring-2 focus:ring-[#4888e8] outline-none transition font-medium" required />
                    </div>
                    
                    <div className="border-2 border-dashed border-white/10 rounded-2xl p-8 text-center hover:border-[#4888e8]/50 transition-colors cursor-pointer bg-white/5 group">
                      <UploadCloud className="mx-auto mb-3 text-slate-600 group-hover:text-[#4888e8] transition-colors" size={32} />
                      <p className="text-[10px] font-black uppercase tracking-widest text-slate-500">Upload CV / Resume (PDF)</p>
                    </div>

                    <button 
                      disabled={isSubmitting}
                      type="submit"
                      className="w-full bg-[#4888e8] text-white font-black uppercase tracking-[0.2em] text-[10px] py-5 rounded-2xl hover:bg-blue-600 transition-all shadow-xl flex items-center justify-center gap-3 active:scale-95 disabled:opacity-70"
                    >
                      {isSubmitting ? (
                        <><Loader2 className="animate-spin" size={18} /> Processing...</>
                      ) : (
                        <><Send size={16} /> Submit Application</>
                      )}
                    </button>
                  </form>
                </>
              ) : (
                <div className="text-center py-10 animate-card-entry">
                  <div className="h-20 w-20 bg-[#09b125]/20 text-[#09b125] rounded-full flex items-center justify-center mx-auto mb-6">
                    <CheckCircle2 size={40} />
                  </div>
                  <h4 className="text-2xl font-black text-white mb-4">Success!</h4>
                  <p className="text-slate-400 font-medium mb-8">Your application has been sent. Our team will contact you shortly.</p>
                  <button onClick={() => setSubmitted(false)} className="text-[#4888e8] font-black text-xs uppercase tracking-widest hover:underline">
                    Send another application
                  </button>
                </div>
              )}
            </div>
          </aside>
        </div>
      </div>
    </main>
  );
}