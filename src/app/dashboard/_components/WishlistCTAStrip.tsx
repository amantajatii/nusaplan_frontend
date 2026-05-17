import Link from "next/link";
import { SparkleIcon, ArrowRightIcon } from "../../components/icons";

export default function WishlistCTAStrip() {
  return (
    <Link
      href="/chat"
      className="flex h-[62px] w-full items-center justify-between rounded-2xl px-4 transition-opacity hover:opacity-90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#1BA1AA]/70"
      style={{
        background: "rgba(27,161,170,0.06)",
        border: "1px solid rgba(27,161,170,0.2)",
      }}>
      <div className="flex items-center gap-3">
        <div
          className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full"
          style={{ background: "linear-gradient(135deg, #1BA1AA 0%, #2CC9C8 100%)" }}>
          <SparkleIcon className="h-4 w-4 text-white" />
        </div>
        <span className="font-display text-[13.5px] font-semibold text-[#1F2A37]">
          Buat itinerary dari wishlist ini
        </span>
      </div>
      <ArrowRightIcon className="h-4 w-4 text-[#5B6470]" />
    </Link>
  );
}
