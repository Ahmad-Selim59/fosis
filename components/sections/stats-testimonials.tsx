import { Container } from "@/components/ui/container";
import { TestimonialCarousel } from "@/components/sections/testimonial-carousel";

const stats = [
  { value: "63", suffix: "+", label: "Years of Service" },
  { value: "350k", suffix: "+", label: "Affiliated ISocs" },
  { value: "350k", suffix: "", label: "Students Represented" },
  { value: "50", suffix: "+", label: "Events Per Year" },
];

export function StatsTestimonialsSection() {
  return (
    <section className="bg-brand-navy section-padding-md">
      <Container>
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-[2fr_3fr] lg:gap-16">
          <div className="flex flex-col items-center">
            <p className="mb-10 text-center text-base font-extrabold uppercase tracking-[0.25em] text-white sm:text-lg lg:text-xl">
              Fosis Stats &amp; Testimonials
            </p>

            <div className="grid w-full max-w-sm grid-cols-2 gap-x-10 gap-y-10 text-center sm:max-w-md">
              {stats.map((stat) => (
                <div key={stat.label}>
                  <p className="headline-kerning text-4xl font-extrabold text-brand-mustard sm:text-5xl">
                    {stat.value}
                    {stat.suffix}
                  </p>
                  <p className="mt-1 text-sm text-white sm:text-base">
                    {stat.label}
                  </p>
                </div>
              ))}
            </div>
          </div>

          <TestimonialCarousel />
        </div>
      </Container>
    </section>
  );
}
