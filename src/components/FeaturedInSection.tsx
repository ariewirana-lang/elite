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
    <section className="border-t border-border/10 bg-plum-deep py-10 px-6">
      <div className="mx-auto max-w-5xl text-center">
        <p className="font-heading text-[10px] italic tracking-[0.35em] text-muted-foreground/60 uppercase mb-8">
          Featured In
        </p>
        <div className="flex flex-wrap items-center justify-center gap-6 md:gap-10 lg:gap-14">
          {mediaLogos.map((media) => (
            <img
              key={media.name}
              src={media.src}
              alt={media.name}
              className="h-3 md:h-4 w-auto opacity-40"
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedInSection;
