import { CarIcon, UtensilsIcon, TicketIcon, MoreHorizontalIcon } from "../../components/icons";

const categories = [
  { icon: <CarIcon className="h-3.5 w-3.5 text-[#5B6470]" />, label: "Transport", pct: "30%", amount: "Rp 294k" },
  { icon: <UtensilsIcon className="h-3.5 w-3.5 text-[#5B6470]" />, label: "Kuliner", pct: "35%", amount: "Rp 343k" },
  { icon: <TicketIcon className="h-3.5 w-3.5 text-[#5B6470]" />, label: "Tiket", pct: "25%", amount: "Rp 245k" },
  { icon: <MoreHorizontalIcon className="h-3.5 w-3.5 text-[#5B6470]" />, label: "Lainnya", pct: "10%", amount: "Rp 98k" },
];

export default function BudgetBreakdown() {
  return (
    <div className="mx-3 rounded-[22px] bg-[#FAF7F1] p-5">
      {/* Header */}
      <div className="flex items-start justify-between">
        <p className="font-display text-[11px] font-semibold uppercase tracking-[0.8px] text-[#5B6470]">
          BUDGET BREAKDOWN
        </p>
        <p className="font-sans text-[18px] font-medium tracking-[-0.2px] text-[#1F2A37]">
          ± Rp 980.000
        </p>
      </div>

      {/* Bar */}
      <div className="mt-4 flex h-2 overflow-hidden rounded-full">
        <div className="h-full bg-[#1BA1AA]" style={{ width: "30%" }} />
        <div className="h-full bg-[#FDBF3A]" style={{ width: "35%" }} />
        <div className="h-full bg-[#1F2A37]" style={{ width: "25%" }} />
        <div className="h-full bg-[#9CA3AF]" style={{ width: "10%" }} />
      </div>

      {/* Category grid */}
      <div className="mt-4 grid grid-cols-2 gap-x-8 gap-y-3">
        {categories.map((c) => (
          <div key={c.label} className="flex items-center gap-2">
            <div className="flex h-7 w-7 shrink-0 items-center justify-center rounded-[8px] bg-black/[0.04]">
              {c.icon}
            </div>
            <div className="min-w-0 flex-1">
              <div className="flex items-center justify-between">
                <span className="font-display text-[12.5px] font-semibold text-[#1F2A37]">{c.label}</span>
                <span className="font-display text-[12.5px] font-medium text-[#5B6470]">{c.pct}</span>
              </div>
              <p className="font-display text-[11px] font-medium text-[#5B6470]">{c.amount}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
