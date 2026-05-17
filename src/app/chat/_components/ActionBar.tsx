import TealButton from "../../components/TealButton";
import { SaveIcon, ShareIcon, RefreshIcon } from "../../components/icons";

export default function ActionBar() {
  return (
    <div className="flex items-center gap-2 rounded-full bg-white/90 p-[7px] ring-1 ring-inset ring-black/[0.05]" style={{ boxShadow: "0px 24px 50px 0px rgba(20,30,40,0.35)" }}>
      {/* Simpan Trip — primary, flex-grow */}
      <TealButton className="flex flex-1 items-center justify-center gap-2 py-2.5 font-display text-[13.5px] font-semibold leading-[20px]">
        <SaveIcon className="h-4 w-4" />
        <span>Simpan Trip</span>
      </TealButton>

      {/* Bagikan */}
      <button
        type="button"
        className="inline-flex h-10 w-[102px] shrink-0 items-center justify-center gap-1.5 rounded-full bg-black/[0.05] font-display text-[13.5px] font-semibold text-[#1F2A37] transition-colors hover:bg-black/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#1BA1AA]/70 focus-visible:ring-offset-2">
        <ShareIcon className="h-4 w-4" />
        <span>Bagikan</span>
      </button>

      {/* Minta AI Ubah */}
      <button
        type="button"
        className="inline-flex h-10 shrink-0 items-center justify-center gap-1.5 rounded-full bg-black/[0.05] px-4 font-display text-[13.5px] font-semibold text-[#1F2A37] transition-colors hover:bg-black/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#1BA1AA]/70 focus-visible:ring-offset-2">
        <RefreshIcon className="h-4 w-4 text-[#1BA1AA]" />
        <span>Minta AI Ubah</span>
      </button>
    </div>
  );
}
