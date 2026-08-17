"use client";

import { useEffect, useState } from "react";

type HeroImage = { src: string; alt: string };

export function HeroCarousel({ images }: { images: HeroImage[] }) {
  const [active, setActive] = useState(0);

  useEffect(() => {
    if (images.length < 2) return;
    const timer = window.setInterval(
      () => setActive((current) => (current + 1) % images.length),
      5200,
    );
    return () => window.clearInterval(timer);
  }, [images.length]);

  return (
    <div className="hero-carousel" aria-label="Hyperspace project imagery">
      {images.map((image, index) => (
        <img
          key={image.src}
          className={index === active ? "is-active" : ""}
          src={image.src}
          alt={image.alt}
          aria-hidden={index === active ? undefined : true}
        />
      ))}
    </div>
  );
}
