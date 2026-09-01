"use client";

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
};

function formatDDMMYYYY(d: string): string {
  const s = String(d).slice(0, 10);
  const [y, m, day] = s.split("-");
  if (!y || !m || !day) return s;
  return `${day}-${m}-${y}`;
}

export function CandidateCard({
  name,
  iqamaNo,
  courseName,
  modelLevel,
  cardNo,
  issuedDate,
  expiryDate,
  photo,
}: CandidateCardProps) {
  const verificationUrl =
    typeof window !== "undefined"
      ? `${window.location.origin}/verification?q=${encodeURIComponent(cardNo)}`
      : `https://standardarabia.com/verification?q=${encodeURIComponent(cardNo)}`;

  const displayModel = modelLevel && modelLevel.trim() ? modelLevel.trim() : "N/A";
  const displayPhoto = photo || "";

  return (
    <div
      id="candidate-card-capture"
      className="relative w-full max-w-[860px] aspect-[16/9] overflow-hidden bg-white select-none"
      style={{ fontFamily: "var(--font-jakarta), Arial, sans-serif" }}
    >
      {/* Background wave - now PNG as updated */}
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src="/background.png"
        alt=""
        className="absolute inset-0 h-full w-full object-cover pointer-events-none"
        draggable={false}
      />

      {/* Watermark - repeating name and ID faint, only middle area to keep header clean like reference */}
      <div className="absolute top-[20%] bottom-[11%] left-0 right-0 overflow-hidden pointer-events-none opacity-[0.07]">
        <div
          className="absolute inset-0 flex flex-wrap content-start gap-x-5 gap-y-1.5 px-3 py-2"
          style={{ transform: "rotate(-1.5deg) scale(1.08)", transformOrigin: "center" }}
        >
          {Array.from({ length: 56 }).map((_, i) => (
            <span
              key={i}
              className="text-[9.5px] font-bold tracking-wide text-[#6b7280] whitespace-nowrap leading-none"
              style={{ fontFamily: "Arial, sans-serif" }}
            >
              {i % 3 === 0 ? name.toUpperCase() : i % 3 === 1 ? iqamaNo : `${name.toUpperCase()}  ${iqamaNo}`}
            </span>
          ))}
        </div>
      </div>

      {/* Header */}
      <div className="absolute top-[3.5%] left-[2.2%] right-[2.2%] flex items-start justify-between">
        {/* Logo - using public/logo-f.png as requested */}
        <div className="flex items-center">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/logo-f.png"
            alt="Standard Arabia"
            className="h-[76px] sm:h-[92px] w-auto object-contain"
            draggable={false}
          />
        </div>

        {/* Card No */}
        <div className="text-right pt-1">
          <span className="text-[21px] font-bold tracking-wide text-black whitespace-nowrap" style={{ fontFamily: "Arial, sans-serif" }}>
            CARD NO : {cardNo}
          </span>
        </div>
      </div>

      {/* Blue divider line */}
      <div className="absolute top-[18.2%] left-[2.2%] right-[2.2%] h-[3px] bg-[#0e4a82] rounded-[1px]" />

      {/* Photo - tightened to original 3.2% */}
      <div className="absolute left-[3.2%] top-[23.8%] w-[22.2%] h-[53.5%] bg-white overflow-hidden">
        {displayPhoto ? (
          // eslint-disable-next-line @next/next/no-img-element
          <img
            src={displayPhoto}
            alt={name}
            className="h-full w-full object-cover object-top"
            draggable={false}
          />
        ) : (
          <div className="flex h-full w-full items-center justify-center bg-white text-[#9ca3af] text-[11px] font-semibold">NO PHOTO</div>
        )}
      </div>

      {/* Text fields block - nudged left 1.5% and bumped to 17px */}
      <div className="absolute left-[27.5%] top-[25.8%] right-[17%] space-y-[7px]">
        {[
          { label: "NAME", value: name.toUpperCase() },
          { label: "IQAMA/ID NO", value: iqamaNo },
          { label: "CERTIFIED", value: courseName.toUpperCase() },
          { label: "MODEL / LEVEL", value: displayModel.toUpperCase() },
          { label: "ISSUED ON", value: formatDDMMYYYY(issuedDate) },
          { label: "VALID UNTIL", value: formatDDMMYYYY(expiryDate) },
        ].map((row) => (
          <div key={row.label} className="flex gap-[6px] leading-none">
            <span className="text-[17px] font-black text-black tracking-[0.01em] whitespace-nowrap" style={{ fontFamily: "Arial Black, Arial, sans-serif" }}>
              {row.label} :
            </span>
            <span className="text-[17px] font-black text-black tracking-[0.005em] truncate" style={{ fontFamily: "Arial Black, Arial, sans-serif" }}>
              {row.value}
            </span>
          </div>
        ))}
      </div>

      {/* QR Code - scaled up, no shadow */}
      <div className="absolute right-[3%] bottom-[14%] w-[16.5%] aspect-square bg-white p-[4px] border border-white flex items-center justify-center">
        <QRCodeSVG
          value={verificationUrl}
          size={128}
          level="M"
          bgColor="#ffffff"
          fgColor="#000000"
          className="h-full w-full"
        />
      </div>

      {/* Footer text */}
      <div className="absolute bottom-[4.5%] left-[3%] right-[3%] text-center leading-[1.15]">
        <p className="text-[8px] sm:text-[9.5px] font-black tracking-[0.06em] text-[#0e5a8a]" style={{ fontFamily: "Arial, sans-serif" }}>
          THIS CARD WILL BE INVALID WITHOUT HOLOGRAM.
        </p>
        <p className="text-[8px] sm:text-[9.5px] font-black tracking-[0.06em] text-[#0e5a8a] mt-[1px]" style={{ fontFamily: "Arial, sans-serif" }}>
          FOR VERIFICATION, PLEASE SCAN QR CODE OR VISIT OUR WEBSITE
        </p>
      </div>
    </div>
  );
}
