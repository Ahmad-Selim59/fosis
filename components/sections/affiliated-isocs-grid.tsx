"use client";

import { useState } from "react";
import { IsocModal } from "@/components/isocs/isoc-modal";
import { getIsocInitials, type Isoc } from "@/lib/isocs-data";

type AffiliatedIsocsGridProps = {
  isocs: Isoc[];
};

export function AffiliatedIsocsGrid({ isocs }: AffiliatedIsocsGridProps) {
  const [selectedIsoc, setSelectedIsoc] = useState<Isoc | null>(null);

  return (
    <>
      <div className="mx-auto mb-16 grid max-w-5xl grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {isocs.map((isoc) => (
          <button
            key={isoc.id}
            type="button"
            onClick={() => setSelectedIsoc(isoc)}
            className="flex cursor-pointer flex-col items-center rounded-xl border border-white/10 bg-white/5 p-6 text-center transition-colors hover:border-brand-mustard/30 hover:bg-white/10"
          >
            <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-brand-mustard/20 text-lg font-bold text-brand-mustard">
              {getIsocInitials(isoc.name)}
            </div>
            <h3 className="mb-2 text-sm font-bold leading-snug text-white">
              {isoc.name}
            </h3>
            <p className="text-xs leading-relaxed text-gray-400">
              {isoc.university}
            </p>
          </button>
        ))}
      </div>

      {selectedIsoc && (
        <IsocModal isoc={selectedIsoc} onClose={() => setSelectedIsoc(null)} />
      )}
    </>
  );
}
