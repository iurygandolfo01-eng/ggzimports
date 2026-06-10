import { Link } from "@tanstack/react-router";
import { Search, ShoppingBag } from "lucide-react";
import { useCart } from "@/lib/cart";

export function Header() {
  const { count, setOpen } = useCart();
  return (
    <header className="sticky top-0 z-50 border-b border-border/60 bg-background/75 backdrop-blur-xl">
      <div className="container mx-auto flex items-center gap-4 px-5 py-3.5 md:gap-6">
        <Link to="/" className="flex items-center gap-2 font-extrabold">
          <span className="rounded-lg bg-gradient-to-br from-primary to-accent px-2.5 py-1.5 text-xs tracking-widest text-primary-foreground">
            GGZ
          </span>
          <span className="text-lg tracking-wide">Imports</span>
        </Link>

        <nav className="hidden items-center gap-5 text-sm text-muted-foreground md:flex">
          <Link to="/" className="transition hover:text-foreground">Home</Link>
          <Link to="/" hash="produtos" className="transition hover:text-foreground">Produtos</Link>
          <Link to="/" hash="sobre" className="transition hover:text-foreground">Sobre</Link>
        </nav>

        <div className="ml-auto hidden flex-1 max-w-md items-center gap-2 rounded-xl border border-border bg-card px-3.5 py-2.5 md:flex">
          <Search className="h-4 w-4 text-muted-foreground" />
          <input
            placeholder="Buscar produtos..."
            className="flex-1 bg-transparent text-sm outline-none placeholder:text-muted-foreground"
          />
        </div>

        <button
          onClick={() => setOpen(true)}
          className="relative inline-flex items-center gap-2 rounded-xl border border-border bg-card px-3.5 py-2.5 text-sm font-medium transition hover:border-primary"
        >
          <ShoppingBag className="h-4 w-4" />
          <span className="hidden sm:inline">Carrinho</span>
          <span className="inline-flex min-w-5 items-center justify-center rounded-full bg-primary px-2 py-0.5 text-[11px] font-bold text-primary-foreground">
            {count}
          </span>
        </button>
      </div>
    </header>
  );
}
