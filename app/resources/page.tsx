import type { Metadata } from "next";
import { MarketingPage, PageCta } from "../marketing-page";
import { disciplines } from "../site-data";
import { staticPageMetadata } from "../seo";

export const metadata: Metadata = staticPageMetadata(
  "Architecture & Planning Resources Canberra",
  "Trusted resources for development applications, architects, planning approvals, renovation, builders and sustainable design in Canberra and ACT.",
  "/resources",
  disciplines.planning.hero,
);

const resources = [
  {
    title: "Do I need a Development Application in Canberra?",
    copy: "Start with the ACT Government guidance on development applications, required documents and the approvals pathway.",
    href: "https://www.planning.act.gov.au/",
  },
  {
    title: "How do I check whether an architect is registered?",
    copy: "Use the ACT register to confirm that the person or practice providing architectural services is appropriately registered.",
    href: "https://www.data.act.gov.au/",
  },
  {
    title: "How can I view or comment on a Development Application?",
    copy: "The ACT planning portal provides current application information and the formal process for public comments.",
    href: "https://www.planning.act.gov.au/",
  },
  {
    title: "How should I plan a home renovation?",
    copy: "Clarify the brief, budget, site constraints, design direction and approvals pathway before selecting a builder.",
    href: "/residential",
  },
  {
    title: "How do I check a Canberra builder?",
    copy: "Review the builder’s licence, insurance, experience and references, and seek advice from your architect before appointment.",
    href: "https://services.accesscanberra.act.gov.au/",
  },
  {
    title: "How can I make my project more sustainable?",
    copy: "Orientation, passive solar design, insulation, airtightness, glazing, shading, electrification and material selection should be considered together.",
    href: "/residential",
  },
];

export default function ResourcesPage() {
  return (
    <MarketingPage
      eyebrow="Resources"
      title="Useful starting points."
      intro="Clear, trusted information for planning an architectural, interior, heritage or development project in Canberra and the ACT."
      image={disciplines.planning.hero}
      imageAlt="Planning and feasibility study by Hyperspace Architecture"
    >
      <section className="resource-list wrap">
        {resources.map((resource, index) => (
          <a href={resource.href} key={resource.title}>
            <span>{String(index + 1).padStart(2, "0")}</span>
            <h2>{resource.title}</h2>
            <p>{resource.copy}</p>
            <b>Open resource ↗</b>
          </a>
        ))}
      </section>
      <PageCta
        title="Need advice specific to your site?"
        link="/contact"
        label="Talk to the studio ↗"
      />
    </MarketingPage>
  );
}
