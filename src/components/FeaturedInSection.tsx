const mediaLogos = [
  "Bloomberg",
  "Forbes",
  "CNN",
  "CNBC",
  "The Straits Times",
  "Business Insider",
  "BBC",
];

const FeaturedInSection = () => {
  return (
    <section className="border-t border-border/30 bg-plum-deep py-14 px-6">
      <div className="mx-auto max-w-7xl text-center">
        <p className="font-heading text-xs italic tracking-[0.3em] text-muted-foreground uppercase mb-10">
          Featured In
        </p>
        <div className="flex flex-wrap items-center justify-center gap-8 md:gap-12 lg:gap-16">
          {mediaLogos.map((name) => (
            <span
              key={name}
              className="font-heading text-sm font-semibold text-muted-foreground/50 tracking-wide md:text-base"
            >
              {name}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedInSection;
