import { Link } from "react-router-dom";
import type { Product } from "@/data/products";
import { formatPrice } from "@/data/products";
import { Button } from "@/components/ui/button";
import { ShoppingCart } from "lucide-react";
import { useCart } from "@/context/CartContext";
import { toast } from "sonner";

export const ProductCard = ({ product }: { product: Product }) => {
  const { addItem } = useCart();
  return (
    <article className="group bg-card rounded-3xl overflow-hidden shadow-card hover:shadow-elevated transition-smooth border border-border flex flex-col">
      <Link to={`/product/${product.id}`} className="block aspect-[4/3] overflow-hidden bg-secondary">
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-full object-cover group-hover:scale-105 transition-smooth duration-500"
          loading="lazy"
        />
      </Link>
      <div className="p-5 flex flex-col flex-1">
        <div className="text-[11px] uppercase tracking-wider font-semibold text-brand-red mb-2">{product.category}</div>
        <Link to={`/product/${product.id}`} className="block">
          <h3 className="font-semibold text-base text-brand-navy line-clamp-2 group-hover:text-brand-red transition-smooth">
            {product.name}
          </h3>
        </Link>
        <p className="text-sm text-muted-foreground mt-2 line-clamp-2 flex-1">{product.shortDescription}</p>
        <div className="mt-4 flex items-center justify-between">
          <div className="text-lg font-bold text-brand-navy">{formatPrice(product.price)}</div>
          <Button
            size="sm"
            className="rounded-full bg-brand-navy hover:bg-brand-red text-white transition-smooth"
            onClick={(e) => {
              e.preventDefault();
              addItem(product);
              toast.success(`${product.name} added to cart`);
            }}
          >
            <ShoppingCart className="w-4 h-4 mr-1.5" /> Add
          </Button>
        </div>
      </div>
    </article>
  );
};
