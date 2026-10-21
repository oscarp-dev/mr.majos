import type { Locale } from "@/i18n/config";
import { BUSINESS as B } from "./business";

// Textos legales en los dos idiomas. Plantilla razonable para un restaurante
// en España (LSSI-CE, RGPD, LOPDGDD, guía de cookies de la AEPD): no sustituye
// la revisión de un profesional. Si se añade analítica o cualquier cookie
// nueva, hay que listarla en la política de cookies.

export const LEGAL_UPDATED = { es: "20 de octubre de 2026", en: "20 October 2026" } as const;

export type LegalDocId = "aviso-legal" | "privacidad" | "cookies";

type Table = { head: string[]; rows: string[][] };
export type LegalBlock = string | { table: Table };
export type LegalSection = { heading: string; blocks: LegalBlock[] };
export type LegalDoc = { title: string; intro: string; sections: LegalSection[] };

const COOKIE_TABLE: Record<Locale, Table> = {
  es: {
    head: ["Cookie", "Tipo", "Para qué sirve", "Duración"],
    rows: [
      ["mm_lang", "Propia · técnica", "Recordar el idioma que has elegido.", "1 año"],
      ["mm_consent", "Propia · técnica", "Guardar tu elección sobre las cookies.", "1 año"],
    ],
  },
  en: {
    head: ["Cookie", "Type", "What it does", "Duration"],
    rows: [
      ["mm_lang", "First-party · essential", "Remembers the language you chose.", "1 year"],
      ["mm_consent", "First-party · essential", "Stores your cookie choice.", "1 year"],
    ],
  },
};

