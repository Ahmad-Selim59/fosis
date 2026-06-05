import { Container } from "@/components/ui/container";
import { socialContacts } from "@/lib/contact-data";

export function ContactFindUs() {
  return (
    <section className="bg-white section-padding-md">
      <Container>
        <h2 className="headline-kerning mb-6 text-center text-3xl font-extrabold text-brand-navy md:text-4xl">
          Find Us
        </h2>

        <p className="mx-auto mb-10 max-w-3xl text-center text-lg leading-relaxed text-brand-navy/70">
          FOSIS operates nationally across the UK and Ireland with a distributed
          team. Reach out via email first and we can provide a current mailing
          address for any postal correspondence.
        </p>

        <ul className="mx-auto max-w-4xl space-y-3 text-center">
          {socialContacts.map((social) => (
            <li key={social.label} className="text-brand-navy">
              <span className="font-semibold">{social.label}:</span>{" "}
              <a
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-brand-mustard underline decoration-brand-mustard/40 underline-offset-4 transition-colors hover:text-brand-navy"
              >
                {social.handle}
              </a>
            </li>
          ))}
        </ul>
      </Container>
    </section>
  );
}
