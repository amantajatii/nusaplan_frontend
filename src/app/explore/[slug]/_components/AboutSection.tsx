import type { Destination } from "../../_data/destinations";

type Props = { destination: Destination };

export default function AboutSection({ destination }: Props) {
  return (
    <div className="flex flex-col gap-2">
      <h2 className="font-sans text-[20px] font-medium leading-[30px] tracking-[-0.2px] text-[#1F2A37]">
        Tentang tempat ini
      </h2>
      <p className="font-display text-[15px] font-normal leading-[24px] text-[#5B6470]">
        {destination.about}
      </p>
      <button
        type="button"
        className="self-start font-display text-[14px] font-semibold text-[#1BA1AA] hover:text-[#168D95] focus-visible:outline-none">
        Read more
      </button>
    </div>
  );
}
