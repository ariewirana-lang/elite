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
            <div className="relative mx-auto max-w-sm overflow-hidden rounded-xl bg-[hsl(40,30%,96%)] p-12 shadow-2xl">
              {/* Gold leaf decorations top-right */}
              <svg className="absolute -top-2 -right-2 h-40 w-40 text-primary/30" viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M180 10C160 30 150 60 140 80C130 60 110 40 100 30C120 40 140 30 160 15" stroke="currentColor" strokeWidth="1.5" fill="none"/>
                <path d="M190 40C170 55 155 80 145 100C135 80 120 60 105 50C130 55 155 45 175 35" stroke="currentColor" strokeWidth="1.5" fill="none"/>
                <path d="M200 5C175 20 160 50 150 75C145 55 130 35 115 25C140 30 165 20 185 8" stroke="currentColor" strokeWidth="1.5" fill="none"/>
                <path d="M170 60C155 75 145 95 138 110C132 95 120 78 110 70C130 73 150 65 165 55" stroke="currentColor" strokeWidth="1.2" fill="none"/>
                <path d="M195 25C178 38 165 60 158 82C152 62 140 45 128 38C148 42 170 33 188 22" stroke="currentColor" strokeWidth="1.2" fill="none"/>
              </svg>
              {/* Gold leaf decorations bottom-left */}
              <svg className="absolute -bottom-2 -left-2 h-32 w-32 rotate-180 text-primary/20" viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M180 10C160 30 150 60 140 80C130 60 110 40 100 30C120 40 140 30 160 15" stroke="currentColor" strokeWidth="1.5" fill="none"/>
                <path d="M190 40C170 55 155 80 145 100C135 80 120 60 105 50C130 55 155 45 175 35" stroke="currentColor" strokeWidth="1.5" fill="none"/>
                <path d="M200 5C175 20 160 50 150 75C145 55 130 35 115 25C140 30 165 20 185 8" stroke="currentColor" strokeWidth="1.5" fill="none"/>
              </svg>

              <div className="relative text-center pt-8">
                <h3 className="font-heading text-4xl italic text-primary">
                  Luxury
                </h3>
                <p className="font-heading text-3xl italic text-primary/80">
                  invitation
                </p>
                <div className="mx-auto mt-6 h-px w-16 bg-primary/40" />
                <p className="mt-6 text-[10px] font-semibold tracking-[0.3em] uppercase text-primary/50 leading-relaxed">
                  An Exclusive Network
                  <br />
                  For Distinguished
                  <br />
                  Professionals
                </p>
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
            <h2 className="font-heading text-3xl font-extralight text-foreground md:text-4xl lg:text-5xl">
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
