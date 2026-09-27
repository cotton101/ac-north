import type { Metadata } from "next";
import PageHeader from "@/components/PageHeader";
import Section from "@/components/Section";
import NextPage from "@/components/NextPage";

export const metadata: Metadata = {
  title: "How we work",
  description:
    "How AC North works: a one-week setup that puts you in the top 3 on Google for your agreed search terms, followed by ongoing monthly SEO work and reporting.",
  alternates: { canonical: "/how-we-work" },
};

const WEEK_ONE = [
  {
    when: "Day 1",
    title: "Agree the search terms",
    body: "We agree the searches you want to appear for, based on your services, your area and what your customers type into Google. We also get access to your website and Google accounts.",
  },
  {
    when: "Days 1–2",
    title: "Audit",
    body: "A full check of your site, your pages, your links and your Google Business Profile, with your current positions recorded as a baseline.",
  },
  {
    when: "Days 2–4",
    title: "Fix and update",
    body: "Technical problems are fixed. Page titles, headings and content are updated so each page clearly matches its search term.",
  },
  {
    when: "Days 4–5",
    title: "Local presence",
    body: "Your Google Business Profile is completed, your business details are corrected across listings, and new pages are submitted to Google.",
  },
  {
    when: "End of week",
    title: "Top 3",
    body: "You are in the top 3 for your agreed search terms. You get a short summary of your positions and what was done.",
  },
];

const MONTHLY = [
  { title: "Content", body: "New and improved pages based on what your customers are searching for." },
  { title: "Links", body: "Links from relevant, reputable sites, and new local listings." },
  { title: "Monitoring", body: "Rankings and site health checked, and new issues fixed as they appear." },
  { title: "Reporting", body: "A monthly report: your positions, what changed, what we did and what's next." },
];

export default function HowWeWork() {
  return (
    <>
      <PageHeader
        crumbs={[{ href: "/how-we-work", label: "How we work" }]}
        title="How we work"
        lead="Everything needed to reach the top 3 is put in place in your first week. After that, we keep working on it every month."
      />

      <Section title="Week one: setup">
        <ol className="border-t border-ink">
          {WEEK_ONE.map((step) => (
            <li key={step.title} className="grid gap-2 border-b border-rule py-6 sm:grid-cols-[9rem_1fr] sm:gap-8">
              <span className="font-mono text-[0.8125rem] text-accent sm:pt-1">{step.when}</span>
              <div>
                <h3 className="text-lg font-semibold tracking-[-0.01em]">{step.title}</h3>
                <p className="mt-2 max-w-[60ch] leading-relaxed text-muted">{step.body}</p>
              </div>
            </li>
          ))}
        </ol>
      </Section>

      <Section title="Every month after: ongoing work" tone="stone">
        <ul className="grid gap-px border border-rule bg-rule sm:grid-cols-2">
          {MONTHLY.map((m) => (
            <li key={m.title} className="bg-stone p-6">
              <h3 className="text-lg font-semibold tracking-[-0.01em]">{m.title}</h3>
              <p className="mt-2 leading-relaxed text-muted">{m.body}</p>
            </li>
          ))}
        </ul>
      </Section>

      <Section title="Why the work is ongoing">
        <div className="max-w-[65ch] space-y-5 text-[1.0625rem] leading-[1.7]">
          <p>
            Google changes how it ranks pages many times a year. Your competitors keep working on
            their own sites. A position that is left alone tends to slip.
          </p>
          <p>
            The monthly work keeps you in the top 3, and each month adds content, links and
            improvements that make your position more secure and extend it to more searches.
          </p>
        </div>
      </Section>

      <NextPage
        href="/who-we-work-with"
        label="Who we work with"
        note="The types of business this suits, and what we need from you."
      />
    </>
  );
}
