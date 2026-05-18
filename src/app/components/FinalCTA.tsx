"use client";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useState } from "react";
import TealButton from "./TealButton";
import ScrollReveal from "./ScrollReveal";

function SparkleIcon({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg">
      <path d="M12 2L13.5 9.5L21 12L13.5 14.5L12 22L10.5 14.5L3 12L10.5 9.5L12 2Z" />
      <path d="M19 2L19.7 4.3L22 5L19.7 5.7L19 8L18.3 5.7L16 5L18.3 4.3L19 2Z" />
      <path d="M5 17L5.5 18.5L7 19L5.5 19.5L5 21L4.5 19.5L3 19L4.5 18.5L5 17Z" />
    </svg>
  );
}

export default function FinalCTA() {
  const router = useRouter();
  const [query, setQuery] = useState("");

  return (
    <section className="relative overflow-hidden py-24 text-center sm:py-32">
      {/* Background photo */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/FinalCTAbg.jpg"
          alt=""
          fill
          sizes="100vw"
          className="object-cover"
        />
      </div>
      {/* Overlay */}
      <div className="absolute inset-0 z-0 bg-black/45" />

      {/* Content */}
      <ScrollReveal className="relative z-10 mx-auto max-w-3xl px-4 sm:px-8">
        {/* Badge */}
        <div className="inline-flex items-center gap-2 rounded-full bg-white/15 px-4 py-2 backdrop-blur-sm mb-8">
          <span className="break-words font-display text-[11.5px] font-semibold leading-[17.25px] tracking-[0.8px] text-white">
            MULAI HARI INI · GRATIS
          </span>
        </div>

        {/* Heading */}
        <h2 className="mb-5 break-words font-sans text-[40px] font-medium leading-[42px] text-white sm:mb-6 sm:text-[60px] sm:leading-[63px]">
          Mulai rencanakan
          <br />
          perjalananmu <span className="text-[#FDBF3A]">sekarang</span>
          <span>.</span>
        </h2>

        {/* Subtitle */}
        <p className="mb-8 break-words font-display text-[15px] font-normal leading-[23.25px] text-white/85 sm:mb-10 sm:text-base sm:leading-[24.8px]">
          Satu kalimat — Nusaplan menyusun semuanya untukmu.
        </p>

        {/* Search bar */}
        <div className="mx-auto mb-4 flex max-w-2xl flex-col items-stretch gap-3 rounded-[28px] bg-white px-4 py-3.5 shadow-2xl focus-within:ring-2 focus-within:ring-[#FDBF3A]/80 sm:flex-row sm:items-center sm:rounded-full sm:px-5">
          <SparkleIcon className="hidden h-5 w-5 flex-shrink-0 text-teal-500 sm:block" />
          <label htmlFor="final-cta-query" className="sr-only">
            Rencana perjalanan
          </label>
          <input
            id="final-cta-query"
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Healing 3 hari di Jogja budget 1 juta..."
            className="min-h-9 flex-1 break-words bg-transparent text-center font-display text-[15px] font-medium text-gray-800 outline-none placeholder:text-[#9AA3AD] sm:text-left"
          />
          <TealButton
            onClick={() => router.push("/chat")}
            className="flex-shrink-0 gap-1 px-6 py-2.5 font-display text-sm font-semibold leading-[21px]">
            Plan
          </TealButton>
        </div>

        {/* Hint */}
        <p className="mt-4 break-words font-display text-[12.5px] font-normal leading-[18.75px] text-white/65">
          Tanpa login. Tanpa form panjang.
        </p>
      </ScrollReveal>
    </section>
  );
}
