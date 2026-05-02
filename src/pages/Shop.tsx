import { useMemo, useState, useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import { ProductCard } from "@/components/shop/ProductCard";
import { SearchBar } from "@/components/search/SearchBar";
import { CATEGORIES, PRODUCTS } from "@/data/products";
import { cn } from "@/lib/utils";

const Shop = () => {
  const [params, setParams] = useSearchParams();
  const initialQuery = params.get("q") || "";
  const initialCat = params.get("category") || "All";
  const [category, setCategory] = useState<string>(initialCat);

  useEffect(() => {
    const next = new URLSearchParams(params);
    if (category === "All") next.delete("category"); else next.set("category", category);
    setParams(next, { replace: true });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [category]);

  const filtered = useMemo(() => {
    const q = initialQuery.trim().toLowerCase();
    return PRODUCTS.filter((p) => {
      const matchCat = category === "All" || p.category === category;
      const matchQ = !q ||
        p.name.toLowerCase().includes(q) ||
        p.category.toLowerCase().includes(q) ||
        p.shortDescription.toLowerCase().includes(q);
      return matchCat && matchQ;
    });
  }, [category, initialQuery]);

  return (
    <>
      <section className="bg-brand-navy text-white py-16">
        <div className="container-tight">
          <div className="text-xs uppercase tracking-[0.18em] text-brand-red font-semibold mb-3">Shop</div>
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Marine & Port Equipment Catalog</h1>
          <p className="text-white/70 max-w-2xl mb-8">
            Source certified equipment for vessels, terminals, and offshore operations.
          </p>
          <div className="max-w-2xl">
            <SearchBar variant="compact" />
          </div>
        </div>
      </section>

      <section className="py-12 md:py-16">
        <div className="container-tight">
          <div className="flex flex-wrap gap-2 mb-8">
            {["All", ...CATEGORIES].map((c) => (
              <button
                key={c}
                onClick={() => setCategory(c)}
                className={cn(
                  "px-5 py-2 rounded-full text-sm font-medium border transition-smooth",
                  category === c
                    ? "bg-brand-navy text-white border-brand-navy"
                    : "bg-card text-foreground border-border hover:border-brand-navy"
                )}
              >
                {c}
              </button>
            ))}
          </div>

          {initialQuery && (
            <div className="mb-6 text-sm text-muted-foreground">
              Showing results for <span className="font-semibold text-brand-navy">"{initialQuery}"</span> — {filtered.length} {filtered.length === 1 ? "product" : "products"}
            </div>
          )}

          {filtered.length === 0 ? (
            <div className="text-center py-20 bg-secondary/50 rounded-3xl">
              <h3 className="font-semibold text-lg text-brand-navy">No products found</h3>
              <p className="text-sm text-muted-foreground mt-2">Try another category or search term.</p>
            </div>
          ) : (
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {filtered.map((p) => <ProductCard key={p.id} product={p} />)}
            </div>
          )}
        </div>
      </section>
    </>
  );
};

export default Shop;
