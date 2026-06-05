"use client";

import Image from "next/image";
import { useCallback, useEffect, useRef, useState } from "react";

type Testimonial = {
  name: string;
  role: string;
  quote: string;
  image: string;
};

const testimonials: Testimonial[] = [
  {
    name: "Amina Khan",
    role: "University of X ISoc President",
    quote:
      "FOSIS has been instrumental in supporting our ISoc. Their resources and events are invaluable for our community.",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuDmUDClN3anOAQfEfEkt00pcd-7GitO4XoNkV5ZCuP_CvysWMCqLuyi_aEQK7tatgbYBBfKMP22eS3qDuYpp4NFoo4c9wXK1yrrxkJu87PstpI6E_PQ2egs1n5VHyfwL4ffRsjXymuwGJD8_k0d1VRW0DfCFIUJ7oXDHGkpA6127ErE6A7CcIwOacEu4viUtwwzLtIpbGgVtFuYnK93LUzM8331_vRCcw8K3zylXqG8GONMvrmoIv-WnvfI-b6Yx32H9F_-WvOK9D4",
  },
  {
    name: "Yusuf Ali",
    role: "Student Leader, University of Birmingham",
    quote:
      "The national network FOSIS provides has helped us connect with ISocs across the country and learn from their best practices.",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuDmUDClN3anOAQfEfEkt00pcd-7GitO4XoNkV5ZCuP_CvysWMCqLuyi_aEQK7tatgbYBBfKMP22eS3qDuYpp4NFoo4c9wXK1yrrxkJu87PstpI6E_PQ2egs1n5VHyfwL4ffRsjXymuwGJD8_k0d1VRW0DfCFIUJ7oXDHGkpA6127ErE6A7CcIwOacEu4viUtwwzLtIpbGgVtFuYnK93LUzM8331_vRCcw8K3zylXqG8GONMvrmoIv-WnvfI-b6Yx32H9F_-WvOK9D4",
  },
  {
    name: "Ahmed Tariq",
    role: "ISoc President, University of Manchester",
    quote:
      "FOSIS has been instrumental in helping our ISoc grow. The training and resources they provide have completely transformed how we serve Muslim students on campus.",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuDmUDClN3anOAQfEfEkt00pcd-7GitO4XoNkV5ZCuP_CvysWMCqLuyi_aEQK7tatgbYBBfKMP22eS3qDuYpp4NFoo4c9wXK1yrrxkJu87PstpI6E_PQ2egs1n5VHyfwL4ffRsjXymuwGJD8_k0d1VRW0DfCFIUJ7oXDHGkpA6127ErE6A7CcIwOacEu4viUtwwzLtIpbGgVtFuYnK93LUzM8331_vRCcw8K3zylXqG8GONMvrmoIv-WnvfI-b6Yx32H9F_-WvOK9D4",
  },
];

const AUTO_PLAY_INTERVAL = 5000;

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

export function TestimonialCarousel() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null);

  const goToSlide = useCallback((index: number) => {
    setActiveIndex(index);
  }, []);

  const nextSlide = useCallback(() => {
    setActiveIndex((current) => (current + 1) % testimonials.length);
  }, []);

  const prevSlide = useCallback(() => {
    setActiveIndex(
      (current) => (current - 1 + testimonials.length) % testimonials.length,
    );
  }, []);

  const resetAutoplay = useCallback(() => {
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
    }
    if (!isPaused) {
      intervalRef.current = setInterval(nextSlide, AUTO_PLAY_INTERVAL);
    }
  }, [isPaused, nextSlide]);

  const handleManualNav = useCallback(
    (action: () => void) => {
      action();
      resetAutoplay();
    },
    [resetAutoplay],
  );

  useEffect(() => {
    if (isPaused) {
      if (intervalRef.current) clearInterval(intervalRef.current);
      return;
    }

    intervalRef.current = setInterval(nextSlide, AUTO_PLAY_INTERVAL);
    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
    };
  }, [isPaused, nextSlide]);

  return (
    <div
      className="flex flex-col"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
      onFocusCapture={() => setIsPaused(true)}
      onBlurCapture={(e) => {
        if (!e.currentTarget.contains(e.relatedTarget)) {
          setIsPaused(false);
        }
      }}
    >
      <div className="overflow-hidden">
        <div
          className="flex gap-4 transition-transform duration-500 ease-in-out"
          style={{
            transform: `translateX(calc(-${activeIndex} * (82% + 1rem)))`,
          }}
        >
          {testimonials.map((testimonial) => (
            <article
              key={testimonial.name}
              className="w-[82%] shrink-0 rounded-2xl border border-white/10 bg-white/5 p-5 backdrop-blur-sm sm:p-6"
            >
              <div className="flex gap-4">
                <div className="relative h-14 w-14 shrink-0 overflow-hidden rounded-full sm:h-16 sm:w-16">
                  <Image
                    src={testimonial.image}
                    alt={testimonial.name}
                    fill
                    className="object-cover"
                    sizes="64px"
                  />
                </div>
                <div className="min-w-0">
                  <blockquote className="text-sm leading-relaxed text-white sm:text-base">
                    &ldquo;{testimonial.quote}&rdquo;
                  </blockquote>
                  <footer className="mt-3">
                    <cite className="not-italic">
                      <span className="font-bold text-white">
                        {testimonial.name}
                      </span>
                      <span className="text-white/80">
                        , {testimonial.role}
                      </span>
                    </cite>
                  </footer>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>

      <div className="mt-6 flex items-center justify-center gap-4">
        <button
          type="button"
          aria-label="Previous testimonial"
          onClick={() => handleManualNav(prevSlide)}
          className="flex h-9 w-9 items-center justify-center rounded-full border border-white/40 text-white transition-colors hover:border-white hover:bg-white/10"
        >
          <ChevronIcon direction="left" />
        </button>

        <div className="flex items-center gap-2">
          {testimonials.map((testimonial, index) => (
            <button
              key={testimonial.name}
              type="button"
              aria-label={`Go to testimonial ${index + 1}`}
              aria-current={index === activeIndex ? "true" : undefined}
              onClick={() => handleManualNav(() => goToSlide(index))}
              className={`h-2 rounded-full transition-all ${
                index === activeIndex
                  ? "w-8 bg-brand-mustard"
                  : "w-8 border-2 border-white/70 bg-transparent"
              }`}
            />
          ))}
        </div>

        <button
          type="button"
          aria-label="Next testimonial"
          onClick={() => handleManualNav(nextSlide)}
          className="flex h-9 w-9 items-center justify-center rounded-full border border-white/40 text-white transition-colors hover:border-white hover:bg-white/10"
        >
          <ChevronIcon direction="right" />
        </button>
      </div>
    </div>
  );
}
