const stats = [
  { value: "25–45", label: "Average Age" },
  { value: "97%", label: "Success Rate" },
  { value: "23", label: "Countries" },
  { value: "4.5K", label: "Verified Members" },
];

const StatisticsSection = () => {
  return (
    <section className="section-padding">
      <div className="mx-auto max-w-7xl text-center">
        <h2 className="font-heading text-3xl font-bold text-foreground md:text-5xl">
          Member <span className="gold-text italic">Collective</span>
        </h2>
        <p className="mx-auto mt-3 max-w-lg text-muted-foreground">
          A carefully curated community of distinguished professionals.
        </p>

        <div className="mx-auto mt-12 flex flex-col items-center gap-12 lg:flex-row lg:justify-center lg:gap-20">
          {/* Circular diagram */}
          <div className="relative flex h-56 w-56 items-center justify-center">
            <svg className="absolute h-full w-full -rotate-90" viewBox="0 0 200 200">
              <circle cx="100" cy="100" r="85" fill="none" stroke="hsl(270 15% 22%)" strokeWidth="12" />
              <circle
                cx="100" cy="100" r="85" fill="none"
                stroke="hsl(43 65% 52%)" strokeWidth="12"
                strokeDasharray={`${0.7 * 2 * Math.PI * 85} ${2 * Math.PI * 85}`}
                strokeLinecap="round"
              />
            </svg>
            <div className="text-center">
              <p className="font-heading text-4xl font-bold text-primary">70%</p>
              <p className="text-xs text-muted-foreground">Match Success</p>
            </div>
          </div>

          {/* Stats grid */}
          <div className="grid grid-cols-2 gap-8">
            {stats.map((s) => (
              <div key={s.label} className="text-center">
                <p className="font-heading text-3xl font-bold text-foreground">{s.value}</p>
                <p className="text-sm text-muted-foreground">{s.label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default StatisticsSection;
