"use client";

import { useState } from "react";
import { Container } from "@/components/ui/container";
import { foundationPillars } from "@/lib/isoc-resources-data";

function ChevronIcon({ open }: { open: boolean }) {
  return (
    <svg
      className={`h-4 w-4 transition-transform ${open ? "rotate-180" : ""}`}
      fill="none"
      stroke="currentColor"
      viewBox="0 0 24 24"
      aria-hidden="true"
    >
      <path
        d="M19 9l-7 7-7-7"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
      />
    </svg>
  );
}

export function IsocResourcesFoundationPillars() {
  const [openIndex, setOpenIndex] = useState(-1);

  return (
    <section className="bg-white section-padding-md">
      <Container size="narrow">
        <p className="eyebrow mb-4">The Pillars</p>
        <h2 className="headline-kerning mb-2 text-3xl font-extrabold text-brand-navy md:text-4xl">
          Institutional Foundation
        </h2>
        <p className="mb-10 text-xs font-semibold uppercase tracking-[0.2em] text-brand-navy/50">
          Click to expand each pillar
        </p>

        <div className="overflow-hidden rounded-lg border border-gray-200 bg-white shadow-sm">
          {foundationPillars.map((pillar, index) => {
            const isOpen = openIndex === index;

            return (
              <div
                key={pillar.title}
                className={index > 0 ? "border-t border-gray-200" : ""}
              >
                <button
                  type="button"
                  onClick={() => setOpenIndex(isOpen ? -1 : index)}
                  className={`flex w-full items-center justify-between gap-4 px-6 py-5 text-left transition-colors ${
                    isOpen
                      ? "bg-brand-navy text-white"
                      : "bg-white text-brand-navy hover:bg-gray-50"
                  }`}
                  aria-expanded={isOpen}
                >
                  <div className="flex items-center gap-4">
                    <span
                      className={`h-2 w-2 shrink-0 rounded-full ${
                        isOpen ? "bg-brand-mustard" : "bg-brand-mustard"
                      }`}
                    />
                    <span
                      className={`text-sm font-semibold ${
                        isOpen ? "text-brand-mustard" : "text-brand-mustard"
                      }`}
                    >
                      {pillar.number}
                    </span>
                    <span className="text-sm font-bold uppercase tracking-wider">
                      {pillar.title}
                    </span>
                  </div>

                  <div className="flex items-center gap-4">
                    <span
                      className={`hidden rounded border px-3 py-1 text-xs font-semibold uppercase tracking-wider sm:inline ${
                        isOpen
                          ? "border-brand-mustard text-brand-mustard"
                          : "border-gray-200 bg-gray-50 text-gray-500"
                      }`}
                    >
                      {pillar.tag}
                    </span>
                    <ChevronIcon open={isOpen} />
                  </div>
                </button>

                {isOpen && (
                  <div className="border-t border-gray-100 bg-white px-6 py-6">
                    <p className="border-l-4 border-brand-mustard pl-6 leading-relaxed text-brand-navy/80">
                      {pillar.content}
                    </p>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
