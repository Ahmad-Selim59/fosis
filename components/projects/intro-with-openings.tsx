"use client";

import { useState } from "react";
import { Container } from "@/components/ui/container";
import { OpeningModal } from "@/components/projects/opening-modal";
import type { Opening } from "@/lib/openings";

function ArrowIcon() {
  return (
    <svg
      className="ml-1 h-3 w-3"
      fill="none"
      stroke="currentColor"
      viewBox="0 0 24 24"
      aria-hidden="true"
    >
      <path
        d="M17 8l4 4m0 0l-4 4m4-4H3"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
      />
    </svg>
  );
}

type ProjectsIntroWithOpeningsProps = {
  openings: Opening[];
};

export function ProjectsIntroWithOpenings({
  openings,
}: ProjectsIntroWithOpeningsProps) {
  const [selectedOpening, setSelectedOpening] = useState<Opening | null>(null);
  const hasOpenings = openings.length > 0;

  return (
    <>
      <section className="border-b border-gray-200 bg-white section-padding-md">
        <Container>
          <p className="eyebrow mb-4">Get Involved</p>
          <h2 className="headline-kerning mb-6 text-3xl font-extrabold text-brand-navy md:text-4xl lg:text-5xl">
            Be Part of Something Bigger
          </h2>
          <div className="mb-8 h-px w-full bg-gray-200" />

          <p className="mb-4 max-w-3xl text-lg leading-relaxed text-brand-navy/70">
            FOSIS is powered by students, for students. Whether you want to stand
            for the National Executive Committee, represent your region,
            volunteer on a national project, or contribute your skills behind the
            scenes — there is a place for you in the FOSIS family.
          </p>
          <p className="mb-10 max-w-3xl text-lg leading-relaxed text-brand-navy/70">
            {hasOpenings ? (
              <>
                Explore our current openings below, or read on to find other ways
                to get involved with the UK&apos;s largest Muslim student
                organisation.
              </>
            ) : (
              <>
                Read on to find ways to get involved with the UK&apos;s largest
                Muslim student organisation.
              </>
            )}
          </p>

          {hasOpenings && (
            <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
              {openings.map((opening) => (
                <button
                  key={opening.slug}
                  type="button"
                  onClick={() => setSelectedOpening(opening)}
                  className="group flex flex-col rounded-2xl border border-gray-200 bg-white p-6 text-left shadow-sm transition-all duration-300 hover:border-brand-mustard hover:shadow-md"
                >
                  <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-gray-100 text-sm font-bold text-brand-navy">
                    {opening.initials}
                  </div>

                  <h3 className="mb-1 font-bold text-brand-navy group-hover:text-brand-mustard">
                    {opening.title}
                  </h3>
                  <p className="mb-6 text-sm text-brand-navy/60">
                    {opening.department}
                  </p>

                  <div className="mt-auto flex flex-wrap gap-2">
                    <span className="rounded-full bg-brand-navy px-3 py-1 text-[0.65rem] font-bold uppercase tracking-wider text-white">
                      {opening.engagement}
                    </span>
                    <span className="rounded-full bg-gray-100 px-3 py-1 text-[0.65rem] font-bold uppercase tracking-wider text-brand-navy">
                      {opening.commitment}
                    </span>
                  </div>

                  <span className="mt-4 inline-flex items-center text-xs font-bold uppercase tracking-wider text-brand-mustard">
                    See details
                    <ArrowIcon />
                  </span>
                </button>
              ))}
            </div>
          )}
        </Container>
      </section>

      {selectedOpening && (
        <OpeningModal
          opening={selectedOpening}
          onClose={() => setSelectedOpening(null)}
        />
      )}
    </>
  );
}
