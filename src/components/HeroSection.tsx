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
        {/* Logo/Brand */}
        <div className="relative mb-8">
          <h1 
            className="text-6xl sm:text-7xl md:text-8xl lg:text-9xl font-display font-black tracking-[0.2em] md:tracking-[0.25em] select-none"
            style={{
              background: "linear-gradient(90deg, hsl(340, 100%, 58%) 0%, hsl(320, 100%, 50%) 25%, hsl(285, 100%, 50%) 50%, hsl(200, 100%, 60%) 75%, hsl(186, 100%, 46%) 100%)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
              filter: "drop-shadow(0 0 30px hsl(340, 100%, 58%, 0.5))",
            }}
          >
            REMEDY
          </h1>
          
          {/* Glitch layer 1 - Cyan offset */}
          <h1 
            className="absolute inset-0 text-6xl sm:text-7xl md:text-8xl lg:text-9xl font-display font-black tracking-[0.2em] md:tracking-[0.25em] select-none pointer-events-none opacity-60"
            style={{
              background: "linear-gradient(90deg, hsl(186, 100%, 46%) 0%, hsl(186, 100%, 60%) 100%)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
              clipPath: "inset(0 0 60% 0)",
              transform: "translate(-3px, -2px)",
              animation: "glitch-1 3s infinite linear alternate-reverse",
            }}
            aria-hidden="true"
          >
            REMEDY
          </h1>
          
          {/* Glitch layer 2 - Pink offset */}
          <h1 
            className="absolute inset-0 text-6xl sm:text-7xl md:text-8xl lg:text-9xl font-display font-black tracking-[0.2em] md:tracking-[0.25em] select-none pointer-events-none opacity-60"
            style={{
              background: "linear-gradient(90deg, hsl(340, 100%, 58%) 0%, hsl(320, 100%, 50%) 100%)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
              clipPath: "inset(60% 0 0 0)",
              transform: "translate(3px, 2px)",
              animation: "glitch-2 2.5s infinite linear alternate",
            }}
            aria-hidden="true"
          >
            REMEDY
          </h1>
        </div>

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
