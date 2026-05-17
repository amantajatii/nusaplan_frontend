import { SparkleIcon, LightbulbIcon, AlertIcon } from "../../components/icons";

const insights = [
  {
    bg: "bg-[rgba(27,161,170,0.10)]",
    icon: <LightbulbIcon className="h-3 w-3 text-[#1BA1AA]" />,
    text: "Prambanan lebih sepi sebelum jam 9 pagi — cahaya juga paling cantik.",
  },
  {
    bg: "bg-[rgba(253,191,58,0.16)]",
    icon: <AlertIcon className="h-3 w-3 text-[#B07A00]" />,
    text: "Bawa uang tunai di area Parangtritis, banyak warung lokal yang belum terima QRIS.",
  },
  {
    bg: "bg-[rgba(253,191,58,0.16)]",
    icon: <AlertIcon className="h-3 w-3 text-[#B07A00]" />,
    text: "Hindari Malioboro sekitar jam 6 sore — biasanya macet padat.",
  },
];

export default function AiInsightsCard() {
  return (
    <div className="mx-3 rounded-[22px] border border-[rgba(27,161,170,0.18)] bg-[rgba(27,161,170,0.05)] p-5">
      {/* Header */}
      <div className="mb-3 flex items-center gap-2">
        <div
          className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full"
          style={{ background: "linear-gradient(135deg, #1BA1AA 0%, #2CC9C8 100%)" }}>
          <SparkleIcon className="h-3.5 w-3.5 text-white" />
        </div>
        <p className="font-display text-[11px] font-bold uppercase tracking-[0.8px] text-[#0F6E75]">
          AI LOCAL INSIGHTS
        </p>
      </div>

      {/* List */}
      <div className="flex flex-col gap-2.5">
        {insights.map((item, i) => (
          <div key={i} className="flex items-start gap-2">
            <span className={`mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full ${item.bg}`}>
              {item.icon}
            </span>
            <p className="font-display text-[13.5px] font-medium leading-[20px] text-[#1F2A37]">
              {item.text}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
