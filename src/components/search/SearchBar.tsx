import { useEffect, useRef, useState } from "react";
import { Search, ArrowRight } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { searchProducts, formatPrice } from "@/data/products";
import { cn } from "@/lib/utils";

interface Props {
  variant?: "hero" | "compact";
  className?: string;
}

export const SearchBar = ({ variant = "hero", className }: Props) => {
  const [query, setQuery] = useState("");
  const [open, setOpen] = useState(false);
  const [activeIdx, setActiveIdx] = useState(-1);
  const wrapperRef = useRef<HTMLDivElement>(null);
  const navigate = useNavigate();

  const results = searchProducts(query);

  useEffect(() => {
    const onClick = (e: MouseEvent) => {
      if (!wrapperRef.current?.contains(e.target as Node)) setOpen(false);
    };
    document.addEventListener("mousedown", onClick);
    return () => document.removeEventListener("mousedown", onClick);
  }, []);

  const submit = (id?: string) => {
    if (id) {
      navigate(`/product/${id}`);
    } else if (query.trim()) {
      navigate(`/shop?q=${encodeURIComponent(query.trim())}`);
    }
    setOpen(false);
  };

  const onKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "ArrowDown") {
      e.preventDefault();
      setActiveIdx((i) => Math.min(i + 1, results.length - 1));
    } else if (e.key === "ArrowUp") {
      e.preventDefault();
      setActiveIdx((i) => Math.max(i - 1, -1));
    } else if (e.key === "Enter") {
      e.preventDefault();
      submit(activeIdx >= 0 ? results[activeIdx].id : undefined);
    } else if (e.key === "Escape") {
      setOpen(false);
    }
  };

  const isHero = variant === "hero";

  return (
    <div ref={wrapperRef} className={cn("relative w-full", className)}>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          submit();
        }}
        className={cn(
          "flex items-center bg-white shadow-elevated transition-smooth",
          "rounded-full border border-white/40",
          isHero ? "h-16 pl-7 pr-2" : "h-12 pl-5 pr-1.5",
          open && "shadow-glow"
        )}
      >
        <Search className={cn("text-muted-foreground shrink-0", isHero ? "w-5 h-5" : "w-4 h-4")} />
        <input
          type="search"
          value={query}
          onChange={(e) => {
            setQuery(e.target.value);
            setOpen(true);
            setActiveIdx(-1);
          }}
          onFocus={() => setOpen(true)}
          onKeyDown={onKeyDown}
          placeholder={isHero ? "Search marine equipment, diving gear, port systems…" : "Search products…"}
          className={cn(
            "flex-1 bg-transparent border-0 outline-none px-4 text-foreground placeholder:text-muted-foreground/70",
            isHero ? "text-base" : "text-sm"
          )}
          aria-label="Search products"
        />
        <button
          type="submit"
          className={cn(
            "shrink-0 inline-flex items-center justify-center bg-brand-red hover:bg-brand-red-hover text-white rounded-full transition-smooth font-semibold",
            isHero ? "h-12 px-6 gap-2 text-sm" : "h-9 px-4 gap-1.5 text-xs"
          )}
          aria-label="Submit search"
        >
          {isHero && <span>Search</span>}
          <ArrowRight className={cn(isHero ? "w-4 h-4" : "w-3.5 h-3.5")} />
        </button>
      </form>

      {open && query.trim() && (
        <div className="absolute z-50 mt-3 w-full rounded-3xl bg-white shadow-elevated border border-border overflow-hidden animate-scale-in">
          {results.length === 0 ? (
            <div className="p-8 text-center">
              <div className="text-sm font-medium text-foreground">No matches for "{query}"</div>
              <div className="text-xs text-muted-foreground mt-1">Try "marine", "diving" or "crane".</div>
            </div>
          ) : (
            <>
              <div className="px-5 pt-4 pb-2 text-[11px] uppercase tracking-wider font-semibold text-muted-foreground">
                Suggestions
              </div>
              <ul className="pb-2">
                {results.map((p, i) => (
                  <li key={p.id}>
                    <button
                      type="button"
                      onMouseEnter={() => setActiveIdx(i)}
                      onClick={() => submit(p.id)}
                      className={cn(
                        "w-full flex items-center gap-4 px-5 py-3 text-left transition-smooth",
                        activeIdx === i ? "bg-secondary" : "hover:bg-secondary/60"
                      )}
                    >
                      <img src={p.image} alt="" className="w-12 h-12 rounded-xl object-cover shrink-0" loading="lazy" />
                      <div className="flex-1 min-w-0">
                        <div className="font-medium text-sm text-foreground truncate">{p.name}</div>
                        <div className="text-xs text-muted-foreground truncate">{p.category}</div>
                      </div>
                      <div className="text-sm font-semibold text-brand-navy">{formatPrice(p.price)}</div>
                    </button>
                  </li>
                ))}
              </ul>
              <div className="border-t border-border">
                <button
                  type="button"
                  onClick={() => submit()}
                  className="w-full px-5 py-3 text-sm font-medium text-brand-red hover:bg-secondary transition-smooth flex items-center justify-center gap-2"
                >
                  See all results <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </>
          )}
        </div>
      )}
    </div>
  );
};
