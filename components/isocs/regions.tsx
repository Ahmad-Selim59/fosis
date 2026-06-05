import { Container } from "@/components/ui/container";
import { fosisRegions } from "@/lib/isocs-data";

export function IsocsRegions() {
  return (
    <section className="bg-white section-padding-md">
      <Container>
        <p className="eyebrow mb-4">Our Regions</p>
        <h2 className="headline-kerning mb-4 text-3xl font-extrabold text-brand-navy md:text-4xl">
          FOSIS Operates Across 6 Regions
        </h2>
        <p className="mb-10 max-w-3xl text-brand-navy/70">
          FOSIS is organised through regional committees that run local events,
          provide on-the-ground support, and connect Muslim students within
          their area.
        </p>

        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {fosisRegions.map((region) => (
            <div
              key={region.name}
              className="flex min-h-[140px] flex-col justify-between bg-section-navy p-6 text-white"
            >
              <span className="text-xs font-semibold uppercase tracking-wider text-brand-mustard">
                Region {region.number}
              </span>
              <p className="text-xl font-bold">{region.name}</p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
