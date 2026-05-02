import { Link } from "react-router-dom";
import { Sheet, SheetContent, SheetHeader, SheetTitle } from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import { Minus, Plus, ShoppingBag, Trash2 } from "lucide-react";
import { useCart } from "@/context/CartContext";
import { formatPrice } from "@/data/products";

export const CartDrawer = () => {
  const { isOpen, closeCart, items, updateQuantity, removeItem, subtotal, totalItems } = useCart();

  return (
    <Sheet open={isOpen} onOpenChange={(o) => !o && closeCart()}>
      <SheetContent className="w-full sm:max-w-md flex flex-col p-0">
        <SheetHeader className="p-6 border-b border-border">
          <SheetTitle className="flex items-center gap-2 text-brand-navy">
            <ShoppingBag className="w-5 h-5" />
            Your Cart {totalItems > 0 && <span className="text-sm font-normal text-muted-foreground">({totalItems})</span>}
          </SheetTitle>
        </SheetHeader>

        {items.length === 0 ? (
          <div className="flex-1 flex flex-col items-center justify-center p-8 text-center">
            <div className="w-20 h-20 rounded-full bg-secondary flex items-center justify-center mb-4">
              <ShoppingBag className="w-8 h-8 text-muted-foreground" />
            </div>
            <h3 className="font-semibold text-lg text-brand-navy">Your cart is empty</h3>
            <p className="text-sm text-muted-foreground mt-1 mb-6">Browse the catalog to add equipment.</p>
            <Button asChild className="bg-brand-red hover:bg-brand-red-hover text-white rounded-full" onClick={closeCart}>
              <Link to="/shop">Shop products</Link>
            </Button>
          </div>
        ) : (
          <>
            <div className="flex-1 overflow-y-auto p-6 space-y-4">
              {items.map(({ product, quantity }) => (
                <div key={product.id} className="flex gap-4 pb-4 border-b border-border last:border-0">
                  <img src={product.image} alt={product.name} className="w-20 h-20 rounded-xl object-cover" loading="lazy" />
                  <div className="flex-1 min-w-0">
                    <Link
                      to={`/product/${product.id}`}
                      onClick={closeCart}
                      className="font-medium text-sm text-foreground hover:text-brand-red line-clamp-2"
                    >
                      {product.name}
                    </Link>
                    <div className="text-xs text-muted-foreground mt-0.5">{product.category}</div>
                    <div className="flex items-center justify-between mt-3">
                      <div className="flex items-center gap-1 border border-border rounded-full">
                        <button
                          onClick={() => updateQuantity(product.id, quantity - 1)}
                          className="w-7 h-7 rounded-full hover:bg-secondary flex items-center justify-center"
                          aria-label="Decrease quantity"
                        >
                          <Minus className="w-3 h-3" />
                        </button>
                        <span className="w-6 text-center text-sm font-medium">{quantity}</span>
                        <button
                          onClick={() => updateQuantity(product.id, quantity + 1)}
                          className="w-7 h-7 rounded-full hover:bg-secondary flex items-center justify-center"
                          aria-label="Increase quantity"
                        >
                          <Plus className="w-3 h-3" />
                        </button>
                      </div>
                      <div className="text-sm font-semibold text-brand-navy">{formatPrice(product.price * quantity)}</div>
                    </div>
                  </div>
                  <button
                    onClick={() => removeItem(product.id)}
                    className="text-muted-foreground hover:text-destructive self-start"
                    aria-label="Remove item"
                  >
                    <Trash2 className="w-4 h-4" />
                  </button>
                </div>
              ))}
            </div>
            <div className="border-t border-border p-6 space-y-4 bg-secondary/40">
              <div className="flex justify-between text-sm">
                <span className="text-muted-foreground">Subtotal</span>
                <span className="font-semibold text-brand-navy">{formatPrice(subtotal)}</span>
              </div>
              <div className="text-xs text-muted-foreground">Shipping and taxes calculated at checkout.</div>
              <Button asChild className="w-full bg-brand-red hover:bg-brand-red-hover text-white rounded-full h-12" onClick={closeCart}>
                <Link to="/checkout">Proceed to Checkout</Link>
              </Button>
              <Button asChild variant="outline" className="w-full rounded-full" onClick={closeCart}>
                <Link to="/shop">Continue Shopping</Link>
              </Button>
            </div>
          </>
        )}
      </SheetContent>
    </Sheet>
  );
};
