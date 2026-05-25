"use client";

import { useRef, useState } from "react";
import TealButton from "../../components/TealButton";
import { SendIcon } from "../../components/icons";

export default function ChatComposer({
  onSend,
  disabled,
}: {
  onSend: (text: string) => void;
  disabled?: boolean;
}) {
  const [value, setValue] = useState("");
  const inputRef = useRef<HTMLInputElement>(null);

  function handleSend() {
    const trimmed = value.trim();
    if (!trimmed || disabled) return;
    onSend(trimmed);
    setValue("");
  }

  function handleKeyDown(e: React.KeyboardEvent<HTMLInputElement>) {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      handleSend();
    }
  }

  return (
    <div className="fixed bottom-0 left-0 right-0 z-40">
      <div className="pointer-events-none h-10 bg-linear-to-t from-[#FAF7F1] to-transparent" />
      <div className="bg-[#FAF7F1] px-4 pb-5">
        <div
          className="mx-auto flex h-15.5 max-w-329 items-center gap-2 rounded-full bg-white/90 p-2 ring-1 ring-inset ring-black/5"
          style={{ boxShadow: "0px 6px 20px 0px rgba(20,30,40,0.10)" }}>
          <input
            ref={inputRef}
            type="text"
            value={value}
            onChange={(e) => setValue(e.target.value)}
            onKeyDown={handleKeyDown}
            disabled={disabled}
            placeholder="Healing 3 hari di Jogja budget 1 juta..."
            className="min-w-0 flex-1 bg-transparent px-2 font-display text-[15px] font-medium text-[#1F2A37] placeholder:text-[#9AA3AD] focus:outline-none disabled:opacity-50"
          />
          <TealButton
            aria-label="Kirim"
            onClick={handleSend}
            disabled={disabled || !value.trim()}
            className="h-11 w-11 shrink-0 disabled:opacity-40"
            style={{ boxShadow: "0px 2px 6px rgba(27,161,170,0.25)", filter: "none" }}>
            <SendIcon className="h-4 w-4" />
          </TealButton>
        </div>
      </div>
    </div>
  );
}
