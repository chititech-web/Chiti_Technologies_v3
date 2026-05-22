"use client";

import Image from "next/image";
import { Link } from "@/i18n/routing";

export default function Logo() {
  return (
    <Link href="/" className="flex items-center gap-2.5 group">
      <Image
        src="/logo.png"
        alt="Chiti Studio"
        width={36}
        height={36}
        className="rounded-lg"
      />
      <span className="text-on-surface font-headline font-bold text-lg tracking-[-0.02em]">
        CHITI
      </span>
    </Link>
  );
}
