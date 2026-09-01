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

// Master design canvas: 1327 x 772
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
        setScale(w / MASTER_W);
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

  // Demo-safe values
  const demoCardNo = isDemo ? (cardNo || "SA-TNG-DEMO") : cardNo;
  const demoName = isDemo ? (name || "SAMPLE PERSON NAME") : name;
  const demoIqama = isDemo ? (iqamaNo || "0000000000") : iqamaNo;

  // Demo QR - non-functional
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
        {/* Background artwork - original asset */}
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="/background.png"
          alt=""
          className="absolute inset-0 pointer-events-none"
          style={{ width: MASTER_W, height: MASTER_H, objectFit: "cover" }}
          draggable={false}
        />

        {/* Repeating pale text watermark - low opacity */}
        <div
          className="absolute left-0 right-0 overflow-hidden pointer-events-none"
          style={{ top: 200, bottom: 80, opacity: 0.18 }}
        >
          <div
            className="absolute inset-0 flex flex-wrap content-start gap-x-6 gap-y-2 px-4 py-2"
            style={{ transform: "rotate(-1.2deg) scale(1.05)", transformOrigin: "center" }}
          >
            {Array.from({ length: 80 }).map((_, i) => (
              <span
                key={i}
                className="whitespace-nowrap leading-none text-[#9ca3af]"
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

        {/* SAMPLE watermark for demo builds */}
        {isDemo && (
          <div
            className="absolute inset-0 flex items-center justify-center pointer-events-none"
            style={{ opacity: 0.07, transform: "rotate(-18deg)" }}
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

        {/* HEADER: y 0 -> 194 */}
        <div className="absolute left-0 top-0" style={{ width: MASTER_W, height: 194 }}>
          {/* Left header: logo */}
          <div className="absolute" style={{ left: 38, top: 28, width: 340, height: 110 }}>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/logo-f.png"
              alt="Standard Arabia"
              style={{ width: 330, height: 105, objectFit: "contain", objectPosition: "left center" }}
              draggable={false}
            />
          </div>

          {/* Right header: CARD NO */}
          <div
            className="absolute text-right"
            style={{ right: 42, top: 38, width: 500, height: 40 }}
          >
            <span
              style={{
                fontFamily: "'Arial Narrow', 'Roboto Condensed', 'Helvetica Condensed', sans-serif",
                fontSize: 36,
                fontWeight: 700,
                fontStretch: "condensed",
                letterSpacing: "0.02em",
                color: "#000",
                lineHeight: "40px",
              }}
            >
              CARD NO : {demoCardNo}
            </span>
          </div>

          {/* Header divider: y 191-196 */}
          <div
            className="absolute bg-[#0e4a82]"
            style={{ left: 28, right: 28, top: 191, height: 3, borderRadius: 1 }}
          />
        </div>

        {/* PHOTO: x45 y235 w283 h326 */}
        <div
          className="absolute bg-white overflow-hidden"
          style={{ left: 45, top: 235, width: 283, height: 326 }}
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

        {/* BODY TEXT: x350 y220, baselines 224,286,347,419,488,558 */}
        {/* Use absolute positioning for each row to match baselines */}
        <div className="absolute" style={{ left: 350, top: 220, width: 650, height: 380 }}>
          {[
            { label: "NAME", value: demoName.toUpperCase(), y: 4 }, // baseline 224 - top 220 = 4
            { label: "IQAMA/ID NO", value: demoIqama, y: 66 }, // 286-220=66
            { label: "CERTIFIED", value: courseName.toUpperCase() || "SCAFFOLDING INSPECTOR", y: 127 }, // 347-220=127
            { label: "MODEL / LEVEL", value: displayModel.toUpperCase(), y: 199 }, // 419-220=199
            { label: "ISSUED ON", value: formatDDMMYYYY(issuedDate) || "27-07-2026", y: 268 }, // 488-220=268
            { label: "VALID UNTIL", value: formatDDMMYYYY(expiryDate) || "26-07-2027", y: 338 }, // 558-220=338
          ].map((row) => (
            <div
              key={row.label}
              className="absolute left-0 flex items-baseline"
              style={{ top: row.y, width: 650, gap: 8 }}
            >
              <span
                style={{
                  fontFamily: "'Arial Narrow', 'Roboto Condensed', 'Helvetica Condensed', Arial, sans-serif",
                  fontSize: 38,
                  fontWeight: 600,
                  fontStretch: "condensed",
                  letterSpacing: "0.01em",
                  color: "#000",
                  lineHeight: "38px",
                  whiteSpace: "nowrap",
                }}
              >
                {row.label} :
              </span>
              <span
                style={{
                  fontFamily: "'Arial Narrow', 'Roboto Condensed', 'Helvetica Condensed', Arial, sans-serif",
                  fontSize: 38,
                  fontWeight: 600,
                  fontStretch: "condensed",
                  letterSpacing: "0.005em",
                  color: "#000",
                  lineHeight: "38px",
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

        {/* QR: x1035 y490 w210 h210 */}
        <div
          className="absolute bg-white flex items-center justify-center"
          style={{ left: 1035, top: 490, width: 210, height: 210, padding: 6 }}
        >
          <QRCodeSVG
            value={demoQRValue}
            size={198}
            level="M"
            bgColor="#ffffff"
            fgColor="#000000"
            style={{ width: 198, height: 198 }}
          />
        </div>

        {/* Bottom notice: y705-760 x660 centered */}
        <div
          className="absolute left-0 text-center"
          style={{ top: 705, width: MASTER_W, height: 55, lineHeight: "18px" }}
        >
          <p
            style={{
              fontFamily: "'Arial Narrow', 'Roboto Condensed', sans-serif",
              fontSize: 13,
              fontWeight: 700,
              letterSpacing: "0.06em",
              color: "#0e5a8a",
              lineHeight: "18px",
            }}
          >
            SAMPLE CARD — NOT VALID FOR VERIFICATION
          </p>
          <p
            style={{
              fontFamily: "'Arial Narrow', 'Roboto Condensed', sans-serif",
              fontSize: 13,
              fontWeight: 700,
              letterSpacing: "0.06em",
              color: "#0e5a8a",
              lineHeight: "18px",
            }}
          >
            DEMONSTRATION UI ONLY
          </p>
        </div>
      </div>
    </div>
  );
}
