import { useEffect } from "react";
import { Button } from "./ui/button";
import { X, ChevronLeft, ChevronRight, ExternalLink, Eye } from "lucide-react";

interface ProductModalProps {
  product: {
    title: string;
    description: string;
    image: string;
    buyLink: string;
    mediaLink: string;
  };
  onClose: () => void;
  onPrev: () => void;
  onNext: () => void;
}

const ProductModal = ({ product, onClose, onPrev, onNext }: ProductModalProps) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowLeft") onPrev();
      if (e.key === "ArrowRight") onNext();
    };

    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", handleKeyDown);

    return () => {
      document.body.style.overflow = "auto";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [onClose, onPrev, onNext]);

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-background/95 backdrop-blur-xl animate-fade-in"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-4xl mx-4 animate-slide-in-right"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="flex justify-between items-start mb-6">
          <div>
            <h3 className="text-3xl font-display font-bold text-foreground mb-2">
              {product.title}
            </h3>
            <p className="text-muted-foreground font-body">{product.description}</p>
          </div>
          <div className="flex gap-2">
            <Button
              size="icon"
              variant="outline"
              onClick={onPrev}
              className="rounded-full"
            >
              <ChevronLeft className="w-5 h-5" />
            </Button>
            <Button
              size="icon"
              variant="outline"
              onClick={onNext}
              className="rounded-full"
            >
              <ChevronRight className="w-5 h-5" />
            </Button>
            <Button
              size="icon"
              variant="outline"
              onClick={onClose}
              className="rounded-full hover:bg-destructive hover:border-destructive"
            >
              <X className="w-5 h-5" />
            </Button>
          </div>
        </div>

        {/* Image */}
        <div className="relative rounded-xl overflow-hidden border border-border mb-6">
          <img
            src={product.image}
            alt={product.title}
            className="w-full h-auto max-h-[60vh] object-contain bg-card"
          />
          {/* Corner decorations */}
          <div className="absolute top-0 left-0 w-8 h-8 border-l-2 border-t-2 border-primary" />
          <div className="absolute top-0 right-0 w-8 h-8 border-r-2 border-t-2 border-secondary" />
          <div className="absolute bottom-0 left-0 w-8 h-8 border-l-2 border-b-2 border-secondary" />
          <div className="absolute bottom-0 right-0 w-8 h-8 border-r-2 border-b-2 border-primary" />
        </div>

        {/* Actions */}
        <div className="flex justify-center gap-4">
          <Button
            size="lg"
            variant="neon"
            onClick={() => window.open(product.buyLink, "_blank")}
          >
            <ExternalLink className="w-4 h-4" />
            Buy Now
          </Button>
          <Button
            size="lg"
            variant="cyber"
            onClick={() => window.open(product.mediaLink, "_blank")}
          >
            <Eye className="w-4 h-4" />
            <span className="relative z-10">Media View</span>
          </Button>
        </div>

        {/* Keyboard hints */}
        <p className="text-center text-muted-foreground text-xs mt-4 font-body">
          Use ← → to navigate • ESC to close
        </p>
      </div>
    </div>
  );
};

export default ProductModal;
