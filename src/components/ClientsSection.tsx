"use client";

export default function ClientsSection() {
  const clients = Array.from({ length: 10 }, (_, i) => ({
    id: i + 1,
    src: `https://standardarabia.com/assets/img/clients/clients-${i + 1}.webp`,
  }));

  return (
    <section className="tp-brand-6-area relative pt-[60px] pb-[60px] lg:pt-[100px] lg:pb-[100px] bg-white overflow-hidden">
      <div className="container mx-auto max-w-[1320px] px-4 sm:px-6 lg:px-8">
        <div className="row flex flex-wrap -mx-3">
          <div className="w-full px-3 text-center mb-10">
            <span className="text-sm font-semibold tracking-widest text-[#0c598f] uppercase">They Believe In Us</span>
            <h3 className="tp-section-title text-[32px] lg:text-[48px] font-bold text-[#0c598f] mt-2" style={{ fontFamily: "var(--font-jakarta)" }}>
              Meet Our Clients
            </h3>
          </div>
        </div>
        <div className="relative overflow-hidden">
          <div className="pointer-events-none absolute left-0 top-0 bottom-0 w-16 bg-gradient-to-r from-white to-transparent z-10" />
          <div className="pointer-events-none absolute right-0 top-0 bottom-0 w-16 bg-gradient-to-l from-white to-transparent z-10" />
          <div className="flex gap-4 animate-[marquee_30s_linear_infinite] hover:[animation-play-state:paused] w-max">
            {[...clients, ...clients, ...clients].map((c, idx) => (
              <div key={`${c.id}-${idx}`} className="flex h-[90px] w-[160px] shrink-0 items-center justify-center rounded-xl border border-gray-100 bg-white p-4 shadow-sm">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src={c.src} alt={`Client ${c.id}`} className="max-h-full max-w-full object-contain opacity-70 hover:opacity-100 grayscale hover:grayscale-0 transition-all" />
              </div>
            ))}
          </div>
        </div>
      </div>
      <style>{`@keyframes marquee { 0% { transform: translateX(0); } 100% { transform: translateX(-33.333%); } }`}</style>
    </section>
  );
}
