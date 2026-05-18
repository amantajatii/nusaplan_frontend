"use client";

import type { ItineraryDay } from "@/lib/types";

export default function DayTabs({
  days,
  activeDay,
  onDayChange,
}: {
  days: ItineraryDay[];
  activeDay: number;
  onDayChange: (i: number) => void;
}) {
  return (
    <div>
      <div className="flex h-15.25 items-center rounded-2xl bg-[#FAF7F1] p-1 ring-1 ring-inset ring-black/5">
        {days.map((day, i) => (
          <button
            key={day.day_number}
            type="button"
            onClick={() => onDayChange(i)}
            className={`flex flex-1 flex-col items-center justify-center rounded-xl py-2 transition-all duration-150 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#1BA1AA]/70 focus-visible:ring-offset-2 ${
              activeDay === i
                ? "bg-white shadow-[0px_8px_18px_0px_rgba(20,30,40,0.25)]"
                : "hover:bg-white/40"
            }`}>
            <span
              className={`font-display text-[12.5px] font-semibold leading-[18.75px] ${
                activeDay === i ? "text-[#1F2A37]" : "text-[#5B6470]"
              }`}>
              {day.day_label}
            </span>
            <span
              className={`font-display text-[10px] font-medium leading-3.75 ${
                activeDay === i ? "text-[#1BA1AA]" : "text-[#9AA3AD]"
              }`}>
              Hari {day.day_number}
            </span>
          </button>
        ))}
      </div>
    </div>
  );
}
