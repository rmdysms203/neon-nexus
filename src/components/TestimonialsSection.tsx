import { Star } from "lucide-react";

// Sample testimonials - in production these would come from an API
const testimonials = [
  { id: 1, username: "CyberNinja", message: "Best spoofer I've ever used. Clean and efficient!", stars: 5, date: "Dec 2024" },
  { id: 2, username: "ShadowRunner", message: "The ASCII tool is insane. Worth every penny.", stars: 5, date: "Dec 2024" },
  { id: 3, username: "NeonDreamer", message: "Support team is incredibly responsive. Love it!", stars: 5, date: "Nov 2024" },
  { id: 4, username: "GhostOps", message: "Finally a toolkit that just works. No bloat.", stars: 5, date: "Nov 2024" },
  { id: 5, username: "MatrixHacker", message: "Been using for months. Never disappointed.", stars: 5, date: "Oct 2024" },
  { id: 6, username: "VoidWalker", message: "The design is chef's kiss. Functionality is top tier.", stars: 5, date: "Oct 2024" },
  { id: 7, username: "DigitalPhantom", message: "Spammer works like a charm. Highly recommend.", stars: 5, date: "Sep 2024" },
  { id: 8, username: "ByteStorm", message: "Cleanest tools in the game. Period.", stars: 5, date: "Sep 2024" },
];

const TestimonialCard = ({ testimonial }: { testimonial: typeof testimonials[0] }) => (
  <div className="group min-w-[280px] w-72 p-5 rounded-xl bg-card border border-border hover:border-primary/50 transition-all duration-300 hover:scale-[1.02]">
    {/* Stars */}
    <div className="flex gap-1 mb-3">
      {Array.from({ length: testimonial.stars }).map((_, i) => (
        <Star key={i} className="w-4 h-4 fill-neon-yellow text-neon-yellow" />
      ))}
    </div>

    {/* Username */}
    <h4 className="text-primary font-display font-semibold text-sm mb-2 group-hover:neon-glow-pink transition-all">
      @{testimonial.username}
    </h4>

    {/* Message */}
    <p className="text-foreground font-body text-sm leading-relaxed mb-3">
      "{testimonial.message}"
    </p>

    {/* Date */}
    <p className="text-xs text-muted-foreground font-body">
      {testimonial.date}
    </p>
  </div>
);

const TestimonialsSection = () => {
  return (
    <section id="testimonials" className="relative py-24 px-4 bg-muted/30 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        {/* Section header */}
        <div className="text-center mb-16">
          <span className="text-primary font-display text-sm tracking-[0.3em] uppercase mb-4 block">
            // Testimonials
          </span>
          <h2 className="text-4xl md:text-5xl font-display font-bold mb-6">
            What Our <span className="text-gradient-cyber">Clients</span> Say
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary to-accent mx-auto" />
        </div>

        {/* First row - scrolls right */}
        <div className="relative mb-6 overflow-hidden">
          <div className="flex gap-6 animate-marquee hover:[animation-play-state:paused]">
            {testimonials.map((t) => (
              <TestimonialCard key={`row1-${t.id}`} testimonial={t} />
            ))}
            {testimonials.map((t) => (
              <TestimonialCard key={`row1-dup-${t.id}`} testimonial={t} />
            ))}
          </div>
        </div>

        {/* Second row - scrolls left */}
        <div className="relative overflow-hidden">
          <div className="flex gap-6 animate-marquee-reverse hover:[animation-play-state:paused]">
            {[...testimonials].reverse().map((t) => (
              <TestimonialCard key={`row2-${t.id}`} testimonial={t} />
            ))}
            {[...testimonials].reverse().map((t) => (
              <TestimonialCard key={`row2-dup-${t.id}`} testimonial={t} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
