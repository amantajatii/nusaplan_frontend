import type { Trip } from "@/lib/types";
import TripCard from "./TripCard";
import Link from "next/link";

export default function TripCardsRow({ trips }: { trips: Trip[] }) {
  if (trips.length === 0) {
    return (
      <div
        className="flex flex-col items-center justify-center gap-3 rounded-2xl py-10 text-center"
        style={{ background: "rgba(255,255,255,0.7)", border: "1px dashed rgba(27,161,170,0.3)" }}>
        <p className="font-display text-[14px] text-[#5B6470]">Belum ada trip tersimpan</p>
        <Link
          href="/chat"
          className="rounded-full bg-[#1BA1AA] px-5 py-2.5 font-display text-[13px] font-semibold text-white"
          style={{ boxShadow: "0px 14px 30px -10px rgba(27,161,170,0.55)" }}>
          Buat Trip Pertama
        </Link>
      </div>
    );
  }

  return (
    <div className="scrollbar-hide -mx-5 flex gap-8 overflow-x-auto px-5 pb-2">
      {trips.map((trip) => (
        <TripCard key={trip.id} trip={trip} />
      ))}
    </div>
  );
}
