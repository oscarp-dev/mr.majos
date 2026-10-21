// Carta en inglés: solo lo que cambia respecto a full-menu-data.ts, por id.
// Los nombres de los platos son marca y no se traducen.

type ItemEn = {
  description: string;
  tag?: string;
  footerLeft?: string;
  footerRight?: string;
  priceSuffix?: string;
};

type CategoryEn = { title: string; shortTitle?: string; description?: string };

export const FEATURED_EN = {
  badges: ["⭐ SIGNATURE DISH", "100% REAL LACEY CRUST"],
  eyebrow: "KING OF THE MENU",
  description:
    "Double smash of 100% Galician beef with ultra-thin, deeply caramelized edges, melted cheddar, sweet-and-sour American pickles, homemade caramelized onion, a double serving of extra-crispy bacon and the legendary secret Mayo Majo's sauce on an artisan brioche bun. Totally addictive!",
  chips: ["Double Smash 180g", "Melted Cheddar", "Crispy Bacon"],
  footer: "ARTISAN BRIOCHE BUN",
  tag: "⭐ SIGNATURE DISH",
};

export const CATEGORIES_EN: Record<string, CategoryEn> = {
  burgers: { title: "Burgers" },
  perritos: {
    title: "Giant Hot Dogs (120g)",
    shortTitle: "Hot Dogs",
    description: "A giant 120g sausage in a soft buttered bun.",
  },
  acompanamientos: { title: "Sides" },
  "veggie-kids": { title: "Veggie & Kids" },
  postres: { title: "Desserts" },
  bebidas: { title: "Drinks" },
};

