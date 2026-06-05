import Link from "next/link";
import { Container } from "@/components/ui/container";
import { welfareEmail } from "@/lib/fosis-report-data";
import { routes } from "@/lib/routes";

export function FosisReportWhatHappensNext() {
  return (
    <section className="border-t border-gray-200 bg-white section-padding-md">
      <Container size="narrow">
        <h2 className="headline-kerning mb-2 text-3xl font-extrabold text-brand-navy md:text-4xl">
          What Happens Next?
        </h2>
        <div className="mb-8 h-1 w-16 bg-brand-mustard" />

        <p className="mb-6 text-lg leading-relaxed text-brand-navy/70">
          Once your report is received, our team will review it and determine
          the appropriate response. This may include direct follow-up with you
          (if you provided contact details), liaison with your university or SU,
          formal escalation through our advocacy channels, or inclusion in our
          anonymised national data to support systemic change.
        </p>

        <p className="text-lg leading-relaxed text-brand-navy/70">
          If your situation is urgent or you require immediate support, please
          contact us directly at{" "}
          <a
            href={`mailto:${welfareEmail}`}
            className="font-medium text-brand-navy underline decoration-brand-mustard underline-offset-2 hover:text-brand-mustard"
          >
            {welfareEmail}
          </a>{" "}
          or reach out to your{" "}
          <Link
            href={routes.about}
            className="font-medium text-brand-navy underline decoration-brand-mustard underline-offset-2 hover:text-brand-mustard"
          >
            Regional Chair
          </Link>
          .
        </p>
      </Container>
    </section>
  );
}
