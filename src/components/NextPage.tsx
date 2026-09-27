import Link from "next/link";

/** End-of-page link to the next page in the reading order. */
export default function NextPage({ href, label, note }: { href: string; label: string; note: string }) {
  return (
    <div className="wrap py-14 md:py-20">
      <Link
        href={href}
        className="group flex flex-col gap-2 border-t border-ink pt-6 sm:flex-row sm:items-baseline sm:justify-between"
      >
        <span className="eyebrow">Next</span>
        <span className="flex-1 sm:pl-10">
          <span className="block text-2xl font-semibold tracking-[-0.02em] group-hover:text-accent sm:text-3xl">
            {label} <span aria-hidden="true">→</span>
          </span>
          <span className="mt-2 block text-muted">{note}</span>
        </span>
      </Link>
    </div>
  );
}
