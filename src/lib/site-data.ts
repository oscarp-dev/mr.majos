export const NAV_LINKS = [
  { label: "Menú", href: "#menu" },
  { label: "About Us", href: "#about" },
  { label: "Pedir", href: "#order" },
] as const;

// Destacados del home — subconjunto de la carta real (ver full-menu-data.ts).
// Nombres, descripciones, precios y tags copiados 1:1 de ahí para que
// coincidan con "VER LA CARTA COMPLETA".
export type MenuItem = {
  id: string;
  name: string;
  description: string;
  price: string;
  image: string;
  tag?: string;
  rotate: string;
};

export const MENU_ITEMS: MenuItem[] = [
  {
    id: "sugarmommy",
    name: "La Sugar Mommy",
    description:
      "Vaca Gallega Madurada 30 días con bacon bits y cebolla crunchy, queso cheddar, rulo de cabra dorado a la plancha y cebolla caramelizada casera. (No se puede muy hecha).",
    price: "17,90€",
    image: "/images/hero-sugarmommy-burger.jpg",
    tag: "CABRA & CEBOLLA CARAMELIZADA",
    rotate: "-rotate-2",
  },
  {
    id: "motomami",
    name: "La Motomami",
    description:
      "Doble Smash de ternera, queso cheddar, pepinillos agridulces, cebolla a la plancha, doble bacon crujiente, rodajas de tomate natural, lechuga fresca y salsa Mayo Majo's. ¡Ñaaaam!",
    price: "13,70€",
    image: "/images/foto-burger-mano-3.jpg",
    tag: "FRESH & CRUNCH",
    rotate: "rotate-2",
  },
  {
    id: "gringa",
    name: "La Gringa",
    description:
      "Doble Smash de ternera, queso cheddar, relish especial de pepinillos agridulces y cebolla picadita, doble bacon crujiente, ketchup clásico y miel mostaza original. ¡De locoooos!",
    price: "13,70€",
    image: "/images/burger-la-gringa-real.jpg",
    tag: "NEW HIT",
    rotate: "-rotate-1",
  },
  {
    id: "yankee",
    name: "El Yankee",
    description:
      "Salchicha 120gr, triple cheddar, cebolla caramelizada, cebolla crunchy, salsa BBQ Mr. Majo's, miel mostaza y bacon bits.",
    price: "12,90€",
    image: "/images/foto-hotdog-bacon.jpg",
    tag: "TOP VENTAS",
    rotate: "rotate-3",
  },
  {
    id: "tiquismiquis",
    name: "La Tiquismiquis",
    description:
      "Doble de pechuga de pollo empanada SUPER CRUNCHY con rebozado secreto, queso cheddar derretido, doble de bacon crujiente, lechuga Batavia fresca y salsa Mayo Majo's. ¡Especial chicken lovers!",
    price: "13,70€",
    image: "/images/burger-la-huevona.jpg",
    tag: "SUPER CRUNCHY",
    rotate: "rotate-1",
  },
  {
    id: "goloza",
    name: "La Goloza",
    description:
      "Doble Smash de ternera, queso cheddar, cebolla a la plancha caramelizada, pulled pork casero horneado a baja temperatura con barbacoa, lechuga y salsa Barbacoa Mr. Majo's.",
    price: "15,70€",
    image: "/images/burger-la-guarra.jpg",
    tag: "PULLED PORK CASERO",
    rotate: "-rotate-2",
  },
  {
    id: "guiri",
    name: "La Guiri",
    description:
      "Doble Smash de ternera, queso cheddar, cebolla dulce a la plancha, doble de bacon crujiente, huevo frito de granja con yema dorada y salsa Mayo Majo's. Al más puro estilo americano.",
    price: "13,70€",
    image: "/images/burger-doble-bacon-plato.jpg",
    tag: "AMERICAN STYLE",
    rotate: "rotate-2",
  },
  {
    id: "majos-teques",
    name: "Majo's Teques",
    description:
      "6 deditos dorados crujientes rellenos de queso derretido a borbotones, acompañados de salsa casera Mayo Ajo.",
    price: "9,90€",
    image: "/images/palitos-de-queso.jpg",
    tag: "BEST SELLER TOTAL",
    rotate: "-rotate-1",
  },
  {
    id: "patatas-trifasicas",
    name: "Patatas Trifásicas",
    description:
      "Bandeja gigante de patatas finas con pulled pork casero a la BBQ, pollo empanado crujiente, trocitos de Frankfurt, queso fundido y Mayo Majo's.",
    price: "15,70€",
    image: "/images/patatas-trifasicas.jpg",
    tag: "LOCURA TOTAL",
    rotate: "rotate-1",
  },
  {
    id: "choko-majos",
    name: "Choko Majo's",
    description:
      "Tarta artesana de chocolate negro intenso con base crujiente de galleta dorada y fino topping de cacao noble puro.",
    price: "5,70€",
    image: "/images/hero-golden-coulant.jpg",
    tag: "BEST SELLER",
    rotate: "-rotate-3",
  },
  {
    id: "chicken-wings",
    name: "Chicken Wings",
    description:
      "7 alitas tiernas de pollo rebozadas en fina corteza supercrujiente con cebolla morada picada, perejil y salsa Mayo Majo's.",
    price: "11,70€",
    image: "/images/foto-burger-mano-1.jpg",
    tag: "7 PIEZAS CRUNCHY",
    rotate: "rotate-1",
  },
  {
    id: "pija",
    name: "La Pija",
    description:
      "Vaca Gallega Madurada 30 días, medallón de queso de cabra fundido al cromo, cebolla dulce pochada lentamente y doble bacon crujiente. (No se puede muy hecha).",
    price: "15,70€",
    image: "/images/foto-burger-menu-del-dia.jpg",
    tag: "CLÁSICO GOURMET",
    rotate: "-rotate-1",
  },
];

export const CLUB_TIERS = [
  { name: "Foodie", stamps: "0-3", perk: "Estás dentro. Bienvenido a la banda." },
  { name: "Burger Lover", stamps: "4-7", perk: "Salsa extra gratis en cada pedido." },
  { name: "Burger Master", stamps: "8-11", perk: "Postre de regalo cada mes." },
  { name: "Food P*rn VIP", stamps: "12+", perk: "Acceso anticipado a lanzamientos + regalo sorpresa." },
] as const;

export const SOCIAL_LINKS = [
  { label: "Instagram", href: "https://instagram.com/mr_majos" },
  { label: "TikTok", href: "https://tiktok.com/@mr_majos" },
] as const;
