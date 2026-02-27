import significanceImg1 from "@/assets/significance-1.jpg";
import significanceImg2 from "@/assets/significance-2.jpg";
import { Button } from "@/components/ui/button";

const PersonalSignificanceSection = () => {
  return (
    <section className="section-padding bg-secondary/30">
      <div className="mx-auto max-w-7xl">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          <div>
            <h2 className="font-heading text-3xl font-bold text-foreground md:text-5xl">
              A Journey of{" "}
              <span className="gold-text italic">Personal Significance</span>
            </h2>
            <p className="mt-4 text-muted-foreground leading-relaxed">
              At Lunch Actually, we believe that love is the most important investment you'll ever make. 
              Our approach is deeply personal — we take the time to understand not just who you are, 
              but who you aspire to become alongside a partner.
            </p>
            <p className="mt-4 text-muted-foreground leading-relaxed">
              Every successful union we facilitate is a testament to the power of intentional, 
              thoughtful matchmaking. Your story deserves to be extraordinary.
            </p>
            <a href="#profile-form"><Button variant="gold" size="lg" className="mt-8">Begin Your Story</Button></a>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div className="overflow-hidden rounded-xl luxury-shadow">
              <img src={significanceImg1} alt="Intimate moment" className="h-72 w-full object-cover md:h-96" />
            </div>
            <div className="mt-8 overflow-hidden rounded-xl luxury-shadow">
              <img src={significanceImg2} alt="Celebrating love" className="h-72 w-full object-cover md:h-96" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PersonalSignificanceSection;
