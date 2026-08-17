import type { Metadata } from "next";
import { MarketingPage, PageCta } from "../marketing-page";
import { projects } from "../site-data";
import { staticPageMetadata } from "../seo";

export const metadata: Metadata = staticPageMetadata(
  "Architectural Documentation & Construction Delivery",
  "Technical documentation, certification coordination and construction-stage support from Hyperspace Architecture.",
  "/documentation",
  projects[4].image,
);

const benefits = [
  ["01", "Buildability first", "Practical documentation that anticipates construction realities and reduces risk on site."],
  ["02", "Fewer RFIs", "Clear, coordinated information that minimises queries, ambiguity and avoidable delay."],
  ["03", "Building approval stages", "Integrated certification and consultant coordination for a clear approval pathway."],
  ["04", "Delivery continuity", "Ongoing support through construction to protect alignment, quality and project outcomes."],
];

const stages = [
  ["01", "Post-DA review", "We review the approved design, conditions, consultant inputs and delivery risks before documentation begins."],
  ["02", "DA amendment development", "We identify material changes and develop any required DA amendment as coordination progresses."],
  ["03", "Building approval strategy", "The approval pathway is mapped early, with responsibilities and information requirements made clear."],
  ["04", "Coordinated documentation", "Architecture, structure, services, fire, access and energy requirements are resolved into a buildable information set."],
  ["05", "Tender and construction", "We answer queries, assess substitutions, review shop drawings and help maintain design intent."],
  ["06", "WAE / as-built drawings", "We prepare coordinated work-as-executed and as-built drawings recording approved changes."],
];

export default function DocumentationPage() {
  return (
    <MarketingPage
      eyebrow="Documentation & delivery"
      title="From development approval to construction. One coordinated partner."
      intro="Technical documentation, certification coordination and construction-stage support for developers, builders and main contractors."
      image={projects[4].image}
      imageAlt="Coordinated architectural documentation shown as a technical building model"
    >
      <section className="value-grid">
        {benefits.map(([number, title, copy]) => (
          <article key={number}><span>{number}</span><h3>{title}</h3><p>{copy}</p></article>
        ))}
      </section>
      <section id="approach" className="page-section wrap">
        <p className="eyebrow">Our approach</p>
        <h2>Documentation is where design becomes deliverable.</h2>
        <p className="body-copy">We stay connected from the approved design through DA amendments, building approval stages, certification, construction and WAE / as-built drawings—giving the wider project team one source of architectural continuity.</p>
        <ol className="method-list">
          {stages.map(([number, title, copy]) => (
            <li key={number}><span>{number}</span><h2>{title}</h2><p>{copy}</p></li>
          ))}
        </ol>
      </section>
      <PageCta title="Less fragmentation. More certainty." link="mailto:contact@hyper-space.com.au?subject=Documentation%20capability%20discussion" label="Talk to our documentation team ↗" />
    </MarketingPage>
  );
}

