"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import {
  disciplineOrder,
  disciplinePaths,
  disciplines,
  projects,
  sectorFilters,
} from "./site-data";

const navigation = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Projects", href: "/projects" },
  { label: "Careers", href: "/careers" },
  { label: "Design process", href: "/design-process" },
  { label: "News", href: "/latestnews" },
  { label: "Contact", href: "/contact" },
  { label: "Blog", href: "/blog" },
  { label: "Press & outreach", href: "/press-outreach" },
  { label: "Resources", href: "/resources" },
];

const socialLinks = [
  {
    label: "Houzz",
    href: "https://www.houzz.com.au/professionals/architects/hyperspace-architecture-pfvwau-pf~1262899406",
    icon: "/brand/houzz.png",
  },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/company/hyperspacedesigns/?originalSubdomain=au",
    icon: "/brand/linkedin.png",
  },
  {
    label: "Pinterest",
    href: "https://au.pinterest.com/hyperspacearchitects/",
    icon: "/brand/pinterest.png",
  },
  {
    label: "YouTube",
    href: "https://www.youtube.com/@Hyperspace-Architecture",
    icon: "/brand/youtube.png",
  },
  {
    label: "Facebook",
    href: "https://www.facebook.com/Hyperspace.Architecture/",
    icon: "/brand/facebook.png",
  },
  {
    label: "Instagram",
    href: "https://www.instagram.com/hyperspace_architecture/",
    icon: "/brand/instagram.png",
  },
  {
    label: "TikTok",
    href: "https://www.tiktok.com/@hyperspace_architecture",
    icon: "/brand/tiktok.png",
  },
];

export function SiteHeader() {
  const [menu, setMenu] = useState(false);

  return (
    <header className="site-header">
      <div className="header-identity">
        <Link className="brand" href="/" aria-label="Hyperspace Architecture home">
          <img
            src="/brand/hyperspace-wordmark.png"
            alt="Hyperspace Contextual Urbanism"
          />
        </Link>
        <a
          className="institute-mark"
          href="https://members.architecture.com.au/faaprofile?profileid=020e7a21-0815-432a-9a7b-e5419f33e8f5"
          target="_blank"
          rel="noreferrer"
          aria-label="Hyperspace A+ practice profile at the Australian Institute of Architects"
        >
          <img
            src="/brand/aia-logo.png"
            alt="Australian Institute of Architects"
          />
        </a>
        <div className="social-links" aria-label="Hyperspace social profiles">
          {socialLinks.map((social) => (
            <a
              key={social.label}
              href={social.href}
              target="_blank"
              rel="noreferrer"
              aria-label={social.label}
              title={social.label}
            >
              <img src={social.icon} alt="" />
            </a>
          ))}
        </div>
      </div>
      <button
        className="menu-button"
        onClick={() => setMenu(!menu)}
        aria-expanded={menu}
        aria-controls="primary-navigation"
      >
        {menu ? "Close" : "Menu"}
      </button>
      <nav
        id="primary-navigation"
        className={menu ? "open" : ""}
        aria-label="Primary navigation"
      >
        {navigation.map((item) =>
          item.label === "Projects" ? (
            <div className="nav-group" key={item.label}>
              <a href={item.href} onClick={() => setMenu(false)}>
                {item.label}
              </a>
              <div className="nav-flyout">
                {disciplineOrder.map((key) => (
                  <a
                    key={key}
                    href={disciplinePaths[key]}
                    onClick={() => setMenu(false)}
                  >
                    {disciplines[key].shortTitle}
                  </a>
                ))}
              </div>
            </div>
          ) : (
            <a
              key={item.label}
              href={item.href}
              onClick={() => setMenu(false)}
            >
              {item.label}
            </a>
          ),
        )}
      </nav>
      <Link className="header-symbol" href="/" aria-label="Back to home">
        <img src="/brand/hyperspace-symbol.png" alt="" />
      </Link>
    </header>
  );
}

export function ProjectMatrix() {
  const [filter, setFilter] = useState("All");
  const visible = useMemo(
    () =>
      filter === "All"
        ? projects
        : projects.filter((project) => project.sector === filter),
    [filter],
  );

  return (
    <>
      <div className="filters" aria-label="Filter projects">
        {sectorFilters.map((sector) => (
          <button
            type="button"
            key={sector}
            className={filter === sector ? "active" : ""}
            onClick={() => setFilter(sector)}
            aria-pressed={filter === sector}
          >
            {sector}
          </button>
        ))}
      </div>
      <div className="project-grid">
        {visible.map((project, index) => (
          <article
            className={`project ${project.wide ? "wide" : ""}`}
            key={project.name}
          >
            <div className="image-frame">
              <img
                loading={index < 6 ? "eager" : "lazy"}
                src={project.image}
                alt={`Architectural ${project.sector.toLowerCase()} project by Hyperspace Architecture: ${project.name} in ${project.place}`}
              />
            </div>
            <div className="project-copy">
              <h3>{project.name}</h3>
              <p>
                {project.sector} · {project.place}
              </p>
            </div>
          </article>
        ))}
      </div>
    </>
  );
}

export function SiteFooter() {
  return (
    <footer id="contact" className="wrap">
      <div className="footer-main">
        <Link className="brand footer-brand" href="/" aria-label="Home">
          <img
            src="/brand/hyperspace-wordmark.png"
            alt="Hyperspace Contextual Urbanism"
          />
        </Link>
        <div>
          <p className="eyebrow">Contact</p>
          <a href="tel:+61290710499">+61 2 9071 0499</a>
          <a href="mailto:contact@hyper-space.com.au">
            contact@hyper-space.com.au
          </a>
        </div>
        <div>
          <p className="eyebrow">Studio</p>
          <p>
            G26 / 55 Currong Street North
            <br />
            Braddon ACT 2612
          </p>
        </div>
        <div className="footer-socials">
          <p className="eyebrow">Follow</p>
          {socialLinks.map((social) => (
            <a
              key={social.label}
              href={social.href}
              target="_blank"
              rel="noreferrer"
            >
              {social.label}
            </a>
          ))}
        </div>
      </div>
      <div className="footer-note">
        <span>© 2026 Hyperspace Designs Pty Ltd</span>
        <span>ACT 2456 · NSW 11796</span>
        <span>ABN 69 667 248 084</span>
      </div>
    </footer>
  );
}
