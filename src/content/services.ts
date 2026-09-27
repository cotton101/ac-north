export type Service = {
  slug: string;
  name: string;
  /** One line used in lists. */
  summary: string;
  metaTitle: string;
  metaDescription: string;
  intro: string;
  why: string[];
  whatWeDo: string[];
  firstWeek: string[];
  monthly: string[];
  outcome: string;
  related: string[];
};

export const services: Service[] = [
  {
    slug: "technical-seo",
    name: "Technical SEO",
    summary: "Making sure Google can find, read and load every important page on your site.",
    metaTitle: "Technical SEO",
    metaDescription:
      "Technical SEO from AC North: crawling and indexing, page speed, mobile usability, site structure and structured data, fixed in your first week and monitored every month.",
    intro:
      "Before a page can rank, Google has to be able to find it, read it and load it quickly. Technical SEO covers the parts of a website that affect this. Most visitors never see them, but they decide whether your pages can appear in results at all.",
    why: [
      "Pages that Google cannot crawl or index do not appear in search results, however good the content is.",
      "Slow pages and poor mobile layouts are measured by Google and can hold rankings back.",
      "Errors build up over time as a site changes. A page that worked last year can quietly break.",
    ],
    whatWeDo: [
      "Crawl the whole site the way Google does and list every error.",
      "Check which pages Google has indexed in Search Console, and why others have been left out.",
      "Fix broken links, redirect chains and pages returning errors.",
      "Improve page speed and Core Web Vitals, starting with the slowest templates.",
      "Check mobile layout and usability on real devices.",
      "Tidy site structure and URLs so important pages are close to the home page.",
      "Set up an XML sitemap and a correct robots.txt file.",
      "Add structured data so Google understands what each page is about.",
      "Resolve duplicate pages with canonical tags or redirects.",
    ],
    firstWeek: [
      "Full crawl and Search Console review",
      "Critical errors and broken pages fixed",
      "Sitemap submitted and indexing requested for key pages",
      "Speed fixes on the most visited templates",
    ],
    monthly: [
      "Search Console checked for new errors",
      "Speed and mobile checks after any site changes",
      "New issues fixed as they appear",
    ],
    outcome:
      "A site Google can crawl without errors, that loads quickly on phones and computers, with every important page indexed.",
    related: ["seo-audits", "on-page-seo", "reporting"],
  },
  {
    slug: "on-page-seo",
    name: "On-page SEO",
    summary: "Making each page clearly match what people type into Google.",
    metaTitle: "On-page SEO",
    metaDescription:
      "On-page SEO from AC North: page titles, descriptions, headings and internal links written so each page clearly matches the searches your customers make.",
    intro:
      "Google ranks pages, not websites. On-page SEO makes sure each page targets a clear search term and says so in the places Google reads most closely: the page title, headings, opening text and the links pointing to it from the rest of your site.",
    why: [
      "A page that tries to cover everything tends to rank for nothing in particular.",
      "Page titles and descriptions are what people read in the results. They decide whether someone clicks.",
      "Internal links tell Google which pages on your site matter most.",
    ],
    whatWeDo: [
      "Match each important page to one main search term and a few close variations.",
      "Rewrite page titles and meta descriptions to be clear and accurate.",
      "Set out headings in a logical order, with one main heading per page.",
      "Add internal links between related pages, using descriptive link text.",
      "Write alt text for images and reduce oversized image files.",
      "Find pages competing for the same search term and merge or refocus them.",
    ],
    firstWeek: [
      "Search terms mapped to pages",
      "Titles, descriptions and headings rewritten on key pages",
      "Internal links added to priority pages",
    ],
    monthly: [
      "Titles and descriptions adjusted based on click-through rates",
      "New pages set up correctly as they are added",
      "Internal links updated as the site grows",
    ],
    outcome:
      "Every important page has a clear purpose, a clear title and a clear place in your site, so Google knows which page to show for which search.",
    related: ["content", "technical-seo", "local-seo"],
  },
  {
    slug: "content",
    name: "Content",
    summary: "Writing the pages your customers are searching for.",
    metaTitle: "SEO content",
    metaDescription:
      "SEO content from AC North: search research, content planning and plainly written service pages, location pages and guides that answer what your customers search for.",
    intro:
      "People search in their own words, and they often ask questions. If your site has no page that answers a search, Google will show someone else's. Content work finds those searches and gives each one a page worth ranking.",
    why: [
      "Google can only rank you for what your site actually covers.",
      "Competitors often rank because they have a page on a topic and you do not.",
      "Useful, accurate pages earn links and keep visitors on your site.",
    ],
    whatWeDo: [
      "Research the terms and questions your customers use, with real search volumes.",
      "Compare your site with competitors to find the topics you are missing.",
      "Plan which pages to write, rewrite or combine, in order of value.",
      "Write service pages, location pages and guides in plain English.",
      "Update older pages that have dropped in rankings or gone out of date.",
    ],
    firstWeek: [
      "Search research completed",
      "Content plan agreed with you",
      "Priority pages rewritten or created",
    ],
    monthly: [
      "New pages written from the content plan",
      "Existing pages updated where rankings slip",
      "Plan reviewed against new search data",
    ],
    outcome:
      "A site that covers what your customers search for, written clearly enough that people read it and Google ranks it.",
    related: ["on-page-seo", "links-and-authority", "local-seo"],
  },
  {
    slug: "local-seo",
    name: "Local SEO",
    summary: "Showing up in the map results and local searches near you.",
    metaTitle: "Local SEO",
    metaDescription:
      "Local SEO from AC North: Google Business Profile, consistent business listings, reviews and location pages, so you appear in map results and local searches.",
    intro:
      "When someone searches for a service near them, Google shows a map with a short list of businesses above the normal results. Local SEO is the work that decides who appears in that list and how high.",
    why: [
      "For many local businesses, the map results get more clicks than anything else on the page.",
      "Google checks that your business details match across the web. Inconsistencies cost trust.",
      "The number, quality and recency of reviews all affect local rankings.",
    ],
    whatWeDo: [
      "Set up or complete your Google Business Profile: categories, services, areas, hours and photos.",
      "Make your business name and details consistent across directories and listing sites.",
      "Set up a simple process for asking customers for reviews, and reply to reviews.",
      "Create or improve location pages on your website for the areas you serve.",
      "Find local links from associations, suppliers and local organisations.",
    ],
    firstWeek: [
      "Google Business Profile completed and verified",
      "Main directory listings corrected",
      "Location pages reviewed or created",
    ],
    monthly: [
      "Regular Google Business Profile posts and photo updates",
      "Review requests and replies",
      "New local listings and links",
    ],
    outcome:
      "A complete, accurate business profile that appears in the map results for the searches that matter in your area.",
    related: ["links-and-authority", "content", "reporting"],
  },
  {
    slug: "links-and-authority",
    name: "Links and authority",
    summary: "Earning links from other websites that Google trusts.",
    metaTitle: "Links and authority",
    metaDescription:
      "Link building from AC North: earning relevant links from reputable websites, reviewing your existing links and removing harmful ones. No bought links.",
    intro:
      "Google treats a link from another website as a signal that your site is worth referring to. Links from relevant, reputable sites help your pages rank. Links from poor or unrelated sites do not help, and can cause problems.",
    why: [
      "Links remain one of the strongest signals Google uses to rank pages.",
      "In competitive searches, the sites at the top usually have more relevant links than the rest.",
      "Bought or low-quality links can lead to ranking drops.",
    ],
    whatWeDo: [
      "Review the links your site already has and identify any that could cause harm.",
      "List your business with relevant industry directories and trade associations.",
      "Arrange links from suppliers, partners and organisations you already work with.",
      "Pitch useful stories and information to local and trade press.",
      "Create pages that other sites have a reason to reference.",
      "We do not buy links or use link networks.",
    ],
    firstWeek: [
      "Existing links reviewed",
      "Harmful links dealt with",
      "Industry and association listings submitted",
    ],
    monthly: [
      "New links earned from relevant sites",
      "Press and partner outreach",
      "New incoming links checked",
    ],
    outcome:
      "A steady build-up of links from sites that are relevant to your business, with nothing that puts your rankings at risk.",
    related: ["content", "local-seo", "seo-audits"],
  },
  {
    slug: "seo-audits",
    name: "SEO audits",
    summary: "A full check of your site, with a clear list of what to fix first.",
    metaTitle: "SEO audits",
    metaDescription:
      "SEO audits from AC North: a full review of your site's technical health, pages, content, links and local presence, with a prioritised list of fixes.",
    intro:
      "Every piece of work starts with an audit. It shows where your site stands, why it ranks where it does and what is holding it back. The result is a list of fixes, ordered by how much difference each one will make.",
    why: [
      "Without an audit, work tends to go on whatever is easiest rather than what matters most.",
      "Many ranking problems have a single clear cause that is quick to fix once found.",
      "An audit gives a fixed starting point to measure progress against.",
    ],
    whatWeDo: [
      "Technical review: crawling, indexing, speed, mobile and errors.",
      "Page review: titles, headings, content and internal links.",
      "Content review: what you cover, what you are missing and what competitors rank for.",
      "Link review: the sites that link to you and the quality of those links.",
      "Local review: Google Business Profile, listings and reviews.",
      "Current rankings for your agreed search terms, recorded as a baseline.",
    ],
    firstWeek: [
      "Audit completed in the first two days",
      "Findings and fix list shared with you",
      "Baseline rankings recorded",
    ],
    monthly: [
      "Quarterly re-audit to catch new issues",
      "Fix list updated as work is completed",
    ],
    outcome:
      "A clear picture of your site, a prioritised list of fixes and a baseline that every later report is measured against.",
    related: ["technical-seo", "reporting", "on-page-seo"],
  },
  {
    slug: "reporting",
    name: "Reporting",
    summary: "A monthly report showing where you rank and what we did.",
    metaTitle: "SEO reporting",
    metaDescription:
      "SEO reporting from AC North: a plain monthly report showing your Google position for each agreed search term, traffic from search, the work completed and the plan for next month.",
    intro:
      "You should always know where you rank and what has been done. Every month you get a short report written in plain English, showing your position for each agreed search term and the work behind it.",
    why: [
      "Rankings, traffic and enquiries are the measures that matter to a business.",
      "Seeing the work alongside the results makes it clear what is having an effect.",
      "A regular report keeps both sides working from the same information.",
    ],
    whatWeDo: [
      "Your Google position for each agreed search term, compared with last month.",
      "Visits to your site from Google search.",
      "Calls, direction requests and website visits from your Google Business Profile.",
      "A list of the work completed that month.",
      "The plan for the month ahead.",
    ],
    firstWeek: [
      "Search terms agreed and baseline positions recorded",
      "Search Console and Analytics connected",
      "End-of-week summary of positions",
    ],
    monthly: [
      "Monthly report delivered",
      "Positions tracked for every agreed search term",
    ],
    outcome:
      "A short, readable report each month that shows where you rank, what changed and what happens next.",
    related: ["seo-audits", "local-seo", "technical-seo"],
  },
];

export function getService(slug: string) {
  return services.find((s) => s.slug === slug);
}
