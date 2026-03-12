import { Button } from "@/components/ui/button";
import { Shield, Lock, CheckCircle } from "lucide-react";
import { useNavigate } from "react-router-dom";

const ProfileFormSection = () => {
  const navigate = useNavigate();
  return (
    <section id="profile-form" className="section-padding">
      <div className="mx-auto max-w-6xl">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left Content */}
          <div>
            <div className="inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/10 px-4 py-1.5 mb-8">
              <span className="text-xs font-semibold tracking-widest text-primary uppercase">💎 Premium Matchmaking Service</span>
            </div>
            <h2 className="font-heading text-4xl font-extralight text-foreground md:text-5xl lg:text-6xl leading-tight">
              Create Your<br />
              <span className="gold-text italic">Private</span> Profile
            </h2>
            <p className="mt-6 text-muted-foreground leading-relaxed max-w-md">
              Join an exclusive community of accomplished Lunch Actually singles. Our bespoke matching process ensures absolute discretion and meaningful connections.
            </p>
            <div className="mt-10 flex items-start gap-8">
              <div className="flex items-start gap-3">
                <div className="mt-0.5 flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-primary/20">
                  <CheckCircle className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <p className="font-semibold text-foreground text-sm">100% Verified</p>
                  <p className="text-xs text-muted-foreground">Every member is hand-screened for authenticity.</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="mt-0.5 flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-primary/20">
                  <Lock className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <p className="font-semibold text-foreground text-sm">Confidential</p>
                  <p className="text-xs text-muted-foreground">Your identity remains private until you choose.</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Form */}
          <div className="glass-card luxury-shadow p-8 md:p-10">
            <form className="space-y-4" onSubmit={(e) => { e.preventDefault(); window.top.location.href = "https://ariewirana-lang.github.io/elite/thank-you"; }}>
              <input type="text" placeholder="Full Name" className="w-full rounded-lg border border-border bg-secondary/50 px-4 py-3.5 text-sm text-foreground placeholder:text-muted-foreground/60 focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary transition-colors" />
              <input type="email" placeholder="Email Address" className="w-full rounded-lg border border-border bg-secondary/50 px-4 py-3.5 text-sm text-foreground placeholder:text-muted-foreground/60 focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary transition-colors" />
              <input type="tel" placeholder="Mobile Number" className="w-full rounded-lg border border-border bg-secondary/50 px-4 py-3.5 text-sm text-foreground placeholder:text-muted-foreground/60 focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary transition-colors" />
              <div className="grid grid-cols-2 gap-4">
                <select className="w-full rounded-lg border border-border bg-secondary/50 px-4 py-3.5 text-sm text-muted-foreground/60 focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary transition-colors">
                  <option value="">Gender</option>
                  <option value="male">Male</option>
                  <option value="female">Female</option>
                </select>
                <input type="number" placeholder="Age" className="w-full rounded-lg border border-border bg-secondary/50 px-4 py-3.5 text-sm text-foreground placeholder:text-muted-foreground/60 focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary transition-colors" />
              </div>
              <select className="w-full rounded-lg border border-border bg-secondary/50 px-4 py-3.5 text-sm text-muted-foreground/60 focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary transition-colors">
                <option value="">Residential Status</option>
                <option value="citizen">Citizen</option>
                <option value="pr">Permanent Resident</option>
                <option value="expat">Expatriate</option>
                <option value="other">Other</option>
              </select>
              <select className="w-full rounded-lg border border-border bg-secondary/50 px-4 py-3.5 text-sm text-muted-foreground/60 focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary transition-colors">
                <option value="">How did you hear about us?</option>
                <option value="google">Google</option>
                <option value="social">Social Media</option>
                <option value="friend">Friend/Family</option>
                <option value="event">Event</option>
                <option value="other">Other</option>
              </select>
              <Button variant="gold" size="lg" className="w-full text-sm font-bold tracking-widest uppercase py-4">
                Get Started
              </Button>
            </form>
            <p className="mt-4 text-center text-[10px] uppercase tracking-wider text-muted-foreground">
              By submitting this form, you agree to our{" "}
              <a href="#" className="underline text-foreground hover:text-primary">Terms & Privacy Policy</a>
            </p>
            <div className="mt-4 flex items-center justify-center gap-6 border-t border-border/50 pt-4">
              <div className="flex items-center gap-1.5">
                <Shield className="h-4 w-4 text-primary" />
                <span className="text-[10px] uppercase tracking-wider font-semibold text-muted-foreground">Secure SSL Encrypted</span>
              </div>
              <div className="flex items-center gap-1.5">
                <CheckCircle className="h-4 w-4 text-primary" />
                <span className="text-[10px] uppercase tracking-wider font-semibold text-muted-foreground">Privacy Guaranteed</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProfileFormSection;