const DOCS: Record<Locale, Record<LegalDocId, LegalDoc>> = {
  es: {
    "aviso-legal": {
      title: "Aviso legal",
      intro:
        "En cumplimiento de la Ley 34/2002, de Servicios de la Sociedad de la Información y de Comercio Electrónico (LSSI-CE), te contamos quién está detrás de esta web y las condiciones para usarla.",
      sections: [
        {
          heading: "1. Quiénes somos",
          blocks: [
            `Titular: ${B.legalName}, que opera con el nombre comercial ${B.brand}.`,
            `NIF/CIF: ${B.taxId}.`,
            `Domicilio: ${B.address}.`,
            `Email: ${B.email} · Teléfono: ${B.phone}.`,
            `Datos registrales: ${B.registry}.`,
          ],
        },
        {
          heading: "2. Para qué es esta web",
          blocks: [
            "Esta web da a conocer el restaurante, su carta, sus promociones y la forma de contactarnos. Los pedidos a domicilio y las reservas no se hacen aquí: te llevamos a plataformas de terceros (Glovo, Uber Eats y nuestro sistema de reservas), que tienen sus propias condiciones.",
          ],
        },
        {
          heading: "3. Uso de la web",
          blocks: [
            "Al navegar por la web aceptas usarla de forma lícita, sin dañarla ni impedir que otros la usen y sin utilizar sus contenidos con fines ilícitos.",
          ],
        },
        {
          heading: "4. Carta, precios y promociones",
          blocks: [
            "Los precios se muestran en euros con IVA incluido y pueden cambiar sin previo aviso; manda siempre el precio vigente en el local o en la plataforma de pedido.",
            "Las promociones se aplican en las condiciones que se indican en cada una (por ejemplo, días, horarios o solo para consumir en el local) y mientras estén publicadas.",
            "Las fotos de los platos son orientativas.",
            "Alérgenos: tenemos a tu disposición la información de los 14 alérgenos de cada plato (Reglamento (UE) 1169/2011). Pregúntanos antes de pedir.",
          ],
        },
        {
          heading: "5. Propiedad intelectual e industrial",
          blocks: [
            `La marca ${B.brand}, los logotipos, las fotografías, los textos y el diseño de esta web pertenecen a su titular o se usan con permiso. No se pueden copiar, distribuir ni modificar sin autorización expresa.`,
          ],
        },
        {
          heading: "6. Enlaces a otras webs",
          blocks: [
            "La web enlaza a servicios de terceros (Glovo, Uber Eats, el sistema de reservas, Instagram, TikTok y Google Maps). No controlamos esos sitios ni somos responsables de sus contenidos ni de cómo tratan tus datos: consulta sus condiciones y políticas de privacidad.",
          ],
        },
        {
          heading: "7. Responsabilidad",
          blocks: [
            "Hacemos lo posible para que la información esté al día y la web funcione bien, pero no podemos garantizar que esté libre de errores o interrupciones, ni responder de los daños que se deriven de ellos cuando no dependan de nosotros.",
          ],
        },
        {
          heading: "8. Ley aplicable",
          blocks: [
            "Este aviso legal se rige por la ley española. Si eres consumidor, para cualquier conflicto serán competentes los juzgados y tribunales de tu domicilio.",
          ],
        },
      ],
    },
    privacidad: {
      title: "Política de privacidad",
      intro:
        "Aquí te explicamos qué datos personales tratamos, para qué y qué derechos tienes, según el Reglamento General de Protección de Datos (RGPD) y la Ley Orgánica 3/2018 (LOPDGDD).",
      sections: [
        {
          heading: "1. Responsable",
          blocks: [
            `${B.legalName} (${B.brand}), NIF/CIF ${B.taxId}, con domicilio en ${B.address}. Puedes escribirnos a ${B.email}.`,
          ],
        },
        {
          heading: "2. Qué datos tratamos",
          blocks: [
            "Esta web no tiene formularios, registro ni cuentas de usuario, y no te pide datos personales.",
            "Solo usa dos cookies técnicas propias, para recordar tu idioma y tu elección sobre las cookies. Las detallamos en la política de cookies.",
            "Si nos escribes por email, por teléfono o por redes sociales, trataremos los datos que nos des (nombre, contacto y el mensaje) para responderte.",
            "Majo's Club: si te unes al programa de fidelidad, trataremos los datos que nos facilites para gestionar tus sellos y descuentos. [REVISAR: qué datos se piden al apuntarse al club y dónde se guardan]",
          ],
        },
        {
          heading: "3. Para qué y con qué base legal",
          blocks: [
            "Responder a tus consultas: tu consentimiento al contactarnos y nuestro interés legítimo en atenderte.",
            "Gestionar el Majo's Club: la relación que aceptas al unirte.",
            "Cumplir obligaciones legales (por ejemplo, fiscales o contables) cuando corresponda.",
          ],
        },
        {
          heading: "4. Pedidos y reservas",
          blocks: [
            "Los pedidos se hacen en Glovo o Uber Eats, y las reservas en nuestro sistema de reservas externo. Esas plataformas tratan tus datos según sus propias políticas de privacidad; nosotros solo recibimos lo necesario para preparar tu pedido o tu mesa.",
          ],
        },
        {
          heading: "5. Cuánto tiempo los guardamos",
          blocks: [
            "Lo necesario para la finalidad para la que nos los diste y, después, el tiempo que marque la ley para atender posibles responsabilidades.",
          ],
        },
        {
          heading: "6. Con quién los compartimos",
          blocks: [
            `No vendemos ni cedemos tus datos a terceros, salvo obligación legal. La web está alojada en ${B.hosting}, que actúa como encargado del tratamiento. Si algún proveedor trata datos fuera del Espacio Económico Europeo, lo hace con las garantías que exige el RGPD (como las cláusulas contractuales tipo de la Comisión Europea).`,
          ],
        },
        {
          heading: "7. Tus derechos",
          blocks: [
            `Puedes pedir acceso, rectificación, supresión, oposición, limitación del tratamiento y portabilidad de tus datos, y retirar tu consentimiento en cualquier momento, escribiendo a ${B.email}.`,
            "Si crees que no hemos tratado bien tus datos, puedes reclamar ante la Agencia Española de Protección de Datos (www.aepd.es).",
          ],
        },
      ],
    },
    cookies: {
      title: "Política de cookies",
      intro:
        "Las cookies son pequeños archivos que una web guarda en tu navegador. Aquí te contamos cuáles usamos y cómo controlarlas.",
      sections: [
        {
          heading: "1. Cookies que usamos",
          blocks: [
            "Solo usamos cookies propias y técnicas, necesarias para que la web funcione como esperas. Por eso están exentas de consentimiento (artículo 22.2 de la LSSI-CE), aunque te las contamos igual:",
            { table: COOKIE_TABLE.es },
          ],
        },
        {
          heading: "2. Cookies de análisis y de terceros",
          blocks: [
            "Ahora mismo no usamos cookies de análisis, publicidad ni de terceros. Si algún día las añadimos, aparecerán en esta lista y solo se activarán si las aceptas en el aviso de cookies.",
            "Las webs a las que enlazamos (Instagram, TikTok, Glovo, Uber Eats, Google Maps o el sistema de reservas) pueden usar sus propias cookies cuando las visitas; consulta sus políticas.",
          ],
        },
        {
          heading: "3. Cómo gestionarlas",
          blocks: [
            "Puedes cambiar tu elección cuando quieras desde «Configurar cookies», al pie de cada página.",
            "También puedes borrar o bloquear las cookies desde la configuración de tu navegador (Chrome, Safari, Firefox, Edge…). Si bloqueas las técnicas, la web no podrá recordar tu idioma.",
          ],
        },
      ],
    },
  },
  en: {
    "aviso-legal": {
      title: "Legal notice",
      intro:
        "In compliance with Spanish Law 34/2002 on Information Society Services and E-commerce (LSSI-CE), here is who runs this website and the terms for using it.",
      sections: [
        {
          heading: "1. Who we are",
          blocks: [
            `Owner: ${B.legalName}, trading as ${B.brand}.`,
            `Tax ID (NIF/CIF): ${B.taxId}.`,
            `Address: ${B.address}.`,
            `Email: ${B.email} · Phone: ${B.phone}.`,
            `Registry details: ${B.registry}.`,
          ],
        },
        {
          heading: "2. What this website is for",
          blocks: [
            "This website showcases the restaurant, its menu, its promotions and how to get in touch. Delivery orders and bookings are not made here: we send you to third-party platforms (Glovo, Uber Eats and our booking system), which have their own terms.",
          ],
        },
        {
          heading: "3. Using the website",
          blocks: [
            "By browsing this website you agree to use it lawfully, without damaging it or preventing others from using it, and without using its content for unlawful purposes.",
          ],
        },
        {
          heading: "4. Menu, prices and promotions",
          blocks: [
            "Prices are shown in euros, VAT included, and may change without notice; the price in force at the restaurant or on the ordering platform always applies.",
            "Promotions apply under the conditions stated for each one (for example days, times or dine-in only) and while they are published.",
            "Dish photos are for illustration only.",
            "Allergens: information on the 14 allergens for every dish is available on request (Regulation (EU) 1169/2011). Please ask us before ordering.",
          ],
        },
        {
          heading: "5. Intellectual and industrial property",
          blocks: [
            `The ${B.brand} brand, logos, photos, texts and the design of this website belong to its owner or are used with permission. They may not be copied, distributed or modified without express authorisation.`,
          ],
        },
        {
          heading: "6. Links to other websites",
          blocks: [
            "This website links to third-party services (Glovo, Uber Eats, the booking system, Instagram, TikTok and Google Maps). We don't control those sites and are not responsible for their content or for how they handle your data: please check their terms and privacy policies.",
          ],
        },
        {
          heading: "7. Liability",
          blocks: [
            "We do our best to keep the information up to date and the website working properly, but we cannot guarantee it is free of errors or interruptions, nor accept liability for damage arising from them when it is beyond our control.",
          ],
        },
        {
          heading: "8. Governing law",
          blocks: [
            "This legal notice is governed by Spanish law. If you are a consumer, the courts of your place of residence will have jurisdiction over any dispute.",
          ],
        },
      ],
    },
    privacidad: {
      title: "Privacy policy",
      intro:
        "Here we explain what personal data we process, why, and what rights you have, under the General Data Protection Regulation (GDPR) and Spanish Organic Law 3/2018 (LOPDGDD).",
      sections: [
        {
          heading: "1. Data controller",
          blocks: [
            `${B.legalName} (${B.brand}), tax ID ${B.taxId}, registered at ${B.address}. You can write to us at ${B.email}.`,
          ],
        },
        {
          heading: "2. What data we process",
          blocks: [
            "This website has no forms, sign-up or user accounts, and does not ask you for personal data.",
            "It only uses two essential first-party cookies, to remember your language and your cookie choice. They are listed in the cookie policy.",
            "If you contact us by email, phone or social media, we will process the data you give us (name, contact details and your message) to reply to you.",
            "Majo's Club: if you join the loyalty programme, we will process the data you provide to manage your stamps and discounts. [REVISAR: qué datos se piden al apuntarse al club y dónde se guardan]",
          ],
        },
        {
          heading: "3. Purposes and legal basis",
          blocks: [
            "Answering your enquiries: your consent when you contact us and our legitimate interest in helping you.",
            "Running the Majo's Club: the relationship you accept when you join.",
            "Meeting legal obligations (for example tax or accounting) where applicable.",
          ],
        },
        {
          heading: "4. Orders and bookings",
          blocks: [
            "Orders are placed on Glovo or Uber Eats, and bookings on our external booking system. Those platforms process your data under their own privacy policies; we only receive what we need to prepare your order or your table.",
          ],
        },
        {
          heading: "5. How long we keep it",
          blocks: [
            "For as long as needed for the purpose you gave it to us for and, after that, for the period required by law to deal with any possible liabilities.",
          ],
        },
        {
          heading: "6. Who we share it with",
          blocks: [
            `We don't sell or pass on your data to third parties, unless required by law. This website is hosted by ${B.hosting}, acting as data processor. If any provider processes data outside the European Economic Area, it does so with the safeguards required by the GDPR (such as the European Commission's standard contractual clauses).`,
          ],
        },
        {
          heading: "7. Your rights",
          blocks: [
            `You can request access, rectification, erasure, objection, restriction of processing and portability of your data, and withdraw your consent at any time, by writing to ${B.email}.`,
            "If you think we have not handled your data properly, you can lodge a complaint with the Spanish Data Protection Agency (www.aepd.es).",
          ],
        },
      ],
    },
    cookies: {
      title: "Cookie policy",
      intro:
        "Cookies are small files a website stores in your browser. Here is which ones we use and how to control them.",
      sections: [
        {
          heading: "1. Cookies we use",
          blocks: [
            "We only use essential first-party cookies, needed for the website to work as you expect. That makes them exempt from consent (article 22.2 of the LSSI-CE), but we list them anyway:",
            { table: COOKIE_TABLE.en },
          ],
        },
        {
          heading: "2. Analytics and third-party cookies",
          blocks: [
            "We currently use no analytics, advertising or third-party cookies. If we ever add any, they will appear in this list and will only be enabled if you accept them in the cookie notice.",
            "The websites we link to (Instagram, TikTok, Glovo, Uber Eats, Google Maps or the booking system) may set their own cookies when you visit them; please check their policies.",
          ],
        },
        {
          heading: "3. How to manage them",
          blocks: [
            "You can change your choice at any time from “Cookie settings” at the bottom of every page.",
            "You can also delete or block cookies in your browser settings (Chrome, Safari, Firefox, Edge…). If you block the essential ones, the website won't be able to remember your language.",
          ],
        },
      ],
    },
  },
};

export const getLegalDoc = (lang: Locale, id: LegalDocId): LegalDoc => DOCS[lang][id];
