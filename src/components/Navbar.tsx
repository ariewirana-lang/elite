import logo from "@/assets/logo.png";

const Navbar = () => {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 border-b border-border/30 bg-background/80 backdrop-blur-xl">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-6 lg:px-8">
        <a href="#" className="flex items-center">
          <img src={logo} alt="Logo" className="h-8" />
        </a>
        <div className="hidden items-center gap-8 md:flex">
          <a href="#about" className="text-sm text-muted-foreground transition-colors hover:text-foreground">About</a>
          <a href="#journey" className="text-sm text-muted-foreground transition-colors hover:text-foreground">How It Works</a>
          <a href="#stories" className="text-sm text-muted-foreground transition-colors hover:text-foreground">Success Stories</a>
          <a href="#apply" className="text-sm text-muted-foreground transition-colors hover:text-foreground">Apply</a>
        </div>
        <a href="#apply" className="gold-gradient rounded-md px-5 py-2 text-sm font-semibold text-primary-foreground transition-opacity hover:opacity-90">
          Join Now
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
