// Carta real de Mr. Majo's — fuente de verdad para /carta.
// A diferencia de MENU_ITEMS (destacados del home, con foto), esta carta es
// la lista completa tal cual la maneja el local: por categorías, sin foto
// por plato salvo el insignia.

export type FullMenuItem = {
  id: string;
  name: string;
  description: string;
  price: string;
  priceSuffix?: string;
  tag?: string;
  tagVariant?: "yellow" | "red" | "green";
  footerLeft?: string;
  footerRight?: string;
  highlight?: "yellow" | "red" | "dashed";
};

export type FullMenuCategory = {
  id: string;
  title: string;
  icon?: string;
  description?: string;
  items: FullMenuItem[];
};

export const FEATURED_DISH = {
  badges: ["⭐ PLATO INSIGNIA", "100% REAL LACEY CRUST"],
  eyebrow: "EL REY DEL MENÚ",
  name: "La Sugar Daddy",
  price: "14,90€",
  description:
    "Doble smash de ternera 100% vaca gallega con bordes extradelgados hipercaramelizados, queso cheddar fundido, pepinillos agridulces americanos, cebolla caramelizada casera, doble ración de bacon ultra crujiente y la legendaria salsa secreta Mayo Majo's en brioche artesano. ¡Una adicción total!",
  chips: ["Doble Smash 180g", "Cheddar Fundido", "Bacon Crujiente"],
  footer: "PAN BRIOCHE ARTESANO",
};

