import { Helmet } from "react-helmet-async";
import StarField from "@/components/StarField";
import Navigation from "@/components/Navigation";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import ProductsSection from "@/components/ProductsSection";
import WhyRemedySection from "@/components/WhyRemedySection";
import TestimonialsSection from "@/components/TestimonialsSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <>
      <Helmet>
        <title>Remedy - Premium Discord Tools & Solutions</title>
        <meta
          name="description"
          content="Remedy is a sleek, powerful suite of Discord bots and tools designed for speed, stealth, and style. HWID Spoofer, ASCII Designer, Media Spammer & more."
        />
        <meta name="keywords" content="Remedy, Discord tools, HWID Spoofer, ASCII Designer, Discord bots" />
      </Helmet>

      <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
        <StarField />
        <Navigation />
        <main>
          <HeroSection />
          <AboutSection />
          <ProductsSection />
          <WhyRemedySection />
          <TestimonialsSection />
          <ContactSection />
        </main>
        <Footer />
      </div>
    </>
  );
};

export default Index;
