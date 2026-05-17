import Image from "next/image";
import Link from "next/link";
import { DESTINATIONS } from "../../_data/destinations";
import { MapPinIcon, ArrowRightIcon } from "../../../components/icons";

type Props = { currentSlug: string };

export default function NearbyDestinations({ currentSlug }: Props) {
  const nearby = DESTINATIONS.filter((d) => d.slug !== currentSlug).slice(0, 5);

  return (
    <div className="flex flex-col gap-3">
      <div className="flex items-center justify-between">
        <h2 className="font-sans text-[20px] font-medium leading-[30px] tracking-[-0.2px] text-[#1F2A37]">
          Destinasi terdekat
        </h2>
        <button
          type="button"
          className="flex items-center gap-1 font-display text-[13px] font-semibold text-[#1BA1AA] hover:text-[#168D95] focus-visible:outline-none">
          Lihat semua
          <ArrowRightIcon className="h-3.5 w-3.5" />
        </button>
      </div>
      <div className="scrollbar-hide -mx-5 flex gap-3 overflow-x-auto px-5 pb-1">
        {nearby.map((dest) => (
          <Link
            key={dest.slug}
            href={`/explore/${dest.slug}`}
            className="relative h-[224px] w-[180px] shrink-0 overflow-hidden rounded-[16px] bg-white ring-1 ring-inset ring-black/[0.05] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#1BA1AA]/70"
            style={{ boxShadow: "0px 14px 30px -18px rgba(20,30,40,0.30)" }}>
            <Image src={dest.image} alt={dest.name} fill className="object-cover" sizes="180px" />
            {/* Gradient overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/55 via-transparent to-transparent" />
            {/* Category pill */}
            <span className="absolute left-2 top-2 rounded-full bg-white/85 px-2 py-0.5 font-display text-[10px] font-bold uppercase tracking-[0.4px] text-[#1F2A37]">
              {dest.category}
            </span>
            {/* Name + location */}
            <div className="absolute bottom-2 left-2 flex flex-col gap-1">
              <p className="font-sans text-[15px] font-medium leading-[16.5px] tracking-[-0.1px] text-white">
                {dest.name}
              </p>
              <div className="flex items-center gap-1">
                <MapPinIcon className="h-3 w-3 shrink-0 text-white/85" />
                <span className="font-display text-[11px] font-medium text-white/85">
                  {dest.distance} · {dest.location}
                </span>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
