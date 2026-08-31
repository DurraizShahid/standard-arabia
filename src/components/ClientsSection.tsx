"use client";

export default function ClientsSection() {
  const clients = Array.from({ length: 10 }, (_, i) => ({
    id: i + 1,
    src: `https://standardarabia.com/assets/img/clients/clients-${i + 1}.webp`,
  }));

  return (
    <section className="bg-white py-16 sm:py-20 border-t border-gray-50">
      <div className="mx-auto max-w-[1400px] px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <p className="text-xs font-semibold uppercase tracking-widest text-[#0c598f]">They Believe In Us</p>
          <h2 className="mt-2 text-3xl font-bold text-[#1F242C]">Meet Our Clients</h2>
        </div>

        <div className="relative mt-10 overflow-hidden">
          <div className="pointer-events-none absolute left-0 top-0 bottom-0 w-20 bg-gradient-to-r from-white to-transparent z-10" />
          <div className="pointer-events-none absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-white to-transparent z-10" />
          <div className="flex gap-6 animate-[marquee_30s_linear_infinite] hover:[animation-play-state:paused]">
            {[...clients, ...clients, ...clients].map((c, idx) => (
              <div
                key={`${c.id}-${idx}`}
                className="flex h-[80px] w-[160px] shrink-0 items-center justify-center rounded-2xl border border-gray-100 bg-white p-4 shadow-sm"
              >
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src={c.src} alt={`Client ${c.id}`} className="max-h-full max-w-full object-contain grayscale opacity-70 hover:grayscale-0 hover:opacity-100 transition-all" />
              </div>
            ))}
          </div>
        </div>
      </div>
      <style>{`@keyframes marquee { 0% { transform: translateX(0); } 100% { transform: translateX(-33.333%); } }`}</style>
    </section>
  );
}
