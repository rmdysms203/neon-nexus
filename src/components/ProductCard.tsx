import { cn } from "@/lib/utils";

interface ProductCardProps {
  title: string;
  description: string;
  image: string;
  onClick: () => void;
}

const ProductCard = ({ title, description, image, onClick }: ProductCardProps) => {
  return (
    <div
      onClick={onClick}
      className={cn(
        "group cursor-pointer min-w-[300px] w-80",
        "relative overflow-hidden rounded-xl",
        "bg-card border border-border",
        "transition-all duration-500",
        "hover:border-primary hover:box-glow-pink",
        "hover:scale-[1.02] hover:-translate-y-1"
      )}
    >
      {/* Corner accents */}
      <div className="absolute top-0 left-0 w-4 h-4 border-l-2 border-t-2 border-primary/50 group-hover:border-primary transition-colors z-10" />
      <div className="absolute top-0 right-0 w-4 h-4 border-r-2 border-t-2 border-secondary/50 group-hover:border-secondary transition-colors z-10" />
      <div className="absolute bottom-0 left-0 w-4 h-4 border-l-2 border-b-2 border-secondary/50 group-hover:border-secondary transition-colors z-10" />
      <div className="absolute bottom-0 right-0 w-4 h-4 border-r-2 border-b-2 border-primary/50 group-hover:border-primary transition-colors z-10" />

      {/* Image */}
      <div className="relative h-48 overflow-hidden">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-card via-card/50 to-transparent" />
        
        {/* Scanline overlay */}
        <div className="absolute inset-0 opacity-0 group-hover:opacity-30 transition-opacity duration-300">
          <div className="absolute inset-0 bg-[repeating-linear-gradient(0deg,transparent,transparent_2px,rgba(0,255,255,0.03)_2px,rgba(0,255,255,0.03)_4px)]" />
        </div>
      </div>

      {/* Content */}
      <div className="p-6">
        <h3 className="text-xl font-display font-bold text-foreground mb-2 group-hover:text-primary transition-colors">
          {title}
        </h3>
        <p className="text-sm text-muted-foreground font-body line-clamp-2">
          {description}
        </p>

        {/* View more indicator */}
        <div className="mt-4 flex items-center gap-2 text-primary opacity-0 group-hover:opacity-100 transition-opacity">
          <span className="text-xs font-display uppercase tracking-wider">View Details</span>
          <span className="text-lg">→</span>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
