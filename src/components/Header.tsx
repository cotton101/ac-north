import Link from "next/link";
import { NAV } from "@/lib/site";
import { services } from "@/content/services";
import Logo from "./Logo";
import MobileNav from "./MobileNav";

export default function Header() {
  return (
    <header className="relative border-b border-rule bg-paper">
      <div className="wrap flex h-16 items-center justify-between">
        <Logo />

        <nav aria-label="Main" className="hidden md:block">
          <ul className="flex items-center gap-8 text-[0.9375rem]">
            {NAV.map((item) =>
              item.href === "/what-we-do" ? (
                <li key={item.href} className="group relative">
                  <Link
                    href={item.href}
                    className="flex items-center gap-1.5 text-ink hover:text-accent"
                  >
                    {item.label}
                    <svg width="10" height="10" viewBox="0 0 10 10" aria-hidden="true" className="text-muted">
                      <path d="M2 3.5 L5 6.5 L8 3.5" fill="none" stroke="currentColor" strokeWidth="1.2" />
                    </svg>
                  </Link>
                  <div className="invisible absolute left-1/2 top-full z-20 w-72 -translate-x-1/2 pt-3 opacity-0 group-focus-within:visible group-focus-within:opacity-100 group-hover:visible group-hover:opacity-100">
                    <ul className="border border-rule bg-paper py-2 shadow-[0_8px_24px_-12px_rgba(28,28,26,0.18)]">
                      {services.map((s) => (
                        <li key={s.slug}>
                          <Link
                            href={`/what-we-do/${s.slug}`}
                            className="block px-4 py-2 text-ink hover:bg-stone"
                          >
                            {s.name}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                </li>
              ) : (
                <li key={item.href}>
                  <Link href={item.href} className="text-ink hover:text-accent">
                    {item.label}
                  </Link>
                </li>
              ),
            )}
          </ul>
        </nav>

        <MobileNav />
      </div>
    </header>
  );
}
