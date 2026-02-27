import profileWoman1 from "@/assets/profile-woman-1.jpg";
import profileMan1 from "@/assets/profile-man-1.jpg";
import profileWoman2 from "@/assets/profile-woman-2.jpg";
import profileMan2 from "@/assets/profile-man-2.jpg";
import { Button } from "@/components/ui/button";

const profiles = [
  { img: profileWoman1, name: "Accomplished", desc: "Career-driven" },
  { img: profileMan1, name: "Refined", desc: "Values-oriented" },
  { img: profileWoman2, name: "Elegant", desc: "Relationship-ready" },
  { img: profileMan2, name: "Ambitious", desc: "Quality-focused" },
];

const ThisIsYouSection = () => {
  return (
    <section id="about" className="section-padding">
      <div className="mx-auto max-w-7xl text-center">
        <h2 className="font-heading text-3xl font-bold text-foreground md:text-5xl">
          This Is <span className="gold-text italic">You</span>
        </h2>
        <p className="mx-auto mt-4 max-w-2xl text-muted-foreground">
          You are successful, career-driven, and quality-oriented. You seek genuine relationships 
          with someone who shares your values and ambition. We understand — because we serve only 
          individuals like you.
        </p>

        <div className="mt-12 grid grid-cols-2 gap-4 md:grid-cols-4 md:gap-6">
          {profiles.map((p) => (
            <div key={p.name} className="group relative overflow-hidden rounded-xl">
              <img src={p.img} alt={p.name} className="h-72 w-full object-cover transition-transform duration-500 group-hover:scale-105 md:h-80" />
              <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/20 to-transparent" />
              <div className="absolute bottom-4 left-4">
                <p className="font-heading text-lg font-semibold text-foreground">{p.name}</p>
                <p className="text-xs text-muted-foreground">{p.desc}</p>
              </div>
            </div>
          ))}
        </div>

        <Button variant="gold-outline" size="lg" className="mt-10">See If You Qualify</Button>
      </div>
    </section>
  );
};

export default ThisIsYouSection;
