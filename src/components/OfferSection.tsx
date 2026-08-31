import Link from "next/link";

const services = [
  {
    title: "Third Party Inspection",
    href: "/third-party-inspection",
    img: "https://standardarabia.com/assets/img/home/services/third-party-inspection.webp",
    desc: "Comprehensive third-party verification",
  },
  {
    title: "Lifting Equipment Inspection",
    href: "/lifting-equipment-inspection",
    img: "https://standardarabia.com/assets/img/home/services/lifting-equipment-inspection.webp",
    desc: "Certified lifting gear inspection",
  },
  {
    title: "Safety Training Services",
    href: "/safety-training",
    img: "https://standardarabia.com/assets/img/home/services/safety-training.webp",
    desc: "International safety programs",
  },
  {
    title: "Operator Training & Assessment",
    href: "/operator-training",
    img: "https://standardarabia.com/assets/img/home/services/Operator-Certification-Program.webp",
    desc: "Competency-based operator certification",
  },
  {
    title: "Advanced & Conventional NDT",
    href: "/advanced-conventional",
    img: "https://standardarabia.com/assets/img/home/services/advanced-conventional-ndt.webp",
    desc: "State-of-the-art testing solutions",
  },
  {
    title: "Marine Inspection Services",
    href: "/marine-testing",
    img: "https://standardarabia.com/assets/img/home/services/marine-inspection-services.webp",
    desc: "Marine survey & cargo inspection",
  },
  {
    title: "Calibration & Repair Services",
    href: "/calibration",
    img: "https://standardarabia.com/assets/img/home/services/calibration.webp",
    desc: "Precision calibration solutions",
  },
  {
    title: "Material Testing Laboratory",
    href: "/material-testing",
    img: "https://standardarabia.com/assets/img/home/services/material-testing-laboratory.webp",
    desc: "Accredited material analysis",
  },
];

export default function OfferSection() {
  return (
    <section className="relative bg-white py-16 sm:py-20 lg:py-24">
      <div className="mx-auto max-w-[1400px] px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mx-auto max-w-2xl text-center">
          <div className="inline-flex items-center gap-2 rounded-full border border-[#0c598f]/10 bg-[#f0f7ff] px-4 py-1.5">
            <span className="h-2 w-2 rounded-full bg-[#0c598f] animate-pulse" />
            <span className="text-xs font-semibold uppercase tracking-widest text-[#0c598f]">What We Offer</span>
          </div>
          <h2 className="mt-4 text-3xl font-bold tracking-tight text-[#1F242C] sm:text-4xl">
            We offer quality service
            <br />
            <span className="text-[#0c598f]">for our clients</span>
          </h2>
          <div className="mx-auto mt-6 h-1 w-12 rounded-full bg-[#0c598f]" />
        </div>

        {/* Grid */}
        <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4 lg:gap-5">
          {services.map((s) => (
            <Link
              key={s.title}
              href={s.href}
              className="group relative flex flex-col overflow-hidden rounded-[20px] border border-gray-100 bg-white shadow-sm hover:shadow-xl hover:border-[#0c598f]/10 hover:-translate-y-1 transition-all duration-300"
            >
              <div className="relative aspect-[4/3] overflow-hidden bg-gray-50">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={s.img}
                  alt={s.title}
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-black/0 to-transparent opacity-60 group-hover:opacity-70 transition-opacity" />
                <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between">
                  <span className="rounded-full bg-white/95 px-3 py-1 text-xs font-semibold text-[#0c598f] shadow-sm backdrop-blur">
                    Explore →
                  </span>
                  <span className="flex h-8 w-8 items-center justify-center rounded-full bg-[#0c598f] text-white shadow-lg group-hover:bg-[#09406a] transition-colors">
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M7 17L17 7M17 7H7m10 0v10" />
                    </svg>
                  </span>
                </div>
              </div>
              <div className="p-5">
                <h3 className="text-[15px] font-bold leading-tight text-[#1F242C] group-hover:text-[#0c598f] transition-colors line-clamp-2">
                  {s.title}
                </h3>
                <p className="mt-1.5 text-xs leading-relaxed text-[#565969] line-clamp-2">{s.desc}</p>
              </div>
            </Link>
          ))}
        </div>

        <div className="mt-10 flex justify-center">
          <Link
            href="/services"
            className="inline-flex items-center gap-2 rounded-full bg-[#0c598f] px-8 py-3.5 text-sm font-semibold text-white shadow-lg shadow-[#0c598f]/20 hover:bg-[#09406a] hover:shadow-xl transition-all"
          >
            View All Services
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M5 12h14M12 5l7 7-7 7" />
            </svg>
          </Link>
        </div>
      </div>

      {/* decorative shape */}
      <div className="pointer-events-none absolute right-0 top-20 hidden opacity-40 lg:block">
        <img src="https://standardarabia.com/assets/img/offer/offer-1-shape.webp" alt="" className="h-40 w-auto" />
      </div>
    </section>
  );
}
