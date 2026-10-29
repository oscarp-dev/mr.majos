// Carta en inglés: solo lo que cambia respecto a full-menu-data.ts, por id.
// Los nombres de los platos son marca y no se traducen.

type ItemEn = {
  description: string;
  tag?: string;
  footerLeft?: string;
  footerRight?: string;
  priceSuffix?: string;
  note?: string;
};

type CategoryEn = { title: string; shortTitle?: string; description?: string };

export const FEATURED_EN = {
  badges: ["⭐ SIGNATURE DISH", "100% REAL LACEY CRUST"],
  eyebrow: "KING OF THE MENU",
  description:
    "Double beef smash, cheddar cheese, sweet-and-sour pickles, caramelized onion, double crispy bacon and our Mayo Majo's sauce. Totally ADDICTIVE!",
  chips: ["Double Smash", "Cheddar", "Double Bacon"],
  footer: "WITH FREE THIN FRIES",
  tag: "⭐ SIGNATURE DISH",
};

export const CATEGORIES_EN: Record<string, CategoryEn> = {
  smash: { title: "Smash Burgers", description: "All come with free thin fries :) · Gluten-free bun available +€1.90" },
  "dry-aged": {
    title: "Dry Aged Burgers",
    description: "Galician beef dry-aged for 30 days. All come with free thin fries :) · Gluten-free bun available +€1.90",
  },
  perritos: {
    title: "Hot Dogs",
    shortTitle: "Hot Dogs",
    description: "All come with free thin fries :) · Gluten-free bun available +€1.90",
  },
  entrantes: { title: "Starters" },
  veggie: { title: "Veggie", description: "All come with free thin fries :) · Gluten-free bun available +€1.90" },
  peques: {
    title: "For the Little Ones <3",
    shortTitle: "Kids",
    description: "All come with free thin fries :) · Gluten-free bun available +€1.90",
  },
  postres: { title: "Desserts" },
  bebidas: { title: "Drinks" },
};

