import { Link, NavLink, useLocation } from "react-router-dom";
import { Anchor, Menu, ShoppingCart, User as UserIcon, X } from "lucide-react";
import { useState } from "react";
import { useCart } from "@/context/CartContext";
import { useAuth } from "@/context/AuthContext";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const NAV = [
  { to: "/", label: "Home" },
  { to: "/shop", label: "Shop" },
  { to: "/about", label: "About" },
  { to: "/services", label: "Services" },
  { to: "/contact", label: "Contact" },
];

export const Header = () => {
  const [open, setOpen] = useState(false);
  const { totalItems, openCart } = useCart();
  const { user } = useAuth();
  const location = useLocation();

  return (
    <header className="sticky top-0 z-40 bg-background/85 backdrop-blur-md border-b border-border">
      <div className="container-tight flex items-center justify-between h-20">
        <Link to="/" className="flex items-center gap-3 group" aria-label="Mafjar Marine home">
          <div className="w-11 h-11 rounded-full bg-brand-navy text-white flex items-center justify-center shadow-card group-hover:scale-105 transition-smooth">
            <Anchor className="w-5 h-5" />
          </div>
          <div className="leading-tight">
            <div className="font-bold text-brand-navy text-sm tracking-wide">MAFJAR MARINE</div>
            <div className="text-[10px] uppercase tracking-[0.18em] text-muted-foreground">Trading & Services</div>
          </div>
        </Link>

        <nav className="hidden lg:flex items-center gap-1">
          {NAV.map((n) => (
            <NavLink
              key={n.to}
              to={n.to}
              end={n.to === "/"}
              className={({ isActive }) =>
                cn(
                  "px-4 py-2 text-sm font-medium rounded-full transition-smooth",
                  isActive
                    ? "text-brand-red"
                    : "text-foreground/80 hover:text-brand-navy hover:bg-secondary"
                )
              }
            >
              {n.label}
            </NavLink>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <Button
            variant="ghost"
            size="icon"
            onClick={openCart}
            aria-label={`Cart with ${totalItems} items`}
            className="relative rounded-full"
          >
            <ShoppingCart className="w-5 h-5" />
            {totalItems > 0 && (
              <span className="absolute -top-0.5 -right-0.5 w-5 h-5 rounded-full bg-brand-red text-white text-[11px] font-bold flex items-center justify-center">
                {totalItems}
              </span>
            )}
          </Button>
          <Link to={user ? "/account" : "/auth"} className="hidden sm:block">
            <Button variant="ghost" size="icon" className="rounded-full" aria-label="Account">
              <UserIcon className="w-5 h-5" />
            </Button>
          </Link>
          <Link to="/contact" className="hidden md:block">
            <Button className="bg-brand-red hover:bg-brand-red-hover text-white rounded-full px-5">
              Request a Quote
            </Button>
          </Link>
          <Button
            variant="ghost"
            size="icon"
            className="lg:hidden rounded-full"
            onClick={() => setOpen((v) => !v)}
            aria-label="Toggle menu"
          >
            {open ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </Button>
        </div>
      </div>

      {open && (
        <div className="lg:hidden border-t border-border bg-background animate-fade-in">
          <nav className="container-tight py-4 flex flex-col gap-1">
            {NAV.map((n) => (
              <Link
                key={n.to}
                to={n.to}
                onClick={() => setOpen(false)}
                className={cn(
                  "px-4 py-3 rounded-lg font-medium",
                  location.pathname === n.to ? "bg-secondary text-brand-red" : "hover:bg-secondary"
                )}
              >
                {n.label}
              </Link>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
};
