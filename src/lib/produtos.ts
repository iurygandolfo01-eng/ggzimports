import foto1 from "@/assets/produtos/foto1.jpg";
import foto2 from "@/assets/produtos/foto2.jpg";
import foto3 from "@/assets/produtos/foto3.jpg";
import foto4 from "@/assets/produtos/foto4.jpg";
import foto5 from "@/assets/produtos/foto5.jpg";
import mouseX11 from "@/assets/produtos/mouse-attack-shark-x11.jpg";
import attackRed from "@/assets/produtos/attackred.jpg";

export type Produto = {
  slug: string;
  nome: string;
  preco: number;
  precoAntigo?: number;
  parcelas: number;
  categoria: string;
  destaque?: boolean;
  capa: string;
  imagens: string[];
  resumo: string;
  descricao: string;
  specs: { label: string; valor: string }[];
};

export const PRODUTOS: Produto[] = [
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
    resumo: "Midnight Green • Tela 6.5\" Super Retina XDR • Câmera tripla 12MP",
    descricao:
      "iPhone 11 Pro Max 64GB importado, testado e em ótimo estado. Acompanha cabo e garantia da loja. Pronta entrega em todo o Brasil.",
    specs: [
      { label: "Tela", valor: "6.5\" Super Retina XDR OLED" },
      { label: "Armazenamento", valor: "64GB" },
      { label: "Câmera", valor: "Tripla 12MP (ultra-wide, wide, tele)" },
      { label: "Chip", valor: "Apple A13 Bionic" },
      { label: "Bateria", valor: "Até 20h de vídeo" },
      { label: "Cor", valor: "Midnight Green" },
    ],
  },
  {
    slug: "mouse-attack-shark-x11",
    nome: "Mouse Attack Shark X11",
    preco: 149.90,
    precoAntigo: 249.90,
    parcelas: 2,
    categoria: "Periféricos",
    capa: mouseX11,
    imagens: [mouseX11],
    resumo: "Sem fio • RGB • Sensor PAW3395 • Tri-mode (2.4G / Bluetooth / USB-C)",
    descricao:
      "Mouse gamer Attack Shark X11 sem fio com iluminação RGB, sensor de alta precisão PAW3395 e conexão tri-mode. Leve, confortável e pronto para gameplay competitivo.",
    specs: [
  { label: "Sensor", valor: "PAW3395" },
  { label: "DPI", valor: "Até 26.000" },
  { label: "Conexão", valor: "2.4GHz / Bluetooth / USB-C" },
  { label: "Bateria", valor: "Até 70h de uso" },
  { label: "Iluminação", valor: "RGB" },
  { label: "Cor", valor: "Preto" },
],
  },

  
{
  slug: "attack-shark-red",
  nome: "Attack Shark Red",
  preco: 149.90,
  precoAntigo: 249.90,
  parcelas: 2,
  categoria: "Periféricos",
  destaque: true,
  capa: attackRed,
  imagens: [attackRed],
  resumo: "Mouse gamer Attack Shark Red",
  descricao:
    "Mouse gamer Attack Shark Red com alta precisão e design ergonômico.",
  specs: [
  { label: "Sensor", valor: "PAW3395" },
  { label: "DPI", valor: "Até 26.000" },
  { label: "Conexão", valor: "2.4GHz / Bluetooth / USB-C" },
  { label: "Bateria", valor: "Até 70h de uso" },
  { label: "Iluminação", valor: "RGB" },
  { label: "Cor", valor: "Vermelho" },
],
}

];

export const getProduto = (slug: string) =>
  PRODUTOS.find((p) => p.slug === slug);

export const fmtBRL = (v: number) =>
  v.toLocaleString("pt-BR", { style: "currency", currency: "BRL" });
