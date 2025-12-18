"use client";
import Image from "next/image";

type Service = {
  title: string;
  description: string;
  points: string[];
  image: string;
};

export default function Services() {
  const services: Service[] = [
    {
      title: "App Development",
      image: "/assets/images/appdevelopment.png",
      description:
        "We design and build high-performance mobile applications with world-class UI/UX and cross-platform scalability.",
      points: [
        "Native & Hybrid Apps",
        "AI-powered automation",
        "App Store deployment",
        "Custom UI/UX systems",
      ],
    },
    {
      title: "Web Development",
      image: "/assets/images/webdevelopment.png",
      description:
        "Scalable, SEO-driven websites and platforms engineered for performance and growth.",
      points: [
        "WordPress, WooCommerce, Magento",
        "High-performance architecture",
        "SEO-friendly builds",
        "Enterprise-ready security",
      ],
    },
    {
      title: "Domain & Hosting",
      image: "/assets/images/domainhosting.png",
      description:
        "Fast, secure, cloud-native hosting solutions powered by AWS and modern infrastructure.",
      points: [
        "AWS cloud hosting",
        "Domain & SSL management",
        "Scalable server resources",
        "24/7 reliability",
      ],
    },
    {
      title: "Digital Marketing",
      image: "/assets/images/digitalmarketing.png",
      description:
        "Performance-driven marketing strategies that convert traffic into revenue.",
      points: [
        "Google & Meta Ads",
        "PPC campaigns",
        "Custom growth strategies",
        "Conversion optimization",
      ],
    },
    {
      title: "SEO Optimization",
      image: "/assets/images/seo.png",
      description:
        "Data-driven SEO strategies that put your business on top of search results.",
      points: [
        "Keyword research",
        "Technical SEO",
        "Schema optimization",
        "Monthly performance reports",
      ],
    },
    {
      title: "IoT Solutions",
      image: "/assets/images/iot.png",
      description:
        "Smart IoT ecosystems for real-time monitoring, automation, and predictive insights.",
      points: [
        "Real-time device data",
        "Predictive maintenance",
        "Industry 4.0 systems",
        "Scalable IoT platforms",
      ],
    },
  ];

  return (
    <section
      id="service"
      className="relative py-32 bg-[#050816] overflow-hidden"
    >
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(55,198,89,0.12),transparent_60%)]" />

      <div className="relative max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-24">
          <h2 className="text-4xl sm:text-6xl font-extrabold text-white mb-6">
            Our Services
          </h2>
          <p className="text-gray-400 max-w-3xl mx-auto text-lg">
            Intelligent digital solutions crafted to scale, automate, and
            future-proof your business.
          </p>
        </div>

        {/* Service Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12">
          {services.map((service) => (
            <div
              key={service.title}
              className="group relative perspective-distant"
            >
              {/* Card */}
              <div
                className="relative h-full rounded-3xl bg-white/5 border border-white/10 backdrop-blur-xl p-8 transition-all duration-500 ease-out transform group-hover:-translate-y-3 group-hover:rotate-x-6 group-hover:-rotate-y-6 group-hover:shadow-[0_30px_80px_rgba(0,0,0,0.6)]"

              >
                {/* Glow */}
                <div
className="absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-[radial-gradient(circle_at_top,rgba(59,130,246,0.25),transparent_70%)] pointer-events-none"

                />

                {/* Image */}
                <div className="relative mb-6 flex justify-center">
                  <Image
                    src={service.image}
                    alt={service.title}
                    width={220}
                    height={220}
                    className="transition-transform duration-500 group-hover:scale-110"
                  />
                </div>

                {/* Content */}
                <h3 className="text-2xl font-bold text-white mb-4">
                  {service.title}
                </h3>

                <p className="text-gray-400 text-base mb-6 leading-relaxed">
                  {service.description}
                </p>

                <ul className="space-y-2">
                  {service.points.map((point, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <span className="mt-2 w-2 h-2 rounded-full bg-blue-400 shrink-0" />
                      <span className="text-gray-300 text-sm">{point}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
