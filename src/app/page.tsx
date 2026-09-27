import type { Metadata } from "next";
import Link from "next/link";
import { services } from "@/content/services";
import ResultsDiagram from "@/components/ResultsDiagram";
import { pageMeta } from "@/lib/metadata";
import { SITE_DESCRIPTION } from "@/lib/site";

export const metadata: Metadata = pageMeta({
  title: { absolute: "AC North — Top 3 on Google in one week" },
  description: SITE_DESCRIPTION,
  path: "/",
  image: "/og/home.jpg",
});

const AUDIENCES = [
  "Trades and home services",
  "Tree surgeons, landscapers and cleaners",
  "Clinics and practices",
  "Weddings, catering and events",
];

export default function Home() {
  return (
    <>
      <section className="border-b border-rule">
        <div className="wrap grid items-start gap-12 py-16 md:grid-cols-12 md:py-24">
          <div className="md:col-span-7">
            <p className="eyebrow">Local SEO</p>
            <h1 className="mt-5 text-[2.75rem] font-semibold leading-[1.02] tracking-[-0.035em] sm:text-6xl lg:text-7xl">
              Top 3 on Google in one week.
            </h1>
            <p className="mt-7 max-w-xl text-lg leading-relaxed text-muted sm:text-xl">
              We get your business into the top 3 on Google Maps and local search for your agreed
              search terms within a week. After that, we keep you there with ongoing monthly work.
            </p>
            <div className="mt-9 flex flex-wrap gap-x-8 gap-y-3 text-[0.9375rem]">
              <Link href="/what-we-do" className="text-link">
                What we do
              </Link>
              <Link href="/how-we-work" className="text-link">
                How we work
              </Link>
            </div>
          </div>
          <ResultsDiagram className="mx-auto w-full max-w-sm md:col-span-5 md:max-w-none" />
        </div>
      </section>

      <section className="border-b border-rule" aria-labelledby="services-title">
        <div className="wrap py-16 md:py-24">
          <div className="grid gap-6 md:grid-cols-12">
            <h2 id="services-title" className="text-[1.75rem] font-semibold tracking-[-0.02em] md:col-span-4">
              What we do
            </h2>
            <p className="max-w-xl text-lg leading-relaxed text-muted md:col-span-8">
              The top 3 businesses on Google get around 70% of the traffic. Google ranks local
              businesses on three things: your Google Business Profile, your website and your
              listings on other sites. We work on all three.
            </p>
          </div>

          <ul className="mt-12 border-t border-ink">
            {services.map((s, i) => (
              <li key={s.slug} className="border-b border-rule">
                <Link
                  href={`/what-we-do/${s.slug}`}
                  className="group grid gap-1 py-5 md:grid-cols-12 md:gap-10 md:py-6"
                >
                  <span className="font-mono text-[0.8125rem] text-accent tabular-nums md:col-span-1 md:pt-1.5">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <span className="text-xl font-semibold tracking-[-0.015em] group-hover:text-accent md:col-span-3">
                    {s.name}
                  </span>
                  <span className="leading-relaxed text-muted md:col-span-7 md:pt-1">{s.summary}</span>
                  <span aria-hidden="true" className="hidden text-muted group-hover:text-accent md:col-span-1 md:block md:pt-1 md:text-right">
                    →
                  </span>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="border-b border-rule bg-stone" aria-labelledby="how-title">
        <div className="wrap grid gap-10 py-16 md:grid-cols-12 md:py-24">
          <div className="md:col-span-4">
            <h2 id="how-title" className="text-[1.75rem] font-semibold tracking-[-0.02em]">
              How we work
            </h2>
            <Link href="/how-we-work" className="text-link mt-4 inline-block text-[0.9375rem]">
              The full process
            </Link>
          </div>
          <div className="grid gap-10 sm:grid-cols-2 md:col-span-8">
            <div className="border-t border-ink pt-5">
              <p className="eyebrow">Week one</p>
              <p className="mt-3 text-xl font-semibold tracking-[-0.015em]">Setup</p>
              <p className="mt-3 leading-relaxed text-muted">
                We measure where you rank, complete your Google Business Profile, fix your website
                and correct your listings on other sites. By the end of the week you are in the top 3
                for your agreed search terms.
              </p>
            </div>
            <div className="border-t border-ink pt-5">
              <p className="eyebrow">Every month after</p>
              <p className="mt-3 text-xl font-semibold tracking-[-0.015em]">Ongoing work</p>
              <p className="mt-3 leading-relaxed text-muted">
                Weekly posts and photos on your profile, new pages and listings, and an update every
                Friday. It keeps you in the top 3 and extends your rankings to more searches.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section aria-labelledby="who-title">
        <div className="wrap grid gap-10 py-16 md:grid-cols-12 md:py-24">
          <div className="md:col-span-4">
            <h2 id="who-title" className="text-[1.75rem] font-semibold tracking-[-0.02em]">
              Who we work with
            </h2>
            <Link href="/who-we-work-with" className="text-link mt-4 inline-block text-[0.9375rem]">
              More about who we work with
            </Link>
          </div>
          <div className="md:col-span-8">
            <p className="max-w-xl text-lg leading-relaxed text-muted">
              Local businesses whose customers search for them on Google. Most of our work is with:
            </p>
            <ul className="mt-8 grid border-t border-rule sm:grid-cols-2">
              {AUDIENCES.map((a) => (
                <li key={a} className="border-b border-rule py-4 text-[1.0625rem] sm:odd:pr-6">
                  {a}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>
    </>
  );
}
