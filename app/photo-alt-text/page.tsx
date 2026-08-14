"use client";

import { disciplines, projects } from "../site-data";
import { SiteFooter, SiteHeader } from "../site-components";

type RegisterRow = {
  name: string;
  sector: string;
  place: string;
  image: string;
  current: string;
  suggestedName: string;
  alt: string;
  search: string;
  reason: string;
};

const sectorCopy: Record<string, { search: string; reason: string }> = {
  Residential: {
    search: "custom home design, modern residential architecture, Canberra architect",
    reason: "Replaces a generic portfolio label with the visible house type and client-facing search language.",
  },
  Commercial: {
    search: "commercial architecture, workplace and hospitality design, Canberra",
    reason: "Clarifies the building type and connects the image to a service people actively search for.",
  },
  "Multi-dwelling": {
    search: "townhouse design, apartment architecture, medium-density housing",
    reason: "Makes the housing scale and development intent clearer for users and search engines.",
  },
  Interiors: {
    search: "interior architecture, residential interiors, workplace interiors",
    reason: "Describes the visual subject as an interiors service rather than an unnamed portfolio image.",
  },
  Heritage: {
    search: "heritage architecture, conservation, adaptive reuse, Canberra",
    reason: "Connects the image to heritage expertise without inventing an unverified project claim.",
  },
  Planning: {
    search: "development feasibility, planning architecture, mixed-use development",
    reason: "Explains the planning or feasibility role of the image and improves topical relevance.",
  },
};

function uniqueRows(): RegisterRow[] {
  const all = [
    ...projects.map((project) => ({
      name: project.name,
      place: project.place,
      sector: project.sector,
      image: project.image,
    })),
    ...Object.values(disciplines).flatMap((discipline) =>
      discipline.gallery.map((item) => ({
        name: item.name,
        place: "Location to confirm",
        sector: discipline.title.replace(" Architecture", ""),
        image: item.image,
      })),
    ),
  ];

  const seen = new Set<string>();
  return all
    .filter((item) => {
      if (seen.has(item.image)) return false;
      seen.add(item.image);
      return true;
    })
    .map((item) => {
      const copy = sectorCopy[item.sector] ?? sectorCopy.Residential;
      const sectorLabel = item.sector === "Multi-dwelling" ? "multi-dwelling" : item.sector.toLowerCase();
      return {
        ...item,
        current: `${item.name}, ${item.place}, by Hyperspace Architecture`,
        suggestedName: `${item.name} — ${sectorLabel} design`,
        alt: `Hyperspace Architecture ${sectorLabel} project, ${item.name}, in ${item.place}`,
        search: copy.search,
        reason: copy.reason,
      };
    });
}

