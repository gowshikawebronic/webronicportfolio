"use client";

import { useState } from "react";
import { 
  Briefcase, 
  MapPin, 
  Clock, 
  ArrowRight, 
  Zap, 
  Heart, 
  Coffee, 
  Globe, 
  X,
  CheckCircle2,
  UploadCloud
} from "lucide-react";

type Job = {
  id: string;
  title: string;
  department: string;
  location: string;
  type: string;
};

const openPositions: Job[] = [
  { id: "1", title: "Senior Full-Stack Engineer", department: "Engineering", location: "Chennai / Remote", type: "Full-time" },
  { id: "2", title: "Interface Designer (UI/UX)", department: "Design", location: "Chennai", type: "Full-time" },
  { id: "3", title: "Android Architect", department: "Mobile", location: "Remote", type: "Contract" },
  { id: "4", title: "Technical Project Manager", department: "Operations", location: "Chennai", type: "Full-time" },
];

const perks = [
  { icon: Globe, title: "Remote First", desc: "Work from anywhere in the world with flexible hours." },
  { icon: Zap, title: "Latest Tech", desc: "Access to high-end hardware and the latest software stacks." },
  { icon: Heart, title: "Health First", desc: "Comprehensive health insurance and mental wellness days." },
  { icon: Coffee, title: "Great Culture", desc: "Weekly team retreats and a zero-ego engineering environment." },
];


const ApplyModal = ({ job, onClose }: { job: Job | null; onClose: () => void }) => {
  if (!job) return null;
  return (
    <div  className="fixed inset-0 z-[100] flex items-center justify-center bg-slate-900/60 backdrop-blur-md p-4" onClick={onClose}>
      <div className="animate-modal-entry w-full max-w-xl bg-white rounded-[32px] overflow-hidden shadow-2xl" onClick={e => e.stopPropagation()}>
        <div className="bg-blue-600 p-8 text-white relative">
          <button onClick={onClose} className="absolute right-6 top-6 hover:rotate-90 transition-transform"><X size={24}/></button>
          <h3 className="text-2xl font-bold">Apply for {job.title}</h3>
          <p className="text-blue-100 mt-1">{job.department} • {job.location}</p>
        </div>
        <form className="p-8 space-y-5" onSubmit={(e) => { e.preventDefault(); alert("Application Submitted!"); onClose(); }}>
          <div className="grid grid-cols-2 gap-4">
            <input type="text" placeholder="First Name" className="w-full p-3 rounded-xl border border-slate-200 outline-none focus:ring-2 focus:ring-blue-500" required />
            <input type="text" placeholder="Last Name" className="w-full p-3 rounded-xl border border-slate-200 outline-none focus:ring-2 focus:ring-blue-500" required />
          </div>
          <input type="email" placeholder="Email Address" className="w-full p-3 rounded-xl border border-slate-200 outline-none focus:ring-2 focus:ring-blue-500" required />
          <div className="border-2 border-dashed border-slate-200 rounded-2xl p-8 text-center hover:border-blue-400 transition-colors cursor-pointer group">
            <UploadCloud className="mx-auto mb-2 text-slate-400 group-hover:text-blue-500" size={32} />
            <p className="text-sm font-medium text-slate-500">Upload your Resume (PDF)</p>
          </div>
          <button className="w-full bg-blue-600 text-white font-bold py-4 rounded-2xl shadow-lg shadow-blue-200 hover:bg-blue-700 transition-all">Submit Application</button>
        </form>
      </div>
    </div>
  );
};

