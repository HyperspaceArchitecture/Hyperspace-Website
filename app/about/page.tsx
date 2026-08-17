import type { Metadata } from "next";
import { MarketingPage, PageCta } from "../marketing-page";
import { disciplines } from "../site-data";
import { staticPageMetadata } from "../seo";

export const metadata: Metadata = staticPageMetadata(
  "About Hyperspace Architecture",
  "Meet Hyperspace Architecture, an integrated Canberra practice for architecture, planning, interiors, heritage and technical delivery across ACT and NSW.",
  "/about",
  disciplines.residential.hero,
);

export default function AboutPage() {
  return (
    <MarketingPage
      eyebrow="About"
      title="Context first. Disciplines connected."
      intro="Hyperspace is an integrated architectural practice offering an end-to-end service from feasibility and planning advice to architecture, interiors, heritage and construction delivery."
      image={disciplines.residential.hero}
      imageAlt="Contemporary residential architecture by Hyperspace Architecture in Canberra"
    >
      <section className="page-section wrap split-copy">
        <div>
          <p className="eyebrow">Our story</p>
          <h2>Built across three countries and more than two decades of practice.</h2>
        </div>
        <div className="body-copy">
          <p>
            Hyperspace was formally launched in Canberra in 2017, but the
            practice began when founders Meetu Sharma Saxena and Vishal Saxena
            entered the profession in 2000.
          </p>
          <p>
            Their experience across India, the United Arab Emirates and
            Australia includes complex, high-value projects requiring design
            leadership, stakeholder coordination and a strong understanding of
            how buildings are put together.
          </p>
          <p>
            Today, the studio brings that breadth to projects across Canberra,
            Sydney, regional NSW and selected national and international
            locations.
          </p>
        </div>
      </section>

      <section id="people" className="page-section page-section-tint wrap">
        <p className="eyebrow">What makes us different</p>
        <div className="value-grid">
          <article>
            <span>01</span>
            <h3>One coordinated practice</h3>
            <p>
              Planning, architecture, interiors, heritage and documentation
              remain connected from the first site study to construction.
            </p>
          </article>
          <article>
            <span>02</span>
            <h3>Design grounded in context</h3>
            <p>
              Every response begins with site, climate, landscape, regulation,
              community and the client&apos;s real priorities.
            </p>
          </article>
          <article>
            <span>03</span>
            <h3>Buildability from day one</h3>
            <p>
              Design ambition is supported by technical knowledge, coordinated
              documentation and practical construction thinking.
            </p>
          </article>
        </div>
      </section>

      <section className="page-section wrap credentials-detail">
        <p className="eyebrow">Professional standing</p>
        <h2>Registered, accredited and quality assured.</h2>
        <ul>
          <li>A+ practice of the Australian Institute of Architects</li>
          <li>ISO 9001:2015 certified quality management system</li>
          <li>Registered Architect ACT 2456 and NSW 11796</li>
          <li>NSW Design Practitioner DEP0003143</li>
          <li>NSW Principal Design Practitioner PDP0001076</li>
          <li>Unlimited-rise building practitioner capability in NSW</li>
        </ul>
      </section>
      <PageCta />
    </MarketingPage>
  );
}
