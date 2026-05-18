import Image from "next/image";
import Link from "next/link";
import { serverFetch } from "@/lib/api-server";
import type { Destination, DestinationsPage } from "@/lib/types";
import { MapPinIcon, ArrowRightIcon } from "../../../components/icons";

type Props = { currentId: string; city: string };

export default async function NearbyDestinations({ currentId, city }: Props) {
  let nearby: Destination[] = [];
  try {
    const result = await serverFetch<DestinationsPage>("/api/destinations", {
      query: { city, limit: 6 },
    });
    nearby = result.items.filter((d) => d.id !== currentId).slice(0, 5);
  } catch {
    return null;
  }

  if (nearby.length === 0) return null;

  return (
    <div className="flex flex-col gap-3">
      <div className="flex items-center justify-between">
        <h2 className="font-sans text-[20px] font-medium leading-7.5 tracking-[-0.2px] text-[#1F2A37]">
          Destinasi serupa
        </h2>
        <Link
          href={`/explore?city=${encodeURIComponent(city)}`}
          className="flex items-center gap-1 font-display text-[13px] font-semibold text-[#1BA1AA] hover:text-[#168D95] focus-visible:outline-none">
          Lihat semua
          <ArrowRightIcon className="h-3.5 w-3.5" />
        </Link>
      </div>
      <div className="scrollbar-hide -mx-5 flex gap-3 overflow-x-auto px-5 pb-1">
        {nearby.map((dest) => (
          <Link
            key={dest.id}
            href={`/explore/${dest.id}`}
            className="relative h-56 w-45 shrink-0 overflow-hidden rounded-2xl bg-[#0E5155] ring-1 ring-inset ring-black/5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#1BA1AA]/70"
            style={{ boxShadow: "0px 14px 30px -18px rgba(20,30,40,0.30)" }}>
            {dest.cover_image_url && (
              <Image src={dest.cover_image_url} alt={dest.name} fill className="object-cover" sizes="180px" />
            )}
            <div className="absolute inset-0 bg-linear-to-t from-black/55 via-transparent to-transparent" />
            {dest.category && (
              <span className="absolute left-2 top-2 rounded-full bg-white/85 px-2 py-0.5 font-display text-[10px] font-bold uppercase tracking-[0.4px] text-[#1F2A37]">
                {dest.category}
              </span>
            )}
            <div className="absolute bottom-2 left-2 flex flex-col gap-1">
              <p className="font-sans text-[15px] font-medium leading-[16.5px] tracking-[-0.1px] text-white">
                {dest.name}
              </p>
              <div className="flex items-center gap-1">
                <MapPinIcon className="h-3 w-3 shrink-0 text-white/85" />
                <span className="font-display text-[11px] font-medium text-white/85">{dest.city}</span>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
