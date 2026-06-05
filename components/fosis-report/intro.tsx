import { Container } from "@/components/ui/container";

export function FosisReportIntro() {
  return (
    <section className="bg-white section-padding-md">
      <Container size="narrow" className="text-center">
        <p className="mb-6 text-lg leading-relaxed text-brand-navy/70">
          The FOSIS Report is a confidential reporting portal for ISocs and
          Muslim students across the UK and Ireland. If you have experienced or
          witnessed issues relating to your Islamic Society, your
          Students&apos; Union, or Islamophobia on campus, this is where you can
          tell us about it.
        </p>
        <p className="text-lg leading-relaxed text-brand-navy/70">
          Reports submitted through this portal are reviewed by FOSIS&apos;s
          national team. Depending on the nature of the incident, we may follow
          up directly, escalate to the relevant university or SU, or incorporate
          findings into our national advocacy work and annual report.
        </p>
      </Container>
    </section>
  );
}
