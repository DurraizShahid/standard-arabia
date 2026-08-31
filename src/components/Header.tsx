"use client";

import { useState, useEffect } from "react";
import Link from "next/link";

const servicesMega = [
  { title: "Third Party Inspection", href: "/third-party-inspection", img: "https://standardarabia.com/assets/img/services/Third-Party-Inspection.webp" },
  { title: "Lifting Equipment Inspection", href: "/lifting-equipment-inspection", img: "https://standardarabia.com/assets/img/services/lifting-equipment-inspection.webp" },
  { title: "Safety Training Services", href: "/safety-training", img: "https://standardarabia.com/assets/img/services/Safety-Training-Services.webp" },
  { title: "Operator Training & Assessment", href: "/operator-training", img: "https://standardarabia.com/assets/img/services/operator-training.webp" },
  { title: "Advanced & Conventional NDT", href: "/advanced-conventional", img: "https://standardarabia.com/assets/img/services/advanced-conventional.webp" },
  { title: "Marine Inspection Services", href: "/marine-testing", img: "https://standardarabia.com/assets/img/services/marine-testing.webp" },
  { title: "Calibration Service", href: "/calibration", img: "https://standardarabia.com/assets/img/services/calibration.webp" },
  { title: "Material Testing Laboratory", href: "/material-testing", img: "https://standardarabia.com/assets/img/services/material-testing.webp" },
  { title: "Rigging & Lifting Consultancy", href: "/rigging-lifting-consultancy", img: "https://standardarabia.com/assets/img/services/Rigging-Lifting-Consultancy-Services.webp" },
  { title: "IPAF Training MEWP's", href: "/ipaf-training", img: "https://standardarabia.com/assets/img/services/ipaf-training.webp" },
  { title: "ISO Audit & Certification", href: "/iso-audit", img: "https://standardarabia.com/assets/img/services/ISO-Audit-Certification-Consultancy.webp" },
  { title: "All Services", href: "/services", img: "https://standardarabia.com/assets/img/services/all-services.webp" },
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
  const [open, setOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);

  // lock scroll when offcanvas open
  useEffect(() => {
    if (open) document.body.style.overflow = "hidden";
    else document.body.style.overflow = "";
    return () => { document.body.style.overflow = ""; };
  }, [open]);

  return (
    <>
      {/* Fixed header spacer - offsets fixed height so hero is not hidden */}
      <div className="h-[97px] sm:h-[101px] shrink-0" aria-hidden />

      {/* Fixed top bar - carbon copy of .tp-sidebar-8-area */}
      <div className="fixed top-0 left-0 z-[98] w-full bg-[#f8f8f8]">
        {/* Desktop bar: visible sm+ (576px+) like original d-none d-sm-block */}
        <div className="hidden h-[101px] w-full items-center bg-[#f8f8f8] sm:flex">
          {/* Exact flex replica: logo | flex-1 spacer | vision | contact | verification | hamburger */}
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <Link href="/" className="ml-[25px] flex shrink-0 items-center">
            <img
              src="https://standardarabia.com/assets/img/logo1.webp"
              alt="Standard Arabia Inspection Co Ltd."
              className="h-[70px] w-[422px] object-contain max-[1200px]:h-[55px] max-[1200px]:w-[330px] max-[900px]:h-[47px] max-[900px]:w-[283px]"
            />
          </Link>

          {/* flex-1 spacer pushes right cluster to right, replicating original's large middle gap */}
          <div className="flex-1" />

          <div className="flex h-full shrink-0 items-center">
            {/* Vision 2030 */}
            <div className="flex h-full items-center px-[10px]">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="https://standardarabia.com/assets/img/Saudi_Vision_2030.webp"
                alt="Saudi Vision 2030"
                className="h-[69px] w-auto object-contain max-[1100px]:h-[55px]"
              />
            </div>

            {/* Contact Us - plain text tp-btn2 replica */}
            <div className="hidden h-full w-[155px] items-center justify-center lg:flex">
              <Link
                href="/contact"
                className="tp-btn tp-btn2 flex h-auto w-[150px] items-center justify-center rounded-[30px] px-10 py-[18px] text-center text-[16px] font-bold leading-6 hover:bg-[#0c598f] hover:!text-white"
                style={{ fontFamily: "var(--font-jakarta)" }}
              >
                Contact Us
              </Link>
            </div>

            {/* Verification - plain text tp-btn3 replica (red) */}
            <div className="hidden h-full w-[155px] items-center justify-center lg:flex">
              <Link
                href="/verification"
                className="tp-btn tp-btn3 flex h-auto w-[150px] items-center justify-center rounded-[30px] px-10 py-[18px] text-center text-[16px] font-bold leading-6 hover:bg-[#0c598f] hover:!text-white"
                style={{ fontFamily: "var(--font-jakarta)" }}
              >
                Verification
              </Link>
            </div>

            {/* Hamburger - exact replica .tp-sidebar-8-menu */}
            <div
              className="flex h-[101px] w-[115px] shrink-0 cursor-pointer items-center justify-center p-10 max-[900px]:w-[80px] max-[900px]:p-6"
              onClick={() => setOpen(true)}
              role="button"
              aria-label="Open menu"
            >
              <button className="hamburger-btn flex items-center justify-center" aria-label="Open menu" tabIndex={-1}>
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src="https://standardarabia.com/assets/img/icon/bradcrumb.svg"
                  alt="menu"
                  className="h-[18px] w-[24px] object-contain"
                />
              </button>
            </div>
          </div>
        </div>

        {/* Mobile bar: visible <sm (like original tp-header-area d-block d-sm-none) */}
        <div className="flex h-[97px] items-center justify-between bg-[#f8f8f8] px-4 sm:hidden">
          <Link href="/" className="flex items-center">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="https://standardarabia.com/assets/img/logo1.webp"
              alt="Standard Arabia Inspection Co Ltd."
              className="h-[47px] w-auto max-w-[283px] object-contain"
            />
          </Link>
          <button
            onClick={() => setOpen(true)}
            aria-label="Open menu"
            className="flex h-10 w-10 items-center justify-center"
          >
            {/* CSS hamburger (two lines) matching original mobile hamburger-btn spans */}
            <span className="relative block h-[14px] w-[22px]">
              <span className="absolute left-0 top-0 h-[2px] w-[22px] rounded-[3px] bg-black" />
              <span className="absolute left-0 top-[6px] h-[2px] w-[22px] rounded-[3px] bg-black" />
              <span className="absolute left-0 top-[12px] h-[2px] w-[16px] rounded-[3px] bg-black" />
            </span>
          </button>
        </div>
      </div>

      {/* Offcanvas overlay + panel - replicates .offcanvas__area */}
      {open && (
        <>
          <div
            className="fixed inset-0 z-[99] bg-black/40 backdrop-blur-sm"
            onClick={() => setOpen(false)}
            aria-hidden
          />
          <div className="fixed inset-y-0 right-0 z-[100] flex w-[86%] max-w-[380px] flex-col overflow-y-auto bg-white shadow-2xl">
            {/* Close button - replicates .offcanvas__close */}
            <div className="flex items-center justify-between border-b border-gray-100 px-6 py-5">
              <Link href="/" onClick={() => setOpen(false)}>
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src="https://standardarabia.com/assets/img/logo1.webp" alt="Standard Arabia" className="h-8 w-auto object-contain" />
              </Link>
              <button
                onClick={() => setOpen(false)}
                aria-label="Close menu"
                className="flex h-9 w-9 items-center justify-center rounded-full bg-gray-50 text-[#1F242C] hover:bg-gray-100"
              >
                <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                  <path d="M11 1L1 11M1 1l11 11" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                </svg>
              </button>
            </div>

            <nav className="flex-1 px-2 py-4">
              {navLinks.map((link) =>
                link.hasDropdown ? (
                  <div key={link.label}>
                    <button
                      onClick={() => setServicesOpen(!servicesOpen)}
                      className="flex w-full items-center justify-between rounded-xl px-4 py-3 text-sm font-medium text-[#1F242C] hover:bg-gray-50"
                    >
                      {link.label}
                      <svg
                        className={`h-3 w-3 transition-transform ${servicesOpen ? "rotate-180" : ""}`}
                        fill="none"
                        viewBox="0 0 12 12"
                      >
                        <path d="M2 4l4 4 4-4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    </button>
                    {servicesOpen && (
                      <div className="mx-2 mb-2 grid grid-cols-1 gap-2 rounded-xl bg-gray-50 p-3">
                        {servicesMega.map((s) => (
                          <Link
                            key={s.title}
                            href={s.href}
                            onClick={() => setOpen(false)}
                            className="flex items-center gap-3 rounded-lg bg-white p-2 hover:bg-white hover:shadow-sm"
                          >
                            {/* eslint-disable-next-line @next/next/no-img-element */}
                            <img src={s.img} alt={s.title} className="h-10 w-14 rounded object-cover bg-gray-50" />
                            <span className="text-xs font-semibold leading-tight text-[#1F242C]">{s.title}</span>
                          </Link>
                        ))}
                      </div>
                    )}
                  </div>
                ) : (
                  <Link
                    key={link.label}
                    href={link.href}
                    onClick={() => setOpen(false)}
                    className={`flex items-center justify-between rounded-xl px-4 py-3 text-sm font-medium transition-colors ${
                      link.accent ? "text-[#ff0000] hover:bg-red-50" : "text-[#1F242C] hover:bg-gray-50"
                    }`}
                  >
                    {link.label}
                  </Link>
                )
              )}

              {/* Contact / Verification inside drawer for mobile - matches original offcanvas extra buttons */}
              <div className="mt-6 flex gap-3 px-4">
                <Link
                  href="/contact"
                  onClick={() => setOpen(false)}
                  className="flex flex-1 items-center justify-center rounded-full bg-[#0c598f] py-3 text-sm font-semibold text-white hover:bg-[#09406a]"
                >
                  Contact Us
                </Link>
                <Link
                  href="/verification"
                  onClick={() => setOpen(false)}
                  className="flex flex-1 items-center justify-center rounded-full border border-[#ff0000] py-3 text-sm font-semibold text-[#ff0000] hover:bg-red-50"
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
