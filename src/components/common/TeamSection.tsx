"use client";

import teamMembers from "@/components//common/TeamData";

export default function Team() {
  return (
    <section id="team" className="py-20">
      <div className="container mx-auto px-6">
        {/* Header */}
        <div className="mb-12 text-center">
          <h3 className="mx-auto w-fit rounded-3xl bg-white px-5 py-1 text-sm text-gray-500 shadow-xl">
            Our Team
          </h3>
          <h2 className="mt-4 text-2xl font-semibold md:text-4xl">
            The People Behind Webronic
          </h2>
        </div>

        
        <div className="overflow-hidden">
          <div className="animate-scroll-review-x flex w-max items-center gap-10 py-6">
            {[...teamMembers, ...teamMembers].map((img, i) => (
              <div
                key={i}
                className="h-40 w-40 shrink-0 overflow-hidden rounded-full border border-black/10 shadow-md"
              >
                <img
                  src={img}
                  alt={`Team member ${i + 1}`}
                  className="h-full w-full object-cover"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
