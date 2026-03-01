import coupleStory1 from "@/assets/couple-story-1.jpg";
import coupleStory2 from "@/assets/couple-story-2.jpg";
import coupleStory3 from "@/assets/couple-story-3.jpg";

const stories = [
  {
    img: coupleStory1,
    names: "Michael & Aiko",
    year: "2023",
    story: "A surgeon and an architect, brought together through shared values and a love for meaningful conversation. Now happily married.",
  },
  {
    img: coupleStory2,
    names: "David & Mei Lin",
    year: "2022",
    story: "Both were too busy for traditional dating. Lunch Actually's curated approach connected them over a private dinner — the rest was destiny.",
  },
  {
    img: coupleStory3,
    names: "Ryan & Sophia",
    year: "2024",
    story: "Two entrepreneurs across different cities. Our matchmaker saw the potential, and within months, they were inseparable.",
  },
];

const SuccessStoriesSection = () => {
  return (
    <section id="stories" className="section-padding">
      <div className="mx-auto max-w-7xl text-center">
        <h2 className="font-heading text-3xl font-bold text-foreground md:text-5xl">
          Chapters of <span className="gold-text italic">Connection</span>
        </h2>
        <p className="mx-auto mt-3 max-w-lg text-muted-foreground">
          Real love stories from our distinguished members.
        </p>

        <div className="mt-12 grid gap-8 md:grid-cols-3">
          {stories.map((s) => (
            <div key={s.names} className="glass-card overflow-hidden transition-all duration-300 hover:border-gold/30">
              <img src={s.img} alt={s.names} className="h-64 w-full object-cover transition-transform duration-500 hover:scale-105" />
              <div className="p-6 text-left">
                <div className="flex items-center justify-between mb-2">
                  <h3 className="font-heading text-lg font-semibold text-foreground">{s.names}</h3>
                  <span className="text-xs text-primary font-medium">{s.year}</span>
                </div>
                <p className="text-sm text-muted-foreground leading-relaxed">{s.story}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SuccessStoriesSection;
