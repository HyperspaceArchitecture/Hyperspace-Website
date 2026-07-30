import type { Metadata } from "next";
import { ProjectMatrix, SiteFooter, SiteHeader } from "../site-components";
import {
  disciplineOrder,
  disciplinePaths,
  disciplines,
} from "../site-data";
import { staticPageMetadata } from "../seo";

export const metadata: Metadata = staticPageMetadata(
  "Architecture Projects Canberra & NSW",
  "Explore Hyperspace Architecture projects across residential, commercial, multi-dwelling, interiors, heritage and planning in Canberra, ACT and NSW.",
  "/projects",
  disciplines.commercial.hero,
);

export default function ProjectsPage() {
  return (
    <main>
      <SiteHeader />
      <section className="projects-page-head wrap">
        <p className="eyebrow">Projects</p>
        <h1>Built work, approved projects and design studies.</h1>
        <p>
          Explore the complete portfolio or move directly to a discipline.
        </p>
      </section>
      <section className="project-discipline-links">
        {disciplineOrder.map((key, index) => (
          <a href={disciplinePaths[key]} key={key}>
            <span>{String(index + 1).padStart(2, "0")}</span>
            <strong>{disciplines[key].shortTitle}</strong>
            <b>↗</b>
          </a>
        ))}
      </section>
      <section className="work projects-page-work">
        <div className="section-title wrap">
          <div>
            <p className="eyebrow">All work</p>
            <h2>Filter the portfolio by sector.</h2>
          </div>
        </div>
        <ProjectMatrix />
      </section>
      <SiteFooter />
    </main>
  );
}
