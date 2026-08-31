"use client";

export default function AccreditationsSection() {
  const accreditations = Array.from({ length: 24 }, (_, i) => ({
    id: i + 1,
    src: `https://standardarabia.com/CMS/uploads/images/acceretion-${i + 1}_${["81e322cc", "f784f322", "103ddd09", "69800e1f", "84cbfc35", "3ebafe30", "ca43c14d", "79f349fc", "e41397be", "7b43d097", "b19c94ec", "ee0a3939", "0c353cb4", "8d50db81", "f273b437", "7444e3fd", "a3a1a42f", "9c0ce578", "a19865ea", "79ee1f1c", "cab34110", "b2b202d6", "1adf2258", "81e322cc"][i % 24]}.webp`,
    fallback: `https://standardarabia.com/CMS/uploads/images/acceretion-${(i % 23) + 1}_${["81e322cc", "f784f322", "103ddd09", "69800e1f", "84cbfc35", "3ebafe30", "ca43c14d", "79f349fc", "e41397be", "7b43d097", "b19c94ec", "ee0a3939", "0c353cb4", "8d50db81", "f273b437", "7444e3fd", "a3a1a42f", "9c0ce578", "a19865ea", "79ee1f1c", "cab34110", "b2b202d6", "1adf2258"][i % 23]}.webp`,
  }));

  return (
    <section className="bg-white py-16 sm:py-20">
      <div className="mx-auto max-w-[1400px] px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <p className="text-xs font-semibold uppercase tracking-widest text-[#0c598f]">Our Accreditations</p>
          <h2 className="mt-2 text-2xl font-bold text-[#1F242C] sm:text-3xl">Internationally Recognized Partnerships</h2>
          <p className="mx-auto mt-3 max-w-2xl text-sm leading-relaxed text-[#565969]">
            Validated by globally respected bodies — ensuring our training, inspection and certification meet the highest standards.
          </p>
        </div>

        <div className="mt-10 grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6">
          {accreditations.slice(0, 18).map((a) => (
            <div key={a.id} className="group flex items-center justify-center rounded-2xl border border-gray-100 bg-white p-4 shadow-sm hover:shadow-md hover:border-[#0c598f]/10 transition-all">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={a.src}
                alt="Accreditation"
                className="max-h-[64px] w-auto object-contain grayscale group-hover:grayscale-0 opacity-80 group-hover:opacity-100 transition-all"
                onError={(e) => {
                  const t = e.target as HTMLImageElement;
                  t.style.display = "none";
                }}
              />
            </div>
          ))}
        </div>
        <p className="mt-6 text-center text-xs text-gray-400">+ many more accreditations from international agencies</p>
      </div>
    </section>
  );
}
