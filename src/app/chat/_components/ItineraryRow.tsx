import Image from "next/image";
import { ClockIcon, ExternalLinkIcon } from "../../components/icons";

type CategoryBadgeProps = {
  icon: React.ReactNode;
  label: string;
};

function CategoryBadge({ icon, label }: CategoryBadgeProps) {
  return (
    <span className="inline-flex items-center gap-1.5 rounded-full bg-[rgba(27,161,170,0.10)] px-1.5 py-0.5">
      <span className="text-[#1BA1AA]">{icon}</span>
      <span className="font-display text-[11px] font-semibold leading-[16.5px] text-[#0F6E75]">
        {label}
      </span>
    </span>
  );
}

type ItineraryRowProps = {
  time: string;
  category: string;
  categoryIcon: React.ReactNode;
  title: string;
  location: string;
  duration: string;
  price: string;
  image: string;
  imageAlt: string;
  isLast?: boolean;
};

export default function ItineraryRow({
  time,
  category,
  categoryIcon,
  title,
  location,
  duration,
  price,
  image,
  imageAlt,
  isLast,
}: ItineraryRowProps) {
  return (
    <div className="relative flex gap-6 pb-8">
      {/* Timeline */}
      <div className="relative flex shrink-0 flex-col items-center">
        <span className="mt-3 h-3 w-3 shrink-0 rounded-full border-2 border-white bg-[#1BA1AA] shadow-[0_0_0_1px_#1BA1AA]" />
        {!isLast && (
          <span className="mt-1 w-px flex-1 bg-[rgba(27,161,170,0.20)]" />
        )}
      </div>

      {/* Content */}
      <div className="flex min-w-0 flex-1 items-start gap-4">
        {/* Thumbnail */}
        <div className="relative h-16 w-16 shrink-0 overflow-hidden rounded-[12px]">
          <Image src={image} alt={imageAlt} fill className="object-cover" sizes="64px" />
        </div>

        {/* Details */}
        <div className="min-w-0 flex-1">
          {/* Time + category */}
          <div className="flex items-center gap-2">
            <span className="flex items-center gap-1 font-display text-[11px] font-semibold text-[#5B6470]">
              <ClockIcon className="h-3 w-3" />
              {time}
            </span>
            <CategoryBadge icon={categoryIcon} label={category} />
          </div>
          {/* Title */}
          <p className="mt-1.5 font-sans text-[15px] font-medium leading-[18px] tracking-[-0.1px] text-[#1F2A37]">
            {title}
          </p>
          {/* Sub-location */}
          <p className="mt-0.5 font-display text-[12.5px] font-normal text-[#5B6470]">
            {location}
          </p>
          {/* Duration + price */}
          <div className="mt-1 flex items-center gap-3">
            <span className="font-display text-[11.5px] font-medium text-[#5B6470]">⏱ {duration}</span>
            <span className="font-display text-[11.5px] font-bold text-[#1F2A37]">{price}</span>
          </div>
        </div>

        {/* Map button */}
        <button
          type="button"
          aria-label="Buka di maps"
          className="flex h-9 w-9 shrink-0 items-center justify-center rounded-[12px] bg-black/[0.05] text-[#5B6470] transition-colors hover:bg-black/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#1BA1AA]/70 focus-visible:ring-offset-2">
          <ExternalLinkIcon className="h-4 w-4" />
        </button>
      </div>
    </div>
  );
}
