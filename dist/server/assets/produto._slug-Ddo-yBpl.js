import { jsxs, jsx } from "react/jsx-runtime";
import { Link } from "@tanstack/react-router";
import { useState } from "react";
import { ChevronLeft, MessageCircle, ShieldCheck, Truck, CreditCard } from "lucide-react";
import { R as Route, u as useCart, f as fmtBRL } from "./router-B5nWPIul.js";
import "@tanstack/react-query";
function ProdutoPage() {
  const {
    produto
  } = Route.useLoaderData();
  const {
    add
  } = useCart();
  const [main, setMain] = useState(produto.imagens[0]);
  const buyNow = () => {
    add(produto);
  };
  return /* @__PURE__ */ jsxs("div", { className: "container mx-auto px-5 py-8", children: [
    /* @__PURE__ */ jsxs(Link, { to: "/", className: "inline-flex items-center gap-1 text-sm text-muted-foreground transition hover:text-foreground", children: [
      /* @__PURE__ */ jsx(ChevronLeft, { className: "h-4 w-4" }),
      " Voltar"
    ] }),
    /* @__PURE__ */ jsxs("div", { className: "mt-6 grid gap-10 lg:grid-cols-2", children: [
      /* @__PURE__ */ jsxs("div", { className: "flex flex-col gap-3 sm:flex-row", children: [
        /* @__PURE__ */ jsx("div", { className: "flex gap-2 overflow-x-auto sm:flex-col sm:overflow-visible sm:gap-2", children: produto.imagens.map((img) => /* @__PURE__ */ jsx("button", { onClick: () => setMain(img), className: `h-16 w-16 flex-shrink-0 overflow-hidden rounded-xl border-2 bg-card transition sm:h-20 sm:w-20 ${main === img ? "border-primary" : "border-border hover:border-primary/40"}`, children: /* @__PURE__ */ jsx("img", { src: img, alt: "", className: "h-full w-full object-cover" }) }, img)) }),
        /* @__PURE__ */ jsx("div", { className: "flex-1 overflow-hidden rounded-3xl border border-border bg-gradient-to-br from-primary/10 to-accent/5", children: /* @__PURE__ */ jsx("img", { src: main, alt: produto.nome, className: "aspect-square w-full object-contain p-6 sm:p-10" }) })
      ] }),
      /* @__PURE__ */ jsxs("div", { children: [
        /* @__PURE__ */ jsx("div", { className: "text-xs uppercase tracking-wider text-accent", children: produto.categoria }),
        /* @__PURE__ */ jsx("h1", { className: "mt-1 text-3xl font-extrabold tracking-tight md:text-4xl", children: produto.nome }),
        /* @__PURE__ */ jsx("p", { className: "mt-2 text-muted-foreground", children: produto.resumo }),
        /* @__PURE__ */ jsxs("div", { className: "mt-6 rounded-2xl border border-border bg-card/60 p-5", children: [
          produto.precoAntigo && /* @__PURE__ */ jsx("div", { className: "text-sm text-muted-foreground line-through", children: fmtBRL(produto.precoAntigo) }),
          /* @__PURE__ */ jsxs("div", { className: "flex items-end gap-3", children: [
            /* @__PURE__ */ jsx("div", { className: "text-4xl font-extrabold", children: fmtBRL(produto.preco) }),
            produto.precoAntigo && /* @__PURE__ */ jsxs("span", { className: "mb-1.5 rounded-full bg-green-500/90 px-2.5 py-1 text-[11px] font-bold text-white", children: [
              "-",
              Math.round((1 - produto.preco / produto.precoAntigo) * 100),
              "%"
            ] })
          ] }),
          /* @__PURE__ */ jsxs("div", { className: "mt-1 text-sm text-muted-foreground", children: [
            "ou ",
            produto.parcelas,
            "x de",
            " ",
            /* @__PURE__ */ jsx("span", { className: "font-semibold text-foreground", children: fmtBRL(produto.preco / produto.parcelas) }),
            " ",
            "sem juros"
          ] }),
          /* @__PURE__ */ jsxs("div", { className: "mt-5 flex flex-col gap-2 sm:flex-row", children: [
            /* @__PURE__ */ jsx("button", { onClick: buyNow, className: "flex-1 rounded-xl bg-gradient-to-r from-primary to-accent px-5 py-3.5 text-sm font-semibold text-primary-foreground shadow-lg shadow-primary/30 transition hover:opacity-90", children: "Comprar agora" }),
            /* @__PURE__ */ jsxs("a", { href: `https://wa.me/5528999394485?text=${encodeURIComponent(`Olá! Tenho interesse no ${produto.nome}`)}`, target: "_blank", rel: "noreferrer", className: "inline-flex flex-1 items-center justify-center gap-2 rounded-xl border border-border bg-background px-5 py-3.5 text-sm font-semibold transition hover:border-primary", children: [
              /* @__PURE__ */ jsx(MessageCircle, { className: "h-4 w-4" }),
              " WhatsApp"
            ] })
          ] })
        ] }),
        /* @__PURE__ */ jsx("ul", { className: "mt-5 grid gap-2 text-sm sm:grid-cols-3", children: [{
          i: ShieldCheck,
          t: "Garantia da loja"
        }, {
          i: Truck,
          t: "Envio para todo Brasil"
        }, {
          i: CreditCard,
          t: "Parcele em 12x"
        }].map((b) => /* @__PURE__ */ jsxs("li", { className: "flex items-center gap-2 rounded-xl border border-border bg-card/40 px-3 py-2.5 text-muted-foreground", children: [
          /* @__PURE__ */ jsx(b.i, { className: "h-4 w-4 text-accent" }),
          " ",
          b.t
        ] }, b.t)) }),
        /* @__PURE__ */ jsxs("div", { className: "mt-8", children: [
          /* @__PURE__ */ jsx("h2", { className: "text-lg font-semibold", children: "Descrição" }),
          /* @__PURE__ */ jsx("p", { className: "mt-2 text-sm text-muted-foreground", children: produto.descricao })
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "mt-6", children: [
          /* @__PURE__ */ jsx("h2", { className: "text-lg font-semibold", children: "Especificações" }),
          /* @__PURE__ */ jsx("dl", { className: "mt-3 overflow-hidden rounded-2xl border border-border", children: produto.specs.map((s, idx) => /* @__PURE__ */ jsxs("div", { className: `flex justify-between px-4 py-3 text-sm ${idx % 2 ? "bg-card/40" : "bg-background/40"}`, children: [
            /* @__PURE__ */ jsx("dt", { className: "text-muted-foreground", children: s.label }),
            /* @__PURE__ */ jsx("dd", { className: "font-medium", children: s.valor })
          ] }, s.label)) })
        ] })
      ] })
    ] })
  ] });
}
export {
  ProdutoPage as component
};
