"use client";

import { useEffect, useMemo, useState } from "react";

type HeroImage = { src: string; alt: string };

type HeroSlide =
  | { kind: "image"; src: string; alt: string }
  | { kind: "statement"; label: string; title: string; body: string };

const statements: HeroSlide[] = [
  {
    kind: "statement",
    label: "Hyperspace Architecture",
    title: "Architecture is happiness by design.",
    body: "Created for people. Experienced by all.",
  },
  {
    kind: "statement",
    label: "Hyperspace Architecture",
    title: "Place. People. Climate. Culture.",
    body: "Contextual urbanism begins with place: responding thoughtfully to its people, climate and culture.",
  },
  {
    kind: "statement",
    label: "Hyperspace Architecture",
    title: "Beyond disciplines. Towards Hyperspace.",
    body: "We connect architecture, planning, interiors and heritage to unlock each project's full potential.",
  },
];

export function HeroCarousel({ images }: { images: HeroImage[] }) {
  const [active, setActive] = useState(0);
  const slides = useMemo<HeroSlide[]>(
    () => [
      ...(images[0] ? [{ kind: "image" as const, src: images[0].src, alt: images[0].alt }] : []),
      ...statements,
      ...(images[1] ? [{ kind: "image" as const, src: images[1].src, alt: images[1].alt }] : []),
    ],
    [images],
  );

  useEffect(() => {
    if (slides.length < 2) return;
    const timer = window.setInterval(
      () => setActive((current) => (current + 1) % slides.length),
      5200,
    );
    return () => window.clearInterval(timer);
  }, [slides.length]);

  return (
    <div className="hero-carousel" aria-label="Hyperspace Architecture introduction">
      {slides.map((slide, index) =>
        slide.kind === "image" ? (
          <img
            key={`image-${slide.src}`}
            className={index === active ? "is-active" : ""}
            src={slide.src}
            alt={slide.alt}
            aria-hidden={index === active ? undefined : true}
          />
        ) : (
          <div
            key={`statement-${slide.title}`}
            className={`hero-statement-slide ${index === active ? "is-active" : ""}`}
            aria-hidden={index === active ? undefined : true}
          >
            <p>{slide.label}</p>
            <h2>{slide.title}</h2>
            <span>{slide.body}</span>
          </div>
        ),
      )}
    </div>
  );
}
