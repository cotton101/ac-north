import Link from "next/link";

export default function Logo({ inverted = false }: { inverted?: boolean }) {
  return (
    <Link
      href="/"
      className={`inline-flex items-center gap-2.5 text-[1.0625rem] font-semibold tracking-[-0.01em] ${
        inverted ? "text-paper" : "text-ink"
      }`}
    >
      <svg width="18" height="18" viewBox="0 0 18 18" aria-hidden="true">
        <rect width="18" height="18" rx="2" className={inverted ? "fill-paper" : "fill-accent"} />
        <path
          d="M5 12.5 L9 5 L13 12.5"
          fill="none"
          strokeWidth="1.6"
          strokeLinecap="square"
          className={inverted ? "stroke-ink" : "stroke-paper"}
        />
      </svg>
      AC North
    </Link>
  );
}
