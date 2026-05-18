import type { Trip, UserStats } from "@/lib/types";

export default function StatTiles({ stats, trips }: { stats: UserStats; trips: Trip[] }) {
  const uniqueCities = new Set(trips.map((t) => t.city)).size;

  const tiles = [
    { n: String(stats.total_trips), l: "TRIP" },
    { n: String(trips.length > 0 ? trips.length * 3 : 0), l: "DESTINASI" },
    { n: String(uniqueCities), l: "KOTA" },
  ];

  return (
    <div className="grid grid-cols-3 gap-2">
      {tiles.map(({ n, l }) => (
        <div
          key={l}
          className="flex flex-col items-center justify-center rounded-[16px] py-3"
          style={{
            background: "rgba(255,255,255,0.85)",
            border: "1px solid rgba(0,0,0,0.05)",
            boxShadow: "0px 10px 24px 0px rgba(20,30,40,0.22)",
          }}>
          <span className="font-sans text-[24px] font-medium leading-tight text-[#1F2A37]">{n}</span>
          <span className="font-display text-[11px] font-semibold uppercase tracking-[0.4px] text-[#5B6470]">{l}</span>
        </div>
      ))}
    </div>
  );
}
