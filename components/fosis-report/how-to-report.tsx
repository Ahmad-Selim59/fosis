import { Container } from "@/components/ui/container";
import { regionalChairs } from "@/lib/about-data";
import { welfareEmail } from "@/lib/fosis-report-data";

export function FosisReportHowTo() {
  return (
    <section className="bg-about-surface section-padding-md">
      <Container>
        <h2 className="headline-kerning mb-2 text-3xl font-extrabold text-brand-navy md:text-4xl">
          How to Report
        </h2>
        <div className="mb-8 h-1 w-16 bg-brand-mustard" />

        <p className="mb-6 max-w-3xl text-lg leading-relaxed text-brand-navy/70">
          To submit a report, reach out to the FOSIS team directly by email.
          Include your university, a brief description of what happened, and any
          supporting context. You can contact us confidentially — you do not need
          to be an ISoc committee member to report.
        </p>

        <div className="mb-10 rounded-2xl border border-gray-200 bg-white p-8">
          <p className="eyebrow mb-3">National Welfare Team</p>
          <p className="mb-4 text-brand-navy/70">
            For all reports — especially urgent welfare concerns — contact our
            national welfare team:
          </p>
          <a
            href={`mailto:${welfareEmail}`}
            className="text-lg font-semibold text-brand-navy underline decoration-brand-mustard underline-offset-4 hover:text-brand-mustard"
          >
            {welfareEmail}
          </a>
        </div>

        <p className="mb-6 text-lg leading-relaxed text-brand-navy/70">
          You can also reach out to your regional FOSIS chair, who can support
          you locally and escalate to the national team where needed:
        </p>

        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {regionalChairs.map((chair) => (
            <div
              key={chair.region}
              className="rounded-xl border border-gray-200 bg-white p-6"
            >
              <h3 className="mb-1 font-bold text-brand-navy">{chair.region}</h3>
              <p className="mb-3 text-sm text-brand-mustard">{chair.name}</p>
              <a
                href={`mailto:${chair.email}`}
                className="text-sm text-brand-navy/70 underline decoration-brand-mustard/50 underline-offset-2 transition-colors hover:text-brand-mustard"
              >
                {chair.email}
              </a>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
