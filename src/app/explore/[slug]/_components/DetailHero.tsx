import Image from "next/image";
import Link from "next/link";
import type { Destination } from "../../_data/destinations";
import { ChevronLeftIcon, BookmarkIcon, ShareIcon, MapPinIcon } from "../../../components/icons";

type Props = { destination: Destination };

export default function DetailHero({ destination }: Props) {
  return (
    <div className="relative h-[566px] w-full overflow-hidden">
      <Image
        src={destination.image}
        alt={destination.name}
        fill
        className="object-cover"
        priority
        sizes="100vw"
      />
      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/10 to-black/80" />

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
            aria-label="Simpan"
            className="flex h-10 w-10 items-center justify-center rounded-full bg-white/20 ring-1 ring-white/30 transition-colors hover:bg-white/30 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/70">
            <BookmarkIcon className="h-4 w-4 text-white" />
          </button>
          <button
            type="button"
            aria-label="Bagikan"
            className="flex h-10 w-10 items-center justify-center rounded-full bg-white/20 ring-1 ring-white/30 transition-colors hover:bg-white/30 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/70">
            <ShareIcon className="h-4 w-4 text-white" />
          </button>
        </div>
      </div>

      {/* Bottom: category + name + location */}
      <div className="absolute bottom-[60px] left-5 flex flex-col gap-2">
        <span className="inline-flex items-center rounded-full bg-white/85 px-2.5 py-0.5 font-display text-[11px] font-semibold uppercase tracking-[0.6px] text-[#1F2A37]">
          {destination.category}
        </span>
        <h1 className="font-sans text-[48px] font-medium leading-[1.05] tracking-[-0.5px] text-white">
          {destination.name}
        </h1>
        <div className="flex items-center gap-1.5">
          <MapPinIcon className="h-3.5 w-3.5 shrink-0 text-white/85" />
          <span className="font-display text-[14px] font-medium text-white/85">{destination.location}</span>
        </div>
      </div>
    </div>
  );
}
