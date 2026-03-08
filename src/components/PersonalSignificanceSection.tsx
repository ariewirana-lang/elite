import nimPoundImg from "@/assets/nim-pound.png";
import kornChengImg from "@/assets/korn-cheng.png";

const PersonalSignificanceSection = () => {
  return (
    <section className="section-padding bg-secondary/30">
      <div className="mx-auto max-w-7xl">
        {/* Header */}
        <div className="text-center">
          <h2 className="font-heading text-3xl font-extralight text-foreground md:text-5xl">
            A Journey of{" "}
            <span className="gold-text italic">Personal Significance</span>
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-muted-foreground leading-relaxed">
            "True luxury is found in the perfect connection. Explore the curated
            narratives of those who found their lifelong match within our exclusive circle."
          </p>
        </div>

        {/* Story 1 — image left, text right */}
        <div className="mt-16 flex flex-col items-center gap-8 md:flex-row md:gap-12">
          <div className="flex-1">
            <img
              src={nimPoundImg}
              alt="Nim & Pound"
              className="h-72 w-full rounded-sm object-cover shadow-lg md:h-80"
            />
          </div>
          <div className="flex-1 text-left">
            <span className="text-[10px] font-semibold tracking-widest text-primary uppercase">
              Inspired Story
            </span>
            <h3 className="mt-2 font-heading text-2xl font-semibold text-foreground md:text-3xl">
              Nim & Pound
            </h3>
            <p className="mt-4 font-heading text-base italic leading-relaxed text-muted-foreground md:text-lg">
              "It's not difficult to meet someone who meets the specification.
              Lunch Actually chooses a date that we have specs based on
              personalities, quirks, and looks."
            </p>
            <div className="mt-6 flex items-center gap-3">
              <div className="flex h-8 w-8 items-center justify-center rounded-full border border-primary/30">
                <span className="text-primary text-xs">◇</span>
              </div>
              <div>
                <span className="block text-[10px] font-semibold tracking-widest text-muted-foreground/60 uppercase">
                  Matchmaking Milestone
                </span>
                <span className="text-sm font-medium text-primary">
                  Succession & Shared Values
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Story 2 — text left, image right */}
        <div className="mt-20 flex flex-col items-center gap-8 md:flex-row md:gap-12">
          <div className="flex-1 text-left">
            <span className="text-[10px] font-semibold tracking-widest text-primary uppercase">
              Success Couple
            </span>
            <h3 className="mt-2 font-heading text-2xl font-semibold text-foreground md:text-3xl">
              Korn & Cheng
            </h3>
            <p className="mt-4 font-heading text-base italic leading-relaxed text-muted-foreground md:text-lg">
              "I met the right partner and got me married. If you are looking
              for someone let Lunch Actually help you. You don't have to waste
              time looking for the right person anymore."
            </p>
            <div className="mt-6 flex items-center gap-3">
              <div className="flex h-8 w-8 items-center justify-center rounded-full border border-primary/30">
                <span className="text-primary text-xs">💍</span>
              </div>
              <div>
                <span className="block text-[10px] font-semibold tracking-widest text-muted-foreground/60 uppercase">
                  Journey Chapter
                </span>
                <span className="text-sm font-medium text-primary">
                  From First Meet to Lifetime Partner
                </span>
              </div>
            </div>
          </div>
          <div className="flex-1">
            <img
              src={kornChengImg}
              alt="Korn & Cheng"
              className="h-72 w-full rounded-sm object-cover shadow-lg md:h-80"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default PersonalSignificanceSection;
