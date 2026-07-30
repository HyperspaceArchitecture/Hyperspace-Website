import type { Metadata } from "next";
import { MarketingPage } from "../marketing-page";
import { projects } from "../site-data";
import { staticPageMetadata } from "../seo";

export const metadata: Metadata = staticPageMetadata(
  "Contact Hyperspace Architecture",
  "Contact Hyperspace Architecture in Braddon, Canberra for residential, commercial, multi-dwelling, interiors, heritage and planning projects.",
  "/contact",
  projects[0].image,
);

export default function ContactPage() {
  return (
    <MarketingPage
      eyebrow="Contact"
      title="Tell us what you are planning."
      intro="A site, an existing building, an early idea or a difficult approval—we can help define the right next step."
      image={projects[0].image}
      imageAlt="Shangrila Retreat by Hyperspace Architecture near Canberra"
    >
      <section className="page-section wrap contact-grid">
        <div>
          <p className="eyebrow">Studio</p>
          <h2>G26 / 55 Currong Street North<br />Braddon ACT 2612</h2>
          <a
            className="text-link"
            href="https://maps.google.com/?q=G26%2F55+Currong+Street+North+Braddon+ACT+2612"
            target="_blank"
            rel="noreferrer"
          >
            Open in Google Maps ↗
          </a>
        </div>
        <div className="contact-actions">
          <a href="tel:+61290710499">
            <span>Phone</span>
            <strong>02 9071 0499</strong>
          </a>
          <a href="mailto:contact@hyper-space.com.au">
            <span>General enquiries</span>
            <strong>contact@hyper-space.com.au</strong>
          </a>
          <a href="mailto:vishal@hyper-space.com.au">
            <span>Director</span>
            <strong>vishal@hyper-space.com.au</strong>
          </a>
        </div>
      </section>
      <section className="page-cta contact-cta">
        <p className="eyebrow">New project enquiry</p>
        <h2>Include the site address, project type and what you would like to achieve.</h2>
        <a href="mailto:contact@hyper-space.com.au?subject=New%20project%20enquiry">
          Email the studio ↗
        </a>
      </section>
    </MarketingPage>
  );
}
