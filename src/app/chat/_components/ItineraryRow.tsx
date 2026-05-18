import type { Activity } from "@/lib/types";
import { ClockIcon, ExternalLinkIcon } from "../../components/icons";

const CATEGORY_COLORS: Record<string, string> = {
  food: "#FDBF3A",
  kuliner: "#FDBF3A",
  transport: "#5B6470",
  penginapan: "#1BA1AA",
  accommodation: "#1BA1AA",
  activity: "#1F2A37",
  wisata: "#1F2A37",
  other: "#9AA3AD",
};

function categoryColor(cat: string) {
  return CATEGORY_COLORS[cat.toLowerCase()] ?? CATEGORY_COLORS.other;
}

function CategoryBadge({ label }: { label: string }) {
  return (
    <span className="inline-flex items-center gap-1.5 rounded-full bg-[rgba(27,161,170,0.10)] px-1.5 py-0.5">
      <span className="font-display text-[11px] font-semibold leading-[16.5px] text-[#0F6E75]">
        {label}
      </span>
    </span>
  );
}

export default function ItineraryRow({
  activity,
  isLast,
}: {
  activity: Activity;
  isLast?: boolean;
}) {
  const mapsHref = activity.maps_query
    ? `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(activity.maps_query)}`
    : null;

  return (
    <div className="relative flex gap-6 pb-8">
      {/* Timeline */}
      <div className="relative flex shrink-0 flex-col items-center">
        <span className="mt-3 h-3 w-3 shrink-0 rounded-full border-2 border-white bg-[#1BA1AA] shadow-[0_0_0_1px_#1BA1AA]" />
        {!isLast && <span className="mt-1 w-px flex-1 bg-[rgba(27,161,170,0.20)]" />}
      </div>

      {/* Content */}
      <div className="flex min-w-0 flex-1 items-start gap-4">
        {/* Color placeholder thumbnail */}
        <div
          className="h-16 w-16 shrink-0 rounded-xl"
          style={{ background: categoryColor(activity.category), opacity: 0.18 }}
        />

        {/* Details */}
        <div className="min-w-0 flex-1">
          <div className="flex items-center gap-2">
            <span className="flex items-center gap-1 font-display text-[11px] font-semibold text-[#5B6470]">
              <ClockIcon className="h-3 w-3" />
              {activity.time}
            </span>
            <CategoryBadge label={activity.category} />
          </div>
          <p className="mt-1.5 font-sans text-[15px] font-medium leading-4.5 tracking-[-0.1px] text-[#1F2A37]">
            {activity.place_name}
          </p>
          <p className="mt-0.5 font-display text-[12.5px] font-normal text-[#5B6470]">
            {activity.description}
          </p>
          <div className="mt-1 flex items-center gap-3">
            <span className="font-display text-[11.5px] font-bold text-[#1F2A37]">
              Rp {activity.estimated_cost.toLocaleString("id-ID")}
            </span>
          </div>
        </div>

        {/* Map button */}
        {mapsHref ? (
          <a
            href={mapsHref}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Buka di maps"
            className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-black/5 text-[#5B6470] transition-colors hover:bg-black/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#1BA1AA]/70 focus-visible:ring-offset-2">
            <ExternalLinkIcon className="h-4 w-4" />
          </a>
        ) : (
          <div className="h-9 w-9 shrink-0" />
        )}
      </div>
    </div>
  );
}
