import jackJoanneImg from "@/assets/jack-joanne.png";
import terenceKimImg from "@/assets/terence-kim.png";
import yuhanJeffreyImg from "@/assets/yuhan-jeffrey.png";

const stories = [
  {
    img: jackJoanneImg,
    number: "01",
    names: "Jack & Joanne",
    tag: "THE FIRST SPARK",
    quote:
      "\"Lunch Actually is more than a platform; it's the architect of our shared future. Since there wasn't a specific date that we got together, we chose the day they arranged for us as our anniversary—the day our lives truly aligned.\"",
    archive: "ARCHIVE: MARRIED 2022",
  },
  {
    img: terenceKimImg,
    number: "02",
    names: "Terence & Kim",
    tag: "THE VIBE",
    quote:
      "\"For the busy professional, time is the ultimate luxury. Their consultants understood our pace and our values, handcrafting a journey that felt effortless and inevitable.\"",
    archive: "ARCHIVE: MARRIED 2023",
  },
  {
    img: yuhanJeffreyImg,
    number: "03",
    names: "Yuhan & Jeffrey",
    tag: "THE MAGIC",
    quote:
      "\"The first date that we met was the date that changed our lives forever. A magical journey began for us henceforth. We simply felt so happy and blessed to be together.\"",
    archive: "ARCHIVE: MARRIED 2021",
  },
];

const SuccessStoriesSection = () => {
  return (
    <section id="stories" className="section-padding bg-background">
      <div className="mx-auto max-w-7xl text-center">
        <h2 className="font-heading text-3xl font-extralight text-foreground md:text-5xl">
          Chapters of <span className="gold-text italic">Connection</span>
        </h2>
        <p className="mx-auto mt-3 max-w-lg text-muted-foreground">
          Real love stories from our distinguished members.
        </p>

        <div className="mt-16 flex flex-col gap-20">
          {stories.map((s, i) => {
            const isEven = i % 2 === 0;
            return (
              <div
                key={s.names}
                className={`flex flex-col items-center gap-8 md:flex-row md:gap-12 ${
                  isEven ? "" : "md:flex-row-reverse"
                }`}
              >
                {/* Text Side */}
                <div
                  className={`flex-1 text-left ${
                    isEven
                      ? "border-l-2 border-primary pl-6"
                      : ""
                  }`}
                >
                  <span className="font-heading text-2xl text-muted-foreground/40">
                    {s.number}
                  </span>
                  <div className="mt-2 flex items-center gap-3">
                    <h3 className="font-heading text-xl font-semibold text-foreground italic md:text-2xl">
                      {s.names}
                    </h3>
                    <span className="text-[10px] font-semibold tracking-widest text-primary uppercase">
                      {s.tag}
                    </span>
                  </div>
                  <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
                    {s.quote}
                  </p>
                  <p className="mt-4 text-[10px] font-semibold tracking-widest text-muted-foreground/60 uppercase">
                    {s.archive}
                  </p>
                </div>

                {/* Image Side */}
                <div className="flex-1">
                  <img
                    src={s.img}
                    alt={s.names}
                    className="w-full rounded-sm object-cover shadow-lg" style={{ aspectRatio: '568/710' }}
                  />
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default SuccessStoriesSection;
