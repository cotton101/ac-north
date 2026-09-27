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
    <footer className="mt-auto bg-ink text-paper">
      <div className="wrap grid gap-12 py-16 md:grid-cols-12">
        <div className="md:col-span-5">
          <Logo inverted />
          <p className="mt-4 max-w-xs text-[0.9375rem] leading-relaxed text-paper/65">
            Local SEO. Top 3 on Google in one week, maintained every month.
          </p>
        </div>

        <nav aria-label="Services" className="md:col-span-4">
          <p className="text-[0.8125rem] font-medium text-paper/50">What we do</p>
          <ul className="mt-4 grid gap-2.5 text-[0.9375rem]">
            {services.map((s) => (
              <li key={s.slug}>
                <Link href={`/what-we-do/${s.slug}`} className="text-paper/85 hover:text-paper">
                  {s.name}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <nav aria-label="Company" className="md:col-span-3">
          <p className="text-[0.8125rem] font-medium text-paper/50">AC North</p>
          <ul className="mt-4 grid gap-2.5 text-[0.9375rem]">
            {COMPANY.map((l) => (
              <li key={l.href}>
                <Link href={l.href} className="text-paper/85 hover:text-paper">
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>

      <div className="border-t border-paper/10">
        <div className="wrap py-6 text-[0.8125rem] text-paper/50">
          © {new Date().getFullYear()} AC North
        </div>
      </div>
    </footer>
  );
}
