import type { GraffitiIconName } from "@/components/decorative/graffiti-icon";
import type { Locale } from "@/i18n/config";
import {
  CATEGORIES_EN,
  DRINKS_EN,
  FEATURED_EN,
  ITEMS_EN,
  TOPPING_GROUPS_EN,
  TOPPINGS_EN,
} from "./full-menu-en";

// Carta real de Mr. Majo's — fuente de verdad para /carta y para el
// escaparate de burgers del home. Los platos con foto de estudio (fondo negro)
// la llevan en `image`; los que aún no tienen foto van solo con texto.

export type FullMenuItem = {
  id: string;
  name: string;
  description: string;
  price: string;
  priceSuffix?: string;
  /** Aviso en rojo bajo el nombre (p. ej. "No se puede MUY HECHA"). */
  note?: string;
  tag?: string;
  tagVariant?: "yellow" | "red" | "green";
  footerLeft?: string;
  footerRight?: string;
  highlight?: "yellow" | "red" | "dashed";
  /** Fotos de estudio recortadas a 4:5 con el plato centrado (public/images/burgers, /perritos, /carta). */
  image?: string;
  /** object-position, solo para fotos sin recortar (p. ej. la Custom Burger). */
  imagePosition?: string;
  /**
   * La foto deja mucho negro encima o debajo del plato (burgers altas, perritos, raciones):
   * en marcos apaisados se recorta (por abajo, o según `imagePosition`) en vez de encajarse.
   */
  headroom?: boolean;
};

export type FullMenuCategory = {
  id: string;
  title: string;
  /** Para pestañas y huecos estrechos; por defecto, `title`. */
  shortTitle?: string;
  icon?: GraffitiIconName;
  description?: string;
  items: FullMenuItem[];
  /** Bebidas: en vez de tarjetas, listas de precios plegables por grupo. */
  groups?: DrinkGroup[];
};

export type DrinkItem = { id: string; name: string; price: string; detail?: string };

export type DrinkGroup = {
  id: string;
  title: string;
  /** Subapartados dentro del grupo (p. ej. barril / tercios); sin título si no hace falta. */
  sections: { title?: string; items: DrinkItem[] }[];
};

export const FEATURED_DISH = {
  badges: ["⭐ PLATO INSIGNIA", "100% REAL LACEY CRUST"],
  eyebrow: "EL REY DEL MENÚ",
  name: "La Sugar Daddy",
  price: "13,70€",
  description:
    "Doble Smash de ternera, queso cheddar, pepinillos agridulces, cebolla caramelizada, doble de bacon crujiente y nuestra salsa Mayo Majo's. ¡Una ADICCIÓN TOTAL!",
  chips: ["Doble Smash", "Cheddar", "Doble Bacon"],
  footer: "CON PATATAS FINAS GRATIS",
  image: "/images/burgers/sugar-daddy.webp",
};

