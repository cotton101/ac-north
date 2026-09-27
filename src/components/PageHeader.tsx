import Link from "next/link";
import JsonLd from "./JsonLd";
import { SITE_URL } from "@/lib/site";

export type Crumb = { href: string; label: string };

export default function PageHeader({
  crumbs,
  title,
  lead,
}: {
  crumbs: Crumb[];
  title: string;
  lead: string;
}) {
  const trail = [{ href: "/", label: "Home" }, ...crumbs];

  return (
    <div className="border-b border-rule">
      <div className="wrap pb-14 pt-12 md:pb-20 md:pt-16">
        <nav aria-label="Breadcrumb">
          <ol className="eyebrow flex flex-wrap items-center gap-x-2">
            {trail.map((c, i) => (
              <li key={c.href} className="flex items-center gap-x-2">
                {i > 0 && <span aria-hidden="true">/</span>}
                {i === trail.length - 1 ? (
                  <span aria-current="page" className="text-ink">
                    {c.label}
                  </span>
                ) : (
                  <Link href={c.href} className="hover:text-ink">
                    {c.label}
                  </Link>
                )}
              </li>
            ))}
          </ol>
        </nav>

        <h1 className="mt-6 max-w-3xl text-[2.25rem] font-semibold leading-[1.1] tracking-[-0.025em] sm:text-5xl">
          {title}
        </h1>
        <p className="mt-6 max-w-2xl text-lg leading-relaxed text-muted sm:text-xl">{lead}</p>
      </div>

      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "BreadcrumbList",
          itemListElement: trail.map((c, i) => ({
            "@type": "ListItem",
            position: i + 1,
            name: c.label,
            item: `${SITE_URL}${c.href === "/" ? "" : c.href}`,
          })),
        }}
      />
    </div>
  );
}
