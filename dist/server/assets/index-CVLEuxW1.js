import { jsxs, Fragment, jsx } from "react/jsx-runtime";
import { Link } from "@tanstack/react-router";
import { Sparkles, ArrowRight, ShieldCheck, Truck, CreditCard } from "lucide-react";
import { P as PRODUTOS, f as fmtBRL } from "./router-B5nWPIul.js";
import "@tanstack/react-query";
import "react";
function Home() {
  return /* @__PURE__ */ jsxs(Fragment, { children: [
    /* @__PURE__ */ jsxs("section", { className: "relative overflow-hidden", children: [
      /* @__PURE__ */ jsxs("div", { className: "pointer-events-none absolute inset-0 -z-10", children: [
        /* @__PURE__ */ jsx("div", { className: "absolute -top-32 right-[-10%] h-[480px] w-[480px] rounded-full bg-primary/25 blur-3xl" }),
        /* @__PURE__ */ jsx("div", { className: "absolute top-40 left-[-10%] h-[420px] w-[420px] rounded-full bg-accent/20 blur-3xl" })
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "container mx-auto grid gap-12 px-5 py-16 md:grid-cols-2 md:items-center md:py-24", children: [
        /* @__PURE__ */ jsxs("div", { children: [
          /* @__PURE__ */ jsxs("span", { className: "inline-flex items-center gap-1.5 rounded-full border border-primary/30 bg-primary/10 px-3 py-1 text-xs font-medium text-accent", children: [
            /* @__PURE__ */ jsx(Sparkles, { className: "h-3.5 w-3.5" }),
            " Importados originais"
          ] }),
          /* @__PURE__ */ jsxs("h1", { className: "mt-5 text-4xl font-extrabold leading-[1.05] tracking-tight md:text-6xl", children: [
            "Tecnologia de ponta",
            /* @__PURE__ */ jsx("br", {}),
            /* @__PURE__ */ jsx("span", { className: "bg-gradient-to-br from-accent to-fuchsia-300 bg-clip-text text-transparent", children: "com o melhor preço" })
          ] }),
          /* @__PURE__ */ jsx("p", { className: "mt-5 max-w-lg text-base text-muted-foreground md:text-lg", children: "Aparelhos selecionados, testados e prontos para entrega. Parcelamos em até 12x e enviamos para todo o Brasil." }),
          /* @__PURE__ */ jsxs("div", { className: "mt-7 flex flex-wrap gap-3", children: [
            /* @__PURE__ */ jsxs(Link, { to: "/", hash: "produtos", className: "inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-primary to-accent px-5 py-3 text-sm font-semibold text-primary-foreground shadow-lg shadow-primary/30 transition hover:opacity-90", children: [
              "Ver produtos ",
              /* @__PURE__ */ jsx(ArrowRight, { className: "h-4 w-4" })
            ] }),
            /* @__PURE__ */ jsx("a", { href: "https://wa.me/5528999394485", target: "_blank", rel: "noreferrer", className: "inline-flex items-center rounded-xl border border-border bg-card px-5 py-3 text-sm font-semibold transition hover:border-primary", children: "Falar no WhatsApp" })
          ] }),
          /* @__PURE__ */ jsxs("div", { className: "mt-10 grid max-w-md grid-cols-3 gap-4 text-center text-xs text-muted-foreground", children: [
            /* @__PURE__ */ jsxs("div", { children: [
              /* @__PURE__ */ jsx("div", { className: "text-xl font-bold text-foreground", children: "+500" }),
              "vendas"
            ] }),
            /* @__PURE__ */ jsxs("div", { children: [
              /* @__PURE__ */ jsx("div", { className: "text-xl font-bold text-foreground", children: "4.9★" }),
              "avaliação"
            ] }),
            /* @__PURE__ */ jsxs("div", { children: [
              /* @__PURE__ */ jsx("div", { className: "text-xl font-bold text-foreground", children: "12x" }),
              "sem juros*"
            ] })
          ] })
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "relative", children: [
          /* @__PURE__ */ jsx("div", { className: "absolute inset-0 -z-10 rounded-[2rem] bg-gradient-to-br from-primary/30 to-accent/10 blur-2xl" }),
          /* @__PURE__ */ jsx("div", { className: "rounded-[2rem] border border-border bg-card/60 p-6 backdrop-blur", children: /* @__PURE__ */ jsx("img", { src: PRODUTOS[0].capa, alt: PRODUTOS[0].nome, className: "mx-auto h-[420px] w-auto rounded-2xl object-contain drop-shadow-2xl" }) })
        ] })
      ] })
    ] }),
    /* @__PURE__ */ jsx("section", { className: "container mx-auto grid gap-4 px-5 md:grid-cols-3", children: [{
      icon: ShieldCheck,
      t: "Garantia da loja",
      s: "Todos os aparelhos testados"
    }, {
      icon: Truck,
      t: "Envio para todo Brasil",
      s: "Rastreio incluso"
    }, {
      icon: CreditCard,
      t: "Parcele em 12x",
      s: "No cartão de crédito"
    }].map((b) => /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-4 rounded-2xl border border-border bg-card/60 p-5", children: [
      /* @__PURE__ */ jsx("div", { className: "rounded-xl bg-primary/15 p-3 text-accent", children: /* @__PURE__ */ jsx(b.icon, { className: "h-5 w-5" }) }),
      /* @__PURE__ */ jsxs("div", { children: [
        /* @__PURE__ */ jsx("div", { className: "font-semibold", children: b.t }),
        /* @__PURE__ */ jsx("div", { className: "text-sm text-muted-foreground", children: b.s })
      ] })
    ] }, b.t)) }),
    /* @__PURE__ */ jsxs("section", { id: "produtos", className: "container mx-auto scroll-mt-24 px-5 py-20", children: [
      /* @__PURE__ */ jsx("div", { className: "mb-8 flex items-end justify-between", children: /* @__PURE__ */ jsxs("div", { children: [
        /* @__PURE__ */ jsx("h2", { className: "text-2xl font-bold md:text-3xl", children: "Produtos em destaque" }),
        /* @__PURE__ */ jsx("p", { className: "text-sm text-muted-foreground", children: "Selecionados a dedo, prontos para envio." })
      ] }) }),
      /* @__PURE__ */ jsx("div", { className: "grid gap-6 sm:grid-cols-2 lg:grid-cols-3", children: PRODUTOS.map((p) => /* @__PURE__ */ jsxs(Link, { to: "/produto/$slug", params: {
        slug: p.slug
      }, className: "group overflow-hidden rounded-2xl border border-border bg-card/60 transition hover:-translate-y-1 hover:border-primary/60 hover:shadow-2xl hover:shadow-primary/10", children: [
        /* @__PURE__ */ jsxs("div", { className: "relative aspect-square overflow-hidden bg-gradient-to-br from-primary/10 to-accent/5", children: [
          /* @__PURE__ */ jsx("img", { src: p.capa, alt: p.nome, className: "h-full w-full object-contain p-6 transition-transform duration-500 group-hover:scale-105" }),
          p.precoAntigo && /* @__PURE__ */ jsxs("span", { className: "absolute left-3 top-3 rounded-full bg-green-500/90 px-2.5 py-1 text-[11px] font-bold text-white", children: [
            "-",
            Math.round((1 - p.preco / p.precoAntigo) * 100),
            "%"
          ] })
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "p-5", children: [
          /* @__PURE__ */ jsx("div", { className: "text-xs uppercase tracking-wider text-accent", children: p.categoria }),
          /* @__PURE__ */ jsx("h3", { className: "mt-1 font-semibold", children: p.nome }),
          /* @__PURE__ */ jsx("p", { className: "mt-1 line-clamp-2 text-xs text-muted-foreground", children: p.resumo }),
          /* @__PURE__ */ jsxs("div", { className: "mt-4 flex items-end justify-between", children: [
            /* @__PURE__ */ jsxs("div", { children: [
              p.precoAntigo && /* @__PURE__ */ jsx("div", { className: "text-xs text-muted-foreground line-through", children: fmtBRL(p.precoAntigo) }),
              /* @__PURE__ */ jsx("div", { className: "text-lg font-bold", children: fmtBRL(p.preco) }),
              /* @__PURE__ */ jsxs("div", { className: "text-[11px] text-muted-foreground", children: [
                "ou ",
                p.parcelas,
                "x de ",
                fmtBRL(p.preco / p.parcelas)
              ] })
            ] }),
            /* @__PURE__ */ jsx("span", { className: "rounded-lg bg-primary/15 px-3 py-2 text-xs font-semibold text-accent transition group-hover:bg-primary group-hover:text-primary-foreground", children: "Ver" })
          ] })
        ] })
      ] }, p.slug)) })
    ] }),
    /* @__PURE__ */ jsx("section", { id: "sobre", className: "container mx-auto scroll-mt-24 px-5 pb-10", children: /* @__PURE__ */ jsxs("div", { className: "rounded-3xl border border-border bg-gradient-to-br from-primary/15 via-card/60 to-accent/10 p-8 md:p-12", children: [
      /* @__PURE__ */ jsx("h2", { className: "text-2xl font-bold md:text-3xl", children: "Sobre a GGZ Imports" }),
      /* @__PURE__ */ jsx("p", { className: "mt-3 max-w-2xl text-muted-foreground", children: "Somos uma loja de importados focada em smartphones de alto padrão. Cada aparelho é avaliado, testado e enviado com nota e garantia. Atendimento humano via WhatsApp do primeiro contato ao pós-venda." })
    ] }) })
  ] });
}
export {
  Home as component
};
