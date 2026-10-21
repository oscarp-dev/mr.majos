// Datos del titular de la web para las páginas legales (aviso legal,
// privacidad, cookies). Lo que va entre [CORCHETES] está pendiente: la web lo
// muestra resaltado hasta que se rellene. Revisarlo con quien lleve la gestoría.

export const BUSINESS = {
  /** Nombre comercial. */
  brand: "Mr. Majo's",
  /** Razón social de la sociedad o nombre y apellidos del autónomo. */
  legalName: "[RAZÓN SOCIAL]",
  /** NIF / CIF. */
  taxId: "[NIF/CIF]",
  address: "Calle Bazán, 45, 03001 Alicante (España)",
  email: "[EMAIL DE CONTACTO]",
  phone: "[TELÉFONO]",
  /** Solo sociedades: "Registro Mercantil de Alicante, Tomo X, Folio X, Hoja A-X". */
  registry: "[DATOS DEL REGISTRO MERCANTIL, si es sociedad]",
  /** Empresa donde está alojada la web (p. ej. Vercel Inc.). */
  hosting: "[PROVEEDOR DE HOSTING]",
} as const;
