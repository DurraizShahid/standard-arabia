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

        {/* z20: header - centered www.standardarabia.com like reference */}
        <div className="absolute left-0 top-0" style={{ width: MASTER_W, height: 194, zIndex: 20 }}>
          <div className="absolute flex items-center justify-center" style={{ left: 0, top: 85, width: MASTER_W, height: 40, zIndex: 20 }}>
            <span
              style={{
                fontFamily: "Arial, Helvetica, sans-serif",
                fontSize: 32,
                fontWeight: 300,
                letterSpacing: "0.38em",
                color: "#AEC6E0",
                lineHeight: "32px",
              }}
            >
              www.standardarabia.com
            </span>
          </div>
          <div
            className="absolute bg-[#0e4a82]"
            style={{ left: 28, right: 28, top: 191, height: 3, borderRadius: 1, zIndex: 20 }}
          />
        </div>

        {/* Back content - disclaimer right below separator - 26px as requested */}
        <div
          className="absolute"
          style={{ left: 28, right: 28, top: 210, zIndex: 20 }}
        >
          <p
            style={{
              fontFamily: '"Times New Roman", Times, serif',
              fontSize: 26,
              fontWeight: 400,
              color: "#000",
              lineHeight: "32px",
              letterSpacing: "0.01em",
              textAlign: "justify",
              textJustify: "inter-word",
              hyphens: "auto",
            }}
          >
            This is not a Saudi Government License ID. It is valid only for equipment or training stated. This card certifies that the candidate has satisfactorily attended the course and authorized to practice the profession specified on the front of this card. This card does not release the operator from his duty with regards to the safe operation of the listed equipment. Use of this card by any person other than its recipient will be considered forgery and will be punishable by Law. Any liability occurring due to errors of judgement or negligence committed by the bearer of this card will not be the responsibility of the issuing agency.
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
