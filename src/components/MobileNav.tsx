"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { NAV } from "@/lib/site";
import { services } from "@/content/services";

export default function MobileNav() {
  const pathname = usePathname();
  // The menu is open only on the page it was opened on, so navigating closes it.
  const [openOn, setOpenOn] = useState<string | null>(null);
  const open = openOn === pathname;

  return (
    <div className="md:hidden">
      <button
        type="button"
        aria-expanded={open}
        aria-controls="mobile-menu"
        onClick={() => setOpenOn(open ? null : pathname)}
        className="-mr-2 flex h-10 items-center gap-2 px-2 text-[0.9375rem] text-ink"
      >
        {open ? "Close" : "Menu"}
      </button>

      {open && (
        <nav
          id="mobile-menu"
          aria-label="Main"
          className="absolute inset-x-0 top-16 z-30 border-b border-rule bg-paper"
        >
          <ul className="wrap divide-y divide-rule">
            {NAV.map((item) => (
              <li key={item.href} className="py-3">
                <Link href={item.href} className="block text-[1.0625rem] text-ink">
                  {item.label}
                </Link>
                {item.href === "/what-we-do" && (
                  <ul className="mt-2 grid gap-1.5 border-l border-rule pl-4">
                    {services.map((s) => (
                      <li key={s.slug}>
                        <Link href={`/what-we-do/${s.slug}`} className="block text-[0.9375rem] text-muted">
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
