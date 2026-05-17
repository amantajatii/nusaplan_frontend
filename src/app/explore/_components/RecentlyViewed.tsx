import Image from "next/image";
import Link from "next/link";
import { MapPinIcon } from "../../components/icons";
import { DESTINATIONS } from "../_data/destinations";

const RECENT_SLUGS = ["gunung-bromo", "ubud-sawah", "prambanan"];

export default function RecentlyViewed() {
  const recent = RECENT_SLUGS.map((slug) => DESTINATIONS.find((d) => d.slug === slug)!);

  return (
    <section className="flex flex-col gap-3">
      <div className="flex items-center justify-between">
        <h2 className="font-sans text-[18px] font-medium leading-[27px] tracking-[-0.2px] text-[#1F2A37]">
          Terakhir dilihat
        </h2>
        <a
          href="#"
          className="font-display text-[12px] font-medium leading-[18px] text-[#5B6470] transition-colors hover:text-[#1BA1AA]">
          Lanjutkan
        </a>
      </div>

      <div className="scrollbar-hide flex gap-3 overflow-x-auto">
        {recent.map((item) => (
          <Link
            key={item.slug}
            href={`/explore/${item.slug}`}
            className="flex h-[177.797px] w-[180px] shrink-0 flex-col overflow-hidden rounded-[16px] bg-white ring-1 ring-inset ring-black/[0.05] transition-shadow hover:shadow-lg focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#1BA1AA]/70"
            style={{ boxShadow: "0px 10px 24px -14px rgba(20,30,40,0.25)" }}>
            <div className="relative h-[106.797px] w-full shrink-0">
              <Image src={item.image} alt={item.name} fill className="object-cover" sizes="180px" />
            </div>
            <div className="flex flex-1 flex-col justify-center gap-1.5 px-3 py-3">
              <p className="font-sans text-[14px] font-medium leading-[21px] tracking-[-0.1px] text-[#1F2A37]">
                {item.name}
              </p>
              <div className="flex items-center gap-1">
                <MapPinIcon className="h-3 w-3 shrink-0 text-[#5B6470]" />
                <span className="font-display text-[11.5px] font-medium leading-[17.25px] text-[#5B6470]">
                  {item.location}
                </span>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}