export const FULL_MENU: FullMenuCategory[] = [
  {
    id: "burgers",
    title: "Burgers",
    icon: "🍔",
    items: [
      {
        id: "gringa",
        name: "La Gringa",
        description:
          "Doble Smash de ternera, queso cheddar, relish especial de pepinillos agridulces y cebolla picadita, doble bacon crujiente, ketchup clásico y miel mostaza original. ¡De locoooos!",
        price: "13,70€",
        tag: "NEW HIT",
        tagVariant: "red",
        footerLeft: "Doble 180g",
      },
      {
        id: "guiri",
        name: "La Guiri",
        description:
          "Doble Smash de ternera, queso cheddar, cebolla dulce a la plancha, doble de bacon crujiente, huevo frito de granja con yema dorada y salsa Mayo Majo's. Al más puro estilo americano.",
        price: "13,70€",
        tag: "AMERICAN STYLE",
        footerLeft: "Huevo Campero",
      },
      {
        id: "tiquismiquis",
        name: "La Tiquismiquis",
        description:
          "Doble de pechuga de pollo empanada SUPER CRUNCHY con rebozado secreto, queso cheddar derretido, doble de bacon crujiente, lechuga Batavia fresca y salsa Mayo Majo's. ¡Especial chicken lovers!",
        price: "13,70€",
        tag: "SUPER CRUNCHY 🍗",
        footerLeft: "Pollo Crujiente",
      },
      {
        id: "motomami",
        name: "La Motomami",
        description:
          "Doble Smash de ternera, queso cheddar, pepinillos agridulces, cebolla a la plancha, doble bacon crujiente, rodajas de tomate natural, lechuga fresca y salsa Mayo Majo's. ¡Ñaaaam!",
        price: "13,70€",
        tag: "FRESH & CRUNCH",
        footerLeft: "Fresh Classic",
      },
      {
        id: "loba",
        name: "La Loba",
        description:
          "Doble Smash de ternera, queso cheddar, cebolla crunchy crujiente, doble bacon, lechuga Batavia, huevo frito y nuestra adictiva salsa Mayo Trufa. ¡Clara-mente divina!",
        price: "14,90€",
        tag: "TRUFFLE TOUCH ✨",
        footerLeft: "Mayo Trufa",
      },
      {
        id: "goloza",
        name: "La Goloza",
        description:
          "Doble Smash de ternera, queso cheddar, cebolla a la plancha caramelizada, pulled pork casero horneado a baja temperatura con barbacoa, lechuga y salsa Barbacoa Mr. Majo's.",
        price: "15,70€",
        tag: "PULLED PORK CASERO",
        tagVariant: "red",
        footerLeft: "Pulled Pork BBQ",
      },
      {
        id: "sugarmommy-real",
        name: "La Sugar Mommy",
        description:
          "Vaca Gallega Madurada 30 días con bacon bits y cebolla crunchy, queso cheddar, rulo de cabra dorado a la plancha y cebolla caramelizada casera. (No se puede muy hecha).",
        price: "17,90€",
        tag: "CABRA & CEBOLLA CARAMELIZADA",
        footerLeft: "Rulo de Cabra",
      },
      {
        id: "pecadora",
        name: "La Pecadora",
        description:
          "Vaca Madurada con tropezones de bacon y cebolla frita. Trilogía de quesos bestial: Cheddar inglés, Gouda ahumado y Provolone italiano fundido. (No se puede muy hecha).",
        price: "17,90€",
        tag: "¡CHEESE BOOM! 🧀",
        footerLeft: "Trilogía de Quesos",
      },
      {
        id: "pija",
        name: "La Pija",
        description:
          "Vaca Gallega Madurada 30 días, medallón de queso de cabra fundido al cromo, cebolla dulce pochada lentamente y doble bacon crujiente. (No se puede muy hecha).",
        price: "15,70€",
        tag: "CLÁSICO GOURMET",
        footerLeft: "Gourmet Edition",
      },
      {
        id: "orale",
        name: "La Órale",
        description:
          "Vaca Madurada 30 días, doble queso cheddar fundido, guacamole rústico fresco hecho a diario y salsa picantona chipotle de la casa. ¡Oraleeee CABRXN!",
        price: "16,50€",
        tag: "🌶️ SPICY CHINGÓN",
        footerLeft: "Guacamole & Chipotle",
      },
      {
        id: "custom-burger",
        name: "Custom Burger",
        description:
          "Base de ternera Madurada 30 días o doble pechuga de pollo crunchy con pan brioche. Añade extras: bacon crujiente, quesos gourmet, huevo campero, pulled pork casero, cebolla frita y salsas al fallo.",
        price: "10,70€",
        priceSuffix: "+toppings",
        tag: "¡TÚ ERES EL CHEF!",
        footerLeft: "PERSONALIZACIÓN TOTAL EN MESA",
        footerRight: "Elige tus ingredientes",
        highlight: "dashed",
      },
    ],
  },
  {
    id: "perritos",
    title: "Perritos Calientes Gigantes (120g)",
    icon: "🌭",
    description: "Salchicha gigante de 120 gramos en pan tierno con mantequilla.",
    items: [
      {
        id: "yankee",
        name: "El Yankee",
        description:
          "Salchicha 120gr, triple cheddar, cebolla caramelizada, cebolla crunchy, salsa BBQ Mr. Majo's, miel mostaza y bacon bits.",
        price: "12,90€",
        tag: "TOP VENTAS",
        highlight: "yellow",
      },
      {
        id: "cheese-porn",
        name: "El Cheese P*rn",
        description:
          "Salchicha 120gr, doble queso gouda, triple cheddar inglés, baño de salsa de queso fundido y lluvia de bacon crujiente.",
        price: "10,70€",
        tag: "¡CHEESE BOOM!",
      },
      {
        id: "americano",
        name: "El Americano",
        description:
          "Salchicha 120gr, queso cheddar, tomate fresco picadito, cebolla crujiente, relish de pepinillos, ketchup y miel mostaza.",
        price: "10,70€",
        tag: "NEW HIT",
        tagVariant: "red",
      },
      {
        id: "chingon",
        name: "El Chingón",
        description:
          "Salchicha 120gr, triple cheddar, guacamole artesanal, cebolla morada, jalapeños picantones y salsa chipotle Mr. Majo's.",
        price: "11,70€",
        tag: "🌶️ SPICY",
        tagVariant: "red",
      },
    ],
  },
  {
    id: "acompanamientos",
    title: "Acompañamientos",
    icon: "🍟",
    items: [
      {
        id: "majos-teques",
        name: "Majo's Teques",
        description:
          "6 deditos dorados crujientes rellenos de queso derretido a borbotones, acompañados de salsa casera Mayo Ajo.",
        price: "9,90€",
        tag: "BEST SELLER TOTAL",
        highlight: "yellow",
        footerLeft: "6 UNIDADES",
        footerRight: "Con Salsa Mayo Ajo",
      },
      {
        id: "patatas-trifasicas-carta",
        name: "Patatas Trifásicas",
        description:
          "Bandeja gigante de patatas finas con pulled pork casero a la BBQ, pollo empanado crujiente, trocitos de Frankfurt, queso fundido y Mayo Majo's.",
        price: "15,70€",
        tag: "¡LOCURA TOTAL!",
        tagVariant: "red",
        highlight: "red",
        footerLeft: "BANDEJA PARA COMPARTIR",
        footerRight: "Pulled Pork + Pollo + Frankfurt",
      },
      {
        id: "nachingones",
        name: "Nachingones",
        description:
          "Nachos artesanos bañados en chili con carne casero, guacamole rústico fresco, crema agria, jalapeños, queso fundido y pico de gallo.",
        price: "13,70€",
        tag: "STREET CLASSIC",
        footerLeft: "CHILI CASERO & GUACAMOLE",
        footerRight: "Ideales para 2-3 pax",
      },
      {
        id: "chicken-wings",
        name: "Chicken Wings",
        description:
          "7 alitas tiernas de pollo rebozadas en fina corteza supercrujiente con cebolla morada picada, perejil y salsa Mayo Majo's.",
        price: "11,70€",
        tag: "7 PIEZAS CRUNCHY",
        footerLeft: "7 ALITAS CRUJIENTES",
        footerRight: "Con Mayo Majo's",
      },
      {
        id: "aros-cebolla",
        name: "Aros de Cebolla",
        description:
          "Aros de cebolla tiernos y dulces por dentro, dorados y crujientes por fuera. Acompañados de dip de barbacoa Mr. Majo's.",
        price: "9,90€",
        tag: "AROS XXL",
        footerLeft: "AROS CRUJIENTES XXL",
        footerRight: "Dip BBQ Casero",
      },
      {
        id: "sweet-potatoes",
        name: "Sweet Potatoes",
        description:
          "Boniato frito fino y súper dulce con punto de sal marina escamada, perfecto para contrastar tu smash burger.",
        price: "7,90€",
        tag: "BONIATO FRITO",
        footerLeft: "RACIÓN GENEROSA",
        footerRight: "Sal Marina Escamada",
      },
    ],
  },
  {
    id: "veggie-kids",
    title: "Veggie & Kids",
    icon: "🌱",
    items: [
      {
        id: "veggie-baby",
        name: "La Veggie Baby",
        description:
          "Carne vegetal sazonada, queso gouda fundido, cebolla caramelizada, tomate, lechuga Batavia y Mayo Majo's.",
        price: "15,70€",
        tag: "100% PLANT BASED 🌱",
        tagVariant: "green",
      },
      {
        id: "veggie-orale",
        name: "La Veggie Órale",
        description:
          "Carne vegetal, queso fundido, guacamole casero rústico, salsa chipotle picantona y lechuga fresca.",
        price: "15,70€",
        tag: "🌱 VEGGIE SPICY 🌶️",
        tagVariant: "green",
        footerLeft: "🌱 Guacamole & Chipotle",
      },
      {
        id: "kids-carne",
        name: "La Majo's Kids Carne",
        description:
          "Carne smash de ternera 90g suave, queso cheddar derretido, doble de bacon crujiente y mayonesa suave.",
        price: "10,70€",
        tag: "MENÚ PEQUES 👶",
      },
      {
        id: "kids-pollo",
        name: "La Majo's Kids Pollo",
        description:
          "Pollo empanado súper crunchy, cheddar derretido, doble de bacon crujiente y salsa mayo suave.",
        price: "10,70€",
        tag: "MENÚ PEQUES 👶",
      },
    ],
  },
  {
    id: "postres",
    title: "Postres",
    icon: "🍫",
    items: [
      {
        id: "nute-teques",
        name: "Nute Teques",
        description:
          "Tequeños dulces rellenos de Nutella hirviendo que explota en boca, bañados en sirope de chocolate y espolvoreados con azúcar glass.",
        price: "7,90€",
        tag: "NUTELLA LOVERS 💎",
        footerLeft: "EXPLOSIÓN DE NUTELLA",
        footerRight: "4 Deditos Dulces",
      },
      {
        id: "choko-majos",
        name: "Choko Majo's",
        description:
          "Tarta artesana de chocolate negro intenso con base crujiente de galleta dorada y fino topping de cacao noble puro.",
        price: "5,70€",
        tag: "BEST SELLER",
        footerLeft: "CHOCOLATE NEGRO PURO",
        footerRight: "Elaboración Casera Diaria",
      },
    ],
  },
  {
    id: "bebidas",
    title: "Bebidas",
    icon: "🍹",
    items: [
      {
        id: "mahou-5-estrellas",
        name: "Mahou 5 Estrellas (33cl)",
        description: "Tirada con la presión perfecta en copa bien fría.",
        price: "3,50€",
        tag: "CERVEZA BARRIL",
        footerLeft: "Barril Frío",
      },
      {
        id: "jarra-mahou",
        name: "Jarra Mahou (50cl)",
        description: "Medio litro de cerveza bien helada para acompañar el smash.",
        price: "4,90€",
        tag: "JARRA HELADA",
        footerLeft: "500ml Doble Tiro",
      },
      {
        id: "alhambra-corona",
        name: "Alhambra & Corona",
        description: "Alhambra Reserva 1925, Coronita con lima y Mahou Sin Gluten 0,0%.",
        price: "3,80€",
        tag: "TERCIOS SELECCIÓN",
        footerLeft: "Botellín 33cl",
      },
      {
        id: "refrescos-agua",
        name: "Refrescos y Agua",
        description:
          "Coca-Cola Zero/Original, Fanta Naranja, Nestea, Aquarius y Agua Mineral.",
        price: "2,80€",
        tag: "REFRESCOS",
        footerLeft: "Vidrio 350ml",
      },
      {
        id: "margaritas-frozen",
        name: "Margaritas Frozen",
        description:
          "Tequila reposado 100% agave, zumo natural de lima y hielo frappé. ¡Súper refrescante y adictivo!",
        price: "7,90€",
        priceSuffix: "/ copa",
        tag: "PROMO 2X (12,90€)",
        tagVariant: "red",
        highlight: "yellow",
        footerLeft: "Copa individual 7,90€ • Promo 2 Copas por solo 12,90€",
      },
      {
        id: "cubatas",
        name: "Cubatas Primeras Marcas",
        description:
          "Gin Tonic (Seagram's / Beefeater), Ron Cola (Barceló / Santa Teresa), Whisky (Red Label / Jameson) o Vodka con refresco a elegir.",
        price: "7,90€",
        tag: "COPAS Y COMBINADOS",
        footerLeft: "Primeras Marcas Oficiales",
      },
    ],
  },
];