export const ITEMS_EN: Record<string, ItemEn> = {
  // burgers
  gringa: {
    description:
      "Double beef smash, cheddar cheese, sweet-and-sour pickle and diced onion relish, double crispy bacon, ketchup and honey mustard. Insaaane!",
    footerLeft: "Relish & Honey Mustard",
  },
  guiri: {
    description:
      "Double beef smash, cheddar cheese, grilled onion, double crispy bacon, fried egg and Mayo Majo's sauce. The best AMERICAN STYLE!",
    footerLeft: "Fried Egg",
  },
  tiquismiquis: {
    description:
      "Double SUPER CRUNCHY breaded chicken, cheddar cheese, double crispy bacon, Batavia lettuce and Mayo Majo's sauce. SPECIAL for chicken lovers!",
    footerLeft: "Super Crunchy Chicken",
  },
  motomami: {
    description:
      "Double beef smash, cheddar cheese, sweet-and-sour pickles, grilled onion, double crispy bacon, tomato, Batavia lettuce and Mayo Majo's sauce. Yuuum!",
    footerLeft: "Tomato & Batavia",
  },
  loba: {
    description:
      "Double beef smash, cheddar cheese, crunchy onion, double crispy bacon, Batavia lettuce, fried egg and Truffle Mayo. Simply DIVINE!",
    footerLeft: "Truffle Mayo",
  },
  goloza: {
    description:
      "Double beef smash, cheddar cheese, grilled onion, homemade BBQ pulled pork, Batavia lettuce and Mr. Majo's BBQ sauce. Yes, the PULLED PORK is homemade!",
    tag: "HOMEMADE PULLED PORK",
  },
  "sugarmommy-real": {
    note: "Can't be cooked WELL DONE",
    description:
      "30-day dry-aged Galician beef, minced and mixed with bacon bits and crunchy onion, cheddar cheese, grilled goat cheese and caramelized onion.",
    tag: "GOAT CHEESE & CARAMELIZED ONION",
    footerLeft: "Goat Cheese",
  },
  "sexy-crush": {
    note: "Can't be cooked WELL DONE",
    description:
      "30-day dry-aged Galician beef, minced and mixed with bacon bits and crunchy onion, 110 g of homemade BBQ pulled pork, loads of cheddar cheese and a fried egg. A VERY P*RN crush!",
    footerLeft: "110 g Pulled Pork",
    footerRight: "Fried Egg",
  },
  pija: {
    description:
      "30-day dry-aged Galician beef, grilled goat cheese, caramelized onion and double crispy bacon.",
    tag: "GOURMET CLASSIC",
    footerLeft: "Goat Cheese & Bacon",
  },
  orale: {
    description:
      "30-day dry-aged Galician beef, double cheddar cheese, fresh and rustic homemade guacamole and Mr. Majo's spicy chipotle sauce. ¡Oraleeee CABRXN!",
  },
  pecadora: {
    note: "Can't be cooked WELL DONE",
    description:
      "30-day dry-aged Galician beef, minced and mixed with bacon bits and crunchy onion, cheddar, gouda and provolone cheese. CHEESE BOOM!",
    tag: "CHEESE BOOM!",
    footerLeft: "Cheddar, Gouda & Provolone",
  },
  "custom-burger": {
    description:
      "You're the chef! Time to get creative: add all the extra ingredients and sauces you want. Start from a base of 30-day dry-aged Galician beef or double SUPER CRUNCHY breaded chicken.",
    tag: "YOU'RE THE CHEF!",
    footerLeft: "DRY-AGED BEEF OR CRUNCHY CHICKEN",
    footerRight: "Add your extras",
  },

  // perritos
  yankee: {
    description:
      "120 g sausage, triple cheddar cheese, caramelized onion, crunchy onion, Mr. Majo's BBQ sauce, honey mustard and loads of bacon bits.",
    tag: "BEST SELLER",
  },
  "cheese-porn": {
    description:
      "120 g sausage, double Gouda cheese, triple cheddar cheese, melted cheese sauce and loads of bacon bits. Cheeese BOOOOOM!",
  },
  americano: {
    description:
      "120 g sausage, cheddar cheese, tomato, crunchy onion, sweet-and-sour pickle and diced onion relish, ketchup and honey mustard. From the USA with lots of <3!",
  },
  chingon: {
    description:
      "120 g sausage, triple cheddar cheese, fresh and rustic homemade guacamole, chopped red onion, jalapeños and Mr. Majo's spicy chipotle sauce. ¡Órale, carnalitx!",
  },

  // entrantes
  "majos-teques": {
    description:
      "6 fried sticks filled with melted cheese, served with our delicious Garlic Mayo sauce.",
    tag: "OUR BEST SELLER!",
    footerLeft: "6 STICKS",
    footerRight: "With Garlic Mayo",
  },
  "patatas-trifasicas-carta": {
    description:
      "Thin fries with homemade BBQ pulled pork, crispy breaded chicken, Frankfurt sausage, Mayo Majo's sauce, melted American cheese sauce and dried parsley.",
    tag: "TOTAL MADNESS!",
    footerLeft: "PULLED PORK + CHICKEN + FRANKFURT",
  },
  nachingones: {
    description:
      "Nachos smothered in homemade chili con carne, fresh rustic guacamole, sour cream, jalapeños, melted American cheese sauce, red onion and chopped tomato.",
    footerLeft: "HOMEMADE CHILI CON CARNE",
    footerRight: "Guacamole & Jalapeños",
  },
  "chicken-wings": {
    description:
      "7 chicken wings coated to perfection, with chopped red onion, dried parsley and our amazing Mayo Majo's sauce.",
    tag: "7 WINGS",
    footerLeft: "COATED TO PERFECTION",
    footerRight: "With Mayo Majo's",
  },
  "aros-cebolla": {
    description:
      "Lots, and we mean loooots, of onion rings, soft inside and crispy outside. Served with Mr. Majo's BBQ sauce. Super cruuuunchy!",
    tag: "SUPER CRUUUNCHY!",
    footerLeft: "CRISPY OUTSIDE",
    footerRight: "With BBQ Sauce",
  },
  "sweet-potatoes": {
    description:
      "Amazing fried sweet potato, SUPER SWEET, perfect alongside your burger or hot dog. Also great as a starter to take the edge off, hehe :)",
    tag: "FRIED SWEET POTATO",
    footerLeft: "SUPER SWEET",
    footerRight: "For your Burger or Hot Dog",
  },

  // veggie y peques
  "veggie-baby": {
    description:
      "Veggie patty, Gouda cheese, caramelized onion, tomato, Batavia lettuce and Mayo Majo's sauce. Because veggie is mind-blowing too, babe!",
  },
  "veggie-orale": {
    description:
      "Veggie patty, American cheese, fresh and rustic homemade guacamole with spicy chipotle sauce and Batavia lettuce. Spicily veggie :)",
  },
  "kids-carne": {
    description:
      "Beef smash patty, cheddar cheese, double crispy bacon and Mayo Majo's sauce.",
    tag: "KIDS MENU 👶",
  },
  "kids-pollo": {
    description:
      "SUPER CRUNCHY breaded chicken, cheddar cheese, double crispy bacon and Mayo Majo's sauce.",
    tag: "KIDS MENU 👶",
  },

  // postres
  "choko-majos": {
    description:
      "Mr. Majo's delicious homemade secret, made with chocolate biscuit and TOP SECRET PRODUCTS.",
    footerLeft: "HOMEMADE SECRET",
    footerRight: "Chocolate Biscuit",
  },
  "nute-teques": {
    description:
      "4 fried sticks filled with luscious Nutella and drizzled with chocolate syrup. Dare to try? They're suuuuper SWEEEEET P*RN!",
    footerLeft: "4 STICKS",
    footerRight: "Chocolate Syrup",
  },
  coulant: {
    description:
      "The classic, unbeatable French recipe from 1981, this time filled with dulce de leche that melts into an explosion of flavour. Served with a crunchy shower of Maria biscuit and vanilla ice cream.",
    footerLeft: "DULCE DE LECHE CENTRE",
    footerRight: "With Vanilla Ice Cream",
  },

};

