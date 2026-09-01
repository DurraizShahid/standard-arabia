"use client";

import { useEffect, useRef, useState } from "react";

const MASTER_W = 1332;
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
      className="w-full max-w-[1332px] mx-auto"
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

        {/* z1: background artwork - original asset */}
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="/background.png"
          alt=""
          className="absolute pointer-events-none"
          style={{ left: 0, top: 0, width: MASTER_W, height: MASTER_H, objectFit: "cover", zIndex: 1 }}
          draggable={false}
        />

        {/* z1: also ensure background covers behind seal/signature/foil */}
        <div className="absolute inset-0 pointer-events-none" style={{ zIndex: 1, background: "rgba(255,255,255,0.0)" }} />

        {/* z5: website text - centered at 42, pale light blue */}
        <div
          className="absolute left-0 flex items-center justify-center"
          style={{ top: 42, width: MASTER_W, height: 34, zIndex: 5 }}
        >
          <span
            style={{
              fontFamily: "Arial, Helvetica, sans-serif",
              fontSize: 29,
              fontWeight: 400,
              letterSpacing: "12px",
              color: "#8fb3d9",
              lineHeight: "34px",
              textTransform: "lowercase",
            }}
          >
            www.standardarabia.com
          </span>
        </div>

        {/* z5: divider at y108, x21, w1268, h2 */}
        <div
          className="absolute bg-[#0e4a82]"
          style={{ left: 21, top: 108, width: 1268, height: 2, zIndex: 5 }}
        />

        {/* z5: legal paragraph at x23 y144 w1270, 7 lines */}
        <div
          className="absolute"
          style={{ left: 23, top: 144, width: 1270, zIndex: 5 }}
        >
          <p
            style={{
              fontFamily: '"Times New Roman", Times, serif',
              fontSize: 29,
              fontWeight: 700,
              color: "#000",
              lineHeight: "38px",
              letterSpacing: "0.01em",
              textAlign: "left",
            }}
          >
            This is not a Saudi Government License ID. It is valid only for equipment or training stated. This card certifies that the candidate has satisfactorily attended the course and authorized to practice the profession specified on the front of this card. This card does not release the operator from his duty with regards to the safe operation of the listed equipment. Use of this card by any person other than its recipient will be considered forgery and will be punishable by Law. Any liability occurring due to errors of judgement or negligence committed by the bearer of this card will not be the responsibility of the issuing agency.
          </p>
        </div>

        {/* z10: left circular seal at 35,438,270x270 */}
        <div
          className="absolute overflow-hidden"
          style={{ left: 35, top: 438, width: 270, height: 270, zIndex: 10 }}
        >
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/logo-back.png"
            alt="Standard Arabia Seal"
            style={{ width: 270, height: 270, objectFit: "contain" }}
            draggable={false}
          />
        </div>

        {/* z10: signature at 480,470,365x155 */}
        <div
          className="absolute flex items-center justify-center"
          style={{ left: 480, top: 470, width: 365, height: 155, zIndex: 10 }}
        >
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/signature.png"
            alt="Signature"
            style={{ width: 365, height: 155, objectFit: "contain" }}
            draggable={false}
          />
        </div>

        {/* z10: lower-right foil/hologram at 900,432,380x275 - use background's foil if present, else placeholder */}
        <div
          className="absolute overflow-hidden pointer-events-none"
          style={{ left: 900, top: 432, width: 380, height: 275, zIndex: 10, opacity: 0.95 }}
        >
          {/* If a dedicated foil asset exists, it would be used here. For now, the foil is part of background.png.
              Keeping this layer as a placeholder for the decorative element to ensure visual weight. */}
          <div
            style={{
              width: "100%",
              height: "100%",
              background: "radial-gradient(ellipse at center, rgba(14,74,130,0.18) 0%, rgba(0,59,112,0.08) 60%, transparent 75%)",
              borderRadius: "45% / 50%",
              border: "1px solid rgba(14,74,130,0.08)",
            }}
          />
        </div>

        {/* z20: COURSE DIRECTOR at center 660,635 */}
        <div
          className="absolute left-0 text-center"
          style={{ top: 635, width: MASTER_W, zIndex: 20 }}
        >
          <span
            style={{
              fontFamily: "Arial, Helvetica, sans-serif",
              fontSize: 34,
              fontWeight: 700,
              color: "#000",
              letterSpacing: "0.02em",
              lineHeight: "34px",
              textTransform: "uppercase",
            }}
          >
            COURSE DIRECTOR
          </span>
        </div>

        {/* z20: company name at 660,681 */}
        <div
          className="absolute left-0 text-center"
          style={{ top: 681, width: MASTER_W, zIndex: 20 }}
        >
          <span
            style={{
              fontFamily: "Arial, Helvetica, sans-serif",
              fontSize: 23,
              fontWeight: 700,
              color: "#000",
              letterSpacing: "0.02em",
              lineHeight: "23px",
              textTransform: "uppercase",
            }}
          >
            STANDARD ARABIA INSPECTION CO. LTD.
          </span>
        </div>

        {/* z30: footer at y728 h44 */}
        <div
          className="absolute left-0 flex items-center justify-center"
          style={{ top: 728, width: MASTER_W, height: 44, backgroundColor: "#003b70", zIndex: 30 }}
        >
          <span
            style={{
              fontFamily: "Arial, Helvetica, sans-serif",
              fontSize: 20,
              fontWeight: 500,
              color: "#fff",
              letterSpacing: "0.02em",
              lineHeight: "44px",
            }}
          >
            For any enquiries, please contact : T: +966-13-3670801 | F: +966-13-3670802
          </span>
        </div>

        {/* z1: SAMPLE watermark - keep subtle */}
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
