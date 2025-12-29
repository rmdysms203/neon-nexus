import { useState, useRef, useEffect } from "react";
import ProductCard from "./ProductCard";
import ProductModal from "./ProductModal";

const products = [
  {
    id: 1,
    title: "HWID Spoofer",
    description: "Enhance Your Game With Spoofing! Instantly spoof HWID, MAC, or all identifiers at once.",
    image: "https://i.imgur.com/Wedn4Pi.png",
    buyLink: "https://rmdyfun.mysellauth.com/product/hwid-spoofer",
    mediaLink: "https://rmdy.fun/media/spf",
  },
  {
    id: 2,
    title: "Heartless Media Spammer",
    description: "All-in-One Media Spammer with proxy rotation, real-time logs, and auto-updating loader.",
    image: "https://i.imgur.com/ay2rhBe.png",
    buyLink: "https://rmdyfun.mysellauth.com/product/media-spammer",
    mediaLink: "https://rmdy.fun/media/spm",
  },
  {
    id: 3,
    title: "Rmdy Gifts",
    description: "Multiple Discord Services: Boosts, Tokens, Members, Nitro & More!",
    image: "https://i.imgur.com/ikG16aP.png",
    buyLink: "https://discord.gg/rmdygifts",
    mediaLink: "https://rmdy.fun/media/bst",
  },
  {
    id: 4,
    title: "ASCII Designer",
    description: "Your Go-To GIF & Gradient Multi-tool. Convert GIFs into high-quality ASCII animations with gradients.",
    image: "https://i.imgur.com/QDhNA47.png",
    buyLink: "https://rmdyfun.mysellauth.com/product/multitool",
    mediaLink: "https://rmdy.fun/media/mt",
  },
];

const ProductsSection = () => {
  const [selectedProduct, setSelectedProduct] = useState<typeof products[0] | null>(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);
  const carouselRef = useRef<HTMLDivElement>(null);

  const openModal = (product: typeof products[0], index: number) => {
    if (!isDragging) {
      setSelectedProduct(product);
      setCurrentIndex(index);
    }
  };

  const closeModal = () => {
    setSelectedProduct(null);
  };

  const navigateProduct = (direction: "prev" | "next") => {
    const newIndex = direction === "next" 
      ? (currentIndex + 1) % products.length 
      : (currentIndex - 1 + products.length) % products.length;
    setCurrentIndex(newIndex);
    setSelectedProduct(products[newIndex]);
  };

  // Drag handlers
  const handleMouseDown = (e: React.MouseEvent) => {
    if (!carouselRef.current) return;
    setIsDragging(true);
    setStartX(e.pageX - carouselRef.current.offsetLeft);
    setScrollLeft(carouselRef.current.scrollLeft);
    carouselRef.current.style.cursor = "grabbing";
  };

  const handleMouseUp = () => {
    setIsDragging(false);
    if (carouselRef.current) {
      carouselRef.current.style.cursor = "grab";
    }
    // Small delay to prevent click after drag
    setTimeout(() => setIsDragging(false), 100);
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDragging || !carouselRef.current) return;
    e.preventDefault();
    const x = e.pageX - carouselRef.current.offsetLeft;
    const walk = (x - startX) * 2;
    carouselRef.current.scrollLeft = scrollLeft - walk;
  };

  const handleMouseLeave = () => {
    if (isDragging) {
      setIsDragging(false);
      if (carouselRef.current) {
        carouselRef.current.style.cursor = "grab";
      }
    }
  };

  // Touch handlers for mobile
  const handleTouchStart = (e: React.TouchEvent) => {
    if (!carouselRef.current) return;
    setIsDragging(true);
    setStartX(e.touches[0].pageX - carouselRef.current.offsetLeft);
    setScrollLeft(carouselRef.current.scrollLeft);
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    if (!isDragging || !carouselRef.current) return;
    const x = e.touches[0].pageX - carouselRef.current.offsetLeft;
    const walk = (x - startX) * 2;
    carouselRef.current.scrollLeft = scrollLeft - walk;
  };

  const handleTouchEnd = () => {
    setIsDragging(false);
    setTimeout(() => setIsDragging(false), 100);
  };

  return (
    <section id="products" className="relative py-24 px-4 bg-muted/30">
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,hsl(var(--primary))_1px,transparent_1px)] bg-[length:40px_40px]" />
      </div>

      <div className="relative max-w-7xl mx-auto">
        {/* Section header */}
        <div className="text-center mb-16">
          <span className="text-secondary font-display text-sm tracking-[0.3em] uppercase mb-4 block">
            // Products
          </span>
          <h2 className="text-4xl md:text-5xl font-display font-bold mb-6">
            Our{" "}
            <span 
              className="relative inline-block"
              style={{
                background: "linear-gradient(90deg, #ff2a6d 0%, #d629d6 50%, #05d9e8 100%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}
            >
              Products
              <span className="absolute -bottom-2 left-0 w-full h-1 bg-gradient-to-r from-primary via-accent to-secondary rounded-full" />
            </span>
          </h2>
        </div>

        {/* Products carousel - draggable */}
        <div 
          ref={carouselRef}
          className="flex gap-6 overflow-x-auto pb-4 cursor-grab select-none scrollbar-hide"
          style={{ 
            scrollBehavior: isDragging ? "auto" : "smooth",
            scrollbarWidth: "none",
            msOverflowStyle: "none",
          }}
          onMouseDown={handleMouseDown}
          onMouseUp={handleMouseUp}
          onMouseMove={handleMouseMove}
          onMouseLeave={handleMouseLeave}
          onTouchStart={handleTouchStart}
          onTouchMove={handleTouchMove}
          onTouchEnd={handleTouchEnd}
        >
          {products.map((product, index) => (
            <ProductCard
              key={product.id}
              {...product}
              onClick={() => openModal(product, index)}
            />
          ))}
        </div>

        {/* Hint text */}
        <p className="text-center text-muted-foreground text-sm mt-8 font-body">
          ← Drag to scroll • Click to view details →
        </p>
      </div>

      {/* Modal */}
      {selectedProduct && (
        <ProductModal
          product={selectedProduct}
          onClose={closeModal}
          onPrev={() => navigateProduct("prev")}
          onNext={() => navigateProduct("next")}
        />
      )}

      {/* Hide scrollbar CSS */}
      <style>{`
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
      `}</style>
    </section>
  );
};

export default ProductsSection;
