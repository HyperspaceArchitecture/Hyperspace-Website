import type { Metadata } from "next";
import { MarketingPage, PageCta } from "../marketing-page";
import { projects } from "../site-data";
import { staticPageMetadata } from "../seo";

export const metadata: Metadata = staticPageMetadata(
  "Latest News",
  "Latest approvals, projects, studio milestones and media news from Hyperspace Architecture in Canberra, ACT and NSW.",
  "/latestnews",
  projects[1].image,
);

const news = [
  {
    date: "2025",
    title: "The House with a View",
    copy:
      "Development approval was secured in five weeks for a six-bedroom Taylor residence with expansive views, double-height spaces, a gym and pool.",
    image: projects[1].image,
  },
  {
    date: "2024",
    title: "Hilltop House featured on Channel 9",
    copy:
      "The Hyperspace-designed Hilltop House in Throsby was featured by Australia’s Best Houses on Channel 9 Life.",
    image: projects[19].image,
  },
  {
    date: "10.02.2024",
    title: "Deakin mid-century modern extension approved",
    copy:
      "A carefully integrated extension on Melbourne Avenue secured approval beside a heritage area, creating a strong indoor-outdoor relationship around the pool.",
    image: projects[12].image,
  },
  {
    date: "06.05.2023",
    title: "Showroom and community space approved in Mitchell",
    copy:
      "A mixed-use community centre, showroom and warehouse was approved to bring activity and a stronger civic presence to an industrial precinct.",
    image: projects[2].image,
  },
];

export default function NewsPage() {
  return (
    <MarketingPage
      eyebrow="News"
      title="Projects moving forward."
      intro="Approvals, construction updates, recognition and moments from the Hyperspace studio."
      image={projects[1].image}
      imageAlt="Contemporary Taylor residence by Hyperspace Architecture"
    >
      <section className="editorial-grid">
        {news.map((item) => (
          <article key={item.title}>
            <div>
              <img src={item.image} alt={`${item.title} by Hyperspace Architecture`} />
            </div>
            <span>{item.date}</span>
            <h2>{item.title}</h2>
            <p>{item.copy}</p>
          </article>
        ))}
      </section>
      <PageCta />
    </MarketingPage>
  );
}
