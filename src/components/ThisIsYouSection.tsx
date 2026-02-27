const ThisIsYouSection = () => {
  return (
    <section id="about" className="section-padding bg-[hsl(30_20%_96%)]">
      <div className="mx-auto max-w-2xl text-center">
        <h2 className="font-heading text-4xl font-bold text-plum-deep italic md:text-5xl lg:text-6xl">
          This is You
        </h2>

        <div className="mx-auto mt-4 h-0.5 w-10 bg-plum-deep/30" />

        <p className="mt-8 text-plum-deep/80 leading-relaxed">
          Intelligent, successful, and sincere. You have built a life of achievement, and now
          you seek a partner to share it with.
        </p>

        <p className="mt-6 text-plum-deep/80 leading-relaxed">
          As Asia's first and largest lunch dating company, we provide access to an{" "}
          <span className="font-heading font-bold italic">exclusive, verified database</span>{" "}
          of Singapore's most eligible singles.
        </p>

        <p className="mt-6 text-plum-deep/80 leading-relaxed">
          We don't simply match profiles. We curate connections based on your{" "}
          <span className="font-heading font-bold italic">values, legacy, and lifestyle</span>{" "}
          to find your most compatible life partner.
        </p>

        <a
          href="#profile-form"
          className="mt-10 inline-block rounded-md bg-plum-deep px-8 py-3 text-xs font-semibold tracking-[0.2em] text-foreground uppercase transition-opacity hover:opacity-90"
        >
          Inquire for Membership
        </a>
      </div>
    </section>
  );
};

export default ThisIsYouSection;
