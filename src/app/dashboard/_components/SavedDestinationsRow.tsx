import Image from "next/image";
import Link from "next/link";
import { DESTINATIONS } from "../../explore/_data/destinations";
import { HeartIcon, MapPinIcon } from "../../components/icons";

const SAVED_SLUGS = ["gunung-bromo", "raja-ampat", "borobudur", "air-terjun-sumba", "lombok-selatan"];

export default function SavedDestinationsRow() {
  const saved = SAVED_SLUGS.map((slug) => DESTINATIONS.find((d) => d.slug === slug)).filter(Boolean) as NonNullable<(typeof DESTINATIONS)[number]>[];

  return (
    <div className="scrollbar-hide -mx-5 flex gap-3 overflow-x-auto px-5 pb-2">
      {saved.map((dest) => (
        <Link
          key={dest.slug}
          href={`/explore/${dest.slug}`}
          className="relative h-[212px] w-[170px] shrink-0 overflow-hidden rounded-[16px] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#1BA1AA]/70"
          style={{
            border: "1px solid rgba(0,0,0,0.05)",
            boxShadow: "0px 18px 36px -22px rgba(20,30,40,0.35)",
          }}>
          <Image src={dest.image} alt={dest.name} fill className="object-cover" sizes="170px" />
          <div className="absolute inset-0 bg-gradient-to-t from-black/65 via-transparent to-transparent" />
          {/* Category pill */}
          <span className="absolute left-2 top-2 rounded-full bg-white/85 px-2 py-0.5 font-display text-[9.5px] font-bold uppercase tracking-[0.5px] text-[#1F2A37]">
            {dest.category}
          </span>
          {/* Heart */}
          <div className="absolute right-2 top-2 flex h-7 w-7 items-center justify-center rounded-full bg-white/85">
            <HeartIcon className="h-3.5 w-3.5 text-[#1F2A37]" />
          </div>
          {/* Name + region */}
          <div className="absolute bottom-2.5 left-2.5 flex flex-col gap-0.5">
            <p className="font-sans text-[14.5px] font-medium leading-tight tracking-[-0.1px] text-white">
              {dest.name}
            </p>
            <div className="flex items-center gap-1">
              <MapPinIcon className="h-3 w-3 shrink-0 text-white/85" />
              <span className="font-display text-[11px] font-medium text-white/85">{dest.location}</span>
            </div>
          </div>
        </Link>
      ))}
    </div>
  );
}
