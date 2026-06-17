import { Link, useParams } from "react-router-dom";
import { useState } from "react";
import { getProduct, formatPrice, PRODUCTS } from "@/data/products";
import { Button } from "@/components/ui/button";
import { useCart } from "@/context/CartContext";
import { ArrowLeft, Check, Download, Minus, Plus, ShieldCheck, ShoppingCart, Truck } from "lucide-react";
import { ProductCard } from "@/components/shop/ProductCard";
import { toast } from "sonner";

const ProductDetail = () => {
  const { id } = useParams();
  const product = id ? getProduct(id) : undefined;
  const { addItem } = useCart();
  const [qty, setQty] = useState(1);

  if (!product) {
    return (
      <div className="container-tight py-24 text-center">
        <h1 className="text-3xl font-bold text-brand-navy mb-4">Product not found</h1>
        <Button asChild className="rounded-full bg-brand-red hover:bg-brand-red-hover text-white">
          <Link to="/shop">Back to shop</Link>
        </Button>
      </div>
    );
  }

  const related = PRODUCTS.filter((p) => p.category === product.category && p.id !== product.id).slice(0, 3);

  return (
    <>
      <section className="py-10">
        <div className="container-tight">
          <Link to="/shop" className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-brand-red mb-8">
            <ArrowLeft className="w-4 h-4" /> Back to shop
          </Link>
</div>
         <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-start">
         <div className="p-4 bg-white border rounded-xl shadow-md">
  <img
    src={product.image}
    alt={product.name}
    className="w-full max-h-[500px] object-contain rounded-lg"
  />
</div>
            <div>
              <div className="text-xs uppercase tracking-[0.18em] text-brand-red font-semibold mb-3">{product.category}</div>
              <h1 className="text-3xl md:text-4xl font-bold text-brand-navy text-balance">{product.name}</h1>
              <div className="mt-4 text-3xl font-bold text-brand-navy">{formatPrice(product.price)}</div>
              <p className="mt-6 text-foreground/80 leading-relaxed">{product.description}</p>

              <ul className="mt-6 grid sm:grid-cols-2 gap-2">
                {product.features.map((f) => (
                  <li key={f} className="flex items-center gap-2 text-sm">
                    <Check className="w-4 h-4 text-brand-red shrink-0" /> {f}
                  </li>
                ))}
              </ul>

              <div className="mt-8 space-y-4">
                <div className="flex items-center gap-4">
                  <div className="flex items-center border border-border rounded-full">
                    <button
                      onClick={() => setQty((q) => Math.max(1, q - 1))}
                      className="w-10 h-12 flex items-center justify-center hover:bg-secondary rounded-l-full"
                      aria-label="Decrease quantity"
                    >
                      <Minus className="w-4 h-4" />
                    </button>

                    <span className="w-10 text-center font-semibold">{qty}</span>

                    <button
                      onClick={() => setQty((q) => q + 1)}
                      className="w-10 h-12 flex items-center justify-center hover:bg-secondary rounded-r-full"
                      aria-label="Increase quantity"
                    >
                      <Plus className="w-4 h-4" />
                    </button>
                  </div>

                  <Button
                    size="lg"
                    className="flex-1 bg-brand-red hover:bg-brand-red-hover text-white rounded-full h-12"
                    onClick={() => {
                      addItem(product, qty);
                      toast.success(`${product.name} added to cart`);
                    }}
                  >
                    <ShoppingCart className="w-4 h-4 mr-2" />
                    Add to Cart
                  </Button>
                </div>

              {product.brochure && (
  <a
    href={product.brochure}
    target="_blank"
    rel="noopener noreferrer"
    className="inline-flex items-center justify-center gap-2 w-full h-12 mt-4 rounded-full border border-brand-red text-brand-red hover:bg-brand-red hover:text-white transition-all"
  >
    <Download className="w-4 h-4" />
    Download Datasheet
  </a>
)}
                            <div className="mt-6 grid grid-cols-2 gap-3 text-xs">
                <div className="flex items-center gap-2 p-3 rounded-2xl bg-secondary/60">
                  <Truck className="w-4 h-4 text-brand-red" />
                  <span>Worldwide logistics</span>
                </div>
                <div className="flex items-center gap-2 p-3 rounded-2xl bg-secondary/60">
                  <ShieldCheck className="w-4 h-4 text-brand-red" />
                  <span>Certified & compliant</span>
                </div>
              </div>

              <div className="mt-10 border-t border-border pt-8">
                <h2 className="font-semibold text-brand-navy mb-4">Specifications</h2>
                <dl className="divide-y divide-border">
                  {product.specs.map((s) => (
                    <div key={s.label} className="flex justify-between py-3 text-sm">
                      <dt className="text-muted-foreground">{s.label}</dt>
                      <dd className="font-medium text-foreground">{s.value}</dd>
                    </div>
                  ))}
                </dl>
              </div>
            </div>
          </div>
        </div>
      </section>

    {related.length > 0 && (
  <section className="py-20">
    <div className="container-tight">
      <h2 className="text-2xl font-bold text-brand-navy mb-8">
        Related Products
      </h2>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {related.map((p) => (
          <ProductCard key={p.id} product={p} />
        ))}
      </div>
    </div>
  </section>
)}
</>
  );
};
export default ProductDetail;
