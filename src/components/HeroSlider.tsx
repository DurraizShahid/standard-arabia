"use client";

import { useEffect, useState } from "react";
import Link from "next/link";

const slides = [
  {
    id: 1,
    headline: "100's of Internationally Accredited Training Programs and Short Courses",
    image: "https://standardarabia.com/assets/img/slider/Slider1.webp",
    ctaPrimary: { label: "Read More", href: "/about" },
    ctaSecondary: { label: "Contact Us", href: "/contact" },
    accent: "light",
  },
  {
    id: 2,
    headline: "Experience Excellence with Our Comprehensive Inspection Services",
    image: "https://standardarabia.com/assets/img/slider/slider2.webp",
    ctaPrimary: { label: "Read More", href: "/scaffolding-inspection" },
    ctaSecondary: { label: "Contact Us", href: "/contact" },
    accent: "dark",
  },
  {
    id: 3,
    headline: "Standard Arabia is IPAF Approved Training Center & Full Member of LEEA with LEEA Approved Inspectors",
    image: "https://standardarabia.com/assets/img/slider/slider3.webp",
    ctaPrimary: { label: "Read More", href: "/rigging-technical" },
    ctaSecondary: { label: "Contact Us", href: "/contact" },
    accent: "dark",
  },
  {
    id: 4,
    headline: "Experience Excellence with Our Comprehensive Inspection Services",
    image: "https://standardarabia.com/assets/img/slider/slider4.webp",
    ctaPrimary: { label: "Read More", href: "/marine-testing" },
    ctaSecondary: { label: "Contact Us", href: "/contact" },
    accent: "dark",
  },
];

