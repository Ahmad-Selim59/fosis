"use client";

import { useEffect, useMemo, useState } from "react";
import { Container } from "@/components/ui/container";
import {
  ISOC_DIRECTORY_ANCHOR,
  ISOC_PAGE_SIZE,
  getIsocInitials,
  type Isoc,
} from "@/lib/isocs-data";

function ChevronIcon({ open }: { open: boolean }) {
  return (
    <svg
      className={`h-4 w-4 shrink-0 transition-transform ${open ? "rotate-180" : ""}`}
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

function SearchIcon() {
  return (
    <svg
      className="absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2 text-gray-400"
      fill="none"
      stroke="currentColor"
      viewBox="0 0 24 24"
      aria-hidden="true"
    >
      <path
        d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
      />
    </svg>
  );
}

type IsocDirectoryProps = {
  isocs: Isoc[];
};

export function IsocDirectory({ isocs }: IsocDirectoryProps) {
  const [query, setQuery] = useState("");
  const [region, setRegion] = useState("All Regions");
  const [page, setPage] = useState(1);
  const [expandedId, setExpandedId] = useState<string | null>(null);

  const regions = useMemo(
    () => ["All Regions", ...Array.from(new Set(isocs.map((isoc) => isoc.region))).sort()],
    [isocs],
  );

  const filtered = useMemo(() => {
    const normalisedQuery = query.trim().toLowerCase();

    return isocs.filter((isoc) => {
      const matchesRegion = region === "All Regions" || isoc.region === region;
      const matchesQuery =
        normalisedQuery.length === 0 ||
        isoc.name.toLowerCase().includes(normalisedQuery) ||
        isoc.university.toLowerCase().includes(normalisedQuery);

      return matchesRegion && matchesQuery;
    });
  }, [isocs, query, region]);

  const totalPages = Math.max(1, Math.ceil(filtered.length / ISOC_PAGE_SIZE));
  const currentPage = Math.min(page, totalPages);

  const paginated = useMemo(() => {
    const start = (currentPage - 1) * ISOC_PAGE_SIZE;
    return filtered.slice(start, start + ISOC_PAGE_SIZE);
  }, [filtered, currentPage]);

  const pageNumbers = useMemo(() => {
    return Array.from({ length: totalPages }, (_, index) => index + 1);
  }, [totalPages]);

  function handleQueryChange(value: string) {
    setQuery(value);
    setPage(1);
    setExpandedId(null);
  }

  function handleRegionChange(value: string) {
    setRegion(value);
    setPage(1);
    setExpandedId(null);
  }

  useEffect(() => {
    if (window.location.hash !== `#${ISOC_DIRECTORY_ANCHOR}`) {
      return;
    }

    const target = document.getElementById(ISOC_DIRECTORY_ANCHOR);
    if (!target) {
      return;
    }

    target.scrollIntoView({ behavior: "smooth", block: "start" });
    document.getElementById("isoc-search")?.focus({ preventScroll: true });
  }, []);

  return (
    <section
      id={ISOC_DIRECTORY_ANCHOR}
      className="relative scroll-mt-24 overflow-hidden bg-section-navy section-padding-md"
    >
      <div className="absolute inset-0 bg-gradient-to-b from-brand-navy via-[#0f2840] to-brand-navy" />

      <Container className="relative z-10">
        <div className="mb-8">
          <label
            htmlFor="isoc-search"
            className="eyebrow mb-3 block"
          >
            Search ISocs
          </label>
          <div className="relative">
            <SearchIcon />
            <input
              id="isoc-search"
              type="search"
              value={query}
              onChange={(event) => handleQueryChange(event.target.value)}
              placeholder="Type a university name..."
              className="w-full rounded-lg border border-white/15 bg-[#0a1628] py-4 pl-12 pr-4 text-white placeholder:text-gray-400 focus:border-brand-mustard focus:outline-none focus:ring-2 focus:ring-brand-mustard/30"
            />
          </div>
        </div>

        <div className="mb-10">
          <p className="eyebrow mb-3">Filter by Region</p>
          <div className="flex flex-wrap gap-2">
            {regions.map((regionName) => {
              const active = region === regionName;

              return (
                <button
                  key={regionName}
                  type="button"
                  onClick={() => handleRegionChange(regionName)}
                  className={`rounded-full border px-4 py-2 text-xs font-semibold uppercase tracking-wider transition-colors ${
                    active
                      ? "border-brand-mustard bg-brand-mustard text-brand-navy"
                      : "border-white/20 bg-white/5 text-white hover:border-brand-mustard hover:text-brand-mustard"
                  }`}
                >
                  {regionName}
                </button>
              );
            })}
          </div>
        </div>

        <p className="mb-6 text-sm uppercase tracking-wider text-gray-400">
          {filtered.length} ISoc{filtered.length === 1 ? "" : "s"} found — click
          a card to expand details
        </p>

        {paginated.length > 0 ? (
          <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
            {paginated.map((isoc) => {
              const isOpen = expandedId === isoc.id;

              return (
                <div
                  key={isoc.id}
                  className="overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-[#0f2840] to-[#1a3a5c]"
                >
                  <button
                    type="button"
                    onClick={() =>
                      setExpandedId(isOpen ? null : isoc.id)
                    }
                    className="flex w-full items-start gap-4 p-5 text-left text-white"
                    aria-expanded={isOpen}
                  >
                    <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full border border-white/20 bg-white/10 text-sm font-bold text-white">
                      {getIsocInitials(isoc.name)}
                    </div>
                    <div className="min-w-0 flex-1">
                      <h3 className="font-bold text-white">{isoc.name}</h3>
                      <p className="text-sm text-gray-300">
                        {isoc.university}
                      </p>
                    </div>
                    <ChevronIcon open={isOpen} />
                  </button>

                  <div className="border-t border-white/10 px-5 py-3">
                    <span className="inline-block rounded-full border border-brand-mustard/40 px-3 py-1 text-[0.65rem] font-semibold uppercase tracking-wider text-brand-mustard">
                      {isoc.region}
                    </span>
                  </div>

                  {isOpen && (
                    <div className="border-t border-white/10 bg-[#0a1628] px-5 py-4 text-sm text-gray-300">
                      {isoc.description && (
                        <p className="mb-3 leading-relaxed">{isoc.description}</p>
                      )}
                      {isoc.email && (
                        <p>
                          Email:{" "}
                          <a
                            href={`mailto:${isoc.email}`}
                            className="font-medium text-white underline decoration-brand-mustard underline-offset-2 hover:text-brand-mustard"
                          >
                            {isoc.email}
                          </a>
                        </p>
                      )}
                      {isoc.instagram && (
                        <p className="mt-2">
                          Instagram:{" "}
                          <a
                            href={isoc.instagram}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="font-medium text-white underline decoration-brand-mustard underline-offset-2 hover:text-brand-mustard"
                          >
                            {isoc.instagram}
                          </a>
                        </p>
                      )}
                      {isoc.website && (
                        <p className="mt-2">
                          Website:{" "}
                          <a
                            href={isoc.website}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="font-medium text-white underline decoration-brand-mustard underline-offset-2 hover:text-brand-mustard"
                          >
                            {isoc.website}
                          </a>
                        </p>
                      )}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        ) : (
          <div className="rounded-2xl border border-white/10 bg-white/5 px-6 py-12 text-center">
            <p className="text-lg font-semibold text-white">
              No ISocs match your search
            </p>
            <p className="mt-2 text-gray-400">
              Try a different university name or region filter.
            </p>
          </div>
        )}

        {filtered.length > ISOC_PAGE_SIZE && (
          <nav
            className="mt-10 flex flex-col items-center gap-4 sm:flex-row sm:justify-between"
            aria-label="ISoc pagination"
          >
            <p className="text-sm text-gray-400">
              Page {currentPage} of {totalPages}
            </p>

            <div className="flex flex-wrap items-center justify-center gap-2">
              <button
                type="button"
                onClick={() => setPage((value) => Math.max(1, value - 1))}
                disabled={currentPage === 1}
                className="rounded-full border border-white/20 px-4 py-2 text-xs font-bold uppercase tracking-wider text-white transition-colors hover:border-brand-mustard hover:text-brand-mustard disabled:cursor-not-allowed disabled:opacity-40"
              >
                Previous
              </button>

              {pageNumbers.map((pageNumber) => (
                <button
                  key={pageNumber}
                  type="button"
                  onClick={() => {
                    setPage(pageNumber);
                    setExpandedId(null);
                  }}
                  aria-current={pageNumber === currentPage ? "page" : undefined}
                  className={`flex h-10 w-10 items-center justify-center rounded-full text-sm font-bold transition-colors ${
                    pageNumber === currentPage
                      ? "bg-brand-mustard text-brand-navy"
                      : "border border-white/20 text-white hover:border-brand-mustard hover:text-brand-mustard"
                  }`}
                >
                  {pageNumber}
                </button>
              ))}

              <button
                type="button"
                onClick={() =>
                  setPage((value) => Math.min(totalPages, value + 1))
                }
                disabled={currentPage === totalPages}
                className="rounded-full border border-white/20 px-4 py-2 text-xs font-bold uppercase tracking-wider text-white transition-colors hover:border-brand-mustard hover:text-brand-mustard disabled:cursor-not-allowed disabled:opacity-40"
              >
                Next
              </button>
            </div>
          </nav>
        )}
      </Container>
    </section>
  );
}