/** Bebidas: por id de grupo/bebida, por título de subapartado y "id:detail". */
export const DRINKS_EN: Record<string, string> = {
  cervezas: "Cold beer",
  "Mahou 5 Estrellas de barril": "Mahou 5 Estrellas on tap",
  "Tercios 33cl": "33cl bottles",
  "cana-doble": "Double caña 33cl",
  "jarra-grande": "Large jug 50cl",
  "cana-doble-radler": "Double Radler 33cl",
  "jarra-grande-radler": "Large Radler jug 50cl",
  "tercio-tostada": "Mahou Tostada 0.0",
  "bebidas-mixtas": "Soft drinks & more",
  agua: "Water 50cl",
  "agua-gas": "Sparkling water 36cl",
  refresco: "Soft drink (glass bottle) 36cl",
  "tinto-verano": "Tinto de verano",
  "vino-blanco": "Alacanta white wine",
  cubatas: "Mixed drinks",
  ron: "Rum + mixer",
  vodka: "Vodka + mixer",
  gin: "Gin + mixer",
  whisky: "Whisky + mixer",
  "margarita-clasica": "Classic frozen margarita",
  "margarita-promo": "PROMO x2 classic frozen margarita",
};

export const TOPPING_GROUPS_EN: Record<string, string> = {
  carnes: "Extra patties",
  ingredientes: "Extra ingredients",
  salsas: "Sauces",
};

export const TOPPINGS_EN: Record<string, string> = {
  // carnes
  "pollo-crujiente": "Crispy Chicken",
  "carne-vegetariana": "Veggie Patty",
  "smash-extra": "Beef Smash",
  "vaca-madurada": "30-Day Dry-Aged Beef",
  // ingredientes
  tomate: "Tomato",
  lechuga: "Batavia lettuce",
  "cebolla-natural": "Raw onion",
  "cebolla-plancha": "Grilled onion",
  "cebolla-crunchy": "Crunchy onion",
  pepinillos: "Pickles",
  jalapenos: "Jalapeños",
  "doble-bacon": "Double crispy bacon",
  "queso-americano": "American cheese x2",
  "queso-gouda": "Gouda cheese x2",
  "huevo-frito": "Fried egg",
  "queso-cabra": "Goat cheese",
  "cebolla-caramelizada": "Caramelized onion",
  guacamole: "Fresh, rustic guacamole",
  "pulled-pork": "Homemade BBQ pulled pork",
  "pan-sin-gluten": "Gluten-free bun",
  // salsas
  "mayo-majos": "Mayo Majo's",
  barbacoa: "Mr. Majo's BBQ",
  "miel-mostaza": "Honey mustard",
  "mayo-ajo": "Garlic Mayo",
  "mayo-trufa": "Truffle Mayo",
  chipotle: "Spicy chipotle",
  "salsa-queso": "Cheese sauce",
};
