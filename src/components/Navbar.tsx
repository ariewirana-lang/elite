import laLogo from "@/assets/la-logo-white.png";

const Navbar = () => {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 border-b border-border/30 bg-background/80 backdrop-blur-xl">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-6 lg:px-8">
        <a href="#" className="flex items-center">
          <img src={laLogo} alt="Lunch Actually" className="h-7" />
        </a>
        <div className="flex items-center gap-10">
          <a href="#stories" className="text-sm text-muted-foreground transition-colors hover:text-foreground">Success Stories</a>
          <a href="#journey" className="text-sm text-muted-foreground transition-colors hover:text-foreground">Our Process</a>
          <a href="#about" className="text-sm text-muted-foreground transition-colors hover:text-foreground">Membership</a>
          <a href="#significance" className="text-sm text-muted-foreground transition-colors hover:text-foreground">About Us</a>
          <a href="#profile-form" className="rounded-md bg-violet px-5 py-2 text-sm font-semibold text-foreground transition-opacity hover:opacity-90">
            Begin Your Story
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
