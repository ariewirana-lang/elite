import { Button } from "@/components/ui/button";

const ProfileFormSection = () => {
  return (
    <section className="section-padding">
      <div className="mx-auto max-w-xl">
        <div className="glass-card luxury-shadow p-8 md:p-12">
          <div className="text-center mb-8">
            <h2 className="font-heading text-3xl font-bold text-foreground md:text-4xl">
              Create Your <span className="gold-text italic">Private</span> Profile
            </h2>
            <p className="mt-2 text-sm text-muted-foreground">Begin your journey to finding a meaningful connection.</p>
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
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="mb-1.5 block text-xs font-medium text-muted-foreground">Age</label>
                <input type="number" placeholder="Age" className="w-full rounded-lg border border-border bg-secondary/50 px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground/60 focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary transition-colors" />
              </div>
              <div>
                <label className="mb-1.5 block text-xs font-medium text-muted-foreground">Occupation</label>
                <input type="text" placeholder="Your role" className="w-full rounded-lg border border-border bg-secondary/50 px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground/60 focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary transition-colors" />
              </div>
            </div>
            <div>
              <label className="mb-1.5 block text-xs font-medium text-muted-foreground">Intent</label>
              <select className="w-full rounded-lg border border-border bg-secondary/50 px-4 py-3 text-sm text-foreground focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary transition-colors">
                <option value="">Select your intent</option>
                <option value="serious">Serious Relationship</option>
                <option value="marriage">Marriage</option>
                <option value="companionship">Companionship</option>
              </select>
            </div>
            <Button variant="gold" size="lg" className="w-full">Get Started</Button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default ProfileFormSection;
