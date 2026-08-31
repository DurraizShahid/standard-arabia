"use client";

export default function AccreditationsSection() {
  return (
    <section className="tp-team-6-area relative bg-[#EEEDED] pt-[60px] pb-[60px] lg:pt-[100px] lg:pb-[100px]">
      <div className="container">
        <div className="row flex flex-wrap -mx-3">
          <div className="w-full lg:w-1/3 px-3">
            <div className="tp-team-6-title-wrapper">
              <h3 className="tp-section-title text-[36px] lg:text-[55px] font-bold text-[#0c598f] leading-tight" style={{ fontFamily: "var(--font-jakarta)" }}>
                Our Accreditations
              </h3>
            </div>
          </div>
          <div className="w-full lg:w-2/3 px-3">
            <div className="tp-team-6-box">
              <div className="row flex flex-wrap -mx-2">
                {Array.from({ length: 23 }).map((_, i) => {
                  const idx = i + 1;
                  const hashes = ["81e322cc","f784f322","103ddd09","69800e1f","84cbfc35","3ebafe30","ca43c14d","79f349fc","e41397be","7b43d097","b19c94ec","ee0a3939","0c353cb4","8d50db81","f273b437","7444e3fd","a3a1a42f","9c0ce578","a19865ea","79ee1f1c","cab34110","b2b202d6","1adf2258"];
                  const hash = hashes[i];
                  return (
                    <div key={idx} className="w-1/2 md:w-1/4 px-2 mb-4">
                      <div className="tp-team-6-item relative">
                        <div className="tp-team-6-thumb fix overflow-hidden rounded bg-white p-2 flex items-center justify-center border border-white hover:border-[#0c598f]/10 hover:shadow-sm transition-all" style={{ height: "130px" }}>
                          {/* eslint-disable-next-line @next/next/no-img-element */}
                          <img
                            src={`https://standardarabia.com/CMS/uploads/images/acceretion-${idx}_${hash}.webp`}
                            alt="Accreditation"
                            title="Accreditation"
                            className="object-contain"
                            style={{ width: "203px", height: "113px" }}
                            onError={(e) => {
                              (e.target as HTMLImageElement).style.display = "none";
                            }}
                          />
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
