"use client";

import Image from "next/image";
import { Link } from "@/i18n/routing";

export default function Logo() {
  return (
    <Link href="/" className="flex items-center gap-2.5 group">
      <Image
        src="/logo.png"
        alt="Chiti Technologies"
        width={36}
        height={36}
        className="rounded-lg"
      />
      <div className="flex flex-col leading-none">
        <span className="text-on-surface font-headline font-bold text-xl md:text-2xl tracking-[-0.02em]">
          CHITI
        </span>
        <span className="text-on-surface-variant/60 font-headline font-semibold text-[10px] md:text-[11px] tracking-[0.2em]">
          technologies
        </span>
      </div>
    </Link>
  );
}
