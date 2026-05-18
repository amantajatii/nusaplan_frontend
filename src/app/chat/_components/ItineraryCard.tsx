"use client";

import { useState } from "react";
import type { Itinerary } from "@/lib/types";
import { MapPinIcon, CalendarIcon, ClockIcon } from "../../components/icons";
import DayTabs from "./DayTabs";
import ItineraryRow from "./ItineraryRow";
import BudgetBreakdown from "./BudgetBreakdown";

export default function ItineraryCard({ itinerary }: { itinerary: Itinerary }) {
  const [activeDay, setActiveDay] = useState(0);
  const day = itinerary.days[activeDay];
  const totalActivities = itinerary.days.reduce((s, d) => s + d.activities.length, 0);

  return (
    <div
      className="w-full overflow-hidden rounded-[28px] bg-white ring-1 ring-inset ring-black/5"
      style={{ boxShadow: "0px 30px 60px -28px rgba(20,30,40,0.35)" }}>
      {/* Card header */}
      <div className="px-5 pb-0 pt-5">
        <div className="flex items-center gap-2">
          <span className="inline-flex h-[24.5px] items-center rounded-full bg-[rgba(253,191,58,0.18)] px-2.5">
            <span className="font-display text-[11px] font-semibold uppercase tracking-[0.6px] text-[#B07A00]">
              ITINERARY · AI
            </span>
          </span>
          {itinerary.mood && (
            <span className="inline-flex h-[24.5px] items-center rounded-full bg-[rgba(27,161,170,0.12)] px-2.5">
              <span className="font-display text-[11px] font-semibold uppercase tracking-[0.6px] text-[#0F6E75]">
                {itinerary.mood.toUpperCase()}
              </span>
            </span>
          )}
        </div>

        <h2 className="mt-2 font-sans text-[26px] font-medium leading-[28.6px] tracking-[-0.3px] text-[#1F2A37]">
          {itinerary.title}
        </h2>

        <div className="mt-1.5 flex flex-wrap items-center gap-x-4 gap-y-1">
          <span className="flex items-center gap-1 font-display text-[12.5px] font-medium text-[#5B6470]">
            <MapPinIcon className="h-3.5 w-3.5" />
            {itinerary.city}
          </span>
          <span className="flex items-center gap-1 font-display text-[12.5px] font-medium text-[#5B6470]">
            <CalendarIcon className="h-3.5 w-3.5" />
            {itinerary.duration_days} hari
          </span>
          <span className="flex items-center gap-1 font-display text-[12.5px] font-medium text-[#5B6470]">
            <ClockIcon className="h-3.5 w-3.5" />
            {totalActivities} destinasi
          </span>
        </div>
      </div>

      {/* Day tabs */}
      <div className="mt-4 px-5">
        <DayTabs days={itinerary.days} activeDay={activeDay} onDayChange={setActiveDay} />
      </div>

      {/* Itinerary rows */}
      <div className="mt-5 px-5">
        {day?.activities.map((activity, i) => (
          <ItineraryRow
            key={`${day.day_number}-${i}`}
            activity={activity}
            isLast={i === day.activities.length - 1}
          />
        ))}
      </div>

      {/* Budget */}
      <BudgetBreakdown itinerary={itinerary} />

      <div className="h-3" />
    </div>
  );
}
