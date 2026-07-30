# Hyperspace Architecture website

This private repository is the master source for the Hyperspace Architecture
website first shared as the 28 July 2026 draft.

Live design reference:
[hyperspace-architecture.hyperspacearchitecture.chatgpt.site](https://hyperspace-architecture.hyperspacearchitecture.chatgpt.site/)

## What is included

- The complete multi-page website source in `app/`
- Six discipline pages: residential, commercial, multi-dwelling, interiors,
  heritage and planning
- The 30-project matrix, including wide project images and filters
- About, projects, careers, process, news, contact, blog, press and resources
- Brand logos, social links, testimonials, SEO metadata, sitemap and robots rules
- A self-contained WordPress test theme in `wordpress/`

The existing Studio Pulse and QA Manager repositories are unrelated and are not
used by this website.

## Test the original website

Requirements: Node.js 22.13 or later.

```bash
npm ci
npm run dev
```

For a production verification:

```bash
npm test
```

## Test in WordPress

The installable theme package is:

`wordpress/hyperspace-architecture-theme.zip`

In a WordPress test site:

1. Open **Appearance → Themes → Add New → Upload Theme**.
2. Upload `hyperspace-architecture-theme.zip`.
3. Install and activate **Hyperspace Architecture**.
4. The theme creates the required test pages and sets the custom homepage.

The WordPress build is intended for visual and compatibility testing before a
hosting provider and domain are selected. Its content can later be moved into
editable WordPress custom fields or blocks without changing the approved design.

## Safe update workflow

Future website instructions should be implemented on a separate branch and
reviewed before being merged into `main`. The live production domain should only
be connected after the staging version, redirects, analytics and SEO migration
have been checked.
