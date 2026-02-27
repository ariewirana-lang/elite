import { Button } from "@/components/ui/button";

const JoinIntakeSection = () => {
  return (
    <section id="apply" className="section-padding">
      <div className="mx-auto max-w-2xl">
        <div className="relative rounded-2xl border border-gold/30 bg-card p-8 md:p-12 luxury-shadow">
          {/* Decorative corner accents */}
          <div className="absolute top-0 left-0 h-8 w-8 border-t-2 border-l-2 border-primary rounded-tl-2xl" />
          <div className="absolute top-0 right-0 h-8 w-8 border-t-2 border-r-2 border-primary rounded-tr-2xl" />
          <div className="absolute bottom-0 left-0 h-8 w-8 border-b-2 border-l-2 border-primary rounded-bl-2xl" />
          <div className="absolute bottom-0 right-0 h-8 w-8 border-b-2 border-r-2 border-primary rounded-br-2xl" />

          <div className="text-center mb-8">
            <h2 className="font-heading text-3xl font-bold text-foreground md:text-4xl">
              Join the <span className="gold-text italic">Next Private Intake</span>
            </h2>
            <p className="mt-3 text-sm text-muted-foreground">
              Limited slots available for our next private intake. Apply now to secure your place.
            </p>
          </div>

          <form className="space-y-5" onSubmit={(e) => e.preventDefault()}>
            <div>
              <label className="mb-1.5 block text-xs font-medium text-muted-foreground">Full Name</label>
              <input type="text" placeholder="Your name" className="w-full rounded-lg border border-border bg-secondary/50 px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground/60 focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary transition-colors" />
            </div>
            <div>
              <label className="mb-1.5 block text-xs font-medium text-muted-foreground">Email</label>
              <input type="email" placeholder="your@email.com" className="w-full rounded-lg border border-border bg-secondary/50 px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground/60 focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary transition-colors" />
            </div>
            <div>
              <label className="mb-1.5 block text-xs font-medium text-muted-foreground">Phone</label>
              <input type="tel" placeholder="+1 (555) 000-0000" className="w-full rounded-lg border border-border bg-secondary/50 px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground/60 focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary transition-colors" />
            </div>
            <Button variant="gold" size="lg" className="w-full">Apply Now</Button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default JoinIntakeSection;
