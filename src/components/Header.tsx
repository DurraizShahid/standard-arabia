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

      {/* Offcanvas - 1:1 replica of original .offcanvas__area + .body-overlay */}
      {open && (
        <>
          {/* body-overlay - fixed black 0.7 z 99 */}
          <div
            className="body-overlay opened fixed inset-0 z-[99] bg-black opacity-70"
            style={{ transition: "0.3s ease-out" }}
            onClick={() => setOpen(false)}
            aria-hidden
          />
          {/* offcanvas__area - fixed full viewport white, transform slide, z 999 */}
          <div
            className="offcanvas__area offcanvas-opened fixed inset-0 z-[999] overflow-y-auto bg-white"
            style={{
              transform: "translateX(0)",
              transition: "all 0.4s ease-in-out",
              scrollbarWidth: "none",
            }}
          >
            {/* offcanvas__wrapper - padding 40 0 0 40 (original) */}
            <div className="offcanvas__wrapper min-h-full pt-[40px] pl-[40px] max-[575px]:p-[30px]">
              {/* offcanvas__close-btn - absolute top 10 right 40, 40x40 bg #0c598f */}
              <button
                onClick={() => setOpen(false)}
                aria-label="Close menu"
                className="offcanvas__close-btn offcanvas-close-btn absolute right-10 top-[10px] flex h-10 w-10 items-center justify-center bg-[#0c598f] leading-10 text-white transition-all hover:rotate-45 max-[575px]:right-[30px] max-[575px]:top-10"
              >
                <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M11 1L1 11" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                  <path d="M1 1L11 11" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </button>

              <div className="offcanvas__content">
                {/* Top spacer - 20px like original */}
                <div className="offcanvas__top mb-[20px]" />

                {/* tp-main-menu-mobile fix */}
                <div className="tp-main-menu-mobile fix">
                  <nav className="tp-main-menu-content flex">
                    {/* main-nav - LEFT PANE: fixed 274px like original (fixed at 40,60) */}
                    <ul className="main-nav block w-[274px] shrink-0 px-[30px] max-[767px]:w-[75%] max-[767px]:px-0 max-[575px]:w-full">
                      {/* logo inside nav */}
                      <div>
                        <a href="/">
                          {/* eslint-disable-next-line @next/next/no-img-element */}
                          <img
                            src="https://standardarabia.com/assets/img/logo.webp"
                            width={150}
                            alt="Standard Arabia Approved Training Center"
                            className="h-auto w-[150px] object-contain"
                          />
                        </a>
                      </div>
                      {navLinks.map((link) => (
                        <li
                          key={link.label}
                          className={`relative ${link.accent ? "ver-btn mt-5 bg-[#0c598f] text-center" : ""}`}
                          style={{
                            padding: link.accent ? "0 0 0 35px" : "0 0 0 35px",
                            height: link.accent ? "60px" : "45px",
                            lineHeight: link.accent ? "40px" : "24px",
                          }}
                        >
                          <Link
                            href={link.href}
                            onClick={() => setOpen(false)}
                            className={`block py-[10px] pr-5 text-[16px] transition-colors ${
                              link.accent
                                ? "font-semibold text-white text-center"
                                : "font-normal text-[#17609c] hover:text-[#0c598f]"
                            }`}
                            style={{ fontFamily: link.accent ? '"Plus Jakarta Sans", sans-serif' : undefined }}
                          >
                            <span>{link.label}</span>
                          </Link>
                        </li>
                      ))}
                    </ul>

                    {/* service-nav - RIGHT PANE: 3-col grid, hidden on <768 like original */}
                    <div className="service-nav hidden flex-1 pl-10 md:block">
                      <div className="tp-submenu submenu has-homemenu">
                        <div className="grid grid-cols-2 gap-0 xl:grid-cols-3">
                          {servicesMega.map((s) => (
                            <div key={s.title} className="homemenu relative mb-5 px-[10px]">
                              <div className="homemenu-thumb relative mb-3 overflow-hidden border border-[rgba(185,182,182,0.44)] shadow-[0_1px_2px_rgba(149,157,165,0.28)]">
                                {/* eslint-disable-next-line @next/next/no-img-element */}
                                <img src={s.img} alt={s.title} className="w-full object-cover" />
                                <div className="homemenu-btn absolute inset-0 flex -translate-y-1/2 flex-col items-center justify-center text-center opacity-100 visible" style={{ top: "50%" }}>
                                  <a
                                    href={s.href}
                                    onClick={() => setOpen(false)}
                                    className="menu-btn show-1 inline-block w-[250px] rounded-[11px] border border-white/70 bg-[#0C2C4E9E] p-[23px] text-center font-['Montserrat',sans-serif] text-[14px] font-semibold leading-[1.2] text-white"
                                  >
                                    {s.title}
                                  </a>
                                </div>
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </nav>

                  {/* Mobile services (when service-nav hidden) - show as expandable list */}
                  <div className="mt-4 lg:hidden">
                    <button
                      onClick={() => setServicesOpen(!servicesOpen)}
                      className="flex w-full items-center justify-between px-[30px] py-3 text-[16px] font-normal text-[#17609c]"
                    >
                      Services
                      <svg className={`h-3 w-3 transition-transform ${servicesOpen ? "rotate-180" : ""}`} fill="none" viewBox="0 0 12 12">
                        <path d="M2 4l4 4 4-4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    </button>
                    {servicesOpen && (
                      <div className="grid grid-cols-1 gap-3 px-[30px] pb-4">
                        {servicesMega.map((s) => (
                          <Link
                            key={s.title}
                            href={s.href}
                            onClick={() => setOpen(false)}
                            className="flex items-center gap-3 rounded-lg border border-gray-100 p-2"
                          >
                            {/* eslint-disable-next-line @next/next/no-img-element */}
                            <img src={s.img} alt={s.title} className="h-12 w-16 rounded object-cover" />
                            <span className="text-sm font-semibold text-[#1F242C]">{s.title}</span>
                          </Link>
                        ))}
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </>
      )}
    </>
  );
}
