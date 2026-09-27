"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { NAV } from "@/lib/site";
import { services } from "@/content/services";

export default function MobileNav() {
  const pathname = usePathname();
  // The menu is open only on the page it was opened on, so navigating closes it.
  const [openOn, setOpenOn] = useState<string | null>(null);
  const open = openOn === pathname;

  // Stop the page scrolling behind the menu, and let Escape close it.
  useEffect(() => {
    if (!open) return;
    const { overflow } = document.body.style;
    document.body.style.overflow = "hidden";
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpenOn(null);
    };
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = overflow;
      window.removeEventListener("keydown", onKey);
    };
  }, [open]);

  return (
    <div className="md:hidden">
      <button
        type="button"
        aria-expanded={open}
        aria-controls="mobile-menu"
        onClick={() => setOpenOn(open ? null : pathname)}
        className="-mr-2 flex h-11 items-center px-2 text-[0.9375rem] text-ink"
      >
        {open ? "Close" : "Menu"}
      </button>

      {open && (
        <nav
          id="mobile-menu"
          aria-label="Main"
          className="fixed inset-x-0 bottom-0 top-16 z-30 overflow-y-auto overscroll-contain border-t border-rule bg-paper"
        >
          <ul className="wrap divide-y divide-rule pb-10">
            {NAV.map((item) => (
              <li key={item.href} className="py-2">
                <Link
                  href={item.href}
                  onClick={() => setOpenOn(null)}
                  aria-current={pathname === item.href ? "page" : undefined}
                  className="block py-2 text-[1.0625rem] text-ink aria-[current=page]:text-accent"
                >
                  {item.label}
                </Link>
                {item.href === "/what-we-do" && (
                  <ul className="mb-2 grid border-l border-rule pl-4">
                    {services.map((s) => (
                      <li key={s.slug}>
                        <Link
                          href={`/what-we-do/${s.slug}`}
                          onClick={() => setOpenOn(null)}
                          aria-current={pathname === `/what-we-do/${s.slug}` ? "page" : undefined}
                          className="block py-1.5 text-[0.9375rem] text-muted aria-[current=page]:text-accent"
                        >
                          {s.name}
                        </Link>
                      </li>
                    ))}
                  </ul>
                )}
              </li>
            ))}
          </ul>
        </nav>
      )}
    </div>
  );
}
