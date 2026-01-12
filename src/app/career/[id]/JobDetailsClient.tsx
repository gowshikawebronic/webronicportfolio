"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";
import { 
  ArrowLeft, MapPin, Briefcase, Clock, 
   Loader2 
} from "lucide-react";

import { openPositions } from "../data";

export default function JobDetailsClient({ id }: { id: string }) {
  const router = useRouter();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const job = openPositions.find((p) => p.id === id);

  if (!job) return <div>Position not found</div>;

  const handleApply = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    await new Promise((resolve) => setTimeout(resolve, 2000));
    setIsSubmitting(false);
    setSubmitted(true);
  };

  return (
    <main className="bg-white min-h-screen pt-32 pb-20 font-sora">
      <div className="container mx-auto px-6 max-w-6xl">
        <button onClick={() => router.back()} className="flex items-center gap-2 text-slate-400 hover:text-[#2776ea] font-bold text-sm mb-10 group">
          <ArrowLeft size={18} /> Back to Listings
        </button>

        <div className="grid lg:grid-cols-[1fr_400px] gap-16">
          <div className="animate-card-entry">
            <h1 className="text-4xl md:text-6xl font-black text-slate-900 mb-6 tracking-tight">{job.title}</h1>
            <div className="flex flex-wrap gap-4 mb-12">
               <span className="px-5 py-2 rounded-xl bg-blue-50 text-[#2776ea] font-black text-[10px] uppercase tracking-widest border border-blue-100 flex items-center gap-2">
                <Briefcase size={14} /> {job.department}
              </span>
              <span className="px-5 py-2 rounded-xl bg-green-50 text-[#76ea27] font-black text-[10px] uppercase tracking-widest border border-green-100 flex items-center gap-2">
                <MapPin size={14} /> {job.location}
              </span>
              <span className="px-5 py-2 rounded-xl bg-slate-50 text-slate-500 font-black text-[10px] uppercase tracking-widest border border-slate-100 flex items-center gap-2">
                <Clock size={14} /> {job.type}
              </span>
            </div>
          </div>

          <aside className="relative">
            <div className="sticky top-32 bg-slate-900 p-8 md:p-10 rounded-[3rem] shadow-2xl border border-white/5">
              {!submitted ? (
                <form className="space-y-4" onSubmit={handleApply}>
                  <button type="submit" disabled={isSubmitting} className="w-full bg-[#2776ea] text-white font-black uppercase py-5 rounded-2xl">
                    {isSubmitting ? <Loader2 className="animate-spin" /> : "Submit Application"}
                  </button>
                </form>
              ) : (
                <div className="text-center py-10 animate-card-entry text-white">Success!</div>
              )}
            </div>
          </aside>
        </div>
      </div>
    </main>
  );
}