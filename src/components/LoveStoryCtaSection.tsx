const stats = [
  { value: "500+", label: "MARRIAGES" },
  { value: "87%", label: "CLIENT SATISFACTION" },
  { value: "4 Mo", label: "AVG MATCH TIME" },
  { value: "160k+", label: "DATES ARRANGED" },
];

const LoveStoryCtaSection = () => {
  return (
    <section className="relative">
      {/* Stats bar */}
      <div className="border-y border-border/30 bg-background">
        <div className="mx-auto flex max-w-7xl flex-wrap items-center justify-between px-6 py-10 lg:px-8">
          {stats.map((s) => (
            <div key={s.label} className="flex-1 text-center px-4 py-4">
              <p className="font-heading text-3xl font-bold text-foreground md:text-4xl lg:text-5xl">
                {s.value}
              </p>
              <p className="mt-2 text-xs tracking-[0.2em] text-muted-foreground">
                {s.label}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* CTA block */}
      <div className="bg-plum-deep py-20 px-6 text-center lg:py-28">
        <h2 className="font-heading text-3xl font-bold italic text-foreground md:text-4xl lg:text-5xl leading-tight">
          Your love story is the next one
          <br />
          we want to tell.
        </h2>
        <p className="mx-auto mt-6 max-w-2xl font-heading text-sm italic text-muted-foreground leading-relaxed md:text-base">
          Our discrete, bespoke approach ensures that your journey to finding a life partner is as exceptional as
          your lifestyle. Join the most exclusive network of Asian singles worldwide.
        </p>
        <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
          <a
            href="#profile-form"
            className="rounded-md bg-violet px-8 py-3 text-sm font-semibold text-foreground border border-border/50 transition-opacity hover:opacity-90"
          >
            Inquire for Membership
          </a>
          <a
            href="#journey"
            className="rounded-md border border-border/50 px-8 py-3 text-sm font-semibold text-foreground transition-colors hover:bg-accent"
          >
            Explore Our Process
          </a>
        </div>
      </div>
    </section>
  );
};

export default LoveStoryCtaSection;