export const FULL_MENU: FullMenuCategory[] = [
  {
    id: "smash",
    title: "Smash Burgers",
    shortTitle: "Smash",
    icon: "burger",
    description: "Todas incluyen patatas finas gratis :) · Opción de pan sin gluten +1,90€",
    items: [
      {
        id: "gringa",
        name: "La Gringa",
        description:
          "Doble Smash de ternera, queso cheddar, relish de pepinillos agridulces y cebolla picada, doble de bacon crujiente, ketchup y miel mostaza. ¡De locoooos!",
        price: "12,90€",
        tag: "NEW HIT",
        tagVariant: "red",
        footerLeft: "Relish & Miel Mostaza",
        image: "/images/burgers/gringa.webp",
        headroom: true,
      },
      {
        id: "guiri",
        name: "La Guiri",
        description:
          "Doble Smash de ternera, queso cheddar, cebolla a la plancha, doble de bacon crujiente, huevo frito y salsa Mayo Majo's. ¡Al mejor AMERICAN STYLE!",
        price: "13,70€",
        tag: "AMERICAN STYLE",
        footerLeft: "Huevo Frito",
        image: "/images/burgers/guiri.webp",
      },
      {
        id: "tiquismiquis",
        name: "La Tiquismiquis",
        description:
          "Doble de pollo empanado SUPER CRUNCHY, queso cheddar, doble de bacon crujiente, lechuga Batavia y salsa Mayo Majo's. ¡ESPECIAL para los chicken lovers!",
        price: "12,90€",
        tag: "CHICKEN 🍗",
        footerLeft: "Pollo Super Crunchy",
        image: "/images/burgers/tiquismiquis.webp",
      },
      {
        id: "motomami",
        name: "La Motomami",
        description:
          "Doble Smash de ternera, queso cheddar, pepinillos agridulces, cebolla a la plancha, doble de bacon crujiente, tomate, lechuga Batavia y salsa Mayo Majo's. ¡Ñaaaam!",
        price: "13,70€",
        tag: "FRESH & CRUNCH",
        footerLeft: "Tomate & Batavia",
        image: "/images/burgers/motomami.webp",
      },
      {
        id: "loba",
        name: "La Loba",
        description:
          "Doble Smash de ternera, queso cheddar, cebolla crunchy, doble de bacon crujiente, lechuga Batavia, huevo frito y salsa Mayo Trufa. ¡CLARA-MENTE DIVINA!",
        price: "13,70€",
        tag: "TRUFFLE TOUCH ✨",
        footerLeft: "Mayo Trufa",
        image: "/images/burgers/loba.webp",
      },
      {
        id: "goloza",
        name: "La Goloza",
        description:
          "Doble Smash de ternera, queso cheddar, cebolla a la plancha, pulled pork casero a la BBQ, lechuga Batavia y salsa Barbacoa de Mr. Majo's. ¡Así es, el PULLED PORK es casero!",
        price: "14,90€",
        tag: "PULLED PORK CASERO",
        tagVariant: "red",
        footerLeft: "Pulled Pork BBQ",
        image: "/images/burgers/goloza.webp",
      },
    ],
  },
  {
    id: "dry-aged",
    title: "Dry Aged Burgers",
    shortTitle: "Dry Aged",
    icon: "crown",
    description: "Vaca gallega madurada 30 días. Todas incluyen patatas finas gratis :) · Opción de pan sin gluten +1,90€",
    items: [
      {
        id: "sugarmommy-real",
        note: "No se puede MUY HECHA",
        name: "La Sugar Mommy",
        description:
          "Vaca Gallega Madurada 30 días picada y mezclada con bacon bits, cebolla crunchy, queso cheddar, queso de cabra a la plancha y cebolla caramelizada.",
        price: "17,90€",
        tag: "CABRA & CEBOLLA CARAMELIZADA",
        footerLeft: "Queso de Cabra",
        image: "/images/burgers/sugar-mommy.webp",
      },
      {
        id: "sexy-crush",
        note: "No se puede MUY HECHA",
        name: "La Sexy Crush",
        description:
          "Vaca Gallega Madurada 30 días picada y mezclada con bacon bits, cebolla crunchy, 110 g de pulled pork casero a la BBQ, mucho queso cheddar y huevo frito. ¡Una Crush MUY P*RN!",
        price: "17,90€",
        tag: "BEST SELLER",
        tagVariant: "red",
        footerLeft: "110 g de Pulled Pork",
        footerRight: "Huevo Frito",
      },
      {
        id: "pija",
        name: "La Pija",
        description:
          "Vaca Gallega Madurada 30 días, queso de cabra a la plancha, cebolla caramelizada y doble de bacon crujiente.",
        price: "15,70€",
        tag: "CLÁSICO GOURMET",
        footerLeft: "Cabra & Bacon",
        image: "/images/burgers/pija.webp",
      },
      {
        id: "orale",
        name: "La Órale",
        description:
          "Vaca Gallega Madurada 30 días, doble de queso cheddar, guacamole casero, fresco y rústico, y la picantona salsa chipotle de Mr. Majo's. ¡Oraleeee CABRXN!",
        price: "16,50€",
        tag: "🌶️ SPICY",
        footerLeft: "Guacamole & Chipotle",
        image: "/images/burgers/orale.webp",
      },
      {
        id: "pecadora",
        note: "No se puede MUY HECHA",
        name: "La Pecadora",
        description:
          "Vaca Gallega Madurada 30 días picada y mezclada con bacon bits, cebolla crunchy, queso cheddar, queso gouda y queso provolone. ¡CHEESE BOOM!",
        price: "17,90€",
        tag: "¡CHEESE BOOM!",
        footerLeft: "Cheddar, Gouda & Provolone",
        image: "/images/burgers/pecadora.webp",
      },
      {
        id: "custom-burger",
        name: "Custom Burger",
        description:
          "¡Tú eres el/la chef! Es hora de ponerse creativ@: añade los ingredientes y salsas extra que quieras. Partes de una base de Vaca Gallega Madurada 30 días o doble de pollo empanado SUPER CRUNCHY.",
        price: "10,70€",
        priceSuffix: "+extras",
        tag: "¡TÚ ERES EL/LA CHEF!",
        footerLeft: "VACA MADURADA O POLLO CRUNCHY",
        footerRight: "Añade tus extras",
        highlight: "dashed",
        image: "/images/IMG_3613_menu.webp",
      },
    ],
  },
  {
    id: "perritos",
    title: "Hot Dogs",
    shortTitle: "Perritos",
    icon: "hotdog",
    description: "Todos incluyen patatas finas gratis :) · Opción de pan sin gluten +1,90€",
    items: [
      {
        id: "yankee",
        name: "El Yankee",
        description:
          "Salchicha de 120 g, triple de queso cheddar, cebolla caramelizada, cebolla crunchy, salsa Barbacoa de Mr. Majo's, miel mostaza y muchos bacon bits.",
        price: "12,90€",
        tag: "TOP VENTAS",
        highlight: "yellow",
        image: "/images/perritos/yankee-estudio.webp",
        imagePosition: "center 55%",
        headroom: true,
      },
      {
        id: "cheese-porn",
        name: "El Cheese P*rn",
        description:
          "Salchicha de 120 g, doble de queso gouda, triple de queso cheddar, salsa de queso fundido y muchos bacon bits. ¡Cheeese BOOOOOM!",
        price: "10,70€",
        tag: "¡CHEESE BOOM!",
        image: "/images/perritos/cheese-porn-estudio.webp",
        imagePosition: "center 55%",
        headroom: true,
      },
      {
        id: "americano",
        name: "El Americano",
        description:
          "Salchicha de 120 g, queso cheddar, tomate, cebolla crunchy, relish de pepinillos agridulces y cebolla picada, ketchup y miel mostaza. ¡Desde EEUU con mucho <3!",
        price: "10,70€",
        tag: "NEW HIT",
        tagVariant: "red",
        image: "/images/perritos/americano-estudio.webp",
        imagePosition: "center 55%",
        headroom: true,
      },
      {
        id: "chingon",
        name: "El Chingón",
        description:
          "Salchicha de 120 g, triple de queso cheddar, guacamole casero, fresco y rústico, cebolla morada picada, jalapeños y picantona salsa chipotle de Mr. Majo's. ¡Órale, carnalitx!",
        price: "11,70€",
        tag: "🌶️ SPICY",
        tagVariant: "red",
        image: "/images/perritos/chingon-estudio.webp",
        imagePosition: "center 55%",
        headroom: true,
      },
    ],
  },
  {
    id: "entrantes",
    title: "Entrantes",
    icon: "fries",
    items: [
      {
        id: "majos-teques",
        name: "Majo's Teques",
        description:
          "6 deditos fritos rellenos de queso derretido acompañados de deliciosa salsa Mayo Ajo.",
        price: "9,90€",
        tag: "¡NUESTRX BEST SELLER!",
        highlight: "yellow",
        footerLeft: "6 DEDITOS",
        footerRight: "Con Salsa Mayo Ajo",
        image: "/images/carta/majos-teques.webp",
        imagePosition: "center 95%",
        headroom: true,
      },
      {
        id: "patatas-trifasicas-carta",
        name: "Patatas Trifásicas",
        description:
          "Patatas finas con pulled pork casero a la BBQ, crujiente pollo empanado, salchicha Frankfurt, salsa Mayo Majo's, salsa de queso americano fundido y perejil deshidratado.",
        price: "14,90€",
        tag: "¡LOCURA TOTAL!",
        tagVariant: "red",
        highlight: "red",
        footerLeft: "PULLED PORK + POLLO + FRANKFURT",
        image: "/images/carta/patatas-trifasicas.webp",
        imagePosition: "center 55%",
        headroom: true,
      },
      {
        id: "nachingones",
        name: "Nachingones",
        description:
          "Nachos bañados en chili con carne casero, guacamole fresco y rústico, nata agria, jalapeños, salsa de queso americano fundido, cebolla morada y tomate picado.",
        price: "13,70€",
        tag: "STREET CLASSIC",
        footerLeft: "CHILI CON CARNE CASERO",
        footerRight: "Guacamole & Jalapeños",
        image: "/images/carta/nachingones.webp",
        imagePosition: "center 85%",
        headroom: true,
      },
      {
        id: "chicken-wings",
        name: "Crunchy Chicken Wings",
        description:
          "7 alitas de pollo rebozadas a la perfección, con cebolla morada picada, perejil deshidratado y nuestra increíble salsa Mayo Majo's.",
        price: "11,70€",
        tag: "7 ALITAS",
        footerLeft: "REBOZADAS A LA PERFECCIÓN",
        footerRight: "Con Mayo Majo's",
        image: "/images/carta/chicken-wings.webp",
        imagePosition: "center 20%",
        headroom: true,
      },
      {
        id: "aros-cebolla",
        name: "Super Aros de Cebolla",
        description:
          "Muchos, pero muuuuchos aritos de cebolla suavecitos por dentro y crujientes por fuera. Acompañados de salsa BBQ de Mr. Majo's. ¡Muy cruuuunchys!",
        price: "9,90€",
        tag: "¡MUY CRUUUUNCHYS!",
        footerLeft: "CRUJIENTES POR FUERA",
        footerRight: "Con Salsa BBQ",
        image: "/images/carta/aros-cebolla.webp",
        imagePosition: "center 75%",
        headroom: true,
      },
      {
        id: "sweet-potatoes",
        name: "Ración de Sweet Potatoes",
        description:
          "Increíble boniato frito y SUPER SWEET, perfecto para acompañar tu burger o hot dog. También sirven de entrante para hacer estómago, jeje :)",
        price: "7,90€",
        tag: "BONIATO FRITO",
        footerLeft: "SUPER SWEET",
        footerRight: "Para tu Burger o Hot Dog",
      },
    ],
  },
  {
    id: "veggie",
    title: "Veggie",
    icon: "veggie",
    description: "Todas incluyen patatas finas gratis :) · Opción de pan sin gluten +1,90€",
    items: [
      {
        id: "veggie-baby",
        name: "La Veggie Baby",
        description:
          "Carne vegetariana, queso gouda, cebolla caramelizada, tomate, lechuga Batavia y salsa Mayo Majo's. ¡Porque lo vegetariano también está que FLIPAS, bb!",
        price: "14,90€",
        tag: "VEGGIE 🌱",
        tagVariant: "green",
        image: "/images/carta/veggie-baby.webp",
        imagePosition: "center 80%",
        headroom: true,
      },
      {
        id: "veggie-orale",
        name: "La Veggie Órale",
        description:
          "Carne vegetariana, queso americano, guacamole casero, fresco y rústico, con picantona salsa chipotle y lechuga Batavia. Picantemente veggie :)",
        price: "14,90€",
        tag: "🌱 VEGGIE SPICY 🌶️",
        tagVariant: "green",
        footerLeft: "🌱 Guacamole & Chipotle",
        image: "/images/carta/veggie-orale.webp",
        imagePosition: "center 80%",
        headroom: true,
      },
    ],
  },
  {
    id: "peques",
    title: "Para Peques <3",
    shortTitle: "Peques",
    icon: "kids",
    description: "Todas incluyen patatas finas gratis :) · Opción de pan sin gluten +1,90€",
    items: [
      {
        id: "kids-carne",
        name: "La Majo's Kids Carne",
        description:
          "Carne Smash de ternera, queso cheddar, doble de bacon crujiente y salsa Mayo Majo's.",
        price: "10,70€",
        tag: "MENÚ PEQUES 👶",
      },
      {
        id: "kids-pollo",
        name: "La Majo's Kids Pollo",
        description:
          "Pollo empanado SUPER CRUNCHY, queso cheddar, doble de bacon crujiente y salsa Mayo Majo's.",
        price: "10,70€",
        tag: "MENÚ PEQUES 👶",
      },
    ],
  },
  {
    id: "postres",
    title: "Postres",
    icon: "dessert",
    items: [
      {
        id: "choko-majos",
        name: "Choko Majo's",
        description:
          "Delicioso secreto casero de Mr. Majo's a base de galleta de chocolate y TOP SECRET PRODUCTS.",
        price: "5,70€",
        tag: "BEST SELLER",
        footerLeft: "SECRETO CASERO",
        footerRight: "Galleta de Chocolate",
        image: "/images/carta/choko-majos.webp",
        imagePosition: "center 80%",
        headroom: true,
      },
      {
        id: "nute-teques",
        name: "Nute Teques",
        description:
          "4 deditos fritos rellenos de suculenta Nutella y chorreados por encima con sirope de chocolate. ¿Te ATREVES? ¡Están suuuuper SWEEEEET P*RN!",
        price: "7,90€",
        tag: "NUTELLA LOVERS 💎",
        footerLeft: "4 DEDITOS",
        footerRight: "Sirope de Chocolate",
        image: "/images/carta/nute-teques.webp",
        imagePosition: "center 70%",
        headroom: true,
      },
      {
        id: "coulant",
        name: "The Golden Coulant",
        description:
          "La clásica e increíble receta francesa de 1981, pero esta vez rellena de dulce de leche que se funde en una explosión de sabores. Acompañado de crujiente lluvia de galleta María y helado de vainilla.",
        price: "7,90€",
        tag: "NEW",
        tagVariant: "red",
        footerLeft: "RELLENO DE DULCE DE LECHE",
        footerRight: "Con Helado de Vainilla",
        image: "/images/carta/coulant.webp",
        imagePosition: "center 80%",
        headroom: true,
      },
    ],
  },
  {
    id: "bebidas",
    title: "Bebidas",
    icon: "drink",
    items: [],
    groups: [
      {
        id: "cervezas",
        title: "Cerveza fría",
        sections: [
          {
            title: "Mahou 5 Estrellas de barril",
            items: [
              { id: "cana-doble", name: "Caña doble 33cl", price: "3,50€" },
              { id: "jarra-grande", name: "Jarra grande 50cl", price: "4,90€" },
              { id: "cana-doble-radler", name: "Caña doble Radler 33cl", price: "3,50€" },
              { id: "jarra-grande-radler", name: "Jarra grande Radler 50cl", price: "4,90€" },
            ],
          },
          {
            title: "Tercios 33cl",
            items: [
              { id: "tercio-mahou", name: "Mahou 5 Estrellas", price: "3,50€" },
              { id: "tercio-tostada", name: "Mahou Tostada 0,0", price: "3,90€" },
              { id: "tercio-alhambra", name: "Alhambra Reserva", price: "3,90€" },
              { id: "tercio-corona", name: "Corona", price: "3,90€" },
            ],
          },
        ],
      },
      {
        id: "bebidas-mixtas",
        title: "Bebidas mixtas",
        sections: [
          {
            items: [
              { id: "agua", name: "Agua 50cl", price: "2,50€" },
              { id: "agua-gas", name: "Agua con gas 36cl", price: "2,90€" },
              { id: "refresco", name: "Refresco de vidrio 36cl", price: "3,50€" },
              { id: "tinto-verano", name: "Tinto de verano", price: "3,90€" },
              { id: "ice-tea", name: "Majo's Ice Tea", price: "3,90€" },
              {
                id: "vino-blanco",
                name: "Vino blanco Alacanta",
                detail: "Verdejo & Macabeo · D.O. Alicante",
                price: "3,90€ / 14,90€",
              },
            ],
          },
        ],
      },
      {
        id: "cubatas",
        title: "Cubatas",
        sections: [
          {
            items: [
              { id: "ron", name: "Ron + refresco", price: "7,90€" },
              { id: "vodka", name: "Vodka + refresco", price: "7,90€" },
              { id: "gin", name: "Gin + refresco", price: "7,90€" },
              { id: "whisky", name: "Whisky + refresco", price: "7,90€" },
            ],
          },
        ],
      },
      {
        id: "margaritas-frozen",
        title: "Margaritas Frozen",
        sections: [
          {
            items: [
              { id: "margarita-clasica", name: "Margarita clásica frozen", price: "7,90€" },
              { id: "margarita-promo", name: "PROMO x2 Margarita clásica frozen", price: "12,90€" },
            ],
          },
        ],
      },
    ],
  },
];

