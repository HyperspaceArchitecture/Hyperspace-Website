import type { Metadata } from "next";
import { MarketingPage, PageCta } from "../marketing-page";
import { projects } from "../site-data";
import { staticPageMetadata } from "../seo";

export const metadata: Metadata = staticPageMetadata(
  "Press & Outreach",
  "Media coverage, public discussions and outreach by Hyperspace Architecture and its directors in Canberra and the ACT.",
  "/press-outreach",
  projects[4].image,
);

export default function PressPage() {
  return (
    <MarketingPage
      eyebrow="Press & outreach"
      title="Architecture in the public conversation."
      intro="Media coverage, industry dialogue and community engagement connected with Hyperspace projects and practice."
      image={projects[4].image}
      imageAlt="Hotel Pavilion redevelopment on Northbourne Avenue, Canberra"
    >
      <section className="page-section wrap press-feature">
        <div>
          <img
            src={projects[4].image}
            alt="Pavilion redevelopment on Northbourne Avenue by Hyperspace Architecture"
          />
        </div>
        <article>
          <p className="eyebrow">Canberra Times</p>
          <h2>Pavilion redevelopment, Northbourne Avenue</h2>
          <p>
            Vishal Saxena&apos;s work on the Pavilion Hotel redevelopment was
            featured in the Canberra Times. The major mixed-use proposal sits
            beside the ABC Centre and the Macarthur Avenue light-rail stop at a
            prominent meeting point of Dickson, Braddon, Turner and Lyneham.
          </p>
          <p>
            The work was undertaken with peckvonhartel and contributes to the
            continuing transformation of Canberra&apos;s primary transport
            corridor.
          </p>
        </article>
      </section>
      <section className="page-section page-section-tint wrap">
        <p className="eyebrow">Outreach</p>
        <div className="value-grid">
          <article>
            <h3>Heritage Festival ACT</h3>
            <p>
              Meetu Sharma Saxena joined a panel discussing the renewal of the
              significant HC Coombs Building at the Australian National
              University.
            </p>
          </article>
          <article>
            <h3>CityNews Canberra</h3>
            <p>
              Hyperspace projects and the practice&apos;s contribution to
              Canberra&apos;s evolving built environment have been featured in
              local media.
            </p>
          </article>
          <article>
            <h3>Industry dialogue</h3>
            <p>
              The studio participates in discussions on planning, heritage,
              housing and better design outcomes across the ACT and NSW.
            </p>
          </article>
        </div>
      </section>
      <PageCta
        title="For media and speaking enquiries."
        link="mailto:contact@hyper-space.com.au?subject=Media%20or%20speaking%20enquiry"
        label="Contact Hyperspace ↗"
      />
    </MarketingPage>
  );
}
