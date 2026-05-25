"use client";

import { useEffect, useRef } from "react";
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
  const containerRef = useRef<HTMLDivElement>(null);
  const tabRefs = useRef<(HTMLButtonElement | null)[]>([]);

  useEffect(() => {
    tabRefs.current[activeDay]?.scrollIntoView({
      block: "nearest",
      inline: "center",
      behavior: "smooth",
    });
  }, [activeDay]);

  return (
    <div>
      <div
        ref={containerRef}
        className="flex min-h-15.25 gap-1 overflow-x-auto overflow-y-hidden rounded-2xl bg-[#FAF7F1] p-1 ring-1 ring-inset ring-black/5 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
        style={{ scrollSnapType: "x mandatory", scrollPaddingLeft: "4px" }}>
        {days.map((day, i) => (
          <button
            key={day.day_number}
            ref={(el) => { tabRefs.current[i] = el; }}
            type="button"
            onClick={() => onDayChange(i)}
            style={{ scrollSnapAlign: "start" }}
            className={`flex min-w-[110px] flex-1 flex-col items-center justify-center rounded-xl px-1.5 py-2 transition-all duration-150 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#1BA1AA]/70 focus-visible:ring-offset-2 ${
              activeDay === i
                ? "bg-white shadow-[0px_2px_6px_0px_rgba(20,30,40,0.10)]"
                : "hover:bg-white/40"
            }`}>
            <span
              className={`line-clamp-2 w-full break-words text-center font-display text-[10.5px] font-semibold leading-[15px] ${
                activeDay === i ? "text-[#1F2A37]" : "text-[#5B6470]"
              }`}>
              {day.day_label}
            </span>
            <span
              className={`mt-0.5 font-display text-[9.5px] font-medium leading-3.5 ${
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