export default function CareerPage() {
  const [selectedJob, setSelectedJob] = useState<Job | null>(null);

  return (
    <main id="career" className="bg-white">
      <section  className="relative pt-5 pb-5 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(59,130,246,0.08),transparent_70%)]" />
        <div className="container mx-auto px-6 text-center relative z-10">
          <div className="animate-card-entry inline-flex items-center gap-2 bg-blue-50 px-4 py-2 rounded-full text-blue-600 font-bold text-xs uppercase tracking-widest mb-8">
            <div className="h-2 w-2 bg-blue-600 rounded-full animate-pulse" />
            We're Hiring
          </div>
          <h1 className="animate-card-entry [animation-delay:150ms] text-5xl md:text-7xl font-black text-slate-900 tracking-tight leading-tight mb-6">
            Build the future of <br />
            <span className="bg-gradient-to-r from-blue-600 to-indigo-500 bg-clip-text text-transparent">Digital Innovation.</span>
          </h1>
          <p className="animate-card-entry [animation-delay:300ms] text-lg text-slate-500 max-w-2xl mx-auto mb-10">
            Join Webronic's world-class engineering team. We solve complex problems 
            at scale and build products that millions of users love.
          </p>
          <div className="animate-card-entry [animation-delay:450ms]">
            <a href="#jobs" className="bg-slate-900 text-white px-10 py-4 rounded-2xl font-bold hover:bg-blue-600 transition-all shadow-xl hover:-translate-y-1 inline-block">
              View Openings
            </a>
          </div>
        </div>
      </section>

      <section className="py-5 px-10 bg-slate-50/50">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-4 gap-8">
            {perks.map((perk, i) => (
              <div key={i} className="animate-card-entry bg-white p-8 rounded-[32px] border border-slate-100 shadow-sm hover:shadow-xl transition-all duration-500 hover:-translate-y-2 group" style={{animationDelay: `${(i+4)*100}ms`}}>
                <div className="h-12 w-12 bg-blue-50 text-blue-600 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-blue-600 group-hover:text-white transition-colors">
                  <perk.icon size={24} />
                </div>
                <h3 className="font-bold text-slate-900 mb-2">{perk.title}</h3>
                <p className="text-sm text-slate-500 leading-relaxed">{perk.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="jobs" className="py-7">
        <div className="container mx-auto px-6 max-w-5xl">
          <div className="mb-16">
            <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 mb-4">Open Positions</h2>
            <div className="h-1.5 w-20 bg-blue-600 rounded-full" />
          </div>

          <div className="space-y-4">
            {openPositions.map((job, i) => (
              <div 
                key={job.id} 
                className="group flex flex-col md:flex-row md:items-center justify-between p-8 rounded-[24px] border border-slate-100 bg-white hover:border-blue-200 hover:bg-blue-50/30 transition-all duration-300 cursor-pointer"
                onClick={() => setSelectedJob(job)}
              >
                <div className="mb-4 md:mb-0">
                  <h3 className="text-xl font-bold text-slate-900 group-hover:text-blue-600 transition-colors mb-2">{job.title}</h3>
                  <div className="flex flex-wrap gap-4 text-sm text-slate-400 font-medium">
                    <span className="flex items-center gap-1.5"><Briefcase size={16}/> {job.department}</span>
                    <span className="flex items-center gap-1.5"><MapPin size={16}/> {job.location}</span>
                    <span className="flex items-center gap-1.5"><Clock size={16}/> {job.type}</span>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                   <div className="h-10 w-10 rounded-full bg-white border border-slate-100 flex items-center justify-center text-slate-400 group-hover:bg-blue-600 group-hover:text-white group-hover:border-blue-600 transition-all transform group-hover:rotate-[-45deg]">
                    <ArrowRight size={20} />
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-20 p-12 bg-slate-900 rounded-[40px] text-center relative overflow-hidden group">
            <div className="absolute inset-0 bg-blue-600 opacity-0 group-hover:opacity-10 transition-opacity" />
            <h3 className="text-2xl md:text-3xl font-bold text-white mb-4 relative z-10">Don't see a role that fits?</h3>
            <p className="text-slate-400 mb-8 max-w-xl mx-auto relative z-10">We're always looking for talented engineers, designers, and thinkers to join our mission. Send us your CV anyway.</p>
            <button className="bg-white text-slate-900 px-8 py-3 rounded-xl font-bold hover:bg-blue-500 hover:text-white transition-all relative z-10">General Application</button>
          </div>
        </div>
      </section>

      <section className="pb-20 text-center">
        <div className="flex justify-center gap-2 mb-4">
          {[1, 2, 3].map(i => <div key={i} className="h-1.5 w-1.5 rounded-full bg-slate-200" />)}
        </div>
        <p className="text-[10px] font-black uppercase tracking-[0.4em] text-slate-300">Webronic Technology Solutions</p>
      </section>

      <ApplyModal job={selectedJob} onClose={() => setSelectedJob(null)} />
    </main>
  );
}