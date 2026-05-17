import { DESTINATIONS } from "../_data/destinations";
import DestinationCard from "./DestinationCard";

export default function DestinationGrid() {
  return (
    <div className="columns-1 gap-3 sm:columns-2 lg:columns-3">
      {DESTINATIONS.map((dest) => (
        <div key={dest.slug} className="mb-3 break-inside-avoid">
          <DestinationCard
            slug={dest.slug}
            image={dest.image}
            alt={dest.alt}
            category={dest.category}
            name={dest.name}
            location={dest.location}
            price={dest.price}
            duration={dest.duration}
            trending={dest.trending}
            height={dest.height}
          />
        </div>
      ))}
    </div>
  );
}
