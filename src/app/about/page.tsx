import type { Metadata } from "next";
import PageHeader from "@/components/PageHeader";
import Section from "@/components/Section";
import NextPage from "@/components/NextPage";

export const metadata: Metadata = {
  title: "About",
  description:
    "About AC North: an SEO company that follows Google's guidelines, fixes the basics first, writes for people and reports plainly.",
  alternates: { canonical: "/about" },
};

const PRINCIPLES = [
  {
    title: "We follow Google's guidelines",
    body: "No bought links, hidden text or other tactics that risk a penalty. The work is the kind Google says it wants to reward.",
  },
  {
    title: "We fix the basics first",
    body: "Most ranking problems come from a small number of causes: pages Google cannot read, pages that do not match the search, and a thin local presence. These are dealt with before anything else.",
  },
  {
    title: "We write for people",
    body: "Pages are written to be useful to the person searching. Google ranks pages that answer the search, and people are more likely to act on them.",
  },
  {
    title: "We report plainly",
    body: "Every month you see your positions, the work done and the plan ahead, in plain English.",
  },
];

export default function About() {
  return (
    <>
      <PageHeader
        crumbs={[{ href: "/about", label: "About" }]}
        title="About AC North"
        lead="AC North is a search engine optimisation company. We get businesses into the top 3 on Google and keep them there."
      />

      <Section title="What we focus on">
        <div className="max-w-[65ch] space-y-5 text-[1.0625rem] leading-[1.7]">
          <p>
            We do one thing: SEO for Google. We do not build websites, run paid ads or manage
            social media. Keeping to one area means every hour goes into the work that affects your
            rankings.
          </p>
          <p>
            Each client has agreed search terms, a one-week setup and ongoing monthly work, measured
            by where they rank.
          </p>
        </div>
      </Section>

      <Section title="How we approach SEO" tone="stone">
        <ul className="grid gap-px border border-rule bg-rule sm:grid-cols-2">
          {PRINCIPLES.map((p) => (
            <li key={p.title} className="bg-stone p-6">
              <h3 className="text-lg font-semibold tracking-[-0.01em]">{p.title}</h3>
              <p className="mt-2 leading-relaxed text-muted">{p.body}</p>
            </li>
          ))}
        </ul>
      </Section>

      <NextPage href="/faq" label="Questions" note="Answers to common questions about SEO and how we work." />
    </>
  );
}
