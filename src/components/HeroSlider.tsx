"use client";

import { useEffect, useState } from "react";
import Link from "next/link";

const slides = [
  {
    id: 1,
    title: "100's of Internationally Accredited Training Programs and Short Courses",
    image: "https://standardarabia.com/assets/img/slider/Slider1.webp",
    ctaPrimary: { label: "Read More", href: "/about" },
    ctaSecondary: { label: "Contact Us", href: "/contact" },
    layout: "text-left-image-right",
    pt: "pt-[100px]",
  },
  {
    id: 2,
    title: "Experience Excellence with Our Comprehensive Inspection Services",
    image: "https://standardarabia.com/assets/img/slider/slider2.webp",
    ctaPrimary: { label: "Read More", href: "/scaffolding-inspection" },
    ctaSecondary: { label: "Contact Us", href: "/contact" },
    layout: "image-left-text-right",
    pt: "pt-[100px]",
  },
  {
    id: 3,
    title: "Standard Arabia is IPAF Approved Training Center & Full Member of LEEA with LEEA Approved Inspectors",
    image: "https://standardarabia.com/assets/img/slider/slider3.webp",
    ctaPrimary: { label: "Read More", href: "/rigging-technical" },
    ctaSecondary: { label: "Contact Us", href: "/contact" },
    layout: "text-left-image-right",
    pt: "pt-[50px]",
  },
  {
    id: 4,
    title: "Experience Excellence with Our Comprehensive Inspection Services",
    image: "https://standardarabia.com/assets/img/slider/slider4.webp",
    ctaPrimary: { label: "Read More", href: "/marine-testing" },
    ctaSecondary: { label: "Contact Us", href: "/contact" },
    layout: "image-left-text-right",
    pt: "pt-[100px]",
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
      className="relative overflow-hidden bg-white pt-[105px]"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      <div className="tp-hero-7-area relative">
        <div className="tp-hero-7-wrapper-slide">
          <div className="relative">
            {slides.map((s, i) => (
              <div
                key={s.id}
                className={`tp-hero-7-slider relative pt-[60px] pb-[60px] transition-opacity duration-700 ${
                  i === active ? "block opacity-100" : "hidden opacity-0"
                }`}
                style={{ minHeight: "500px" }}
              >
                <div className="container mx-auto max-w-[1320px] px-4 sm:px-6 lg:px-8">
                  <div className="row flex flex-wrap items-center -mx-3">
                    {/* Order switches per slide to match original sm-md-order classes */}
                    {s.layout === "text-left-image-right" ? (
                      <>
                        <div className="w-full lg:w-1/2 px-3 order-1">
                          <div className={`tp-hero-7-content relative z-10 ${s.pt} lg:pt-[100px] pb-0 text-center lg:text-left transition-all duration-500 ${i === active ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}`}>
                            <div
                              className="tp-hero-7-title text-[35px] sm:text-[35px] lg:text-[45px] font-bold leading-[1.16] text-[#525353] mb-[60px] lg:mb-[60px]"
                              style={{ fontFamily: "var(--font-jakarta)" }}
                            >
                              {s.title}
                            </div>
                            <div className="tp-hero-7-wrapper flex flex-wrap items-center justify-center lg:justify-start gap-3">
                              <Link
                                href={s.ctaPrimary.href}
                                className="tp-btn inline-flex items-center gap-2 rounded-full bg-[#0c598f] px-7 py-3 text-sm font-semibold text-white hover:bg-[#09406a] transition-colors"
                              >
                                {s.ctaPrimary.label}
                                <svg width="14" height="14" viewBox="0 0 14.2 14.2" fill="none" stroke="currentColor" strokeWidth="1.2">
                                  <path d="M13.2 9V1h-8M13.4.8.7 13.5" />
                                  <path d="M13.2 9V1h-8M13.4.8.7 13.5" />
                                </svg>
                              </Link>
                              <Link
                                href={s.ctaSecondary.href}
                                className="tp-btn inline-flex items-center gap-2 rounded-full bg-[#525353] px-7 py-3 text-sm font-semibold text-white hover:bg-[#3f3f3f] transition-colors"
                              >
                                {s.ctaSecondary.label}
                                <svg width="14" height="14" viewBox="0 0 14.2 14.2" fill="none" stroke="currentColor" strokeWidth="1.2">
                                  <path d="M13.2 9V1h-8M13.4.8.7 13.5" />
                                  <path d="M13.2 9V1h-8M13.4.8.7 13.5" />
                                </svg>
                              </Link>
                            </div>
                          </div>
                        </div>
                        <div className="w-full lg:w-1/2 px-3 order-2">
                          <div className={`tp-hero-7-thumb relative transition-all duration-700 ${i === active ? "opacity-100 translate-x-0" : "opacity-0 translate-x-[100px]"} lg:ml-[-40px]`}>
                            {/* eslint-disable-next-line @next/next/no-img-element */}
                            <img src={s.image} alt={s.title} className="w-full h-auto object-contain max-h-[420px]" />
                          </div>
                        </div>
                      </>
                    ) : (
                      <>
                        <div className="w-full lg:w-1/2 px-3 order-2 lg:order-1">
                          <div className={`tp-hero-7-thumb relative transition-all duration-700 ${i === active ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-[100px]"} lg:ml-[-40px]`}>
                            {/* eslint-disable-next-line @next/next/no-img-element */}
                            <img src={s.image} alt={s.title} className="w-full h-auto object-contain max-h-[420px]" />
                          </div>
                        </div>
                        <div className="w-full lg:w-1/2 px-3 order-1 lg:order-2">
                          <div className={`tp-hero-7-content relative z-10 ${s.pt} lg:pt-[100px] pb-0 text-center lg:text-left transition-all duration-500 ${i === active ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}`}>
                            <h3
                              className="tp-hero-7-title text-[35px] lg:text-[45px] font-bold leading-[1.16] text-[#525353] mb-[30px] lg:mb-[60px]"
                              style={{ fontFamily: "var(--font-jakarta)" }}
                            >
                              {s.title}
                            </h3>
                            <div className="tp-hero-7-wrapper flex flex-wrap items-center justify-center lg:justify-start gap-3">
                              <Link
                                href={s.ctaPrimary.href}
                                className="tp-btn inline-flex items-center gap-2 rounded-full bg-[#0c598f] px-7 py-3 text-sm font-semibold text-white hover:bg-[#09406a] transition-colors"
                              >
                                {s.ctaPrimary.label}
                                <svg width="14" height="14" viewBox="0 0 14.2 14.2" fill="none" stroke="currentColor" strokeWidth="1.2">
                                  <path d="M13.2 9V1h-8M13.4.8.7 13.5" />
                                  <path d="M13.2 9V1h-8M13.4.8.7 13.5" />
                                </svg>
                              </Link>
                              <Link
                                href={s.ctaSecondary.href}
                                className="tp-btn inline-flex items-center gap-2 rounded-full bg-[#525353] px-7 py-3 text-sm font-semibold text-white hover:bg-[#3f3f3f] transition-colors"
                              >
                                {s.ctaSecondary.label}
                                <svg width="14" height="14" viewBox="0 0 14.2 14.2" fill="none" stroke="currentColor" strokeWidth="1.2">
                                  <path d="M13.2 9V1h-8M13.4.8.7 13.5" />
                                  <path d="M13.2 9V1h-8M13.4.8.7 13.5" />
                                </svg>
                              </Link>
                            </div>
                          </div>
                        </div>
                      </>
                    )}
                  </div>
                </div>
              </div>
            ))}

            {/* Dots */}
            <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex items-center gap-2 z-10">
              {slides.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setActive(i)}
                  aria-label={`Go to slide ${i + 1}`}
                  className={`h-2 rounded-full transition-all ${i === active ? "w-8 bg-[#0c598f]" : "w-2 bg-gray-300 hover:bg-gray-400"}`}
                />
              ))}
            </div>

            {/* Arrows */}
            <button
              onClick={() => setActive((p) => (p - 1 + slides.length) % slides.length)}
              className="absolute left-4 top-1/2 -translate-y-1/2 hidden h-10 w-10 items-center justify-center rounded-full bg-white border border-gray-200 shadow hover:border-[#0c598f] hover:text-[#0c598f] lg:flex"
              aria-label="Previous"
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M15 18l-6-6 6-6" />
              </svg>
            </button>
            <button
              onClick={() => setActive((p) => (p + 1) % slides.length)}
              className="absolute right-4 top-1/2 -translate-y-1/2 hidden h-10 w-10 items-center justify-center rounded-full bg-white border border-gray-200 shadow hover:border-[#0c598f] hover:text-[#0c598f] lg:flex"
              aria-label="Next"
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M9 18l6-6-6-6" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
