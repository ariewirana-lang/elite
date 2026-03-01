import { Button } from "@/components/ui/button";
import { Shield, BadgeCheck, Heart } from "lucide-react";

const JoinIntakeSection = () => {
  return (
    <section id="apply" className="section-padding">
      <div className="mx-auto max-w-6xl">
        {/* Membership Status Bar */}
        <div className="mb-6 rounded-lg border border-primary/20 bg-card/50 px-6 py-3">
          <div className="flex items-center justify-between text-xs font-semibold tracking-widest uppercase">
            <span className="text-primary">Membership Status</span>
            <span className="text-foreground">92% Capacity</span>
          </div>
          <div className="mt-2 h-1.5 w-full rounded-full bg-secondary">
            <div className="h-full w-[92%] rounded-full bg-gradient-to-r from-primary to-primary/70 transition-all" />
          </div>
          <p className="mt-2 text-center text-[11px] text-primary/80">
            Limited intake availability remaining for the current quarter.
          </p>
        </div>

        <div className="grid items-center gap-10 lg:grid-cols-2">
          {/* Left — Luxury Invitation Visual */}
          <div className="relative hidden lg:block">
            <div className="relative mx-auto max-w-sm rounded-xl border border-primary/20 bg-gradient-to-b from-card to-secondary/40 p-10 shadow-2xl">
              <div className="absolute inset-0 rounded-xl bg-gradient-to-br from-primary/5 to-transparent" />
              <div className="relative text-center">
                <div className="mx-auto mb-6 h-24 w-24 rounded-full bg-gradient-to-br from-primary/20 to-primary/5 flex items-center justify-center">
                  <Heart className="h-10 w-10 text-primary" />
                </div>
                <h3 className="font-heading text-3xl italic text-primary">
                  Luxury
                </h3>
                <p className="font-heading text-2xl italic text-primary/80">
                  invitation
                </p>
                <div className="mt-6 space-y-1">
                  <div className="mx-auto h-px w-3/4 bg-primary/20" />
                  <div className="mx-auto h-px w-1/2 bg-primary/15" />
                  <div className="mx-auto h-px w-2/3 bg-primary/10" />
                </div>
              </div>
            </div>
            <p className="mt-6 text-center font-heading text-sm italic text-muted-foreground">
              "The most exclusive network for high-achieving
              <br />
              individuals seeking genuine connection."
            </p>
          </div>

          {/* Right — Form */}
          <div>
            <h2 className="font-heading text-3xl font-bold text-foreground md:text-4xl lg:text-5xl">
              Join the Waitlist
              <br />
              for Our{" "}
              <span className="gold-text italic">
                Next
                <br />
                Private Intake
              </span>
            </h2>
            <p className="mt-4 text-sm text-muted-foreground leading-relaxed">
              Our selection process is rigorous. We accept fewer than 5% of
              applicants to maintain the highest standard of the peer-to-peer
              network.
            </p>

            <form
              className="mt-8 space-y-4 rounded-xl border border-border/50 bg-card/30 p-6"
              onSubmit={(e) => e.preventDefault()}
            >
              <div className="grid gap-4 sm:grid-cols-2">
                <div>
                  <label className="mb-1.5 block text-[10px] font-semibold tracking-widest text-muted-foreground uppercase">
                    Full Name
                  </label>
                  <input
                    type="text"
                    placeholder="Enter your name"
                    className="w-full rounded-lg border border-border bg-secondary/50 px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground/60 focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary transition-colors"
                  />
                </div>
                <div>
                  <label className="mb-1.5 block text-[10px] font-semibold tracking-widest text-muted-foreground uppercase">
                    WhatsApp / Phone
                  </label>
                  <input
                    type="tel"
                    placeholder="+1 (555) 000-0000"
                    className="w-full rounded-lg border border-border bg-secondary/50 px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground/60 focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary transition-colors"
                  />
                </div>
              </div>
              <Button variant="gold" size="lg" className="w-full text-sm font-semibold tracking-wider uppercase">
                Request Private Invitation
              </Button>
            </form>
          </div>
        </div>

        {/* Trust Badges */}
        <div className="mt-10 flex flex-wrap items-center justify-center gap-8 text-center">
          {[
            { icon: Shield, title: "Absolute Privacy", sub: "Discrete Handling of Data" },
            { icon: BadgeCheck, title: "Verified Net Worth", sub: "Peer-to-Peer Network" },
            { icon: Heart, title: "Hand-Picked Matches", sub: "Expert Human Curation" },
          ].map((b) => (
            <div key={b.title} className="flex items-center gap-3">
              <b.icon className="h-5 w-5 text-primary" />
              <div className="text-left">
                <span className="block text-[10px] font-semibold tracking-widest text-foreground uppercase">
                  {b.title}
                </span>
                <span className="text-[10px] text-muted-foreground uppercase tracking-wider">
                  {b.sub}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default JoinIntakeSection;
