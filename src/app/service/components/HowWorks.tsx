"use client";

import type { ReactNode, FormEvent } from "react";
import { useState } from "react";
import { ChevronDown, X, Send, User, Mail, Phone, MessageSquare } from "lucide-react";
import { services, type Service } from "@/app/service/components/data";


const EnquiryModal = ({
  service,
  onClose,
}: {
  service: Service | null;
  onClose: () => void;
}) => {
  if (!service) return null;

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    alert(`Enquiry sent for ${service.title}!`);
    onClose();
  };

  return (
    <div 
      className="fixed inset-0 z-[100] flex items-center justify-center bg-black/60 backdrop-blur-sm p-4 transition-opacity duration-300"
      onClick={onClose}
    >
      <div 
        className="relative w-full max-w-lg overflow-hidden rounded-2xl bg-white shadow-2xl ring-1 ring-gray-900/5 animate-modal-pop"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="bg-blue-600 p-6 text-white">
          <div className="flex items-center justify-between">
            <h3 className="text-xl font-bold">Enquire Now</h3>
            <button onClick={onClose} className="rounded-full bg-white/20 p-1 hover:bg-white/40 transition">
              <X size={20} />
            </button>
          </div>
          <p className="mt-2 text-blue-100 text-sm">
            Tell us about your requirements for <span className="font-bold text-white">{service.title}</span>.
          </p>
        </div>

        <form onSubmit={handleSubmit} className="p-6 space-y-4">
          <div className="space-y-1">
            <label className="text-sm font-medium text-gray-700">Full Name</label>
            <div className="relative">
              <User className="absolute left-3 top-3 h-5 w-5 text-gray-400" />
              <input type="text" placeholder="John Doe" className="w-full rounded-lg border border-gray-200 pl-10 p-2.5 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 outline-none transition" required />
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="space-y-1">
              <label className="text-sm font-medium text-gray-700">Email</label>
              <div className="relative">
                <Mail className="absolute left-3 top-3 h-5 w-5 text-gray-400" />
                <input type="email" placeholder="john@example.com" className="w-full rounded-lg border border-gray-200 pl-10 p-2.5 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 outline-none transition" required />
              </div>
            </div>
            <div className="space-y-1">
              <label className="text-sm font-medium text-gray-700">Phone</label>
              <div className="relative">
                <Phone className="absolute left-3 top-3 h-5 w-5 text-gray-400" />
                <input type="tel" placeholder="+1 234 567 890" className="w-full rounded-lg border border-gray-200 pl-10 p-2.5 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 outline-none transition" required />
              </div>
            </div>
          </div>

          <div className="space-y-1">
            <label className="text-sm font-medium text-gray-700">Message</label>
            <div className="relative">
              <MessageSquare className="absolute left-3 top-3 h-5 w-5 text-gray-400" />
              <textarea rows={3} placeholder="Describe your project needs..." className="w-full rounded-lg border border-gray-200 pl-10 p-2.5 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 outline-none transition resize-none" required />
            </div>
          </div>

          <button type="submit" className="mt-2 flex w-full items-center justify-center gap-2 rounded-xl bg-blue-600 py-3 font-semibold text-white shadow-lg shadow-blue-600/30 hover:bg-blue-700 transition-all active:scale-[0.98]">
            <Send size={18} />
            Submit Request
          </button>
        </form>
      </div>
    </div>
  );
};

