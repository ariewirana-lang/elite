import { Phone, CheckCircle, Heart } from "lucide-react";
import { Button } from "@/components/ui/button";

const steps = [
  { icon: Phone, title: "Discovery Call", desc: "Book a friendly 15-min chat. Meet our experienced Dating Consultant to learn more about you and your relationship goals." },
  { icon: CheckCircle, title: "Verified Profiles", desc: "Once you're a client, we handle the screening and ID checks for you. Our search begins immediately based on compatibility and personality." },
  { icon: Heart, title: "Real Connections", desc: "Simply show up and enjoy your date! Let us know your feedback after each meeting so we can fine-tune your dating criteria." },
];

const JourneyStepsSection = () => {
  return (
    <section id="journey" className="section-padding bg-secondary/30">
      <div className="mx-auto max-w-7xl text-center">
        <h2 className="font-heading text-3xl font-bold text-foreground md:text-5xl">
          Your Journey to <span className="gold-text italic">Love</span>
        </h2>
        <p className="mx-auto mt-3 max-w-lg text-muted-foreground">
          Three simple steps to finding your perfect match.
        </p>

        <div className="relative mt-12 grid gap-8 md:grid-cols-3">
          {/* Connecting line */}
          <div className="absolute top-16 left-1/6 right-1/6 hidden h-px bg-gradient-to-r from-transparent via-gold/30 to-transparent md:block" />

          {steps.map((s, i) => (
            <div key={s.title} className="relative flex flex-col items-center">
              <div className="flex h-16 w-16 items-center justify-center rounded-full gold-gradient mb-6">
                <s.icon className="h-7 w-7 text-primary-foreground" />
              </div>
              <span className="absolute -top-8 right-1/2 translate-x-1/2 text-xs font-semibold text-primary">
                Step {i + 1}
              </span>
              <h3 className="font-heading text-xl font-semibold text-foreground">{s.title}</h3>
              <p className="mt-2 max-w-xs text-sm text-muted-foreground">{s.desc}</p>
            </div>
          ))}
        </div>

        <a href="#profile-form"><Button variant="gold" size="lg" className="mt-12">Start Your Journey</Button></a>
      </div>
    </section>
  );
};

export default JourneyStepsSection;
