import type { Metadata } from "next";
import { MarketingPage, PageCta } from "../marketing-page";
import { projects } from "../site-data";
import { staticPageMetadata } from "../seo";

export const metadata: Metadata = staticPageMetadata(
  "The Hyperspace Design Process",
  "Learn how Hyperspace manages feasibility, concept design, approvals, documentation and construction delivery for architecture projects in ACT and NSW.",
  "/design-process",
  projects[4].image,
);

const stages = [
  ["Feasibility", "Confirm the site, planning controls, opportunities, risks, likely approvals pathway and development potential."],
  ["Brief & concept", "Translate priorities, budget and context into clear design options that can be tested early."],
  ["Approvals", "Coordinate the planning strategy, consultants, authority requirements and submission documentation."],
  ["Detailed design", "Resolve materials, systems, compliance, buildability and the relationship between every discipline."],
  ["Documentation", "Prepare coordinated drawings and information for building approval, pricing and construction."],
  ["Delivery", "Support tendering, answer site questions, review quality and administer the construction contract where engaged."],
];

export default function DesignProcessPage() {
  return (
    <MarketingPage
      eyebrow="Design process"
      title="The Hyperspace method."
      intro="A clear, collaborative process that connects design ambition with planning certainty, buildability and careful delivery."
      image={projects[4].image}
      imageAlt="Hotel Pavilion mixed-use development by Hyperspace Architecture"
    >
      <section className="page-section wrap">
        <p className="eyebrow">Six connected stages</p>
        <ol className="method-list">
          {stages.map(([title, description], index) => (
            <li key={title}>
              <span>{String(index + 1).padStart(2, "0")}</span>
              <h2>{title}</h2>
              <p>{description}</p>
            </li>
          ))}
        </ol>
      </section>
      <section className="page-section page-section-tint wrap">
        <p className="eyebrow">Across every stage</p>
        <div className="value-grid">
          <article>
            <h3>Collaborative</h3>
            <p>Client priorities remain visible and decisions are explained.</p>
          </article>
          <article>
            <h3>Visual</h3>
            <p>Models, renders and drawings make the developing design easier to understand.</p>
          </article>
          <article>
            <h3>Buildable</h3>
            <p>Technical thinking begins early, not after the design is finished.</p>
          </article>
        </div>
      </section>
      <PageCta />
    </MarketingPage>
  );
}
