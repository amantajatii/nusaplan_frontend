import Image from "next/image";
import Link from "next/link";
import { HeartIcon, MapPinIcon } from "../../components/icons";
import { getFavoriteDestinations } from "@/app/_actions/favorites";

export default async function SavedDestinationsRow() {
  const saved = await getFavoriteDestinations();

  if (saved.length === 0) {
    return (
      <p className="py-4 font-display text-[13px] text-[#9AA3AD]">
        Belum ada destinasi tersimpan. Tap ❤ di kartu destinasi untuk menyimpan.
      </p>
    );
  }

  return (
    <div className="scrollbar-hide -mx-5 flex gap-3 overflow-x-auto px-5 pb-2">
      {saved.map((dest) => (
        <Link
          key={dest.id}
          href={`/explore/${dest.id}`}
          className="relative h-[212px] w-[170px] shrink-0 overflow-hidden rounded-[16px] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#1BA1AA]/70"
          style={{
            border: "1px solid rgba(0,0,0,0.05)",
            boxShadow: "0px 18px 36px -22px rgba(20,30,40,0.35)",
          }}>
          {dest.cover_image_url ? (
            <Image src={dest.cover_image_url} alt={dest.name} fill className="object-cover" sizes="170px" />
          ) : (
            <div className="h-full w-full bg-[#E8F4F5]" />
          )}
          <div className="absolute inset-0 bg-linear-to-t from-black/65 via-transparent to-transparent" />
          {dest.category && (
            <span className="absolute left-2 top-2 rounded-full bg-white/85 px-2 py-0.5 font-display text-[9.5px] font-bold uppercase tracking-[0.5px] text-[#1F2A37]">
              {dest.category}
            </span>
          )}
          <div className="absolute right-2 top-2 flex h-7 w-7 items-center justify-center rounded-full bg-white/85">
            <HeartIcon className="h-3.5 w-3.5 fill-red-500 text-red-500" />
          </div>
          <div className="absolute bottom-2.5 left-2.5 flex flex-col gap-0.5">
            <p className="font-sans text-[14.5px] font-medium leading-tight tracking-[-0.1px] text-white">
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
  );
}