export default function PhotoAltTextPage() {
  const rows = uniqueRows();

  return (
    <main className="alt-register-page">
      <SiteHeader />
      <style>{`
        .alt-register-page { color: var(--ink); }
        .alt-register-intro { display:grid; gap:7vw; grid-template-columns:1fr 1fr; padding:110px clamp(20px,4vw,64px) 80px; }
        .alt-register-intro h1 { font-size:clamp(52px,8vw,118px); font-weight:400; letter-spacing:-.06em; line-height:.9; margin:0; max-width:800px; }
        .alt-register-intro-copy { align-self:end; color:var(--muted); font-size:16px; line-height:1.6; max-width:600px; }
        .alt-register-note { background:var(--soft-blue); display:grid; gap:7vw; grid-template-columns:1fr 1fr; padding:64px clamp(20px,4vw,64px); }
        .alt-register-note h2 { font-size:clamp(34px,4vw,58px); font-weight:400; letter-spacing:-.05em; line-height:.98; margin:0; }
        .alt-register-note p { color:var(--muted); font-size:14px; line-height:1.65; margin:0 0 18px; }
        .alt-register-table-wrap { overflow-x:auto; padding:80px clamp(20px,4vw,64px) 110px; }
        .alt-register-table { border-collapse:collapse; min-width:1500px; table-layout:fixed; width:100%; }
        .alt-register-table th { background:var(--ink); color:#fff; font-size:10px; font-weight:650; letter-spacing:.12em; padding:15px 14px; text-align:left; text-transform:uppercase; vertical-align:top; }
        .alt-register-table td { border-bottom:1px solid var(--line); padding:18px 14px; vertical-align:top; }
        .alt-register-table tr:nth-child(even) td { background:#fafafa; }
        .alt-register-table th:nth-child(1), .alt-register-table td:nth-child(1) { width:180px; }
        .alt-register-table th:nth-child(2), .alt-register-table td:nth-child(2) { width:180px; }
        .alt-register-table th:nth-child(3), .alt-register-table td:nth-child(3) { width:220px; }
        .alt-register-table th:nth-child(4), .alt-register-table td:nth-child(4) { width:360px; }
        .alt-register-table th:nth-child(5), .alt-register-table td:nth-child(5) { width:280px; }
        .alt-register-table th:nth-child(6), .alt-register-table td:nth-child(6) { width:330px; }
        .alt-register-table th:nth-child(7), .alt-register-table td:nth-child(7) { width:330px; }
        .alt-register-table th:nth-child(8), .alt-register-table td:nth-child(8) { width:110px; }
        .alt-register-image { background:var(--paper); height:120px; overflow:hidden; width:160px; }
        .alt-register-image img { height:100%; object-fit:cover; width:100%; }
        .alt-register-table strong { display:block; font-size:15px; font-weight:600; margin-bottom:6px; }
        .alt-register-table p { color:var(--muted); font-size:12px; line-height:1.5; margin:0; }
        .alt-register-table code { background:#f0f1f3; display:block; font-family:inherit; font-size:12px; line-height:1.5; padding:8px; white-space:normal; }
        .alt-approval { border:1px solid var(--line); color:var(--muted); font-size:12px; min-height:34px; padding:8px; width:100%; }
        @media (max-width:780px) { .alt-register-intro, .alt-register-note { grid-template-columns:1fr; padding-bottom:64px; padding-top:70px; } .alt-register-table-wrap { padding-bottom:74px; padding-top:70px; } }
      `}</style>
      <section className="alt-register-intro">
        <div>
          <p className="eyebrow">Accessibility + SEO register</p>
          <h1>Every image, clearly described.</h1>
        </div>
        <p className="alt-register-intro-copy">
          Each image appears beside its current label, proposed project wording, recommended alt text, search language and the reason for the amendment. Use the approval column as the editorial review list before launch.
        </p>
      </section>
      <section className="alt-register-note">
        <h2>Editable recommendations for approval.</h2>
        <div>
          <p><strong>Alt text:</strong> describes what is visible and stays natural for screen readers.</p>
          <p><strong>SEO wording:</strong> belongs in titles, captions and page copy rather than as a keyword list inside alt text.</p>
          <p><strong>Location:</strong> remains “Location to confirm” wherever the source data does not verify it.</p>
        </div>
      </section>
      <section className="alt-register-table-wrap" aria-labelledby="alt-register-heading">
        <p className="eyebrow" id="alt-register-heading">{rows.length} image records · image first, recommendations beside it</p>
        <table className="alt-register-table">
          <thead>
            <tr>
              <th>Image</th>
              <th>Current label</th>
              <th>Suggested project name</th>
              <th>Suggested alt text</th>
              <th>SEO/search wording</th>
              <th>Reason</th>
              <th>Approval notes</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            {rows.map((row) => (
              <tr key={row.image}>
                <td><a href={row.image} target="_blank" rel="noreferrer"><div className="alt-register-image"><img src={row.image} alt={row.alt} loading="lazy" /></div></a></td>
                <td><strong>{row.name}</strong><p>{row.sector} · {row.place}</p><code>{row.current}</code></td>
                <td><code>{row.suggestedName}</code></td>
                <td><code>{row.alt}</code></td>
                <td><code>{row.search}</code></td>
                <td><p>{row.reason}</p></td>
                <td><textarea className="alt-approval" aria-label={`Approval notes for ${row.name}`} placeholder="Add approval note…" /></td>
                <td><select className="alt-approval" aria-label={`Approval status for ${row.name}`} defaultValue="Review"><option>Review</option><option>Approve</option><option>Revise</option><option>Reject</option></select></td>
              </tr>
            ))}
          </tbody>
        </table>
      </section>
      <SiteFooter />
    </main>
  );
}
