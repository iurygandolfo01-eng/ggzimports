import { createContext, useContext, useEffect, useState, type ReactNode } from "react";
import { fmtBRL, type Produto } from "./produtos";

export type CartItem = {
  slug: string;
  nome: string;
  preco: number;
  capa: string;
  qty: number;
};

type CartCtx = {
  items: CartItem[];
  count: number;
  total: number;
  open: boolean;
  setOpen: (v: boolean) => void;
  add: (p: Produto) => void;
  remove: (slug: string) => void;
  clear: () => void;
  checkout: () => void;
};

const Ctx = createContext<CartCtx | null>(null);
const WHATSAPP = "5528999394485";

export function CartProvider({ children }: { children: ReactNode }) {
  const [items, setItems] = useState<CartItem[]>([]);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    try {
      const raw = localStorage.getItem("ggz-cart");
      if (raw) setItems(JSON.parse(raw));
    } catch {}
  }, []);

  useEffect(() => {
    try {
      localStorage.setItem("ggz-cart", JSON.stringify(items));
    } catch {}
  }, [items]);

  const add = (p: Produto) => {
    setItems((prev) => {
      const ex = prev.find((i) => i.slug === p.slug);
      if (ex) return prev.map((i) => (i.slug === p.slug ? { ...i, qty: i.qty + 1 } : i));
      return [...prev, { slug: p.slug, nome: p.nome, preco: p.preco, capa: p.capa, qty: 1 }];
    });
    setOpen(true);
  };

  const remove = (slug: string) => setItems((p) => p.filter((i) => i.slug !== slug));
  const clear = () => setItems([]);

  const total = items.reduce((s, i) => s + i.preco * i.qty, 0);
  const count = items.reduce((s, i) => s + i.qty, 0);

  const checkout = () => {
    if (!items.length) return;
    const linhas = items
      .map((i) => `• ${i.qty}x ${i.nome} — ${fmtBRL(i.preco * i.qty)}`)
      .join("\n");
    const txt = `Olá GGZ Imports! Quero comprar:\n${linhas}\n\nTotal: ${fmtBRL(total)}`;
    window.open(`https://wa.me/${WHATSAPP}?text=${encodeURIComponent(txt)}`, "_blank");
  };

  return (
    <Ctx.Provider value={{ items, count, total, open, setOpen, add, remove, clear, checkout }}>
      {children}
    </Ctx.Provider>
  );
}

export function useCart() {
  const c = useContext(Ctx);
  if (!c) throw new Error("useCart outside provider");
  return c;
}
