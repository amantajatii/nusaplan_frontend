import Image from "next/image";
import type { Destination } from "../../_data/destinations";
import { StarIcon } from "../../../components/icons";

type Props = { destination: Destination };

const AVATARS = ["/explore/profile.jpg", "/explore/bromo.jpg", "/explore/ubud.jpg"];

export default function RatingBar({ destination }: Props) {
  return (
    <div
      className="flex h-[54px] items-center gap-2 rounded-[16px] bg-white px-4 ring-1 ring-inset ring-black/[0.05]"
      style={{ boxShadow: "0px 12px 14px 0px rgba(20,30,40,0.25)" }}>
      {/* Rating */}
      <StarIcon className="h-4 w-4 text-[#FDBF3A]" />
      <span className="font-sans text-[16px] font-semibold leading-6 text-[#1F2A37]">{destination.rating}</span>
      <span className="font-display text-[13px] font-medium text-[#5B6470]">
        · {destination.travelerCount} traveler dengan Nusaplan
      </span>

      {/* Avatar stack */}
      <div className="ml-auto flex">
        {AVATARS.map((src, i) => (
          <div
            key={src}
            className={`relative h-7 w-7 overflow-hidden rounded-full ring-2 ring-white ${i > 0 ? "-ml-2" : ""}`}>
            <Image src={src} alt="traveler" fill className="object-cover" sizes="28px" />
          </div>
        ))}
      </div>
    </div>
  );
}
