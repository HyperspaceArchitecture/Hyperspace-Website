import { ProjectMatrix, SiteFooter, SiteHeader } from "./site-components";
import {
  disciplineOrder,
  disciplinePaths,
  disciplines,
  projects,
} from "./site-data";
import { JsonLd, organisationSchema, websiteSchema } from "./seo";

export default function Home() {
  return (
    <main>
      <JsonLd data={[organisationSchema, websiteSchema]} />
      <SiteHeader />

      <section id="top" className="hero">
        <div className="hero-brand" aria-label="Hyperspace Architecture">HYPERSPACE ARCHITECTURE</div>
        <img
          src={projects[0].image}
          alt="Residential architecture by Hyperspace Architecture: Shangrila Retreat in Murrumbateman, NSW"
        />
        <div className="hero-shade" />
        <div className="hero-copy">
          <p>Architecture · Planning · Interiors · Heritage</p>
          <h1>
            Designed with clarity.
            <br />
            Delivered with certainty.
          </h1>
          <div className="hero-meta">
            <span>Canberra · Sydney · Regional NSW</span>
            <a href="#disciplines">Explore the practice ↓</a>
          </div>
        </div>
      </section>

      <section id="practice" className="intro wrap">
        <p className="eyebrow">Hyperspace Architecture</p>
        <div className="intro-grid">
          <h2>
            One practice from feasibility and approvals through to construction
            documentation.
          </h2>
          <div>
            <p>
              We bring planning, architecture, interiors, heritage and technical
              delivery together. Complex projects become clearer, coordination
              gaps reduce and the design intent stays intact.
            </p>
            <p>
              Based in Canberra and working across the ACT, NSW and selected
              national and international locations.
            </p>
          </div>
        </div>
      </section>

      <section id="disciplines" className="discipline-index">
        <div className="discipline-index-head wrap">
          <p className="eyebrow">Our disciplines</p>
          <h2>One team. Six connected areas of expertise.</h2>
        </div>
        <div className="discipline-cards">
          {disciplineOrder.map((key, index) => {
            const discipline = disciplines[key];
            return (
              <a
                className="discipline-card"
                href={disciplinePaths[key]}
                key={key}
              >
                <div className="discipline-card-image">
                  <img
                    loading={index < 3 ? "eager" : "lazy"}
                    src={discipline.hero}
                    alt="Architecture, planning, interiors, heritage, multi-dwelling and commercial projects by Hyperspace Architecture"
                  />
                </div>
                <div className="discipline-card-copy">
                  <span>{String(index + 1).padStart(2, "0")}</span>
                  <h3>{discipline.shortTitle}</h3>
                  <p>{discipline.summary}</p>
                  <b>Explore ↗</b>
                </div>
              </a>
            );
          })}
        </div>
      </section>

      <section className="gap-statement">
        <div className="gap-copy wrap">
          <h2>
            Most projects don&apos;t fail at the drawing board. They fail in the
            gaps — between planning and design, design and documentation,
            documentation and site.{" "}
            <em>We removed the gaps.</em>
          </h2>
          <div className="gap-columns">
            <p>
              Hyperspace is a registered architectural practice bringing
              planning, architecture, interiors, heritage and construction
              documentation into a single coordinated service. The people who
              test a site&apos;s feasibility remain connected to the people who
              answer the site questions later.
            </p>
            <p>
              The practice works across hospitality, residential, workplace,
              urbanism, interiors and heritage—from adaptable housing and
              commercial developments to careful fabric conservation where
              legislation is as demanding as the detailing.
            </p>
            <p>
              Our Canberra studio delivers work across the Australian Capital
              Territory and New South Wales, with selected projects extending
              nationally and internationally.
            </p>
          </div>
        </div>
        <div className="credential-band">
          <div>
            <strong>A+</strong>
            <span>Institute standing</span>
            <p>Registered A+ practice of the Australian Institute of Architects</p>
          </div>
          <div>
            <strong>ISO 9001</strong>
            <span>Certification</span>
            <p>Quality management system certified to ISO 9001:2015</p>
          </div>
          <div>
            <strong>2</strong>
            <span>Jurisdictions</span>
            <p>Registered architect ACT 2456 and NSW 11796</p>
          </div>
          <div>
            <strong>6</strong>
            <span>Disciplines</span>
            <p>Planning, architecture, interiors, heritage, documentation and CA</p>
          </div>
          <div>
            <strong>∞</strong>
            <span>Building height</span>
            <p>NSW Design &amp; Building Practitioner — unlimited rise</p>
          </div>
        </div>
      </section>

      <section id="work" className="work">
        <div className="section-title wrap">
          <div>
            <p className="eyebrow">Selected work</p>
            <h2>An extensive portfolio, clearly presented.</h2>
          </div>
        </div>
        <ProjectMatrix />
      </section>

      <section className="testimonials">
        <div className="testimonials-head wrap">
          <p className="eyebrow">Clients</p>
          <h2>On the record</h2>
        </div>
        <div className="testimonial-grid">
          <blockquote>
            <p>
              “Hyperspace persisted with revised designs that satisfied the
              authority and the neighbours—and still maximised FSR.”
            </p>
            <cite>Kishore Tiwari · Weetangera, Canberra</cite>
          </blockquote>
          <blockquote>
            <p>
              “They guided me through designing my home while listening to what
              mattered to me, and kept approvals on track without any fuss.”
            </p>
            <cite>Devina Skene · Gordon, Canberra</cite>
          </blockquote>
          <blockquote>
            <p>
              “We trust their feasibility, planning and design advice across
              warehouses, showrooms and multi-dwelling developments.”
            </p>
            <cite>SEUM · Mitchell, Canberra</cite>
          </blockquote>
        </div>
      </section>

      <section id="process" className="process wrap">
        <p className="eyebrow">How we work</p>
        <div className="process-head">
          <h2>
            Simple stages.
            <br />
            No mystery.
          </h2>
          <p>
            A clear, coordinated path from the first site question to a buildable
            outcome.
          </p>
        </div>
        <ol>
          <li>
            <b>01</b>
            <span>Feasibility</span>
            <p>Site, planning, risk and development potential.</p>
          </li>
          <li>
            <b>02</b>
            <span>Concept</span>
            <p>Brief, options, cost awareness and design direction.</p>
          </li>
          <li>
            <b>03</b>
            <span>Approvals</span>
            <p>Planning strategy, consultant coordination and submissions.</p>
          </li>
          <li>
            <b>04</b>
            <span>Documentation</span>
            <p>
              Detailed, coordinated information for approval and construction.
            </p>
          </li>
          <li>
            <b>05</b>
            <span>Delivery</span>
            <p>Tender support, site review and contract administration.</p>
          </li>
        </ol>
      </section>

      <section className="cta">
        <img src={projects[4].image} alt="Commercial architecture by Hyperspace Architecture: Hotel Pavilion mixed-use project on Northbourne Avenue, ACT" />
        <div>
          <p className="eyebrow">Start a conversation</p>
          <h2>Have a site or project in mind?</h2>
          <a href="mailto:contact@hyper-space.com.au">Tell us about it ↗</a>
        </div>
      </section>

      <SiteFooter />
    </main>
  );
}
