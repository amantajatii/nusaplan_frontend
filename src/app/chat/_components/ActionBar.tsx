"use client";

import { useTransition } from "react";
import { useRouter } from "next/navigation";
import type { Itinerary } from "@/lib/types";
import { saveTrip } from "@/app/_actions/trips";
import { shareLink } from "@/lib/share";
import TealButton from "../../components/TealButton";
import { SaveIcon, ShareIcon, RefreshIcon } from "../../components/icons";

export default function ActionBar({
  itinerary,
  onRefine,
}: {
  itinerary: Itinerary;
  onRefine: (text: string) => void;
}) {
  const router = useRouter();
  const [isPending, startTransition] = useTransition();

  function handleSave() {
    startTransition(async () => {
      try {
        await saveTrip(itinerary);
        router.push("/dashboard");
        router.refresh();
      } catch {
        alert("Gagal menyimpan trip. Coba login dulu.");
      }
    });
  }

  return (
    <div
      className="flex items-center gap-2 rounded-full bg-white/90 p-1.75 ring-1 ring-inset ring-black/5"
      style={{ boxShadow: "0px 24px 50px 0px rgba(20,30,40,0.35)" }}>
      <TealButton
        onClick={handleSave}
        disabled={isPending}
        className="flex flex-1 items-center justify-center gap-2 py-2.5 font-display text-[13.5px] font-semibold leading-5 disabled:opacity-50">
        <SaveIcon className="h-4 w-4" />
        <span>{isPending ? "Menyimpan..." : "Simpan Trip"}</span>
      </TealButton>

      <button
        type="button"
        onClick={() => shareLink(window.location.href, itinerary.title)}
        className="inline-flex h-10 w-25.5 shrink-0 items-center justify-center gap-1.5 rounded-full bg-black/5 font-display text-[13.5px] font-semibold text-[#1F2A37] transition-colors hover:bg-black/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#1BA1AA]/70 focus-visible:ring-offset-2">
        <ShareIcon className="h-4 w-4" />
        <span>Bagikan</span>
      </button>

      <button
        type="button"
        onClick={() => onRefine(`Ubah itinerary "${itinerary.title}" agar lebih variatif`)}
        className="inline-flex h-10 shrink-0 items-center justify-center gap-1.5 rounded-full bg-black/5 px-4 font-display text-[13.5px] font-semibold text-[#1F2A37] transition-colors hover:bg-black/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#1BA1AA]/70 focus-visible:ring-offset-2">
        <RefreshIcon className="h-4 w-4 text-[#1BA1AA]" />
        <span>Minta AI Ubah</span>
      </button>
    </div>
  );
}
