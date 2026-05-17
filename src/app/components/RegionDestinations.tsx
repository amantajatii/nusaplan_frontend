"use client";
import { useState } from "react";
import TealButton from "./TealButton";

const TABS = ["Jawa", "Bali", "Sulawesi", "NTT", "Papua"];

type Destination = {
  name: string;
  location: string;
  tag: string;
  seed: string;
};

const DESTINATIONS: Record<string, Destination[]> = {
  Jawa: [
    {
      name: "Yogyakarta",
      location: "Jawa, Indonesia",
      tag: "Culture",
      seed: "yogyakarta-temple",
    },
    {
      name: "Bromo",
      location: "Jawa, Indonesia",
      tag: "Adventure",
      seed: "bromo-volcano",
    },
    {
      name: "Dieng",
      location: "Jawa, Indonesia",
      tag: "Nature Escape",
      seed: "dieng-plateau",
    },
  ],
  Bali: [
    {
      name: "Ubud",
      location: "Bali, Indonesia",
      tag: "Healing",
      seed: "ubud-bali",
    },
    {
      name: "Seminyak",
      location: "Bali, Indonesia",
      tag: "Romantic",
      seed: "seminyak-beach",
    },
    {
      name: "Nusa Penida",
      location: "Bali, Indonesia",
      tag: "Adventure",
      seed: "nusa-penida",
    },
  ],
  Sulawesi: [
    {
      name: "Bunaken",
      location: "Sulawesi, Indonesia",
      tag: "Nature Escape",
      seed: "bunaken-reef",
    },
    {
      name: "Toraja",
      location: "Sulawesi, Indonesia",
      tag: "Culture",
      seed: "toraja-village",
    },
    {
      name: "Gorontalo",
      location: "Sulawesi, Indonesia",
      tag: "Adventure",
      seed: "gorontalo-lake",
    },
  ],
  NTT: [
    {
      name: "Labuan Bajo",
      location: "NTT, Indonesia",
      tag: "Adventure",
      seed: "labuan-bajo-dragons",
    },
    {
      name: "Kelimutu",
      location: "NTT, Indonesia",
      tag: "Nature Escape",
      seed: "kelimutu-lakes",
    },
    {
      name: "Sumba",
      location: "NTT, Indonesia",
      tag: "Romantic",
      seed: "sumba-island",
    },
  ],
  Papua: [
    {
      name: "Raja Ampat",
      location: "Papua, Indonesia",
      tag: "Nature Escape",
      seed: "raja-ampat-2",
    },
    {
      name: "Wamena",
      location: "Papua, Indonesia",
      tag: "Adventure",
      seed: "wamena-highland",
    },
    {
      name: "Triton Bay",
      location: "Papua, Indonesia",
      tag: "Romantic",
      seed: "triton-bay",
    },
  ],
};

export default function RegionDestinations() {
  const [activeTab, setActiveTab] = useState("Papua");

  const cards = DESTINATIONS[activeTab] ?? [];

  return (
    <section className="bg-[#FAF7F1] py-20 sm:py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-8">
        <p className="text-xs font-semibold tracking-[0.18em] text-teal-500 mb-4 uppercase">
          Explore by Region
        </p>
        <h2 className="mb-8 font-display text-[34px] font-bold leading-[39px] text-gray-900 sm:text-4xl sm:leading-tight">
          Pilih pulaumu, mulai ceritamu.
        </h2>

        {/* Filter tabs */}
        <div className="scrollbar-hide mb-10 flex gap-3 overflow-x-auto pb-1">
          {TABS.map((tab) => (
            activeTab === tab ? (
              <TealButton
                key={tab}
                onClick={() => setActiveTab(tab)}
                className="shrink-0 cursor-pointer px-5 py-2 text-sm font-medium">
                {tab}
              </TealButton>
            ) : (
              <button
                key={tab}
                type="button"
                onClick={() => setActiveTab(tab)}
                className="shrink-0 cursor-pointer rounded-full border border-gray-200 bg-white px-5 py-2 text-sm font-medium text-gray-700 transition-colors hover:border-gray-300">
                {tab}
              </button>
            )
          ))}
        </div>

        {/* Cards grid */}
        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3 lg:gap-6">
          {cards.map((card, i) => (
            <div
              key={card.name}
              className={`group relative h-[320px] cursor-pointer overflow-hidden rounded-2xl sm:h-[360px] ${
                i === 0 ? "lg:h-[429px]" : "lg:h-[413px]"
              }`}>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={`https://picsum.photos/seed/${card.seed}/660/860`}
                alt={card.name}
                className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
              {/* Gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
              {/* Badge */}
              <span className="absolute top-3 left-3 rounded-full bg-white/20 backdrop-blur-sm border border-white/30 px-3 py-1 text-xs text-white font-medium">
                {card.tag}
              </span>
              {/* Bottom info */}
              <div className="absolute bottom-4 left-4">
                <p className="font-display font-bold text-white text-xl">
                  {card.name}
                </p>
                <p className="text-white/70 text-sm">{card.location}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
