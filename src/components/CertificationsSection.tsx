"use client";

const certs = [
  { id: 1, src: "https://standardarabia.com/CMS/uploads/images/4_94852694.webp", type: "v" },
  { id: 2, src: "https://standardarabia.com/CMS/uploads/images/3_8f8ee552.webp", type: "v" },
  { id: 3, src: "https://standardarabia.com/CMS/uploads/images/2_2a8028fb.webp", type: "v" },
  { id: 4, src: "https://standardarabia.com/CMS/uploads/images/1_e1c6ee15.webp", type: "v" },
  { id: 5, src: "https://standardarabia.com/CMS/uploads/images/10_6491eb02.webp", type: "v" },
  { id: 6, src: "https://standardarabia.com/CMS/uploads/images/9_91f28df9.webp", type: "v" },
  { id: 7, src: "https://standardarabia.com/CMS/uploads/images/8_1c58c860.webp", type: "v" },
  { id: 8, src: "https://standardarabia.com/CMS/uploads/images/7_5bf539d0.webp", type: "v" },
  { id: 9, src: "https://standardarabia.com/CMS/uploads/images/11_527ed8bc.webp", type: "h" },
  { id: 10, src: "https://standardarabia.com/CMS/uploads/images/12_9e0900d7.webp", type: "h" },
  { id: 11, src: "https://standardarabia.com/CMS/uploads/images/13_be59cc1c.webp", type: "h" },
  { id: 12, src: "https://standardarabia.com/CMS/uploads/images/14_b262db8f.webp", type: "h" },
];

export default function CertificationsSection() {
  return (
    <section className="tp-team-2-area relative fix bg-[#414141] pt-[60px] pb-[60px] lg:pt-[120px] lg:pb-[120px]">
      <div className="container">
        <div className="row flex flex-wrap -mx-3">
          <div className="w-full px-3">
            <div className="tp-portfolio-7-title-wrapper text-center mb-[45px]">
              <span className="tp-section-title-pre text-sm font-semibold tracking-widest text-white/70 uppercase">The validation of our qualifications</span>
              <h3 className="tp-section-title text-white text-[32px] lg:text-[55px] font-bold mt-2" style={{ fontFamily: "var(--font-jakarta)" }}>
                Our Certifications
              </h3>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6">
          {certs.map((c) => (
            <div key={c.id} className="tp-portfolio-7-item">
              <div className="tp-portfolio-7-thumb">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={c.src}
                  alt={`Certification ${c.id}`}
                  title={`Certification ${c.id}`}
                  className="w-full"
                  style={{ height: c.type === "v" ? "403px" : "222px", borderRadius: "6px", boxShadow: "0px 0px 10px 0px #014764", objectFit: "cover" }}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
