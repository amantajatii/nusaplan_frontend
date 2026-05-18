import type { Destination } from "@/lib/types";

type Props = { destination: Destination };

export default function AboutSection({ destination }: Props) {
  if (!destination.description) return null;

  return (
    <div className="flex flex-col gap-2">
      <h2 className="font-sans text-[20px] font-medium leading-7.5 tracking-[-0.2px] text-[#1F2A37]">
        Tentang tempat ini
      </h2>
      <p className="font-display text-[15px] font-normal leading-6 text-[#5B6470]">
        {destination.description}
      </p>
    </div>
  );
}
