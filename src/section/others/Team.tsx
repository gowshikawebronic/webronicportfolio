// "use client";

// import teamMembers from "@/components/common/TeamData";

// export default function Team() {
//   const marqueeItems = [...teamMembers, ...teamMembers]; 

//   return (
//     <section id="team" className="py-20">
//       <div className="container mx-auto px-6 mt-10">
        
//         <div className="mb-14 text-center">
//           <h3 className="mx-auto mb-4 font-semibold px-5 py-1 text-4xl text-black">
//             Our Team
//           </h3>
//           <h2 className="text-2xl font-semibold md:text-3xl">
//             The People Behind Webronic
//           </h2>
//         </div>

//         <div className="overflow-hidden">
//           <div className="animate-scroll-review-x flex w-max items-center gap-10 py-6">
//             {marqueeItems.map((img, i) => (
//               <TeamImage key={`row1-${i}`} img={img} />
//             ))}
//           </div>
//         </div>

//         <div className="overflow-hidden">
//           <div className="animate-scroll-review-xrev flex w-max items-center gap-10 py-6">
//             {marqueeItems.map((img, i) => (
//               <TeamImage key={`row2-${i}`} img={img} />
//             ))}
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }


// function TeamImage({ img }: { img: string }) {
//   return (
//     <div className="h-60 w-60 shrink-0 overflow-hidden  border border-black/10 shadow-md">
//       <img
//         src={img}
//         alt="Team member"
//         className="h-full w-full object-cover"
//         loading="lazy"
//       />
//     </div>
//   );
// }
