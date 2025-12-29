import { useState, useEffect } from "react";
import { cn } from "@/lib/utils";

const navLinks = [
  { id: "about", label: "About" },
  { id: "products", label: "Products" },
  { id: "why", label: "Why Remedy?" },
  { id: "testimonials", label: "Testimonials" },
  { id: "contact", label: "Contact" },
];

const Navigation = () => {
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("");

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);

      // Find active section
      const sections = navLinks.map((link) => document.getElementById(link.id));
      const scrollPosition = window.scrollY + 100;

      sections.forEach((section, index) => {
        if (section) {
          const top = section.offsetTop;
          const height = section.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(navLinks[index].id);
          }
        }
      });
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <nav
      className={cn(
        "fixed top-4 right-4 z-50 transition-all duration-500",
        scrolled ? "top-2" : "top-4"
      )}
    >
      <div
        className={cn(
          "flex flex-wrap gap-1 md:gap-2 px-4 py-2 rounded-xl backdrop-blur-xl border transition-all duration-500",
          scrolled
            ? "bg-background/90 border-primary/50 box-glow-pink"
            : "bg-background/60 border-border"
        )}
      >
        {navLinks.map((link) => (
          <button
            key={link.id}
            onClick={() => scrollToSection(link.id)}
            className={cn(
              "relative px-3 py-1.5 text-xs md:text-sm font-display uppercase tracking-wider transition-all duration-300 rounded-lg overflow-hidden group",
              activeSection === link.id
                ? "text-primary"
                : "text-muted-foreground hover:text-foreground"
            )}
          >
            {/* Hover effect */}
            <span className="absolute inset-0 bg-gradient-to-r from-primary/0 via-primary/10 to-primary/0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-500" />
            {link.label}
            {activeSection === link.id && (
              <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-1/2 h-0.5 bg-primary rounded-full" />
            )}
          </button>
        ))}
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          className="px-3 py-1.5 text-xs md:text-sm font-display uppercase tracking-wider text-secondary hover:text-secondary/80 transition-colors"
        >
          ↑ Top
        </button>
      </div>
    </nav>
  );
};

export default Navigation;
