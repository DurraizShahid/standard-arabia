"use client";

import { useState } from "react";

const certifications = [
  { id: 1, title: "Vertical image 1", src: "https://standardarabia.com/CMS/uploads/images/1_e1c6ee15.webp", type: "Vertical" },
  { id: 2, title: "Vertical image 2", src: "https://standardarabia.com/CMS/uploads/images/2_2a8028fb.webp", type: "Vertical" },
  { id: 3, title: "Vertical image 3", src: "https://standardarabia.com/CMS/uploads/images/3_8f8ee552.webp", type: "Vertical" },
  { id: 4, title: "Vertical image 4", src: "https://standardarabia.com/CMS/uploads/images/4_94852694.webp", type: "Vertical" },
  { id: 5, title: "Vertical image 5", src: "https://standardarabia.com/CMS/uploads/images/5_6e75c866.webp", type: "Vertical" },
  { id: 6, title: "Vertical image 6", src: "https://standardarabia.com/CMS/uploads/images/6_da7a3d2d.webp", type: "Vertical" },
  { id: 7, title: "Vertical image 7", src: "https://standardarabia.com/CMS/uploads/images/7_5bf539d0.webp", type: "Vertical" },
  { id: 8, title: "Vertical image 8", src: "https://standardarabia.com/CMS/uploads/images/8_1c58c860.webp", type: "Vertical" },
  { id: 9, title: "Vertical image 9", src: "https://standardarabia.com/CMS/uploads/images/9_91f28df9.webp", type: "Vertical" },
  { id: 10, title: "Vertical image 10", src: "https://standardarabia.com/CMS/uploads/images/10_6491eb02.webp", type: "Vertical" },
  { id: 11, title: "Horizontal image 11", src: "https://standardarabia.com/CMS/uploads/images/11_527ed8bc.webp", type: "Horizontal" },
  { id: 12, title: "Horizontal image 12", src: "https://standardarabia.com/CMS/uploads/images/12_9e0900d7.webp", type: "Horizontal" },
];

export default function CertificationsSection() {
  const [filter, setFilter] = useState<"All" | "Vertical" | "Horizontal">("All");
  const filtered = filter === "All" ? certifications : certifications.filter((c) => c.type === filter);

  return (
    <section className="bg-[#f8fafc] py-16 sm:py-20">
      <div className="mx-auto max-w-[1400px] px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6">
          <div>
            <p className="text-xs font-semibold uppercase tracking-widest text-[#0c598f]">The validation of our qualifications</p>
            <h2 className="mt-2 text-3xl font-bold text-[#1F242C]">Our Certifications</h2>
          </div>
          <div className="flex items-center gap-2">
            {["All", "Vertical", "Horizontal"].map((t) => (
              <button
                key={t}
                onClick={() => setFilter(t as typeof filter)}
                className={`rounded-full px-5 py-2 text-sm font-semibold transition-colors border ${
                  filter === t ? "bg-[#0c598f] text-white border-[#0c598f]" : "bg-white text-[#565969] border-gray-200 hover:border-[#0c598f] hover:text-[#0c598f]"
                }`}
              >
                {t}
              </button>
            ))}
          </div>
        </div>

        <div className="mt-10 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4">
          {filtered.map((c) => (
            <div key={c.id} className="group relative overflow-hidden rounded-2xl bg-white border border-gray-100 shadow-sm hover:shadow-lg transition-all">
              <div className="aspect-[3/4] bg-gray-50 overflow-hidden">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src={c.src} alt={c.title} className="h-full w-full object-cover group-hover:scale-105 transition-transform duration-500" />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
              <div className="absolute bottom-0 left-0 right-0 p-4 translate-y-2 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all">
                <p className="text-xs font-semibold text-white">{c.title}</p>
                <p className="text-[11px] text-white/80">{c.type} image</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
