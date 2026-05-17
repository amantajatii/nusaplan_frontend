import Link from "next/link";
import { SparkleIcon, MicIcon, CompassIcon, ArrowRightIcon, ShareIcon, RefreshIcon } from "./icons";

const destinations = [
  { name: "Bali", country: "Indonesia", tag: "Healing", seed: "bali-terraces" },
  {
    name: "Raja Ampat",
    country: "Indonesia",
    tag: "Nature Escape",
    seed: "raja-ampat-islands",
  },
  {
    name: "Yogyakarta",
    country: "Indonesia",
    tag: "Culture",
    seed: "yogyakarta-temple",
  },
  {
    name: "Lombok",
    country: "Indonesia",
    tag: "Adventure",
    seed: "lombok-mountain",
  },
  {
    name: "Bromo",
    country: "Indonesia",
    tag: "Sunrise",
    seed: "bromo-volcano",
  },
  {
    name: "Flores",
    country: "Indonesia",
    tag: "Backpacker",
    seed: "flores-island",
  },
];

export default function PopularDestinations() {
  return (
    <section className="overflow-hidden bg-[#FAF7F1] py-20 sm:py-24 lg:py-28">
      {/* Header */}
      <div className="relative mx-auto mb-10 flex max-w-[1024px] flex-col gap-4 px-4 lg:mb-12 lg:h-[82.59px] lg:px-0">
        <div className="lg:absolute lg:left-0 lg:top-1">
          <p className="break-words font-display text-[13px] font-semibold uppercase leading-[19.5px] tracking-[1.2px] text-[#1BA1AA]">
            POPULAR · TRENDING
          </p>
          <h2 className="mt-2 max-w-160 break-words font-sans text-[34px] font-medium leading-[39px] text-[#1F2A37] sm:text-[36px] sm:leading-[41.4px] lg:mt-[8.5px] lg:text-[44px] lg:leading-[50.6px]">
            Inspirasi yang sedang dijelajahi
          </h2>
        </div>
        <p className="max-w-[384px] break-words font-display text-[15px] font-normal leading-[22.5px] text-[#5B6470] lg:absolute lg:left-[640px] lg:top-[36.59px]">
          Geser untuk melihat destinasi favorit yang dipilih traveler minggu
          ini.
        </p>
      </div>

      {/* Scrollable cards */}
      <div className="scrollbar-hide relative z-0 mt-12 flex gap-4 overflow-x-auto pb-12 pl-4 sm:gap-6 md:pl-16 lg:mt-20">
        {destinations.map((dest) => (
          <Link
            key={dest.name}
            href="/explore"
            className="group relative h-[360px] w-[82vw] max-w-[320px] flex-none overflow-hidden rounded-[24px] bg-white/0 shadow-[0px_20px_50px_-20px_rgba(20,30,40,0.35)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#1BA1AA]/70 focus-visible:ring-offset-4 focus-visible:ring-offset-[#FAF7F1] sm:h-[426.66px] sm:w-[320px] sm:rounded-[28px]">
            {/* Photo */}
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={`https://picsum.photos/seed/${dest.seed}/640/854`}
              alt={dest.name}
              className="absolute inset-0 h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
              loading="lazy"
            />
            {/* Gradient overlay */}
            <div className="absolute inset-0 bg-[linear-gradient(0deg,rgba(0,0,0,0.75)_0%,rgba(0,0,0,0.10)_50%,rgba(0,0,0,0)_100%)]" />
            {/* Category badge */}
            <span className="absolute left-4 top-4 inline-flex h-[21px] items-start rounded-full bg-white/85 px-2.5 py-1 font-display text-[11px] font-semibold leading-[16.5px] tracking-[0.4px] text-[#1F2A37]">
              {dest.tag}
            </span>
            {/* Name + country */}
            <div className="absolute bottom-5 left-5 flex w-[calc(100%-40px)] max-w-[280px] flex-col items-start gap-1">
              <p className="break-words font-sans text-[26px] font-medium leading-[28.6px] text-white">
                {dest.name}
              </p>
              <p className="break-words font-display text-[13px] font-normal leading-[19.5px] text-white/80">
                {dest.country}
              </p>
            </div>
          </Link>
        ))}
        {/* Right padding spacer */}
        <div className="flex-none w-16" />
      </div>
      <div className="relative z-20 -mt-16 flex w-full justify-center px-4 pb-4 sm:-mt-13">
        <div className="inline-flex min-h-[54px] w-full max-w-2xl flex-wrap items-center justify-start gap-2 rounded-[28px] bg-white/90 p-1.5 shadow-2xl ring-1 ring-inset ring-black/[0.05] sm:h-[54px] sm:flex-nowrap sm:rounded-full">
          <Link
            href="/chat"
            className="relative z-10 inline-flex h-10 w-full flex-none items-center justify-center gap-1.5 rounded-full bg-[#1BA1AA] font-display text-sm font-semibold text-white transition-colors hover:bg-[#168D95] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#FDBF3A]/80 sm:flex-1"
            style={{ boxShadow: "0px 14px 30px -10px rgba(27,161,170,0.55)" }}>
            <span>Coba sendiri</span>
            <ArrowRightIcon className="h-4 w-4" />
          </Link>
          <button
            type="button"
            className="inline-flex h-10 w-[calc(50%-4px)] items-center justify-center gap-1.5 rounded-full bg-black/[0.05] font-display text-[13.5px] font-semibold leading-[20.25px] text-[#1F2A37] transition-colors duration-150 hover:bg-black/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#1BA1AA]/70 focus-visible:ring-offset-2 focus-visible:ring-offset-white sm:w-[102.33px]">
            <ShareIcon className="h-4 w-4" />
            <span>Bagikan</span>
          </button>
          <button
            type="button"
            className="inline-flex h-10 w-[calc(50%-4px)] items-center justify-center gap-1.5 rounded-full bg-black/[0.05] px-3 font-display text-[13px] font-semibold leading-[19.5px] text-[#1F2A37] transition-colors duration-150 hover:bg-black/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#1BA1AA]/70 focus-visible:ring-offset-2 focus-visible:ring-offset-white sm:w-42 sm:px-4 sm:text-[13.5px] sm:leading-[20.25px]">
            <RefreshIcon className="h-4 w-4 text-[#1BA1AA]" />
            <span>Minta AI Ubah</span>
          </button>
        </div>
      </div>
      <div className="relative z-20 flex h-[76px] w-full justify-center px-4">
        <div className="pointer-events-none absolute left-0 top-9 h-10 w-full bg-[linear-gradient(0deg,#FAF7F1_0%,rgba(250,247,241,0)_100%)]" />
        <div className="relative inline-flex h-[62px] w-full max-w-[672px] items-center justify-start gap-2 rounded-full bg-white/90 p-2 shadow-[0px_30px_60px_-20px_rgba(20,30,40,0.35)] ring-1 ring-inset ring-black/[0.05]">
          <button
            type="button"
            aria-label="Buka ide perjalanan"
            className="relative h-10 w-10 shrink-0 rounded-full bg-black/[0.05] text-[#1BA1AA] transition-colors duration-150 hover:bg-black/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#1BA1AA]/70 focus-visible:ring-offset-2 focus-visible:ring-offset-white">
            <SparkleIcon className="absolute left-3 top-3 h-4 w-4" />
          </button>
          <div className="flex h-[38.5px] min-w-0 flex-1 items-center overflow-hidden px-1 py-2">
            <span className="truncate font-display text-[15px] font-medium text-[#9AA3AD]">
              Healing 3 hari di Jogja budget 1 juta...
            </span>
          </div>
          <button
            type="button"
            aria-label="Pakai suara"
            className="relative hidden h-10 w-10 shrink-0 rounded-full bg-black/[0.05] text-[#1F2A37] transition-colors duration-150 hover:bg-black/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#1BA1AA]/70 focus-visible:ring-offset-2 focus-visible:ring-offset-white sm:block">
            <MicIcon className="absolute left-3 top-3 h-4 w-4" />
          </button>
          <Link
            href="/chat"
            aria-label="Mulai rencana"
            className="relative z-10 inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-[#1BA1AA] text-white transition-colors hover:bg-[#168D95] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#FDBF3A]/80"
            style={{ boxShadow: "0px 14px 30px -10px rgba(27,161,170,0.55)" }}>
            <CompassIcon className="h-4 w-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}
