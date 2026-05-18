import type { Destination } from "@/lib/types";
import DestinationCard from "./DestinationCard";

const HEIGHTS = ["md", "lg", "sm", "lg", "sm", "md"] as const;

export default function DestinationGrid({ destinations }: { destinations: Destination[] }) {
  if (destinations.length === 0) {
    return (
      <div className="flex flex-col items-center justify-center py-16 text-center">
        <p className="font-display text-[15px] text-[#5B6470]">Destinasi tidak ditemukan.</p>
        <p className="font-display text-[13px] text-[#9AA3AD] mt-1">Coba ubah filter atau kata kunci.</p>
      </div>
    );
  }

  return (
    <div className="columns-1 gap-3 sm:columns-2 lg:columns-3">
      {destinations.map((dest, i) => (
        <div key={dest.id} className="mb-3 break-inside-avoid">
          <DestinationCard destination={dest} height={HEIGHTS[i % HEIGHTS.length]} />
        </div>
      ))}
    </div>
  );
}
