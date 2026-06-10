export function Footer() {
  return (
    <footer className="mt-20 border-t border-border/60 bg-card/40">
      <div className="container mx-auto grid gap-8 px-5 py-12 md:grid-cols-3">
        <div>
          <div className="flex items-center gap-2 font-extrabold">
            <span className="rounded-lg bg-gradient-to-br from-primary to-accent px-2.5 py-1.5 text-xs tracking-widest text-primary-foreground">
              GGZ
            </span>
            <span className="text-lg">Imports</span>
          </div>
          <p className="mt-3 max-w-xs text-sm text-muted-foreground">
            Importados originais com garantia, parcelamento em até 12x e entrega para todo o Brasil.
          </p>
        </div>
        <div>
          <h4 className="text-sm font-semibold">Atendimento</h4>
          <ul className="mt-3 space-y-2 text-sm text-muted-foreground">
            <li>WhatsApp: (28) 99939-4485</li>
            <li>Seg–Sáb · 9h às 19h</li>
          </ul>
        </div>
        <div>
          <h4 className="text-sm font-semibold">Compra segura</h4>
          <ul className="mt-3 space-y-2 text-sm text-muted-foreground">
            <li>Produtos testados</li>
            <li>Garantia da loja</li>
            <li>Envio rastreado</li>
          </ul>
        </div>
      </div>
      <div className="border-t border-border/60 py-5 text-center text-xs text-muted-foreground">
        © {new Date().getFullYear()} GGZ Imports · Todos os direitos reservados
      </div>
    </footer>
  );
}
