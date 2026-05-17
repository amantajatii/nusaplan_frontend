import Image from "next/image";
import Link from "next/link";
import { CalendarIcon, ArrowRightIcon } from "../../components/icons";

export default function NextTripBanner() {
  return (
    <div
      className="relative h-[95px] overflow-hidden rounded-3xl"
      style={{ boxShadow: "0px 24px 50px -26px rgba(20,30,40,0.45)" }}>
      <Image
        src="/explore/prambanan.jpg"
        alt="Healing 3 Hari di Jogja"
        fill
        className="object-cover"
        sizes="1362px"
      />
      <div className="absolute inset-0 bg-gradient-to-r from-black/75 via-black/45 to-black/10" />
      <div className="absolute inset-0 flex items-center gap-3 px-5">
        <div
          className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full"
          style={{ background: "rgba(255,255,255,0.15)", border: "1px solid rgba(255,255,255,0.25)" }}>
          <CalendarIcon className="h-5 w-5 text-white" />
        </div>
        <div className="flex flex-col gap-0.5">
          <p className="font-display text-[10.5px] font-bold uppercase tracking-[0.7px] text-white/80">
            TRIP BERIKUTNYA
          </p>
          <p className="font-sans text-[17px] font-medium leading-tight tracking-[-0.2px] text-white">
            Healing 3 Hari di Jogja · 4 hari lagi
          </p>
          <p className="font-display text-[12px] font-medium text-white/80">12 – 14 Mei 2026</p>
        </div>
        <div className="flex-1" />
        <Link
          href="/explore/prambanan"
          className="flex h-9 shrink-0 items-center gap-1.5 rounded-full bg-white px-3.5 font-display text-[12.5px] font-semibold text-[#1F2A37] transition-opacity hover:opacity-90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/70">
          Buka
          <ArrowRightIcon className="h-3.5 w-3.5" />
        </Link>
      </div>
    </div>
  );
}
