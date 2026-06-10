import { X } from "lucide-react";
import { useCart } from "@/lib/cart";
import { fmtBRL } from "@/lib/produtos";

export function CartDrawer() {
  const { items, open, setOpen, remove, total, checkout } = useCart();
  return (
    <>
      <div
        onClick={() => setOpen(false)}
        className={`fixed inset-0 z-[60] bg-background/70 backdrop-blur-sm transition-opacity ${
          open ? "opacity-100" : "pointer-events-none opacity-0"
        }`}
      />
      <aside
        className={`fixed right-0 top-0 z-[70] flex h-full w-full max-w-md flex-col border-l border-border bg-card shadow-2xl transition-transform ${
          open ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex items-center justify-between border-b border-border px-5 py-4">
          <h3 className="text-base font-semibold">Seu carrinho</h3>
          <button onClick={() => setOpen(false)} className="rounded-md p-1 hover:bg-secondary">
            <X className="h-5 w-5" />
          </button>
        </div>

        <div className="flex-1 overflow-y-auto px-5 py-4">
          {!items.length ? (
            <div className="flex h-full items-center justify-center text-sm text-muted-foreground">
              Seu carrinho está vazio
            </div>
          ) : (
            <ul className="space-y-3">
              {items.map((i) => (
                <li
                  key={i.slug}
                  className="flex items-center gap-3 rounded-xl border border-border bg-background/40 p-3"
                >
                  <img src={i.capa} alt="" className="h-14 w-14 rounded-lg object-cover" />
                  <div className="flex-1">
                    <div className="text-sm font-medium">{i.nome}</div>
                    <div className="text-xs text-muted-foreground">
                      {i.qty} × {fmtBRL(i.preco)}
                    </div>
                  </div>
                  <button
                    onClick={() => remove(i.slug)}
                    className="rounded-md p-1.5 text-muted-foreground hover:bg-secondary hover:text-foreground"
                  >
                    <X className="h-4 w-4" />
                  </button>
                </li>
              ))}
            </ul>
          )}
        </div>

        <div className="border-t border-border px-5 py-4">
          <div className="mb-3 flex items-center justify-between text-sm">
            <span className="text-muted-foreground">Total</span>
            <span className="text-lg font-bold">{fmtBRL(total)}</span>
          </div>
          <button
            onClick={checkout}
            disabled={!items.length}
            className="w-full rounded-xl bg-gradient-to-r from-primary to-accent px-4 py-3 text-sm font-semibold text-primary-foreground shadow-lg shadow-primary/30 transition hover:opacity-90 disabled:cursor-not-allowed disabled:opacity-50"
          >
            Finalizar no WhatsApp
          </button>
        </div>
      </aside>
    </>
  );
}
