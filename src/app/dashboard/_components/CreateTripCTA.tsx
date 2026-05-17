import Link from "next/link";
import { SparkleIcon } from "../../components/icons";

export default function CreateTripCTA() {
  return (
    <Link
      href="/chat"
      className="relative block overflow-hidden rounded-[28px] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#FDBF3A]/80"
      style={{
        height: 134,
        background: "linear-gradient(174.4deg, #1BA1AA 0%, #16868D 50%, #0F5E63 100%)",
        boxShadow: "0px 30px 60px -25px rgba(27,161,170,0.7)",
      }}>
      {/* Decor gold blob */}
      <div
        className="pointer-events-none absolute rounded-full"
        style={{
          width: 192,
          height: 192,
          top: -48,
          right: -24,
          filter: "blur(40px)",
          opacity: 0.3,
          background: "radial-gradient(circle, rgba(253,191,58,0.8) 0%, rgba(253,191,58,0.3) 60%, transparent 100%)",
        }}
      />
      <div className="relative flex h-full items-center justify-between px-6">
        <div className="flex flex-col gap-1.5">
          <span
            className="inline-flex w-fit items-center gap-1 rounded-full px-2.5 py-1 font-display text-[10.5px] font-semibold tracking-[0.6px] text-white"
            style={{ background: "rgba(255,255,255,0.15)" }}>
            <SparkleIcon className="h-3 w-3" />
            AI READY
          </span>
          <h2 className="font-sans text-[28px] font-medium leading-tight tracking-[-0.4px] text-white">
            Buat trip baru
          </h2>
          <p className="font-display text-[13.5px] font-normal text-white/80">
            Ceritakan idemu, AI menyusun sisanya dalam hitungan detik.
          </p>
        </div>
        <div
          className="flex h-14 w-14 shrink-0 items-center justify-center rounded-full"
          style={{ background: "rgba(255,255,255,0.18)", border: "1px solid rgba(255,255,255,0.3)" }}>
          <SparkleIcon className="h-6 w-6 text-white" />
        </div>
      </div>
    </Link>
  );
}
