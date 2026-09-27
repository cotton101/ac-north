import type { Metadata } from "next";
import PageHeader from "@/components/PageHeader";
import Section from "@/components/Section";
import NumberedList from "@/components/NumberedList";
import NextPage from "@/components/NextPage";

export const metadata: Metadata = {
  title: "Who we work with",
  description:
    "AC North works with local service businesses, professional services, online shops and multi-location businesses whose customers search for them on Google.",
  alternates: { canonical: "/who-we-work-with" },
};

const TYPES = [
  {
    title: "Local service businesses",
    body: "Trades, clinics, salons, garages and other businesses whose customers search for a service near them. Most of the work goes into map results and location searches.",
  },
  {
    title: "Professional services",
    body: "Accountants, solicitors, consultants and similar firms, where people research before choosing. The focus is on clear service pages and answering the questions clients ask.",
  },
  {
    title: "Online shops",
    body: "Shops selling to customers across the country. The focus is on category and product pages, site structure and speed.",
  },
  {
    title: "Businesses with more than one location",
    body: "Separate Google Business Profiles and location pages for each branch, kept consistent and managed together.",
  },
  {
    title: "New businesses and new websites",
    body: "Sites that Google has not yet ranked. The first week sets up everything a new site needs to be found.",
  },
];

export default function WhoWeWorkWith() {
  return (
    <>
      <PageHeader
        crumbs={[{ href: "/who-we-work-with", label: "Who we work with" }]}
        title="Who we work with"
        lead="Any business whose customers search for it on Google. The work adjusts to the type of business and the searches that matter to it."
      />

      <Section title="Types of business">
        <ul className="border-t border-ink">
          {TYPES.map((t) => (
            <li key={t.title} className="grid gap-2 border-b border-rule py-6 sm:grid-cols-[14rem_1fr] sm:gap-8">
              <h3 className="text-lg font-semibold tracking-[-0.01em]">{t.title}</h3>
              <p className="max-w-[55ch] leading-relaxed text-muted">{t.body}</p>
            </li>
          ))}
        </ul>
      </Section>

      <Section title="What we need from you" tone="stone">
        <NumberedList
          items={[
            "Access to your website, or to whoever manages it.",
            "Access to your Google Business Profile. We can set one up if you do not have one.",
            "A short conversation about your services and customers.",
          ]}
        />
      </Section>

      <NextPage href="/about" label="About AC North" note="How we approach SEO." />
    </>
  );
}
