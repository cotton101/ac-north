import Image from "next/image";
import Link from "next/link";

export default function Logo() {
  return (
    <Link
      href="/"
      className="inline-flex items-center gap-2.5 text-[1.0625rem] font-semibold tracking-[-0.01em] text-ink"
    >
      <Image src="/logo-mark.png" alt="" width={30} height={30} priority className="h-[30px] w-[30px]" />
      AC North
    </Link>
  );
}
