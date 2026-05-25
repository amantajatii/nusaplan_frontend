"use client";

import { useState, useEffect, useRef } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import { SearchIcon, SlidersIcon } from "../../components/icons";
import FilterDrawer from "./FilterDrawer";

const CATEGORIES: { label: string; value: string }[] = [
  { label: "Semua", value: "Semua" },
  { label: "Santai", value: "santai" },
  { label: "Petualangan", value: "petualangan" },
  { label: "Romantis", value: "romantis" },
  { label: "Budaya", value: "budaya" },
  { label: "Keluarga", value: "keluarga" },
  { label: "Kuliner", value: "kuliner" },
];

export default function SearchFilterBar() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const [active, setActive] = useState(searchParams.get("mood") ?? "Semua");
  // Capitalize first letter for Firestore prefix search (case-sensitive)
  function normalizeSearch(val: string) {
    return val ? val.charAt(0).toUpperCase() + val.slice(1) : val;
  }
  const [search, setSearch] = useState(searchParams.get("search") ?? "");
  const [filterOpen, setFilterOpen] = useState(false);
  const debounceRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  function navigate(overrides: Record<string, string>) {
    const params = new URLSearchParams(searchParams.toString());
    for (const [k, v] of Object.entries(overrides)) {
      if (v && v !== "Semua") {
        params.set(k, v);
      } else {
        params.delete(k);
      }
    }
    params.delete("cursor");
    router.push(`/explore?${params.toString()}`);
  }

  function handleCategory(value: string) {
    setActive(value);
    navigate({ mood: value });
  }

  function handleSearchChange(e: React.ChangeEvent<HTMLInputElement>) {
    const val = e.target.value;
    setSearch(val);
    if (debounceRef.current) clearTimeout(debounceRef.current);
    debounceRef.current = setTimeout(
      () => navigate({ search: normalizeSearch(val) }),
      400,
    );
  }

  useEffect(
    () => () => {
      if (debounceRef.current) clearTimeout(debounceRef.current);
    },
    [],
  );

  return (
    <div className="fixed left-0 right-0 top-16.5 z-40 bg-[rgba(250,247,241,0.85)] px-6 pb-3 pt-2 backdrop-blur-sm">
      {/* Search row */}
      <div className="flex items-center gap-3">
        <div
          className="flex h-11 flex-1 items-center gap-2 rounded-full bg-white/90 px-4.25 py-px ring-1 ring-inset ring-black/5"
          style={{ boxShadow: "0px 10px 26px 0px rgba(20,30,40,0.25)" }}>
          <SearchIcon className="h-4 w-4 shrink-0 text-[#9AA3AD]" />
          <input
            type="text"
            value={search}
            onChange={handleSearchChange}
            placeholder="Cari healing trip di Bali..."
            className="flex-1 bg-transparent font-display text-[14px] font-medium text-[#1F2A37] placeholder:text-[#9AA3AD] focus:outline-none"
          />
        </div>
        <button
          type="button"
          aria-label="Filter"
          onClick={() => setFilterOpen(true)}
          className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-white/90 text-[#1F2A37] ring-1 ring-inset ring-black/5 transition-colors hover:bg-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#1BA1AA]/70 focus-visible:ring-offset-2"
          style={{ boxShadow: "0px 10px 26px 0px rgba(20,30,40,0.25)" }}>
          <SlidersIcon className="h-4 w-4" />
        </button>
      </div>

      <FilterDrawer
        open={filterOpen}
        onClose={() => setFilterOpen(false)}
        onApply={(f) => {
          setFilterOpen(false);
          navigate(f);
        }}
      />

      {/* Category pills */}
      <div className="mt-3 -mb-5 flex gap-2 overflow-x-auto pb-6 pt-1 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
        {CATEGORIES.map(({ label, value }) => (
          <button
            key={value}
            type="button"
            onClick={() => handleCategory(value)}
            className={`inline-flex h-[32.75px] shrink-0 items-center whitespace-nowrap rounded-full px-4 font-display text-[12.5px] font-semibold leading-[18.75px] transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#1BA1AA]/70 focus-visible:ring-offset-2 ${
              active === value
                ? "bg-[#1BA1AA] text-white"
                : "bg-white/80 text-[#1F2A37] ring-1 ring-inset ring-black/5"
            }`}
            style={
              active === value
                ? { filter: "drop-shadow(0px 8px 11px rgba(27,161,170,0.4))" }
                : { boxShadow: "0px 4px 8px 0px rgba(20,30,40,0.18)" }
            }>
            {label}
          </button>
        ))}
      </div>
    </div>
  );
}
