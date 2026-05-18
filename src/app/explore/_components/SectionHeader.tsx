import SortMenu from "./SortMenu";

export default function SectionHeader({ count }: { count?: number }) {
  return (
    <div className="flex items-end justify-between">
      <div className="flex flex-col gap-px">
        <h1 className="font-sans text-[26px] font-medium leading-[30px] tracking-[-0.4px] text-[#1F2A37]">
          Jelajahi{" "}
          <span className="text-[#1BA1AA]">Indonesia</span>
        </h1>
        <p className="font-display text-[12.5px] font-normal leading-[18.75px] text-[#5B6470]">
          {count != null ? `${count} destinasi untukmu` : "Menemukan destinasi…"}
        </p>
      </div>

      <SortMenu />
    </div>
  );
}
