import { createFileRoute, Link } from "@tanstack/react-router";
import { ShieldCheck, Truck, CreditCard, Sparkles, ArrowRight } from "lucide-react";
import { PRODUTOS, fmtBRL } from "@/lib/produtos";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "GGZ Imports — iPhones importados com garantia" },
      {
        name: "description",
        content:
          "Loja de importados GGZ Imports: iPhones testados, parcelamento em até 12x e entrega para todo o Brasil.",
      },
      { property: "og:title", content: "GGZ Imports — iPhones importados com garantia" },
      {
        property: "og:description",
        content: "iPhones importados, testados e prontos para entrega. Parcele em 12x.",
      },
    ],
  }),
  component: Home,
});

function Home() {
  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden">
        <div className="pointer-events-none absolute inset-0 -z-10">
          <div className="absolute -top-32 right-[-10%] h-[480px] w-[480px] rounded-full bg-primary/25 blur-3xl" />
          <div className="absolute top-40 left-[-10%] h-[420px] w-[420px] rounded-full bg-accent/20 blur-3xl" />
        </div>

        <div className="container mx-auto grid gap-12 px-5 py-16 md:grid-cols-2 md:items-center md:py-24">
          <div>
            <span className="inline-flex items-center gap-1.5 rounded-full border border-primary/30 bg-primary/10 px-3 py-1 text-xs font-medium text-accent">
              <Sparkles className="h-3.5 w-3.5" /> Importados originais
            </span>
            <h1 className="mt-5 text-4xl font-extrabold leading-[1.05] tracking-tight md:text-6xl">
              Tecnologia de ponta<br />
              <span className="bg-gradient-to-br from-accent to-fuchsia-300 bg-clip-text text-transparent">
                com o melhor preço
              </span>
            </h1>
            <p className="mt-5 max-w-lg text-base text-muted-foreground md:text-lg">
              Aparelhos selecionados, testados e prontos para entrega. Parcelamos em até 12x e enviamos para todo o Brasil.
            </p>
            <div className="mt-7 flex flex-wrap gap-3">
              <Link
                to="/"
                hash="produtos"
                className="inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-primary to-accent px-5 py-3 text-sm font-semibold text-primary-foreground shadow-lg shadow-primary/30 transition hover:opacity-90"
              >
                Ver produtos <ArrowRight className="h-4 w-4" />
              </Link>
              <a
                href="https://wa.me/5528999394485"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center rounded-xl border border-border bg-card px-5 py-3 text-sm font-semibold transition hover:border-primary"
              >
                Falar no WhatsApp
              </a>
            </div>

            <div className="mt-10 grid max-w-md grid-cols-3 gap-4 text-center text-xs text-muted-foreground">
              <div>
                <div className="text-xl font-bold text-foreground">+500</div>vendas
              </div>
              <div>
                <div className="text-xl font-bold text-foreground">4.9★</div>avaliação
              </div>
              <div>
                <div className="text-xl font-bold text-foreground">12x</div>sem juros*
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="absolute inset-0 -z-10 rounded-[2rem] bg-gradient-to-br from-primary/30 to-accent/10 blur-2xl" />
            <div className="rounded-[2rem] border border-border bg-card/60 p-6 backdrop-blur">
              <img
                src={PRODUTOS[0].capa}
                alt={PRODUTOS[0].nome}
                className="mx-auto h-[420px] w-auto rounded-2xl object-contain drop-shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Benefícios */}
      <section className="container mx-auto grid gap-4 px-5 md:grid-cols-3">
        {[
          { icon: ShieldCheck, t: "Garantia da loja", s: "Todos os aparelhos testados" },
          { icon: Truck, t: "Envio para todo Brasil", s: "Rastreio incluso" },
          { icon: CreditCard, t: "Parcele em 12x", s: "No cartão de crédito" },
        ].map((b) => (
          <div
            key={b.t}
            className="flex items-center gap-4 rounded-2xl border border-border bg-card/60 p-5"
          >
            <div className="rounded-xl bg-primary/15 p-3 text-accent">
              <b.icon className="h-5 w-5" />
            </div>
            <div>
              <div className="font-semibold">{b.t}</div>
              <div className="text-sm text-muted-foreground">{b.s}</div>
            </div>
          </div>
        ))}
      </section>

      {/* Produtos */}
      <section id="produtos" className="container mx-auto scroll-mt-24 px-5 py-20">
        <div className="mb-8 flex items-end justify-between">
          <div>
            <h2 className="text-2xl font-bold md:text-3xl">Produtos em destaque</h2>
            <p className="text-sm text-muted-foreground">Selecionados a dedo, prontos para envio.</p>
          </div>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {PRODUTOS.map((p) => (
            <Link
              key={p.slug}
              to="/produto/$slug"
              params={{ slug: p.slug }}
              className="group overflow-hidden rounded-2xl border border-border bg-card/60 transition hover:-translate-y-1 hover:border-primary/60 hover:shadow-2xl hover:shadow-primary/10"
            >
              <div className="relative aspect-square overflow-hidden bg-gradient-to-br from-primary/10 to-accent/5">
                <img
                  src={p.capa}
                  alt={p.nome}
                  className="h-full w-full object-contain p-6 transition-transform duration-500 group-hover:scale-105"
                />
                {p.precoAntigo && (
                  <span className="absolute left-3 top-3 rounded-full bg-green-500/90 px-2.5 py-1 text-[11px] font-bold text-white">
                    -{Math.round((1 - p.preco / p.precoAntigo) * 100)}%
                  </span>
                )}
              </div>
              <div className="p-5">
                <div className="text-xs uppercase tracking-wider text-accent">{p.categoria}</div>
                <h3 className="mt-1 font-semibold">{p.nome}</h3>
                <p className="mt-1 line-clamp-2 text-xs text-muted-foreground">{p.resumo}</p>
                <div className="mt-4 flex items-end justify-between">
                  <div>
                    {p.precoAntigo && (
                      <div className="text-xs text-muted-foreground line-through">
                        {fmtBRL(p.precoAntigo)}
                      </div>
                    )}
                    <div className="text-lg font-bold">{fmtBRL(p.preco)}</div>
                    <div className="text-[11px] text-muted-foreground">
                      ou {p.parcelas}x de {fmtBRL(p.preco / p.parcelas)}
                    </div>
                  </div>
                  <span className="rounded-lg bg-primary/15 px-3 py-2 text-xs font-semibold text-accent transition group-hover:bg-primary group-hover:text-primary-foreground">
                    Ver
                  </span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* Sobre */}
      <section id="sobre" className="container mx-auto scroll-mt-24 px-5 pb-10">
        <div className="rounded-3xl border border-border bg-gradient-to-br from-primary/15 via-card/60 to-accent/10 p-8 md:p-12">
          <h2 className="text-2xl font-bold md:text-3xl">Sobre a GGZ Imports</h2>
          <p className="mt-3 max-w-2xl text-muted-foreground">
            Somos uma loja de importados focada em smartphones de alto padrão. Cada aparelho é
            avaliado, testado e enviado com nota e garantia. Atendimento humano via WhatsApp do
            primeiro contato ao pós-venda.
          </p>
        </div>
      </section>
    </>
  );
}
