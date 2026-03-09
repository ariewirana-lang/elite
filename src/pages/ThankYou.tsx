import { Button } from "@/components/ui/button";
import { Shield, CheckCircle, Lock, Heart } from "lucide-react";
import { useNavigate } from "react-router-dom";

const ThankYou = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-background flex items-center justify-center px-4 py-16">
      <div className="mx-auto max-w-5xl w-full grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
        {/* Left Content */}
        <div>
          <div className="inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/10 px-4 py-1.5 mb-8">
            <CheckCircle className="h-4 w-4 text-primary" />
            <span className="text-xs font-semibold tracking-widest text-primary uppercase">
              Application Received
            </span>
          </div>

          <h1 className="font-heading text-4xl font-extralight text-foreground md:text-5xl lg:text-6xl leading-tight">
            Thank You
            <br />
            <span className="gold-text italic">for Your Interest</span>
          </h1>

          <p className="mt-6 text-muted-foreground leading-relaxed max-w-md">
            Your profile has been successfully submitted to our elite matchmaking
            team. We understand the value of your time and the importance of
            finding the right partner.
          </p>

          <div className="mt-10 flex items-start gap-8">
            <div className="flex items-start gap-3">
              <div className="mt-0.5 flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-primary/20">
                <Lock className="h-5 w-5 text-primary" />
              </div>
              <div>
                <p className="font-semibold text-foreground text-sm">
                  Absolute Discretion
                </p>
                <p className="text-xs text-muted-foreground">
                  Your identity and personal details remain strictly
                  confidential.
                </p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <div className="mt-0.5 flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-primary/20">
                <Heart className="h-5 w-5 text-primary" />
              </div>
              <div>
                <p className="font-semibold text-foreground text-sm">
                  Personal Touch
                </p>
                <p className="text-xs text-muted-foreground">
                  A dedicated consultant will curate matches tailored
                  specifically to you.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Right Card */}
        <div className="glass-card luxury-shadow p-8 md:p-10">
          <h2 className="font-heading text-2xl font-extralight text-foreground">
            Next Steps
          </h2>
          <div className="mt-2 h-0.5 w-10 bg-primary" />

          <div className="mt-8 space-y-6">
            {[
              {
                num: "01",
                text: "Our senior consultants will review your profile against our exclusive network.",
              },
              {
                num: "02",
                text: "You will receive a call or email within 24-48 hours for a private consultation.",
              },
              {
                num: "03",
                text: "We will begin the bespoke selection process for your potential matches.",
              },
            ].map((step) => (
              <div key={step.num} className="flex items-start gap-4">
                <span className="text-sm font-light text-primary/60">
                  {step.num}.
                </span>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {step.text}
                </p>
              </div>
            ))}
          </div>

          <Button
            variant="gold"
            size="lg"
            className="w-full mt-8 text-sm font-bold tracking-widest uppercase"
            onClick={() => navigate("/")}
          >
            Back to Homepage
          </Button>

          <div className="mt-6 flex items-center justify-center gap-6 border-t border-border/50 pt-4">
            <div className="flex items-center gap-1.5">
              <Shield className="h-4 w-4 text-primary" />
              <span className="text-[10px] uppercase tracking-wider font-semibold text-muted-foreground">
                Secure SSL Encrypted
              </span>
            </div>
            <div className="flex items-center gap-1.5">
              <CheckCircle className="h-4 w-4 text-primary" />
              <span className="text-[10px] uppercase tracking-wider font-semibold text-muted-foreground">
                Privacy Guaranteed
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ThankYou;
