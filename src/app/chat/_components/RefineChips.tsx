"use client";

import { RefreshIcon } from "../../components/icons";

const chips = [
  "Tambah 1 hari",
  "Lebih murah",
  "Tambah penginapan",
  "Ganti kuliner hari 2",
  "Fokus wisata alam",
  "Tambahkan sunset spot",
];

export default function RefineChips({ onSelect }: { onSelect: (chip: string) => void }) {
  return (
    <div className="flex flex-col gap-2">
      <div className="flex items-center gap-1.5 px-1">
        <RefreshIcon className="h-3.5 w-3.5 text-[#5B6470]" />
        <p className="font-display text-[12px] font-medium uppercase tracking-[0.6px] text-[#5B6470]">
          REFINE LEBIH LANJUT
        </p>
      </div>

      <div className="scrollbar-hide -mx-1 flex gap-2 overflow-x-auto px-1 py-2 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
        {chips.map((chip) => (
          <button
            key={chip}
            type="button"
            onClick={() => onSelect(chip)}
            className="inline-flex h-[37.5px] shrink-0 items-center whitespace-nowrap rounded-full bg-white/80 px-4 font-display text-[13px] font-medium text-[#1F2A37] ring-1 ring-inset ring-[rgba(27,161,170,0.20)] transition-colors hover:bg-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#1BA1AA]/70 focus-visible:ring-offset-2"
            style={{ boxShadow: "0px 2px 8px 0px rgba(27,161,170,0.18)" }}>
            {chip}
          </button>
        ))}
      </div>
    </div>
  );
}
