"use client";

import { useEffect, useRef, useState } from "react";

const MASTER_W = 1327;
const MASTER_H = 772;

type CandidateCardBackProps = {
  isDemo?: boolean;
};

export function CandidateCardBack({ isDemo = true }: CandidateCardBackProps) {
  const wrapperRef = useRef<HTMLDivElement>(null);
  const [scale, setScale] = useState(1);

  useEffect(() => {
    const update = () => {
      if (wrapperRef.current) {
        const w = wrapperRef.current.clientWidth;
        setScale(Math.min(w / MASTER_W, 1));
      }
    };
    update();
    const ro = new ResizeObserver(update);
    if (wrapperRef.current) ro.observe(wrapperRef.current);
    window.addEventListener("resize", update);
    return () => {
      ro.disconnect();
      window.removeEventListener("resize", update);
    };
  }, []);

  return (
    <div
      ref={wrapperRef}
      className="w-full max-w-[1327px] mx-auto"
      style={{ height: MASTER_H * scale }}
    >
      <div
        id="candidate-card-back-capture"
        className="relative bg-white overflow-hidden select-none"
        style={{
          width: MASTER_W,
          height: MASTER_H,
          transform: `scale(${scale})`,
          transformOrigin: "top left",
        }}
      >
        {/* z0: base */}
        <div className="absolute inset-0 bg-white" style={{ zIndex: 0 }} />

        {/* z1: background - same as front */}
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="/background.png"
          alt=""
          className="absolute pointer-events-none"
          style={{ left: 0, top: 0, width: MASTER_W, height: MASTER_H, objectFit: "cover", zIndex: 1 }}
          draggable={false}
        />

        {/* z20: header with divider - same as front for visual consistency */}
        <div className="absolute left-0 top-0" style={{ width: MASTER_W, height: 194, zIndex: 20 }}>
          <div className="absolute" style={{ left: 48, top: 50, width: 482, height: 127, zIndex: 20 }}>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/logo-f.png"
              alt="Standard Arabia"
              style={{ width: "100%", height: "100%", objectFit: "contain", objectPosition: "left center" }}
              draggable={false}
            />
          </div>
          <div
            className="absolute bg-[#0e4a82]"
            style={{ left: 28, right: 28, top: 191, height: 3, borderRadius: 1, zIndex: 20 }}
          />
        </div>

        {/* Back content placeholder - awaiting instructions */}
        <div
          className="absolute left-0 flex items-center justify-center"
          style={{ top: 320, width: MASTER_W, height: 200, zIndex: 20 }}
        >
          <p
            style={{
              fontFamily: "'Arial Narrow', 'Roboto Condensed', sans-serif",
              fontSize: 28,
              fontWeight: 600,
              color: "#0C2F54",
              letterSpacing: "0.08em",
            }}
          >
            BACK SIDE — AWAITING INSTRUCTIONS
          </p>
        </div>

        {/* SAMPLE watermark */}
        {isDemo && (
          <div
            className="absolute inset-0 flex items-center justify-center pointer-events-none"
            style={{ opacity: 0.07, zIndex: 1, transform: "rotate(-18deg)" }}
          >
            <span
              style={{
                fontFamily: "'Arial Black', sans-serif",
                fontSize: 140,
                fontWeight: 900,
                color: "#0e4a82",
                letterSpacing: "0.12em",
              }}
            >
              SAMPLE
            </span>
          </div>
        )}
      </div>
    </div>
  );
}
