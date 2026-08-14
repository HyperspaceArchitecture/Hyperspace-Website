import { SiteFooter, SiteHeader } from "./site-components";
import {
  disciplineOrder,
  disciplinePaths,
  disciplines,
  type DisciplineKey,
} from "./site-data";
import { disciplineSchema, JsonLd } from "./seo";

export function DisciplinePage({ discipline }: { discipline: DisciplineKey }) {
  const data = disciplines[discipline];
  const nextIndex = (disciplineOrder.indexOf(discipline) + 1) % disciplineOrder.length;
  const nextKey = disciplineOrder[nextIndex];
  const next = disciplines[nextKey];

  return (
    <main>
      <JsonLd data={disciplineSchema(discipline)} />
      <SiteHeader />

      <section className="discipline-hero">
        <img src={data.hero} alt={`${data.title} project by Hyperspace Architecture: ${data.shortTitle} architecture in Canberra and NSW`} />
        <div className="discipline-hero-shade" />
        <div className="discipline-hero-copy wrap">
          <p>{data.kicker}</p>
          <h1>{data.title}</h1>
        </div>
      </section>

      <section className="discipline-intro wrap">
        <div>
          <p className="eyebrow">Hyperspace / {data.shortTitle}</p>
          <h2>{data.summary}</h2>
        </div>
        <div className="discipline-copy">
          <p>{data.intro}</p>
          <p>{data.statement}</p>
        </div>
      </section>

      <section className="services wrap">
        <div className="services-heading">
          <p className="eyebrow">What we do</p>
          <h2>Integrated expertise from first study to built outcome.</h2>
        </div>
        <ol>
          {data.services.map((service, index) => (
            <li key={service}>
              <span>{String(index + 1).padStart(2, "0")}</span>
              <p>{service}</p>
            </li>
          ))}
        </ol>
      </section>

      <section className="discipline-work">
        <div className="discipline-work-head wrap">
          <p className="eyebrow">Selected {data.shortTitle.toLowerCase()} work</p>
          <h2>Projects, studies and built places.</h2>
        </div>
        <div className="discipline-gallery">
          {data.gallery.map((item, index) => (
            <figure
              className={item.wide ? "wide" : ""}
              key={`${item.name}-${index}`}
            >
              <div>
                <img
                  loading={index < 4 ? "eager" : "lazy"}
                  src={item.image}
                  alt={`${data.title} project by Hyperspace Architecture: ${item.name}`}
                />
              </div>
              <figcaption>{item.name}</figcaption>
            </figure>
          ))}
        </div>
      </section>

      <a className="next-discipline" href={disciplinePaths[nextKey]}>
        <span>Next discipline</span>
        <strong>{next.title}</strong>
        <b>↗</b>
      </a>

      <section className="discipline-cta">
        <p className="eyebrow">Start a conversation</p>
        <h2>Have a project in mind?</h2>
        <a href="mailto:contact@hyper-space.com.au">Tell us about it ↗</a>
      </section>

      <SiteFooter />
    </main>
  );
}
