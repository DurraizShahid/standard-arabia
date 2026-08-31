"use client";

export default function AccreditationsSection() {
  return (
    <section className="tp-team-6-area relative bg-[#EEEDED] pt-[60px] pb-[60px] lg:pt-[100px] lg:pb-[100px]">
      <div className="container mx-auto max-w-[1320px] px-4 sm:px-6 lg:px-8">
        <div className="row flex flex-wrap -mx-3">
          <div className="w-full lg:w-1/3 px-3">
            <div className="tp-team-6-title-wrapper">
              <h3 className="tp-section-title text-[28px] lg:text-[36px] font-bold text-[#0c598f] leading-tight" style={{ fontFamily: "var(--font-jakarta)" }}>
                Our Accreditations
              </h3>
            </div>
          </div>
          <div className="w-full lg:w-2/3 px-3">
            <div className="tp-team-6-box">
              <div className="row flex flex-wrap -mx-2">
                {Array.from({ length: 20 }).map((_, i) => {
                  const idx = i + 1;
                  const hashes = ["81e322cc","f784f322","103ddd09","69800e1f","84cbfc35","3ebafe30","ca43c14d","79f349fc","e41397be","7b43d097","b19c94ec","ee0a3939","0c353cb4","8d50db81","f273b437","7444e3fd","a3a1a42f","9c0ce578","a19865ea","79ee1f1c"];
                  const hash = hashes[i % hashes.length];
                  return (
                    <div key={idx} className="w-1/2 md:w-1/4 px-2 mb-4">
                      <div className="tp-team-6-item relative">
                        <div className="tp-team-6-thumb fix overflow-hidden rounded bg-white p-2 flex items-center justify-center h-[90px] border border-white hover:border-[#0c598f]/10 hover:shadow-sm transition-all">
                          {/* eslint-disable-next-line @next/next/no-img-element */}
                          <img
                            src={`https://standardarabia.com/CMS/uploads/images/acceretion-${idx}_${hash}.webp`}
                            alt="Accreditation"
                            title="Accreditation"
                            className="max-h-[70px] w-auto object-contain"
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
