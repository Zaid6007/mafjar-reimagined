import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useCart } from "@/context/CartContext";
import { useAuth } from "@/context/AuthContext";
import { formatPrice } from "@/data/products";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { CheckCircle2, CreditCard, Lock } from "lucide-react";
import { toast } from "sonner";

const Checkout = () => {
  const { items, subtotal, clear } = useCart();
  const { user } = useAuth();
  const navigate = useNavigate();
  const [submitting, setSubmitting] = useState(false);
  const [done, setDone] = useState(false);
  const shipping = items.length ? 49 : 0;
  const total = subtotal + shipping;

  if (items.length === 0 && !done) {
    return (
      <div className="container-tight py-24 text-center">
        <h1 className="text-3xl font-bold text-brand-navy mb-4">Your cart is empty</h1>
        <p className="text-muted-foreground mb-8">Add products before checking out.</p>
        <Button asChild className="rounded-full bg-brand-red hover:bg-brand-red-hover text-white">
          <Link to="/shop">Browse catalog</Link>
        </Button>
      </div>
    );
  }

  if (done) {
    return (
      <div className="container-tight py-24 text-center max-w-xl mx-auto">
        <div className="w-20 h-20 rounded-full bg-brand-red/10 text-brand-red flex items-center justify-center mx-auto mb-6">
          <CheckCircle2 className="w-10 h-10" />
        </div>
        <h1 className="text-3xl font-bold text-brand-navy mb-3">Order placed</h1>
        <p className="text-muted-foreground mb-8">
          Thanks — a confirmation has been sent to {user?.email ?? "your email"}. Our team will follow up with shipping details.
        </p>
        <Button asChild className="rounded-full bg-brand-navy hover:bg-brand-navy-deep text-white" onClick={() => navigate("/")}>
          <Link to="/">Back to home</Link>
        </Button>
      </div>
    );
  }

  const onSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitting(true);
    await new Promise((r) => setTimeout(r, 900));
    clear();
    setSubmitting(false);
    setDone(true);
    toast.success("Order confirmed");
  };

  return (
    <section className="py-12 md:py-16">
      <div className="container-tight">
        <h1 className="text-3xl md:text-4xl font-bold text-brand-navy mb-10">Checkout</h1>
        <div className="grid lg:grid-cols-[1fr_400px] gap-10">
          <form onSubmit={onSubmit} className="space-y-8">
            <section className="bg-card p-7 rounded-3xl border border-border shadow-card">
              <h2 className="font-semibold text-brand-navy mb-5">Contact</h2>
              <div className="grid sm:grid-cols-2 gap-4">
                <div><Label htmlFor="email">Email *</Label><Input id="email" type="email" required defaultValue={user?.email} className="rounded-full mt-1.5" /></div>
                <div><Label htmlFor="phone">Phone *</Label><Input id="phone" type="tel" required className="rounded-full mt-1.5" /></div>
              </div>
            </section>

            <section className="bg-card p-7 rounded-3xl border border-border shadow-card">
              <h2 className="font-semibold text-brand-navy mb-5">Shipping address</h2>
              <div className="grid sm:grid-cols-2 gap-4">
                <div><Label htmlFor="fn">First name *</Label><Input id="fn" required className="rounded-full mt-1.5" /></div>
                <div><Label htmlFor="ln">Last name *</Label><Input id="ln" required className="rounded-full mt-1.5" /></div>
                <div className="sm:col-span-2"><Label htmlFor="addr">Address *</Label><Input id="addr" required className="rounded-full mt-1.5" /></div>
                <div><Label htmlFor="city">City *</Label><Input id="city" required className="rounded-full mt-1.5" /></div>
                <div><Label htmlFor="country">Country *</Label><Input id="country" required defaultValue="Qatar" className="rounded-full mt-1.5" /></div>
              </div>
            </section>

            <section className="bg-card p-7 rounded-3xl border border-border shadow-card">
              <div className="flex items-center justify-between mb-5">
                <h2 className="font-semibold text-brand-navy flex items-center gap-2"><CreditCard className="w-5 h-5" /> Payment</h2>
                <div className="flex items-center gap-1.5 text-xs text-muted-foreground"><Lock className="w-3.5 h-3.5" /> Secure checkout</div>
              </div>
              <div className="space-y-4">
                <div><Label htmlFor="cn">Card number *</Label><Input id="cn" required placeholder="4242 4242 4242 4242" maxLength={19} className="rounded-full mt-1.5" /></div>
                <div className="grid grid-cols-2 gap-4">
                  <div><Label htmlFor="exp">Expiry *</Label><Input id="exp" required placeholder="MM / YY" maxLength={7} className="rounded-full mt-1.5" /></div>
                  <div><Label htmlFor="cvc">CVC *</Label><Input id="cvc" required placeholder="123" maxLength={4} className="rounded-full mt-1.5" /></div>
                </div>
              </div>
              <p className="text-xs text-muted-foreground mt-4">Demo checkout — no real charge is made. Wire to your payment processor before going live.</p>
            </section>

            <Button type="submit" disabled={submitting} className="w-full bg-brand-red hover:bg-brand-red-hover text-white rounded-full h-14 text-base font-semibold">
              {submitting ? "Processing payment…" : `Pay ${formatPrice(total)}`}
            </Button>
          </form>

          <aside className="bg-secondary/50 p-7 rounded-3xl border border-border h-fit lg:sticky lg:top-28">
            <h2 className="font-semibold text-brand-navy mb-5">Order summary</h2>
            <ul className="space-y-4 mb-6">
              {items.map(({ product, quantity }) => (
                <li key={product.id} className="flex gap-3">
                  <div className="relative">
                    <img src={product.image} alt={product.name} className="w-16 h-16 rounded-xl object-cover" />
                    <span className="absolute -top-2 -right-2 w-5 h-5 rounded-full bg-brand-navy text-white text-[11px] font-bold flex items-center justify-center">{quantity}</span>
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="text-sm font-medium text-foreground line-clamp-2">{product.name}</div>
                    <div className="text-xs text-muted-foreground">{product.category}</div>
                  </div>
                  <div className="text-sm font-semibold text-brand-navy whitespace-nowrap">{formatPrice(product.price * quantity)}</div>
                </li>
              ))}
            </ul>
            <div className="space-y-2 text-sm border-t border-border pt-4">
              <div className="flex justify-between"><span className="text-muted-foreground">Subtotal</span><span>{formatPrice(subtotal)}</span></div>
              <div className="flex justify-between"><span className="text-muted-foreground">Shipping</span><span>{formatPrice(shipping)}</span></div>
              <div className="flex justify-between text-base font-bold text-brand-navy pt-2 border-t border-border mt-2">
                <span>Total</span><span>{formatPrice(total)}</span>
              </div>
            </div>
          </aside>
        </div>
      </div>
    </section>
  );
};

export default Checkout;
