export const NAV_LINKS = [
  { label: "Menú", href: "/#menu" },
  { label: "About Us", href: "/#about" },
  { label: "Pedir", href: "/#order" },
] as const;

export const CLUB_TIERS = [
  { name: "Foodie", stamps: "1+", perk: "Estás dentro. Bienvenido a la banda." },
  { name: "Burger Lover", stamps: "15+", perk: "5% de descuento en todos tus pedidos." },
  { name: "Burger Master", stamps: "30+", perk: "10% de descuento en todos tus pedidos." },
  { name: "Food P*rn VIP", stamps: "50+", perk: "15% de descuento en todos tus pedidos." },
] as const;

export const SOCIAL_LINKS = [
  { label: "Instagram", href: "https://instagram.com/mr_majos" },
  { label: "TikTok", href: "https://tiktok.com/@mr_majos" },
] as const;

// Plataformas de pedido online y reservas.
export const ORDER_LINKS = {
  glovo: "https://glovoapp.com/es/es/alicante/stores/mr-majos-alicante",
  uberEats: "https://www.ubereats.com/es/store/mr-majos/Y9d4SoQ5SZOJA7wNb9DG4Q",
  // TODO: pegar aquí el enlace del módulo de reservas de CoverManager, p. ej.
  // https://www.covermanager.com/reserve/module_restaurant/restaurante-mr-majos/spanish
  reservas: "#reservar",
} as const;
