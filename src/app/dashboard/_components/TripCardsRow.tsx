import { TRIPS } from "../_data/trips";
import TripCard from "./TripCard";

export default function TripCardsRow() {
  return (
    <div className="scrollbar-hide -mx-5 flex gap-8 overflow-x-auto px-5 pb-2">
      {TRIPS.map((trip) => (
        <TripCard key={trip.title} {...trip} />
      ))}
    </div>
  );
}
