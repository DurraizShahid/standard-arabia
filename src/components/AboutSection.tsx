import Link from "next/link";

export default function AboutSection() {
  return (
    <section className="relative bg-white py-16 sm:py-20 lg:py-24 overflow-hidden">
      <div className="mx-auto max-w-[1400px] px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          <div className="lg:col-span-5">
            <div className="relative">
              <div className="absolute -inset-4 -z-10 rounded-[28px] bg-[#f8fafc] border border-gray-100" />
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="https://standardarabia.com/assets/img/home/safety1.webp"
                alt="Standard Arabia safety culture"
                className="w-full rounded-[20px] object-cover shadow-lg aspect-[4/3]"
              />
              <div className="absolute bottom-4 left-4 right-4 rounded-2xl bg-white/95 backdrop-blur p-4 shadow-xl border border-gray-100 flex items-center gap-3">
                <img
                  src="https://standardarabia.com/assets/img/logo1.webp"
                  alt="Standard Arabia"
                  className="h-10 w-auto"
                />
                <div className="h-8 w-px bg-gray-200" />
                <img
                  src="https://standardarabia.com/assets/img/Saudi_Vision_2030.webp"
                  alt="Vision 2030"
                  className="h-8 w-auto"
                />
                <div className="ml-auto text-right">
                  <p className="text-xs font-bold text-[#0c598f]">Beyond Inspection</p>
                  <p className="text-[11px] text-[#565969]">Since 2015</p>
                </div>
              </div>
            </div>
          </div>

          <div className="lg:col-span-7 lg:pl-8">
            <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-[#0c598f]">
              <span className="h-px w-8 bg-[#0c598f]" />
              About us
            </div>
            <h2 className="mt-3 text-3xl font-bold tracking-tight text-[#1F242C] sm:text-4xl">
              &ldquo;Quality Matters&rdquo;
            </h2>
            <p className="mt-4 text-[15px] leading-7 text-[#565969]">
              Standard Arabia Inspection Co. Ltd has been established at Al Jubail – Saudi Arabia as a Third-Party Inspection, Training, Material testing, NDT & certification
              provider with branches at Riyadh, Jeddah, Yanbu, Jazan, Shuqaiq, Tabuk, Turaif, NEOM, At Taif, Dammam, Jubail & Bahrain.
            </p>
            <p className="mt-3 text-[15px] leading-7 text-[#565969]">
              By providing modern Inspection and training solutions, Standard Arabia seeks to create an environment where everyone can equally reap the benefits of an efficient and
              secure workplace.
            </p>

            <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-3">
              {[
                "Third-Party Inspection & Certification",
                "Safety & Operator Training",
                "Advanced NDT Services",
                "Material Testing & Calibration",
              ].map((item) => (
                <div key={item} className="flex items-center gap-2.5 text-sm font-medium text-[#1F242C]">
                  <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-[#e0f2fe] text-[#0c598f]">
                    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                      <path d="M5 13l4 4L19 7" />
                    </svg>
                  </span>
                  {item}
                </div>
              ))}
            </div>

            <div className="mt-8 flex flex-wrap gap-3">
              <Link
                href="/about"
                className="inline-flex items-center gap-2 rounded-full bg-[#0c598f] px-7 py-3 text-sm font-semibold text-white hover:bg-[#09406a] transition-colors shadow-lg shadow-[#0c598f]/20"
              >
                Read More
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M5 12h14M12 5l7 7-7 7" />
                </svg>
              </Link>
              <Link href="/contact" className="inline-flex items-center gap-2 rounded-full border border-gray-200 bg-white px-7 py-3 text-sm font-semibold text-[#1F242C] hover:border-[#0c598f] hover:text-[#0c598f] transition-colors">
                Contact Us
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
