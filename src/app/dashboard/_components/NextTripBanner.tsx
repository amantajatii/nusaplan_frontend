import Link from "next/link";
import { CalendarIcon, ArrowRightIcon } from "../../components/icons";
import type { Trip } from "@/lib/types";

export default function NextTripBanner({ trip }: { trip: Trip | null }) {
  if (!trip) return null;

  const created = new Date(trip.created_at);
  const dateStr = created.toLocaleDateString("id-ID", { day: "numeric", month: "short", year: "numeric" });

  return (
    <div
      className="relative h-23.75 overflow-hidden rounded-3xl bg-[#0E5155]"
      style={{ boxShadow: "0px 24px 50px -26px rgba(20,30,40,0.45)" }}>
      <div className="absolute inset-0 bg-linear-to-r from-[#0E5155] via-[#1BA1AA]/80 to-[#1BA1AA]/30" />
      <div className="absolute inset-0 flex items-center gap-3 px-5">
        <div
          className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full"
          style={{ background: "rgba(255,255,255,0.15)", border: "1px solid rgba(255,255,255,0.25)" }}>
          <CalendarIcon className="h-5 w-5 text-white" />
        </div>
        <div className="flex flex-col gap-0.5">
          <p className="font-display text-[10.5px] font-bold uppercase tracking-[0.7px] text-white/80">
            TRIP TERBARU
          </p>
          <p className="font-sans text-[17px] font-medium leading-tight tracking-[-0.2px] text-white">
            {trip.title} · {trip.duration_days} hari
          </p>
          <p className="font-display text-[12px] font-medium text-white/80">
            {trip.city} · {dateStr}
          </p>
        </div>
        <div className="flex-1" />
        <Link
          href={`/chat`}
          className="flex h-9 shrink-0 items-center gap-1.5 rounded-full bg-white px-3.5 font-display text-[12.5px] font-semibold text-[#1F2A37] transition-opacity hover:opacity-90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/70">
          Buka
          <ArrowRightIcon className="h-3.5 w-3.5" />
        </Link>
      </div>
    </div>
  );
}
