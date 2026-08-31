export default function SafetySection() {
  return (
    <section className="tp-video-area relative pt-[60px] pb-[60px] lg:pt-[120px] lg:pb-[120px] bg-transparent">
      <div className="container">
        <div className="row flex flex-wrap -mx-3 items-center">
          <div className="w-full lg:w-5/12 px-3 mb-8 lg:mb-0">
            <div className="tp-video-thumb">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src="https://standardarabia.com/assets/img/home/safety1.webp" alt="" className="w-full rounded-2xl object-cover" />
            </div>
          </div>
          <div className="w-full lg:w-7/12 px-3">
            <div className="tp-video-wrapper lg:pl-8">
              <div className="tp-video-title-wrapper mb-6">
                <h3 className="tp-section-title text-white text-[32px] lg:text-[55px] font-bold leading-tight" style={{ fontFamily: "var(--font-jakarta)" }}>
                  To Promote an Effective Safety Culture
                </h3>
              </div>
              <p className="mb-6 text-[15px] leading-7 text-[#565969]">
                Standard Arabia inspection comply with quality, Safety and Statutory requirements while ensuring optimum performance throughout the life cycle of your assets and Equipment .
              </p>

              <div className="tp-video-box flex flex-col sm:flex-row gap-4 justify-between">
                <div
                  className="tp-video-play relative flex-1 rounded-2xl overflow-hidden min-h-[140px] flex items-center justify-center p-6"
                  style={{
                    backgroundImage: "url(https://standardarabia.com/assets/img/home/about-youtube-link-bg.webp)",
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                  }}
                >
                  <div className="absolute inset-0 bg-[#0c598f]/85" />
                  <div className="tp-video-popup relative text-center">
                    <a href="https://www.youtube.com/watch?v=1jwUD9fL5Uw" target="_blank" rel="noopener noreferrer" className="popup-video inline-flex flex-col items-center gap-2 text-white hover:text-white/90">
                      <span className="flex h-12 w-12 items-center justify-center rounded-full bg-white text-[#0c598f]">
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                          <path d="M8 5.14v14l11-7-11-7z" />
                        </svg>
                      </span>
                      <p className="text-sm font-bold">Overview</p>
                    </a>
                  </div>
                </div>
                <div
                  className="tp-video-play relative flex-1 rounded-2xl overflow-hidden min-h-[140px] flex items-center justify-center p-6"
                  style={{
                    backgroundImage: "url(https://standardarabia.com/assets/img/home/safety-youtube-link-bg.webp)",
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                  }}
                >
                  <div className="absolute inset-0 bg-[#303030]/85" />
                  <div className="tp-video-popup relative text-center">
                    <a href="https://www.youtube.com/watch?v=ls4OPNwsq-8" target="_blank" rel="noopener noreferrer" className="popup-video inline-flex flex-col items-center gap-2 text-white hover:text-white/90">
                      <span className="flex h-12 w-12 items-center justify-center rounded-full bg-white text-[#303030]">
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                          <path d="M8 5.14v14l11-7-11-7z" />
                        </svg>
                      </span>
                      <p className="text-sm font-bold">Safety Awareness</p>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
