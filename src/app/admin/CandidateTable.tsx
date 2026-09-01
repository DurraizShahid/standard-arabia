"use client";

import { useState } from "react";
import type { Candidate } from "@/lib/candidates";
import { CandidateCardWithActions } from "@/components/CandidateCardWithActions";
import { CandidateCardBack } from "@/components/CandidateCardBack";

export function CandidateTable({ candidates }: { candidates: Candidate[] }) {
  const [selected, setSelected] = useState<Candidate | null>(null);

  if (candidates.length === 0) {
    return (
      <p className="rounded-lg bg-[#f8fafc] px-4 py-8 text-center text-sm text-[#6b7280]">
        No candidates yet. Add your first candidate using the form.
      </p>
    );
  }

  return (
    <>
      <div className="overflow-x-auto">
        <table className="w-full min-w-[900px] text-left text-sm">
          <thead>
            <tr className="border-b border-[#e6ebf0] text-xs uppercase tracking-wide text-[#6b7280]">
              <th className="py-3 pr-4 font-semibold">Photo</th>
              <th className="py-3 pr-4 font-semibold">Name</th>
              <th className="py-3 pr-4 font-semibold">Iqama No / ID</th>
              <th className="py-3 pr-4 font-semibold">Course Name</th>
              <th className="py-3 pr-4 font-semibold">Model/Level</th>
              <th className="py-3 pr-4 font-semibold">Card No</th>
              <th className="py-3 pr-4 font-semibold">Issued Date</th>
              <th className="py-3 pr-4 font-semibold">Expiry Date</th>
              <th className="py-3 font-semibold">Card</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-[#e6ebf0]">
            {candidates.map((c) => (
              <tr key={c.id}>
                <td className="py-3 pr-4">
                  {c.photo ? (
                    // eslint-disable-next-line @next/next/no-img-element
                    <img
                      src={c.photo}
                      alt={`${c.name} photo`}
                      className="h-12 w-12 rounded-lg border border-[#e6ebf0] object-cover"
                    />
                  ) : (
                    <div className="flex h-12 w-12 items-center justify-center rounded-lg border border-dashed border-[#e6ebf0] bg-[#f8fafc] text-[10px] text-[#9ca3af]">
                      N/A
                    </div>
                  )}
                </td>
                <td className="py-3 pr-4 font-medium text-[#1F242C]">{c.name}</td>
                <td className="py-3 pr-4 text-[#565969]">{c.iqamaNo}</td>
                <td className="py-3 pr-4 text-[#565969]">{c.courseName}</td>
                <td className="py-3 pr-4 text-[#565969]">{c.modelLevel || "N/A"}</td>
                <td className="py-3 pr-4 font-mono text-[13px] font-semibold text-[#0e4a82]">{c.cardNo}</td>
                <td className="py-3 pr-4 text-[#565969]">{c.issuedDate}</td>
                <td className="py-3 pr-4 text-[#565969]">{c.expiryDate}</td>
                <td className="py-3">
                  <button
                    type="button"
                    onClick={() => setSelected(c)}
                    className="rounded-lg bg-[#0e4a82] px-3 py-1.5 text-xs font-semibold text-white hover:bg-[#0a3a66] transition-colors"
                  >
                    View Card
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {selected && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 p-4" onClick={() => setSelected(null)}>
          <div
            className="relative max-h-[90vh] w-full max-w-[920px] overflow-auto rounded-2xl bg-white p-4 sm:p-6 shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-sm font-bold text-[#1F242C]">Candidate Card — {selected.cardNo}</h3>
              <button
                type="button"
                onClick={() => setSelected(null)}
                className="rounded-lg border border-[#e6ebf0] px-3 py-1.5 text-xs font-semibold text-[#1F242C] hover:bg-[#f8fafc]"
              >
                Close
              </button>
            </div>
            <div className="space-y-6">
              <div>
                <p className="mb-2 text-xs font-semibold tracking-widest text-[#6b7280] uppercase">Front</p>
                <CandidateCardWithActions
                  name={selected.name}
                  iqamaNo={selected.iqamaNo}
                  courseName={selected.courseName}
                  modelLevel={selected.modelLevel}
                  cardNo={selected.cardNo}
                  issuedDate={selected.issuedDate}
                  expiryDate={selected.expiryDate}
                  photo={selected.photo}
                />
              </div>
              <div>
                <p className="mb-2 text-xs font-semibold tracking-widest text-[#6b7280] uppercase">Back</p>
                <CandidateCardBack />
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