export type ToppingItem = {
  id: string;
  name: string;
  price: string;
  /** Solo las carnes, que van en tarjeta con icono; el resto va en lista. */
  icon?: GraffitiIconName;
};

export type ToppingGroup = {
  id: string;
  title: string;
  icon: GraffitiIconName;
  items: ToppingItem[];
};

// Extras de la carta impresa, agrupados igual que en ella. El pan sin gluten
// sale en la cabecera de cada página de burgers/perritos; aquí va con los ingredientes.
export const TOPPING_GROUPS: ToppingGroup[] = [
  {
    id: "carnes",
    title: "Carnes extra",
    icon: "patty",
    items: [
      { id: "pollo-crujiente", name: "Pollo Crujiente", icon: "drumstick", price: "3,50€" },
      { id: "carne-vegetariana", name: "Carne Vegetariana", icon: "veggie", price: "3,90€" },
      { id: "smash-extra", name: "Smash de Ternera", icon: "patty", price: "3,90€" },
      { id: "vaca-madurada", name: "Vaca Madurada 30 días", icon: "crown", price: "5,70€" },
    ],
  },
  {
    id: "ingredientes",
    title: "Ingredientes extra",
    icon: "cheese",
    items: [
      { id: "tomate", name: "Tomate", price: "0,90€" },
      { id: "lechuga", name: "Lechuga Batavia", price: "0,90€" },
      { id: "cebolla-natural", name: "Cebolla natural", price: "0,90€" },
      { id: "cebolla-plancha", name: "Cebolla a la plancha", price: "0,90€" },
      { id: "cebolla-crunchy", name: "Cebolla crunchy", price: "0,90€" },
      { id: "pepinillos", name: "Pepinillos", price: "0,90€" },
      { id: "jalapenos", name: "Jalapeños", price: "0,90€" },
      { id: "doble-bacon", name: "Doble de bacon crujiente", price: "1,50€" },
      { id: "queso-americano", name: "Queso americano x2", price: "1,50€" },
      { id: "queso-gouda", name: "Queso gouda x2", price: "1,50€" },
      { id: "huevo-frito", name: "Huevo frito", price: "1,70€" },
      { id: "queso-cabra", name: "Queso de cabra", price: "1,90€" },
      { id: "cebolla-caramelizada", name: "Cebolla caramelizada", price: "1,90€" },
      { id: "guacamole", name: "Guacamole fresco y rústico", price: "3,50€" },
      { id: "pulled-pork", name: "Pulled pork a la BBQ casero", price: "3,50€" },
      { id: "pan-sin-gluten", name: "Pan sin gluten", price: "1,90€" },
    ],
  },
  {
    id: "salsas",
    title: "Salsas",
    icon: "mayo",
    items: [
      { id: "mayo-majos", name: "Mayo Majo's", price: "0,90€" },
      { id: "barbacoa", name: "Barbacoa de Mr. Majo's", price: "0,90€" },
      { id: "miel-mostaza", name: "Miel mostaza", price: "0,90€" },
      { id: "mayo-ajo", name: "Mayo Ajo", price: "0,90€" },
      { id: "mayo-trufa", name: "Mayo Trufa", price: "1,50€" },
      { id: "chipotle", name: "Chipotle picantón", price: "1,50€" },
      { id: "salsa-queso", name: "Salsa de queso", price: "1,50€" },
    ],
  },
];

