import Image from "next/image";
import Link from "next/link";

export default function Logo({ inverted = false }: { inverted?: boolean }) {
  return (
    <Link
      href="/"
      className={`inline-flex items-center gap-2.5 text-[1.0625rem] font-semibold tracking-[-0.01em] ${
        inverted ? "text-paper" : "text-ink"
      }`}
    >
      {inverted ? (
        // The logo's navy disappears on a dark background, so it sits on a light tile there.
        <span className="flex h-[34px] w-[34px] items-center justify-center rounded-md bg-paper">
          <Image src="/logo-mark.png" alt="" width={26} height={26} className="h-[26px] w-[26px]" />
        </span>
      ) : (
        <Image src="/logo-mark.png" alt="" width={30} height={30} priority className="h-[30px] w-[30px]" />
      )}
      AC North
    </Link>
  );
}
