import Link from "next/link";

const services = [
  { title: "Third Party Inspection", href: "/third-party-inspection", img: "https://standardarabia.com/assets/img/home/services/third-party-inspection.webp", variant: "serv" },
  { title: "Lifting Equipment Inspection", href: "/lifting-equipment-inspection", img: "https://standardarabia.com/assets/img/home/services/lifting-equipment-inspection.webp", variant: "serv-gray" },
  { title: "Safety Training Services", href: "/safety-training", img: "https://standardarabia.com/assets/img/home/services/safety-training.webp", variant: "serv" },
  { title: "Operator Training & Assessment", href: "/operator-training", img: "https://standardarabia.com/assets/img/home/services/Operator-Certification-Program.webp", variant: "serv-gray" },
  { title: "Advanced & Conventional NDT", href: "/advanced-conventional", img: "https://standardarabia.com/assets/img/home/services/advanced-conventional-ndt.webp", variant: "serv" },
  { title: "Marine Inspection Services", href: "/marine-testing", img: "https://standardarabia.com/assets/img/home/services/marine-inspection-services.webp", variant: "serv-gray" },
  { title: "Calibration & Repair Services", href: "/calibration", img: "https://standardarabia.com/assets/img/home/services/calibration.webp", variant: "serv" },
  { title: "Material Testing Laboratory", href: "/material-testing", img: "https://standardarabia.com/assets/img/home/services/material-testing-laboratory.webp", variant: "serv-gray" },
];

export default function OfferSection() {
  return (
    <section className="tp-team-2-area relative fix z-[1] bg-[#f6f6f6] pt-[80px] pb-[80px] lg:pt-[120px] lg:pb-[120px]">
      <div className="tp-offer-shape pointer-events-none absolute right-0 top-10 hidden lg:block opacity-60">
        <img src="https://standardarabia.com/assets/img/offer/offer-1-shape.webp" alt="" className="h-40 w-auto" />
      </div>

      <div className="container mx-auto max-w-[1320px] px-4 sm:px-6 lg:px-8">
        <div className="row flex flex-wrap -mx-3">
          <div className="w-full lg:w-2/3 px-3">
            <div className="tp-offer-title-wrapper mb-[40px] lg:mb-[75px]">
              <span className="tp-section-title-pre-2 text-sm font-semibold tracking-widest text-[#0c598f] uppercase">WHAT WE OFFER</span>
              <h3 className="tp-section-title text-[32px] lg:text-[55px] font-bold leading-[1.1] text-[#0c598f] mt-2" style={{ fontFamily: "var(--font-jakarta)" }}>
                We offer quality service <br className="hidden lg:block" /> for our clients
              </h3>
            </div>
          </div>
          <div className="w-full lg:w-1/3 px-3 hidden lg:block" />
        </div>

        <div className="container mx-auto px-0">
          <div className="row flex flex-wrap -mx-3">
            {services.map((s) => (
              <div key={s.title} className="w-full sm:w-1/2 lg:w-1/4 px-3 mb-6">
                <div
                  className={`tp-offer-item group relative overflow-hidden p-0 transition-all duration-300 ${
                    s.variant === "serv" ? "bg-[#0c598f]" : "bg-[#525353]"
                  } hover:bg-white border border-transparent hover:border-gray-100`}
                  style={{ borderRadius: "22px 2px 68px 2px" }}
                >
                  <div className="tp-offer-content px-6 pt-6 pb-4">
                    <div className="tp-offer-button flex items-center justify-between">
                      <h4 className="tp-offer-title text-[15px] font-bold leading-[1.5] uppercase text-white group-hover:text-[#0c598f] transition-colors">
                        <Link href={s.href} className="hover:underline decoration-white/30 group-hover:decoration-[#0c598f]/30">
                          {s.title}
                        </Link>
                      </h4>
                    </div>
                  </div>
                  <div className="tp-offer-item-thumb relative overflow-hidden mx-3 mb-4 flex justify-center">
                    <Link href={s.href} className="block w-full">
                      {/* eslint-disable-next-line @next/next/no-img-element */}
                      <img
                        src={s.img}
                        alt={s.title}
                        className="w-full aspect-square max-h-[200px] object-cover transition-transform duration-700 group-hover:scale-110 mx-auto"
                        style={{ borderRadius: "50%" }}
                      />
                    </Link>
                  </div>
                  {/* hover content overlay like original .serv .tp-offer-content bg switch */}
                </div>
              </div>
            ))}
          </div>

          <div className="row flex flex-wrap -mx-3 mt-6">
            <div className="w-full px-3">
              <div className="ser-btn flex justify-center">
                <Link
                  href="/services"
                  className="tp-btn inline-flex items-center gap-2 rounded-full bg-[#0c598f] px-8 py-3 text-sm font-semibold text-white hover:bg-[#09406a] transition-colors"
                >
                  View All
                  <svg width="14" height="14" viewBox="0 0 14.2 14.2" fill="none" stroke="currentColor" strokeWidth="1.2">
                    <path d="M13.2 9V1h-8M13.4.8.7 13.5" />
                    <path d="M13.2 9V1h-8M13.4.8.7 13.5" />
                  </svg>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
