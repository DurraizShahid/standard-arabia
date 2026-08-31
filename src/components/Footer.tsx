import Link from "next/link";

export default function Footer() {
  return (
    <footer className="relative bg-[#0a1229] text-white">
      {/* bg shapes */}
      <img src="https://standardarabia.com/assets/img/bg/footer-bg-left.webp" alt="" className="absolute left-0 top-0 h-full w-auto object-cover opacity-20 pointer-events-none" />
      <img src="https://standardarabia.com/assets/img/bg/footer-bg-right.webp" alt="" className="absolute right-0 top-0 h-full w-auto object-cover opacity-20 pointer-events-none" />

      <div className="relative mx-auto max-w-[1400px] px-4 sm:px-6 lg:px-8 pt-16 pb-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          {/* Brand */}
          <div className="lg:col-span-4">
            <Link href="/" className="inline-block">
              <img src="https://standardarabia.com/assets/img/logo-f.webp" alt="Standard Arabia Inspection Co. Ltd, KSA" className="h-12 w-auto brightness-0 invert" />
            </Link>
            <p className="mt-4 text-sm leading-relaxed text-white/70 max-w-sm">
              Standard Arabia is TVTC, Saudi Arabia Approved Training Center accredited by International Agency.
            </p>
            <div className="mt-6 flex items-center gap-3">
              {[
                { label: "Facebook", href: "https://www.facebook.com/standardarabiainspection/", icon: "f" },
                { label: "Instagram", href: "https://www.instagram.com/standard_arabia/", icon: "◎" },
                { label: "LinkedIn", href: "https://www.linkedin.com/company/standard-arabia-inspection-co.-ltd.", icon: "in" },
                { label: "YouTube", href: "#", icon: "▶" },
                { label: "Twitter", href: "#", icon: "𝕏" },
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

          {/* Training Programs */}
          <div className="lg:col-span-4">
            <h3 className="text-sm font-bold uppercase tracking-widest text-white">Training Programs</h3>
            <ul className="mt-5 space-y-2.5">
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
                <li key={item}>
                  <a href="#" className="text-sm text-white/70 hover:text-white transition-colors flex items-center gap-2">
                    <span className="h-1 w-1 rounded-full bg-white/30" />
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Us */}
          <div className="lg:col-span-4">
            <h3 className="text-sm font-bold uppercase tracking-widest text-white">Contact Us</h3>
            <div className="mt-5 space-y-4 text-sm">
              <p className="flex items-start gap-3 text-white/80">
                <span className="mt-0.5 flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-white/10 text-white">☎</span>
                <span>
                  + 966-13-3670801
                  <br />
                  + 966-53-9461485
                </span>
              </p>
              <p className="flex items-start gap-3 text-white/80">
                <span className="mt-0.5 flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-white/10 text-white">✉</span>
                <span>
                  admin@standardarabia.com
                  <br />
                  info@standardarabia.com
                </span>
              </p>
              <p className="flex items-start gap-3 text-white/70 leading-relaxed">
                <span className="mt-0.5 flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-white/10 text-white">⌖</span>
                <span>
                  P.O. Box 10353, Al Jubail 31961, Support Industrial Zone, Jubail, Kingdom of Saudi Arabia.
                </span>
              </p>
              <p className="flex items-start gap-3 text-white/70 leading-relaxed">
                <span className="mt-0.5 flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-white/10 text-white">⌖</span>
                <span>
                  Standard Arabia Training Center
                  <br />
                  Makkha Street, Al Dana Dist, Jubail Balad, Eastern Provience, 35514, Saudi Arabia
                </span>
              </p>
            </div>
          </div>
        </div>

        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-white/10 pt-6 sm:flex-row">
          <p className="text-xs text-white/60">Standard Arabia Inspection Co © 2024 / All Rights Reserved</p>
          <p className="text-xs text-white/60">
            Designed By{" "}
            <a href="https://bmsofttech.com/" className="font-semibold text-white hover:text-[#7ec8ff] transition-colors">
              BM Softtech
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
