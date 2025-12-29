import { Brain, Ghost, Palette, Radio, Globe } from "lucide-react";

const features = [
  {
    icon: Brain,
    title: "No Bloat. Just Results.",
    description: "Every line of code serves a purpose. No filler UIs, no cluttered dashboards — just clean, fast, and functional tools.",
    color: "primary",
  },
  {
    icon: Ghost,
    title: "RMDY Spoofer",
    description: "Instantly spoof HWID, MAC, or all identifiers. Supports permanent spoofing, registry cleanup, and trace file cleaning.",
    color: "secondary",
    features: ["HWID & MAC Spoofing", "Permanent Mode", "Registry Cleanup", "Trace Cleaning"],
  },
  {
    icon: Palette,
    title: "Multitool (ASCII Engine)",
    description: "Convert GIFs into high-quality ASCII animations with gradients. Built-in gradient tool for custom text effects.",
    color: "accent",
    features: ["GIF to ASCII", "Gradient Generator", "Fast Processing"],
  },
  {
    icon: Radio,
    title: "Heartless Spammer",
    description: "Mass message support across SMS, Email, and more. Proxy rotation, real-time logs, and auto-updating loader.",
    color: "primary",
    features: ["Multi-Platform", "Proxy Rotation", "Real-time Logs", "Auto Updates"],
  },
  {
    icon: Globe,
    title: "Cyber-Polished",
    description: "Remedy thrives on feedback and speed. Responsive, supported, and smooth — you're unlocking a style.",
    color: "secondary",
  },
];

const WhyRemedySection = () => {
  return (
    <section id="why" className="relative py-24 px-4">
      <div className="max-w-6xl mx-auto">
        {/* Section header */}
        <div className="text-center mb-16">
          <span className="text-accent font-display text-sm tracking-[0.3em] uppercase mb-4 block">
            // Features
          </span>
          <h2 className="text-4xl md:text-5xl font-display font-bold mb-6">
            Why <span className="text-gradient-cyber">Remedy</span>?
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-accent to-primary mx-auto mb-8" />
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto font-body">
            Remedy is built for the bold — a cyberpunk-inspired toolkit that blends raw utility with sleek tech.
          </p>
        </div>

        {/* Features grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            const colorClass = feature.color === "primary" ? "primary" : feature.color === "secondary" ? "secondary" : "accent";
            
            return (
              <div
                key={index}
                className="group relative p-6 rounded-xl bg-card border border-border hover:border-primary/50 transition-all duration-500 hover:-translate-y-1"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                {/* Glow effect on hover */}
                <div className={`absolute inset-0 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-gradient-to-br from-${colorClass}/5 to-transparent`} />
                
                {/* Icon */}
                <div className={`w-12 h-12 rounded-lg bg-${colorClass}/10 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                  <Icon className={`w-6 h-6 text-${colorClass}`} />
                </div>

                {/* Content */}
                <h3 className="text-xl font-display font-bold mb-3 text-foreground group-hover:text-primary transition-colors">
                  {feature.title}
                </h3>
                <p className="text-muted-foreground font-body text-sm mb-4">
                  {feature.description}
                </p>

                {/* Feature list if available */}
                {feature.features && (
                  <ul className="space-y-2">
                    {feature.features.map((item, i) => (
                      <li key={i} className="flex items-center gap-2 text-sm text-muted-foreground">
                        <span className={`w-1.5 h-1.5 rounded-full bg-${colorClass}`} />
                        {item}
                      </li>
                    ))}
                  </ul>
                )}

                {/* Corner accent */}
                <div className={`absolute top-0 right-0 w-16 h-16 opacity-10 group-hover:opacity-20 transition-opacity`}>
                  <div className={`absolute top-2 right-2 w-full h-full border-t-2 border-r-2 border-${colorClass} rounded-tr-lg`} />
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom tagline */}
        <div className="text-center mt-16">
          <p className="text-xl font-display text-secondary">
            🦾 Built for the underground. Designed for the elite.
          </p>
          <p className="text-2xl font-display font-bold text-gradient-cyber mt-2">
            Delivered by Remedy.
          </p>
        </div>
      </div>
    </section>
  );
};

export default WhyRemedySection;
