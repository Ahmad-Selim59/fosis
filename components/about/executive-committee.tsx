"use client";

import { useEffect, useRef, useState } from "react";
import { Container } from "@/components/ui/container";
import { executiveCommittee } from "@/lib/about-data";

function MemberAvatar({ name, initials }: { name: string; initials?: string }) {
  const label =
    initials ??
    name
      .split(" ")
      .map((part) => part[0])
      .join("")
      .slice(0, 2)
      .toUpperCase();

  return (
    <div className="mx-auto mb-4 flex h-24 w-24 items-center justify-center rounded-full border-2 border-brand-mustard bg-brand-navy text-xl font-bold text-brand-mustard">
      {label}
    </div>
  );
}

function ChevronIcon({ direction }: { direction: "left" | "right" }) {
  return (
    <svg
      className="h-5 w-5"
      fill="none"
      stroke="currentColor"
      viewBox="0 0 24 24"
      aria-hidden="true"
    >
      <path
        d={direction === "left" ? "M15 19l-7-7 7-7" : "M9 5l7 7-7 7"}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
      />
    </svg>
  );
}

export function AboutExecutiveCommittee() {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);

  const updateScrollState = () => {
    const el = scrollRef.current;
    if (!el) return;
    setCanScrollLeft(el.scrollLeft > 0);
    setCanScrollRight(el.scrollLeft < el.scrollWidth - el.clientWidth - 1);
  };

  useEffect(() => {
    updateScrollState();
    window.addEventListener("resize", updateScrollState);
    return () => window.removeEventListener("resize", updateScrollState);
  }, []);

  const scroll = (direction: "left" | "right") => {
    const el = scrollRef.current;
    if (!el) return;
    el.scrollBy({
      left: direction === "left" ? -280 : 280,
      behavior: "smooth",
    });
    setTimeout(updateScrollState, 300);
  };

  return (
    <section className="bg-white section-padding-md">
      <Container>
        <div className="mb-12 text-center">
          <p className="eyebrow mb-4">Leadership</p>
          <h2 className="headline-kerning mb-4 text-3xl font-extrabold text-brand-navy md:text-5xl">
            National Executive Committee
          </h2>
          <p className="mx-auto max-w-xl text-brand-navy/70">
            The elected student leaders who shape FOSIS&apos;s national
            direction.
          </p>
        </div>

        <div className="relative">
          {canScrollLeft && (
            <button
              type="button"
              aria-label="Scroll left"
              onClick={() => scroll("left")}
              className="absolute -left-2 top-1/2 z-10 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full border border-gray-200 bg-white shadow-md transition-colors hover:bg-gray-50 md:left-0"
            >
              <ChevronIcon direction="left" />
            </button>
          )}

          <div
            ref={scrollRef}
            onScroll={updateScrollState}
            className="flex gap-6 overflow-x-auto scroll-smooth px-2 pb-2 [scrollbar-width:none] md:px-12 [&::-webkit-scrollbar]:hidden"
          >
            {executiveCommittee.map((member) => (
              <div
                key={member.name}
                className="w-56 shrink-0 rounded-xl border border-gray-200 bg-white p-6 text-center shadow-sm"
              >
                <MemberAvatar
                  name={member.name}
                  initials={member.initials}
                />
                <h3 className="mb-1 text-sm font-bold text-brand-navy">
                  {member.role}
                </h3>
                <p className="text-xs font-semibold uppercase tracking-wide text-brand-mustard">
                  {member.name}
                </p>
              </div>
            ))}
          </div>

          {canScrollRight && (
            <button
              type="button"
              aria-label="Scroll right"
              onClick={() => scroll("right")}
              className="absolute -right-2 top-1/2 z-10 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full border border-gray-200 bg-white shadow-md transition-colors hover:bg-gray-50 md:right-0"
            >
              <ChevronIcon direction="right" />
            </button>
          )}
        </div>
      </Container>
    </section>
  );
}
