"use client";

import { useState } from "react";
import Link from "next/link";

const servicesMega = [
  {
    title: "Third Party Inspection",
    href: "/third-party-inspection",
    img: "https://standardarabia.com/assets/img/services/Third-Party-Inspection.webp",
  },
  {
    title: "Lifting Equipment Inspection",
    href: "/lifting-equipment-inspection",
    img: "https://standardarabia.com/assets/img/services/lifting-equipment-inspection.webp",
  },
  {
    title: "Safety Training Services",
    href: "/safety-training",
    img: "https://standardarabia.com/assets/img/services/Safety-Training-Services.webp",
  },
  {
    title: "Operator Training & Assessment",
    href: "/operator-training",
    img: "https://standardarabia.com/assets/img/services/operator-training.webp",
  },
  {
    title: "Advanced & Conventional NDT",
    href: "/advanced-conventional",
    img: "https://standardarabia.com/assets/img/services/advanced-conventional.webp",
  },
  {
    title: "Marine Inspection Services",
    href: "/marine-testing",
    img: "https://standardarabia.com/assets/img/services/marine-testing.webp",
  },
  {
    title: "Calibration Service",
    href: "/calibration",
    img: "https://standardarabia.com/assets/img/services/calibration.webp",
  },
  {
    title: "Material Testing Laboratory",
    href: "/material-testing",
    img: "https://standardarabia.com/assets/img/services/material-testing.webp",
  },
  {
    title: "Rigging & Lifting Consultancy",
    href: "/rigging-lifting-consultancy",
    img: "https://standardarabia.com/assets/img/services/Rigging-Lifting-Consultancy-Services.webp",
  },
  {
    title: "IPAF Training MEWP's",
    href: "/ipaf-training",
    img: "https://standardarabia.com/assets/img/services/ipaf-training.webp",
  },
  {
    title: "ISO Audit & Certification",
    href: "/iso-audit",
    img: "https://standardarabia.com/assets/img/services/ISO-Audit-Certification-Consultancy.webp",
  },
  {
    title: "All Services",
    href: "/services",
    img: "https://standardarabia.com/assets/img/services/all-services.webp",
  },
];

