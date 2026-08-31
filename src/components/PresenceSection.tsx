import Link from "next/link";

export default function PresenceSection() {
  return (
    <section className="relative overflow-hidden bg-[#f8fafc] py-16 sm:py-20">
      <div className="mx-auto max-w-[1400px] px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 items-center gap-10 lg:grid-cols-2 lg:gap-16">
          <div className="order-2 lg:order-1">
            <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-[#0c598f]">
              <span className="h-px w-8 bg-[#0c598f]" />
              Our Presence
            </div>
            <div className="mt-4 space-y-6">
              <div className="rounded-2xl bg-white p-6 shadow-sm border border-gray-100">
                <div className="flex items-start gap-4">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-[#0c598f] text-white">
                    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
                      <path d="M12 21s7-6 7-11a7 7 0 10-14 0c0 5 7 11 7 11z" />
                      <circle cx="12" cy="10" r="2.5" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-[#1F242C]">Across Saudi Arabia & Beyond</h3>
                    <p className="mt-1.5 text-sm leading-relaxed text-[#565969]">
                      Branches at Al Jubail, Riyadh, Jeddah, Yanbu, Jazan, Shuqaiq, Tabuk, Turaif, NEOM, At Taif, Dammam, Jubail & Bahrain.
                    </p>
                  </div>
                </div>
              </div>

              <div className="rounded-2xl bg-[#0c598f] p-6 text-white shadow-lg">
                <p className="text-sm font-medium leading-relaxed text-white/90">
                  &ldquo;Quality Matters&rdquo; — Standard Arabia Inspection Co. Ltd delivers modern inspection and training solutions where everyone can equally reap the benefits of an efficient and secure workplace.
                </p>
                <div className="mt-4 flex items-center gap-3">
                  <Link href="/about" className="rounded-full bg-white px-5 py-2 text-sm font-semibold text-[#0c598f] hover:bg-gray-50 transition-colors">
                    Read More
                  </Link>
                  <span className="text-xs text-white/70">Est. 2015 · Al Jubail</span>
                </div>
              </div>

              <div className="grid grid-cols-3 gap-3 text-center">
                {[
                  { v: "14+", l: "Branches" },
                  { v: "140+", l: "Services" },
                  { v: "10k+", l: "Clients" },
                ].map((s) => (
                  <div key={s.l} className="rounded-xl bg-white p-3 border border-gray-100">
                    <div className="text-lg font-bold text-[#0c598f]">{s.v}</div>
                    <div className="text-xs font-medium text-[#565969]">{s.l}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="order-1 lg:order-2">
            <div className="relative">
              <div className="absolute inset-0 -z-10 rounded-[28px] bg-gradient-to-br from-[#0c598f]/10 via-[#0c598f]/5 to-transparent blur-2xl" />
              <div className="overflow-hidden rounded-[24px] bg-white p-3 shadow-xl border border-gray-100">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src="https://standardarabia.com/assets/img/home/map.webp"
                  alt="Standard Arabia presence map Saudi Arabia"
                  className="w-full rounded-[16px] object-contain"
                />
              </div>
              <div className="absolute -bottom-4 -left-4 hidden rounded-2xl bg-white p-4 shadow-xl border border-gray-100 sm:flex items-center gap-3">
                <div className="h-10 w-10 rounded-full bg-emerald-500 flex items-center justify-center text-white">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M22 11.08V12a10 10 0 11-5.93-9.14" />
                    <path d="M22 4L12 14.01l-3-3" />
                  </svg>
                </div>
                <div>
                  <p className="text-sm font-bold text-[#1F242C]">TVTC Approved</p>
                  <p className="text-xs text-[#565969]">Internationally Accredited</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
