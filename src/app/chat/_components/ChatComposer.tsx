import TealButton from "../../components/TealButton";
import { SmileIcon, MicIcon, SendIcon } from "../../components/icons";

export default function ChatComposer() {
  return (
    <div className="fixed bottom-0 left-0 right-0 z-40">
      {/* Fade mask */}
      <div className="pointer-events-none h-10 bg-gradient-to-t from-[#FAF7F1] to-transparent" />

      {/* Pill */}
      <div className="bg-[#FAF7F1] px-4 pb-5">
        <div
          className="mx-auto flex h-[62px] max-w-[1316px] items-center gap-2 rounded-full bg-white/90 p-2 ring-1 ring-inset ring-black/[0.05]"
          style={{ boxShadow: "0px 30px 60px 0px rgba(20,30,40,0.35)" }}>
          {/* Mood */}
          <button
            type="button"
            aria-label="Mood perjalanan"
            className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-black/[0.05] text-[#1BA1AA] transition-colors hover:bg-black/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#1BA1AA]/70 focus-visible:ring-offset-2">
            <SmileIcon className="h-4 w-4" />
          </button>

          {/* Text input */}
          <div className="flex h-[38.5px] min-w-0 flex-1 items-center overflow-hidden px-1 py-2">
            <span className="truncate font-display text-[15px] font-medium text-[#9AA3AD]">
              Healing 3 hari di Jogja budget 1 juta...
            </span>
          </div>

          {/* Voice */}
          <button
            type="button"
            aria-label="Pakai suara"
            className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-black/[0.05] text-[#1F2A37] transition-colors hover:bg-black/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#1BA1AA]/70 focus-visible:ring-offset-2">
            <MicIcon className="h-4 w-4" />
          </button>

          {/* Send */}
          <TealButton
            aria-label="Kirim"
            className="h-11 w-11 shrink-0"
            style={{ boxShadow: "0px 12px 14px rgba(27,161,170,0.70)", filter: "none" }}>
            <SendIcon className="h-4 w-4" />
          </TealButton>
        </div>
      </div>
    </div>
  );
}
