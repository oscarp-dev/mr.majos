// Majo's Levels: sellos para cada nivel. El texto de cada uno (descuento) está
// en messages.club.perks, en el mismo orden.
export const CLUB_TIERS = [
  { name: "Foodie", stamps: 1 },
  { name: "Burger Lover", stamps: 15 },
  { name: "Burger Master", stamps: 30 },
  { name: "Food P*rn VIP", stamps: 50 },
] as const;

// Alta en el Majo's Club (tarjeta de fidelidad en Comeback).
export const CLUB_SIGNUP_URL = "https://signup.comeback.es/58970f74/mr.-majo%C2%B4s/createCustomer";

export const SOCIAL_LINKS = [
  { label: "Instagram", href: "https://instagram.com/mr_majos" },
  { label: "TikTok", href: "https://tiktok.com/@mr_majos" },
] as const;

// Menú del día: días (getDay(): 0 = domingo) y franja en hora de Madrid.
// Los textos (días abreviados, qué incluye) están en messages.menuDelDia.
export const MENU_DEL_DIA = {
  price: "13,70€",
  days: [5, 6, 0],
  from: "13:00",
  to: "16:30",
} as const;

// Horario del local, agrupando días con la misma franja (getDay(): 0 = domingo).
// El nombre de cada grupo está en messages.order.hoursDays, en el mismo orden.
// El sábado cierra pasada la medianoche (00:15).
export const OPENING_HOURS: { days: number[]; slots: [opens: string, closes: string][] }[] = [
  { days: [1, 2, 3], slots: [["19:30", "23:45"]] },
  { days: [4, 5, 0], slots: [["13:00", "16:30"], ["19:30", "23:45"]] },
  { days: [6], slots: [["13:00", "00:15"]] },
];

// Plataformas de pedido online y reservas.
export const ORDER_LINKS = {
  glovo: "https://glovoapp.com/es/es/alicante/stores/mr-majos-alicante",
  uberEats: "https://www.ubereats.com/es/store/mr-majos/Y9d4SoQ5SZOJA7wNb9DG4Q",
  // módulo de reservas de CoverManager
  reservas: "https://www.covermanager.com/reservation/module_restaurant/restaurante-mr-majos/spanish",
} as const;
