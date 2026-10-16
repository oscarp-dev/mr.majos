"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { cn } from "cn";

export type GameBoyPhoto = { src: string; position?: string };

// Pantalla pequeña y casi cuadrada: primeros planos que se lean de un vistazo,
// con el encuadre centrado en la cara o el plato.
const DEFAULT_PHOTOS: GameBoyPhoto[] = [
  { src: "/images/instagram/yankee-gorra.webp", position: "center 45%" },
  { src: "/images/instagram/americano-mordisco.webp", position: "center 40%" },
  { src: "/images/instagram/bano-de-queso.webp", position: "center 62%" },
  { src: "/images/lifestyle-pareja-coche-amarillo.webp", position: "center 40%" },
  { src: "/images/instagram/burger-dos-manos.webp", position: "center 68%" },
  { src: "/images/foto-burger-plato.webp", position: "center 45%" },
  { src: "/images/instagram/nutella-chorreando.webp", position: "center 55%" },
];

type GameBoyPhotoScreenProps = {
  photos?: GameBoyPhoto[];
  interval?: number;
};

// Coordenadas del hueco transparente de la pantalla dentro del viewBox
// cuadrado del SVG (measured: x 466-791, y 210-497 sobre 1200x1200).
export function GameBoyPhotoScreen({
  photos = DEFAULT_PHOTOS,
  interval = 2600,
}: GameBoyPhotoScreenProps) {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    if (photos.length < 2) return;
    const id = setInterval(() => {
      setIndex((i) => (i + 1) % photos.length);
    }, interval);
    return () => clearInterval(id);
  }, [photos.length, interval]);

  return (
    <div
      className="absolute overflow-hidden bg-mr-black"
      style={{ left: "38.8%", top: "17.5%", width: "27.1%", height: "23.9%" }}
    >
      {photos.map(({ src, position }, i) => (
        <Image
          key={src}
          src={src}
          alt=""
          fill
          sizes="220px"
          loading={i === 0 ? "eager" : "lazy"}
          className={cn(
            "object-cover transition-opacity duration-700 ease-in-out",
            i === index ? "opacity-100" : "opacity-0"
          )}
          style={{ objectPosition: position }}
        />
      ))}
    </div>
  );
}
