// Las ventajas de cada nivel, en el idioma de la página: messages.club.perks.
export const CLUB_TIERS = [
  { name: "Foodie", stamps: "1+" },
  { name: "Burger Lover", stamps: "15+" },
  { name: "Burger Master", stamps: "30+" },
  { name: "Food P*rn VIP", stamps: "50+" },
] as const;

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

// Plataformas de pedido online y reservas.
export const ORDER_LINKS = {
  glovo: "https://glovoapp.com/es/es/alicante/stores/mr-majos-alicante",
  uberEats: "https://www.ubereats.com/es/store/mr-majos/Y9d4SoQ5SZOJA7wNb9DG4Q",
  // TODO: pegar aquí el enlace del módulo de reservas de CoverManager, p. ej.
  // https://www.covermanager.com/reserve/module_restaurant/restaurante-mr-majos/spanish
  reservas: "#reservar",
} as const;
