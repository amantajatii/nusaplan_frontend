import type { Destination } from "../../_data/destinations";
import { ClockIcon, TicketIcon, CompassIcon } from "../../../components/icons";

type Props = { destination: Destination };

function Tile({
  icon,
  label,
  value,
}: {
  icon: React.ReactNode;
  label: string;
  value: string;
}) {
  return (
    <div
      className="flex flex-col gap-1 rounded-[16px] bg-white p-3 ring-1 ring-inset ring-black/[0.05]"
      style={{ boxShadow: "0px 10px 12px 0px rgba(20,30,40,0.25)" }}>
      <div className="h-4 w-4 text-[#5B6470]">{icon}</div>
      <p className="font-display text-[11px] font-medium tracking-[0.3px] text-[#5B6470]">{label}</p>
      <p className="font-sans text-[14px] font-medium tracking-[-0.1px] text-[#1F2A37]">{value}</p>
    </div>
  );
}

export default function InfoTiles({ destination }: Props) {
  return (
    <div className="grid grid-cols-3 gap-2">
      <Tile icon={<ClockIcon className="h-4 w-4" />} label="Jam Buka" value={destination.jamBuka} />
      <Tile icon={<TicketIcon className="h-4 w-4" />} label="Tiket" value={destination.tiket} />
      <Tile icon={<CompassIcon className="h-4 w-4" />} label="Kategori" value={destination.category} />
    </div>
  );
}
