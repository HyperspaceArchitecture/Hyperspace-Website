import type { Metadata } from "next";
import { MarketingPage, PageCta } from "../marketing-page";
import { projects } from "../site-data";
import { staticPageMetadata } from "../seo";

export const metadata: Metadata = staticPageMetadata(
  "Architecture & Planning Blog",
  "Practical architecture, planning, renovation, sustainability and design guidance for Canberra, ACT and NSW from Hyperspace Architecture.",
  "/blog",
  projects[18].image,
);

const posts = [
  {
    category: "Planning Canberra",
    title: "How to check what I can build on my block in Canberra",
    detail: "A practical guide to the Territory Plan, site constraints and the mid-2026 planning changes.",
    href: "https://www.hyper-space.com.au/post/how-to-check-what-i-can-build-on-my-block-in-canberra",
  },
  {
    category: "Architecture today",
    title: "Why Hyperspace Architecture is Canberra’s best architecture firm",
    detail: "What an integrated practice changes for design quality, approvals and project delivery.",
    href: "https://www.hyper-space.com.au/post/why-hyperspace-architecture-is-canberra-s-best-architecture-firm",
  },
  {
    category: "Accessible housing",
    title: "Looking for an SDA design architect?",
    detail: "Key considerations when designing specialist disability accommodation and NDIS-standard homes.",
    href: "https://www.hyper-space.com.au/post/looking-for-a-sda-design-architects-who-can-design-ndis-standard-homes",
  },
  {
    category: "Choosing an architect",
    title: "How to find a good architect in Canberra or Sydney",
    detail: "Ten practical questions to ask before appointing your architect.",
    href: "https://www.hyper-space.com.au/post/how-to-find-a-good-architect-in-canberra-sydney-10-things-to-look-when-choosing-an-architect",
  },
  {
    category: "Renovation Canberra",
    title: "Knockdown rebuild or renovate?",
    detail: "Six factors that help clarify the right direction for an existing home.",
    href: "https://www.hyper-space.com.au/post/6-reasons-and-more-to-considers-whether-to-knockdown-or-reno-and-renovate-my-house",
  },
  {
    category: "Technical guide",
    title: "Choosing the right windows for Canberra weather",
    detail: "A technical guide to glazing, frames, orientation and climate performance.",
    href: "https://www.hyper-space.com.au/post/how-to-choosing-the-right-windows-for-canberra-weather-a-technical-guide-by-hyperspace-architects",
  },
];

export default function BlogPage() {
  return (
    <MarketingPage
      eyebrow="Blog"
      title="Clear advice for better projects."
      intro="Planning, design, approvals and technical guidance for people building, renovating or developing property in Canberra and NSW."
      image={projects[18].image}
      imageAlt="Contemporary residential architecture in regional NSW by Hyperspace Architecture"
    >
      <section className="article-list wrap">
        {posts.map((post, index) => (
          <a href={post.href} key={post.title}>
            <span>{String(index + 1).padStart(2, "0")} · {post.category}</span>
            <h2>{post.title}</h2>
            <p>{post.detail}</p>
            <b>Read article ↗</b>
          </a>
        ))}
      </section>
      <PageCta
        title="Have a question not covered here?"
        link="/contact"
        label="Ask the studio ↗"
      />
    </MarketingPage>
  );
}
