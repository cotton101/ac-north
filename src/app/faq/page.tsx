import type { Metadata } from "next";
import { faqs } from "@/content/faq";
import PageHeader from "@/components/PageHeader";
import JsonLd from "@/components/JsonLd";
import NextPage from "@/components/NextPage";

export const metadata: Metadata = {
  title: "FAQ",
  description:
    "Answers to common questions about SEO and AC North: how quickly you will rank, why SEO is ongoing, SEO versus paid ads, and what we need from you.",
  alternates: { canonical: "/faq" },
};

export default function Faq() {
  return (
    <>
      <PageHeader
        crumbs={[{ href: "/faq", label: "FAQ" }]}
        title="Frequently asked questions"
        lead="Plain answers about SEO and how we work."
      />

      <section className="border-b border-rule">
        <div className="wrap grid py-14 md:grid-cols-12 md:py-20">
          <div className="md:col-span-8 md:col-start-5">
            <div className="border-t border-ink">
              {faqs.map((f) => (
                <details key={f.question} className="group border-b border-rule">
                  <summary className="flex cursor-pointer list-none items-start justify-between gap-6 py-5 text-lg font-semibold tracking-[-0.01em] hover:text-accent [&::-webkit-details-marker]:hidden">
                    {f.question}
                    <span
                      aria-hidden="true"
                      className="mt-1 shrink-0 font-normal text-muted transition-transform group-open:rotate-45"
                    >
                      +
                    </span>
                  </summary>
                  <div className="max-w-[60ch] space-y-4 pb-6 leading-relaxed text-muted">
                    {f.answer.map((a) => (
                      <p key={a}>{a}</p>
                    ))}
                  </div>
                </details>
              ))}
            </div>
          </div>
        </div>
      </section>

      <NextPage href="/what-we-do" label="What we do" note="The seven areas of SEO we work on." />

      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "FAQPage",
          mainEntity: faqs.map((f) => ({
            "@type": "Question",
            name: f.question,
            acceptedAnswer: { "@type": "Answer", text: f.answer.join(" ") },
          })),
        }}
      />
    </>
  );
}