// ---------------------------------------------------------------------------
// Home: solo una MUESTRA de la carta (la carta completa vive en /carta).
// Aquí se elige qué categorías salen y qué platos de cada una, en orden.
// ---------------------------------------------------------------------------

export const HOME_PICKS: { categoryId: string; itemIds: string[] }[] = [
  { categoryId: "smash", itemIds: ["gringa", "guiri", "loba"] },
  { categoryId: "dry-aged", itemIds: ["sugarmommy-real", "orale", "pija"] },
  { categoryId: "perritos", itemIds: ["yankee", "cheese-porn"] },
  { categoryId: "entrantes", itemIds: ["majos-teques", "patatas-trifasicas-carta", "chicken-wings"] },
  { categoryId: "postres", itemIds: ["nute-teques", "choko-majos"] },
];

/** Categorías de burgers: en el home enlazan a cada plato y cuentan como "burgers". */
export const BURGER_CATEGORY_IDS = ["smash", "dry-aged"];

/** Id del plato insignia en el home; en la carta vive en el ancla #insignia. */
export const FEATURED_ID = "sugar-daddy";

export type HomeCategory = FullMenuCategory & {
  /** Platos que tiene la categoría en la carta completa. */
  total: number;
  /** Precio más barato de la categoría completa. */
  from: string;
};

