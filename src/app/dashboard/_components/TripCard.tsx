import Link from "next/link";
import { ArrowRightIcon } from "../../components/icons";
import type { Trip } from "@/lib/types";

const MOOD_COLORS: Record<string, string> = {
  healing: "#1BA1AA",
  adventure: "#F59E0B",
  romantic: "#E879A0",
  "family trip": "#8B5CF6",
  backpacker: "#10B981",
  culinary: "#F97316",
  "nature escape": "#22C55E",
};

function moodColor(mood: string | null) {
  return MOOD_COLORS[(mood ?? "").toLowerCase()] ?? "#1BA1AA";
}

const CITY_IMAGES: Record<string, string> = {
  jogja: "/explore/prambanan.jpg",
  yogyakarta: "/explore/prambanan.jpg",
  bali: "/explore/ubud-sawah.jpg",
  ubud: "/explore/ubud-sawah.jpg",
  flores: "/explore/flores.jpg",
  lombok: "/explore/lombok-selatan.jpg",
};

function cityImage(city: string) {
  const key = city.toLowerCase();
  for (const [k, v] of Object.entries(CITY_IMAGES)) {
    if (key.includes(k)) return v;
  }
  return "/explore/prambanan.jpg";
}

export default function TripCard({ trip }: { trip: Trip }) {
  const isDone = trip.status === "completed";
  const color = moodColor(trip.mood);
  const img = cityImage(trip.city);
  const created = new Date(trip.created_at);
  const dateStr = created.toLocaleDateString("id-ID", {
    day: "numeric",
    month: "short",
    year: "numeric",
  });

  return (
    <div
      className="flex w-[300px] shrink-0 flex-col rounded-[26px] bg-white"
      style={{ boxShadow: "0px 24px 24px -22px rgba(20,30,40,0.4)" }}>
      {/* Hero */}
      <div
        className="relative h-[176px] w-full overflow-hidden"
        style={{ background: `url(${img}) center/cover` }}>
        <div className="absolute inset-0 bg-linear-to-b from-black/70 via-black/15 to-transparent" />
        {trip.mood && (
          <span className="absolute left-3 top-3 rounded-full bg-white/85 px-2 py-0.5 font-display text-[10.5px] font-bold uppercase tracking-[0.4px] text-[#1F2A37]">
            {trip.mood}
          </span>
        )}
        <div className="absolute bottom-3 left-3 flex flex-col gap-0.5">
          <p className="font-sans text-[19px] font-medium leading-tight tracking-[-0.2px] text-white">
            {trip.title}
          </p>
          <p className="font-display text-[11.5px] font-medium text-white/85">
            {trip.city} · {dateStr}
          </p>
        </div>
      </div>

      {/* Body */}
      <div className="flex flex-col gap-3 p-5">
        <div className="flex items-center justify-between">
          <span className="font-display text-[12.5px] font-semibold text-[#1F2A37]">
            {isDone
              ? "Kenangan tersimpan"
              : `${trip.duration_days} hari · Rp ${(trip.budget_estimate / 1_000_000).toFixed(1)}jt`}
          </span>
          <span className="font-display text-[11.5px] font-semibold text-[#5B6470]">
            {isDone ? "100%" : "—"}
          </span>
        </div>
        <div className="h-1.5 w-full overflow-hidden rounded-full bg-black/[0.05]">
          <div
            className="h-full rounded-full transition-all"
            style={{ width: isDone ? "100%" : "50%", background: color }}
          />
        </div>
        <Link
          href={trip.session_id ? `/chat?session=${trip.session_id}` : "/chat"}
          className="flex h-10 w-full items-center justify-center gap-1.5 rounded-full font-display text-[13px] font-semibold text-white transition-opacity hover:opacity-90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#1BA1AA]/70"
          style={{
            background: isDone ? "#1F2A37" : color,
            boxShadow: isDone
              ? "0px 14px 14px rgba(31,42,55,0.5)"
              : `0px 14px 14px rgba(27,161,170,0.55)`,
          }}>
          {isDone ? "Lihat kenangan" : "Lanjutkan trip"}
          <ArrowRightIcon className="h-3.5 w-3.5" />
        </Link>
      </div>
    </div>
  );
}
