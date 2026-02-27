import heroCouple from "@/assets/hero-couple.jpg";
import profileWoman1 from "@/assets/profile-woman-1.jpg";
import profileMan1 from "@/assets/profile-man-1.jpg";
import profileWoman2 from "@/assets/profile-woman-2.jpg";
import profileMan2 from "@/assets/profile-man-2.jpg";
import { Button } from "@/components/ui/button";

const testimonials = [
  { name: "Sarah L.", role: "CEO, Tech Startup", img: profileWoman1, quote: "Éclat matched me with someone who truly understands ambition and love." },
  { name: "James C.", role: "Investment Banker", img: profileMan1, quote: "A premium experience that respects your time and priorities." },
  { name: "Elena M.", role: "Creative Director", img: profileWoman2, quote: "Finally, a matchmaking service that feels personal and exclusive." },
  { name: "David W.", role: "Surgeon", img: profileMan2, quote: "They understood exactly what I was looking for in a partner." },
];

const stats = [
  { value: "250+", label: "Matches" },
  { value: "97%", label: "Satisfaction" },
  { value: "4,500+", label: "Members" },
  { value: "10+", label: "Years Experience" },
];

const HeroSection = () => {
  return (
    <section className="relative min-h-screen pt-16">
      <div className="section-padding mx-auto grid max-w-7xl items-center gap-12 lg:grid-cols-2 lg:gap-16">
        {/* Left - Hero Image */}
        <div className="relative animate-fade-up">
          <div className="overflow-hidden rounded-2xl luxury-shadow">
            <img src={heroCouple} alt="Elegant couple" className="h-[500px] w-full object-cover object-top lg:h-[600px]" />
          </div>
          <div className="absolute -bottom-4 -right-4 h-full w-full rounded-2xl border border-gold/20 -z-10" />
        </div>

        {/* Right - Content */}
        <div className="flex flex-col gap-8">
          <div className="animate-fade-up">
            <h1 className="font-heading text-4xl font-bold leading-tight text-foreground md:text-5xl lg:text-6xl">
              Find Love with Asia's Leading{" "}
              <span className="gold-text italic">Dating Agency</span>
            </h1>
            <p className="mt-4 max-w-md text-lg text-muted-foreground">
              We help successful individuals build meaningful, long-term partnerships through curated introductions.
            </p>
          </div>

          <div className="flex flex-wrap gap-4 animate-fade-up animate-fade-in-delay-2">
            <Button variant="gold" size="lg">Join Now</Button>
            <Button variant="gold-outline" size="lg">Book a Consultation</Button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 gap-4 sm:grid-cols-4 animate-fade-up animate-fade-in-delay-3">
            {stats.map((s) => (
              <div key={s.label} className="text-center">
                <p className="font-heading text-2xl font-bold text-primary">{s.value}</p>
                <p className="text-xs text-muted-foreground">{s.label}</p>
              </div>
            ))}
          </div>

          {/* Testimonial cards */}
          <div className="grid grid-cols-2 gap-3 animate-fade-up animate-fade-in-delay-4">
            {testimonials.slice(0, 4).map((t) => (
              <div key={t.name} className="glass-card p-3 flex items-start gap-3">
                <img src={t.img} alt={t.name} className="h-10 w-10 rounded-full object-cover flex-shrink-0" />
                <div className="min-w-0">
                  <p className="text-xs text-foreground font-medium truncate">{t.name}</p>
                  <p className="text-[10px] text-muted-foreground leading-snug line-clamp-2">{t.quote}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