const toNumber = (price: string) => Number(price.replace("€", "").replace(",", "."));

// Escaparate de burgers del home: el plato insignia + las burgers elegidas.
export type ShowcaseBurger = {
  id: string;
  name: string;
  description: string;
  price: string;
  tag?: string;
  image: string;
  imagePosition?: string;
  headroom?: boolean;
};

// ---------------------------------------------------------------------------
// Carta por idioma: el español es la fuente; el inglés pisa textos por id.
// ---------------------------------------------------------------------------

function translate(lang: Locale) {
  if (lang === "es") {
    return { featured: { ...FEATURED_DISH, tag: "⭐ PLATO INSIGNIA" }, categories: FULL_MENU, toppings: TOPPING_GROUPS };
  }
  return {
    featured: { ...FEATURED_DISH, ...FEATURED_EN },
    categories: FULL_MENU.map((category) => ({
      ...category,
      ...CATEGORIES_EN[category.id],
      items: category.items.map((item) => ({ ...item, ...ITEMS_EN[item.id] })),
      groups: category.groups?.map((group) => ({
        ...group,
        title: DRINKS_EN[group.id] ?? group.title,
        sections: group.sections.map((section) => ({
          title: section.title && (DRINKS_EN[section.title] ?? section.title),
          items: section.items.map((item) => ({
            ...item,
            name: DRINKS_EN[item.id] ?? item.name,
            detail: item.detail && (DRINKS_EN[`${item.id}:detail`] ?? item.detail),
          })),
        })),
      })),
    })),
    toppings: TOPPING_GROUPS.map((group) => ({
      ...group,
      title: TOPPING_GROUPS_EN[group.id] ?? group.title,
      items: group.items.map((topping) => ({ ...topping, name: TOPPINGS_EN[topping.id] ?? topping.name })),
    })),
  };
}

