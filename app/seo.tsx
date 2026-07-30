import type { Metadata } from "next";
import { disciplinePaths, disciplines, type DisciplineKey } from "./site-data";

export const siteUrl = "https://www.hyper-space.com.au";

export function staticPageMetadata(
  title: string,
  description: string,
  path: string,
  image?: string,
): Metadata {
  return {
    title,
    description,
    alternates: { canonical: path },
    openGraph: {
      type: "website",
      url: `${siteUrl}${path}`,
      siteName: "Hyperspace Architecture",
      title,
      description,
      locale: "en_AU",
      images: image ? [{ url: image, alt: title }] : undefined,
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: image ? [image] : undefined,
    },
  };
}

const pageTitles: Record<DisciplineKey, string> = {
  residential: "Residential Architects Canberra & Sydney NSW",
  commercial: "Commercial Architects Canberra & Sydney NSW",
  multidwelling: "Multi-Dwelling Architects Canberra & Sydney",
  interiors: "Interior Designers Canberra & Sydney NSW",
  heritage: "Heritage Architects Canberra & Sydney NSW",
  planning: "Town Planning & Feasibility Canberra & NSW",
};

const pageDescriptions: Record<DisciplineKey, string> = {
  residential:
    "Award-winning residential architects for custom homes, renovations, extensions and knockdown rebuilds across Canberra, ACT, Sydney and regional NSW.",
  commercial:
    "Commercial architects designing workplaces, hotels, warehouses, showrooms, community buildings and mixed-use developments across Canberra and NSW.",
  multidwelling:
    "Multi-dwelling architects for apartments, townhouses, dual occupancies and adaptable housing across Canberra, ACT and Sydney NSW.",
  interiors:
    "Residential and commercial interior designers creating contemporary homes, workplaces, retail and hospitality interiors across Canberra and Sydney.",
  heritage:
    "Heritage architects providing conservation, adaptive reuse, CMPs, Statements of Heritage Effect and material conservation across Canberra and NSW.",
  planning:
    "Planning, feasibility, site due diligence, yield testing and development approval strategy for residential and commercial projects across ACT and NSW.",
};

export function disciplineMetadata(key: DisciplineKey): Metadata {
  const data = disciplines[key];
  const path = disciplinePaths[key];

  return {
    title: pageTitles[key],
    description: pageDescriptions[key],
    alternates: { canonical: path },
    openGraph: {
      type: "website",
      url: `${siteUrl}${path}`,
      siteName: "Hyperspace Architecture",
      title: pageTitles[key],
      description: pageDescriptions[key],
      locale: "en_AU",
      images: [
        {
          url: data.hero,
          alt: `${data.title} project by Hyperspace Architecture in Canberra and NSW`,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: pageTitles[key],
      description: pageDescriptions[key],
      images: [data.hero],
    },
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        "max-image-preview": "large",
        "max-snippet": -1,
        "max-video-preview": -1,
      },
    },
  };
}

export const organisationSchema = {
  "@context": "https://schema.org",
  "@type": ["Organization", "ProfessionalService"],
  "@id": `${siteUrl}/#organisation`,
  name: "Hyperspace Architecture",
  legalName: "Hyperspace Designs Pty Ltd",
  url: `${siteUrl}/`,
  logo: `${siteUrl}/brand/hyperspace-wordmark.png`,
  image: disciplines.residential.hero,
  description:
    "Registered architectural practice providing architecture, planning, interior design, heritage and construction documentation across Canberra, ACT and NSW.",
  email: "contact@hyper-space.com.au",
  telephone: "+61 2 9071 0499",
  foundingDate: "2017",
  address: {
    "@type": "PostalAddress",
    streetAddress: "G26/55 Currong Street North",
    addressLocality: "Braddon",
    addressRegion: "ACT",
    postalCode: "2612",
    addressCountry: "AU",
  },
  areaServed: [
    { "@type": "AdministrativeArea", name: "Australian Capital Territory" },
    { "@type": "State", name: "New South Wales" },
    { "@type": "City", name: "Canberra" },
    { "@type": "City", name: "Sydney" },
  ],
  knowsAbout: [
    "Architecture",
    "Residential architecture",
    "Commercial architecture",
    "Multi-dwelling architecture",
    "Interior design",
    "Heritage conservation",
    "Town planning",
    "Construction documentation",
  ],
  sameAs: [
    "https://www.linkedin.com/company/hyperspacedesigns/",
    "https://www.facebook.com/Hyperspace.Architecture/",
    "https://www.instagram.com/hyperspace_architecture/",
    "https://www.youtube.com/@Hyperspace-Architecture",
    "https://au.pinterest.com/hyperspacearchitects/",
    "https://www.tiktok.com/@hyperspace_architecture",
    "https://www.houzz.com.au/professionals/architects/hyperspace-architecture-pfvwau-pf~1262899406",
  ],
};

export const websiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  "@id": `${siteUrl}/#website`,
  url: `${siteUrl}/`,
  name: "Hyperspace Architecture",
  publisher: { "@id": `${siteUrl}/#organisation` },
  inLanguage: "en-AU",
};

export function disciplineSchema(key: DisciplineKey) {
  const data = disciplines[key];
  const path = disciplinePaths[key];

  return [
    {
      "@context": "https://schema.org",
      "@type": "Service",
      "@id": `${siteUrl}${path}/#service`,
      name: data.title,
      serviceType: data.title,
      url: `${siteUrl}${path}`,
      description: pageDescriptions[key],
      image: data.hero,
      provider: { "@id": `${siteUrl}/#organisation` },
      areaServed: [
        "Canberra",
        "Australian Capital Territory",
        "Sydney",
        "New South Wales",
      ],
      hasOfferCatalog: {
        "@type": "OfferCatalog",
        name: `${data.title} services`,
        itemListElement: data.services.map((service) => ({
          "@type": "Offer",
          itemOffered: { "@type": "Service", name: service },
        })),
      },
    },
    {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      itemListElement: [
        {
          "@type": "ListItem",
          position: 1,
          name: "Home",
          item: `${siteUrl}/`,
        },
        {
          "@type": "ListItem",
          position: 2,
          name: data.title,
          item: `${siteUrl}${path}`,
        },
      ],
    },
  ];
}

export function JsonLd({ data }: { data: object | object[] }) {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(data).replace(/</g, "\\u003c"),
      }}
    />
  );
}
