import { useState } from "react";
import ProductCard from "./ProductCard";
import ProductModal from "./ProductModal";

const products = [
  {
    id: 1,
    title: "ASCII Designer",
    description: "Your Go-To GIF & Gradient Multi-tool. Convert GIFs into high-quality ASCII animations with gradients.",
    image: "https://i.imgur.com/QDhNA47.png",
    buyLink: "https://rmdyfun.mysellauth.com/product/multitool",
    mediaLink: "https://rmdy.fun/media/mt",
  },
  {
    id: 2,
    title: "HWID Spoofer",
    description: "Enhance Your Game With Spoofing! Instantly spoof HWID, MAC, or all identifiers at once.",
    image: "https://i.imgur.com/Wedn4Pi.png",
    buyLink: "https://rmdyfun.mysellauth.com/product/hwid-spoofer",
    mediaLink: "https://rmdy.fun/media/spf",
  },
  {
    id: 3,
    title: "Heartless Media Spammer",
    description: "All-in-One Media Spammer with proxy rotation, real-time logs, and auto-updating loader.",
    image: "https://i.imgur.com/ay2rhBe.png",
    buyLink: "https://rmdyfun.mysellauth.com/product/media-spammer",
    mediaLink: "https://rmdy.fun/media/spm",
  },
  {
    id: 4,
    title: "Rmdy Gifts",
    description: "Multiple Discord Services: Boosts, Tokens, Members, Nitro & More!",
    image: "https://i.imgur.com/ikG16aP.png",
    buyLink: "https://discord.gg/rmdygifts",
    mediaLink: "https://rmdy.fun/media/bst",
  },
];

const ProductsSection = () => {
  const [selectedProduct, setSelectedProduct] = useState<typeof products[0] | null>(null);
  const [currentIndex, setCurrentIndex] = useState(0);

  const openModal = (product: typeof products[0], index: number) => {
    setSelectedProduct(product);
    setCurrentIndex(index);
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
            Our <span className="text-gradient-cyber">Products</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-secondary to-primary mx-auto" />
        </div>

        {/* Products carousel */}
        <div className="relative overflow-hidden">
          <div className="flex gap-6 animate-marquee hover:[animation-play-state:paused]">
            {/* First set */}
            {products.map((product, index) => (
              <ProductCard
                key={`first-${product.id}`}
                {...product}
                onClick={() => openModal(product, index)}
              />
            ))}
            {/* Duplicate for seamless loop */}
            {products.map((product, index) => (
              <ProductCard
                key={`second-${product.id}`}
                {...product}
                onClick={() => openModal(product, index)}
              />
            ))}
          </div>
        </div>

        {/* Manual navigation hint */}
        <p className="text-center text-muted-foreground text-sm mt-8 font-body">
          Hover to pause • Click to view details
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
    </section>
  );
};

export default ProductsSection;