export type ToppingItem = {
  id: string;
  name: string;
  icon: string;
  price: string;
};

export const TOPPINGS: ToppingItem[] = [
  { id: "smash-extra", name: "Smash Extra 90g", icon: "🥩", price: "3,90€" },
  { id: "vaca-madurada", name: "Vaca Madurada 30D", icon: "👑", price: "5,70€" },
  { id: "pollo-crujiente", name: "Pollo Crujiente", icon: "🍗", price: "3,50€" },
  { id: "doble-bacon", name: "Doble Bacon Crispy", icon: "🥓", price: "1,80€" },
  { id: "huevo-granja", name: "Huevo de Granja", icon: "🍳", price: "1,50€" },
  { id: "pulled-pork", name: "Pulled Pork Casero", icon: "🔥", price: "2,90€" },
  { id: "guacamole", name: "Guacamole Rústico", icon: "🥑", price: "2,50€" },
  { id: "rulo-cabra", name: "Rulo de Cabra", icon: "🧀", price: "2,20€" },
  { id: "mayo-majos", name: "Mayo Majo's", icon: "🥄", price: "1,50€" },
  { id: "salsa-trufa", name: "Salsa Trufa Secreta", icon: "✨", price: "1,90€" },
  { id: "salsa-chipotle", name: "Salsa Chipotle", icon: "🌶️", price: "1,50€" },
  { id: "pan-sin-gluten", name: "Pan Sin Gluten", icon: "🌾", price: "1,90€" },
];
