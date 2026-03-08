import consultationImg from "@/assets/consultation.jpg";
import { UserCheck, ShieldCheck, HeartHandshake } from "lucide-react";

const values = [
  { icon: HeartHandshake, title: "Personalized Matchmaking", desc: "Every match is handpicked based on deep compatibility analysis and personal preferences." },
  { icon: ShieldCheck, title: "Verified Profiles", desc: "Every member undergoes thorough background verification for your safety and peace of mind." },
  { icon: UserCheck, title: "Dedicated Matchmaker", desc: "Your personal matchmaker guides you through every step, from introduction to connection." },
];

const WhyTrustUsSection = () => {
  return (
    <section className="section-padding">
      <div className="mx-auto max-w-7xl">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          <div>
            <p className="text-xs font-semibold uppercase tracking-widest text-primary">Say Yes to a Better Way</p>
            <h2 className="mt-3 font-heading text-3xl font-extralight text-foreground md:text-5xl">
              Why Professionals <span className="gold-text italic">Trust Us</span>
            </h2>
            <p className="mt-4 text-muted-foreground">
              We combine the art of human intuition with data-driven insights to create extraordinary matches.
            </p>

            <div className="mt-8 space-y-6">
              {values.map((v) => (
                <div key={v.title} className="flex gap-4">
                  <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-lg bg-primary/10">
                    <v.icon className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-heading text-lg font-semibold text-foreground">{v.title}</h3>
                    <p className="mt-1 text-sm text-muted-foreground">{v.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="relative">
            <div className="overflow-hidden rounded-2xl luxury-shadow">
              <img src={consultationImg} alt="Professional consultation" className="h-[400px] w-full object-cover lg:h-[500px]" />
            </div>
            <div className="absolute -bottom-4 -left-4 h-full w-full rounded-2xl border border-gold/20 -z-10" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyTrustUsSection;
