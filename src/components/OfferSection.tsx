import Link from "next/link";

const services = [
  { title: "Third Party\nInspection", href: "/third-party-inspection", img: "https://standardarabia.com/assets/img/home/services/third-party-inspection.webp", variant: "serv" },
  { title: "Lifting Equipment\nInspection", href: "/lifting-equipment-inspection", img: "https://standardarabia.com/assets/img/home/services/lifting-equipment-inspection.webp", variant: "serv-gray" },
  { title: "Safety Training Services", href: "/safety-training", img: "https://standardarabia.com/assets/img/home/services/safety-training.webp", variant: "serv" },
  { title: "Operator\nTraining & Assessment", href: "/operator-training", img: "https://standardarabia.com/assets/img/home/services/Operator-Certification-Program.webp", variant: "serv-gray" },
  { title: "Advanced & Conventional\nNDT", href: "/advanced-conventional", img: "https://standardarabia.com/assets/img/home/services/advanced-conventional-ndt.webp", variant: "serv" },
  { title: "Marine Inspection Services", href: "/marine-testing", img: "https://standardarabia.com/assets/img/home/services/marine-inspection-services.webp", variant: "serv-gray" },
  { title: "Calibration & Repair\nServices", href: "/calibration", img: "https://standardarabia.com/assets/img/home/services/calibration.webp", variant: "serv" },
  { title: "Material\nTesting Laboratory", href: "/material-testing", img: "https://standardarabia.com/assets/img/home/services/material-testing-laboratory.webp", variant: "serv-gray" },
];

export default function OfferSection() {
  return (
    <section className="tp-team-2-area relative fix z-[1] bg-[#f6f6f6] pt-[80px] pb-[80px] lg:pt-[120px] lg:pb-[120px]">
      <div className="tp-offer-shape pointer-events-none absolute right-0 top-10 hidden lg:block opacity-60">
        <img src="https://standardarabia.com/assets/img/offer/offer-1-shape.webp" alt="" className="h-40 w-auto" />
      </div>

      <div className="container">
        <div className="row flex flex-wrap -mx-3">
          <div className="w-full px-3">
            <div className="tp-offer-title-wrapper mb-[40px] lg:mb-[75px]">
              <span className="tp-section-title-pre-2 text-sm font-semibold tracking-widest text-[#0c598f] uppercase">WHAT WE OFFER</span>
              <h3 className="tp-section-title text-[32px] lg:text-[55px] font-bold leading-[1.2] text-[#0c598f] mt-2" style={{ fontFamily: "var(--font-jakarta)" }}>
                We offer quality service for our clients
              </h3>
            </div>
          </div>
        </div>

        <div className="container">
          <div className="row flex flex-wrap -mx-3">
            {services.map((s) => (
              <div key={s.title} className="w-full sm:w-1/2 lg:w-1/4 px-3">
                <div
                  className={`tp-offer-item relative text-center ${
                    s.variant === "serv" ? "bg-[#0c598f]" : "bg-[#525353]"
                  }`}
                  style={{ padding: "23px", borderRadius: "22px 2px 68px 2px", marginBottom: "75px", boxShadow: "rgba(0, 8, 21, 0.04) 0px 0px 80px 0px" }}
                >
                  <div
                    className="tp-offer-content relative text-center"
                    style={{
                      margin: "-69px 0 20px 0",
                      padding: "32px",
                      borderRadius: "0 30px 0 30px",
                      backgroundColor: s.variant === "serv" ? "#525353" : "#0c598f",
                    }}
                  >
                    <h4
                      className="tp-offer-title text-[21px] leading-[1.6] font-light text-white"
                      style={{ margin: "0 0 8px", fontFamily: "var(--font-jakarta)" }}
                    >
                      <Link href={s.href} className="text-white">
                        {s.title.split("\n").map((line, i) => (
                          <span key={i}>
                            {line}
                            {i < s.title.split("\n").length - 1 && <br />}
                          </span>
                        ))}
                      </Link>
                    </h4>
                  </div>
                  <div className="tp-offer-item-thumb relative overflow-hidden">
                    <Link href={s.href}>
                      {/* eslint-disable-next-line @next/next/no-img-element */}
                      <img
                        src={s.img}
                        alt={s.title.replace("\n", " ")}
                        title={s.title.replace("\n", " ")}
                        width={267}
                        height={267}
                        className="mx-auto"
                        style={{ width: "267px", height: "267px", borderRadius: "50%", objectFit: "cover" }}
                      />
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="row flex flex-wrap -mx-3 mt-9">
            <div className="w-full px-3">
              <div className="ser-btn flex justify-center">
                <Link href="/services" className="tp-btn bg-[#0c598f] text-white hover:bg-[#09406a]">
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
