import Link from "next/link";

export default function Footer() {
  return (
    <footer className="tp-footer-3-area relative pt-[60px] lg:pt-[120px] bg-[#0a1229] text-white overflow-hidden">
      <div className="tp-footer-bg pointer-events-none absolute inset-0">
        <img src="https://standardarabia.com/assets/img/bg/footer-bg-left.webp" alt="" className="absolute left-0 top-0 h-full w-auto object-cover opacity-20" />
        <img src="https://standardarabia.com/assets/img/bg/footer-bg-right.webp" alt="" className="absolute right-0 top-0 h-full w-auto object-cover opacity-20" />
      </div>

      <div className="container mx-auto max-w-[1320px] px-4 sm:px-6 lg:px-8 relative">
        <div className="tp-footer-main border-b border-white/10 pb-10">
          <div className="row flex flex-wrap -mx-3">
            {/* col-1 */}
            <div className="w-full lg:w-1/3 px-3 mb-8 lg:mb-0">
              <div className="tp-footer-widget tp-footer-col-1 mb-8">
                <div className="tp-footer-logo mb-8">
                  <Link href="/">
                    <img src="https://standardarabia.com/assets/img/logo-f.webp" alt="Standard Arabia Inspection Co. Ltd, KSA" className="h-12 w-auto" />
                  </Link>
                </div>
                <div className="tp-footer-widget-content">
                  <p className="text-sm leading-relaxed text-white/70 max-w-sm">Standard Arabia is TVTC, Saudi Arabia Approved Training Center accredited by International Agency.</p>
                  <div className="tp-footer-social flex gap-2 mt-6">
                    {[
                      { href: "https://www.facebook.com/standardarabiainspection/", icon: "f", label: "Facebook" },
                      { href: "https://www.instagram.com/standard_arabia/", icon: "◎", label: "Instagram" },
                      { href: "https://www.linkedin.com/company/standard-arabia-inspection-co.-ltd.", icon: "in", label: "LinkedIn" },
                      { href: "#", icon: "▶", label: "YouTube" },
                      { href: "#", icon: "𝕏", label: "Twitter" },
                    ].map((s) => (
                      <a
                        key={s.label}
                        href={s.href}
                        aria-label={s.label}
                        className="flex h-9 w-9 items-center justify-center rounded-full bg-white/10 text-white hover:bg-[#0c598f] transition-colors text-xs font-bold"
                      >
                        {s.icon}
                      </a>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* col-2 */}
            <div className="w-full sm:w-1/2 lg:w-1/3 px-3 mb-8 lg:mb-0">
              <div className="tp-footer-widget tp-footer-col-2 mb-8 lg:pl-8">
                <h3 className="tp-footer-widget-title text-sm font-bold uppercase tracking-widest text-white mb-6">Training Programs</h3>
                <div className="tp-footer-widget-content">
                  <ul className="space-y-2.5">
                    {[
                      "IPAF Approved Training Program",
                      "IADC Approved Training Program",
                      "OSHA Approved Training Program",
                      "NEBOSH Approved Training Program",
                      "TVTC Approved Training Program",
                      "Rigging & Lifting Training Program",
                      "First Aid & BLS Training Program",
                      "IOSH Approved Training Program",
                      "PASMA Approved Training Program",
                    ].map((item) => (
                      <li key={item} className="text-sm text-white/70 hover:text-white transition-colors flex items-center gap-2">
                        <span className="h-1 w-1 rounded-full bg-white/30 shrink-0" />
                        <a href="#" className="hover:text-white">
                          {item}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>

            {/* col-4 */}
            <div className="w-full sm:w-1/2 lg:w-1/3 px-3">
              <div className="tp-footer-widget tp-footer-col-4 mb-8 lg:pl-8">
                <h3 className="tp-footer-widget-title text-sm font-bold uppercase tracking-widest text-white mb-6">Contact Us</h3>
                <div className="tp-footer-widget-contact space-y-4 text-sm">
                  <p className="flex items-start gap-3 text-white/80">
                    <span className="mt-0.5 flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-white/10 text-white text-xs">☎</span>
                    <span>
                      + 966-13-3670801
                      <br />
                      + 966-53-9461485
                    </span>
                  </p>
                  <p className="flex items-start gap-3 text-white/80">
                    <span className="mt-0.5 flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-white/10 text-white text-xs">✉</span>
                    <span>
                      admin@standardarabia.com
                      <br />
                      info@standardarabia.com
                    </span>
                  </p>
                  <p className="flex items-start gap-3 text-white/70 leading-relaxed">
                    <span className="mt-0.5 flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-white/10 text-white text-xs">⌖</span>
                    <span>P.O. Box 10353, Al Jubail 31961, Support Industrial Zone, Jubail, Kingdom of Saudi Arabia.</span>
                  </p>
                  <p className="flex items-start gap-3 text-white/70 leading-relaxed">
                    <span className="mt-0.5 flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-white/10 text-white text-xs">⌖</span>
                    <span>Standard Arabia Training Center Makkha Street, Al Dana Dist, Jubail Balad, Eastern Provience, 35514, Saudi Arabia</span>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="tp-footer-copyright py-6">
          <div className="row flex flex-wrap -mx-3 items-center">
            <div className="w-full md:w-1/2 px-3 text-center md:text-left mb-2 md:mb-0">
              <p className="text-xs text-white/60">Standard Arabia Inspection Co © 2024 / All Rights Reserved</p>
            </div>
            <div className="w-full md:w-1/2 px-3 text-center md:text-right">
              <p className="text-xs text-white/60">
                Designed By{" "}
                <a href="https://bmsofttech.com/" className="font-semibold text-white hover:text-[#7ec8ff]">
                  BM Softtech
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
