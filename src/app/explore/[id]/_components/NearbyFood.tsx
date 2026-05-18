import Image from "next/image";
import { NEARBY_FOOD } from "../../_data/gallery";

export default function NearbyFood() {
  return (
    <div className="flex flex-col gap-3">
      <div className="flex items-center justify-between">
        <h2 className="font-sans text-[20px] font-medium leading-[30px] tracking-[-0.2px] text-[#1F2A37]">
          Kuliner di sekitar
        </h2>
        <button
          type="button"
          className="font-display text-[13px] font-semibold text-[#1BA1AA] hover:text-[#168D95] focus-visible:outline-none">
          Lihat semua
        </button>
      </div>
      <div className="scrollbar-hide -mx-5 flex gap-3 overflow-x-auto px-5 pb-1">
        {NEARBY_FOOD.map((food) => (
          <div
            key={food.name}
            className="flex w-[200px] shrink-0 flex-col overflow-hidden rounded-[16px] bg-white p-px ring-1 ring-inset ring-black/[0.05]"
            style={{ boxShadow: "0px 14px 30px -18px rgba(20,30,40,0.30)" }}>
            <div className="relative h-[148px] w-full overflow-hidden rounded-[15px]">
              <Image src={food.image} alt={food.name} fill className="object-cover" sizes="200px" />
            </div>
            <div className="flex flex-col gap-0.5 px-3 py-3">
              <p className="font-sans text-[14.5px] font-medium leading-[21.75px] tracking-[-0.1px] text-[#1F2A37]">
                {food.name}
              </p>
              <p className="font-display text-[12px] font-normal leading-[18px] text-[#5B6470]">
                {food.tagline}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
