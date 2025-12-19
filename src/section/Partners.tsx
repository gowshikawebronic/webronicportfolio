// "use client";
// import Image from "next/image";

// type Partner = {
//   src: string;
//   alt: string;
//   href: string;
// };

// export default function Partners() {
//   const partners: Partner[] = [
//     {
//       src: "/assets/24sju-se.png",
//       alt: "24SJU",
//       href: "https://24-sju.se/",
//     },
//     {
//       src: "/assets/images/tanluxlogo.png",
//       alt: "Tanlux",
//       href: "https://tanlux.se/",
//     },
//     {
//       src: "/assets/image.png",
//       alt: "StoreTech",
//       href: "https://store-tech.se/",
//     },
//   ];

//   return (
//     <section
//       id="partners"
//       className="relative py-32 bg-gradient-to-b from-[#0b0f1a] via-black to-[#0b0f1a] overflow-hidden animate-fade-in"
//     >
//       <div aria-hidden className="absolute inset-0">
//         <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[900px] h-[500px] bg-[radial-gradient(circle,rgba(99,102,241,0.18),transparent_70%)] blur-3xl animate-fade-in" />
//       </div>

//       <div className="relative max-w-7xl mx-auto px-6">
//         <div className="text-center mb-20 animate-fade-up">
//           <h2 className="text-4xl md:text-5xl font-extrabold text-gray-100 mb-4 tracking-tight">
//              Partners
//           </h2>
//           <p className="text-lg text-gray-400 max-w-2xl mx-auto">
//             Partnering with innovative brands to deliver scalable, reliable,
//             and future-ready digital solutions.
//           </p>
//         </div>

//         <div className="grid grid-cols-1 sm:grid-cols-3 gap-16 items-center justify-items-center">
//           {partners.map((partner, idx) => (
//             <a
//               key={idx}
//               href={partner.href}
//               target="_blank"
//               rel="noopener noreferrer"
//               aria-label={partner.alt}
//               style={{ animationDelay: `${idx * 120}ms` }}
//               className="group relative w-full max-w-xs h-44 rounded-2xl bg-white/5 backdrop-blur-xl border border-white/10 flex items-center justify-center transition-all duration-500 hover:-translate-y-2 hover:border-indigo-400/40 hover:shadow-[0_0_50px_rgba(99,102,241,0.25)] opacity-0 animate-fade-up"

//             >
//               <span
//                 aria-hidden
//                className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-[radial-gradient(circle_at_top,rgba(34,211,238,0.25),transparent_70%)]"

//               />

//               <Image
//                 src={partner.src}
//                 alt={partner.alt}
//                 width={180}
//                 height={80}
//                 priority={idx === 0}
//                className="relative z-10 object-contain grayscale opacity-75 transition-all duration-500 group-hover:grayscale-0 group-hover:opacity-100 group-hover:scale-105"

//               />
//             </a>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// }
