const Footer = () => {
  const currentYear = new Date().getFullYear();

  const links = {
    products: [
      { name: "ASCII Designer", href: "https://rmdyfun.mysellauth.com/product/multitool" },
      { name: "HWID Spoofer", href: "https://rmdyfun.mysellauth.com/product/hwid-spoofer" },
      { name: "Media Spammer", href: "https://rmdyfun.mysellauth.com/product/media-spammer" },
      { name: "Discord Services", href: "https://discord.gg/rmdygifts" },
    ],
    service: [
      { name: "About Us", href: "#about" },
      { name: "Contact", href: "#contact" },
      { name: "Terms of Service", href: "/terms" },
    ],
    more: [
      { name: "Media", href: "http://rmdy.fun/media/home" },
      { name: "Support", href: "https://discord.gg/rmdy" },
      { name: "Testimonials", href: "#testimonials" },
    ],
  };

  return (
    <footer className="relative bg-card border-t border-border pt-16 pb-8 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10 mb-12">
          {/* Branding */}
          <div>
            <h2 className="font-display text-2xl font-bold mb-4">
              <span className="text-primary">RMDY</span>
            </h2>
            <p className="text-muted-foreground font-body text-sm mb-6">
              Where Challenges Meet Solutions.
            </p>
            <div className="flex gap-4">
              <a
                href="https://instagram.com/rmdy.fun"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-primary transition-colors"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                </svg>
              </a>
              <a
                href="https://discord.gg/rmdy"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-primary transition-colors"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20.317 4.369a19.791 19.791 0 00-4.885-1.515.07.07 0 00-.073.035c-.21.375-.444.864-.608 1.249a19.706 19.706 0 00-5.656 0 12.61 12.61 0 00-.617-1.249.072.072 0 00-.073-.035c-1.653.3-3.349.833-4.884 1.515a.065.065 0 00-.031.027C.533 9.207-.32 13.913.099 18.563a.08.08 0 00.031.057c2.058 1.514 4.053 2.424 5.993 3.03a.077.077 0 00.084-.027c.462-.63.873-1.295 1.226-1.994a.076.076 0 00-.041-.105 13.22 13.22 0 01-1.886-.89.075.075 0 01-.008-.125c.126-.095.252-.193.372-.291a.07.07 0 01.073-.01c3.927 1.793 8.18 1.793 12.062 0a.07.07 0 01.073.009c.12.099.246.197.372.292a.075.075 0 01-.006.125 12.298 12.298 0 01-1.887.889.076.076 0 00-.041.106c.36.698.77 1.363 1.225 1.993a.076.076 0 00.084.028c1.94-.606 3.935-1.516 5.993-3.03a.077.077 0 00.031-.056c.5-5.177-.838-9.84-3.548-14.167a.061.061 0 00-.03-.028zM8.02 15.331c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.955-2.418 2.157-2.418 1.21 0 2.174 1.094 2.157 2.418 0 1.334-.955 2.419-2.157 2.419zm7.974 0c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.955-2.418 2.157-2.418 1.21 0 2.174 1.094 2.157 2.418 0 1.334-.947 2.419-2.157 2.419z"/>
                </svg>
              </a>
            </div>
          </div>

          {/* Products */}
          <div>
            <h3 className="font-display font-semibold text-foreground mb-4">Products</h3>
            <ul className="space-y-2">
              {links.products.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-muted-foreground hover:text-primary transition-colors text-sm font-body"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Service */}
          <div>
            <h3 className="font-display font-semibold text-foreground mb-4">Service</h3>
            <ul className="space-y-2">
              {links.service.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-muted-foreground hover:text-primary transition-colors text-sm font-body"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* More */}
          <div>
            <h3 className="font-display font-semibold text-foreground mb-4">More</h3>
            <ul className="space-y-2">
              {links.more.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    target={link.href.startsWith("http") ? "_blank" : undefined}
                    rel={link.href.startsWith("http") ? "noopener noreferrer" : undefined}
                    className="text-muted-foreground hover:text-primary transition-colors text-sm font-body"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Neon divider */}
        <div className="w-full h-[2px] bg-gradient-to-r from-primary via-accent to-secondary rounded-full animate-neon-pulse mb-6" />

        {/* Copyright */}
        <div className="text-center text-muted-foreground text-xs font-body">
          © {currentYear} Remedy. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
