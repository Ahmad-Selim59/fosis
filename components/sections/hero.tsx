import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Container } from "@/components/ui/container";
import { routes } from "@/lib/routes";

const HERO_IMAGE =
  "https://lh3.googleusercontent.com/aida/ADBb0ui-29Sp1aoO8TPo4SZeDs1btlNVisI3OVl7SzhMO8ScBt5ikGJmClszrpMgose4fcOzDJYzX2jfDsmkybLuJLyGLhDDtH5FrhQ8YLdK4TgINvzHyBD5Z5GNZ_ahwdm-feyCnU2rvInBXpS17f1c4ExELgh5-UhrtOjC4kUIq2d6u6d2duiX4cCPqlCGwfR2-TEYZFPGgH19SB4zYjR6kMLwIGUtYBF92fSZxNVNZdg08bBeeji5EWmNoP4sCUXT6Lp8ax7YmqcZJA";

export function HeroSection() {
  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0 z-0">
        <Image
          src={HERO_IMAGE}
          alt="Group of diverse Muslim students"
          fill
          className="object-cover"
          priority
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-brand-navy/70 mix-blend-multiply" />
        <div className="absolute inset-0 bg-gradient-to-t from-brand-navy via-transparent to-brand-navy/40" />
      </div>

      <Container className="relative z-10 flex flex-col items-start justify-center section-padding">
        <p className="eyebrow mb-8">
          Est. 1963 — The Federation of Student Islamic Societies
        </p>

        <div className="mb-6 max-w-4xl">
          <h1 className="headline-kerning text-5xl font-extrabold uppercase md:text-6xl lg:text-7xl">
            Empowering Muslim Students.
            <br />
            Enriching Society.
          </h1>
        </div>

        <div className="mb-10 max-w-2xl">
          <p className="text-lg font-light leading-relaxed text-gray-200 md:text-xl">
            The UK&apos;s national voice for Muslim students in higher education
            — connecting over 100 Islamic Societies and 350,000 students across
            every campus in the country.
          </p>
        </div>

        <div className="flex w-full flex-col gap-4 sm:w-auto sm:flex-row">
          <Button href={routes.affiliate} className="w-full sm:w-auto">
            Affiliate Your Isoc
          </Button>
        </div>
      </Container>
    </section>
  );
}
