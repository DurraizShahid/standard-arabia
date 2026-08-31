"use client";

import { useState } from "react";

const allCerts = [
  { id: 1, src: "https://standardarabia.com/CMS/uploads/images/1_e1c6ee15.webp", type: "Vertical" },
  { id: 2, src: "https://standardarabia.com/CMS/uploads/images/2_2a8028fb.webp", type: "Vertical" },
  { id: 3, src: "https://standardarabia.com/CMS/uploads/images/3_8f8ee552.webp", type: "Vertical" },
  { id: 4, src: "https://standardarabia.com/CMS/uploads/images/4_94852694.webp", type: "Vertical" },
  { id: 5, src: "https://standardarabia.com/CMS/uploads/images/5_6e75c866.webp", type: "Vertical" },
  { id: 6, src: "https://standardarabia.com/CMS/uploads/images/6_da7a3d2d.webp", type: "Vertical" },
  { id: 7, src: "https://standardarabia.com/CMS/uploads/images/7_5bf539d0.webp", type: "Vertical" },
  { id: 8, src: "https://standardarabia.com/CMS/uploads/images/8_1c58c860.webp", type: "Vertical" },
  { id: 9, src: "https://standardarabia.com/CMS/uploads/images/9_91f28df9.webp", type: "Vertical" },
  { id: 10, src: "https://standardarabia.com/CMS/uploads/images/10_6491eb02.webp", type: "Vertical" },
  { id: 11, src: "https://standardarabia.com/CMS/uploads/images/11_527ed8bc.webp", type: "Horizontal" },
  { id: 12, src: "https://standardarabia.com/CMS/uploads/images/12_9e0900d7.webp", type: "Horizontal" },
  { id: 13, src: "https://standardarabia.com/CMS/uploads/images/13_be59cc1c.webp", type: "Horizontal" },
  { id: 14, src: "https://standardarabia.com/CMS/uploads/images/14_b262db8f.webp", type: "Horizontal" },
];

export default function CertificationsSection() {
  const [filter, setFilter] = useState<"All" | "Vertical" | "Horizontal">("All");
  const filtered = filter === "All" ? allCerts : allCerts.filter((c) => c.type === filter);

  return (
    <section className="tp-team-2-area relative fix bg-[#414141] pt-[60px] pb-[60px] lg:pt-[120px] lg:pb-[120px]">
      <div className="container mx-auto max-w-[1320px] px-4 sm:px-6 lg:px-8">
        <div className="row flex flex-wrap -mx-3 mb-8 items-end">
          <div className="w-full lg:w-2/3 px-3">
            <span className="text-sm font-semibold tracking-widest text-white/70 uppercase">The validation of our qualifications</span>
            <h3 className="tp-section-title text-white text-[32px] lg:text-[48px] font-bold mt-2" style={{ fontFamily: "var(--font-jakarta)" }}>
              Our Certifications
            </h3>
          </div>
          <div className="w-full lg:w-1/3 px-3 flex lg:justify-end gap-2 mt-4 lg:mt-0">
            {["All", "Vertical", "Horizontal"].map((t) => (
              <button
                key={t}
                onClick={() => setFilter(t as typeof filter)}
                className={`rounded-full px-5 py-2 text-sm font-semibold border transition-colors ${
                  filter === t ? "bg-[#0c598f] text-white border-[#0c598f]" : "bg-white/10 text-white border-white/20 hover:bg-white hover:text-[#414141]"
                }`}
              >
                {t}
              </button>
            ))}
          </div>
        </div>

        <div className="row flex flex-wrap -mx-2">
          {filtered.map((c) => (
            <div key={c.id} className="w-1/2 sm:w-1/3 lg:w-1/4 px-2 mb-4">
              <div className="group relative overflow-hidden rounded-xl bg-white p-2 hover:shadow-xl transition-all">
                <div className={c.type === "Vertical" ? "aspect-[3/4]" : "aspect-[4/3]"} style={{ background: "#f6f6f6" }}>
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src={c.src} alt={`Certification ${c.id}`} className="w-full h-full object-contain group-hover:scale-[1.02] transition-transform duration-500" />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
