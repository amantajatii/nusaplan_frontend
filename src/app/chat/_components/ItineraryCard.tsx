import { MapPinIcon, CalendarIcon, RouteIcon, ClockIcon, BedIcon, UtensilsIcon } from "../../components/icons";
import DayTabs from "./DayTabs";
import ItineraryRow from "./ItineraryRow";
import BudgetBreakdown from "./BudgetBreakdown";
import AiInsightsCard from "./AiInsightsCard";

const rows = [
  {
    time: "10:00",
    category: "Penginapan",
    categoryIcon: <BedIcon className="h-3 w-3" />,
    title: "Check-in penginapan tenang",
    location: "Prawirotaman",
    duration: "1 jam",
    price: "Rp 220k",
    image: "/chat/penginapan.jpg",
    imageAlt: "Check-in penginapan tenang",
  },
  {
    time: "14:00",
    category: "Kuliner",
    categoryIcon: <UtensilsIcon className="h-3 w-3" />,
    title: "Kopi senja di lorong sepi",
    location: "Klinik Kopi",
    duration: "1.5 jam",
    price: "Rp 45k",
    image: "/chat/kopi-senja.jpg",
    imageAlt: "Kopi senja di lorong sepi",
  },
  {
    time: "18:30",
    category: "Kuliner",
    categoryIcon: <UtensilsIcon className="h-3 w-3" />,
    title: "Gudeg legendaris Yu Djum",
    location: "Wijilan",
    duration: "1 jam",
    price: "Rp 60k",
    image: "/chat/gudeg.jpg",
    imageAlt: "Gudeg legendaris Yu Djum",
    isLast: true,
  },
];

export default function ItineraryCard() {
  return (
    <div
      className="w-full overflow-hidden rounded-[28px] bg-white ring-1 ring-inset ring-black/[0.05]"
      style={{ boxShadow: "0px 30px 60px -28px rgba(20,30,40,0.35)" }}>
      {/* Card header */}
      <div className="px-5 pb-0 pt-5">
        {/* Badges */}
        <div className="flex items-center gap-2">
          <span className="inline-flex h-[24.5px] items-center rounded-full bg-[rgba(253,191,58,0.18)] px-2.5">
            <span className="font-display text-[11px] font-semibold uppercase tracking-[0.6px] text-[#B07A00]">
              ITINERARY · AI
            </span>
          </span>
          <span className="inline-flex h-[24.5px] items-center rounded-full bg-[rgba(27,161,170,0.12)] px-2.5">
            <span className="font-display text-[11px] font-semibold uppercase tracking-[0.6px] text-[#0F6E75]">
              HEALING
            </span>
          </span>
        </div>

        {/* Title */}
        <h2 className="mt-2 font-sans text-[26px] font-medium leading-[28.6px] tracking-[-0.3px] text-[#1F2A37]">
          Healing Jogja Trip
        </h2>

        {/* Meta row */}
        <div className="mt-1.5 flex flex-wrap items-center gap-x-4 gap-y-1">
          <span className="flex items-center gap-1 font-display text-[12.5px] font-medium text-[#5B6470]">
            <MapPinIcon className="h-3.5 w-3.5" />
            Yogyakarta
          </span>
          <span className="flex items-center gap-1 font-display text-[12.5px] font-medium text-[#5B6470]">
            <CalendarIcon className="h-3.5 w-3.5" />
            3 hari
          </span>
          <span className="flex items-center gap-1 font-display text-[12.5px] font-medium text-[#5B6470]">
            <ClockIcon className="h-3.5 w-3.5" />
            8 destinasi
          </span>
          <span className="flex items-center gap-1 font-display text-[12.5px] font-medium text-[#5B6470]">
            <RouteIcon className="h-3.5 w-3.5" />
            est. 45 km
          </span>
        </div>
      </div>

      {/* Day tabs */}
      <div className="mt-4 px-5">
        <DayTabs />
      </div>

      {/* Itinerary rows */}
      <div className="mt-5 px-5">
        {rows.map((row, i) => (
          <ItineraryRow key={row.time} {...row} isLast={i === rows.length - 1} />
        ))}
      </div>

      {/* Budget */}
      <BudgetBreakdown />

      {/* AI insights */}
      <div className="mt-3 pb-3">
        <AiInsightsCard />
      </div>
    </div>
  );
}
