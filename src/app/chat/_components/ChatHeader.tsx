"use client";

import Link from "next/link";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { SparkleIcon, ChevronLeftIcon, HistoryIcon, BookmarkIcon } from "../../components/icons";
import SessionsDrawer from "./SessionsDrawer";

export default function ChatHeader() {
  const router = useRouter();
  const [historyOpen, setHistoryOpen] = useState(false);

  return (
    <>
      <header className="pointer-events-none fixed left-0 right-0 top-3 z-50 flex justify-center px-4">
        <div className="pointer-events-auto flex h-15.75 w-full max-w-2xl items-center gap-2 rounded-full bg-white/75 px-3 shadow-[0px_14px_40px_0px_rgba(20,30,40,0.25)] ring-1 ring-inset ring-black/5">
          {/* Back */}
          <button
            type="button"
            aria-label="Kembali"
            onClick={() => router.back()}
            className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-black/5 text-[#1F2A37] transition-colors hover:bg-black/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#1BA1AA]/70 focus-visible:ring-offset-2">
            <ChevronLeftIcon className="h-4 w-4" />
          </button>

          {/* Avatar + online dot */}
          <div className="relative ml-1 shrink-0">
            <div className="flex h-10 w-10 items-center justify-center rounded-full" style={{ background: "linear-gradient(135deg, #1BA1AA 0%, #2CC9C8 100%)" }}>
              <SparkleIcon className="h-4 w-4 text-white" />
            </div>
            <span className="absolute bottom-0 right-0 h-3 w-3 rounded-full border-2 border-white bg-[#22c55e]" />
          </div>

          {/* Title */}
          <div className="ml-1 flex min-w-0 flex-1 flex-col">
            <p className="truncate font-sans text-[16px] font-medium leading-6 tracking-[-0.2px] text-[#1F2A37]">
              AI Travel Assistant
            </p>
            <div className="flex items-center gap-1.5">
              <span className="h-1.5 w-1.5 rounded-full bg-[#22c55e]" />
              <p className="font-display text-[11.5px] font-medium leading-4.25 text-[#5B6470]">
                Online · siap merencanakan
              </p>
            </div>
          </div>

          {/* History */}
          <button
            type="button"
            aria-label="Riwayat"
            onClick={() => setHistoryOpen(true)}
            className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-black/5 text-[#1F2A37] transition-colors hover:bg-black/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#1BA1AA]/70 focus-visible:ring-offset-2">
            <HistoryIcon className="h-4 w-4" />
          </button>

          {/* Bookmark → saved trips */}
          <Link
            href="/dashboard"
            aria-label="Tersimpan"
            className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-black/5 text-[#1F2A37] transition-colors hover:bg-black/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#1BA1AA]/70 focus-visible:ring-offset-2">
            <BookmarkIcon className="h-4 w-4" />
          </Link>
        </div>
      </header>

      <SessionsDrawer open={historyOpen} onClose={() => setHistoryOpen(false)} />
    </>
  );
}