const navLinks = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Services", href: "/services", hasDropdown: true },
  { label: "Accreditations", href: "/accreditation" },
  { label: "News & Feeds", href: "/news" },
  { label: "Contact", href: "/contact" },
  { label: "Verification", href: "/verification", accent: true },
];

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);

  return (
    <>
      {/* Top header */}
      <header className="sticky top-0 z-50 w-full bg-white border-b border-gray-100">
        {/* Upper bar */}
        <div className="border-b border-gray-100/80">
          <div className="mx-auto max-w-[1400px] px-4 sm:px-6 lg:px-8">
            <div className="flex h-[72px] items-center justify-between gap-4">
              {/* Left: Logo */}
              <Link href="/" className="flex items-center gap-3 shrink-0">
                {/* Arabic + English logo replica */}
                <div className="flex flex-col leading-none">
                  <span className="text-[11px] sm:text-[13px] font-bold tracking-wide text-[#0c598f]" style={{ fontFamily: "var(--font-jakarta)" }}>
                    شركة معيار العربية للفحص
                  </span>
                  <span className="text-[11px] sm:text-xs font-semibold text-[#0c598f] flex items-center gap-1.5">
                    Standard Arabia
                    <span className="font-normal text-[#525353] hidden sm:inline">
                      Inspection Co Ltd.
                    </span>
                  </span>
                  <span className="text-[10px] text-[#525353] sm:hidden">Inspection Co Ltd.</span>
                </div>
                <div className="hidden sm:flex h-8 w-8 items-center justify-center rounded-full bg-[#0c598f] text-white">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M14.5 17.5L19 22l-1.5 1.5L14.5 17.5z" />
                    <circle cx="11" cy="11" r="6" />
                    <path d="M11 8a3 3 0 100 6 3 3 0 000-6z" />
                  </svg>
                </div>
              </Link>

              {/* Center: Vision 2030 + Desktop Nav */}
              <div className="hidden items-center gap-6 lg:flex">
                <img
                  src="https://standardarabia.com/assets/img/Saudi_Vision_2030.webp"
                  alt="Saudi Vision 2030"
                  className="h-10 w-auto object-contain"
                />
                <nav className="flex items-center gap-1">
                  {navLinks.map((link) =>
                    link.hasDropdown ? (
                      <div key={link.label} className="relative" onMouseEnter={() => setServicesOpen(true)} onMouseLeave={() => setServicesOpen(false)}>
                        <Link
                          href={link.href}
                          className="flex items-center gap-1 px-3 py-2 text-sm font-medium text-[#1F242C] hover:text-[#0c598f] transition-colors"
                        >
                          {link.label}
                          <svg className={`h-3 w-3 transition-transform ${servicesOpen ? "rotate-180" : ""}`} fill="none" viewBox="0 0 12 12">
                            <path d="M2 4l4 4 4-4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                          </svg>
                        </Link>
                        {/* Mega dropdown */}
                        {servicesOpen && (
                          <div className="absolute left-1/2 top-full z-50 mt-2 w-[860px] -translate-x-1/2 rounded-2xl border border-gray-100 bg-white p-6 shadow-2xl">
                            <div className="grid grid-cols-4 gap-4">
                              {servicesMega.map((s) => (
                                <Link
                                  key={s.title}
                                  href={s.href}
                                  className="group rounded-xl border border-gray-100 p-3 hover:border-[#0c598f]/20 hover:bg-[#f8fafc] transition-all"
                                >
                                  <div className="aspect-[4/3] overflow-hidden rounded-lg bg-gray-50 mb-3">
                                    {/* eslint-disable-next-line @next/next/no-img-element */}
                                    <img src={s.img} alt={s.title} className="h-full w-full object-cover group-hover:scale-105 transition-transform duration-300" />
                                  </div>
                                  <p className="text-xs font-semibold leading-tight text-[#1F242C] group-hover:text-[#0c598f]">{s.title}</p>
                                </Link>
                              ))}
                            </div>
                          </div>
                        )}
                      </div>
                    ) : (
                      <Link
                        key={link.label}
                        href={link.href}
                        className={`px-3 py-2 text-sm font-medium transition-colors ${
                          link.accent ? "text-[#eb003d] hover:text-[#c20032]" : "text-[#1F242C] hover:text-[#0c598f]"
                        }`}
                      >
                        {link.label}
                      </Link>
                    )
                  )}
                </nav>
              </div>

              {/* Right: CTA + actions */}
              <div className="flex items-center gap-2 sm:gap-4">
                <div className="hidden items-center gap-4 sm:flex">
                  <Link href="/contact" className="text-sm font-semibold text-[#1F242C] hover:text-[#0c598f] transition-colors">
                    Contact Us
                  </Link>
                  <Link href="/verification" className="text-sm font-semibold text-[#eb003d] hover:text-[#c20032] transition-colors">
                    Verification
                  </Link>
                </div>

                {/* Icons */}
                <div className="hidden items-center gap-2 text-[#1F242C] sm:flex">
                  <button aria-label="Search" className="flex h-9 w-9 items-center justify-center rounded-full hover:bg-gray-50 transition-colors">
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
                      <circle cx="11" cy="11" r="7" />
                      <path d="M20 20l-3.5-3.5" />
                    </svg>
                  </button>
                  <button aria-label="Cart" className="flex h-9 w-9 items-center justify-center rounded-full hover:bg-gray-50 transition-colors">
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
                      <path d="M6 6h15l-1.5 9h-13z" />
                      <path d="M6 6L5 2H2" />
                      <circle cx="9" cy="20" r="1.5" />
                      <circle cx="18" cy="20" r="1.5" />
                    </svg>
                  </button>
                </div>

                {/* Hamburger */}
                <button
                  onClick={() => setMobileOpen(!mobileOpen)}
                  aria-label="Toggle menu"
                  className="flex h-10 w-10 items-center justify-center rounded-full text-[#0c598f] hover:bg-gray-50 lg:hidden"
                >
                  {mobileOpen ? (
                    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M18 6L6 18M6 6l12 12" />
                    </svg>
                  ) : (
                    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M4 6h16M8 12h12M4 18h16" />
                    </svg>
                  )}
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Secondary service strip - visible only desktop, matches original service-nav? */}
        <div className="hidden border-b border-gray-50 bg-[#fcfcfc] lg:block">
          <div className="mx-auto max-w-[1400px] px-4 sm:px-6 lg:px-8">
            <div className="flex items-center justify-center gap-1 py-2">
              {servicesMega.slice(0, 8).map((s) => (
                <Link
                  key={s.title}
                  href={s.href}
                  className="rounded-full px-3 py-1.5 text-xs font-medium text-[#565969] hover:bg-white hover:text-[#0c598f] hover:shadow-sm transition-all border border-transparent hover:border-gray-100"
                >
                  {s.title}
                </Link>
              ))}
              <Link href="/services" className="ml-2 rounded-full bg-[#0c598f] px-4 py-1.5 text-xs font-semibold text-white hover:bg-[#09406a] transition-colors">
                All Services →
              </Link>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile drawer */}
      {mobileOpen && (
        <>
          <div className="fixed inset-0 z-40 bg-black/40 backdrop-blur-sm lg:hidden" onClick={() => setMobileOpen(false)} />
          <div className="fixed inset-y-0 right-0 z-50 w-[86%] max-w-[360px] bg-white shadow-2xl lg:hidden overflow-y-auto">
            <div className="flex items-center justify-between border-b border-gray-100 px-6 py-4">
              <span className="text-sm font-bold text-[#0c598f]">Menu</span>
              <button onClick={() => setMobileOpen(false)} className="flex h-9 w-9 items-center justify-center rounded-full bg-gray-50 text-[#1F242C]">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M18 6L6 18M6 6l12 12" />
                </svg>
              </button>
            </div>
            <nav className="px-2 py-4">
              {navLinks.map((link) => (
                <Link
                  key={link.label}
                  href={link.href}
                  onClick={() => setMobileOpen(false)}
                  className={`flex items-center justify-between rounded-xl px-4 py-3 text-sm font-medium transition-colors ${
                    link.accent ? "text-[#eb003d] bg-red-50" : "text-[#1F242C] hover:bg-gray-50"
                  }`}
                >
                  {link.label}
                  {link.hasDropdown && <span className="text-xs text-gray-400">›</span>}
                </Link>
              ))}
              <div className="mt-4 border-t border-gray-100 pt-4">
                <p className="px-4 mb-2 text-xs font-semibold uppercase tracking-wider text-gray-400">Services</p>
                {servicesMega.map((s) => (
                  <Link
                    key={s.title}
                    href={s.href}
                    onClick={() => setMobileOpen(false)}
                    className="flex items-center gap-3 rounded-xl px-4 py-2.5 hover:bg-gray-50 transition-colors"
                  >
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img src={s.img} alt="" className="h-10 w-14 rounded-lg object-cover bg-gray-50" />
                    <span className="text-sm font-medium text-[#1F242C] leading-tight">{s.title}</span>
                  </Link>
                ))}
              </div>
              <div className="mt-6 px-4 flex gap-3">
                <Link
                  href="/contact"
                  onClick={() => setMobileOpen(false)}
                  className="flex-1 rounded-full bg-[#0c598f] py-3 text-center text-sm font-semibold text-white hover:bg-[#09406a]"
                >
                  Contact Us
                </Link>
                <Link
                  href="/verification"
                  onClick={() => setMobileOpen(false)}
                  className="flex-1 rounded-full border border-[#eb003d] py-3 text-center text-sm font-semibold text-[#eb003d] hover:bg-red-50"
                >
                  Verification
                </Link>
              </div>
            </nav>
          </div>
        </>
      )}
    </>
  );
}
