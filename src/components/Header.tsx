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
              {/* Left: Logo - carbon copy using actual assets */}
              <Link href="/" className="flex items-center gap-3 shrink-0">
                <img
                  src="https://standardarabia.com/assets/img/logo1.webp"
                  alt="Standard Arabia modern Inspection and training solutions"
                  className="h-9 sm:h-10 w-auto object-contain"
                />
                <img
                  src="https://standardarabia.com/assets/img/logo.webp"
                  alt="Standard Arabia, Saudi Arabia Approved Training Center"
                  className="hidden lg:block h-10 w-auto object-contain"
                />
              </Link>

              {/* Center: Desktop Nav - carbon copy matches original <ul class="main-nav"> with logo.webp 150px as first item */}
              <div className="hidden items-center gap-2 lg:flex">
                <nav className="flex items-center">
                  <Link href="/" className="mr-1">
                    <img
                      src="https://standardarabia.com/assets/img/logo.webp"
                      alt="Standard Arabia Approved Training Center"
                      width={150}
                      className="h-10 w-[150px] object-contain hidden xl:block"
                    />
                  </Link>
                  <div className="flex items-center gap-0">
                    {navLinks.map((link) =>
                      link.hasDropdown ? (
                        <div
                          key={link.label}
                          className="relative"
                          onMouseEnter={() => setServicesOpen(true)}
                          onMouseLeave={() => setServicesOpen(false)}
                        >
                          <Link
                            href={link.href}
                            className="flex items-center gap-1 px-2.5 py-2 text-[13px] font-medium text-[#1F242C] hover:text-[#0c598f] transition-colors whitespace-nowrap"
                          >
                            {link.label}
                            <svg className={`h-3 w-3 transition-transform ${servicesOpen ? "rotate-180" : ""}`} fill="none" viewBox="0 0 12 12">
                              <path d="M2 4l4 4 4-4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                            </svg>
                          </Link>
                          {servicesOpen && (
                            <div className="absolute left-1/2 top-full z-50 mt-2 w-[860px] -translate-x-1/2 rounded-[22px] border border-gray-100 bg-white p-6 shadow-2xl" style={{ borderRadius: "22px 2px 68px 2px" }}>
                              <div className="grid grid-cols-3 gap-4">
                                {servicesMega.map((s) => (
                                  <Link
                                    key={s.title}
                                    href={s.href}
                                    className="group relative overflow-hidden rounded-xl border border-gray-100 bg-white p-3 hover:border-[#0c598f]/20 hover:bg-[#f8fafc] transition-all"
                                  >
                                    <div className="aspect-[16/10] overflow-hidden rounded-lg bg-gray-50 mb-2">
                                      {/* eslint-disable-next-line @next/next/no-img-element */}
                                      <img src={s.img} alt={s.title} className="h-full w-full object-cover group-hover:scale-105 transition-transform duration-500" />
                                    </div>
                                    <p className="text-xs font-semibold leading-tight text-[#1F242C] group-hover:text-[#0c598f] line-clamp-2">{s.title}</p>
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
                          className={`px-2.5 py-2 text-[13px] font-medium transition-colors whitespace-nowrap ${
                            link.accent ? "text-[#eb003d] hover:text-[#c20032]" : "text-[#1F242C] hover:text-[#0c598f]"
                          }`}
                        >
                          {link.label}
                        </Link>
                      )
                    )}
                  </div>
                </nav>
              </div>

              {/* Right: CTA + actions - carbon copy */}
              <div className="flex items-center gap-3 sm:gap-4">
                <img
                  src="https://standardarabia.com/assets/img/Saudi_Vision_2030.webp"
                  alt="Saudi Vision 2030"
                  className="hidden md:block h-9 w-auto object-contain"
                />
                <div className="hidden items-center gap-3 lg:flex">
                  <Link
                    href="/contact"
                    className="hidden md:inline-flex items-center justify-center rounded-full bg-[#0c598f] px-5 py-2.5 text-sm font-semibold text-white hover:bg-[#09406a] transition-colors shadow-sm"
                  >
                    Contact Us
                  </Link>
                  <Link
                    href="/verification"
                    className="hidden md:inline-flex items-center justify-center rounded-full border border-[#0c598f] bg-white px-5 py-2.5 text-sm font-semibold text-[#0c598f] hover:bg-[#f0f7ff] transition-colors"
                  >
                    Verification
                  </Link>
                </div>

                {/* Header icons - original has Vision + Contact + Verification + hamburger with bradcrumb.svg */}
                <div className="hidden items-center gap-2 text-[#1F242C] md:flex">
                  <span className="text-gray-300">|</span>
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

                {/* Hamburger - carbon: uses bradcrumb.svg on desktop */}
                <button
                  onClick={() => setMobileOpen(!mobileOpen)}
                  aria-label="Toggle menu"
                  className="flex h-10 w-10 items-center justify-center rounded-lg hover:bg-gray-50 lg:hidden"
                >
                  {mobileOpen ? (
                    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M18 6L6 18M6 6l12 12" />
                    </svg>
                  ) : (
                    <img src="https://standardarabia.com/assets/img/icon/bradcrumb.svg" alt="menu" className="h-5 w-5 object-contain" />
                  )}
                </button>
                {/* Desktop hamburger visible like original offcanvas-open-btn */}
                <button
                  onClick={() => setMobileOpen(!mobileOpen)}
                  aria-label="Toggle menu"
                  className="hidden lg:flex h-10 w-10 items-center justify-center rounded-lg hover:bg-gray-50"
                >
                  <img src="https://standardarabia.com/assets/img/icon/bradcrumb.svg" alt="menu" className="h-5 w-5 object-contain" />
                </button>
              </div>
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
