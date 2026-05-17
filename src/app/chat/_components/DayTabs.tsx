"use client";

import { useState } from "react";

const DAYS = [
  { label: "Day 1", sub: "Sen, 12 Mei" },
  { label: "Day 2", sub: "Sel, 13 Mei" },
  { label: "Day 3", sub: "Rab, 14 Mei" },
];

export default function DayTabs() {
  const [active, setActive] = useState(0);

  return (
    <div>
      <div className="flex h-[61px] items-center rounded-[16px] bg-[#FAF7F1] p-1 ring-1 ring-inset ring-black/[0.05]">
        {DAYS.map((day, i) => (
          <button
            key={day.label}
            type="button"
            onClick={() => setActive(i)}
            className={`flex flex-1 flex-col items-center justify-center rounded-[12px] py-2 transition-all duration-150 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#1BA1AA]/70 focus-visible:ring-offset-2 ${
              active === i
                ? "bg-white shadow-[0px_8px_18px_0px_rgba(20,30,40,0.25)]"
                : "hover:bg-white/40"
            }`}>
            <span
              className={`font-display text-[12.5px] font-semibold leading-[18.75px] ${
                active === i ? "text-[#1F2A37]" : "text-[#5B6470]"
              }`}>
              {day.label}
            </span>
            <span
              className={`font-display text-[10px] font-medium leading-[15px] ${
                active === i ? "text-[#1BA1AA]" : "text-[#9AA3AD]"
              }`}>
              {day.sub}
            </span>
          </button>
        ))}
      </div>
    </div>
  );
}
