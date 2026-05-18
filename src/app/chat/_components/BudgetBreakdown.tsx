import type { Itinerary } from "@/lib/types";
import { CarIcon, UtensilsIcon, TicketIcon, MoreHorizontalIcon } from "../../components/icons";

function categorize(itinerary: Itinerary) {
  const buckets: Record<string, number> = { transport: 0, kuliner: 0, tiket: 0, lainnya: 0 };
  for (const day of itinerary.days) {
    for (const a of day.activities) {
      const cat = a.category.toLowerCase();
      if (cat.includes("transport") || cat.includes("travel")) buckets.transport += a.estimated_cost;
      else if (cat.includes("kuliner") || cat.includes("food") || cat.includes("makan")) buckets.kuliner += a.estimated_cost;
      else if (cat.includes("tiket") || cat.includes("ticket") || cat.includes("wisata") || cat.includes("activity")) buckets.tiket += a.estimated_cost;
      else buckets.lainnya += a.estimated_cost;
    }
  }
  return buckets;
}

export default function BudgetBreakdown({ itinerary }: { itinerary: Itinerary }) {
  const b = categorize(itinerary);
  const total = Object.values(b).reduce((s, v) => s + v, 0) || 1;
  const pct = (v: number) => Math.round((v / total) * 100);

  const rows = [
    { icon: <CarIcon className="h-3.5 w-3.5 text-[#5B6470]" />, label: "Transport", value: b.transport, color: "#1BA1AA" },
    { icon: <UtensilsIcon className="h-3.5 w-3.5 text-[#5B6470]" />, label: "Kuliner", value: b.kuliner, color: "#FDBF3A" },
    { icon: <TicketIcon className="h-3.5 w-3.5 text-[#5B6470]" />, label: "Tiket", value: b.tiket, color: "#1F2A37" },
    { icon: <MoreHorizontalIcon className="h-3.5 w-3.5 text-[#5B6470]" />, label: "Lainnya", value: b.lainnya, color: "#9CA3AF" },
  ];

  return (
    <div className="mx-3 rounded-[22px] bg-[#FAF7F1] p-5">
      <div className="flex items-start justify-between">
        <p className="font-display text-[11px] font-semibold uppercase tracking-[0.8px] text-[#5B6470]">
          BUDGET BREAKDOWN
        </p>
        <p className="font-sans text-[18px] font-medium tracking-[-0.2px] text-[#1F2A37]">
          ± Rp {total.toLocaleString("id-ID")}
        </p>
      </div>

      <div className="mt-4 flex h-2 overflow-hidden rounded-full">
        {rows.map((r) => (
          <div key={r.label} className="h-full" style={{ width: `${pct(r.value)}%`, background: r.color }} />
        ))}
      </div>

      <div className="mt-4 grid grid-cols-2 gap-x-8 gap-y-3">
        {rows.map((r) => (
          <div key={r.label} className="flex items-center gap-2">
            <div className="flex h-7 w-7 shrink-0 items-center justify-center rounded-lg bg-black/4">
              {r.icon}
            </div>
            <div className="min-w-0 flex-1">
              <div className="flex items-center justify-between">
                <span className="font-display text-[12.5px] font-semibold text-[#1F2A37]">{r.label}</span>
                <span className="font-display text-[12.5px] font-medium text-[#5B6470]">{pct(r.value)}%</span>
              </div>
              <p className="font-display text-[11px] font-medium text-[#5B6470]">
                Rp {r.value.toLocaleString("id-ID")}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
