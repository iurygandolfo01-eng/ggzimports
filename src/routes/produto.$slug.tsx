import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { useState } from "react";
import { ChevronLeft, ShieldCheck, Truck, CreditCard, MessageCircle } from "lucide-react";
import { getProduto, fmtBRL, type Produto } from "@/lib/produtos";
import { useCart } from "@/lib/cart";

export const Route = createFileRoute("/produto/$slug")({
  loader: ({ params }) => {
    const produto = getProduto(params.slug);
    if (!produto) throw notFound();
    return { produto };
  },
  head: ({ loaderData }) => {
    const p = loaderData?.produto;
    if (!p) return { meta: [{ title: "Produto" }] };
    return {
      meta: [
        { title: `${p.nome} — GGZ Imports` },
        { name: "description", content: p.resumo },
        { property: "og:title", content: `${p.nome} — GGZ Imports` },
        { property: "og:description", content: p.resumo },
        { property: "og:image", content: p.capa },
        { name: "twitter:image", content: p.capa },
      ],
    };
  },
  component: ProdutoPage,
});

function ProdutoPage() {
  const { produto } = Route.useLoaderData() as { produto: Produto };
  const { add } = useCart();
  const [main, setMain] = useState(produto.imagens[0]);

  const buyNow = () => {
    add(produto);
  };

  return (
    <div className="container mx-auto px-5 py-8">
      <Link
        to="/"
        className="inline-flex items-center gap-1 text-sm text-muted-foreground transition hover:text-foreground"
      >
        <ChevronLeft className="h-4 w-4" /> Voltar
      </Link>

      <div className="mt-6 grid gap-10 lg:grid-cols-2">
        {/* Galeria estilo Mercado Livre */}
        <div className="flex flex-col gap-3 sm:flex-row">
          {/* Thumbnails verticais à esquerda */}
          <div className="flex gap-2 overflow-x-auto sm:flex-col sm:overflow-visible sm:gap-2">
            {produto.imagens.map((img) => (
              <button
                key={img}
                onClick={() => setMain(img)}
                className={`h-16 w-16 flex-shrink-0 overflow-hidden rounded-xl border-2 bg-card transition sm:h-20 sm:w-20 ${
                  main === img ? "border-primary" : "border-border hover:border-primary/40"
                }`}
              >
                <img src={img} alt="" className="h-full w-full object-cover" />
              </button>
            ))}
          </div>
          {/* Imagem principal */}
          <div className="flex-1 overflow-hidden rounded-3xl border border-border bg-gradient-to-br from-primary/10 to-accent/5">
            <img src={main} alt={produto.nome} className="aspect-square w-full object-contain p-6 sm:p-10" />
          </div>
        </div>

        {/* Info */}
        <div>
          <div className="text-xs uppercase tracking-wider text-accent">{produto.categoria}</div>
          <h1 className="mt-1 text-3xl font-extrabold tracking-tight md:text-4xl">{produto.nome}</h1>
          <p className="mt-2 text-muted-foreground">{produto.resumo}</p>

          <div className="mt-6 rounded-2xl border border-border bg-card/60 p-5">
            {produto.precoAntigo && (
              <div className="text-sm text-muted-foreground line-through">
                {fmtBRL(produto.precoAntigo)}
              </div>
            )}
            <div className="flex items-end gap-3">
              <div className="text-4xl font-extrabold">{fmtBRL(produto.preco)}</div>
              {produto.precoAntigo && (
                <span className="mb-1.5 rounded-full bg-green-500/90 px-2.5 py-1 text-[11px] font-bold text-white">
                  -{Math.round((1 - produto.preco / produto.precoAntigo) * 100)}%
                </span>
              )}
            </div>
            <div className="mt-1 text-sm text-muted-foreground">
              ou {produto.parcelas}x de{" "}
              <span className="font-semibold text-foreground">
                {fmtBRL(produto.preco / produto.parcelas)}
              </span>{" "}
              sem juros
            </div>

            <div className="mt-5 flex flex-col gap-2 sm:flex-row">
              <button
                onClick={buyNow}
                className="flex-1 rounded-xl bg-gradient-to-r from-primary to-accent px-5 py-3.5 text-sm font-semibold text-primary-foreground shadow-lg shadow-primary/30 transition hover:opacity-90"
              >
                Comprar agora
              </button>
              <a
                href={`https://wa.me/5528999394485?text=${encodeURIComponent(
                  `Olá! Tenho interesse no ${produto.nome}`,
                )}`}
                target="_blank"
                rel="noreferrer"
                className="inline-flex flex-1 items-center justify-center gap-2 rounded-xl border border-border bg-background px-5 py-3.5 text-sm font-semibold transition hover:border-primary"
              >
                <MessageCircle className="h-4 w-4" /> WhatsApp
              </a>
            </div>
          </div>

          <ul className="mt-5 grid gap-2 text-sm sm:grid-cols-3">
            {[
              { i: ShieldCheck, t: "Garantia da loja" },
              { i: Truck, t: "Envio para todo Brasil" },
              { i: CreditCard, t: "Parcele em 12x" },
            ].map((b) => (
              <li
                key={b.t}
                className="flex items-center gap-2 rounded-xl border border-border bg-card/40 px-3 py-2.5 text-muted-foreground"
              >
                <b.i className="h-4 w-4 text-accent" /> {b.t}
              </li>
            ))}
          </ul>

          <div className="mt-8">
            <h2 className="text-lg font-semibold">Descrição</h2>
            <p className="mt-2 text-sm text-muted-foreground">{produto.descricao}</p>
          </div>

          <div className="mt-6">
            <h2 className="text-lg font-semibold">Especificações</h2>
            <dl className="mt-3 overflow-hidden rounded-2xl border border-border">
              {produto.specs.map((s, idx) => (
                <div
                  key={s.label}
                  className={`flex justify-between px-4 py-3 text-sm ${
                    idx % 2 ? "bg-card/40" : "bg-background/40"
                  }`}
                >
                  <dt className="text-muted-foreground">{s.label}</dt>
                  <dd className="font-medium">{s.valor}</dd>
                </div>
              ))}
            </dl>
          </div>
        </div>
      </div>
    </div>
  );
}
