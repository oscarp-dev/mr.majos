"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { cn } from "cn";

const DEFAULT_PHOTOS = [
  "/images/foto-burger-mano-1.jpg",
  "/images/foto-burger-mano-2.jpg",
  "/images/foto-burger-mano-3.jpg",
  "/images/hero-sugarmommy-burger.jpg",
  "/images/foto-hotdog-mordida.jpg",
];

type GameBoyPhotoScreenProps = {
  photos?: string[];
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
      {photos.map((src, i) => (
        <Image
          key={src}
          src={src}
          alt=""
          fill
          sizes="220px"
          className={cn(
            "object-cover transition-opacity duration-700 ease-in-out",
            i === index ? "opacity-100" : "opacity-0"
          )}
        />
      ))}
    </div>
  );
}
