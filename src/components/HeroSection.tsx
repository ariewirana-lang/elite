import heroCouple from "@/assets/hero-couple.jpg";
import coupleStory1 from "@/assets/couple-story-1.jpg";
import coupleStory2 from "@/assets/couple-story-2.jpg";
import coupleStory3 from "@/assets/couple-story-3.jpg";
import { Button } from "@/components/ui/button";
import { ArrowLeft, ArrowRight } from "lucide-react";

const testimonials = [
  {
    names: "Jerry & Kim",
    img: coupleStory1,
    quote: "I never thought that I would be that lucky to have such a nice person with me. Thank you so much to Lunch Actually!",
  },
  {
    names: "Alicia & Jioun",
    img: coupleStory2,
    quote: "I joined Lunch Actually because I was looking for someone who would be my life partner and spouse.",
  },
  {
    names: "Alex & Ashley",
    img: coupleStory3,
    quote: "Lunch Actually's meticulous matching has led to our successful pairing! We have been a couple since we were first introduced.",
  },
];

const HeroSection = () => {
  return (
    <section className="relative min-h-screen pt-20">
      <div className="section-padding mx-auto max-w-7xl">
        {/* Top heading area */}
        <div className="flex items-end justify-between mb-12 animate-fade-up">
          <div className="max-w-2xl">
            <h1 className="font-heading text-4xl font-bold leading-tight text-foreground md:text-5xl lg:text-6xl">
              Find Love with{" "}
              <br />
              Asia's Leading{" "}
              <span className="gold-text italic">Dating Agency</span>
            </h1>
            <p className="mt-4 max-w-lg text-muted-foreground">
              High-end matchmaking for Singapore's Most Eligible Singles. We celebrate the unions that define our commitment to excellence and cultural resonance.
            </p>
          </div>
          <div className="hidden md:flex items-center gap-3">
            <button className="h-10 w-10 rounded-full border border-border flex items-center justify-center text-muted-foreground hover:text-foreground hover:border-foreground transition-colors">
              <ArrowLeft className="h-4 w-4" />
            </button>
            <button className="h-10 w-10 rounded-full border border-border flex items-center justify-center text-muted-foreground hover:text-foreground hover:border-foreground transition-colors">
              <ArrowRight className="h-4 w-4" />
            </button>
          </div>
        </div>

        {/* Two column: featured couple + testimonials */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 animate-fade-up animate-fade-in-delay-2">
          {/* Left - Featured couple image with overlaid quote */}
          <div className="relative">
            <div className="overflow-hidden rounded-2xl">
              <img
                src={heroCouple}
                alt="Happy couple"
                className="h-[500px] w-full object-cover object-top lg:h-[550px] transition-transform duration-500 hover:scale-105"
              />
            </div>
            {/* Overlaid quote card */}
            <div className="absolute bottom-0 left-0 right-0 p-6">
              <div className="glass-card p-5 rounded-xl">
                <p className="font-heading text-sm italic text-foreground leading-relaxed">
                  "Lunch Actually is a great platform to find someone. We are taking the date that Lunch Actually arranged our date, to be our anniversary date!"
                </p>
                <div className="flex items-center justify-between mt-3">
                  <div>
                    <p className="text-sm font-semibold text-foreground">Jack & Joanne</p>
                    <p className="text-xs text-muted-foreground">Matched in Singapore, 2023</p>
                  </div>
                  <a href="#stories" className="text-xs text-primary font-medium hover:underline">
                    READ FULL STORY ↗
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Right - Testimonial list */}
          <div className="flex flex-col justify-between gap-6">
            {testimonials.map((t) => (
              <div key={t.names} className="flex items-start gap-4">
                <img
                  src={t.img}
                  alt={t.names}
                  className="h-16 w-16 rounded-lg object-cover flex-shrink-0"
                />
                <div>
                  <h3 className="font-heading text-base font-semibold text-foreground">{t.names}</h3>
                  <p className="text-sm text-muted-foreground italic leading-relaxed mt-1">
                    "{t.quote}"
                  </p>
                </div>
              </div>
            ))}

            <a href="#stories">
              <Button variant="gold-outline" size="lg" className="w-full mt-2">
                View All Stories
              </Button>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
