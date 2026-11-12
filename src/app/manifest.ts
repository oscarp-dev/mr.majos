import type { MetadataRoute } from "next";

// Para "Añadir a pantalla de inicio" en Android y para el icono que muestra Google.
export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Mr. Majo's — Hamburguesería en Alicante",
    short_name: "Mr. Majo's",
    description: "Smash burgers, hot dogs y una adicción total en Calle Bazán, 45 (Alicante).",
    start_url: "/",
    display: "standalone",
    background_color: "#0a0a0a",
    theme_color: "#0a0a0a",
    lang: "es",
    icons: [
      { src: "/icons/icon-192.png", sizes: "192x192", type: "image/png" },
      { src: "/icons/icon-512.png", sizes: "512x512", type: "image/png" },
      { src: "/icons/icon-maskable-512.png", sizes: "512x512", type: "image/png", purpose: "maskable" },
    ],
  };
}
