"use client";

import { useState } from "react";
import { SearchIcon, SlidersIcon } from "../../components/icons";
import FilterDrawer from "./FilterDrawer";

const CATEGORIES = [
  "Semua",
  "Healing",
  "Adventure",
  "Romantic",
  "Family Trip",
  "Backpacker",
  "Culinary",
  "Nature Escape",
];

export default function SearchFilterBar() {
  const [active, setActive] = useState("Semua");
  const [filterOpen, setFilterOpen] = useState(false);

  return (
    <div className="fixed left-0 right-0 top-[66px] z-40 bg-[rgba(250,247,241,0.85)] px-6 pb-3 pt-2 backdrop-blur-sm">
      {/* Search row */}
      <div className="flex items-center gap-3">
        <div
          className="flex h-11 flex-1 items-center gap-2 rounded-full bg-white/90 px-[17px] py-px ring-1 ring-inset ring-black/[0.05]"
          style={{ boxShadow: "0px 10px 26px 0px rgba(20,30,40,0.25)" }}>
          <SearchIcon className="h-4 w-4 shrink-0 text-[#9AA3AD]" />
          <input
            type="text"
            placeholder="Cari healing trip di Bali..."
            className="flex-1 bg-transparent font-display text-[14px] font-medium text-[#1F2A37] placeholder:text-[#9AA3AD] focus:outline-none"
          />
        </div>
        <button
          type="button"
          aria-label="Filter"
          onClick={() => setFilterOpen(true)}
          className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-white/90 text-[#1F2A37] ring-1 ring-inset ring-black/[0.05] transition-colors hover:bg-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#1BA1AA]/70 focus-visible:ring-offset-2"
          style={{ boxShadow: "0px 10px 26px 0px rgba(20,30,40,0.25)" }}>
          <SlidersIcon className="h-4 w-4" />
        </button>
      </div>

      <FilterDrawer open={filterOpen} onClose={() => setFilterOpen(false)} />

      {/* Category pills */}
      <div className="scrollbar-hide mt-3 flex gap-2 overflow-x-auto pb-0.5">
        {CATEGORIES.map((cat) => (
          <button
            key={cat}
            type="button"
            onClick={() => setActive(cat)}
            className={`inline-flex h-[32.75px] shrink-0 items-center whitespace-nowrap rounded-full px-4 font-display text-[12.5px] font-semibold leading-[18.75px] transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#1BA1AA]/70 focus-visible:ring-offset-2 ${
              active === cat
                ? "bg-[#1BA1AA] text-white"
                : "bg-white/80 text-[#1F2A37] ring-1 ring-inset ring-black/[0.05]"
            }`}
            style={
              active === cat
                ? { filter: "drop-shadow(0px 10px 11px rgba(27,161,170,0.55))" }
                : { boxShadow: "0px 4px 12px 0px rgba(20,30,40,0.18)" }
            }>
            {cat}
          </button>
        ))}
      </div>
    </div>
  );
}
