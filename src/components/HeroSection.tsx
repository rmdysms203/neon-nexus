import { useState, useEffect } from "react";
import { Button } from "./ui/button";
import { ExternalLink } from "lucide-react";

const taglines = [
  "Engineered to execute. Designed to impress.",
  "Silent, sleek, and always one step ahead.",
  "Remedy doesn't lag. Neither should you.",
  "The cleanest chaos you'll ever run.",
  "This isn't a toolkit. It's a takeover.",
  "Not for everyone. Just the ones who win.",
  "Tools made for ops. Not followers.",
  "Welcome to the underground elite.",
  "Precision-coded. Chaos-enabled.",
  "Execute like a dev. Operate like a ghost.",
  "Command your Discord empire.",
  "Systematic. Streamlined. Savage.",
  "Built in the shadows. For those who own the dark.",
  "Smart tools for sharper minds.",
  "Where visuals and violence align.",
  "One click. Total control.",
  "Maximum output. Minimal trace.",
];

const HeroSection = () => {
  const [currentTagline, setCurrentTagline] = useState(taglines[0]);
  const [isGlitching, setIsGlitching] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setIsGlitching(true);
      setTimeout(() => {
        setCurrentTagline(taglines[Math.floor(Math.random() * taglines.length)]);
        setIsGlitching(false);
      }, 300);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center px-4 pt-20">
      {/* Scanline effect */}
      <div className="absolute inset-0 scanline opacity-30 pointer-events-none" />
      
      {/* Decorative elements */}
      <div className="absolute top-1/4 left-10 w-32 h-32 border border-primary/20 rotate-45 animate-float" />
      <div className="absolute bottom-1/4 right-10 w-24 h-24 border border-secondary/20 rotate-12 animate-float" style={{ animationDelay: "1s" }} />
      
      {/* Main content */}
      <div className="relative z-10 text-center max-w-4xl mx-auto">
        {/* Logo/Brand */}
        <h1 className="text-7xl md:text-9xl font-display font-black tracking-[0.3em] mb-8 relative">
          <span className="text-gradient-cyber">REMEDY</span>
          {/* Glitch layers */}
          <span 
            className="absolute inset-0 text-primary opacity-50 animate-glitch"
            style={{ clipPath: "inset(0 0 50% 0)" }}
            aria-hidden="true"
          >
            REMEDY
          </span>
        </h1>

        {/* Tagline */}
        <div className="h-16 flex items-center justify-center mb-12">
          <p
            className={`text-lg md:text-xl font-body text-muted-foreground tracking-wide transition-all duration-300 ${
              isGlitching ? "opacity-0 translate-y-2" : "opacity-100 translate-y-0"
            }`}
          >
            {currentTagline}
          </p>
        </div>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button
            size="xl"
            variant="neon"
            className="group"
            onClick={() => window.open("https://rmdyfun.mysellauth.com/#products", "_blank")}
          >
            <span className="relative z-10">Buy Now</span>
            <ExternalLink className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </Button>
          <Button
            size="xl"
            variant="cyber"
            onClick={() => window.open("https://discord.gg/rmdy", "_blank")}
          >
            <span className="relative z-10">Join Discord</span>
          </Button>
        </div>

        {/* Decorative line */}
        <div className="mt-20 flex items-center justify-center gap-2">
          <div className="w-20 h-px bg-gradient-to-r from-transparent to-primary" />
          <div className="w-2 h-2 bg-primary rotate-45" />
          <div className="w-20 h-px bg-gradient-to-l from-transparent to-primary" />
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-muted-foreground/50 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-primary rounded-full mt-2 animate-pulse" />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
