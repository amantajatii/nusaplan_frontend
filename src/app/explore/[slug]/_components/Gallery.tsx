import Image from "next/image";
import { GALLERY_IMAGES } from "../../_data/gallery";

export default function Gallery() {
  return (
    <div className="flex flex-col gap-3">
      <div className="flex items-center justify-between">
        <h2 className="font-sans text-[20px] font-medium leading-[30px] tracking-[-0.2px] text-[#1F2A37]">
          Galeri
        </h2>
        <span className="font-display text-[12px] font-medium text-[#5B6470]">
          {GALLERY_IMAGES.length} foto
        </span>
      </div>
      <div className="scrollbar-hide -mx-5 flex gap-2 overflow-x-auto px-5 pb-1">
        {GALLERY_IMAGES.map((img, idx) => (
          <div
            key={img.src}
            className="relative shrink-0 overflow-hidden rounded-[16px]"
            style={{
              width: idx === 0 ? 260 : 200,
              height: 260,
              boxShadow: "0px 16px 34px -22px rgba(20,30,40,0.40)",
            }}>
            <Image src={img.src} alt={img.alt} fill className="object-cover" sizes="260px" />
          </div>
        ))}
      </div>
    </div>
  );
}
