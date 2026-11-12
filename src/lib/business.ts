// Datos del titular de la web para las páginas legales (aviso legal,
// privacidad, cookies). Lo que va entre [CORCHETES] está pendiente: la web lo
// muestra resaltado hasta que se rellene. Revisarlo con quien lleve la gestoría.

export const BUSINESS = {
  /** Nombre comercial. */
  brand: "Mr. Majo's",
  /** Razón social de la sociedad o nombre y apellidos del autónomo. */
  legalName: "Richard Luciany Angulo Archila",
  /** NIF / CIF. */
  taxId: "60549016K",
  address: "Calle Bazán, 45, 03001 Alicante (España)",
  email: "majosgrill.info@gmail.com",
  /** Tal cual se muestra en la web. */
  phone: "722 77 51 24",
  /** Para enlaces tel: y datos estructurados. */
  phoneIntl: "+34722775124",
  /** Empresa donde está alojada la web. */
  hosting: "Vercel Inc.",
} as const;