const ServiceCard = ({ 
  service, 
  isOpen, 
  onToggle, 
  onCtaClick,
  index 
}: { 
  service: Service; 
  isOpen: boolean; 
  onToggle: () => void; 
  onCtaClick: (service: Service) => void;
  index: number;
}) => {
  return (
    <div 
      style={{ animationDelay: `${(index + 1) * 150}ms` }}
      className="animate-on-load group relative overflow-hidden rounded-[2.5rem] border border-blue-100 bg-white/70 backdrop-blur-md p-8 shadow-lg transition-all duration-500 hover:border-blue-300 hover:shadow-2xl hover:shadow-blue-900/10 hover:-translate-y-2 opacity-0"
    >
      <div className="grid gap-10 lg:grid-cols-[1.2fr_0.8fr] items-center">
        <div className="flex flex-col h-full">
          <div className="flex items-start gap-5">
            <div className="flex h-16 w-16 shrink-0 items-center justify-center rounded-2xl bg-blue-50 text-blue-600 shadow-sm ring-1 ring-blue-100 group-hover:bg-blue-600 group-hover:text-white group-hover:rotate-6 transition-all duration-500">
              {service.icon}
            </div>
            <div>
              <h3 className="text-2xl font-bold text-slate-900 group-hover:text-blue-600 transition-colors">{service.title}</h3>
              <p className="mt-1 text-xs font-bold text-blue-600 uppercase tracking-widest bg-blue-50 px-3 py-1 rounded-full">
                {service.tagline}
              </p>
            </div>
          </div>

          <p className="mt-6 text-slate-600 leading-relaxed text-sm md:text-base">
            {service.description}
          </p>

          <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-y-3 gap-x-4">
            {service.points.map((point, idx) => (
              <div key={idx} className="flex items-center gap-2.5 transition-transform duration-300 hover:translate-x-1">
                <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-blue-500" />
                <span className="text-sm font-medium text-slate-600">{point}</span>
              </div>
            ))}
          </div>

          <div className="mt-auto pt-8">
            <button
              onClick={onToggle}
              className="flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-slate-400 hover:text-blue-600 transition-colors"
            >
              Technology Stack
              <ChevronDown className={`h-4 w-4 transition-transform duration-500 ${isOpen ? "rotate-180 text-blue-600" : ""}`} />
            </button>

            <div className={`grid transition-all duration-500 ease-in-out ${isOpen ? "grid-rows-[1fr] mt-6 opacity-100" : "grid-rows-[0fr] mt-0 opacity-0"}`}>
              <div className="overflow-hidden">
                <div className="rounded-2xl bg-slate-50 p-4 border border-slate-100">
                  <div className="flex flex-wrap gap-5">
                    {service.technologies.map((t) => (
                      <img 
                        key={t.name} 
                        src={t.logo} 
                        alt={t.name} 
                        title={t.name}
                        className="h-7 w-auto " 
                      />
                    ))}
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-8">
              <button 
                onClick={() => onCtaClick(service)}
                className="w-full sm:w-auto rounded-xl bg-slate-900 px-8 py-3.5 text-xs font-bold text-white uppercase tracking-[0.15em] shadow-xl transition-all duration-300 hover:bg-blue-600 hover:scale-105 active:scale-95 flex items-center justify-center gap-3"
              >
                {service.cta}
                <Send size={14} className="opacity-70" />
              </button>
            </div>
          </div>
        </div>

        <div className="relative flex items-center justify-center">
          <div className="absolute inset-0 bg-blue-100/50 rounded-full blur-3xl -z-10 animate-pulse" />
          <img
            src={service.image}
            alt={service.title}
            className="w-full max-w-[280px] object-contain animate-float drop-shadow-2xl transition-transform duration-700 group-hover:scale-110"
          />
        </div>
      </div>
    </div>
  );
};

export default function HowWorks() {
  const [openTechId, setOpenTechId] = useState<number | null>(null);
  const [selectedService, setSelectedService] = useState<Service | null>(null);

  return (
    <>
     

      <section className="relative overflow-hidden py-24 sm:py-32 bg-slate-50">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(37,99,235,0.08),transparent_40%)]" />
        <div className="absolute inset-0 bg-[linear-gradient(rgba(37,99,235,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(37,99,235,0.02)_1px,transparent_1px)] bg-[size:60px_60px]" />

        <div className="relative container mx-auto px-6 md:px-12 lg:px-20">
          <div className="mb-20 text-center max-w-3xl mx-auto opacity-0 animate-header">
            <span className="mb-4 block text-xs font-black tracking-[0.3em] text-blue-600 uppercase">Premium Solutions</span>
            <h3 className="mb-6 text-4xl md:text-5xl font-extrabold tracking-tight text-slate-900">
              Our <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">Expertise</span>
            </h3>
            <p className="text-base md:text-lg text-slate-500 leading-relaxed font-medium">
              We engineer scalable, future-proof digital architectures designed to 
              transform and automate your business operations.
            </p>
          </div>

          <div className="grid gap-16">
            {services.map((service, index) => (
              <ServiceCard 
                key={service.id} 
                service={service} 
                index={index}
                isOpen={openTechId === service.id} 
                onToggle={() => setOpenTechId(openTechId === service.id ? null : service.id)}
                onCtaClick={setSelectedService} 
              />
            ))}
          </div>
        </div>
      </section>

      {selectedService && (
        <EnquiryModal 
          service={selectedService} 
          onClose={() => setSelectedService(null)} 
        />
      )}
    </>
  );
}