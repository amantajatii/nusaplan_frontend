import Link from "next/link";
import { PlusIcon, MapIcon } from "../../../components/icons";

export default function BottomCTABar() {
  return (
    <div className="fixed bottom-6 left-1/2 z-40 -translate-x-1/2">
      <div
        className="flex items-center gap-2 rounded-full bg-white/90 p-[9px] ring-1 ring-inset ring-black/[0.05]"
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
        <button
          type="button"
          className="flex h-12 w-[100px] shrink-0 items-center justify-center gap-2 rounded-full bg-black/[0.05] font-display text-[14.5px] font-semibold text-[#1F2A37] transition-colors hover:bg-black/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#1BA1AA]/70">
          <MapIcon className="h-4 w-4" />
          Maps
        </button>
      </div>
    </div>
  );
}
