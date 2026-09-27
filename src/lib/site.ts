// Used for canonicals, social images, the sitemap and structured data.
// www.acnorth.co.uk does not resolve yet, so cards were pointing at a snapshot that never loaded.
// Switch this to the custom domain once it serves the site.
export const SITE_URL = "https://ac-north.vercel.app";

export const SITE_NAME = "AC North";

export const SITE_DESCRIPTION =
  "AC North does local SEO. We get your business into the top 3 on Google Maps and local search for your agreed search terms within a week, then keep working on it every month.";

export const NAV = [
  { href: "/what-we-do", label: "What we do" },
  { href: "/how-we-work", label: "How we work" },
  { href: "/who-we-work-with", label: "Who we work with" },
  { href: "/about", label: "About" },
  { href: "/faq", label: "FAQ" },
] as const;
