import type { ReactNode } from "react";
import { SiteFooter, SiteHeader } from "./site-components";

export function MarketingPage({
  eyebrow,
  title,
  intro,
  image,
  imageAlt,
  children,
}: {
  eyebrow: string;
  title: string;
  intro: string;
  image: string;
  imageAlt: string;
  children: ReactNode;
}) {
  return (
    <main>
      <SiteHeader />
      <section className="page-hero wrap">
        <div className="page-hero-copy">
          <p className="eyebrow">{eyebrow}</p>
          <h1>{title}</h1>
          <p>{intro}</p>
        </div>
        <div className="page-hero-image">
          <img src={image} alt={imageAlt} />
        </div>
      </section>
      <div className="page-content">{children}</div>
      <SiteFooter />
    </main>
  );
}

export function PageCta({
  title = "Have a project in mind?",
  link = "/contact",
  label = "Start a conversation ↗",
}: {
  title?: string;
  link?: string;
  label?: string;
}) {
  return (
    <section className="page-cta">
      <p className="eyebrow">Hyperspace Architecture</p>
      <h2>{title}</h2>
      <a href={link}>{label}</a>
    </section>
  );
}
