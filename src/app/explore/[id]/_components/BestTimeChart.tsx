import type { Destination } from "../../_data/destinations";
import { CalendarIcon, SunIcon, CloudRainIcon } from "../../../components/icons";

const MONTHS = ["Jan", "Feb", "Mar", "Apr", "Mei", "Jun", "Jul", "Agu", "Sep", "Okt", "Nov", "Des"];

type Props = { destination: Destination };

export default function BestTimeChart({ destination }: Props) {
  const { bestMonths, bestSeasonLabel, rainyTip } = destination;

  return (
    <div className="flex flex-col gap-3">
      {/* Section heading */}
      <div className="flex items-center gap-2">
        <CalendarIcon className="h-4 w-4 text-[#1F2A37]" />
        <h2 className="font-sans text-[20px] font-medium leading-[30px] tracking-[-0.2px] text-[#1F2A37]">
          Waktu terbaik berkunjung
        </h2>
      </div>

      {/* Card */}
      <div
        className="flex flex-col gap-3 rounded-[24px] bg-white px-[17px] pb-[17px] pt-[17px] ring-1 ring-inset ring-black/[0.05]"
        style={{ boxShadow: "0px 12px 14px 0px rgba(20,30,40,0.25)" }}>
        {/* Best season label */}
        <div className="flex items-center gap-2">
          <SunIcon className="h-4 w-4 text-[#FDBF3A]" />
          <span className="font-display text-[14px] font-semibold text-[#1F2A37]">
            Terbaik dikunjungi: {bestSeasonLabel}
          </span>
        </div>

        {/* Month bar chart */}
        <div className="flex flex-col gap-1.5">
          <div className="flex gap-1">
            {MONTHS.map((month, idx) => {
              const active = bestMonths.includes(idx + 1);
              return (
                <div key={month} className="flex flex-1 flex-col items-center gap-1.5">
                  <div
                    className="h-[34px] w-full rounded-full"
                    style={{ background: active ? "#FDBF3A" : "rgba(31,42,55,0.08)" }}
                  />
                  <span
                    className={`font-display text-[10px] leading-[15px] ${
                      active ? "font-bold text-[#1F2A37]" : "font-medium text-[#5B6470]"
                    }`}>
                    {month}
                  </span>
                </div>
              );
            })}
          </div>
        </div>

        {/* Rainy season caption */}
        <div className="flex items-center gap-1.5">
          <CloudRainIcon className="h-3.5 w-3.5 shrink-0 text-[#5B6470]" />
          <span className="font-display text-[12px] font-medium leading-[18px] text-[#5B6470]">{rainyTip}</span>
        </div>
      </div>
    </div>
  );
}
