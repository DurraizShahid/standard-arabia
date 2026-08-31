import Link from "next/link";

export default function CounterSection() {
  return (
    <section className="tp-counter-area relative pt-[60px] pb-[60px] lg:pt-[120px] lg:pb-[120px] bg-white overflow-hidden">
      <div className="tp-counter-shape pointer-events-none">
        <img src="https://standardarabia.com/assets/img/bg/counter-bg-left.webp" alt="" className="shape-1 absolute left-0 top-0 h-full w-auto object-cover opacity-100 hidden lg:block" />
        <img src="https://standardarabia.com/assets/img/counter/counter-crain.webp" alt="" className="shape-2 absolute right-0 bottom-0 h-[80%] w-auto object-contain opacity-90 hidden lg:block" />
      </div>

      <div className="container mx-auto max-w-[1320px] px-4 sm:px-6 lg:px-8 relative">
        <div className="row flex flex-wrap -mx-3">
          <div className="w-full lg:w-1/2 px-3 mb-10 lg:mb-0">
            <div className="tp-counter-title-wrapper mb-10">
              <div className="tp-counter-title-wrap mb-10">
                <span className="tp-section-title-pre text-sm font-semibold tracking-widest text-[#0c598f] uppercase">Trustworthy & reliable</span>
                <h3 className="tp-section-title text-[32px] lg:text-[48px] font-bold leading-tight text-[#525353] mt-2" style={{ fontFamily: "var(--font-jakarta)" }}>
                  Counting on Excellence, Everywhere We Serve
                </h3>
              </div>
              <p className="mb-[30px] lg:mb-[45px] text-[15px] leading-7 text-[#565969]">Trusted Across Saudi Arabia and Beyond for Inspection, Training, and Certification Services!</p>
              <div className="tp-counter-btn-wrapper flex flex-wrap items-center gap-6">
                <Link
                  href="/contact"
                  className="tp-btn inline-flex items-center gap-2 rounded-full bg-[#0c598f] px-7 py-3 text-sm font-semibold text-white hover:bg-[#09406a] transition-colors"
                >
                  Contact Now
                  <svg width="14" height="14" viewBox="0 0 14.2 14.2" fill="none" stroke="currentColor" strokeWidth="1.2">
                    <path d="M13.2 9V1h-8M13.4.8.7 13.5" />
                    <path d="M13.2 9V1h-8M13.4.8.7 13.5" />
                  </svg>
                </Link>
                <div className="tp-counter-call flex items-center gap-3">
                  <div className="tp-counter-call-icon flex h-10 w-10 items-center justify-center rounded-full bg-[#f6f6f6] text-[#0c598f]">
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
                      <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6 19.79 19.79 0 01-3.07-8.67A2 2 0 014.11 2h3a2 2 0 012 1.72 12.84 12.84 0 00.7 2.81 2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45 12.84 12.84 0 002.81.7A2 2 0 0122 16.92z" />
                    </svg>
                  </div>
                  <div className="tp-counter-call-info">
                    <p className="text-xs text-[#565969]">Talk to an expert</p>
                    <a href="tel:+966133670801" className="text-sm font-bold text-[#1F242C] hover:text-[#0c598f]">
                      +966-13-3670801
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="w-full lg:w-1/2 px-3">
            <div className="tp-counter-wrapper">
              <div className="row flex flex-wrap -mx-0 border border-gray-100 rounded-2xl overflow-hidden">
                {[
                  { end: "140", label: "Accredited Services", active: true },
                  { end: "150", label: "Team members", active: false },
                  { end: "100%", label: "Client Satisfaction", active: false },
                  { end: "14", label: "Branches / Site Offices", active: false },
                ].map((item, idx) => (
                  <div key={idx} className="w-1/2 px-0">
                    <div className={`tp-counter-item text-center p-6 lg:p-8 border-gray-100 ${item.active ? "bg-[#f8fafc]" : "bg-white"} ${idx % 2 === 0 ? "border-r" : ""} ${idx < 2 ? "border-b" : ""}`}>
                      <div className="tp-counter-item-icon mb-3 flex justify-center text-[#0c598f]">
                        <span className="flex h-10 w-10 items-center justify-center rounded-full bg-[#eef6ff] text-sm">
                          {idx === 0 ? "◇" : idx === 1 ? "◈" : idx === 2 ? "★" : "⬡"}
                        </span>
                      </div>
                      <div className="tp-counter-item-content">
                        <h4 className="tp-counter-title text-[36px] lg:text-[48px] font-bold leading-none text-[#525353]" style={{ fontFamily: "var(--font-jakarta)" }}>
                          {item.end.includes("%") ? item.end : `${item.end}+`}
                        </h4>
                        <p className="text-sm text-[#565969] mt-2">{item.label}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
