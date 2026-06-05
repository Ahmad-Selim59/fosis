import { Container } from "@/components/ui/container";
import { directContacts } from "@/lib/contact-data";

export function ContactDirectContacts() {
  return (
    <section className="border-b border-gray-200 bg-white section-padding-md">
      <Container>
        <p className="mx-auto mb-12 max-w-3xl text-center text-lg leading-relaxed text-brand-navy/70">
          We would love to hear from you. Whether you are a student, an ISoc
          leader, a media professional, or a prospective partner, get in touch
          with the right team using the details below.
        </p>

        <h2 className="headline-kerning mb-10 text-center text-3xl font-extrabold text-brand-navy md:text-4xl">
          Direct Contacts
        </h2>

        <div className="mx-auto grid max-w-4xl grid-cols-1 gap-10 text-center md:grid-cols-2">
          {directContacts.map((contact) => (
            <div key={contact.email}>
              <h3 className="mb-2 font-bold text-brand-navy">{contact.title}</h3>
              <a
                href={`mailto:${contact.email}`}
                className="text-brand-mustard underline decoration-brand-mustard/40 underline-offset-4 transition-colors hover:text-brand-navy"
              >
                {contact.email}
              </a>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
