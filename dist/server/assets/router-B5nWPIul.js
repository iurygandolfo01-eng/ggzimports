import { QueryClientProvider, QueryClient } from "@tanstack/react-query";
import { Link, createRootRouteWithContext, useRouter, Outlet, HeadContent, Scripts, createFileRoute, lazyRouteComponent, notFound, createRouter } from "@tanstack/react-router";
import { jsx, jsxs, Fragment } from "react/jsx-runtime";
import { useState, useEffect, createContext, useContext } from "react";
import { Search, ShoppingBag, X } from "lucide-react";
const appCss = "/assets/styles-CwY4oWTv.css";
function reportLovableError(error, context = {}) {
  if (typeof window === "undefined") return;
  window.__lovableEvents?.captureException?.(
    error,
    {
      source: "react_error_boundary",
      route: window.location.pathname,
      ...context
    },
    {
      mechanism: "react_error_boundary",
      handled: false,
      severity: "error"
    }
  );
}
const foto1 = "/assets/foto1-BzSCM7nB.jpg";
const foto2 = "/assets/foto2-vIAqf_aJ.jpg";
const foto3 = "/assets/foto3-BNBPY1AN.jpg";
const foto4 = "/assets/foto4-Ba-twOYX.jpg";
const foto5 = "/assets/foto5-oeDsrqAz.jpg";
const mouseX11 = "/assets/mouse-attack-shark-x11-9CNZgEGl.jpg";
const attackRed = "/assets/attackred-KF-Wy11T.jpg";
const PRODUTOS = [
  {
    slug: "iphone-11-pro-max-64gb",
    nome: "iPhone 11 Pro Max 64GB",
    preco: 1099.99,
    precoAntigo: 1499.99,
    parcelas: 12,
    categoria: "iPhone",
    destaque: true,
    capa: foto5,
    imagens: [foto1, foto5, foto2, foto3, foto4],
    resumo: 'Midnight Green • Tela 6.5" Super Retina XDR • Câmera tripla 12MP',
    descricao: "iPhone 11 Pro Max 64GB importado, testado e em ótimo estado. Acompanha cabo e garantia da loja. Pronta entrega em todo o Brasil.",
    specs: [
      { label: "Tela", valor: '6.5" Super Retina XDR OLED' },
      { label: "Armazenamento", valor: "64GB" },
      { label: "Câmera", valor: "Tripla 12MP (ultra-wide, wide, tele)" },
      { label: "Chip", valor: "Apple A13 Bionic" },
      { label: "Bateria", valor: "Até 20h de vídeo" },
      { label: "Cor", valor: "Midnight Green" }
    ]
  },
  {
    slug: "mouse-attack-shark-x11",
    nome: "Mouse Attack Shark X11",
    preco: 149.9,
    precoAntigo: 249.9,
    parcelas: 2,
    categoria: "Periféricos",
    capa: mouseX11,
    imagens: [mouseX11],
    resumo: "Sem fio • RGB • Sensor PAW3395 • Tri-mode (2.4G / Bluetooth / USB-C)",
    descricao: "Mouse gamer Attack Shark X11 sem fio com iluminação RGB, sensor de alta precisão PAW3395 e conexão tri-mode. Leve, confortável e pronto para gameplay competitivo.",
    specs: [
      { label: "Sensor", valor: "PAW3395" },
      { label: "DPI", valor: "Até 26.000" },
      { label: "Conexão", valor: "2.4GHz / Bluetooth / USB-C" },
      { label: "Bateria", valor: "Até 70h de uso" },
      { label: "Iluminação", valor: "RGB" },
      { label: "Cor", valor: "Preto" }
    ]
  },
  {
    slug: "attack-shark-red",
    nome: "Attack Shark Red",
    preco: 149.9,
    precoAntigo: 249.9,
    parcelas: 2,
    categoria: "Periféricos",
    destaque: true,
    capa: attackRed,
    imagens: [attackRed],
    resumo: "Mouse gamer Attack Shark Red",
    descricao: "Mouse gamer Attack Shark Red com alta precisão e design ergonômico.",
    specs: [
      { label: "Sensor", valor: "PAW3395" },
      { label: "DPI", valor: "Até 26.000" },
      { label: "Conexão", valor: "2.4GHz / Bluetooth / USB-C" },
      { label: "Bateria", valor: "Até 70h de uso" },
      { label: "Iluminação", valor: "RGB" },
      { label: "Cor", valor: "Vermelho" }
    ]
  }
];
const getProduto = (slug) => PRODUTOS.find((p) => p.slug === slug);
const fmtBRL = (v) => v.toLocaleString("pt-BR", { style: "currency", currency: "BRL" });
const Ctx = createContext(null);
const WHATSAPP = "5528999394485";
function CartProvider({ children }) {
  const [items, setItems] = useState([]);
  const [open, setOpen] = useState(false);
  useEffect(() => {
    try {
      const raw = localStorage.getItem("ggz-cart");
      if (raw) setItems(JSON.parse(raw));
    } catch {
    }
  }, []);
  useEffect(() => {
    try {
      localStorage.setItem("ggz-cart", JSON.stringify(items));
    } catch {
    }
  }, [items]);
  const add = (p) => {
    setItems((prev) => {
      const ex = prev.find((i) => i.slug === p.slug);
      if (ex) return prev.map((i) => i.slug === p.slug ? { ...i, qty: i.qty + 1 } : i);
      return [...prev, { slug: p.slug, nome: p.nome, preco: p.preco, capa: p.capa, qty: 1 }];
    });
    setOpen(true);
  };
  const remove = (slug) => setItems((p) => p.filter((i) => i.slug !== slug));
  const clear = () => setItems([]);
  const total = items.reduce((s, i) => s + i.preco * i.qty, 0);
  const count = items.reduce((s, i) => s + i.qty, 0);
  const checkout = () => {
    if (!items.length) return;
    const linhas = items.map((i) => `• ${i.qty}x ${i.nome} — ${fmtBRL(i.preco * i.qty)}`).join("\n");
    const txt = `Olá GGZ Imports! Quero comprar:
${linhas}

Total: ${fmtBRL(total)}`;
    window.open(`https://wa.me/${WHATSAPP}?text=${encodeURIComponent(txt)}`, "_blank");
  };
  return /* @__PURE__ */ jsx(Ctx.Provider, { value: { items, count, total, open, setOpen, add, remove, clear, checkout }, children });
}
function useCart() {
  const c = useContext(Ctx);
  if (!c) throw new Error("useCart outside provider");
  return c;
}
function Header() {
  const { count, setOpen } = useCart();
  return /* @__PURE__ */ jsx("header", { className: "sticky top-0 z-50 border-b border-border/60 bg-background/75 backdrop-blur-xl", children: /* @__PURE__ */ jsxs("div", { className: "container mx-auto flex items-center gap-4 px-5 py-3.5 md:gap-6", children: [
    /* @__PURE__ */ jsxs(Link, { to: "/", className: "flex items-center gap-2 font-extrabold", children: [
      /* @__PURE__ */ jsx("span", { className: "rounded-lg bg-gradient-to-br from-primary to-accent px-2.5 py-1.5 text-xs tracking-widest text-primary-foreground", children: "GGZ" }),
      /* @__PURE__ */ jsx("span", { className: "text-lg tracking-wide", children: "Imports" })
    ] }),
    /* @__PURE__ */ jsxs("nav", { className: "hidden items-center gap-5 text-sm text-muted-foreground md:flex", children: [
      /* @__PURE__ */ jsx(Link, { to: "/", className: "transition hover:text-foreground", children: "Home" }),
      /* @__PURE__ */ jsx(Link, { to: "/", hash: "produtos", className: "transition hover:text-foreground", children: "Produtos" }),
      /* @__PURE__ */ jsx(Link, { to: "/", hash: "sobre", className: "transition hover:text-foreground", children: "Sobre" })
    ] }),
    /* @__PURE__ */ jsxs("div", { className: "ml-auto hidden flex-1 max-w-md items-center gap-2 rounded-xl border border-border bg-card px-3.5 py-2.5 md:flex", children: [
      /* @__PURE__ */ jsx(Search, { className: "h-4 w-4 text-muted-foreground" }),
      /* @__PURE__ */ jsx(
        "input",
        {
          placeholder: "Buscar produtos...",
          className: "flex-1 bg-transparent text-sm outline-none placeholder:text-muted-foreground"
        }
      )
    ] }),
    /* @__PURE__ */ jsxs(
      "button",
      {
        onClick: () => setOpen(true),
        className: "relative inline-flex items-center gap-2 rounded-xl border border-border bg-card px-3.5 py-2.5 text-sm font-medium transition hover:border-primary",
        children: [
          /* @__PURE__ */ jsx(ShoppingBag, { className: "h-4 w-4" }),
          /* @__PURE__ */ jsx("span", { className: "hidden sm:inline", children: "Carrinho" }),
          /* @__PURE__ */ jsx("span", { className: "inline-flex min-w-5 items-center justify-center rounded-full bg-primary px-2 py-0.5 text-[11px] font-bold text-primary-foreground", children: count })
        ]
      }
    )
  ] }) });
}
function Footer() {
  return /* @__PURE__ */ jsxs("footer", { className: "mt-20 border-t border-border/60 bg-card/40", children: [
    /* @__PURE__ */ jsxs("div", { className: "container mx-auto grid gap-8 px-5 py-12 md:grid-cols-3", children: [
      /* @__PURE__ */ jsxs("div", { children: [
        /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-2 font-extrabold", children: [
          /* @__PURE__ */ jsx("span", { className: "rounded-lg bg-gradient-to-br from-primary to-accent px-2.5 py-1.5 text-xs tracking-widest text-primary-foreground", children: "GGZ" }),
          /* @__PURE__ */ jsx("span", { className: "text-lg", children: "Imports" })
        ] }),
        /* @__PURE__ */ jsx("p", { className: "mt-3 max-w-xs text-sm text-muted-foreground", children: "Importados originais com garantia, parcelamento em até 12x e entrega para todo o Brasil." })
      ] }),
      /* @__PURE__ */ jsxs("div", { children: [
        /* @__PURE__ */ jsx("h4", { className: "text-sm font-semibold", children: "Atendimento" }),
        /* @__PURE__ */ jsxs("ul", { className: "mt-3 space-y-2 text-sm text-muted-foreground", children: [
          /* @__PURE__ */ jsx("li", { children: "WhatsApp: (28) 99939-4485" }),
          /* @__PURE__ */ jsx("li", { children: "Seg–Sáb · 9h às 19h" })
        ] })
      ] }),
      /* @__PURE__ */ jsxs("div", { children: [
        /* @__PURE__ */ jsx("h4", { className: "text-sm font-semibold", children: "Compra segura" }),
        /* @__PURE__ */ jsxs("ul", { className: "mt-3 space-y-2 text-sm text-muted-foreground", children: [
          /* @__PURE__ */ jsx("li", { children: "Produtos testados" }),
          /* @__PURE__ */ jsx("li", { children: "Garantia da loja" }),
          /* @__PURE__ */ jsx("li", { children: "Envio rastreado" })
        ] })
      ] })
    ] }),
    /* @__PURE__ */ jsxs("div", { className: "border-t border-border/60 py-5 text-center text-xs text-muted-foreground", children: [
      "© ",
      (/* @__PURE__ */ new Date()).getFullYear(),
      " GGZ Imports · Todos os direitos reservados"
    ] })
  ] });
}
function CartDrawer() {
  const { items, open, setOpen, remove, total, checkout } = useCart();
  return /* @__PURE__ */ jsxs(Fragment, { children: [
    /* @__PURE__ */ jsx(
      "div",
      {
        onClick: () => setOpen(false),
        className: `fixed inset-0 z-[60] bg-background/70 backdrop-blur-sm transition-opacity ${open ? "opacity-100" : "pointer-events-none opacity-0"}`
      }
    ),
    /* @__PURE__ */ jsxs(
      "aside",
      {
        className: `fixed right-0 top-0 z-[70] flex h-full w-full max-w-md flex-col border-l border-border bg-card shadow-2xl transition-transform ${open ? "translate-x-0" : "translate-x-full"}`,
        children: [
          /* @__PURE__ */ jsxs("div", { className: "flex items-center justify-between border-b border-border px-5 py-4", children: [
            /* @__PURE__ */ jsx("h3", { className: "text-base font-semibold", children: "Seu carrinho" }),
            /* @__PURE__ */ jsx("button", { onClick: () => setOpen(false), className: "rounded-md p-1 hover:bg-secondary", children: /* @__PURE__ */ jsx(X, { className: "h-5 w-5" }) })
          ] }),
          /* @__PURE__ */ jsx("div", { className: "flex-1 overflow-y-auto px-5 py-4", children: !items.length ? /* @__PURE__ */ jsx("div", { className: "flex h-full items-center justify-center text-sm text-muted-foreground", children: "Seu carrinho está vazio" }) : /* @__PURE__ */ jsx("ul", { className: "space-y-3", children: items.map((i) => /* @__PURE__ */ jsxs(
            "li",
            {
              className: "flex items-center gap-3 rounded-xl border border-border bg-background/40 p-3",
              children: [
                /* @__PURE__ */ jsx("img", { src: i.capa, alt: "", className: "h-14 w-14 rounded-lg object-cover" }),
                /* @__PURE__ */ jsxs("div", { className: "flex-1", children: [
                  /* @__PURE__ */ jsx("div", { className: "text-sm font-medium", children: i.nome }),
                  /* @__PURE__ */ jsxs("div", { className: "text-xs text-muted-foreground", children: [
                    i.qty,
                    " × ",
                    fmtBRL(i.preco)
                  ] })
                ] }),
                /* @__PURE__ */ jsx(
                  "button",
                  {
                    onClick: () => remove(i.slug),
                    className: "rounded-md p-1.5 text-muted-foreground hover:bg-secondary hover:text-foreground",
                    children: /* @__PURE__ */ jsx(X, { className: "h-4 w-4" })
                  }
                )
              ]
            },
            i.slug
          )) }) }),
          /* @__PURE__ */ jsxs("div", { className: "border-t border-border px-5 py-4", children: [
            /* @__PURE__ */ jsxs("div", { className: "mb-3 flex items-center justify-between text-sm", children: [
              /* @__PURE__ */ jsx("span", { className: "text-muted-foreground", children: "Total" }),
              /* @__PURE__ */ jsx("span", { className: "text-lg font-bold", children: fmtBRL(total) })
            ] }),
            /* @__PURE__ */ jsx(
              "button",
              {
                onClick: checkout,
                disabled: !items.length,
                className: "w-full rounded-xl bg-gradient-to-r from-primary to-accent px-4 py-3 text-sm font-semibold text-primary-foreground shadow-lg shadow-primary/30 transition hover:opacity-90 disabled:cursor-not-allowed disabled:opacity-50",
                children: "Finalizar no WhatsApp"
              }
            )
          ] })
        ]
      }
    )
  ] });
}
function NotFoundComponent() {
  return /* @__PURE__ */ jsx("div", { className: "flex min-h-screen items-center justify-center bg-background px-4", children: /* @__PURE__ */ jsxs("div", { className: "max-w-md text-center", children: [
    /* @__PURE__ */ jsx("h1", { className: "text-7xl font-bold", children: "404" }),
    /* @__PURE__ */ jsx("h2", { className: "mt-4 text-xl font-semibold", children: "Página não encontrada" }),
    /* @__PURE__ */ jsx("p", { className: "mt-2 text-sm text-muted-foreground", children: "O endereço acessado não existe ou foi movido." }),
    /* @__PURE__ */ jsx("div", { className: "mt-6", children: /* @__PURE__ */ jsx(
      Link,
      {
        to: "/",
        className: "inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:opacity-90",
        children: "Voltar à home"
      }
    ) })
  ] }) });
}
function ErrorComponent({ error, reset }) {
  console.error(error);
  const router2 = useRouter();
  useEffect(() => {
    reportLovableError(error, { boundary: "tanstack_root_error_component" });
  }, [error]);
  return /* @__PURE__ */ jsx("div", { className: "flex min-h-screen items-center justify-center bg-background px-4", children: /* @__PURE__ */ jsxs("div", { className: "max-w-md text-center", children: [
    /* @__PURE__ */ jsx("h1", { className: "text-xl font-semibold tracking-tight", children: "Esta página não carregou" }),
    /* @__PURE__ */ jsx("p", { className: "mt-2 text-sm text-muted-foreground", children: "Algo deu errado. Tente novamente ou volte à home." }),
    /* @__PURE__ */ jsxs("div", { className: "mt-6 flex flex-wrap justify-center gap-2", children: [
      /* @__PURE__ */ jsx(
        "button",
        {
          onClick: () => {
            router2.invalidate();
            reset();
          },
          className: "inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:opacity-90",
          children: "Tentar de novo"
        }
      ),
      /* @__PURE__ */ jsx(
        "a",
        {
          href: "/",
          className: "inline-flex items-center justify-center rounded-md border border-input bg-background px-4 py-2 text-sm font-medium transition-colors hover:bg-accent",
          children: "Ir para home"
        }
      )
    ] })
  ] }) });
}
const Route$2 = createRootRouteWithContext()({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { title: "GGZ Imports" },
      { name: "description", content: ".." },
      { property: "og:title", content: "GGZ Imports" },
      { name: "twitter:title", content: "GGZ Imports" },
      { property: "og:description", content: ".." },
      { name: "twitter:description", content: ".." },
      { property: "og:image", content: "https://pub-bb2e103a32db4e198524a2e9ed8f35b4.r2.dev/1ba954f1-5081-47e4-be8b-1b3ab58212a6/id-preview-64cf7d68--ca621f90-681c-4d19-83c3-bc0be1dd0aea.lovable.app-1781047388306.png" },
      { name: "twitter:image", content: "https://pub-bb2e103a32db4e198524a2e9ed8f35b4.r2.dev/1ba954f1-5081-47e4-be8b-1b3ab58212a6/id-preview-64cf7d68--ca621f90-681c-4d19-83c3-bc0be1dd0aea.lovable.app-1781047388306.png" },
      { name: "twitter:card", content: "summary_large_image" },
      { property: "og:type", content: "website" }
    ],
    links: [{ rel: "stylesheet", href: appCss }]
  }),
  shellComponent: RootShell,
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
  errorComponent: ErrorComponent
});
function RootShell({ children }) {
  return /* @__PURE__ */ jsxs("html", { lang: "pt-BR", children: [
    /* @__PURE__ */ jsx("head", { children: /* @__PURE__ */ jsx(HeadContent, {}) }),
    /* @__PURE__ */ jsxs("body", { children: [
      children,
      /* @__PURE__ */ jsx(Scripts, {})
    ] })
  ] });
}
function RootComponent() {
  const { queryClient } = Route$2.useRouteContext();
  return /* @__PURE__ */ jsx(QueryClientProvider, { client: queryClient, children: /* @__PURE__ */ jsxs(CartProvider, { children: [
    /* @__PURE__ */ jsxs("div", { className: "flex min-h-screen flex-col", children: [
      /* @__PURE__ */ jsx(Header, {}),
      /* @__PURE__ */ jsx("main", { className: "flex-1", children: /* @__PURE__ */ jsx(Outlet, {}) }),
      /* @__PURE__ */ jsx(Footer, {})
    ] }),
    /* @__PURE__ */ jsx(CartDrawer, {})
  ] }) });
}
const $$splitComponentImporter$1 = () => import("./index-CVLEuxW1.js");
const Route$1 = createFileRoute("/")({
  head: () => ({
    meta: [{
      title: "GGZ Imports — iPhones importados com garantia"
    }, {
      name: "description",
      content: "Loja de importados GGZ Imports: iPhones testados, parcelamento em até 12x e entrega para todo o Brasil."
    }, {
      property: "og:title",
      content: "GGZ Imports — iPhones importados com garantia"
    }, {
      property: "og:description",
      content: "iPhones importados, testados e prontos para entrega. Parcele em 12x."
    }]
  }),
  component: lazyRouteComponent($$splitComponentImporter$1, "component")
});
const $$splitComponentImporter = () => import("./produto._slug-Ddo-yBpl.js");
const Route = createFileRoute("/produto/$slug")({
  loader: ({
    params
  }) => {
    const produto = getProduto(params.slug);
    if (!produto) throw notFound();
    return {
      produto
    };
  },
  head: ({
    loaderData
  }) => {
    const p = loaderData?.produto;
    if (!p) return {
      meta: [{
        title: "Produto"
      }]
    };
    return {
      meta: [{
        title: `${p.nome} — GGZ Imports`
      }, {
        name: "description",
        content: p.resumo
      }, {
        property: "og:title",
        content: `${p.nome} — GGZ Imports`
      }, {
        property: "og:description",
        content: p.resumo
      }, {
        property: "og:image",
        content: p.capa
      }, {
        name: "twitter:image",
        content: p.capa
      }]
    };
  },
  component: lazyRouteComponent($$splitComponentImporter, "component")
});
const IndexRoute = Route$1.update({
  id: "/",
  path: "/",
  getParentRoute: () => Route$2
});
const ProdutoSlugRoute = Route.update({
  id: "/produto/$slug",
  path: "/produto/$slug",
  getParentRoute: () => Route$2
});
const rootRouteChildren = {
  IndexRoute,
  ProdutoSlugRoute
};
const routeTree = Route$2._addFileChildren(rootRouteChildren)._addFileTypes();
const getRouter = () => {
  const queryClient = new QueryClient();
  const router2 = createRouter({
    routeTree,
    context: { queryClient },
    scrollRestoration: true,
    defaultPreloadStaleTime: 0
  });
  return router2;
};
const router = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  getRouter
}, Symbol.toStringTag, { value: "Module" }));
export {
  PRODUTOS as P,
  Route as R,
  fmtBRL as f,
  router as r,
  useCart as u
};
