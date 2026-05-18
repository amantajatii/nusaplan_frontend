"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import type { Destination } from "@/lib/types";
import { ChevronLeftIcon, BookmarkIcon, ShareIcon, MapPinIcon } from "../../../components/icons";
import { clientFetch } from "@/lib/api-client";
import { shareLink } from "@/lib/share";

type Props = { destination: Destination };

export default function DetailHero({ destination }: Props) {
  const [saved, setSaved] = useState(false);

  async function toggleSave() {
    const next = !saved;
    setSaved(next);
    try {
      if (next) {
        await clientFetch(`/api/user/favorites/${destination.id}`, { method: 'POST', auth: true });
      } else {
        await clientFetch(`/api/user/favorites/${destination.id}`, { method: 'DELETE', auth: true });
      }
    } catch {
      setSaved(!next);
    }
  }

  function handleShare() {
    shareLink(window.location.href, destination.name);
  }

  return (
    <div className="relative h-141.5 w-full overflow-hidden">
      {destination.cover_image_url ? (
        <Image
          src={destination.cover_image_url}
          alt={destination.name}
          fill
          className="object-cover"
          priority
          sizes="100vw"
        />
      ) : (
        <div className="h-full w-full bg-[#0E5155]" />
      )}
      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-linear-to-b from-black/40 via-black/10 to-black/80" />

      {/* Top row: back + save/share */}
      <div className="absolute left-0 right-0 top-0 flex items-center justify-between px-4 pt-4">
        <Link
          href="/explore"
          className="flex h-10 w-10 items-center justify-center rounded-full bg-white/20 ring-1 ring-white/30 transition-colors hover:bg-white/30 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/70">
          <ChevronLeftIcon className="h-4 w-4 text-white" />
        </Link>
        <div className="flex gap-2">
          <button
            type="button"
            aria-label={saved ? "Hapus simpanan" : "Simpan"}
            onClick={toggleSave}
            className="flex h-10 w-10 items-center justify-center rounded-full bg-white/20 ring-1 ring-white/30 transition-colors hover:bg-white/30 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/70">
            <BookmarkIcon className={`h-4 w-4 transition-colors ${saved ? "fill-[#FDBF3A] text-[#FDBF3A]" : "text-white"}`} />
          </button>
          <button
            type="button"
            aria-label="Bagikan"
            onClick={handleShare}
            className="flex h-10 w-10 items-center justify-center rounded-full bg-white/20 ring-1 ring-white/30 transition-colors hover:bg-white/30 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/70">
            <ShareIcon className="h-4 w-4 text-white" />
          </button>
        </div>
      </div>

      {/* Bottom: category + name + city */}
      <div className="absolute bottom-15 left-5 flex flex-col gap-2">
        {destination.category && (
          <span className="inline-flex items-center rounded-full bg-white/85 px-2.5 py-0.5 font-display text-[11px] font-semibold uppercase tracking-[0.6px] text-[#1F2A37]">
            {destination.category}
          </span>
        )}
        <h1 className="font-sans text-[48px] font-medium leading-[1.05] tracking-[-0.5px] text-white">
          {destination.name}
        </h1>
        <div className="flex items-center gap-1.5">
          <MapPinIcon className="h-3.5 w-3.5 shrink-0 text-white/85" />
          <span className="font-display text-[14px] font-medium text-white/85">{destination.city}</span>
        </div>
      </div>
    </div>
  );
}
