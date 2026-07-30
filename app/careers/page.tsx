import type { Metadata } from "next";
import { MarketingPage, PageCta } from "../marketing-page";
import { projects } from "../site-data";
import { staticPageMetadata } from "../seo";

export const metadata: Metadata = staticPageMetadata(
  "Architecture Careers Canberra",
  "Explore architecture, planning, interiors and heritage career opportunities with Hyperspace Architecture in central Canberra.",
  "/careers",
  projects[20].image,
);

const benefits = [
  "A creative environment where architects can design and run projects",
  "Mentoring, training and support toward architectural registration",
  "Current design, documentation and visualisation software",
  "Part-time, internship and job-share arrangements where suitable",
  "Regular site visits and practical project-delivery experience",
  "Award-aligned salaries, leave and a five-day working week",
  "A central Braddon studio close to transport, cafés and the city",
  "A diverse, equal-opportunity workplace with regular studio events",
];

export default function CareersPage() {
  return (
    <MarketingPage
      eyebrow="Careers"
      title="Do ambitious work. Learn every part of practice."
      intro="We value diversity, curiosity and people who want to understand projects from the first planning question through to the reality of site."
      image={projects[20].image}
      imageAlt="Hyperspace Architecture community project in Canberra"
    >
      <section className="page-section wrap split-copy">
        <div>
          <p className="eyebrow">Working here</p>
          <h2>A small studio with broad opportunities.</h2>
        </div>
        <div className="body-copy">
          <p>
            Our team works across architecture, planning, interiors, heritage
            and technical delivery. Team members are encouraged to contribute
            ideas, take ownership and build confidence with clients,
            consultants, authorities and site.
          </p>
          <p>
            We employ people across different regions and cultural backgrounds,
            and believe that varied experience makes both the work and the
            studio stronger.
          </p>
        </div>
      </section>
      <section className="page-section page-section-tint wrap">
        <p className="eyebrow">Studio benefits</p>
        <ul className="feature-list">
          {benefits.map((benefit, index) => (
            <li key={benefit}>
              <span>{String(index + 1).padStart(2, "0")}</span>
              <p>{benefit}</p>
            </li>
          ))}
        </ul>
      </section>
      <PageCta
        title="Interested in joining Hyperspace?"
        link="mailto:contact@hyper-space.com.au?subject=Careers%20at%20Hyperspace"
        label="Send your CV and portfolio ↗"
      />
    </MarketingPage>
  );
}
