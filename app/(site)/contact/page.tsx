import { ContactDirectContacts } from "@/components/contact/direct-contacts";
import { ContactFindUs } from "@/components/contact/find-us";
import { ContactGetInvolvedCta } from "@/components/contact/get-involved-cta";
import { ContactHero } from "@/components/contact/hero";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact Us - FOSIS",
  description:
    "Get in touch with FOSIS — general enquiries, media, affiliations, careers, training, and the President's office.",
};

export default function ContactPage() {
  return (
    <main>
      <ContactHero />
      <ContactDirectContacts />
      <ContactFindUs />
      <ContactGetInvolvedCta />
    </main>
  );
}
