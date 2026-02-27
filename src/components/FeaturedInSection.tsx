import bloombergLogo from "@/assets/media/bloomberg.png";
import forbesLogo from "@/assets/media/forbes.png";
import cnnLogo from "@/assets/media/cnn.png";
import cnbcLogo from "@/assets/media/cnbc.png";
import straitTimesLogo from "@/assets/media/straits-times.png";
import businessInsiderLogo from "@/assets/media/business-insider.png";
import bbcLogo from "@/assets/media/bbc.png";

const mediaLogos = [
  { name: "Bloomberg", src: bloombergLogo },
  { name: "Forbes", src: forbesLogo },
  { name: "CNN", src: cnnLogo },
  { name: "CNBC", src: cnbcLogo },
  { name: "The Straits Times", src: straitTimesLogo },
  { name: "Business Insider", src: businessInsiderLogo },
  { name: "BBC", src: bbcLogo },
];

const FeaturedInSection = () => {
  return (
    <section className="border-t border-border/30 bg-plum-deep py-14 px-6">
      <div className="mx-auto max-w-7xl text-center">
        <p className="font-heading text-xs italic tracking-[0.3em] text-muted-foreground uppercase mb-10">
          Featured In
        </p>
        <div className="flex flex-wrap items-center justify-center gap-8 md:gap-12 lg:gap-16">
          {mediaLogos.map((media) => (
            <img
              key={media.name}
              src={media.src}
              alt={media.name}
              className="h-5 md:h-6 w-auto opacity-50 grayscale"
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedInSection;
