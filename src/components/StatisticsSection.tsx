import { BookOpen, Landmark, UserCheck } from "lucide-react";

const industries = [
  "Banking", "Engineering", "Finance", "Education",
  "Medical & Healthcare", "Technology", "Consulting", "Legal",
];

const StatisticsSection = () => {
  return (
    <section id="member-collective" className="section-padding bg-plum-deep">
      <div className="mx-auto max-w-4xl text-center">
        {/* Title */}
        <h2 className="font-heading text-3xl font-extralight text-foreground md:text-5xl">
          Member <span className="gold-text italic">Collective</span>
        </h2>

        {/* Decorative divider */}
        <div className="mt-4 flex items-center justify-center gap-3">
          <span className="h-px w-12 bg-primary/40" />
          <span className="text-primary text-xs">◆</span>
          <span className="h-px w-12 bg-primary/40" />
        </div>

        {/* Subtitle */}
        <p className="mx-auto mt-5 max-w-lg gold-border rounded px-6 py-3 text-sm text-muted-foreground italic">
          A curated view into our inner circle — where exceptional heritage meets modern ambition.
        </p>

        {/* Maturity & Grace */}
        <div className="mt-14">
          <UserCheck className="mx-auto h-5 w-5 text-muted-foreground/60 mb-3" />
          <h3 className="font-heading text-2xl italic gold-text md:text-3xl">
            Maturity &amp; Grace
          </h3>

          <div className="mt-8 flex flex-col items-center gap-10 md:flex-row md:justify-center md:gap-24">
            <div className="text-center">
              <p className="font-heading text-[10px] tracking-[0.25em] text-muted-foreground/60 uppercase mb-3">
                Distinguished Gentlemen
              </p>
              <p className="font-heading text-5xl font-light text-foreground md:text-6xl">
                25 <span className="text-muted-foreground/40">–</span> 65
              </p>
            </div>
            <div className="text-center">
              <p className="font-heading text-[10px] tracking-[0.25em] text-muted-foreground/60 uppercase mb-3">
                Elegant Ladies
              </p>
              <p className="font-heading text-5xl font-light text-foreground md:text-6xl">
                23 <span className="text-muted-foreground/40">–</span> 45
              </p>
            </div>
          </div>
        </div>

        {/* Intellectual Pedigree */}
        <div className="mt-20">
          <BookOpen className="mx-auto h-5 w-5 text-muted-foreground/60 mb-3" />
          <h3 className="font-heading text-2xl italic gold-text md:text-3xl">
            Intellectual Pedigree
          </h3>

          <div className="mx-auto mt-8 flex h-48 w-48 items-center justify-center md:h-56 md:w-56">
            <svg className="absolute h-48 w-48 -rotate-90 md:h-56 md:w-56" viewBox="0 0 200 200">
              <circle cx="100" cy="100" r="88" fill="none" stroke="hsl(var(--border))" strokeWidth="1" />
              <circle
                cx="100" cy="100" r="88" fill="none"
                stroke="hsl(var(--primary))" strokeWidth="1.5"
                strokeDasharray={`${0.7 * 2 * Math.PI * 88} ${2 * Math.PI * 88}`}
              />
            </svg>
            <div className="text-center relative z-10">
              <p className="font-heading text-5xl font-light text-foreground md:text-6xl">
                70<span className="text-2xl text-muted-foreground/60">%+</span>
              </p>
              <p className="mt-1 text-sm italic text-muted-foreground/60">Masters Degree</p>
              <p className="text-sm italic text-muted-foreground/60">&amp; Beyond</p>
            </div>
          </div>
        </div>

        {/* Spheres of Influence */}
        <div className="mt-20">
          <Landmark className="mx-auto h-5 w-5 text-primary/70 mb-3" />
          <h3 className="font-heading text-2xl italic gold-text md:text-3xl">
            Spheres of Influence
          </h3>

          <div className="mt-8 grid grid-cols-2 gap-x-8 gap-y-5 md:grid-cols-4 md:gap-x-12 md:gap-y-6">
            {industries.map((industry) => (
              <div key={industry} className="text-center">
                <span className="mb-2 inline-block h-1 w-1 rounded-full bg-primary/40" />
                <p className="font-heading text-sm text-foreground/80 md:text-base">{industry}</p>
              </div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <a
          href="#profile-form"
          className="mt-14 inline-block gold-border px-10 py-3 font-heading text-xs tracking-[0.25em] text-foreground/80 uppercase transition-colors hover:bg-primary/10"
        >
          Request a Consultation
        </a>

        {/* Bottom divider */}
        <div className="mt-10 flex items-center justify-center gap-3">
          <span className="h-px w-12 bg-primary/40" />
          <span className="text-primary/40 text-xs">◉</span>
          <span className="h-px w-12 bg-primary/40" />
        </div>
        <p className="mt-3 font-heading text-[10px] tracking-[0.35em] text-muted-foreground/40 uppercase">
          By Invitation Only
        </p>
      </div>
    </section>
  );
};

export default StatisticsSection;
