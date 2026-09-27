import Link from "next/link";
import { services } from "@/content/services";
import Logo from "./Logo";

const COMPANY = [
  { href: "/how-we-work", label: "How we work" },
  { href: "/who-we-work-with", label: "Who we work with" },
  { href: "/about", label: "About" },
  { href: "/faq", label: "FAQ" },
];

export default function Footer() {
  return (
    <footer className="mt-auto border-t border-rule bg-stone">
      <div className="wrap grid gap-10 py-14 md:grid-cols-12 md:gap-12 md:py-16">
        <div className="md:col-span-5">
          <Logo />
          <p className="mt-4 max-w-xs text-[0.9375rem] leading-relaxed text-muted">
            Local SEO. Top 3 on Google in one week, maintained every month.
          </p>
        </div>

        <nav aria-label="Services" className="md:col-span-4">
          <p className="text-[0.8125rem] font-medium text-muted">What we do</p>
          <ul className="mt-4 grid gap-1 text-[0.9375rem]">
            {services.map((s) => (
              <li key={s.slug}>
                <Link href={`/what-we-do/${s.slug}`} className="inline-block py-1 text-ink hover:text-accent">
                  {s.name}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <nav aria-label="Company" className="md:col-span-3">
          <p className="text-[0.8125rem] font-medium text-muted">AC North</p>
          <ul className="mt-4 grid gap-1 text-[0.9375rem]">
            {COMPANY.map((l) => (
              <li key={l.href}>
                <Link href={l.href} className="inline-block py-1 text-ink hover:text-accent">
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>

      <div className="border-t border-rule">
        <div className="wrap py-6 text-[0.8125rem] text-muted">© {new Date().getFullYear()} AC North</div>
      </div>
    </footer>
  );
}