function buildMenu(lang: Locale) {
  const { featured, categories, toppings } = translate(lang);

  // el plato insignia (doble smash) encabeza las Smash del home
  const featuredItem: FullMenuItem = {
    id: FEATURED_ID,
    name: featured.name,
    description: featured.description,
    price: featured.price,
    tag: featured.tag,
    image: featured.image,
    headroom: true,
  };

  const homeCategories: HomeCategory[] = HOME_PICKS.map(({ categoryId, itemIds }) => {
    const category = categories.find((c) => c.id === categoryId)!;
    const withFeatured = categoryId === "smash";
    const min = Math.min(
      ...category.items.filter((item) => !item.priceSuffix).map((item) => toNumber(item.price))
    );
    const items = itemIds.map((id) => {
      const item = category.items.find((i) => i.id === id);
      if (!item) throw new Error(`HOME_PICKS: "${id}" no existe en la categoría "${categoryId}"`);
      return item;
    });
    return {
      ...category,
      items: withFeatured ? [featuredItem, ...items] : items,
      total: category.items.length + (withFeatured ? 1 : 0),
      from: `${min.toFixed(2).replace(".", ",")}€`,
    };
  });

  const showcase: ShowcaseBurger[] = homeCategories
    .filter((c) => BURGER_CATEGORY_IDS.includes(c.id))
    .flatMap((c) => c.items)
    .map((item) => ({
      id: item.id,
      name: item.name,
      description: item.description,
      price: item.price,
      tag: item.tag,
      image: item.image!,
      imagePosition: item.imagePosition,
      headroom: item.headroom,
    }));

  return { featured, categories, toppings, homeCategories, showcase };
}

const MENUS = { es: buildMenu("es"), en: buildMenu("en") } satisfies Record<Locale, unknown>;

export type Menu = ReturnType<typeof buildMenu>;

export const getMenu = (lang: Locale): Menu => MENUS[lang];

export const HOME_CATEGORIES = MENUS.es.homeCategories;
export const BURGER_SHOWCASE = MENUS.es.showcase;
