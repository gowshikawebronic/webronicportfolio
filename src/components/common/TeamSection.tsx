"use client";

import teamMembers from "@/components/common/TeamData";

export default function Team() {
  return (
    <section id="team" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="mb-12 text-center">
          <h3 className="mx-auto w-fit rounded-3xl bg-white px-5 py-1 text-sm text-gray-500 shadow-xl border border-slate-100">
            Our Team
          </h3>
          <h2 className="mt-4 text-2xl font-semibold md:text-4xl text-slate-900">
            The People Behind Webronic
          </h2>
        </div>

        <div className="overflow-hidden relative">
          <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-20 bg-linear-to-r from-white to-transparent" />
          <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-20 bg-linear-to-l from-white to-transparent" />

          <div className="animate-scroll-review-x flex w-max items-center gap-10 py-6">
            {[...teamMembers, ...teamMembers].map((member, i) => (
              <div
                key={`${member.name}-${i}`}
                className="group flex flex-col items-center gap-4"
              >
                <div className="h-40 w-40 shrink-0 overflow-hidden rounded-full border border-slate-200 shadow-md transition-transform duration-500 group-hover:scale-110 group-hover:border-blue-500">
                  <img
                    src={member.image} 
                    alt={member.name}
                    className="h-full w-full object-cover"
                    loading="lazy"
                  />
                </div>
                <div className="text-center">
                   <p className="text-sm font-bold text-slate-900">{member.name}</p>
                   <p className="text-[10px] uppercase tracking-widest text-blue-600 font-medium">{member.role}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}