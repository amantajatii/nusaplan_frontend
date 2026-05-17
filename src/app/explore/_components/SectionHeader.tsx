import { ChevronDownIcon } from "../../components/icons";

export default function SectionHeader() {
  return (
    <div className="flex items-end justify-between">
      <div className="flex flex-col gap-px">
        <h1 className="font-sans text-[26px] font-medium leading-[30px] tracking-[-0.4px] text-[#1F2A37]">
          Jelajahi{" "}
          <span className="text-[#1BA1AA]">Indonesia</span>
        </h1>
        <p className="font-display text-[12.5px] font-normal leading-[18.75px] text-[#5B6470]">
          8 destinasi untukmu
        </p>
      </div>

      <button
        type="button"
        className="inline-flex h-9 w-[160px] shrink-0 items-center justify-center gap-1 rounded-full bg-white/80 px-4 font-display text-[12.5px] font-semibold ring-1 ring-inset ring-black/[0.05] transition-colors hover:bg-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#1BA1AA]/70 focus-visible:ring-offset-2">
        <span className="text-[#1F2A37]">Urutkan:</span>
        <span className="text-[#1BA1AA]">Terpopuler</span>
        <ChevronDownIcon className="h-3.5 w-3.5 text-[#1BA1AA]" />
      </button>
    </div>
  );
}
