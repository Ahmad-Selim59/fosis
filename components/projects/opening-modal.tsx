"use client";

import { useEffect } from "react";
import type { Opening } from "@/lib/openings";

function ExternalIcon() {
  return (
    <svg
      className="ml-2 h-4 w-4"
      fill="none"
      stroke="currentColor"
      viewBox="0 0 24 24"
      aria-hidden="true"
    >
      <path
        d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
      />
    </svg>
  );
}

function ClockIcon() {
  return (
    <svg
      className="h-4 w-4"
      fill="none"
      stroke="currentColor"
      viewBox="0 0 24 24"
      aria-hidden="true"
    >
      <path
        d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
      />
    </svg>
  );
}

function UserIcon() {
  return (
    <svg
      className="h-4 w-4"
      fill="none"
      stroke="currentColor"
      viewBox="0 0 24 24"
      aria-hidden="true"
    >
      <path
        d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
      />
    </svg>
  );
}

type OpeningModalProps = {
  opening: Opening;
  onClose: () => void;
};

export function OpeningModal({ opening, onClose }: OpeningModalProps) {
  useEffect(() => {
    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        onClose();
      }
    };

    document.body.style.overflow = "hidden";
    document.addEventListener("keydown", handleEscape);

    return () => {
      document.body.style.overflow = "";
      document.removeEventListener("keydown", handleEscape);
    };
  }, [onClose]);

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4"
      role="dialog"
      aria-modal="true"
      aria-labelledby="opening-modal-title"
    >
      <button
        type="button"
        className="absolute inset-0 bg-brand-navy/80 backdrop-blur-sm"
        aria-label="Close dialog"
        onClick={onClose}
      />

      <div className="relative z-10 max-h-[90vh] w-full max-w-5xl overflow-hidden rounded-2xl shadow-2xl">
        <button
          type="button"
          onClick={onClose}
          className="absolute right-4 top-4 z-20 flex h-10 w-10 items-center justify-center rounded-full bg-gray-100 text-brand-navy transition-colors hover:bg-gray-200"
          aria-label="Close"
        >
          <svg
            className="h-5 w-5"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            aria-hidden="true"
          >
            <path
              d="M6 18L18 6M6 6l12 12"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
            />
          </svg>
        </button>

        <div className="max-h-[90vh] overflow-y-auto lg:flex">
          <aside className="flex flex-col justify-between bg-brand-navy p-8 lg:w-80 lg:shrink-0 lg:self-stretch">
            <div>
              <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-white/10 text-xl font-bold text-brand-mustard">
                {opening.initials}
              </div>
              <h2
                id="opening-modal-title"
                className="headline-kerning mb-2 text-2xl font-extrabold text-white"
              >
                {opening.title}
              </h2>
              <p className="text-sm text-gray-300">{opening.department}</p>
            </div>

            <div className="mt-8 flex flex-wrap gap-2">
              <span className="rounded-full border border-brand-mustard px-3 py-1 text-xs font-bold uppercase tracking-wider text-brand-mustard">
                {opening.engagement}
              </span>
              <span className="rounded-full bg-white px-3 py-1 text-xs font-bold uppercase tracking-wider text-brand-navy">
                {opening.commitment}
              </span>
            </div>
          </aside>

          <div className="flex-1 bg-white p-8 md:p-10">
            <div className="mb-8 flex flex-wrap gap-3">
              <span className="inline-flex items-center gap-2 rounded-full bg-gray-100 px-4 py-2 text-sm text-brand-navy">
                <ClockIcon />
                {opening.hours}
              </span>
              <span className="inline-flex items-center gap-2 rounded-full bg-gray-100 px-4 py-2 text-sm text-brand-navy">
                <UserIcon />
                {opening.department}
              </span>
            </div>

            <p className="mb-8 text-lg font-semibold leading-relaxed text-brand-navy">
              {opening.intro}
            </p>

            <h3 className="mb-4 text-xl font-bold text-brand-navy">
              The Impact You&apos;ll Have
            </h3>

            <ul className="mb-8 space-y-4">
              {opening.impact.map((item) => (
                <li
                  key={item.title}
                  className="leading-relaxed text-brand-navy/80"
                >
                  <strong className="text-brand-navy">{item.title}:</strong>{" "}
                  {item.description}
                </li>
              ))}
            </ul>

            <p className="mb-8 leading-relaxed text-brand-navy/70">
              {opening.closing}
            </p>

            <a
              href={opening.applyUrl}
              className="inline-flex items-center bg-brand-navy px-8 py-4 text-sm font-bold uppercase tracking-cta text-white transition-colors hover:bg-brand-navy/90"
            >
              Apply Now
              <ExternalIcon />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
