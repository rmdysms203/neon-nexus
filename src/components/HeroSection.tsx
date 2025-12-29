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
      <div className="absolute inset-0 scanline opacity-20 pointer-events-none" />
      
      {/* Decorative elements */}
      <div className="absolute top-1/4 left-10 w-32 h-32 border border-primary/20 rotate-45 animate-float hidden md:block" />
      <div className="absolute bottom-1/4 right-10 w-24 h-24 border border-secondary/20 rotate-12 animate-float hidden md:block" style={{ animationDelay: "1s" }} />
      
      {/* Main content */}
      <div className="relative z-10 text-center max-w-5xl mx-auto">
        {/* Logo/Brand - Clean gradient, no glitch */}
        <h1 
          className="text-6xl sm:text-8xl md:text-9xl lg:text-[10rem] font-display font-black tracking-[0.15em] md:tracking-[0.2em] mb-8 select-none"
          style={{
            background: "linear-gradient(135deg, #ff2a6d 0%, #d629d6 30%, #9d4edd 50%, #7b5cfa 70%, #05d9e8 100%)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            backgroundClip: "text",
            filter: "drop-shadow(0 0 40px rgba(255, 42, 109, 0.4)) drop-shadow(0 0 80px rgba(5, 217, 232, 0.3))",
          }}
        >
          REMEDY
        </h1>

        {/* Tagline */}
        <div className="h-12 flex items-center justify-center mb-12">
          <p
            className={`text-base sm:text-lg md:text-xl font-body text-muted-foreground tracking-wide transition-all duration-300 ${
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
        <div className="mt-16 flex items-center justify-center gap-2">
          <div className="w-16 h-px bg-gradient-to-r from-transparent to-primary" />
          <div className="w-2 h-2 bg-primary rotate-45" />
          <div className="w-16 h-px bg-gradient-to-l from-transparent to-primary" />
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="w-5 h-8 border-2 border-muted-foreground/50 rounded-full flex justify-center">
          <div className="w-1 h-2 bg-primary rounded-full mt-1.5 animate-pulse" />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
