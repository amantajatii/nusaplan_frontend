"use client";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useState } from "react";
import TealButton from "./TealButton";

function SparkleIcon({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true">
      <path d="M12 2L13.5 9.5L21 12L13.5 14.5L12 22L10.5 14.5L3 12L10.5 9.5L12 2Z" />
      <path d="M19 2L19.7 4.3L22 5L19.7 5.7L19 8L18.3 5.7L16 5L18.3 4.3L19 2Z" />
      <path d="M5 17L5.5 18.5L7 19L5.5 19.5L5 21L4.5 19.5L3 19L4.5 18.5L5 17Z" />
    </svg>
  );
}

function ArrowRightIcon({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true">
      <path
        d="M6 3.5L10.5 8L6 12.5"
        stroke="currentColor"
        strokeWidth="1.33"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function MapPinIcon({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 14 14"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true">
      <path
        d="M7 12.25C7 12.25 11.0833 8.75 11.0833 5.54167C11.0833 3.2865 9.25517 1.45833 7 1.45833C4.74484 1.45833 2.91667 3.2865 2.91667 5.54167C2.91667 8.75 7 12.25 7 12.25Z"
        stroke="currentColor"
        strokeWidth="1.17"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M7 7.29167C7.9665 7.29167 8.75 6.50816 8.75 5.54167C8.75 4.57517 7.9665 3.79167 7 3.79167C6.0335 3.79167 5.25 4.57517 5.25 5.54167C5.25 6.50816 6.0335 7.29167 7 7.29167Z"
        stroke="currentColor"
        strokeWidth="1.17"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

const MOODS = [
  "Healing",
  "Adventure",
  "Romantic",
  "Family Trip",
  "Backpacker",
  "Culinary",
  "Nature Escape",
];

export default function HeroSection() {
  const router = useRouter();
  const [query, setQuery] = useState("");
  const [selectedMood, setSelectedMood] = useState<string | null>(null);

  function handleMoodClick(mood: string) {
    setSelectedMood(mood === selectedMood ? null : mood);
  }

  function handleSuggestion() {
    setQuery("healing 3 hari di Jogja budget 1 juta");
  }

  return (
    <section className="relative flex min-h-screen items-center justify-center overflow-hidden px-4 py-24 sm:px-6 md:py-28">
      {/* Background photo */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/Herobg.jpg"
          alt=""
          fill
          preload
          sizes="100vw"
          className="object-cover"
        />
      </div>
      {/* Dark overlay */}
      <div className="absolute inset-0 z-0 bg-black/45" />

      {/* Content */}
      <div className="relative z-10 mx-auto flex w-full max-w-[1024px] flex-col items-center text-center">
        {/* Badge */}
        <div className="mb-3 inline-flex min-h-8 max-w-full items-center gap-2 rounded-full bg-white/10 px-4 py-1.5 ring-1 ring-inset ring-white/20 backdrop-blur-sm md:mb-[5px] md:h-8 md:py-0">
          <SparkleIcon className="h-3.5 w-3.5 text-[#FDBF3A]" />
          <span className="break-words font-display text-[11px] font-medium uppercase leading-[16.5px] tracking-[0.4px] text-white/90 sm:text-xs sm:leading-[18px]">
            AI TRAVEL PLANNER · INDONESIA
          </span>
        </div>

        {/* Heading */}
        <h1 className="mb-5 w-full break-words text-center font-sans text-[40px] leading-[42px] sm:text-[52px] sm:leading-[54.6px] md:mb-6 md:text-[72px] md:leading-[75.6px]">
          <span className="block font-medium text-white">
            Ceritakan Perjalananmu.
          </span>
          <span className="font-normal text-[#FDBF3A]">AI Menyusun</span>
          <span className="font-medium text-white"> Sisanya.</span>
        </h1>

        {/* Subtitle */}
        <div className="mb-10 flex min-h-[52.69px] w-full items-start justify-center sm:mb-14 md:mb-20">
          <p className="w-full max-w-[1013.52px] break-words text-center font-display text-[15px] font-light leading-[23.25px] text-white/80 sm:text-[17px] sm:leading-[26.35px]">
            Cukup satu kalimat. AI akan menyusun itinerary terbaik untuk
            liburanmu di Indonesia — otomatis, personal, instan.
          </p>
        </div>

        {/* Search bar */}
        <div className="mb-7 flex w-full flex-col items-center gap-3">
          <div
            className="flex min-h-[62px] w-full items-center gap-2 rounded-full bg-white/95 px-3 ring-1 ring-inset ring-white/40 focus-within:ring-2 focus-within:ring-[#FDBF3A]/80 sm:h-[70px] sm:px-[11px]"
            style={{
              boxShadow:
                "inset 0px 0px 0px 1px rgba(255, 255, 255, 0.08), 0px 30px 80px -20px rgba(0, 0, 0, 0.45)",
            }}>
            <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#1BA1AA]/12 sm:h-11 sm:w-11">
              <SparkleIcon className="h-4 w-4 text-[#1BA1AA] sm:h-5 sm:w-5" />
            </div>
            <label htmlFor="hero-query" className="sr-only">
              Rencana perjalanan
            </label>
            <input
              id="hero-query"
              type="text"
              autoComplete="off"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Healing 3 hari di Jogja budget 1 juta..."
              className="h-12 min-w-0 flex-1 overflow-hidden bg-transparent px-1 font-display text-sm font-normal leading-[21px] text-[#6B7280] outline-none placeholder:text-[#6B7280] sm:text-[15px] sm:leading-[22.5px]"
            />
            <TealButton
              onClick={() => router.push("/chat")}
              className="h-10 shrink-0 justify-start gap-1 px-4 font-display text-sm font-semibold leading-[21px] sm:h-11 sm:gap-1.5 sm:px-5">
              <span>Plan</span>
              <ArrowRightIcon className="h-4 w-4" />
            </TealButton>
          </div>

          <div className="flex min-h-[18.75px] w-full flex-wrap items-center justify-center gap-x-3 gap-y-1.5 text-center">
            <span className="break-words font-display text-[12.5px] font-normal leading-[18.75px] text-white/70">
              Tanpa login · Tanpa form panjang
            </span>
            <span
              className="h-1 w-1 rounded-full bg-white/40"
              aria-hidden="true"
            />
            <span className="break-words font-display text-[12.5px] font-normal leading-[18.75px] text-white/90">
              Coba:
            </span>
            <button
              type="button"
              onClick={handleSuggestion}
              className="break-words rounded-full font-display text-[12.5px] font-semibold leading-[18.75px] text-[#FDBF3A] transition-colors duration-150 hover:text-[#ffd168] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#FDBF3A]/80 focus-visible:ring-offset-2 focus-visible:ring-offset-black">
              healing 3 hari di Jogja budget 1 juta
            </button>
            <span className="break-words font-display text-[12.5px] font-normal leading-[18.75px] text-white/90">
              →
            </span>
          </div>
        </div>

        {/* Mood picker */}
        <div className="flex w-full flex-col items-center gap-3">
          <div className="inline-flex h-[18px] w-full items-center justify-center gap-2">
            <div className="h-px flex-1 bg-white/15" />
            <span className="shrink-0 break-words font-display text-[11px] font-medium uppercase leading-[16.5px] tracking-[1px] text-white/70 sm:text-xs sm:leading-[18px]">
              ATAU PILIH SUASANA
            </span>
            <div className="h-px flex-1 bg-white/15" />
          </div>
          <div className="flex w-full flex-wrap justify-center gap-2.5 overflow-hidden">
            {MOODS.map((mood) => (
              selectedMood === mood ? (
                <TealButton
                  key={mood}
                  onClick={() => handleMoodClick(mood)}
                  className="break-words border border-[#1BA1AA] px-3.5 py-2 text-center font-display text-[13px] font-medium leading-[19.5px] sm:px-[17px] sm:py-[9px] sm:text-[13.5px] sm:leading-[20.25px]">
                  {mood}
                </TealButton>
              ) : (
                <button
                  key={mood}
                  type="button"
                  onClick={() => handleMoodClick(mood)}
                  className="rounded-full border border-white/25 bg-white/12 px-3.5 py-2 break-words text-center font-display text-[13px] font-medium leading-[19.5px] text-white shadow-[0px_4px_16px_-6px_rgba(0,0,0,0.30)] transition-all duration-150 hover:border-white/40 hover:bg-white/18 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#FDBF3A]/80 focus-visible:ring-offset-2 focus-visible:ring-offset-black sm:px-[17px] sm:py-[9px] sm:text-[13.5px] sm:leading-[20.25px]">
                  {mood}
                </button>
              )
            ))}
          </div>
        </div>

        <div className="mt-10 flex w-full items-center justify-center gap-3 sm:mt-14">
          <MapPinIcon className="h-3.5 w-3.5 shrink-0 text-[#FDBF3A]" />
          <span className="break-words font-display text-[12.5px] font-normal leading-[18.75px] text-white/70">
            17.508 pulau · ribuan kemungkinan
          </span>
        </div>
      </div>
    </section>
  );
}
