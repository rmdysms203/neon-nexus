const AboutSection = () => {
  return (
    <section id="about" className="relative py-24 px-4">
      <div className="max-w-4xl mx-auto text-center">
        {/* Section header */}
        <div className="mb-12">
          <span className="text-primary font-display text-sm tracking-[0.3em] uppercase mb-4 block">
            // About
          </span>
          <h2 className="text-4xl md:text-5xl font-display font-bold mb-6">
            About <span className="text-gradient-cyber">Remedy</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary to-secondary mx-auto" />
        </div>

        {/* Content */}
        <div className="relative">
          {/* Decorative corner */}
          <div className="absolute -top-4 -left-4 w-8 h-8 border-l-2 border-t-2 border-primary/50" />
          <div className="absolute -bottom-4 -right-4 w-8 h-8 border-r-2 border-b-2 border-secondary/50" />
          
          <p className="text-lg md:text-xl text-muted-foreground leading-relaxed font-body">
            Remedy is a sleek, powerful suite of Discord bots and tools designed for{" "}
            <span className="text-secondary font-semibold">speed</span>,{" "}
            <span className="text-primary font-semibold">stealth</span>, and{" "}
            <span className="text-accent font-semibold">style</span>. Whether you're
            managing boosts, checking tokens, or exploring new exploits, Remedy gives
            you control in one minimal dashboard.
          </p>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-3 gap-8 mt-16">
          {[
            { value: "4+", label: "Premium Tools" },
            { value: "24/7", label: "Support" },
            { value: "100%", label: "Satisfaction" },
          ].map((stat, index) => (
            <div
              key={index}
              className="relative group"
            >
              <div className="text-3xl md:text-4xl font-display font-bold text-gradient-cyber mb-2">
                {stat.value}
              </div>
              <div className="text-sm text-muted-foreground uppercase tracking-wider font-display">
                {stat.label}
              </div>
              <div className="absolute inset-0 border border-primary/0 group-hover:border-primary/30 rounded-lg transition-all duration-300" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
