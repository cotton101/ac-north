import type { Metadata } from "next";
import Link from "next/link";
import { services } from "@/content/services";
import PageHeader from "@/components/PageHeader";
import Section from "@/components/Section";
import ResultsDiagram from "@/components/ResultsDiagram";
import NextPage from "@/components/NextPage";

export const metadata: Metadata = {
  title: "What we do",
  description:
    "AC North's SEO services: technical SEO, on-page SEO, content, local SEO, links and authority, SEO audits and monthly reporting.",
  alternates: { canonical: "/what-we-do" },
};

export default function WhatWeDo() {
  return (
    <>
      <PageHeader
        crumbs={[{ href: "/what-we-do", label: "What we do" }]}
        title="What we do"
        lead="We improve your website and your presence online so Google ranks you in the top 3 for the searches your customers make."
      />

      <Section title="How Google decides what to show">
        <div className="grid gap-10 lg:grid-cols-8">
          <div className="space-y-5 text-[1.0625rem] leading-[1.7] lg:col-span-5">
            <p>
              When someone searches, Google looks through the pages it knows about and ranks them.
              It considers whether a page answers the search, whether the site works properly, how
              trusted the site is by others, and, for local searches, where the business is.
            </p>
            <p>
              Most people choose from the first few results. Paid ads sit above them, but the top
              3 normal results receive most of the clicks.
            </p>
            <p>
              SEO works on each of the things Google considers. The seven areas below cover them
              all.
            </p>
          </div>
          <ResultsDiagram className="max-w-xs lg:col-span-3" />
        </div>
      </Section>

      <section className="border-b border-rule" aria-label="Services">
        <div className="wrap py-14 md:py-20">
          <ul className="grid gap-px border border-rule bg-rule sm:grid-cols-2 lg:grid-cols-3">
            {services.map((s, i) => (
              <li key={s.slug} className="bg-paper">
                <Link
                  href={`/what-we-do/${s.slug}`}
                  className="group flex h-full flex-col p-6 hover:bg-stone md:p-8"
                >
                  <span className="font-mono text-[0.8125rem] text-accent tabular-nums">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <span className="mt-6 text-xl font-semibold tracking-[-0.015em] group-hover:text-accent">
                    {s.name}
                  </span>
                  <span className="mt-3 leading-relaxed text-muted">{s.summary}</span>
                  <span className="mt-auto pt-6 text-[0.9375rem] text-accent">
                    Read more <span aria-hidden="true">→</span>
                  </span>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <NextPage
        href="/how-we-work"
        label="How we work"
        note="What happens in the first week, and every month after."
      />
    </>
  );
}