export default function HeroSlider() {
  const [active, setActive] = useState(0);
  const [paused, setPaused] = useState(false);

  useEffect(() => {
    if (paused) return;
    const id = setInterval(() => setActive((p) => (p + 1) % slides.length), 5000);
    return () => clearInterval(id);
  }, [paused]);

  return (
    <section
      className="relative overflow-hidden bg-[#fcfdff]"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      {/* soft gradient blobs */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -top-24 left-1/2 h-[600px] w-[900px] -translate-x-1/2 rounded-full bg-gradient-to-br from-[#e0f2fe]/60 via-[#f0f9ff]/40 to-transparent blur-3xl" />
        <div className="absolute bottom-0 right-0 h-[400px] w-[600px] rounded-full bg-gradient-to-tl from-[#0c598f]/5 to-transparent blur-2xl" />
      </div>

      <div className="relative mx-auto max-w-[1400px] px-4 sm:px-6 lg:px-8">
        <div className="flex min-h-[540px] items-center py-8 sm:py-12 lg:min-h-[600px] lg:py-0">
          <div className="grid w-full grid-cols-1 items-center gap-8 lg:grid-cols-2 lg:gap-12">
            {/* Text */}
            <div className="relative order-2 lg:order-1">
              <div className="max-w-[640px]">
                <div className="mb-6 flex items-center gap-2">
                  <div className="flex gap-1.5">
                    {slides.map((_, i) => (
                      <button
                        key={i}
                        onClick={() => setActive(i)}
                        aria-label={`Go to slide ${i + 1}`}
                        className={`h-1.5 rounded-full transition-all duration-300 ${
                          i === active ? "w-8 bg-[#0c598f]" : "w-1.5 bg-gray-300 hover:bg-gray-400"
                        }`}
                      />
                    ))}
                  </div>
                  <span className="ml-2 text-xs font-medium tracking-widest text-gray-400">
                    {String(active + 1).padStart(2, "0")} / {String(slides.length).padStart(2, "0")}
                  </span>
                </div>

                <h1 className="text-[32px] font-bold leading-[1.1] tracking-tight text-[#1F242C] sm:text-[42px] lg:text-[48px]">
                  {slides[active].headline.split(" ").map((word, idx, arr) => {
                    // Highlight "Internationally Accredited" and "IPAF Approved" etc by keeping same color but bold
                    return word + " ";
                  })}
                </h1>

                <div className="mt-8 flex flex-wrap gap-3">
                  <Link
                    href={slides[active].ctaPrimary.href}
                    className="inline-flex items-center gap-2 rounded-full bg-[#0c598f] px-7 py-3.5 text-sm font-semibold text-white shadow-lg shadow-[#0c598f]/20 hover:bg-[#09406a] hover:shadow-xl transition-all"
                  >
                    {slides[active].ctaPrimary.label}
                    <svg width="14" height="14" viewBox="0 0 14 14" fill="none" stroke="currentColor" strokeWidth="1.8">
                      <path d="M5 3l5 4-5 4" strokeLinecap="round" strokeLinejoin="round" />
                      <path d="M2 7h8" strokeLinecap="round" />
                    </svg>
                  </Link>
                  <Link
                    href={slides[active].ctaSecondary.href}
                    className="inline-flex items-center gap-2 rounded-full bg-[#525353] px-7 py-3.5 text-sm font-semibold text-white hover:bg-[#3f3f3f] transition-colors"
                  >
                    {slides[active].ctaSecondary.label}
                    <svg width="14" height="14" viewBox="0 0 14 14" fill="none" stroke="currentColor" strokeWidth="1.8">
                      <path d="M5 3l5 4-5 4" strokeLinecap="round" strokeLinejoin="round" />
                      <path d="M2 7h8" strokeLinecap="round" />
                    </svg>
                  </Link>
                </div>

                {/* slider controls */}
                <div className="mt-10 hidden items-center gap-3 lg:flex">
                  <button
                    onClick={() => setActive((p) => (p - 1 + slides.length) % slides.length)}
                    className="flex h-10 w-10 items-center justify-center rounded-full border border-gray-200 bg-white text-[#1F242C] hover:border-[#0c598f] hover:text-[#0c598f] transition-colors"
                    aria-label="Previous slide"
                  >
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M15 18l-6-6 6-6" />
                    </svg>
                  </button>
                  <button
                    onClick={() => setActive((p) => (p + 1) % slides.length)}
                    className="flex h-10 w-10 items-center justify-center rounded-full border border-gray-200 bg-white text-[#1F242C] hover:border-[#0c598f] hover:text-[#0c598f] transition-colors"
                    aria-label="Next slide"
                  >
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M9 18l6-6-6-6" />
                    </svg>
                  </button>
                </div>
              </div>
            </div>

            {/* Image */}
            <div className="relative order-1 lg:order-2">
              <div className="relative mx-auto aspect-[4/3] max-w-[560px] overflow-hidden rounded-[28px] bg-white p-2 shadow-[0_20px_60px_-16px_rgba(12,89,143,0.18)] lg:aspect-[4/3]">
                <div className="relative h-full w-full overflow-hidden rounded-[20px] bg-gray-100">
                  {slides.map((s, i) => (
                    <img
                      key={s.id}
                      src={s.image}
                      alt={s.headline}
                      className={`absolute inset-0 h-full w-full object-cover transition-all duration-700 ${
                        i === active ? "opacity-100 scale-100" : "opacity-0 scale-105"
                      }`}
                    />
                  ))}
                  {/* overlay gradient for readability on dark slides */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/10 via-transparent to-transparent pointer-events-none" />
                </div>
                {/* floating glow */}
                <div className="absolute -bottom-6 -right-6 -z-10 h-32 w-32 rounded-full bg-[#0c598f]/10 blur-2xl" />
                <div className="absolute -top-6 -left-6 -z-10 h-32 w-32 rounded-full bg-[#F94D1C]/10 blur-2xl" />
              </div>

              {/* mobile arrows */}
              <div className="mt-4 flex justify-center gap-3 lg:hidden">
                <button
                  onClick={() => setActive((p) => (p - 1 + slides.length) % slides.length)}
                  className="flex h-10 w-10 items-center justify-center rounded-full border border-gray-200 bg-white shadow-sm"
                >
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M15 18l-6-6 6-6" />
                  </svg>
                </button>
                <button
                  onClick={() => setActive((p) => (p + 1) % slides.length)}
                  className="flex h-10 w-10 items-center justify-center rounded-full border border-gray-200 bg-white shadow-sm"
                >
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M9 18l6-6-6-6" />
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* bottom fade */}
      <div className="pointer-events-none absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gray-200 to-transparent" />
    </section>
  );
}
