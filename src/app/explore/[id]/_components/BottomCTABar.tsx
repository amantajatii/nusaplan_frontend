import Link from "next/link";
import type { Destination } from "@/lib/types";
import { PlusIcon, MapIcon } from "../../../components/icons";

export default function BottomCTABar({ destination }: { destination: Destination }) {
  const mapsUrl = destination.name
    ? `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(destination.name + " " + destination.city)}`
    : null;
  return (
    <div className="fixed bottom-6 left-1/2 z-40 -translate-x-1/2">
      <div
        className="flex items-center gap-2 rounded-full bg-white/90 p-[9px] ring-1 ring-inset ring-black/5"
        style={{
          width: 672,
          boxShadow: "0px 24px 50px 0px rgba(20,30,40,0.35)",
        }}>
        <Link
          href="/chat"
          className="relative z-10 flex flex-1 items-center justify-center gap-2 rounded-full bg-[#1BA1AA] font-display text-[14.5px] font-semibold text-white transition-colors hover:bg-[#168D95] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#FDBF3A]/80"
          style={{
            height: 48,
            boxShadow: "0px 14px 14px rgba(27,161,170,0.60)",
          }}>
          <PlusIcon className="h-4 w-4" />
          Tambah ke Itinerary
        </Link>
        {mapsUrl ? (
          <a
            href={mapsUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex h-12 w-25 shrink-0 items-center justify-center gap-2 rounded-full bg-black/5 font-display text-[14.5px] font-semibold text-[#1F2A37] transition-colors hover:bg-black/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#1BA1AA]/70">
            <MapIcon className="h-4 w-4" />
            Maps
          </a>
        ) : (
          <button
            type="button"
            disabled
            className="flex h-12 w-25 shrink-0 items-center justify-center gap-2 rounded-full bg-black/5 font-display text-[14.5px] font-semibold text-[#1F2A37] opacity-40">
            <MapIcon className="h-4 w-4" />
            Maps
          </button>
        )}
      </div>
    </div>
  );
}
