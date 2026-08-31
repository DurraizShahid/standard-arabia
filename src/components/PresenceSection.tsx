import Link from "next/link";

export default function PresenceSection() {
  return (
    <section className="tp-about-area relative fix bg-[#303030] pt-[60px] pb-[60px] lg:pt-[120px] lg:pb-[120px]">
      <div className="container mx-auto max-w-[1320px] px-4 sm:px-6 lg:px-8">
        <div className="row flex flex-wrap -mx-3 mb-8">
          <div className="w-full px-3">
            <div className="tp-team-6-title-wrapper">
              <h3 className="tp-section-title text-white text-[32px] lg:text-[55px] font-bold leading-tight" style={{ fontFamily: "var(--font-jakarta)" }}>
                Our Presence
              </h3>
            </div>
          </div>
        </div>
        <div className="row flex flex-wrap -mx-3 items-center">
          <div className="w-full lg:w-7/12 px-3 mb-8 lg:mb-0">
            <div className="tp-about-thumb-wrapper">
              <div className="tp-about-thumb">
                <div className="main overflow-hidden rounded-2xl">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src="https://standardarabia.com/assets/img/home/map.webp"
                    alt="Third-Party Inspection Company"
                    title="Third-Party Inspection Company"
                    className="w-full h-auto object-contain max-w-[640px] mx-auto"
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="w-full lg:w-5/12 px-3">
            <div className="tp-about-wrapper relative">
              <div className="tp-about-title-wrapper">
                <span className="tp-section-title-pre text-sm font-semibold tracking-widest text-white uppercase opacity-80">About us</span>
                <h3 className="tp-section-title text-white text-[28px] lg:text-[36px] font-bold mt-2 mb-4" style={{ fontFamily: "var(--font-jakarta)" }}>
                  &ldquo;Quality Matters&rdquo;
                </h3>
                <p className="text-white text-[15px] leading-7 opacity-90">
                  Standard Arabia Inspection Co. Ltd has been established at Al Jubail – Saudi Arabia as a Third-Party Inspection, Training, Material testing, NDT & certification provider with branches at Riyadh, Jeddah, Yanbu, Jazan, Shuqaiq, tabuk, Turaif, NEOM, At taif, Dammam, Jubail & Bahrain.
                </p>
                <p className="text-white text-[15px] leading-7 opacity-90 mt-4">
                  By providing modern Inspection and training solutions, Standard Arabia seeks to create an environment where everyone can equally reap the benefits of an efficient and secure workplace.
                </p>
              </div>
              <div className="tp-about-btn mt-8">
                <Link
                  href="/about"
                  className="tp-btn inline-flex items-center gap-2 rounded-full bg-[#0c598f] px-7 py-3 text-sm font-semibold text-white hover:bg-white hover:text-[#0c598f] transition-colors"
                >
                  Read More
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
