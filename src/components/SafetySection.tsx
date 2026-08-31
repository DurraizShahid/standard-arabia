import Link from "next/link";

export default function SafetySection() {
  return (
    <section className="relative bg-white py-16 sm:py-20">
      <div className="mx-auto max-w-[1400px] px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
          <div>
            <div className="inline-flex items-center gap-2 rounded-full bg-[#e0f2fe] px-3 py-1 text-xs font-semibold text-[#0c598f]">
              Safety Culture First
            </div>
            <h2 className="mt-4 text-3xl font-bold leading-tight text-[#1F242C] sm:text-4xl">To Promote an Effective Safety Culture</h2>
            <p className="mt-4 text-sm leading-7 text-[#565969]">
              Standard Arabia inspection comply with quality, Safety and Statutory requirements while ensuring optimum performance throughout the life cycle of your assets and
              Equipment.
            </p>

            <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-4">
              <a
                href="https://www.youtube.com/watch?v=1jwUD9fL5Uw"
                target="_blank"
                rel="noopener noreferrer"
                className="group relative overflow-hidden rounded-2xl bg-[#0c598f] p-5 text-white hover:bg-[#09406a] transition-colors"
              >
                <div className="flex items-center gap-3">
                  <span className="flex h-10 w-10 items-center justify-center rounded-full bg-white/20 backdrop-blur">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="white">
                      <path d="M8 5.14v14l11-7-11-7z" />
                    </svg>
                  </span>
                  <div>
                    <p className="text-sm font-bold">Overview</p>
                    <p className="text-xs text-white/70">Watch our story</p>
                  </div>
                </div>
                <p className="mt-3 text-xs text-white/60">Learn how we ensure lifecycle performance with safety-first inspection.</p>
              </a>

              <a
                href="https://www.youtube.com/watch?v=ls4OPNwsq-8"
                target="_blank"
                rel="noopener noreferrer"
                className="group relative overflow-hidden rounded-2xl border border-gray-200 bg-white p-5 hover:border-[#0c598f]/20 hover:shadow-md transition-all"
              >
                <div className="flex items-center gap-3">
                  <span className="flex h-10 w-10 items-center justify-center rounded-full bg-red-50 text-[#eb003d]">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M8 5.14v14l11-7-11-7z" />
                    </svg>
                  </span>
                  <div>
                    <p className="text-sm font-bold text-[#1F242C]">Safety Awareness</p>
                    <p className="text-xs text-[#565969]">Training insights</p>
                  </div>
                </div>
                <p className="mt-3 text-xs text-[#565969]">Discover our approach to creating safe work environments.</p>
              </a>
            </div>
          </div>

          <div className="relative">
            <div className="overflow-hidden rounded-[24px] bg-gray-100 shadow-xl">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="https://standardarabia.com/assets/img/home/safety1.webp"
                alt="Safety Culture"
                className="w-full aspect-[4/3] object-cover"
              />
            </div>
            <div className="absolute -bottom-6 -left-6 hidden rounded-2xl bg-white p-4 shadow-xl border border-gray-100 sm:flex items-center gap-3">
              <div className="h-12 w-12 rounded-xl bg-emerald-500 flex items-center justify-center text-white font-bold text-lg">✓</div>
              <div>
                <p className="text-sm font-bold text-[#1F242C]">100% Compliant</p>
                <p className="text-xs text-[#565969]">Statutory & Quality Standards</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
