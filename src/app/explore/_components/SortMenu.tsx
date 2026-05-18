"use client";

import { useState, useRef, useEffect } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import { ChevronDownIcon } from "../../components/icons";

const OPTIONS = [
  { label: "Terpopuler", value: "popular" },
  { label: "Terbaru", value: "newest" },
  { label: "Budget rendah", value: "budget_asc" },
  { label: "Rating tertinggi", value: "rating" },
];

export default function SortMenu() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const currentSort = searchParams.get("sort") ?? "popular";
  const currentLabel = OPTIONS.find((o) => o.value === currentSort)?.label ?? "Terpopuler";
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handleClickOutside(e: MouseEvent) {
      if (ref.current && !ref.current.contains(e.target as Node)) setOpen(false);
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  function select(value: string) {
    setOpen(false);
    const params = new URLSearchParams(searchParams.toString());
    if (value === "popular") {
      params.delete("sort");
    } else {
      params.set("sort", value);
    }
    params.delete("cursor");
    router.push(`/explore?${params.toString()}`);
  }

  return (
    <div ref={ref} className="relative">
      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        className="inline-flex h-9 w-40 shrink-0 items-center justify-center gap-1 rounded-full bg-white/80 px-4 font-display text-[12.5px] font-semibold ring-1 ring-inset ring-black/[0.05] transition-colors hover:bg-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#1BA1AA]/70 focus-visible:ring-offset-2">
        <span className="text-[#1F2A37]">Urutkan:</span>
        <span className="text-[#1BA1AA]">{currentLabel}</span>
        <ChevronDownIcon className={`h-3.5 w-3.5 text-[#1BA1AA] transition-transform ${open ? "rotate-180" : ""}`} />
      </button>

      {open && (
        <div
          className="animate-scale-in absolute right-0 top-11 z-50 min-w-[160px] overflow-hidden rounded-2xl bg-white py-1.5 ring-1 ring-inset ring-black/[0.05]"
          style={{ boxShadow: "0px 16px 32px -12px rgba(20,30,40,0.35)", transformOrigin: "top right" }}>
          {OPTIONS.map((opt) => (
            <button
              key={opt.value}
              type="button"
              onClick={() => select(opt.value)}
              className={`flex w-full items-center px-4 py-2.5 font-display text-[13px] font-medium transition-colors hover:bg-[#1BA1AA]/8 focus-visible:outline-none ${
                currentSort === opt.value ? "text-[#1BA1AA] font-semibold" : "text-[#1F2A37]"
              }`}>
              {opt.label}
              {currentSort === opt.value && <span className="ml-auto h-1.5 w-1.5 rounded-full bg-[#1BA1AA]" />}
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
