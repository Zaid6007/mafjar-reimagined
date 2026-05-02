import { createContext, useContext, useEffect, useMemo, useState, ReactNode } from "react";
import type { Product } from "@/data/products";

export interface CartItem {
  product: Product;
  quantity: number;
}

interface CartContextValue {
  items: CartItem[];
  isOpen: boolean;
  openCart: () => void;
  closeCart: () => void;
  addItem: (product: Product, quantity?: number) => void;
  removeItem: (id: string) => void;
  updateQuantity: (id: string, quantity: number) => void;
  clear: () => void;
  totalItems: number;
  subtotal: number;
}

const CartContext = createContext<CartContextValue | null>(null);
const STORAGE_KEY = "mafjar.cart.v1";

export const CartProvider = ({ children }: { children: ReactNode }) => {
  const [items, setItems] = useState<CartItem[]>(() => {
    try {
      const raw = localStorage.getItem(STORAGE_KEY);
      return raw ? (JSON.parse(raw) as CartItem[]) : [];
    } catch {
      return [];
    }
  });
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(items));
  }, [items]);

  const addItem = (product: Product, quantity = 1) => {
    setItems((prev) => {
      const existing = prev.find((i) => i.product.id === product.id);
      if (existing) {
        return prev.map((i) =>
          i.product.id === product.id ? { ...i, quantity: i.quantity + quantity } : i
        );
      }
      return [...prev, { product, quantity }];
    });
    setIsOpen(true);
  };

  const removeItem = (id: string) =>
    setItems((prev) => prev.filter((i) => i.product.id !== id));

  const updateQuantity = (id: string, quantity: number) => {
    if (quantity <= 0) return removeItem(id);
    setItems((prev) =>
      prev.map((i) => (i.product.id === id ? { ...i, quantity } : i))
    );
  };

  const clear = () => setItems([]);

  const value = useMemo<CartContextValue>(() => {
    const totalItems = items.reduce((s, i) => s + i.quantity, 0);
    const subtotal = items.reduce((s, i) => s + i.quantity * i.product.price, 0);
    return {
      items,
      isOpen,
      openCart: () => setIsOpen(true),
      closeCart: () => setIsOpen(false),
      addItem,
      removeItem,
      updateQuantity,
      clear,
      totalItems,
      subtotal,
    };
  }, [items, isOpen]);

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
};

export const useCart = () => {
  const ctx = useContext(CartContext);
  if (!ctx) throw new Error("useCart must be used within CartProvider");
  return ctx;
};
