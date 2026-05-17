"use client";

import Image from "next/image";
import Link from "next/link";
import { HeartIcon, MapPinIcon, ClockIcon, FlameIcon } from "../../components/icons";

type Props = {
  slug: string;
  image: string;
  alt: string;
  category: string;
  name: string;
  location: string;
  price: string;
  duration: string;
  trending?: boolean;
  height: "sm" | "md" | "lg";
};

const HEIGHT_CLASS: Record<Props["height"], string> = {
  sm: "h-[332px]",
  md: "h-[591px]",
  lg: "h-[665px]",
};

export default function DestinationCard({
  slug,
  image,
  alt,
  category,
  name,
  location,
  price,
  duration,
  trending,
  height,
}: Props) {
  return (
    <Link
      href={`/explore/${slug}`}
      className={`relative block w-full overflow-hidden rounded-[24px] bg-white ${HEIGHT_CLASS[height]} focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#1BA1AA]/70`}
      style={{ boxShadow: "0px 18px 40px -22px rgba(20,30,40,0.35)" }}
    >
      {/* Background image */}
      <Image src={image} alt={alt} fill className="object-cover" sizes="(max-width: 768px) 100vw, 33vw" />

      {/* Bottom gradient */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/10 to-transparent" />

      {/* Top row: category + favorite */}
      <div className="absolute left-3 right-3 top-3 flex items-start justify-between">
        <span className="rounded-full bg-white/85 px-2 py-[1.5px] font-display text-[10.5px] font-semibold leading-[15.75px] text-[#1F2A37]">
          {category}
        </span>
        <button
          type="button"
          aria-label="Favorit"
          className="flex h-7 w-7 items-center justify-center rounded-full bg-white/85 text-[#1F2A37] transition-colors hover:bg-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#1BA1AA]/70"
          onClick={(e) => e.preventDefault()}>
          <HeartIcon className="h-3.5 w-3.5" />
        </button>
      </div>

      {/* Trending pill */}
      {trending && (
        <div
          className="absolute left-3 top-12 flex h-[19px] items-center gap-1.5 rounded-full px-2"
          style={{ backgroundImage: "linear-gradient(165deg, #FDBF3A 0%, #F59E0B 100%)" }}>
          <FlameIcon className="h-2.5 w-2.5 text-white" />
          <span className="font-display text-[10px] font-bold leading-[15px] tracking-[0.3px] text-white">
            Trending
          </span>
        </div>
      )}

      {/* Bottom content */}
      <div className="absolute bottom-3 left-3 right-3 flex flex-col gap-1.5">
        <p className="font-sans text-[18px] font-medium leading-[19.8px] tracking-[-0.2px] text-white">
          {name}
        </p>
        <div className="flex items-center gap-1">
          <MapPinIcon className="h-3 w-3 shrink-0 text-white/80" />
          <span className="font-display text-[11px] font-medium leading-[16.5px] text-white/80">
            {location}
          </span>
        </div>
        <div className="flex items-center gap-2">
          <span className="inline-flex h-[20.5px] items-center rounded-full bg-black/[0.35] px-1.5 font-display text-[11px] font-semibold leading-[16.5px] text-white/90">
            {price}
          </span>
          <span className="inline-flex h-[20.5px] items-center gap-1 rounded-full bg-black/[0.35] px-1.5 font-display text-[11px] font-semibold leading-[16.5px] text-white/90">
            <ClockIcon className="h-2.5 w-2.5 shrink-0" />
            {duration}
          </span>
        </div>
      </div>
    </Link>
  );
}
