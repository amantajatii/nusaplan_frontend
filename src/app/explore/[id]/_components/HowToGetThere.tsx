import type { TransitOption } from "../../_data/destinations";
import { BusIcon, CarIcon, BikeIcon, PlaneIcon } from "../../../components/icons";

const ICON_MAP = {
  bus: BusIcon,
  car: CarIcon,
  bike: BikeIcon,
  plane: PlaneIcon,
};

type Props = { transit: TransitOption[] };

export default function HowToGetThere({ transit }: Props) {
  return (
    <div className="flex flex-col gap-3">
      <h2 className="font-sans text-[20px] font-medium leading-[30px] tracking-[-0.2px] text-[#1F2A37]">
        Cara menuju lokasi
      </h2>
      <div className="flex flex-col gap-2">
        {transit.map((item) => {
          const Icon = ICON_MAP[item.icon];
          return (
            <div
              key={item.title}
              className="flex h-[66.5px] items-center gap-3 rounded-[16px] bg-white px-4 ring-1 ring-inset ring-black/[0.05]"
              style={{ boxShadow: "0px 10px 12px 0px rgba(20,30,40,0.25)" }}>
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[rgba(27,161,170,0.1)]">
                <Icon className="h-4 w-4 text-[#1BA1AA]" />
              </div>
              <div className="flex flex-1 flex-col">
                <span className="font-sans text-[14.5px] font-medium leading-[21.75px] tracking-[-0.1px] text-[#1F2A37]">
                  {item.title}
                </span>
                <span className="font-display text-[12.5px] font-medium leading-[18.75px] text-[#5B6470]">
                  {item.sub}
                </span>
              </div>
              <div className="flex h-[26px] items-center rounded-full px-2.5 font-display text-[12px] font-bold text-[#1F2A37]"
                style={{ background: "rgba(253,191,58,0.16)" }}>
                {item.price}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