export const ITEMS_EN: Record<string, ItemEn> = {
  // burgers
  gringa: {
    description:
      "Double beef smash, cheddar cheese, special relish of sweet-and-sour pickles and diced onion, double crispy bacon, classic ketchup and original honey mustard. Insaaane!",
    footerLeft: "Double 180g",
  },
  guiri: {
    description:
      "Double beef smash, cheddar cheese, sweet grilled onion, double crispy bacon, a farm-fresh fried egg with a golden yolk and Mayo Majo's sauce. Pure American style.",
    footerLeft: "Free-Range Egg",
  },
  tiquismiquis: {
    description:
      "Double SUPER CRUNCHY breaded chicken breast in our secret coating, melted cheddar, double crispy bacon, fresh Batavia lettuce and Mayo Majo's sauce. Made for chicken lovers!",
    footerLeft: "Crispy Chicken",
  },
  motomami: {
    description:
      "Double beef smash, cheddar cheese, sweet-and-sour pickles, grilled onion, double crispy bacon, fresh tomato slices, fresh lettuce and Mayo Majo's sauce. Yuuum!",
  },
  loba: {
    description:
      "Double beef smash, cheddar cheese, crunchy fried onion, double bacon, Batavia lettuce, fried egg and our addictive Truffle Mayo. Simply divine!",
    footerLeft: "Truffle Mayo",
  },
  goloza: {
    description:
      "Double beef smash, cheddar cheese, caramelized grilled onion, homemade slow-roasted BBQ pulled pork, lettuce and Mr. Majo's BBQ sauce.",
    tag: "HOMEMADE PULLED PORK",
  },
  "sugarmommy-real": {
    description:
      "30-day dry-aged Galician beef with bacon bits and crunchy onion, cheddar cheese, golden grilled goat cheese and homemade caramelized onion. (Can't be cooked well done.)",
    tag: "GOAT CHEESE & CARAMELIZED ONION",
    footerLeft: "Goat Cheese",
  },
  pecadora: {
    description:
      "Dry-aged beef studded with bacon and fried onion. A beastly cheese trilogy: English cheddar, smoked Gouda and melted Italian provolone. (Can't be cooked well done.)",
    footerLeft: "Cheese Trilogy",
  },
  pija: {
    description:
      "30-day dry-aged Galician beef, a medallion of melted goat cheese, slow-cooked sweet onion and double crispy bacon. (Can't be cooked well done.)",
    tag: "GOURMET CLASSIC",
  },
  orale: {
    description:
      "30-day dry-aged beef, double melted cheddar, fresh rustic guacamole made daily and our spicy house chipotle sauce. ¡Oraleeee CABRXN!",
  },
  "custom-burger": {
    description:
      "30-day dry-aged beef or double crunchy chicken breast on a brioche bun. Add extras: crispy bacon, gourmet cheeses, free-range egg, homemade pulled pork, fried onion and all the sauces you want.",
    tag: "YOU'RE THE CHEF!",
    footerLeft: "FULLY CUSTOM AT YOUR TABLE",
    footerRight: "Pick your ingredients",
  },

  // perritos
  yankee: {
    description:
      "120g sausage, triple cheddar, caramelized onion, crunchy onion, Mr. Majo's BBQ sauce, honey mustard and bacon bits.",
    tag: "BEST SELLER",
  },
  "cheese-porn": {
    description:
      "120g sausage, double Gouda, triple English cheddar, a bath of melted cheese sauce and a shower of crispy bacon.",
  },
  americano: {
    description:
      "120g sausage, cheddar cheese, diced fresh tomato, crispy onion, pickle relish, ketchup and honey mustard.",
  },
  chingon: {
    description:
      "120g sausage, triple cheddar, handmade guacamole, red onion, spicy jalapeños and Mr. Majo's chipotle sauce.",
  },

  // acompañamientos
  "majos-teques": {
    description:
      "6 crispy golden cheese sticks oozing with melted cheese, served with homemade Garlic Mayo.",
    footerLeft: "6 PIECES",
    footerRight: "With Garlic Mayo",
  },
  "patatas-trifasicas-carta": {
    description:
      "A giant tray of thin fries loaded with homemade BBQ pulled pork, crispy breaded chicken, Frankfurt sausage bites, melted cheese and Mayo Majo's.",
    tag: "TOTAL MADNESS!",
    footerLeft: "SHARING TRAY",
    footerRight: "Pulled Pork + Chicken + Frankfurt",
  },
  nachingones: {
    description:
      "Handmade nachos smothered in homemade chili con carne, fresh rustic guacamole, sour cream, jalapeños, melted cheese and pico de gallo.",
    footerLeft: "HOMEMADE CHILI & GUACAMOLE",
    footerRight: "Perfect for 2-3 people",
  },
  "chicken-wings": {
    description:
      "7 tender chicken wings in a thin, extra-crunchy coating with chopped red onion, parsley and Mayo Majo's sauce.",
    tag: "7 CRUNCHY PIECES",
    footerLeft: "7 CRISPY WINGS",
    footerRight: "With Mayo Majo's",
  },
  "aros-cebolla": {
    description:
      "Onion rings, soft and sweet inside, golden and crispy outside. Served with Mr. Majo's BBQ dip.",
    tag: "XXL RINGS",
    footerLeft: "XXL CRISPY RINGS",
    footerRight: "Homemade BBQ Dip",
  },
  "sweet-potatoes": {
    description:
      "Thin, extra-sweet fried sweet potato with a pinch of flaky sea salt, the perfect contrast to your smash burger.",
    tag: "FRIED SWEET POTATO",
    footerLeft: "GENEROUS PORTION",
    footerRight: "Flaky Sea Salt",
  },

  // veggie & kids
  "veggie-baby": {
    description:
      "Seasoned plant-based patty, melted Gouda, caramelized onion, tomato, Batavia lettuce and Mayo Majo's.",
  },
  "veggie-orale": {
    description:
      "Plant-based patty, melted cheese, homemade rustic guacamole, spicy chipotle sauce and fresh lettuce.",
  },
  "kids-carne": {
    description:
      "Mild 90g beef smash, melted cheddar, double crispy bacon and mild mayo.",
    tag: "KIDS MENU 👶",
  },
  "kids-pollo": {
    description:
      "Super crunchy breaded chicken, melted cheddar, double crispy bacon and mild mayo.",
    tag: "KIDS MENU 👶",
  },

  // postres
  "nute-teques": {
    description:
      "Sweet tequeños filled with piping-hot Nutella that bursts in your mouth, drizzled with chocolate syrup and dusted with icing sugar.",
    footerLeft: "NUTELLA EXPLOSION",
    footerRight: "4 Sweet Sticks",
  },
  "choko-majos": {
    description:
      "Homemade dark chocolate cake with a crunchy golden biscuit base and a fine dusting of pure cocoa.",
    footerLeft: "PURE DARK CHOCOLATE",
    footerRight: "Made Fresh Daily",
  },

  // bebidas
  "mahou-5-estrellas": {
    description: "Poured with the perfect pressure into an ice-cold glass.",
    tag: "DRAFT BEER",
    footerLeft: "Cold on Tap",
  },
  "jarra-mahou": {
    description: "Half a litre of ice-cold beer to go with your smash.",
    tag: "ICE-COLD PINT",
    footerLeft: "500ml Double Pour",
  },
  "alhambra-corona": {
    description: "Alhambra Reserva 1925, Corona with lime and gluten-free Mahou 0.0%.",
    tag: "BOTTLED SELECTION",
    footerLeft: "33cl Bottle",
  },
  "refrescos-agua": {
    description: "Coca-Cola Zero/Original, Fanta Orange, Nestea, Aquarius and mineral water.",
    tag: "SOFT DRINKS",
    footerLeft: "350ml Glass Bottle",
  },
  "margaritas-frozen": {
    description:
      "Reposado 100% agave tequila, fresh lime juice and frappé ice. Classic, strawberry or mango. Super refreshing and addictive!",
    priceSuffix: "/ glass",
    tag: "PROMO 2 FOR 12,90€",
    footerLeft: "Single glass 7,90€ • Promo 2 glasses for just 12,90€",
  },
  cubatas: {
    description:
      "Gin & Tonic (Seagram's / Beefeater), Rum & Cola (Barceló / Santa Teresa), Whisky (Red Label / Jameson) or Vodka with your choice of mixer.",
    tag: "SPIRITS & MIXERS",
    footerLeft: "Premium Brands",
  },
};

export const TOPPINGS_EN: Record<string, string> = {
  "smash-extra": "Extra Smash 90g",
  "vaca-madurada": "30D Dry-Aged Beef",
  "pollo-crujiente": "Crispy Chicken",
  "doble-bacon": "Double Crispy Bacon",
  "huevo-granja": "Farm Egg",
  "pulled-pork": "Homemade Pulled Pork",
  guacamole: "Rustic Guacamole",
  "rulo-cabra": "Goat Cheese",
  "mayo-majos": "Mayo Majo's",
  "salsa-trufa": "Secret Truffle Sauce",
  "salsa-chipotle": "Chipotle Sauce",
  "pan-sin-gluten": "Gluten-Free Bun",
};
