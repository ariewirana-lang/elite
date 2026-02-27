import { Search, Clock, Smartphone, Target } from "lucide-react";

const challenges = [
  { icon: Search, title: "Lack of Quality Matches", desc: "Traditional platforms flood you with incompatible profiles, wasting your valuable time." },
  { icon: Clock, title: "Busy Professional Lifestyle", desc: "Your demanding career leaves little room for navigating the complexities of modern dating." },
  { icon: Smartphone, title: "Apps Don't Work for Serious Relationships", desc: "Swipe culture promotes superficial connections rather than meaningful partnerships." },
  { icon: Target, title: "Hard to Find Aligned Values", desc: "Finding someone who shares your ambitions, values, and vision for life is increasingly rare." },
];

const ChallengesSection = () => {
  return (
    <section className="section-padding bg-secondary/30">
      <div className="mx-auto max-w-7xl text-center">
        <h2 className="font-heading text-3xl font-bold text-foreground md:text-5xl">
          Challenges in Modern <span className="gold-text italic">Dating</span>
        </h2>
        <div className="mx-auto mt-6 max-w-xl space-y-4">
          <p className="text-base leading-relaxed text-muted-foreground tracking-wide">
            Pubs. Clubs. Awkward moments.<br />
            Dubious profiles on dating apps.
          </p>
          <p className="text-base leading-relaxed text-muted-foreground tracking-wide">
            Endless swiping. Love scams.
          </p>
          <p className="mt-2 text-base leading-relaxed text-foreground/80 italic">
            There must be a more elegant way to meet your partner in Singapore.
          </p>
          <p className="mt-6 font-heading text-sm font-semibold uppercase tracking-[0.2em] text-foreground">Say NO to:</p>
        </div>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {challenges.map((c) => (
            <div key={c.title} className="glass-card p-6 text-left transition-all duration-300 hover:border-gold/30">
              <c.icon className="h-8 w-8 text-primary mb-4" />
              <h3 className="font-heading text-lg font-semibold text-foreground">{c.title}</h3>
              <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{c.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ChallengesSection;
