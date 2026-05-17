import Image from "next/image";
import Link from "next/link";
import { SparkleIcon, CheckIcon, ArrowRightIcon } from "../../components/icons";

const BULLETS = [
  "Sunset terbaik Indonesia",
  "Cocok untuk healing & slow living",
  "Ramah budget backpacker",
];

export default function FloresAIRecCard() {
  return (
    <div
      className="flex flex-col overflow-hidden rounded-[26px] bg-white"
      style={{
        border: "1px solid rgba(0,0,0,0.05)",
        boxShadow: "0px 26px 52px -24px rgba(20,30,40,0.35)",
      }}>
      {/* Hero */}
      <div className="relative h-[208px] w-full overflow-hidden">
        <Image src="/explore/flores.jpg" alt="Flores" fill className="object-cover" sizes="1362px" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/65 via-transparent to-transparent" />
        {/* AI pill */}
        <div className="absolute left-4 top-4 flex items-center gap-1.5 rounded-full bg-white/90 px-3 py-1.5">
          <SparkleIcon className="h-3 w-3 text-[#1BA1AA]" />
          <span className="font-display text-[10.5px] font-bold uppercase tracking-[0.7px] text-[#1BA1AA]">
            AI REKOMENDASI UNTUKMU
          </span>
        </div>
        {/* Title */}
        <p className="absolute bottom-4 left-4 font-sans text-[24px] font-medium leading-tight tracking-[-0.3px] text-white">
          Coba Flores untuk<br />perjalanan berikutnya.
        </p>
      </div>

      {/* Body */}
      <div className="flex flex-col gap-4 px-5 pt-5 pb-5">
        <div className="flex flex-col gap-2">
          {BULLETS.map((b) => (
            <div key={b} className="flex items-center gap-2">
              <div
                className="flex h-5 w-5 shrink-0 items-center justify-center rounded-md"
                style={{ background: "rgba(27,161,170,0.12)" }}>
                <CheckIcon className="h-3 w-3 text-[#1BA1AA]" />
              </div>
              <span className="font-display text-[14px] font-medium text-[#1F2A37]">{b}</span>
            </div>
          ))}
        </div>
        <Link
          href="/explore/flores"
          className="flex h-12 w-full items-center justify-center gap-2 rounded-full font-display text-[14.5px] font-semibold text-white transition-opacity hover:opacity-90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#1BA1AA]/70"
          style={{
            background: "#1BA1AA",
            boxShadow: "0px 14px 14px rgba(27,161,170,0.55)",
          }}>
          Jelajahi
          <ArrowRightIcon className="h-4 w-4" />
        </Link>
      </div>
    </div>
  );
}
