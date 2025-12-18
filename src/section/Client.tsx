"use client";

const logos: string[] = [
  "./assets/images/fpanalyzer.png",
  "./assets/images/ekoion.png",
  "./assets/images/bovalls.png",
  "./assets/images/bluewaters.png",
  "./assets/images/snus24.png",
  "./assets/images/iit.png",
  "./assets/images/akashavani.png",
  "./assets/images/annauniv.png",
  "./assets/images/locumap.png",
  "./assets/images/rorstrand.png",
  "./assets/images/hindustan.png",
  "./assets/images/sciotech.png",
  "./assets/images/tamilnadu.png",
  "./assets/images/smartstoring.png",
  "./assets/images/bharathwaj.png",
  "./assets/images/valueflow.png",
  "./assets/images/bluewaters.png",
  "./assets/images/tsf.png",
  "./assets/images/elshaddai.png",
  "./assets/images/24sju.png",
  "./assets/images/sahaya.png",
  "./assets/images/sribalaji.png",
  "./assets/images/atthi.png",
  "./assets/images/cumi.png",
];

export default function Clients() {
  return (
    <section className="mt-20 overflow-hidden mb-20">
      <div className="container mx-auto">
        <h3 className="mb-6 text-center text-3xl font-semibold   uppercase tracking-widest text-black">
          Trusted Clients
        </h3>

        <div className="relative overflow-hidden">
          <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-24 bg-linear-to-r from-white to-transparent" />
          <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-24 bg-linear-to-l from-white to-transparent" />

          <div className="animate-marquee flex w-max items-center gap-14 mt-10 px-4">
            {[...logos, ...logos].map((src, i) => (
              <div
                key={i}
                className="flex h-24 w-40 items-center justify-center"
              >
                <img
                  src={src}
                  alt="Client logo"
                  className="h-20  w-40 object-contain opacity-90 transition-opacity duration-300 hover:opacity-100"
                  loading="lazy"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
