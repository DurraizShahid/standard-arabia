"use client";

import { useEffect, useRef, useState } from "react";
import { QRCodeSVG } from "qrcode.react";

type CandidateCardProps = {
  name: string;
  iqamaNo: string;
  courseName: string;
  modelLevel: string;
  cardNo: string;
  issuedDate: string; // YYYY-MM-DD
  expiryDate: string; // YYYY-MM-DD
  photo: string; // base64 data URL or empty
  isDemo?: boolean;
};

function formatDDMMYYYY(d: string): string {
  const s = String(d).slice(0, 10);
  const [y, m, day] = s.split("-");
  if (!y || !m || !day) return s;
  return `${day}-${m}-${y}`;
}

const MASTER_W = 1327;
const MASTER_H = 772;

export function CandidateCard({
  name,
  iqamaNo,
  courseName,
  modelLevel,
  cardNo,
  issuedDate,
  expiryDate,
  photo,
  isDemo = true,
}: CandidateCardProps) {
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

  const displayModel = modelLevel && modelLevel.trim() ? modelLevel.trim() : "N/A";
  const displayPhoto = photo || "";

  const demoCardNo = isDemo ? (cardNo || "SA-TNG-DEMO") : cardNo;
  const demoName = isDemo ? (name || "SAMPLE PERSON NAME") : name;
  const demoIqama = isDemo ? (iqamaNo || "0000000000") : iqamaNo;
  const demoQRValue = `DEMO:${demoCardNo}|${demoName}|${demoIqama}`;

  return (
    <div
      ref={wrapperRef}
      className="w-full max-w-[1327px] mx-auto"
      style={{ height: MASTER_H * scale }}
    >
      <div
        id="candidate-card-capture"
        className="relative bg-white overflow-hidden select-none"
        style={{
          width: MASTER_W,
          height: MASTER_H,
          transform: `scale(${scale})`,
          transformOrigin: "top left",
          fontFamily: "var(--font-jakarta), Arial, sans-serif",
        }}
      >
        {/* z0: base white */}
        <div className="absolute inset-0 bg-white" style={{ zIndex: 0 }} />

        {/* z1: background artwork - original asset, NEGATIVE: must be behind text */}
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="/background.png"
          alt=""
          className="absolute pointer-events-none"
          style={{ left: 0, top: 0, width: MASTER_W, height: MASTER_H, objectFit: "cover", zIndex: 1 }}
          draggable={false}
        />

        {/* z1: repeating pale text watermark */}
        <div
          className="absolute left-0 right-0 overflow-hidden pointer-events-none"
          style={{ top: 200, bottom: 80, opacity: 0.22, zIndex: 1 }}
        >
          <div
            className="absolute inset-0 flex flex-wrap content-start gap-x-6 gap-y-2 px-4 py-2"
            style={{ transform: "rotate(-1.2deg) scale(1.05)", transformOrigin: "center" }}
          >
            {Array.from({ length: 80 }).map((_, i) => (
              <span
                key={i}
                className="whitespace-nowrap leading-none text-[#b8b9bb]"
                style={{
                  fontFamily: "'Arial Narrow', 'Liberation Sans Narrow', 'Roboto Condensed', sans-serif",
                  fontSize: 13,
                  fontWeight: 400,
                  letterSpacing: "0.02em",
                }}
              >
                {i % 2 === 0 ? demoName.toUpperCase() : demoIqama} &nbsp; {demoIqama}
              </span>
            ))}
          </div>
        </div>

        {/* z1: SAMPLE watermark */}
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

        {/* z20: HEADER */}
        <div className="absolute left-0 top-0" style={{ width: MASTER_W, height: 194, zIndex: 20 }}>
          {/* Logo group: x48 y50 right530 bottom177 => w482 h127 */}
          <div className="absolute" style={{ left: 48, top: 50, width: 482, height: 127, zIndex: 20 }}>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/logo-f.png"
              alt="Standard Arabia"
              style={{ width: "100%", height: "100%", objectFit: "contain", objectPosition: "left center" }}
              draggable={false}
            />
          </div>

          {/* Card No: upper-right, large black condensed */}
          <div className="absolute text-right" style={{ right: 42, top: 48, width: 520, height: 42, zIndex: 20 }}>
            <span
              style={{
                fontFamily: "'Arial Narrow', 'Roboto Condensed', 'Helvetica Condensed', sans-serif",
                fontSize: 36,
                fontWeight: 700,
                fontStretch: "condensed",
                letterSpacing: "0.02em",
                color: "#000",
                lineHeight: "42px",
              }}
            >
              CARD NO : {demoCardNo}
            </span>
          </div>

          {/* Divider: y191-194 */}
          <div
            className="absolute bg-[#0e4a82]"
            style={{ left: 28, right: 28, top: 191, height: 3, borderRadius: 1, zIndex: 20 }}
          />
        </div>

        {/* z10: PHOTO x45 y235 w283 h325 */}
        <div
          className="absolute bg-white overflow-hidden"
          style={{ left: 45, top: 235, width: 283, height: 325, zIndex: 10 }}
        >
          {displayPhoto ? (
            // eslint-disable-next-line @next/next/no-img-element
            <img
              src={displayPhoto}
              alt={demoName}
              style={{ width: "100%", height: "100%", objectFit: "cover", objectPosition: "top center" }}
              draggable={false}
            />
          ) : (
            <div className="flex h-full w-full items-center justify-center bg-white">
              <span
                style={{
                  fontFamily: "Arial, sans-serif",
                  fontSize: 13,
                  fontWeight: 600,
                  color: "#9ca3af",
                  letterSpacing: "0.05em",
                }}
              >
                NO PHOTO
              </span>
            </div>
          )}
        </div>

        {/* z20: BODY TEXT - each row absolute at x354 */}
        <div className="absolute" style={{ left: 354, top: 0, width: 680, height: MASTER_H, zIndex: 20, pointerEvents: "none" }}>
          {[
            { label: "NAME", value: demoName.toUpperCase(), y: 224 },
            { label: "IQAMA/ID NO", value: demoIqama, y: 285 },
            { label: "CERTIFIED", value: (courseName || "SCAFFOLDING INSPECTOR").toUpperCase(), y: 348 },
            { label: "MODEL / LEVEL", value: displayModel.toUpperCase(), y: 419 },
            { label: "ISSUED ON", value: formatDDMMYYYY(issuedDate) || "27-07-2026", y: 488 },
            { label: "VALID UNTIL", value: formatDDMMYYYY(expiryDate) || "26-07-2027", y: 562 },
          ].map((row) => (
            <div
              key={row.label}
              className="absolute flex items-baseline"
              style={{ left: 0, top: row.y, width: 680, gap: 8 }}
            >
              <span
                style={{
                  fontFamily: "'Arial Narrow', 'Roboto Condensed', 'Helvetica Condensed', Arial, sans-serif",
                  fontSize: 37,
                  fontWeight: 600,
                  fontStretch: "condensed",
                  letterSpacing: "0.015em",
                  color: "#000",
                  lineHeight: "37px",
                  whiteSpace: "nowrap",
                }}
              >
                {row.label} :
              </span>
              <span
                style={{
                  fontFamily: "'Arial Narrow', 'Roboto Condensed', 'Helvetica Condensed', Arial, sans-serif",
                  fontSize: 37,
                  fontWeight: 600,
                  fontStretch: "condensed",
                  letterSpacing: "0.008em",
                  color: "#000",
                  lineHeight: "37px",
                  whiteSpace: "nowrap",
                  overflow: "hidden",
                  textOverflow: "ellipsis",
                }}
              >
                {row.value}
              </span>
            </div>
          ))}
        </div>

        {/* z20: QR x1040 y497 w204 h202 */}
        <div
          className="absolute bg-white flex items-center justify-center"
          style={{ left: 1040, top: 497, width: 204, height: 202, padding: 4, zIndex: 20 }}
        >
          <QRCodeSVG
            value={demoQRValue}
            size={196}
            level="M"
            bgColor="#ffffff"
            fgColor="#000000"
            style={{ width: 196, height: 196 }}
          />
        </div>

        {/* z20: FOOTER y708-758 centered x664 */}
        <div
          className="absolute left-0 text-center"
          style={{ top: 705, width: MASTER_W, height: 55, zIndex: 20, lineHeight: "18px" }}
        >
          <p
            style={{
              fontFamily: "'Arial Narrow', 'Roboto Condensed', 'Helvetica Condensed', Arial, sans-serif",
              fontSize: 15,
              fontWeight: 700,
              letterSpacing: "0.05em",
              color: "#0e5a8a",
              lineHeight: "18px",
            }}
          >
            THIS CARD WILL BE INVALID WITHOUT HOLOGRAM.
          </p>
          <p
            style={{
              fontFamily: "'Arial Narrow', 'Roboto Condensed', 'Helvetica Condensed', Arial, sans-serif",
              fontSize: 15,
              fontWeight: 700,
              letterSpacing: "0.05em",
              color: "#0e5a8a",
              lineHeight: "18px",
            }}
          >
            FOR VERIFICATION, PLEASE SCAN QR CODE OR VISIT OUR WEBSITE
          </p>
        </div>
      </div>
    </div>
  );
}
